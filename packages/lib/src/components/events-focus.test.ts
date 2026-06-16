import { describe, expect, it, vi } from 'vitest';
import '..';

type TestElement = HTMLElement & { updateComplete?: Promise<unknown> };

async function createElement<T extends TestElement>(tagName: string) {
	const element = document.createElement(tagName) as T;
	document.body.append(element);
	await element.updateComplete;
	return element;
}

function pointerEvent(type: string, options: { pointerId?: number; clientX?: number; clientY?: number } = {}) {
	const event = new MouseEvent(type, {
		bubbles: true,
		composed: true,
		button: 0,
		clientX: options.clientX,
		clientY: options.clientY
	});

	Object.defineProperties(event, { pointerId: { value: options.pointerId ?? 1 }, isPrimary: { value: true } });

	return event as PointerEvent;
}

function installPointerCaptureStubs() {
	const captures = new Set<number>();

	HTMLElement.prototype.setPointerCapture = vi.fn((pointerId: number) => captures.add(pointerId));
	HTMLElement.prototype.hasPointerCapture = vi.fn((pointerId: number) => captures.has(pointerId));
	HTMLElement.prototype.releasePointerCapture = vi.fn((pointerId: number) => captures.delete(pointerId));
}

describe('component events and native-control proxying', () => {
	it('proxies address-field native input value and events', async () => {
		const element = await createElement('w1c-address-field');
		const input = element.shadowRoot?.querySelector('input');
		const inputListener = vi.fn();
		const changeListener = vi.fn();

		element.addEventListener('input', inputListener);
		element.addEventListener('change', changeListener);
		input!.value = 'https://example.test';
		input!.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
		input!.dispatchEvent(new Event('change', { bubbles: true, composed: true }));

		expect((element as unknown as { value: string }).value).toBe('https://example.test');
		expect(inputListener).toHaveBeenCalled();
		expect(changeListener).toHaveBeenCalled();
	});

	it('proxies address-field disabled and readonly state to the native input', async () => {
		const element = await createElement('w1c-address-field');
		const typed = element as unknown as { disabled: boolean; readonly: boolean };

		typed.disabled = true;
		typed.readonly = true;
		await element.updateComplete;

		const input = element.shadowRoot?.querySelector('input');
		expect(input?.disabled).toBe(true);
		expect(input?.readOnly).toBe(true);
	});

	it('uses the host disabled state for the native button control', async () => {
		const element = await createElement('w1c-button');
		(element as unknown as { disabled: boolean }).disabled = true;
		await element.updateComplete;

		expect(element.shadowRoot?.querySelector('button')?.disabled).toBe(true);
	});

	it('proxies input native value, state, events, and focus', async () => {
		const element = await createElement('w1c-input');
		const typed = element as unknown as {
			disabled: boolean;
			readonly: boolean;
			required: boolean;
			invalid: boolean;
			value: string;
		};
		const input = element.shadowRoot?.querySelector('input');
		const inputListener = vi.fn();
		const changeListener = vi.fn();

		element.addEventListener('input', inputListener);
		element.addEventListener('change', changeListener);
		typed.disabled = true;
		typed.readonly = true;
		typed.required = true;
		typed.invalid = true;
		await element.updateComplete;

		expect(input?.disabled).toBe(true);
		expect(input?.readOnly).toBe(true);
		expect(input?.required).toBe(true);
		expect(input?.getAttribute('aria-invalid')).toBe('true');

		typed.disabled = false;
		await element.updateComplete;
		input!.value = 'root@example.test';
		input!.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
		input!.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
		element.focus();

		expect(typed.value).toBe('root@example.test');
		expect(inputListener).toHaveBeenCalled();
		expect(changeListener).toHaveBeenCalled();
		expect(element.shadowRoot?.activeElement).toBe(input);
	});

	it('proxies textarea native value, state, events, and focus', async () => {
		const element = await createElement('w1c-textarea');
		const typed = element as unknown as {
			disabled: boolean;
			readonly: boolean;
			required: boolean;
			invalid: boolean;
			value: string;
		};
		const textarea = element.shadowRoot?.querySelector('textarea');
		const inputListener = vi.fn();
		const changeListener = vi.fn();

		element.addEventListener('input', inputListener);
		element.addEventListener('change', changeListener);
		typed.disabled = true;
		typed.readonly = true;
		typed.required = true;
		typed.invalid = true;
		await element.updateComplete;

		expect(textarea?.disabled).toBe(true);
		expect(textarea?.readOnly).toBe(true);
		expect(textarea?.required).toBe(true);
		expect(textarea?.getAttribute('aria-invalid')).toBe('true');

		typed.disabled = false;
		await element.updateComplete;
		textarea!.value = 'Queued for review';
		textarea!.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
		textarea!.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
		element.focus();

		expect(typed.value).toBe('Queued for review');
		expect(inputListener).toHaveBeenCalled();
		expect(changeListener).toHaveBeenCalled();
		expect(element.shadowRoot?.activeElement).toBe(textarea);
	});

	it('proxies checkbox checked state, required state, change event, and focus', async () => {
		const element = await createElement('w1c-checkbox');
		const typed = element as unknown as { checked: boolean; disabled: boolean; required: boolean; invalid: boolean };
		const checkbox = element.shadowRoot?.querySelector('input');
		const changeListener = vi.fn();

		element.addEventListener('change', changeListener);
		typed.disabled = true;
		typed.required = true;
		typed.invalid = true;
		await element.updateComplete;

		expect(checkbox?.disabled).toBe(true);
		expect(checkbox?.required).toBe(true);
		expect(checkbox?.getAttribute('aria-invalid')).toBe('true');

		typed.disabled = false;
		await element.updateComplete;
		checkbox!.checked = true;
		checkbox!.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
		element.focus();

		expect(typed.checked).toBe(true);
		expect(changeListener).toHaveBeenCalled();
		expect(element.shadowRoot?.activeElement).toBe(checkbox);
	});

	it('proxies select value, state, change event, and focus', async () => {
		const element = await createElement('w1c-select');
		const typed = element as unknown as { value: string; disabled: boolean; required: boolean; invalid: boolean };
		const select = element.shadowRoot?.querySelector('select');
		const changeListener = vi.fn();

		element.innerHTML = '<option value="low">Low</option><option value="high">High</option>';
		element.addEventListener('change', changeListener);
		typed.disabled = true;
		typed.required = true;
		typed.invalid = true;
		await element.updateComplete;

		expect(select?.disabled).toBe(true);
		expect(select?.required).toBe(true);
		expect(select?.getAttribute('aria-invalid')).toBe('true');

		typed.disabled = false;
		await element.updateComplete;
		select!.value = 'high';
		select!.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
		element.focus();

		expect(typed.value).toBe('high');
		expect(changeListener).toHaveBeenCalled();
		expect(element.shadowRoot?.activeElement).toBe(select);
	});

	it('emits menu item select only when enabled', async () => {
		const element = await createElement('w1c-menu-item');
		const listener = vi.fn();

		element.addEventListener('w1c-menu-item-select', listener);
		element.shadowRoot?.querySelector('button')?.click();

		(element as unknown as { disabled: boolean }).disabled = true;
		await element.updateComplete;
		element.shadowRoot?.querySelector('button')?.click();

		expect(listener).toHaveBeenCalledTimes(1);
	});

	it('emits toast close and updates open state from the close control', async () => {
		const element = await createElement('w1c-toast');
		const listener = vi.fn();
		(element as unknown as { closeable: boolean }).closeable = true;
		await element.updateComplete;

		element.addEventListener('w1c-toast-close', listener);
		element.shadowRoot?.querySelector<HTMLElement>('w1c-button.close')?.click();
		await element.updateComplete;

		expect(listener).toHaveBeenCalledTimes(1);
		expect((element as unknown as { open: boolean }).open).toBe(false);
		expect(element.shadowRoot?.querySelector('[part~="chrome"]')?.hasAttribute('hidden')).toBe(true);
	});

	it('emits tab changes from click selection', async () => {
		const element = await createTabs();
		const listener = vi.fn();
		const tabs = element.querySelectorAll<HTMLButtonElement>('[slot="tabs"]');

		element.addEventListener('w1c-tab-change', listener);
		tabs[1].click();
		await element.updateComplete;

		expect((element as unknown as { selected: number }).selected).toBe(1);
		expect(listener).toHaveBeenCalledWith(expect.objectContaining({ detail: { selected: 1 } }));
		expect(tabs[1].getAttribute('aria-selected')).toBe('true');
	});

	it('emits window move and resize lifecycle events with geometry details', async () => {
		installPointerCaptureStubs();

		const element = await createElement('w1c-window');
		const typed = element as unknown as { movable: boolean; resizable: boolean; width: number; height: number };
		typed.movable = true;
		typed.resizable = true;
		typed.width = 320;
		typed.height = 240;
		await element.updateComplete;

		const moveStart = vi.fn();
		const move = vi.fn();
		const moveEnd = vi.fn();
		const resizeStart = vi.fn();
		const resize = vi.fn();
		const resizeEnd = vi.fn();
		element.addEventListener('w1c-window-move-start', moveStart);
		element.addEventListener('w1c-window-move', move);
		element.addEventListener('w1c-window-move-end', moveEnd);
		element.addEventListener('w1c-window-resize-start', resizeStart);
		element.addEventListener('w1c-window-resize', resize);
		element.addEventListener('w1c-window-resize-end', resizeEnd);

		const titlebar = element.shadowRoot?.querySelector('w1c-titlebar');
		titlebar?.dispatchEvent(pointerEvent('pointerdown', { clientX: 10, clientY: 20 }));
		titlebar?.dispatchEvent(pointerEvent('pointermove', { clientX: 30, clientY: 50 }));
		titlebar?.dispatchEvent(pointerEvent('pointerup', { clientX: 30, clientY: 50 }));

		const resizeHandle = element.shadowRoot?.querySelector<HTMLElement>('.resize-handle');
		resizeHandle?.dispatchEvent(pointerEvent('pointerdown', { clientX: 0, clientY: 0 }));
		resizeHandle?.dispatchEvent(pointerEvent('pointermove', { clientX: 30, clientY: 40 }));
		resizeHandle?.dispatchEvent(pointerEvent('pointerup', { clientX: 30, clientY: 40 }));

		expect(moveStart).toHaveBeenCalledTimes(1);
		expect(move).toHaveBeenCalledWith(expect.objectContaining({ detail: expect.objectContaining({ x: 20, y: 30 }) }));
		expect(moveEnd).toHaveBeenCalledTimes(1);
		expect(resizeStart).toHaveBeenCalledTimes(1);
		expect(resize).toHaveBeenCalledWith(
			expect.objectContaining({ detail: expect.objectContaining({ width: 350, height: 280 }) })
		);
		expect(resizeEnd).toHaveBeenCalledTimes(1);
	});

	it('normalizes string window geometry before moving and resizing', async () => {
		installPointerCaptureStubs();

		const element = await createElement('w1c-window');
		const typed = element as unknown as {
			movable: boolean;
			resizable: boolean;
			x: string;
			y: string;
			width: string;
			height: string;
			minWidth: string;
			minHeight: string;
		};
		typed.movable = true;
		typed.resizable = true;
		typed.x = '24';
		typed.y = '16';
		typed.width = '420';
		typed.height = '280';
		typed.minWidth = '320';
		typed.minHeight = '220';
		await element.updateComplete;

		const move = vi.fn();
		const resize = vi.fn();
		element.addEventListener('w1c-window-move', move);
		element.addEventListener('w1c-window-resize', resize);

		const titlebar = element.shadowRoot?.querySelector('w1c-titlebar');
		titlebar?.dispatchEvent(pointerEvent('pointerdown', { clientX: 10, clientY: 20 }));
		titlebar?.dispatchEvent(pointerEvent('pointermove', { clientX: 50, clientY: 60 }));
		titlebar?.dispatchEvent(pointerEvent('pointerup', { clientX: 50, clientY: 60 }));

		const resizeHandle = element.shadowRoot?.querySelector<HTMLElement>('.resize-handle');
		resizeHandle?.dispatchEvent(pointerEvent('pointerdown', { clientX: 0, clientY: 0 }));
		resizeHandle?.dispatchEvent(pointerEvent('pointermove', { clientX: 40, clientY: 50 }));

		expect(move).toHaveBeenCalledWith(expect.objectContaining({ detail: expect.objectContaining({ x: 64, y: 56 }) }));
		expect(resize).toHaveBeenCalledWith(
			expect.objectContaining({ detail: expect.objectContaining({ width: 460, height: 330 }) })
		);
	});
});

