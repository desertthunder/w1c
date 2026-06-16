---
title: Window | W1C Docs
description: Window shell with titlebar, toolbar, content, statusbar, and optional drag/resize behavior.
---

<p class="doc-kicker">w1c-window</p>

# Window

`w1c-window` is a shell for retro desktop surfaces. It stays static by default and can opt
into framework-neutral drag and resize behavior from `@w1c/dnd`.

```ts
import '@w1c/components/window';
```

```html
<w1c-window title="Documents" movable resizable x="24" y="16" width="420" height="280" min-width="320" min-height="220">
	<span slot="icon" aria-hidden="true">W</span>
	<div slot="controls">
		<w1c-button aria-label="Close">x</w1c-button>
	</div>
	<w1c-toolbar slot="toolbar">
		<w1c-button>Back</w1c-button>
		<w1c-button>Forward</w1c-button>
	</w1c-toolbar>
	<p>Window content stays ordinary HTML.</p>
	<w1c-statusbar slot="statusbar">3 objects</w1c-statusbar>
</w1c-window>
```

## API

- `title`: accessible group label and default titlebar text.
- `movable`: enables titlebar pointer dragging.
- `resizable`: shows the bottom-right resize handle.
- `moving`: reflected while a move session is active.
- `resizing`: reflected while a resize session is active.
- `x`, `y`: current translated position in pixels.
- `width`, `height`: current explicit size in pixels.
- `min-width`, `min-height`, `max-width`, `max-height`: resize constraints.

## Events

- `w1c-window-move-start`
- `w1c-window-move`
- `w1c-window-move-end`
- `w1c-window-resize-start`
- `w1c-window-resize`
- `w1c-window-resize-end`

Each event detail includes `{ x, y, width, height }`. Store geometry, z-index, focus state,
and maximized state in your app code.

## Slots

- default content
- `titlebar`
- `icon`
- `controls`
- `toolbar`
- `statusbar`

## Parts

- `chrome`
- `titlebar`
- `toolbar`
- `content`
- `statusbar`
- `resize-handle`

## Accessibility

The window uses `role="group"`. Pointer capture keeps one mouse, pen, or touch session active
at a time. Native controls in the default titlebar do not start a move session.
