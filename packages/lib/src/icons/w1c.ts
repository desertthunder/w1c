import type { IconData, IconMetadata } from './types';

export const W1C_ICONS = {
	computer: { width: 16, height: 16, body: '<path d="M2 2h12v8H2zM3 3v6h10V3zM6 11h4v2h3v1H3v-1h3z"/>' },
	folder: { width: 16, height: 16, body: '<path d="M1 4h5l1 2h8v7H1zM2 5v1h4.38l-1-1zM2 7v5h12V7z"/>' },
	document: {
		width: 16,
		height: 16,
		body: '<path d="M3 1h7l3 3v11H3zM4 2v12h8V5H9V2zM10 2.5V4h1.5zM5 7h6v1H5zm0 3h6v1H5z"/>'
	},
	globe: {
		width: 16,
		height: 16,
		body: '<path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M4.18 4h1.5a8 8 0 0 0-.5 3H3.08a5.9 5.9 0 0 1 1.1-3M3.08 9h2.1c.08 1.12.25 2.12.5 3h-1.5a5.9 5.9 0 0 1-1.1-3M7 12a9.8 9.8 0 0 1-.75-3H7zm0-5h-.75A9.8 9.8 0 0 1 7 4zm0-4H6.12c.28-.26.58-.48.88-.64zm2-.64c.3.16.6.38.88.64H9zM9 4h.75c.36.8.62 1.82.75 3H9zm0 8V9h1.5a9.8 9.8 0 0 1-.75 3zm2.82 0h-1.5c.25-.88.42-1.88.5-3h2.1a5.9 5.9 0 0 1-1.1 3m1.1-5h-2.1a8 8 0 0 0-.5-3h1.5a5.9 5.9 0 0 1 1.1 3"/>'
	},
	image: { width: 16, height: 16, body: '<path d="M2 3h12v10H2zM3 4v8h10V4zm2 2h2v2H5zm-1 5 3-3 2 2 1-1 2 2z"/>' },
	palette: {
		width: 16,
		height: 16,
		body: '<path d="M8 2a6 6 0 0 0-6 6c0 2.76 2.24 5 5 5h1.5a1.5 1.5 0 0 0 0-3H8a1 1 0 0 1 0-2h2.5A2.5 2.5 0 0 0 13 5.5C13 3.57 10.76 2 8 2M5 7H4V6h1zm2-2H6V4h1zm3 0H9V4h1zm1.5 2H10V6h1.5z"/>'
	},
	info: {
		width: 16,
		height: 16,
		body: '<path d="M7 3h2v2H7zm-2 4V6h4v6h2v1H5v-1h2V7zM8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m0 1a6 6 0 1 1 0 12A6 6 0 0 1 8 2"/>'
	},
	warning: { width: 16, height: 16, body: '<path d="M8 1 1 14h14zm0 2.1 5.32 9.9H2.68zM7.5 6h1v4h-1zm0 5h1v1h-1z"/>' }
} as const satisfies Record<string, IconData>;

export type W1cIconName = keyof typeof W1C_ICONS;

export const W1C_ICON_NAMES = Object.keys(W1C_ICONS) as W1cIconName[];

export const W1C_ICON_METADATA = {
	computer: {
		name: 'computer',
		category: 'device',
		sourceReferenceProject: 'W1C',
		sourceIconName: 'computer',
		sourceUrl: 'https://github.com/desertthunder',
		license: 'MIT',
		attribution: 'Original W1C icon.',
		intendedSize: 16
	},
	folder: {
		name: 'folder',
		category: 'file',
		sourceReferenceProject: 'W1C',
		sourceIconName: 'folder',
		sourceUrl: 'https://github.com/desertthunder',
		license: 'MIT',
		attribution: 'Original W1C icon.',
		intendedSize: 16
	},
	document: {
		name: 'document',
		category: 'file',
		sourceReferenceProject: 'W1C',
		sourceIconName: 'document',
		sourceUrl: 'https://github.com/desertthunder',
		license: 'MIT',
		attribution: 'Original W1C icon.',
		intendedSize: 16
	},
	globe: {
		name: 'globe',
		category: 'network',
		sourceReferenceProject: 'W1C',
		sourceIconName: 'globe',
		sourceUrl: 'https://github.com/desertthunder',
		license: 'MIT',
		attribution: 'Original W1C icon.',
		intendedSize: 16
	},
	image: {
		name: 'image',
		category: 'media',
		sourceReferenceProject: 'W1C',
		sourceIconName: 'image',
		sourceUrl: 'https://github.com/desertthunder',
		license: 'MIT',
		attribution: 'Original W1C icon.',
		intendedSize: 16
	},
	palette: {
		name: 'palette',
		category: 'tool',
		sourceReferenceProject: 'W1C',
		sourceIconName: 'palette',
		sourceUrl: 'https://github.com/desertthunder',
		license: 'MIT',
		attribution: 'Original W1C icon.',
		intendedSize: 16
	},
	info: {
		name: 'info',
		category: 'status',
		sourceReferenceProject: 'W1C',
		sourceIconName: 'info',
		sourceUrl: 'https://github.com/desertthunder',
		license: 'MIT',
		attribution: 'Original W1C icon.',
		intendedSize: 16
	},
	warning: {
		name: 'warning',
		category: 'status',
		sourceReferenceProject: 'W1C',
		sourceIconName: 'warning',
		sourceUrl: 'https://github.com/desertthunder',
		license: 'MIT',
		attribution: 'Original W1C icon.',
		intendedSize: 16
	}
} as const satisfies Record<W1cIconName, IconMetadata>;

export function getW1cIcon(name: string): IconData | undefined {
	return Object.hasOwn(W1C_ICONS, name) ? W1C_ICONS[name as W1cIconName] : undefined;
}
