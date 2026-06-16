import type { IconData, IconMetadata } from './types';

const w1cSourceUrl = 'https://github.com/desertthunder';
const w1cAttribution = [
	'W1C-normalized icon data.',
	'Windows-style icons are based on Wikimedia Commons references;',
	'other icon coverage sources are in the project README.md.'
].join(' ');

const icon = (body: string, width = 16, height = 16): IconData => ({ width, height, body });

const metadata = (name: string, category: string): IconMetadata => ({
	name,
	category,
	sourceReferenceProject: 'W1C',
	sourceIconName: name,
	sourceUrl: w1cSourceUrl,
	license: 'MIT',
	attribution: w1cAttribution,
	intendedSize: 16
});

export type W1cIconName = keyof typeof W1C_ICONS;

/**
 * @todo - add the following
 *  - Netscape Navigator
 */
export const W1C_ICONS = {
	'align-left': icon('<path d="M2 3h12v1H2zm0 3h9v1H2zm0 3h12v1H2zm0 3h8v1H2z"/>'),
	at: icon(
		'<path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032c-3.35 0-5.646 2.318-5.646 5.702c0 3.493 2.235 5.708 5.762 5.708c.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328c-2.926 0-4.813-1.88-4.813-4.798c0-2.844 1.921-4.881 4.594-4.881c2.735 0 4.608 1.688 4.608 4.156c0 1.682-.554 2.769-1.416 2.769c-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964c-1.4 0-2.378 1.162-2.378 2.823c0 1.737.957 2.906 2.379 2.906c.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148c1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907c.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914" />'
	),
	back: icon('<path d="M7 3 2 8l5 5V9h7V7H7z"/>'),
	bold: icon(
		'<path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823c0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244c0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415c0 .943-.643 1.449-1.832 1.449H5.907z" />'
	),
	browser: icon('<path d="M2 2h12v12H2zm1 1v2h10V3zm0 3v7h10V6zm1-2h1v1H4zm2 0h1v1H6z"/>'),
	close: icon('<path d="m4 3 4 4 4-4 1 1-4 4 4 4-1 1-4-4-4 4-1-1 4-4-4-4z"/>'),
	computer: icon('<path d="M2 2h12v8H2zM3 3v6h10V3zM6 11h4v2h3v1H3v-1h3z"/>'),
	danger: icon(
		'<path d="M0 0h24v24H0z" fill="none"/><g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m13.414 2.808l7.778 7.778a2 2 0 0 1 0 2.829l-7.778 7.778a2 2 0 0 1-2.828 0l-7.778-7.778a2 2 0 0 1 0-2.829l7.778-7.778a2 2 0 0 1 2.828 0M12 4.222L4.222 12L12 19.78L19.778 12zM12.002 15a1 1 0 0 1 .117 1.993l-.117.007a1 1 0 0 1-.119-1.993zM12 8c.867 0 1.538.76 1.43 1.62l-.438 3.504a1 1 0 0 1-1.984 0L10.57 9.62A1.44 1.44 0 0 1 12 8"/></g>',
		24,
		24
	),
	database: icon(
		'<path d="M8 2c3.3 0 6 1 6 2.5v7C14 13 11.3 14 8 14s-6-1-6-2.5v-7C2 3 4.7 2 8 2m0 1C5 3 3 3.8 3 4.5S5 6 8 6s5-.8 5-1.5S11 3 8 3M3 6v2.5C3 9.2 5 10 8 10s5-.8 5-1.5V6C11.9 6.65 10 7 8 7s-3.9-.35-5-1m0 4v1.5C3 12.2 5 13 8 13s5-.8 5-1.5V10c-1.1.65-3 .95-5 .95S4.1 10.65 3 10"/>'
	),
	document: icon('<path d="M3 1h7l3 3v11H3zM4 2v12h8V5H9V2zM10 2.5V4h1.5zM5 7h6v1H5zm0 3h6v1H5z"/>'),
	'file-manager': icon('<path d="M1 3h5l1 2h8v8H1zm1 1v1h4.38l-1-1zm0 2v6h12V6zM4 8h8v1H4zm0 2h5v1H4z"/>'),
	folder: icon('<path d="M1 4h5l1 2h8v7H1zM2 5v1h4.38l-1-1zM2 7v5h12V7z"/>'),
	forward: icon('<path d="m9 3 5 5-5 5V9H2V7h7z"/>'),
	github: icon(
		'<path d="M8 1.5A6.5 6.5 0 0 0 6 14c.32.06.44-.14.44-.31v-1.1c-1.8.39-2.18-.78-2.18-.78-.3-.75-.72-.95-.72-.95-.58-.4.05-.39.05-.39.65.05 1 .67 1 .67.58.98 1.52.7 1.9.53.06-.42.22-.7.4-.86-1.44-.16-2.95-.72-2.95-3.2 0-.7.25-1.28.66-1.73-.07-.16-.29-.82.06-1.7 0 0 .54-.18 1.78.66A6.2 6.2 0 0 1 8 4.62c.52 0 1.06.07 1.56.21 1.24-.84 1.78-.66 1.78-.66.35.88.13 1.54.06 1.7.41.45.66 1.03.66 1.73 0 2.49-1.52 3.04-2.96 3.2.23.2.44.6.44 1.2v1.7c0 .17.12.37.45.3A6.5 6.5 0 0 0 8 1.5"/>'
	),
	globe: icon(
		'<path d="M0 0h24v24H0z" fill="none"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18c2.761 0 3.941-5.163 3.941-9S14.761 3 12 3m0 18c-2.761 0-3.941-5.163-3.941-9S9.239 3 12 3M3.5 9h17m-17 6h17"/>',
		24,
		24
	),
	highlight: icon(
		'<path d="M10.5 1.5 14 5l-6.7 6.7-3.5-3.5zM3 9l4 4H2v-2zm7.5-6.1L5.2 8.2l2.1 2.1 5.3-5.3zM1 14h14v1H1z"/>'
	),
	home: icon('<path d="m8 2 6 5v7h-4v-4H6v4H2V7zm0 1.3L3 7.45V13h2V9h6v4h2V7.45z"/>'),
	image: icon('<path d="M2 3h12v10H2zM3 4v8h10V4zm2 2h2v2H5zm-1 5 3-3 2 2 1-1 2 2z"/>'),
	info: icon(
		'<path d="M7 3h2v2H7zm-2 4V6h4v6h2v1H5v-1h2V7zM8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m0 1a6 6 0 1 1 0 12A6 6 0 0 1 8 2"/>'
	),
	italic: icon('<path d="M6 2h7v1h-2.2L8.2 13H10v1H3v-1h2.2L7.8 3H6z"/>'),
	list: icon('<path d="M2 3h2v2H2zm4 .5h8v1H6zM2 7h2v2H2zm4 .5h8v1H6zM2 11h2v2H2zm4 .5h8v1H6z"/>'),
	mail: icon('<path d="M2 3h12v10H2zm1 1v1l5 3 5-3V4zm0 2.2V12h10V6.2L8 9.2z"/>'),
	maximize: icon('<path d="M3 3h10v10H3zm1 1v8h8V4z"/>'),
	minimize: icon('<path d="M3 11h10v2H3z"/>'),
	page: icon('<path d="M3 1h7l3 3v11H3zm1 1v12h8V5H9V2zm6 .5V4h1.5zM5 6h5v1H5zm0 2h6v1H5zm0 2h6v1H5z"/>'),
	palette: icon(
		'<path d="M8 2a6 6 0 0 0-6 6c0 2.76 2.24 5 5 5h1.5a1.5 1.5 0 0 0 0-3H8a1 1 0 0 1 0-2h2.5A2.5 2.5 0 0 0 13 5.5C13 3.57 10.76 2 8 2M5 7H4V6h1zm2-2H6V4h1zm3 0H9V4h1zm1.5 2H10V6h1.5z"/>'
	),
	pdf: icon(
		'<path d="M0 0h15v15H0z" fill="none"/><path d="M3.5 8H3V7h.5a.5.5 0 0 1 0 1M7 10V7h.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5z"/><path fill-rule="evenodd" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM3.5 6H2v5h1V9h.5a1.5 1.5 0 1 0 0-3m4 0H6v5h1.5A1.5 1.5 0 0 0 9 9.5v-2A1.5 1.5 0 0 0 7.5 6m2.5 5V6h3v1h-2v1h1v1h-1v2z" clip-rule="evenodd"/>',
		15,
		15
	),
	print: icon('<path d="M4 1h8v4H4zm1 1v2h6V2zM2 6h12v6h-2v3H4v-3H2zm3 6v2h6v-4H5zm7-4h1v1h-1z"/>'),
	refresh: icon('<path d="M12 3v3H9l1.25-1.25A4 4 0 1 0 12 8h1a5 5 0 1 1-2.05-4.03z"/>'),
	search: icon(
		'<path d="M7 2a5 5 0 1 0 3.1 8.92L13.2 14l.8-.8-3.08-3.1A5 5 0 0 0 7 2m0 1a4 4 0 1 1 0 8A4 4 0 0 1 7 3"/>'
	),
	stop: icon('<path d="M4 4h8v8H4z"/>'),
	terminal: icon('<path d="M2 3h12v10H2zm1 1v8h10V4zm2 2 3 2-3 2V8.8L6.2 8 5 7.2zm3 4h4v1H8z"/>'),
	'text-editor': icon('<path d="M3 2h10v12H3zm1 1v10h8V3zm1 2h6v1H5zm0 2h6v1H5zm0 2h4v1H5zm5 2h1v1h-1z"/>'),
	trash: icon('<path d="M6 2h4l1 1h3v1H2V3h3zm-2 3h8l-.5 9h-7zm1 1 .4 7h5.2L11 6zM6 7h1v5H6zm3 0h1v5H9z"/>'),
	underline: icon('<path d="M4 2h2v6a2 2 0 1 0 4 0V2h2v6a4 4 0 1 1-8 0zM3 14h10v1H3z"/>'),
	volume: icon(
		'<path d="M2 6h3l4-3v10L5 10H2zm8-1.5c1 .75 1.5 2 1.5 3.5S11 10.75 10 11.5v-1.3c.35-.5.5-1.2.5-2.2S10.35 6.3 10 5.8zm2-2c1.55 1.25 2.5 3.1 2.5 5.5s-.95 4.25-2.5 5.5v-1.3c1-1 1.5-2.35 1.5-4.2S13 4.3 12 3.3z"/>'
	),
	warning: icon('<path d="M8 1 1 14h14zm0 2.1 5.32 9.9H2.68zM7.5 6h1v4h-1zm0 5h1v1h-1z"/>'),
	'web-browser': icon(
		'<path d="M0 0h24v24H0z" fill="none"/><path d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/>',
		24,
		24
	),
	wireless: icon(
		'<path d="M8 12.5 6.5 11 8 9.5 9.5 11zM3 7.5a7 7 0 0 1 10 0l-1 1a5.6 5.6 0 0 0-8 0zm-2-2a9.9 9.9 0 0 1 14 0l-1 1a8.5 8.5 0 0 0-12 0z"/>'
	)
} as const satisfies Record<string, IconData>;

