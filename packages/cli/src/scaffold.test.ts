import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, expect, test } from 'vitest';
import { normalizeAddOpts, resolveProjectDir } from './helpers';
import { addIcons, addThemes, createProject, initProject } from './scaffold';

const cleanup: string[] = [];

async function tempProject() {
	const dir = await mkdtemp(join(tmpdir(), 'w1c-cli-'));
	cleanup.push(dir);

	return dir;
}

afterEach(async () => {
	await Promise.all(cleanup.splice(0).map((dir) => rm(dir, { recursive: true, force: true })));
});

test('createProject writes W1C component and theme setup', async () => {
	const dir = await tempProject();
	await createProject(dir, { theme: 'geocities' });
	await expect(readFile(join(dir, 'index.html'), 'utf8')).resolves.toContain('<w1c-window title="W1C File Manager">');
	await expect(readFile(join(dir, 'src/main.ts'), 'utf8')).resolves.toBe(
		"import '@w1c/components/themes/geocities.css';\nimport '@w1c/components';\n"
	);
});

test('createProject writes a static HTML template', async () => {
	const dir = await tempProject();
	await createProject(dir, { template: 'static-html', theme: 'web-1' });

	await expect(readFile(join(dir, 'index.html'), 'utf8')).resolves.toContain(
		'<link rel="stylesheet" href="./assets/w1c/themes/web-1.css" />'
	);
	await expect(readFile(join(dir, 'assets/w1c/README.md'), 'utf8')).resolves.toContain('./assets/w1c/themes/web-1.css');
});

test('createProject writes a static site template', async () => {
	const dir = await tempProject();
	await createProject(dir, { template: 'static-site', theme: 'classic-mac' });

	await expect(readFile(join(dir, 'src/main.ts'), 'utf8')).resolves.toContain('@w1c/components/themes/classic-mac.css');
	await expect(readFile(join(dir, 'pages/about.html'), 'utf8')).resolves.toContain(
		'<w1c-window title="About This Site">'
	);
});

test('createProject writes a server-rendered template', async () => {
	const dir = await tempProject();
	await createProject(dir, { template: 'server-rendered', theme: 'ubuntu-810' });

	await expect(readFile(join(dir, 'templates/page.html'), 'utf8')).resolves.toContain(
		'<link rel="stylesheet" href="/static/w1c/themes/ubuntu-810.css" />'
	);
	await expect(readFile(join(dir, 'README.md'), 'utf8')).resolves.toContain(
		'Serve W1C built files from `/static/w1c`.'
	);
});

test('initProject adds imports without duplicating them', async () => {
	const dir = await tempProject();
	await initProject({ targetDir: dir, theme: 'ubuntu-810' });
	await initProject({ targetDir: dir, theme: 'ubuntu-810' });
	await expect(readFile(join(dir, 'src/main.ts'), 'utf8')).resolves.toBe(
		"import '@w1c/components/themes/ubuntu-810.css';\nimport '@w1c/components';\n"
	);
});

test('addThemes supports more than one theme import', async () => {
	const dir = await tempProject();
	await addThemes(['gnome2', 'windows-95'], { targetDir: dir });
	await expect(readFile(join(dir, 'src/main.ts'), 'utf8')).resolves.toBe(
		"import '@w1c/components/themes/gnome2.css';\nimport '@w1c/components/themes/windows-95.css';\n"
	);
});

test('addIcons copies a sprite and configures the asset base path', async () => {
	const dir = await tempProject();
	await addIcons({ targetDir: dir });
	await expect(readFile(join(dir, 'public/w1c/icons/w1c-icons.svg'), 'utf8')).resolves.toContain(
		'<symbol id="w1c-folder"'
	);

	await expect(readFile(join(dir, 'src/w1c-assets.ts'), 'utf8')).resolves.toBe(
		"import { setW1cAssetBasePaths } from '@w1c/components/assets';\n\nsetW1cAssetBasePaths({ icons: '/w1c/icons' });\n"
	);

	await expect(readFile(join(dir, 'src/main.ts'), 'utf8')).resolves.toBe("import './w1c-assets';\n");
});

test('resolveProjectDirectory uses the provided dir before prompting', async () => {
	const dir = await resolveProjectDir('already-set', async () => {
		throw new Error('prompt should not run');
	});

	expect(dir).toBe('already-set');
});

test('resolveProjectDirectory uses prompt output when dir is missing', async () => {
	await expect(resolveProjectDir(undefined, async () => 'prompted-app')).resolves.toBe('prompted-app');
});

test('normalizeAddOptions maps icon aliases to scaffold options', () => {
	expect(normalizeAddOpts({ pub: 'static', conf: 'src/assets.ts' })).toMatchObject({
		publicDir: 'static',
		config: 'src/assets.ts'
	});
});
