import { describe, expect, it } from 'vitest';
import '..';

type TestElement = HTMLElement & { updateComplete?: Promise<unknown> };

type PropertyCase = { tagName: string; property: string; defaultValue: unknown; value: unknown };

type ReflectedAttributeCase = {
	tagName: string;
	property: string;
	attribute: string;
	value: string | number | boolean;
	attributeValue?: string;
};

const propertyCases = [
	{ tagName: 'w1c-address-field', property: 'label', defaultValue: 'Address', value: 'Location' },
	{ tagName: 'w1c-address-field', property: 'value', defaultValue: '', value: '/home/w1c' },
	{ tagName: 'w1c-address-field', property: 'placeholder', defaultValue: '', value: 'Enter URL' },
	{ tagName: 'w1c-address-field', property: 'disabled', defaultValue: false, value: true },
	{ tagName: 'w1c-address-field', property: 'readonly', defaultValue: false, value: true },
	{ tagName: 'w1c-badge-88x31', property: 'href', defaultValue: '', value: 'https://example.test' },
	{ tagName: 'w1c-badge-88x31', property: 'target', defaultValue: '', value: '_blank' },
	{ tagName: 'w1c-badge-88x31', property: 'rel', defaultValue: '', value: 'noopener' },
	{ tagName: 'w1c-badge-88x31', property: 'variant', defaultValue: 'split', value: 'warning' },
	{ tagName: 'w1c-badge-88x31', property: 'label', defaultValue: '', value: 'Valid HTML' },
	{ tagName: 'w1c-blink', property: 'speed', defaultValue: 1, value: 2 },
	{ tagName: 'w1c-button', property: 'disabled', defaultValue: false, value: true },
	{ tagName: 'w1c-button', property: 'variant', defaultValue: 'raised', value: 'flat' },
	{ tagName: 'w1c-data-list', property: 'compact', defaultValue: false, value: true },
	{ tagName: 'w1c-data-table', property: 'compact', defaultValue: false, value: true },
	{ tagName: 'w1c-data-table', property: 'striped', defaultValue: false, value: true },
	{ tagName: 'w1c-desktop-icon', property: 'href', defaultValue: '', value: '#computer' },
	{ tagName: 'w1c-desktop-icon', property: 'label', defaultValue: '', value: 'Computer' },
	{ tagName: 'w1c-desktop-icon', property: 'selected', defaultValue: false, value: true },
	{ tagName: 'w1c-dialog', property: 'title', defaultValue: 'Dialog', value: 'Alert' },
	{ tagName: 'w1c-dialog', property: 'variant', defaultValue: 'window', value: 'alert' },
	{ tagName: 'w1c-divider', property: 'orientation', defaultValue: 'horizontal', value: 'vertical' },
	{ tagName: 'w1c-document-browser', property: 'label', defaultValue: 'Document browser', value: 'Files' },
	{ tagName: 'w1c-document-browser', property: 'location', defaultValue: '', value: '/docs' },
	{ tagName: 'w1c-document-browser', property: 'hideSidebar', defaultValue: false, value: true },
	{ tagName: 'w1c-guestbook-panel', property: 'heading', defaultValue: 'Guestbook', value: 'Visitors' },
	{ tagName: 'w1c-guestbook-panel', property: 'subheading', defaultValue: 'Thanks for stopping by.', value: 'Sign in' },
	{ tagName: 'w1c-icon', property: 'name', defaultValue: '', value: 'computer' },
	{ tagName: 'w1c-icon', property: 'label', defaultValue: '', value: 'Computer' },
	{ tagName: 'w1c-image-map', property: 'src', defaultValue: '', value: '/map.png' },
	{ tagName: 'w1c-image-map', property: 'alt', defaultValue: '', value: 'Site map' },
	{ tagName: 'w1c-image-map', property: 'caption', defaultValue: '', value: 'Click a region' },
	{ tagName: 'w1c-json-viewer', property: 'value', defaultValue: undefined, value: { ok: true } },
	{ tagName: 'w1c-json-viewer', property: 'text', defaultValue: '', value: '{"ok":true}' },
	{ tagName: 'w1c-json-viewer', property: 'indent', defaultValue: 2, value: 4 },
	{ tagName: 'w1c-json-viewer', property: 'lineNumbers', defaultValue: false, value: true },
	{ tagName: 'w1c-last-updated', property: 'datetime', defaultValue: '', value: '1999-12-31' },
	{ tagName: 'w1c-last-updated', property: 'label', defaultValue: 'Last updated', value: 'Updated' },
	{ tagName: 'w1c-link-cluster', property: 'heading', defaultValue: 'Links', value: 'Friends' },
	{ tagName: 'w1c-link-cluster', property: 'columns', defaultValue: 'auto', value: '2' },
	{ tagName: 'w1c-marquee', property: 'direction', defaultValue: 'left', value: 'right' },
	{ tagName: 'w1c-marquee', property: 'speed', defaultValue: 12, value: 20 },
	{ tagName: 'w1c-marquee', property: 'pauseOnHover', defaultValue: false, value: true },
	{ tagName: 'w1c-menu', property: 'label', defaultValue: 'Menu', value: 'File' },
	{ tagName: 'w1c-menu-item', property: 'href', defaultValue: '', value: '#open' },
	{ tagName: 'w1c-menu-item', property: 'disabled', defaultValue: false, value: true },
	{ tagName: 'w1c-menu-item', property: 'checked', defaultValue: false, value: true },
	{ tagName: 'w1c-panel', property: 'variant', defaultValue: 'raised', value: 'sunken' },
	{ tagName: 'w1c-source-viewer', property: 'label', defaultValue: 'Source viewer', value: 'Source' },
	{ tagName: 'w1c-source-viewer', property: 'filename', defaultValue: 'document.txt', value: 'src/index.ts' },
	{ tagName: 'w1c-source-viewer', property: 'text', defaultValue: '', value: 'export {};' },
	{ tagName: 'w1c-source-viewer', property: 'lineNumbers', defaultValue: false, value: true },
	{ tagName: 'w1c-tabs', property: 'selected', defaultValue: 0, value: 1 },
	{ tagName: 'w1c-tiled-background', property: 'src', defaultValue: '', value: '/tile.gif' },
	{ tagName: 'w1c-tiled-background', property: 'color', defaultValue: '', value: '#000000' },
	{ tagName: 'w1c-tiled-background', property: 'tileSize', defaultValue: '', value: '32px' },
	{ tagName: 'w1c-titlebar', property: 'title', defaultValue: '', value: 'Untitled' },
	{ tagName: 'w1c-toast', property: 'open', defaultValue: true, value: false },
	{ tagName: 'w1c-toast', property: 'title', defaultValue: '', value: 'Saved' },
	{ tagName: 'w1c-toast', property: 'variant', defaultValue: 'status', value: 'danger' },
	{ tagName: 'w1c-toast', property: 'closeable', defaultValue: false, value: true },
	{ tagName: 'w1c-under-construction', property: 'message', defaultValue: 'Under Construction', value: 'Back soon' },
	{ tagName: 'w1c-visitor-counter', property: 'label', defaultValue: 'Visitors', value: 'Hits' },
	{ tagName: 'w1c-visitor-counter', property: 'value', defaultValue: '0', value: '42' },
	{ tagName: 'w1c-visitor-counter', property: 'digits', defaultValue: 6, value: 4 },
	{ tagName: 'w1c-webring', property: 'name', defaultValue: 'Webring', value: 'Friends ring' },
	{ tagName: 'w1c-window', property: 'title', defaultValue: 'Window', value: 'Files' },
	{ tagName: 'w1c-window', property: 'movable', defaultValue: false, value: true },
	{ tagName: 'w1c-window', property: 'resizable', defaultValue: false, value: true },
	{ tagName: 'w1c-window', property: 'moving', defaultValue: false, value: true },
	{ tagName: 'w1c-window', property: 'resizing', defaultValue: false, value: true },
	{ tagName: 'w1c-window', property: 'x', defaultValue: 0, value: 12 },
	{ tagName: 'w1c-window', property: 'y', defaultValue: 0, value: 24 },
	{ tagName: 'w1c-window', property: 'width', defaultValue: null, value: 320 },
	{ tagName: 'w1c-window', property: 'height', defaultValue: null, value: 240 },
	{ tagName: 'w1c-window', property: 'minWidth', defaultValue: 220, value: 180 },
	{ tagName: 'w1c-window', property: 'minHeight', defaultValue: 160, value: 120 },
	{ tagName: 'w1c-window', property: 'maxWidth', defaultValue: null, value: 640 },
	{ tagName: 'w1c-window', property: 'maxHeight', defaultValue: null, value: 480 },
	{ tagName: 'w1c-word-processor', property: 'label', defaultValue: 'Word processor', value: 'Document' },
	{ tagName: 'w1c-word-processor', property: 'showDetails', defaultValue: false, value: true }
] satisfies PropertyCase[];

