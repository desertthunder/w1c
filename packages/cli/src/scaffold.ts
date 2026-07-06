import fsExtra from 'fs-extra';
import { dirname, relative, resolve, sep } from 'node:path';

/** Theme import names supported by CLI scaffolding. */
export const W1C_THEMES = ['gnome2', 'ubuntu-810', 'windows-95', 'classic-mac', 'web-1', 'geocities'] as const;

/** Valid theme name accepted by `w1c create`, `w1c init`, and `w1c add theme`. */
export type W1cTheme = (typeof W1C_THEMES)[number];

/** Project starter templates supported by `w1c create`. */
export const W1C_TEMPLATES = ['bundler', 'static-html', 'static-site', 'server-rendered'] as const;

/** Valid project template name accepted by `w1c create`. */
export type W1cTemplate = (typeof W1C_TEMPLATES)[number];

/** Options for commands that add theme imports to a browser entry file. */
export type AddThemeOptions = { entry?: string; targetDir?: string };

/** Options for copying icon assets and writing the asset base-path config module. */
export type AddIconsOptions = AddThemeOptions & { publicDir?: string; basePath?: string; config?: string };

/** Options for adding W1C to an existing project. */
export type InitOptions = AddThemeOptions & { theme?: string };

/** Options for creating a new W1C starter project. */
export type CreateOptions = InitOptions & { template?: string };

/** Default browser entry file for bundler-based templates and project edits. */
export const DEFAULT_ENTRY = 'src/main.ts';

/** Default theme used when a command does not receive an explicit theme. */
export const DEFAULT_THEME: W1cTheme = 'windows-95';

/** Default starter template used by `w1c create`. */
export const DEFAULT_TEMPLATE: W1cTemplate = 'bundler';

const iconSprite = `<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="w1c-folder" viewBox="0 0 16 16"><path d="M1 4h5l1 2h8v7H1zM2 5v1h4.38l-1-1zM2 7v5h12V7z"/></symbol>
  <symbol id="w1c-document" viewBox="0 0 16 16"><path d="M3 1h7l3 3v11H3zM4 2v12h8V5H9V2zM10 2.5V4h1.5zM5 7h6v1H5zm0 3h6v1H5z"/></symbol>
  <symbol id="w1c-warning" viewBox="0 0 16 16"><path d="M8 1 1 14h14zm0 2.1 5.32 9.9H2.68zM7.5 6h1v4h-1zm0 5h1v1h-1z"/></symbol>
</svg>
`;

function targetDirFrom(options: { targetDir?: string } = {}) {
	return resolve(options.targetDir ?? process.cwd());
}

function targetPath(path: string, options: { targetDir?: string } = {}) {
	return resolve(targetDirFrom(options), path);
}

/** Converts user input to a known theme name and keeps error messages consistent. */
function normalizeTheme(theme: string): W1cTheme {
	if (W1C_THEMES.includes(theme as W1cTheme)) return theme as W1cTheme;
	throw new Error(`Unknown W1C theme "${theme}". Use one of: ${W1C_THEMES.join(', ')}`);
}

function normalizeThemes(themes: string[] | undefined) {
	const requested = themes && themes.length > 0 ? themes : [DEFAULT_THEME];
	return requested.map(normalizeTheme);
}

/** Converts user input to a known starter template. */
function normalizeTemplate(template: string | undefined): W1cTemplate {
	if (!template) return DEFAULT_TEMPLATE;
	if (W1C_TEMPLATES.includes(template as W1cTemplate)) return template as W1cTemplate;

	throw new Error(`Unknown W1C template "${template}". Use one of: ${W1C_TEMPLATES.join(', ')}`);
}

/** Builds a relative ESM import from one generated file to another. */
function importPath(fromFile: string, toFile: string) {
	let path = relative(dirname(fromFile), toFile).split(sep).join('/');
	path = path.replace(/\.[cm]?tsx?$/, '');
	if (!path.startsWith('.')) path = `./${path}`;
	return path;
}

