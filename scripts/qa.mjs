import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, extname, join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const npmCache = resolve('/tmp', 'w1c-qa-npm-cache');

/**
 * Packages that are intended to be published directly to npm.
 *
 * Docs and Storybook stay private apps, so this gate ignores them for export and pack
 * validation.
 *
 * @type {{ name: string; dir: string }[]}
 */
const publishablePackages = [
	{ name: '@w1c/components', dir: 'packages/lib' },
	{ name: '@w1c/dnd', dir: 'packages/dnd' },
	{ name: '@w1c/fonts', dir: 'packages/fonts' },
	{ name: '@w1c/cli', dir: 'packages/cli' }
];

/**
 * Public docs and package READMEs that contain user-facing import examples.
 *
 * The export gate scans these files to keep documented paths aligned with package
 * manifests.
 */
const docsRoots = [
	'README.md',
	'packages/lib/README.md',
	'packages/dnd/README.md',
	'packages/fonts/README.md',
	'packages/cli/README.md',
	'packages/docs/src'
];
const packageDirsByName = new Map(publishablePackages.map((pkg) => [pkg.name, resolve(root, pkg.dir)]));

const command = process.argv[2] ?? 'all';

if (!['all', 'exports', 'pack'].includes(command)) {
	fail(`Unknown QA gate "${command}". Use "exports", "pack", or "all".`);
}

if (command === 'exports' || command === 'all') {
	await checkExports();
}

if (command === 'pack' || command === 'all') {
	checkPackDryRuns();
}

/**
 * Verifies that every documented `@w1c/*` import is exported, every package export points
 * to a built file, and every JavaScript entrypoint can be imported by Node.
 */
async function checkExports() {
	const documentedImports = collectDocumentedImports();

	for (const pkg of publishablePackages) {
		const packageRoot = resolve(root, pkg.dir);
		const manifest = readJson(resolve(packageRoot, 'package.json'));
		const documentedPaths = documentedImports.get(pkg.name) ?? new Set(['.']);
		const exportPaths = new Set(Object.keys(manifest.exports ?? {}));

		for (const documentedPath of documentedPaths) {
			if (!exportPaths.has(documentedPath)) {
				fail(
					`${pkg.name} documents ${formatExportPath(pkg.name, documentedPath)} but does not export ${documentedPath}.`
				);
			}
		}

		for (const [exportPath, target] of Object.entries(manifest.exports ?? {})) {
			await verifyExportTarget(pkg.name, packageRoot, exportPath, target);
		}
	}

	log('Package exports match documented import paths and built files.');
}

/**
 * Runs `npm pack --dry-run --json` for each publishable package and checks for the
 * expected runtime artifacts without shipping source, tests, or stories.
 */
function checkPackDryRuns() {
	for (const pkg of publishablePackages) {
		const packageRoot = resolve(root, pkg.dir);
		const result = spawnSync('npm', ['pack', '--dry-run', '--json'], {
			cwd: packageRoot,
			env: { ...process.env, npm_config_cache: npmCache },
			encoding: 'utf8',
			stdio: ['ignore', 'pipe', 'pipe']
		});

		if (result.status !== 0) {
			fail(`${pkg.name} npm pack --dry-run failed:\n${result.stderr || result.stdout}`);
		}

		const packResult = JSON.parse(result.stdout)[0];
		const files = packResult.files.map((file) => file.path);

		if (!files.includes('package.json') || !files.includes('README.md')) {
			fail(`${pkg.name} pack output must include package.json and README.md.`);
		}

		if (files.some((file) => file.startsWith('src/') || file.includes('.test.') || file.includes('.stories.'))) {
			fail(`${pkg.name} pack output includes source, test, or story files.`);
		}

		if (pkg.name !== '@w1c/fonts' && !files.some((file) => file.startsWith('dist/') && /\.(m?js)$/.test(file))) {
			fail(`${pkg.name} pack output does not include built JavaScript.`);
		}

		if (pkg.name !== '@w1c/fonts' && !files.some((file) => file.startsWith('dist/') && /\.d\.[cm]?ts$/.test(file))) {
			fail(`${pkg.name} pack output does not include type declarations.`);
		}

		if (pkg.name === '@w1c/fonts' && !files.some((file) => file.startsWith('dist/') && file.endsWith('.css'))) {
			fail(`${pkg.name} pack output does not include font CSS.`);
		}
	}

	log('Dry-run npm packs include runtime files only.');
}

/**
 * Validates one package export target from package.json.
 *
 * @param {string} packageName
 * @param {string} packageRoot
 * @param {string} exportPath
 * @param {string | { import?: string; types?: string }} target
 */
