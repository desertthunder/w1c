import { describe, expect, it, vi } from 'vitest';
import {
	createDragSession,
	createResizeSession,
	endPointerSession,
	isPrimaryButtonStart,
	matchesPointerSession,
	moveDrag,
	moveResize,
	pointFromPointerEvent,
	startPointerSession
} from './index';

class FakeHTMLElement {
	setPointerCapture = vi.fn();
	releasePointerCapture = vi.fn();
	hasPointerCapture = vi.fn(() => true);
}

vi.stubGlobal('HTMLElement', FakeHTMLElement);

describe('@w1c/dnd geometry', () => {
	it('moves a drag session from pointer deltas', () => {
		const session = createDragSession(4, { x: 20, y: 30 }, { x: 100, y: 120 });

		expect(moveDrag(session, { x: 15, y: 55 })).toEqual({ x: 95, y: 145 });
	});

	it('resizes from pointer deltas and clamps dimensions', () => {
		const session = createResizeSession(8, { x: 50, y: 75 }, { width: 320, height: 220 });

		expect(
			moveResize(session, { x: 10, y: 500 }, { minWidth: 300, maxWidth: 420, minHeight: 180, maxHeight: 260 })
		).toEqual({ width: 300, height: 260 });
	});
});

describe('@w1c/dnd pointer helpers', () => {
	it('accepts only primary button starts', () => {
		expect(isPrimaryButtonStart(pointerEvent({ button: 0, isPrimary: true }))).toBe(true);
		expect(isPrimaryButtonStart(pointerEvent({ button: 2, isPrimary: true }))).toBe(false);
		expect(isPrimaryButtonStart(pointerEvent({ button: 0, isPrimary: false }))).toBe(false);
	});

	it('creates sessions from pointer events and captures the active pointer', () => {
		const target = pointerTarget();
		const result = startPointerSession(pointerEvent({ pointerId: 12, clientX: 24, clientY: 48 }), target);

		expect(result).toEqual({ session: { pointerId: 12, target }, point: { x: 24, y: 48 } });
		expect(target.setPointerCapture).toHaveBeenCalledWith(12);
	});

	it('guards pointer session matches by pointer id', () => {
		const target = pointerTarget();
		const session = { pointerId: 2, target };

		expect(matchesPointerSession(session, pointerEvent({ pointerId: 2 }))).toBe(true);
		expect(matchesPointerSession(session, pointerEvent({ pointerId: 9 }))).toBe(false);
		expect(matchesPointerSession(null, pointerEvent({ pointerId: 2 }))).toBe(false);
	});

	it('releases pointer capture only for matching pointer up or cancel events', () => {
		const target = pointerTarget();
		const session = { pointerId: 7, target };

		expect(endPointerSession(session, pointerEvent({ pointerId: 2 }))).toBe(false);
		expect(target.releasePointerCapture).not.toHaveBeenCalled();

		expect(endPointerSession(session, pointerEvent({ pointerId: 7 }))).toBe(true);
		expect(target.releasePointerCapture).toHaveBeenCalledWith(7);
	});

	it('reads pointer coordinates without keeping DOM state', () => {
		expect(pointFromPointerEvent(pointerEvent({ clientX: 3, clientY: 6 }))).toEqual({ x: 3, y: 6 });
	});
});

function pointerTarget(): HTMLElement {
	return new FakeHTMLElement() as unknown as HTMLElement;
}

function pointerEvent(init: Partial<PointerEventInit> & { isPrimary?: boolean } = {}): PointerEvent {
	return { button: 0, clientX: 0, clientY: 0, isPrimary: true, pointerId: 1, ...init } as PointerEvent;
}