describe('keyboard and focus behavior', () => {
	it('delegates address-field focus to the native input', async () => {
		const element = await createElement('w1c-address-field');
		const input = element.shadowRoot?.querySelector('input');

		element.focus();

		expect(element.shadowRoot?.activeElement).toBe(input);
	});

	it('moves tab selection with arrow, home, and end keys while skipping disabled tabs', async () => {
		const element = await createTabs();
		const tabs = element.querySelectorAll<HTMLButtonElement>('[slot="tabs"]');
		tabs[1].disabled = true;

		tabs[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true, composed: true }));
		await element.updateComplete;
		await element.updateComplete;

		expect((element as unknown as { selected: number }).selected).toBe(2);
		expect(tabs[2].getAttribute('aria-selected')).toBe('true');

		tabs[2].dispatchEvent(new KeyboardEvent('keydown', { key: 'Home', bubbles: true, composed: true }));
		await element.updateComplete;
		await element.updateComplete;

		expect((element as unknown as { selected: number }).selected).toBe(0);

		tabs[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true, composed: true }));
		await element.updateComplete;
		await element.updateComplete;

		expect((element as unknown as { selected: number }).selected).toBe(2);
	});
});

async function createTabs() {
	const element = document.createElement('w1c-tabs') as TestElement;

	element.innerHTML = `
		<button slot="tabs">One</button>
		<button slot="tabs">Two</button>
		<button slot="tabs">Three</button>
		<section>One panel</section>
		<section>Two panel</section>
		<section>Three panel</section>
	`;

	document.body.append(element);
	await element.updateComplete;
	return element;
}
