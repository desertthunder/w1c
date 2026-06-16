export type Point = { x: number; y: number };

export type Size = { width: number; height: number };

export type Rect = Point & Size;

export type PointerSession = { pointerId: number; target: HTMLElement };

export type DragSession = { pointerId: number; start: Point; origin: Point };

export type ResizeSession = { pointerId: number; start: Point; origin: Size };

export type ResizeConstraints = { minWidth?: number; minHeight?: number; maxWidth?: number; maxHeight?: number };

export type PointerSessionResult = { session: PointerSession; point: Point };

export function createDragSession(pointerId: number, start: Point, origin: Point): DragSession {
	return { pointerId, start, origin };
}

export function moveDrag(session: DragSession, point: Point): Point {
	return { x: session.origin.x + point.x - session.start.x, y: session.origin.y + point.y - session.start.y };
}

export function createResizeSession(pointerId: number, start: Point, origin: Size): ResizeSession {
	return { pointerId, start, origin };
}

export function moveResize(session: ResizeSession, point: Point, constraints: ResizeConstraints = {}): Size {
	const width = session.origin.width + point.x - session.start.x;
	const height = session.origin.height + point.y - session.start.y;

	return {
		width: clamp(width, constraints.minWidth, constraints.maxWidth),
		height: clamp(height, constraints.minHeight, constraints.maxHeight)
	};
}

function clamp(value: number, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY): number {
	return Math.min(Math.max(value, min), max);
}

export function pointFromPointerEvent(event: PointerEvent): Point {
	return { x: event.clientX, y: event.clientY };
}

export function isPrimaryButtonStart(event: PointerEvent): boolean {
	return event.button === 0 && event.isPrimary !== false;
}

export function matchesPointerSession(session: Pick<PointerSession, 'pointerId'> | null, event: PointerEvent): boolean {
	return Boolean(session && session.pointerId === event.pointerId);
}

export function startPointerSession(event: PointerEvent, target = event.currentTarget): PointerSessionResult | null {
	if (!isPrimaryButtonStart(event) || !(target instanceof HTMLElement)) {
		return null;
	}

	target.setPointerCapture(event.pointerId);

	return { session: { pointerId: event.pointerId, target }, point: pointFromPointerEvent(event) };
}

export function endPointerSession(session: PointerSession | null, event: PointerEvent): boolean {
	if (!session || session.pointerId !== event.pointerId) {
		return false;
	}
	if (session.target.hasPointerCapture(event.pointerId)) {
		session.target.releasePointerCapture(event.pointerId);
	}

	return true;
}