const reflectedAttributeCases = [
	{ tagName: 'w1c-address-field', property: 'disabled', attribute: 'disabled', value: true },
	{ tagName: 'w1c-address-field', property: 'readonly', attribute: 'readonly', value: true },
	{ tagName: 'w1c-badge-88x31', property: 'variant', attribute: 'variant', value: 'warning' },
	{ tagName: 'w1c-button', property: 'disabled', attribute: 'disabled', value: true },
	{ tagName: 'w1c-button', property: 'variant', attribute: 'variant', value: 'flat' },
	{ tagName: 'w1c-data-list', property: 'compact', attribute: 'compact', value: true },
	{ tagName: 'w1c-data-table', property: 'compact', attribute: 'compact', value: true },
	{ tagName: 'w1c-data-table', property: 'striped', attribute: 'striped', value: true },
	{ tagName: 'w1c-desktop-icon', property: 'selected', attribute: 'selected', value: true },
	{ tagName: 'w1c-dialog', property: 'variant', attribute: 'variant', value: 'alert' },
	{ tagName: 'w1c-divider', property: 'orientation', attribute: 'orientation', value: 'vertical' },
	{ tagName: 'w1c-document-browser', property: 'hideSidebar', attribute: 'hide-sidebar', value: true },
	{ tagName: 'w1c-json-viewer', property: 'lineNumbers', attribute: 'line-numbers', value: true },
	{ tagName: 'w1c-marquee', property: 'direction', attribute: 'direction', value: 'right' },
	{ tagName: 'w1c-marquee', property: 'pauseOnHover', attribute: 'pause-on-hover', value: true },
	{ tagName: 'w1c-menu-item', property: 'disabled', attribute: 'disabled', value: true },
	{ tagName: 'w1c-menu-item', property: 'checked', attribute: 'checked', value: true },
	{ tagName: 'w1c-panel', property: 'variant', attribute: 'variant', value: 'sunken' },
	{ tagName: 'w1c-source-viewer', property: 'lineNumbers', attribute: 'line-numbers', value: false },
	{ tagName: 'w1c-tabs', property: 'selected', attribute: 'selected', value: 2, attributeValue: '2' },
	{ tagName: 'w1c-toast', property: 'open', attribute: 'open', value: true },
	{ tagName: 'w1c-toast', property: 'variant', attribute: 'variant', value: 'warning' },
	{ tagName: 'w1c-toast', property: 'closeable', attribute: 'closeable', value: true },
	{ tagName: 'w1c-window', property: 'movable', attribute: 'movable', value: true },
	{ tagName: 'w1c-window', property: 'resizable', attribute: 'resizable', value: true },
	{ tagName: 'w1c-window', property: 'moving', attribute: 'moving', value: true },
	{ tagName: 'w1c-window', property: 'resizing', attribute: 'resizing', value: true },
	{ tagName: 'w1c-window', property: 'x', attribute: 'x', value: 12, attributeValue: '12' },
	{ tagName: 'w1c-window', property: 'y', attribute: 'y', value: 24, attributeValue: '24' },
	{ tagName: 'w1c-word-processor', property: 'showDetails', attribute: 'show-details', value: true }
] satisfies ReflectedAttributeCase[];

