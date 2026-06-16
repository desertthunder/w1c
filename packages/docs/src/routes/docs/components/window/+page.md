---
title: Window | W1C Docs
description: Presentational window shell with titlebar, toolbar, content, and statusbar slots.
---

<p class="doc-kicker">w1c-window</p>

# Window

`w1c-window` is a presentational shell for retro desktop surfaces.

```ts
import '@w1c/components/window';
```

```html
<w1c-window title="Documents">
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

## Accessibility

The window uses `role="group"`. Applications own focus, dragging, resizing, and z-index behavior.
