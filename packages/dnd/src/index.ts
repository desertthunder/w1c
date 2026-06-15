export type Point = { x: number; y: number };

export type Size = { width: number; height: number };

export type Rect = Point & Size;

export type DragSession = { pointerId: number; start: Point; origin: Point };

export type ResizeSession = { pointerId: number; start: Point; origin: Size };

export type ResizeConstraints = { minWidth?: number; minHeight?: number; maxWidth?: number; maxHeight?: number };

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