/** Prepends imports once so repeated CLI runs do not duplicate setup lines. */
async function prependMissingLines(path: string, lines: string[]) {
	const current = (await fsExtra.pathExists(path)) ? await fsExtra.readFile(path, 'utf8') : '';
	const missing = lines.filter((line) => !current.includes(line));
	if (missing.length === 0) return false;

	await fsExtra.ensureDir(dirname(path));
	const body = current.length > 0 ? `${missing.join('\n')}\n${current}` : `${missing.join('\n')}\n`;
	await fsExtra.writeFile(path, body);
	return true;
}

/** Adds one or more theme CSS imports to a project entry file. */
export async function addThemes(themes: string[] | undefined, options: AddThemeOptions = {}) {
	const entryPath = targetPath(options.entry ?? DEFAULT_ENTRY, options);
	const imports = normalizeThemes(themes).map((theme) => `import '@w1c/components/themes/${theme}.css';`);
	await prependMissingLines(entryPath, imports);
	return { entryPath, themes: normalizeThemes(themes) };
}

/** Adds the all-components registration import to a project entry file. */
export async function addComponentImport(options: AddThemeOptions = {}) {
	const entryPath = targetPath(options.entry ?? DEFAULT_ENTRY, options);
	await prependMissingLines(entryPath, ["import '@w1c/components';"]);
	return { entryPath };
}

/** Adds W1C component registration and one theme import to an existing project. */
export async function initProject(options: InitOptions = {}) {
	await addComponentImport(options);
	return addThemes([options.theme ?? DEFAULT_THEME], options);
}

/** Copies the starter icon sprite and wires `setW1cAssetBasePaths` into the entry file. */
export async function addIcons(options: AddIconsOptions = {}) {
	const targetDir = targetDirFrom(options);
	const publicDir = resolve(targetDir, options.publicDir ?? 'public');
	const iconDir = resolve(publicDir, 'w1c/icons');
	const iconFile = resolve(iconDir, 'w1c-icons.svg');
	const configPath = resolve(targetDir, options.config ?? 'src/w1c-assets.ts');
	const entryPath = targetPath(options.entry ?? DEFAULT_ENTRY, options);
	const basePath = options.basePath ?? '/w1c/icons';

	await fsExtra.ensureDir(iconDir);
	await fsExtra.writeFile(iconFile, iconSprite);
	await fsExtra.ensureDir(dirname(configPath));
	await fsExtra.writeFile(
		configPath,
		`import { setW1cAssetBasePaths } from '@w1c/components/assets';\n\nsetW1cAssetBasePaths({ icons: '${basePath}' });\n`
	);

	await prependMissingLines(entryPath, [`import '${importPath(entryPath, configPath)}';`]);
	return { basePath, configPath, entryPath, iconFile };
}

/** Writes the package manifest used by bundler-based templates. */
function packageJson(name: string) {
	return `${JSON.stringify(
		{
			name,
			private: true,
			type: 'module',
			scripts: { dev: 'vite', build: 'vite build', preview: 'vite preview' },
			dependencies: { '@w1c/components': 'workspace:*' },
			devDependencies: { vite: '^8.0.16', typescript: '~6.0.2' }
		},
		null,
		2
	)}\n`;
}

/** Shared example markup used by every starter template. */
function w1cWindowMarkup(title: string, theme: string) {
	return `<w1c-window title="${title}">
			<w1c-toolbar slot="toolbar">
				<w1c-button><w1c-icon name="back" label="Back"></w1c-icon> Back</w1c-button>
				<w1c-button><w1c-icon name="folder" label="Open"></w1c-icon> Open</w1c-button>
			</w1c-toolbar>

			<h1>Welcome to W1C</h1>
			<p>This page imports W1C components and the ${theme} theme explicitly.</p>

			<w1c-statusbar slot="statusbar">Theme: ${theme}</w1c-statusbar>
		</w1c-window>`;
}