export const W1C_ICON_NAMES = Object.keys(W1C_ICONS) as W1cIconName[];

export const W1C_ICON_METADATA = {
	'align-left': metadata('align-left', 'formatting'),
	at: metadata('at', 'identity'),
	back: metadata('back', 'action'),
	bold: metadata('bold', 'formatting'),
	browser: metadata('browser', 'app'),
	close: metadata('close', 'window-control'),
	computer: metadata('computer', 'device'),
	danger: metadata('danger', 'status'),
	database: metadata('database', 'object'),
	document: metadata('document', 'file'),
	'file-manager': metadata('file-manager', 'app'),
	folder: metadata('folder', 'file'),
	forward: metadata('forward', 'action'),
	github: metadata('github', 'brand'),
	globe: metadata('globe', 'network'),
	highlight: metadata('highlight', 'formatting'),
	home: metadata('home', 'place'),
	image: metadata('image', 'media'),
	info: metadata('info', 'status'),
	italic: metadata('italic', 'formatting'),
	list: metadata('list', 'formatting'),
	mail: metadata('mail', 'app'),
	maximize: metadata('maximize', 'window-control'),
	minimize: metadata('minimize', 'window-control'),
	page: metadata('page', 'file'),
	palette: metadata('palette', 'tool'),
	pdf: metadata('pdf', 'file'),
	print: metadata('print', 'action'),
	refresh: metadata('refresh', 'action'),
	search: metadata('search', 'action'),
	stop: metadata('stop', 'action'),
	terminal: metadata('terminal', 'app'),
	'text-editor': metadata('text-editor', 'app'),
	trash: metadata('trash', 'place'),
	underline: metadata('underline', 'formatting'),
	volume: metadata('volume', 'status'),
	warning: metadata('warning', 'status'),
	'web-browser': metadata('web-browser', 'app'),
	wireless: metadata('wireless', 'status')
} as const satisfies Record<W1cIconName, IconMetadata>;

