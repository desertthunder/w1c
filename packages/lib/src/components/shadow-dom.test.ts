import { describe, expect, it } from 'vitest';
import '..';

type TestElement = HTMLElement & { updateComplete?: Promise<unknown> };

type ShadowDomCase = { tagName: string; parts: string[]; slots?: string[]; roles?: string[]; defaultText?: string[] };

const shadowDomCases = [
	{
		tagName: 'w1c-address-field',
		parts: ['chrome', 'label', 'prefix', 'input', 'actions'],
		slots: ['label', 'prefix', 'actions'],
		defaultText: ['Address']
	},
	{
		tagName: 'w1c-alert',
		parts: ['chrome', 'icon', 'content', 'title', 'actions'],
		slots: ['', 'icon', 'actions'],
		roles: ['status']
	},
	{ tagName: 'w1c-badge-88x31', parts: ['chrome', 'icon', 'label'], slots: ['', 'icon'] },
	{ tagName: 'w1c-blink', parts: ['text'], slots: [''] },
	{ tagName: 'w1c-button', parts: ['control', 'button'], slots: [''] },
	{ tagName: 'w1c-checkbox', parts: ['label', 'control', 'checkbox', 'text'], slots: [''] },
	{
		tagName: 'w1c-data-list',
		parts: ['chrome', 'header', 'list', 'footer'],
		slots: ['', 'header', 'footer'],
		roles: ['list']
	},
	{
		tagName: 'w1c-data-table',
		parts: ['chrome', 'table', 'caption', 'head', 'body', 'foot'],
		slots: ['', 'caption', 'head', 'foot'],
		roles: ['table', 'rowgroup']
	},
	{ tagName: 'w1c-desktop-icon', parts: ['control', 'icon', 'label'], slots: ['', 'icon'] },
	{
		tagName: 'w1c-dialog',
		parts: ['chrome', 'titlebar', 'body', 'icon', 'content', 'actions'],
		slots: ['', 'icon', 'titlebar', 'actions'],
		roles: ['dialog'],
		defaultText: ['OK']
	},
	{ tagName: 'w1c-divider', parts: ['chrome', 'line', 'label'], slots: [''], roles: ['separator'] },
	{
		tagName: 'w1c-document-browser',
		parts: ['chrome', 'toolbar', 'location', 'body', 'sidebar', 'content', 'statusbar'],
		slots: ['', 'toolbar', 'sidebar', 'statusbar'],
		roles: ['group'],
		defaultText: ['Ready']
	},
	{
		tagName: 'w1c-endpoint-row',
		parts: ['chrome', 'method', 'content', 'path', 'status', 'actions'],
		slots: ['', 'actions'],
		defaultText: ['GET', '/', 'Ready']
	},
	{
		tagName: 'w1c-guestbook-panel',
		parts: ['chrome', 'header', 'content', 'actions', 'footer'],
		slots: ['', 'actions', 'footer']
	},
	{ tagName: 'w1c-icon', parts: ['icon'], roles: ['img'] },
	{ tagName: 'w1c-image-map', parts: ['chrome', 'image', 'hotspots'], slots: [''] },
	{ tagName: 'w1c-input', parts: ['control', 'input'] },
	{ tagName: 'w1c-json-viewer', parts: ['chrome', 'toolbar', 'gutter', 'code'], slots: ['toolbar'], roles: ['region'] },
	{ tagName: 'w1c-label', parts: ['label'], slots: [''] },
	{ tagName: 'w1c-last-updated', parts: ['chrome', 'label', 'value'], slots: [''], defaultText: ['Last updated'] },
	{ tagName: 'w1c-link-cluster', parts: ['chrome', 'heading', 'content'], slots: [''], defaultText: ['Links'] },
	{ tagName: 'w1c-marquee', parts: ['chrome', 'track'], slots: [''], roles: ['marquee'] },
	{ tagName: 'w1c-menu', parts: ['chrome', 'menu'], slots: [''], roles: ['menu'] },
	{ tagName: 'w1c-menu-bar', parts: ['chrome', 'menubar'], slots: [''], roles: ['menubar'] },
	{
		tagName: 'w1c-menu-item',
		parts: ['control', 'prefix', 'label', 'suffix'],
		slots: ['', 'prefix', 'suffix'],
		roles: ['menuitem']
	},
	{ tagName: 'w1c-panel', parts: ['chrome', 'header', 'content', 'footer'], slots: ['', 'header', 'footer'] },
	{ tagName: 'w1c-select', parts: ['control', 'select'], slots: [''] },
	{
		tagName: 'w1c-source-viewer',
		parts: ['chrome', 'toolbar', 'pathbar', 'workspace', 'gutter', 'code', 'statusbar'],
		slots: ['', 'toolbar', 'pathbar', 'statusbar'],
		roles: ['group'],
		defaultText: ['1 line']
	},
	{
		tagName: 'w1c-status-card',
		parts: ['chrome', 'icon', 'content', 'title', 'value', 'footer'],
		slots: ['', 'icon', 'footer'],
		defaultText: ['Status']
	},
	{ tagName: 'w1c-statusbar', parts: ['chrome', 'statusbar', 'content'], slots: [''] },
	{ tagName: 'w1c-tabs', parts: ['chrome', 'tablist', 'panels'], slots: ['', 'tabs'], roles: ['tablist'] },
	{ tagName: 'w1c-taskbar', parts: ['chrome', 'start', 'content', 'tray'], slots: ['', 'start', 'tray'] },
	{ tagName: 'w1c-textarea', parts: ['control', 'textarea'] },
	{
		tagName: 'w1c-titlebar',
		parts: ['chrome', 'titlebar', 'icon', 'title', 'controls'],
		slots: ['', 'icon', 'controls']
	},
	{
		tagName: 'w1c-toast',
		parts: ['chrome', 'icon', 'content', 'title', 'actions', 'close'],
		slots: ['', 'icon', 'actions'],
		roles: ['status']
	},
	{ tagName: 'w1c-toolbar', parts: ['chrome', 'toolbar', 'controls'], slots: [''] },
	{ tagName: 'w1c-tiled-background', parts: ['chrome', 'content'], slots: [''] },
	{
		tagName: 'w1c-under-construction',
		parts: ['chrome', 'sign', 'icon', 'message', 'details'],
		slots: ['', 'icon'],
		roles: ['status']
	},
	{
		tagName: 'w1c-validation-message',
		parts: ['chrome', 'icon', 'content'],
		slots: ['', 'icon'],
		roles: ['alert'],
		defaultText: ['x']
	},
	{
		tagName: 'w1c-visitor-counter',
		parts: ['chrome', 'label', 'digits', 'digit'],
		roles: ['group'],
		defaultText: ['Visitors']
	},
	{
		tagName: 'w1c-webring',
		parts: ['chrome', 'title', 'content', 'nav'],
		slots: ['', 'previous', 'home', 'random', 'next'],
		defaultText: ['Webring', 'Previous', 'Ring Home', 'Random', 'Next']
	},
	{
		tagName: 'w1c-window',
		parts: ['chrome', 'titlebar', 'toolbar', 'content', 'statusbar'],
		slots: ['', 'titlebar', 'icon', 'controls', 'toolbar', 'statusbar'],
		roles: ['group'],
		defaultText: ['Ready']
	},
	{
		tagName: 'w1c-word-processor',
		parts: ['chrome', 'toolbar', 'ruler', 'workspace', 'page', 'details', 'statusbar'],
		slots: ['', 'toolbar', 'ruler', 'details', 'statusbar'],
		roles: ['group'],
		defaultText: ['Page 1']
	}
] satisfies ShadowDomCase[];