async function verifyExportTarget(packageName, packageRoot, exportPath, target) {
	if (typeof target === 'string') {
		assertFile(packageName, packageRoot, exportPath, target);
		return;
	}

	if (!target || typeof target !== 'object') {
		fail(`${packageName} export ${exportPath} must point to a string or conditional object.`);
	}

	if (target.import) {
		const importFile = assertFile(packageName, packageRoot, exportPath, target.import);
		await import(pathToFileURL(importFile).href);
	}

	if (target.types) {
		assertFile(packageName, packageRoot, exportPath, target.types);
	}
}

/**
 * Resolves an export target and fails if it does not point at an existing relative file.
 *
 * @param {string} packageName
 * @param {string} packageRoot
 * @param {string} exportPath
 * @param {string} target
 */
function assertFile(packageName, packageRoot, exportPath, target) {
	if (!target.startsWith('./')) {
		fail(`${packageName} export ${exportPath} uses a non-relative target: ${target}`);
	}

	const filePath = resolve(packageRoot, target);
	if (!existsSync(filePath)) {
		fail(`${packageName} export ${exportPath} points at a missing file: ${target}`);
	}

	return filePath;
}

/**
 * Reads public docs and returns package export paths mentioned in actual import examples.
 */
function collectDocumentedImports() {
	const importsByPackage = new Map(publishablePackages.map((pkg) => [pkg.name, new Set()]));
	const pattern = /@w1c\/(?:components|dnd|fonts|cli)(?:\/[A-Za-z0-9._/-]+)?/g;

	for (const docsRoot of docsRoots) {
		const absoluteRoot = resolve(root, docsRoot);
		for (const filePath of listFiles(absoluteRoot)) {
			const text = readFileSync(filePath, 'utf8');

			for (const [rawMatch] of text.matchAll(pattern)) {
				const match = normalizeDocumentedImport(rawMatch);
				if (!match) continue;

				const packageName = packageNameForImport(match);
				const exportPath = exportPathForImport(packageName, match);
				importsByPackage.get(packageName)?.add(exportPath);
			}
		}
	}

	return importsByPackage;
}

/**
 * Drops package-name mentions from prose while keeping actual import paths and root import
 * statements such as `import '@w1c/components'`.
 *
 * @param {string} match
 */
function normalizeDocumentedImport(match) {
	const packageName = packageNameForImport(match);
	if (!packageDirsByName.has(packageName)) return null;

	const suffix = match.slice(packageName.length);
	if (suffix.endsWith('/index.js')) return null;
	if (!suffix && !looksLikeRootImport(match)) return null;

	return match;
}

/**
 * Checks whether a bare package mention appears in import syntax rather than prose.
 *
 * @param {string} match
 */
function looksLikeRootImport(match) {
	return new RegExp(`(?:import\\s+['"]${escapeRegExp(match)}['"]|from\\s+['"]${escapeRegExp(match)}['"])`).test(
		readDocsText()
	);
}

function packageNameForImport(importPath) {
	const [scope, name] = importPath.split('/');
	return `${scope}/${name}`;
}

function exportPathForImport(packageName, importPath) {
	const suffix = importPath.slice(packageName.length);
	return suffix ? `.${suffix}` : '.';
}

function formatExportPath(packageName, exportPath) {
	return exportPath === '.' ? packageName : `${packageName}${exportPath.slice(1)}`;
}

function listFiles(path) {
	if (!existsSync(path)) return [];
	if (statSync(path).isFile()) return [path];

	const entries = readdirSync(path, { withFileTypes: true });
	const files = [];

	for (const entry of entries) {
		const child = join(path, entry.name);
		if (entry.isDirectory()) {
			if (entry.name === 'node_modules' || entry.name === 'build' || entry.name === '.svelte-kit') continue;
			files.push(...listFiles(child));
		} else if (['.md', '.svelte', '.ts', '.js'].includes(extname(entry.name))) {
			files.push(child);
		}
	}

	return files;
}

function readJson(path) {
	return JSON.parse(readFileSync(path, 'utf8'));
}

/**
 * Cached concatenation of scanned docs, used for root-import detection.
 */
function readDocsText() {
	if (!readDocsText.cache) {
		readDocsText.cache = docsRoots
			.flatMap((docsRoot) => listFiles(resolve(root, docsRoot)))
			.map((filePath) => readFileSync(filePath, 'utf8'))
			.join('\n');
	}

	return readDocsText.cache;
}

function escapeRegExp(value) {
	return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function log(message) {
	console.log(`qa: ${message}`);
}

function fail(message) {
	console.error(`qa: ${message}`);
	process.exit(1);
}
