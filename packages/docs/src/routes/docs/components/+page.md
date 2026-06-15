---
title: Components | W1C Docs
description: Priority 1 W1C component catalog with examples, slots, attributes, parts, accessibility, and theme notes.
---

<p class="doc-kicker">Catalog</p>

# Components

Priority 1 covers the shell pieces needed for Windows 95, Ubuntu/GNOME, and Classic Mac surfaces: icons, buttons, windows, titlebars, toolbars, statusbars, desktop icons, and dialogs.

## Import paths

Register the stable set:

```ts
import '@w1c/components';
```

Cherry-pick one element:

```ts
import '@w1c/components/dialog';
import '@w1c/components/desktop-icon';
```

## Component status

| Component          | Status | Category | Notes                                                    |
| ------------------ | ------ | -------- | -------------------------------------------------------- |
| `w1c-icon`         | Ready  | Icon     | Renders bundled W1C icon data or trusted `IconData`.     |
| `w1c-button`       | Ready  | Control  | Raised, sunken, and flat button styles.                  |
| `w1c-window`       | Ready  | Shell    | Presentational window with slots for chrome pieces.      |
| `w1c-titlebar`     | Ready  | Shell    | Dense titlebar for windows and dialogs.                  |
| `w1c-toolbar`      | Ready  | Shell    | Compact row for buttons, fields, and menus.              |
| `w1c-statusbar`    | Ready  | Shell    | Footer row for status text and panes.                    |
| `w1c-desktop-icon` | Ready  | Desktop  | Shortcut with icon and wrapped label.                    |
| `w1c-dialog`       | Ready  | Overlay  | Dialog shell for alerts, confirmations, and small forms. |

## Shell example

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

## Desktop icon

```html
<w1c-desktop-icon label="Home Folder" href="/home">
	<w1c-icon slot="icon" name="folder" label="Folder"></w1c-icon>
	Home Folder
</w1c-desktop-icon>
```

Attributes:

- `href`: renders an anchor when present. Without it, the component renders a button.
- `label`: accessible name and fallback label.
- `selected`: marks the icon as selected.

Parts:

- `control`
- `icon`
- `label`

## Dialog

```html
<w1c-dialog title="Confirm Move" variant="alert">
	<w1c-icon slot="icon" name="info" label="Information"></w1c-icon>
	<p>The selected file will be moved to the archive folder.</p>
	<div slot="actions">
		<w1c-button>Cancel</w1c-button>
		<w1c-button>Move</w1c-button>
	</div>
</w1c-dialog>
```

Attributes:

- `title`: accessible dialog label and default titlebar text.
- `variant`: `window` or `alert`.

Slots:

- default body content
- `icon`
- `titlebar`
- `actions`

Parts:

- `chrome`
- `titlebar`
- `body`
- `icon`
- `content`
- `actions`

## Accessibility

`w1c-window` is a presentational group. `w1c-dialog` uses `role="dialog"` or `role="alertdialog"` but does not trap focus or manage modality. Apps should move focus, set inert background state when needed, and close dialogs from their own event handlers.

Icon-only controls still need accessible labels. Use `aria-label` on slotted buttons and `label` on `w1c-icon` when the icon conveys meaning.

## Theme notes

Theme files set component tokens. The Windows 95 theme follows the Tempest bevel and teal desktop references. Ubuntu 8.10 follows the Intrepid Ibex warm GNOME chrome. Classic Mac follows System.css-style monochrome controls, striped titlebars, and square dialog geometry.