const propertyOnlyComponents = ['w1c-menu-bar', 'w1c-statusbar', 'w1c-taskbar', 'w1c-toolbar'];

async function createElement(tagName: string) {
	const element = document.createElement(tagName) as TestElement;

	if (tagName === 'w1c-tabs') {
		element.innerHTML = `
			<button slot="tabs">One</button>
			<button slot="tabs">Two</button>
			<section>One panel</section>
			<section>Two panel</section>
		`;
	}

	document.body.append(element);
	await element.updateComplete;
	return element;
}

describe('public component properties', () => {
	it.each(propertyCases)(
		'$tagName exposes $property with a stable default and setter',
		async ({ tagName, property, defaultValue, value }) => {
			const element = await createElement(tagName);
			expect((element as unknown as Record<string, unknown>)[property]).toEqual(defaultValue);

			(element as unknown as Record<string, unknown>)[property] = value;
			await (element as TestElement).updateComplete;
			expect((element as unknown as Record<string, unknown>)[property]).toEqual(value);
		}
	);

	it.each(propertyOnlyComponents)('%s has no public Lit properties to reflect', async (tagName) => {
		const element = await createElement(tagName);
		expect(element.shadowRoot).toBeTruthy();
	});
});

describe('reflected component attributes', () => {
	it.each(reflectedAttributeCases)(
		'reflects $tagName.$property to $attribute',
		async ({ tagName, property, attribute, value, attributeValue }) => {
			const element = await createElement(tagName);

			(element as unknown as Record<string, unknown>)[property] = value;
			await element.updateComplete;

			if (typeof value === 'boolean') {
				expect((element as Element).hasAttribute(attribute)).toBe(value);
			} else {
				expect((element as Element).getAttribute(attribute)).toBe(attributeValue ?? String(value));
			}
		}
	);
});
