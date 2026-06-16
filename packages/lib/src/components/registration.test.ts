import { describe, expect, it } from 'vitest';
import * as components from '../index';

type ComponentConstructor = CustomElementConstructor & { name: string };

interface PublicComponent {
	tagName: string;
	exportName: keyof typeof components;
	entrypoint: string;
}

const publicComponents = [
	{ tagName: 'w1c-address-field', exportName: 'W1cAddressField', entrypoint: '../address-field' },
	{ tagName: 'w1c-badge-88x31', exportName: 'W1cBadge88x31', entrypoint: '../badge-88x31' },
	{ tagName: 'w1c-blink', exportName: 'W1cBlink', entrypoint: '../blink' },
	{ tagName: 'w1c-button', exportName: 'W1cButton', entrypoint: '../button' },
	{ tagName: 'w1c-data-list', exportName: 'W1cDataList', entrypoint: '../data-list' },
	{ tagName: 'w1c-data-table', exportName: 'W1cDataTable', entrypoint: '../data-table' },
	{ tagName: 'w1c-desktop-icon', exportName: 'W1cDesktopIcon', entrypoint: '../desktop-icon' },
	{ tagName: 'w1c-dialog', exportName: 'W1cDialog', entrypoint: '../dialog' },
	{ tagName: 'w1c-divider', exportName: 'W1cDivider', entrypoint: '../divider' },
	{ tagName: 'w1c-document-browser', exportName: 'W1cDocumentBrowser', entrypoint: '../document-browser' },
	{ tagName: 'w1c-guestbook-panel', exportName: 'W1cGuestbookPanel', entrypoint: '../guestbook-panel' },
	{ tagName: 'w1c-icon', exportName: 'W1cIcon', entrypoint: '../icon' },
	{ tagName: 'w1c-image-map', exportName: 'W1cImageMap', entrypoint: '../image-map' },
	{ tagName: 'w1c-json-viewer', exportName: 'W1cJsonViewer', entrypoint: '../json-viewer' },
	{ tagName: 'w1c-last-updated', exportName: 'W1cLastUpdated', entrypoint: '../last-updated' },
	{ tagName: 'w1c-link-cluster', exportName: 'W1cLinkCluster', entrypoint: '../link-cluster' },
	{ tagName: 'w1c-marquee', exportName: 'W1cMarquee', entrypoint: '../marquee' },
	{ tagName: 'w1c-menu', exportName: 'W1cMenu', entrypoint: '../menu' },
	{ tagName: 'w1c-menu-bar', exportName: 'W1cMenuBar', entrypoint: '../menu-bar' },
	{ tagName: 'w1c-menu-item', exportName: 'W1cMenuItem', entrypoint: '../menu-item' },
	{ tagName: 'w1c-panel', exportName: 'W1cPanel', entrypoint: '../panel' },
	{ tagName: 'w1c-source-viewer', exportName: 'W1cSourceViewer', entrypoint: '../source-viewer' },
	{ tagName: 'w1c-statusbar', exportName: 'W1cStatusbar', entrypoint: '../statusbar' },
	{ tagName: 'w1c-tabs', exportName: 'W1cTabs', entrypoint: '../tabs' },
	{ tagName: 'w1c-taskbar', exportName: 'W1cTaskbar', entrypoint: '../taskbar' },
	{ tagName: 'w1c-titlebar', exportName: 'W1cTitlebar', entrypoint: '../titlebar' },
	{ tagName: 'w1c-toast', exportName: 'W1cToast', entrypoint: '../toast' },
	{ tagName: 'w1c-toolbar', exportName: 'W1cToolbar', entrypoint: '../toolbar' },
	{ tagName: 'w1c-tiled-background', exportName: 'W1cTiledBackground', entrypoint: '../tiled-background' },
	{ tagName: 'w1c-under-construction', exportName: 'W1cUnderConstruction', entrypoint: '../under-construction' },
	{ tagName: 'w1c-visitor-counter', exportName: 'W1cVisitorCounter', entrypoint: '../visitor-counter' },
	{ tagName: 'w1c-webring', exportName: 'W1cWebring', entrypoint: '../webring' },
	{ tagName: 'w1c-window', exportName: 'W1cWindow', entrypoint: '../window' },
	{ tagName: 'w1c-word-processor', exportName: 'W1cWordProcessor', entrypoint: '../word-processor' }
] satisfies PublicComponent[];

describe('public custom element registration', () => {
	it.each(publicComponents)('registers $tagName from the all-components entrypoint', ({ tagName, exportName }) => {
		expect(customElements.get(tagName)).toBe(components[exportName]);
	});

	it.each(publicComponents)(
		'matches the $tagName cherry-picked entrypoint',
		async ({ tagName, exportName, entrypoint }) => {
			const module = (await import(entrypoint)) as Record<string, ComponentConstructor>;

			expect(module[exportName]).toBe(components[exportName]);
			expect(customElements.get(tagName)).toBe(module[exportName]);
		}
	);
});