export const W1C_ICON_LICENSE_REVIEW = {
	status: 'source-derived metadata review',
	license: 'mixed source licenses; verify per icon before redistribution outside this package',
	notes: w1cAttribution,
	references: [
		{
			name: 'Wikimedia Commons Windows-style icon references',
			url: 'https://commons.wikimedia.org/',
			license: 'mixed Wikimedia Commons file licenses',
			usage: 'Windows-style icon source references'
		},
		{
			name: 'OpenMoji',
			url: 'https://icon-sets.iconify.design/openmoji/',
			license: 'CC BY-SA 4.0',
			usage: 'README.md source reference'
		},
		{
			name: 'Twemoji',
			url: 'https://icon-sets.iconify.design/twemoji/',
			license: 'CC BY 4.0',
			usage: 'README.md source reference'
		},
		{
			name: 'FxEmoji',
			url: 'https://icon-sets.iconify.design/fxemoji/',
			license: 'CC BY 4.0',
			usage: 'README.md source reference'
		},
		{
			name: 'Bootstrap Icons',
			url: 'https://github.com/twbs/icons',
			license: 'MIT',
			usage: 'README.md source reference'
		},
		{
			name: 'Ubuntu Humanity icon theme',
			url: 'https://github.com/mk-pmb/ubuntu-icon-theme-humanity',
			license: 'GPL-2.0-or-later / CC-BY-SA-3.0 mixed theme assets',
			usage: 'README.md source reference'
		},
		{
			name: 'Iconify icon data',
			url: 'https://iconify.design/docs/icons/icon-data.html',
			license: 'metadata shape reference; icon licenses remain source-set specific',
			usage: 'README.md data model reference'
		},
		{
			name: 'icondata',
			url: 'https://github.com/carloskiki/icondata',
			license: 'metadata pattern reference; icon licenses remain source-set specific',
			usage: 'README.md attribution model reference'
		}
	]
} as const;

export function getW1cIcon(name: string): IconData | undefined {
	return Object.hasOwn(W1C_ICONS, name) ? W1C_ICONS[name as W1cIconName] : undefined;
}
