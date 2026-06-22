import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import {
	getW1cAssetBasePath,
	getW1cIcon,
	resolveW1cAssetUrl,
	setW1cAssetBasePath,
	setW1cAssetBasePaths,
	W1C_ICON_LICENSE_REVIEW,
	W1C_ICON_METADATA,
	W1C_ICON_NAMES,
	W1C_ICONS
} from '..';

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../..');

type PackageExportTarget = string | { import?: string; types?: string };
type PackageManifest = { exports: Record<string, PackageExportTarget> };

const packageJson = JSON.parse(readFileSync(resolve(packageRoot, 'package.json'), 'utf8')) as PackageManifest;
const importableExports = Object.entries(packageJson.exports).filter(
	([, target]) => typeof target !== 'string' && target.import
);
const fileExports = Object.entries(packageJson.exports).filter((entry): entry is [string, string] => {
	const [, target] = entry;
	return typeof target === 'string';
});

function sourceImportFor(target: PackageExportTarget) {
	const importTarget = typeof target === 'string' ? target : target.import;
	if (!importTarget) throw new Error('Package export does not define an import target.');

	return importTarget.replace('./dist/', '../').replace(/\.js$/, '.ts');
}

function sourceFileFor(target: string) {
	return target
		.replace('./dist/themes/', './src/themes/')
		.replace('./dist/styles/', './src/styles/')
		.replace('./dist/static/', './public/');
}

describe('icon lookup', () => {
	it('returns icon data for every bundled icon name', () => {
		expect(W1C_ICON_NAMES.length).toBeGreaterThan(0);

		for (const name of W1C_ICON_NAMES) {
			expect(getW1cIcon(name)).toBe(W1C_ICONS[name]);
			expect(W1C_ICONS[name].body).toContain('<');
		}
	});

	it('returns undefined for unknown icon names', () => {
		expect(getW1cIcon('missing-icon')).toBeUndefined();
	});

	it('keeps metadata and license review attached to the icon set', () => {
		for (const name of W1C_ICON_NAMES) {
			expect(W1C_ICON_METADATA[name]).toMatchObject({
				name,
				sourceReferenceProject: expect.any(String),
				sourceIconName: expect.any(String),
				sourceUrl: expect.any(String),
				license: expect.any(String),
				attribution: expect.any(String),
				intendedSize: expect.any(Number)
			});
		}

		expect(W1C_ICON_LICENSE_REVIEW.references.length).toBeGreaterThan(0);
	});
});

describe('asset base-path resolution', () => {
	it('sets, gets, trims, and applies asset base paths', () => {
		setW1cAssetBasePath('icons', '/assets/icons/');

		expect(getW1cAssetBasePath('icons')).toBe('/assets/icons');
		expect(resolveW1cAssetUrl('icons', 'w1c.svg')).toBe('/assets/icons/w1c.svg');
		expect(resolveW1cAssetUrl('icons', '/absolute.svg')).toBe('/absolute.svg');
		expect(resolveW1cAssetUrl('icons', 'https://cdn.example/icon.svg')).toBe('https://cdn.example/icon.svg');

		setW1cAssetBasePaths({ sprites: '/sprites/', images: '/images' });

		expect(resolveW1cAssetUrl('sprites', 'ui/window.png')).toBe('/sprites/ui/window.png');
		expect(resolveW1cAssetUrl('images', 'hero.png')).toBe('/images/hero.png');
	});
});

describe('documented package export paths', () => {
	it.each(importableExports)('imports %s', async (_exportPath, target) => {
		const module = await import(sourceImportFor(target));

		expect(Object.keys(module).length).toBeGreaterThan(0);
	});

	it.each(fileExports)('points %s to an existing file', (_exportPath, target) => {
		expect(existsSync(resolve(packageRoot, sourceFileFor(target)))).toBe(true);
	});
});
