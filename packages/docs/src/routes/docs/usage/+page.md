---
title: Usage | W1C Docs
description: Use W1C components with slots, attributes, CSS custom properties, and CSS parts.
---

<p class="doc-kicker">Usage</p>

# Using W1C

W1C components are custom elements. They expose small attributes, named slots, CSS custom properties, and CSS parts instead of framework adapters.

## Register components

The root import registers the stable component set:

```ts
import '@w1c/components';
```

Direct imports register one component and its local dependencies:

```ts
import '@w1c/components/window';
// or
import '@w1c/components/window/index.js';
```

## Use icons

The package includes one W1C icon set as data exports. The root import registers
`w1c-icon`, and `@w1c/components/icons` exposes icon data, names, and metadata.

```ts
import '@w1c/components/icon';
import type { IconData } from '@w1c/components/icons';
import { W1C_ICON_METADATA, W1C_ICONS } from '@w1c/components/icons';

const folder: IconData = W1C_ICONS.folder;
const license = W1C_ICON_METADATA.folder.license;
```

```html
<w1c-icon name="folder" label="Folder"></w1c-icon>
```

Icon metadata includes name, category, source/reference project, source icon name,
source URL, license, attribution text, and intended size. The first set is original
W1C artwork under MIT.

## Compose with slots

```html
<w1c-window title="Inbox">
	<span slot="icon" aria-hidden="true">M</span>
	<div slot="controls">
		<w1c-button aria-label="Close">x</w1c-button>
	</div>

	<w1c-toolbar slot="toolbar">
		<w1c-button>Reply</w1c-button>
		<w1c-button>Forward</w1c-button>
	</w1c-toolbar>

	<p>Slots keep the component useful in static HTML and app frameworks.</p>
</w1c-window>
```

## Style with tokens and parts

Theme files set W1C tokens for color, type, spacing, border, radius, shadow, z-index, and motion. The first themes are hand-authored against the retro references, with practical color scales informed by Reasonable Colors and Uchu.

```css
:root {
	--w1c-surface: #c0c0c0;
	--w1c-active-titlebar: #000080;
	--w1c-active-titlebar-text: #ffffff;
}

w1c-window::part(content) {
	background: white;
}
```

## Keep behavior outside the shell

`w1c-window` is a presentational shell today. Dragging and resizing belong to `@w1c/dnd`, which will keep pointer math out of the component package.
