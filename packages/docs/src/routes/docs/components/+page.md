---
title: Components | W1C Docs
description: Index of W1C custom elements with links to examples, API notes, accessibility notes, and theming notes.
---

<p class="doc-kicker">Catalog</p>

# Components

W1C components are framework-agnostic custom elements. Import the whole stable set with `@w1c/components`, or import one component at a time from its package path.

## Shell

- [`w1c-window`](/docs/components/window/): window shell with titlebar, toolbar, content, and statusbar slots.
- [`w1c-titlebar`](/docs/components/titlebar/): dense titlebar for windows and dialogs.
- [`w1c-toolbar`](/docs/components/toolbar/): compact row for buttons, fields, and menus.
- [`w1c-statusbar`](/docs/components/statusbar/): footer row for status text and panes.
- [`w1c-panel`](/docs/components/panel/): framed group with header, content, and footer regions.
- [`w1c-divider`](/docs/components/divider/): horizontal or vertical separator with an optional label.

## Controls

- [`w1c-button`](/docs/components/button/): raised, sunken, and flat command control.
- [`w1c-address-field`](/docs/components/address-field/): toolbar location field with input, prefix, and actions.
- [`w1c-label`](/docs/components/label/): form label with required and disabled states.
- [`w1c-input`](/docs/components/input/): native text input with W1C control chrome.
- [`w1c-select`](/docs/components/select/): native select control with W1C control chrome.
- [`w1c-textarea`](/docs/components/textarea/): native textarea with W1C control chrome.
- [`w1c-checkbox`](/docs/components/checkbox/): labelled native checkbox control.
- [`w1c-validation-message`](/docs/components/validation-message/): compact validation and helper message.
- [`w1c-tabs`](/docs/components/tabs/): slotted tabs with keyboard selection.

## Desktop

- [`w1c-desktop-icon`](/docs/components/desktop-icon/): desktop shortcut as a button or link.
- [`w1c-taskbar`](/docs/components/taskbar/): taskbar or GNOME-style panel row.

## Geocities

- [`w1c-badge-88x31`](/docs/components/badge-88x31/): native-size early-web badge.
- [`w1c-visitor-counter`](/docs/components/visitor-counter/): odometer-style visitor count.
- [`w1c-guestbook-panel`](/docs/components/guestbook-panel/): guestbook entries and sign links.
- [`w1c-webring`](/docs/components/webring/): previous, home, random, and next ring navigation.
- [`w1c-under-construction`](/docs/components/under-construction/): hazard-stripe unfinished page notice.
- [`w1c-marquee`](/docs/components/marquee/): reduced-motion friendly marquee banner.
- [`w1c-blink`](/docs/components/blink/): reduced-motion friendly inline blink emphasis.
- [`w1c-tiled-background`](/docs/components/tiled-background/): repeated image or CSS background surface.
- [`w1c-link-cluster`](/docs/components/link-cluster/): directory-style link grouping.
- [`w1c-last-updated`](/docs/components/last-updated/): static page update stamp.
- [`w1c-image-map`](/docs/components/image-map/): clickable sticker sheet with positioned hotspots.

## Menus

- [`w1c-menu-bar`](/docs/components/menu-bar/): horizontal app menu surface.
- [`w1c-menu`](/docs/components/menu/): vertical command menu surface.
- [`w1c-menu-item`](/docs/components/menu-item/): button or anchor command row.

## Documents And Data

- [`w1c-data-table`](/docs/components/data-table/): dense ARIA table grid for admin rows and file details.
- [`w1c-data-list`](/docs/components/data-list/): dense record list for files, endpoints, and search rows.
- [`w1c-status-card`](/docs/components/status-card/): compact status summary card for admin and setup surfaces.
- [`w1c-endpoint-row`](/docs/components/endpoint-row/): dense endpoint and status row for admin lists.
- [`w1c-source-viewer`](/docs/components/source-viewer/): full source viewer shell with toolbar, pathbar, source pane, and statusbar.
- [`w1c-document-browser`](/docs/components/document-browser/): browser shell with toolbar, sidebar, content pane, and statusbar.
- [`w1c-word-processor`](/docs/components/word-processor/): editor shell with toolbar, ruler, paper page, and details pane.
- [`w1c-json-viewer`](/docs/components/json-viewer/): read-only formatted JSON/source viewer.

## Feedback And Icons

- [`w1c-dialog`](/docs/components/dialog/): dialog shell for alerts, confirmations, and small forms.
- [`w1c-toast`](/docs/components/toast/): status, info, warning, and danger notification shell.
- [`w1c-alert`](/docs/components/alert/): inline alert or flash notice.
- [`w1c-icon`](/docs/components/icon/): inline SVG icon renderer for bundled W1C icon data.

## Import Paths

```ts
import '@w1c/components';

import '@w1c/components/window';
import '@w1c/components/badge-88x31';
import '@w1c/components/data-table';
import '@w1c/components/json-viewer';
```

Theme files set component tokens. See [Usage](/docs/usage/) for token and CSS part examples.
