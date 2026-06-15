---
title: Components | W1C Docs
description: W1C component catalog with examples, slots, attributes, parts, accessibility, and theme notes.
---

<p class="doc-kicker">Catalog</p>

# Components

The catalog covers shell, desktop, menu, navigation, and notification primitives for Windows 95, Ubuntu/GNOME, Classic Mac, Web 1.0, and Geocities surfaces.

## Import paths

Register the stable set:

```ts
import '@w1c/components';
```

Cherry-pick one element:

```ts
import '@w1c/components/dialog';
import '@w1c/components/desktop-icon';
import '@w1c/components/menu';
import '@w1c/components/tabs';
```

## Component status

| Component           | Status | Category     | Notes                                                    |
| ------------------- | ------ | ------------ | -------------------------------------------------------- |
| `w1c-icon`          | Ready  | Icon         | Renders bundled W1C icon data or trusted `IconData`.     |
| `w1c-button`        | Ready  | Control      | Raised, sunken, and flat button styles.                  |
| `w1c-window`        | Ready  | Shell        | Presentational window with slots for chrome pieces.      |
| `w1c-titlebar`      | Ready  | Shell        | Dense titlebar for windows and dialogs.                  |
| `w1c-toolbar`       | Ready  | Shell        | Compact row for buttons, fields, and menus.              |
| `w1c-statusbar`     | Ready  | Shell        | Footer row for status text and panes.                    |
| `w1c-desktop-icon`  | Ready  | Desktop      | Shortcut with icon and wrapped label.                    |
| `w1c-dialog`        | Ready  | Overlay      | Dialog shell for alerts, confirmations, and small forms. |
| `w1c-panel`         | Ready  | Shell        | Framed content group with header and footer slots.       |
| `w1c-taskbar`       | Ready  | Desktop      | Taskbar/panel row with start, content, and tray regions. |
| `w1c-menu-bar`      | Ready  | Menu         | Horizontal menubar surface for app chrome.               |
| `w1c-menu`          | Ready  | Menu         | Vertical menu surface for commands.                      |
| `w1c-menu-item`     | Ready  | Menu         | Button or anchor command with prefix and suffix slots.   |
| `w1c-address-field` | Ready  | Field        | Toolbar location field with input, prefix, and actions.  |
| `w1c-tabs`          | Ready  | Navigation   | Slotted tabs with keyboard selection.                    |
| `w1c-toast`         | Ready  | Notification | Status, info, warning, and danger notification shell.    |

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
		<w1c-address-field label="Location" value="/documents/"></w1c-address-field>
	</w1c-toolbar>

	<p>Window content stays ordinary HTML.</p>
	<w1c-statusbar slot="statusbar">3 objects</w1c-statusbar>
</w1c-window>
```

## Panels and taskbars

```html
<w1c-panel variant="raised">
	<strong slot="header">System Properties</strong>
	<p>Panel content stays ordinary HTML.</p>
	<w1c-button slot="footer">Apply</w1c-button>
</w1c-panel>

<w1c-taskbar>
	<w1c-button slot="start">Start</w1c-button>
	<w1c-button variant="sunken">Documents</w1c-button>
	<span slot="tray">10:24 AM</span>
</w1c-taskbar>
```

Panel attributes:

- `variant`: `raised`, `sunken`, or `flat`.

Taskbar slots:

- `start`
- default content
- `tray`

## Menus

```html
<w1c-menu-bar>
	<w1c-menu-item>File</w1c-menu-item>
	<w1c-menu-item>Edit</w1c-menu-item>
	<w1c-menu-item>View</w1c-menu-item>
</w1c-menu-bar>

<w1c-menu label="File">
	<w1c-menu-item>New Window</w1c-menu-item>
	<w1c-menu-item checked>Show Toolbar</w1c-menu-item>
	<w1c-menu-item>
		Print
		<span slot="suffix">Ctrl+P</span>
	</w1c-menu-item>
	<w1c-menu-item disabled>Publish</w1c-menu-item>
</w1c-menu>
```

Menu item attributes:

- `href`: renders an anchor when present.
- `disabled`: prevents activation.
- `checked`: shows a default checkmark in the prefix slot.

Events:

- `w1c-menu-item-select`: fires from enabled menu items when selected.

## Address field

```html
<w1c-address-field label="Location" value="https://example.net/docs/">
	<span slot="prefix" aria-hidden="true">▸</span>
	<w1c-button slot="actions">Go</w1c-button>
</w1c-address-field>
```

Attributes:

- `label`
- `value`
- `placeholder`
- `disabled`
- `readonly`

Events:

- `input`
- `change`

## Tabs

```html
<w1c-tabs selected="0">
	<button slot="tabs" type="button">General</button>
	<button slot="tabs" type="button">Security</button>
	<section>
		<p>General settings and summary details.</p>
	</section>
	<section>
		<p>Access controls and trusted sites.</p>
	</section>
</w1c-tabs>
```

Attributes:

- `selected`: zero-based selected tab index.

Events:

- `w1c-tab-change`: fires with `detail.selected`.

## Toast

```html
<w1c-toast title="Upload" variant="status" closeable>
	<span slot="icon" aria-hidden="true">!</span>
	File transfer completed.
	<w1c-button slot="actions">Open</w1c-button>
</w1c-toast>
```

Attributes:

- `open`: controls visibility.
- `title`: optional title text.
- `variant`: `status`, `info`, `warning`, or `danger`.
- `closeable`: shows the close button.

Events:

- `w1c-toast-close`: fires when the close button closes the toast.

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

`w1c-tabs` assigns tab and panel roles to slotted elements and supports arrow, Home, and End keys. Use real buttons or links in the `tabs` slot so focus and activation stay native.

`w1c-menu` and `w1c-menu-bar` provide roles and styling, but they do not open popovers or manage nested submenus. Apps should decide when menus appear and where focus moves.

Icon-only controls still need accessible labels. Use `aria-label` on slotted buttons and `label` on `w1c-icon` when the icon conveys meaning.

## Theme notes

Theme files set component tokens. The Windows 95 theme follows the Tempest bevel and teal desktop references. Ubuntu 8.10 follows the Intrepid Ibex warm GNOME chrome. Classic Mac follows System.css-style monochrome controls, striped titlebars, and square dialog geometry.
