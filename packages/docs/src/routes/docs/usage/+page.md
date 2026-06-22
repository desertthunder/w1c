---
title: Usage | W1C Docs
description: Use W1C components with slots, attributes, CSS custom properties, and CSS parts.
---

<p class="doc-kicker">Usage</p>

# Using W1C

W1C components are custom elements.

They expose small attributes, named slots, CSS custom properties, and CSS parts instead
of framework adapters.

## Register components

The root import registers the stable component set:

```ts
import '@w1c/components';
```

Direct imports register one component and its local dependencies:

```ts
import '@w1c/components/window';
import '@w1c/components/dialog';
import '@w1c/components/desktop-icon';
```

## Use icons

The package includes one W1C icon set as data exports. The root import registers `w1c-icon`, and `@w1c/components/icons` exposes icon data, names, and metadata.

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
source URL, license, attribution text, and intended size. See the [Icons](/docs/icons/)
page for the asset base-path API and icon styling notes, and the
[Icon Catalog](/docs/icons/catalog/) for attributions.

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

Dialogs and desktop icons use the same slot-first shape:

```html
<w1c-dialog title="Confirm Move" variant="alert">
	<w1c-icon slot="icon" name="info" label="Information"></w1c-icon>
	<p>The selected file will be moved to the archive folder.</p>
	<div slot="actions">
		<w1c-button>Cancel</w1c-button>
		<w1c-button>Move</w1c-button>
	</div>
</w1c-dialog>

<w1c-desktop-icon label="Home Folder" href="/home">
	<w1c-icon slot="icon" name="folder" label="Folder"></w1c-icon>
	Home Folder
</w1c-desktop-icon>
```

## Style with tokens and parts

Theme files set W1C tokens for color, type, spacing, border, radius, shadow, z-index, and motion. The first themes are hand-authored against the retro references, with practical color scales informed by Reasonable Colors and Uchu.

```css
:root {
	--w1c-surface: #c0c0c0;
	--w1c-active-titlebar: #000080;
	--w1c-active-titlebar-text: #ffffff;
	--w1c-font-ui: 'Chicago', 'MS Sans Serif', sans-serif;
}

w1c-window::part(content) {
	background: white;
}
```

Set family tokens like `--w1c-font-ui`, `--w1c-font-heading`, and `--w1c-font-mono` for normal typography changes. Full shorthand tokens like `--w1c-control-font` are still available when you need to override size, weight, line-height, and family together.

## Keep app state outside the shell

`w1c-window` can opt into drag and resize behavior with `movable` and `resizable`. The pointer
math lives in `@w1c/dnd`; your app still owns persistence, z-index, focus state, and maximized
state. See [DnD](/docs/dnd/) for the standalone helpers.

`w1c-dialog` sets dialog roles but does not trap focus or make the page modal. Applications own focus movement, inert background state, close behavior, and any persistence.

## Guidance

Use [Recipes](/docs/recipes/) for static HTML, npm/bundler, server-rendered HTML, SvelteKit,
and Vite examples.

Use [Accessibility](/docs/accessibility/) for slots, labels, keyboard behavior, dialogs,
menus, focus, and reduced motion.

Use [Web 1.0 Guardrails](/docs/web-1-guardrails/) when building Geocities-style pages with
semantic HTML and no build steps.
