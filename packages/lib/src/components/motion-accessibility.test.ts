import { describe, expect, it } from 'vitest';
import { W1cBlink, W1cDivider, W1cIcon, W1cMarquee, W1cToast, W1cVisitorCounter } from '..';

type TestElement = HTMLElement & { updateComplete?: Promise<unknown> };

async function createElement(tagName: string) {
	const element = document.createElement(tagName) as TestElement;
	document.body.append(element);
	await element.updateComplete;
	return element;
}

function styleText(component: typeof HTMLElement) {
	const styles = (component as unknown as { styles: { cssText: string } | Array<{ cssText: string }> }).styles;
	const styleList = Array.isArray(styles) ? styles : [styles];

	return styleList.map((style) => style?.cssText ?? '').join('\n');
}

describe('reduced-motion behavior', () => {
	it('keeps blink readable when reduced motion is requested', () => {
		const css = styleText(W1cBlink);

		expect(css).toContain('@media (prefers-reduced-motion: reduce)');
		expect(css).toContain('animation: none');
		expect(css).toContain('outline');
	});

	it('keeps marquee content static and wrapping when reduced motion is requested', () => {
		const css = styleText(W1cMarquee);

		expect(css).toContain('@media (prefers-reduced-motion: reduce)');
		expect(css).toContain('animation: none');
		expect(css).toContain('white-space: normal');
	});
});

describe('accessibility helper behavior', () => {
	it('hides decorative icons and labels named icons', async () => {
		const decorative = (await createElement('w1c-icon')) as W1cIcon;
		decorative.name = 'computer';
		await decorative.updateComplete;

		expect(decorative.shadowRoot?.querySelector('svg')?.getAttribute('aria-hidden')).toBe('true');
		expect(decorative.shadowRoot?.querySelector('svg')?.hasAttribute('role')).toBe(false);

		const labelled = (await createElement('w1c-icon')) as W1cIcon;
		labelled.name = 'computer';
		labelled.label = 'Computer';
		await labelled.updateComplete;

		const svg = labelled.shadowRoot?.querySelector('svg');
		expect(svg?.getAttribute('role')).toBe('img');
		expect(svg?.getAttribute('aria-label')).toBe('Computer');
		expect(svg?.hasAttribute('aria-hidden')).toBe(false);
	});

	it('maps divider orientation to aria-orientation', async () => {
		const element = (await createElement('w1c-divider')) as W1cDivider;
		element.orientation = 'vertical';
		await element.updateComplete;

		expect(element.shadowRoot?.querySelector('[role="separator"]')?.getAttribute('aria-orientation')).toBe('vertical');
	});

	it('maps toast variants and visibility to live-region roles', async () => {
		const element = (await createElement('w1c-toast')) as W1cToast;
		const chrome = () => element.shadowRoot?.querySelector('[part~="chrome"]');

		expect(chrome()?.getAttribute('role')).toBe('status');
		expect(chrome()?.getAttribute('aria-hidden')).toBe('false');

		element.variant = 'warning';
		element.open = false;
		await element.updateComplete;

		expect(chrome()?.getAttribute('role')).toBe('alert');
		expect(chrome()?.getAttribute('aria-hidden')).toBe('true');
	});

	it('exposes visitor counter readable text while hiding digit cells', async () => {
		const element = (await createElement('w1c-visitor-counter')) as W1cVisitorCounter;
		element.label = 'Hits';
		element.value = '42';
		await element.updateComplete;

		expect(element.shadowRoot?.querySelector('[role="group"]')?.getAttribute('aria-label')).toBe('Hits: 42');
		expect(element.shadowRoot?.querySelector('[part~="digits"]')?.getAttribute('aria-hidden')).toBe('true');
	});
});