/** Wraps starter markup in a complete HTML document. */
function htmlPage(title: string, body: string, head = '<script type="module" src="/src/main.ts"></script>') {
	return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>${title}</title>
		${head}
	</head>
	<body>
		${body}
	</body>
</html>
`;
}

/** Head imports for templates that expect prebuilt W1C files to be served statically. */
function staticAssetHead(theme: string, basePath: string) {
	return `<link rel="stylesheet" href="${basePath}/themes/${theme}.css" />
		<script type="module" src="${basePath}/components/index.js"></script>`;
}

async function createBundlerProject(targetDir: string, name: string, theme: string, options: CreateOptions) {
	await fsExtra.ensureDir(`${targetDir}/src`);
	await fsExtra.writeFile(`${targetDir}/package.json`, packageJson(name));
	await fsExtra.writeFile(`${targetDir}/index.html`, htmlPage('W1C App', w1cWindowMarkup('W1C File Manager', theme)));
	await initProject({ targetDir, entry: options.entry, theme });
}

async function createStaticHtmlProject(targetDir: string, theme: string) {
	await fsExtra.ensureDir(`${targetDir}/assets/w1c`);
	await fsExtra.writeFile(
		`${targetDir}/index.html`,
		htmlPage('W1C Static HTML', w1cWindowMarkup('Static HTML', theme), staticAssetHead(theme, './assets/w1c'))
	);
	await fsExtra.writeFile(
		`${targetDir}/assets/w1c/README.md`,
		`Copy W1C built component files, themes, styles, fonts, and icon assets into this directory.\n\nExpected theme path for this template: ./assets/w1c/themes/${theme}.css\n`
	);
}

async function createStaticSiteProject(targetDir: string, name: string, theme: string, options: CreateOptions) {
	await createBundlerProject(targetDir, name, theme, options);
	await fsExtra.ensureDir(`${targetDir}/pages`);
	await fsExtra.writeFile(
		`${targetDir}/pages/about.html`,
		htmlPage(
			'About W1C Site',
			`<main>
			${w1cWindowMarkup('About This Site', theme)}
		</main>`
		)
	);
}

async function createServerRenderedProject(targetDir: string, theme: string) {
	await fsExtra.ensureDir(`${targetDir}/templates`);
	await fsExtra.writeFile(
		`${targetDir}/templates/page.html`,
		htmlPage('W1C Server Template', w1cWindowMarkup('Server Rendered', theme), staticAssetHead(theme, '/static/w1c'))
	);
	await fsExtra.writeFile(
		`${targetDir}/README.md`,
		`# W1C server-rendered template\n\nUse \`templates/page.html\` from Rails, Phoenix, Django, Express, or another server renderer. Serve W1C built files from \`/static/w1c\`.\n`
	);
}

/**
 * @summary Creates one of the supported W1C starter projects.
 *
 * @todo (desertthunder) 2026-07-06: add a "server-rendered" template that copies the starter HTML
 * into a template file and adds a README with instructions for Rails, Phoenix, Django, etc.
 * */
export async function createProject(dir: string, options: CreateOptions = {}) {
	const targetDir = resolve(dir);
	const name = dir.split(/[\\/]/).filter(Boolean).at(-1) ?? 'my-w1c-app';
	const template = normalizeTemplate(options.template);
	const theme = options.theme ?? DEFAULT_THEME;
	switch (template) {
		case 'bundler': {
			await createBundlerProject(targetDir, name, theme, options);
			break;
		}
		case 'static-html': {
			await createStaticHtmlProject(targetDir, theme);
			break;
		}
		case 'static-site': {
			await createStaticSiteProject(targetDir, name, theme, options);
			break;
		}
		case 'server-rendered': {
			await createServerRenderedProject(targetDir, theme);
			break;
		}
		default:
			throw new Error(`Unknown W1C template "${template}". Use one of: ${W1C_TEMPLATES.join(', ')}`);
	}

	return { targetDir, template, theme };
}
