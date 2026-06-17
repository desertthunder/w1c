import { DOCS_THEMES, type DocsTheme } from './theme.svelte';

export type ThemeCatalogEntry = DocsTheme & {
	href: string;
	importPath: string;
	source: string;
	sourceUrl: string;
	sources?: { name: string; url: string }[];
	license: string;
	notes: string;
	swatches: string[];
};

const themeExtras: Record<string, Omit<ThemeCatalogEntry, keyof DocsTheme>> = {
	'windows-95': {
		href: '/docs/themes/windows-95/',
		importPath: '@w1c/components/themes/windows-95.css',
		source: 'Tempest and old Microsoft interfaces',
		sourceUrl: 'https://tangled.org/desertthunder.dev/tempest',
		license: 'W1C theme CSS: MIT',
		notes: 'Flat gray controls, teal desktop color, hard titlebar blues, and raised/sunken command chrome.',
		swatches: ['#c0c0c0', '#000080', '#008080', '#ffffff']
	},
	gnome2: {
		href: '/docs/themes/gnome2/',
		importPath: '@w1c/components/themes/gnome2.css',
		source: 'GNOME 2 UI',
		sourceUrl: 'https://tangled.org/desertthunder.dev/ibex',
		license: 'W1C theme CSS: MIT',
		notes: 'Warm tan panels, compact Ubuntu-era spacing, blue active selections, and softly rounded controls.',
		swatches: ['#d8d2c3', '#204a87', '#3b2418', '#fffdf6']
	},
	'ubuntu-810': {
		href: '/docs/themes/ubuntu-810/',
		importPath: '@w1c/components/themes/ubuntu-810.css',
		source: 'Intrepid Ibex / Ubuntu 8.10',
		sourceUrl: 'https://tangled.org/desertthunder.dev/ibex',
		license: 'W1C theme CSS: MIT',
		notes: 'Human-brown titlebars, orange focus accents, glassy toolbar gradients, and Ubuntu font defaults.',
		swatches: ['#d6d0c8', '#8b3f16', '#c35a21', '#5b2b18']
	},
	'classic-mac': {
		href: '/docs/themes/classic-mac/',
		importPath: '@w1c/components/themes/classic-mac.css',
		source: 'system.css, AjaxIronside, and Recreating Classic Macintosh System 7 in CSS',
		sourceUrl: 'https://github.com/sakofchit/system.css/',
		sources: [
			{ name: 'system.css', url: 'https://github.com/sakofchit/system.css/' },
			{ name: 'AjaxIronside', url: 'https://ajaxironside.github.io/' },
			{ name: 'Recreating Classic Macintosh System 7 in CSS', url: 'https://bbenchoff.github.io/pages/system7.html' }
		],
		license: 'W1C theme CSS: MIT; system.css reference: MIT',
		notes: 'Black-and-white System-style frames, centered titlebars, striped chrome, and Chicago-like type.',
		swatches: ['#ffffff', '#000000', '#dddddd', '#777777']
	},
	'web-1': {
		href: '/docs/themes/web-1/',
		importPath: '@w1c/components/themes/web-1.css',
		source: 'Web 1.0 and early browser UI.',
		sourceUrl: 'https://en.wikipedia.org/wiki/Web_2.0#Web_1.0',
		license: 'W1C theme CSS: MIT',
		notes: 'Ridge borders, system fonts, high-contrast blue links, and plain HTML-era document surfaces.',
		swatches: ['#d7e6ff', '#003399', '#cc0000', '#ffffff']
	},
	geocities: {
		href: '/docs/themes/geocities/',
		importPath: '@w1c/components/themes/geocities.css',
		source: 'GeoCities and personal homepages.',
		sourceUrl: 'https://en.wikipedia.org/wiki/GeoCities',
		license: 'W1C theme CSS: MIT',
		notes:
			'Loud yellow panels, magenta frames, cyan shadows, high-saturation links, counters, badges, and construction stripes.',
		swatches: ['#ffff00', '#ff66cc', '#00ffff', '#660099']
	}
};

export const THEME_CATALOG: ThemeCatalogEntry[] = DOCS_THEMES.map((theme) => ({ ...theme, ...themeExtras[theme.id] }));

export function getThemeCatalogEntry(themeId: string) {
	return THEME_CATALOG.find((theme) => theme.id === themeId);
}
