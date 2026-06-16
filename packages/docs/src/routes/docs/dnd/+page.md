---
title: DnD | W1C Docs
description: Framework-neutral drag, resize, pointer session, and geometry helpers for windows and desktop surfaces.
---

<p class="doc-kicker">DnD</p>

# Drag & Drop

`@w1c/dnd` contains the pointer math used by draggable and resizable W1C windows. It has no
framework dependencies and does not store geometry for you.

```ts
import {
	createDragSession,
	createResizeSession,
	moveDrag,
	moveResize,
	startPointerSession,
	endPointerSession
} from '@w1c/dnd';
```

## Geometry

Use the pure helpers when you already have pointer coordinates. They do not touch the DOM.

```ts
const drag = createDragSession(1, { x: 20, y: 30 }, { x: 100, y: 120 });

moveDrag(drag, { x: 40, y: 15 });
// { x: 120, y: 105 }
```

Resize helpers apply optional minimum and maximum constraints.

```ts
const resize = createResizeSession(1, { x: 0, y: 0 }, { width: 320, height: 220 });

moveResize(resize, { x: -80, y: 120 }, { minWidth: 300, minHeight: 180, maxHeight: 260 });
// { width: 300, height: 260 }
```

## Pointer Sessions

The DOM helpers cover the repeated pointer-event work:

- start only from the primary button and primary pointer
- capture the active pointer on the handle element
- match move and end events by `pointerId`
- release capture on pointer up or pointer cancel

```ts
let session = null;

function onPointerDown(event: PointerEvent) {
	const result = startPointerSession(event);
	if (!result) return;

	session = result.session;
}

function onPointerUp(event: PointerEvent) {
	if (endPointerSession(session, event)) {
		session = null;
	}
}
```

## Window Integration

`w1c-window` uses `@w1c/dnd` internally when you opt into movement or resizing.

```html
<w1c-window title="Mailbox" movable resizable x="24" y="16" width="380" height="260" min-width="300" min-height="220">
	<p>Drag the titlebar. Resize from the bottom-right handle.</p>
</w1c-window>
```

`w1c-window` reflects `moving` and `resizing` while a session is active, so themes and app
code can set cursors, `user-select: none`, or visual state classes. It emits move and resize
events with `{ x, y, width, height }` in `detail`.

Persistence, z-index, focus, and maximized state stay in application code. The DnD package
only handles pointer sessions and geometry.

## Example

This was adapted from the [Ibex](https://tangled.org/desertthunder.dev/ibex) codebase.

You can see it in action [right here](https://ibex.desertthunder.dev).