async function createElement(tagName: string) {
	const element = document.createElement(tagName) as TestElement;

	if (tagName === 'w1c-icon') {
		(element as unknown as { name: string; label: string }).name = 'computer';
		(element as unknown as { name: string; label: string }).label = 'Computer';
	}

	document.body.append(element);
	await element.updateComplete;
	return element;
}

function partSelector(part: string) {
	return `[part~="${part}"]`;
}

function slotSelector(slotName: string) {
	return slotName ? `slot[name="${slotName}"]` : 'slot:not([name])';
}

describe('component shadow DOM contract', () => {
	it.each(shadowDomCases)(
		'$tagName exposes stable parts, roles, slots, and default regions',
		async ({ tagName, parts, slots = [], roles = [], defaultText = [] }) => {
			const element = await createElement(tagName);
			const root = element.shadowRoot;

			expect(root).toBeTruthy();

			for (const part of parts) {
				expect(root?.querySelector(partSelector(part)), `${tagName} missing part="${part}"`).toBeTruthy();
			}

			for (const slotName of slots) {
				expect(
					root?.querySelector(slotSelector(slotName)),
					`${tagName} missing slot="${slotName || '(default)'}"`
				).toBeTruthy();
			}

			for (const role of roles) {
				expect(root?.querySelector(`[role="${role}"]`), `${tagName} missing role="${role}"`).toBeTruthy();
			}

			for (const text of defaultText) {
				expect(root?.textContent).toContain(text);
			}
		}
	);
});
