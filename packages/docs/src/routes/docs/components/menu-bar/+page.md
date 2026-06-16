---
title: Menu Bar | W1C Docs
description: Horizontal menubar surface for app chrome.
---

<p class="doc-kicker">w1c-menu-bar</p>

# Menu Bar

Use `w1c-menu-bar` for application-level menu headings.

```ts
import '@w1c/components/menu-bar';
```

```html
<w1c-menu-bar>
	<w1c-menu-item>File</w1c-menu-item>
	<w1c-menu-item>Edit</w1c-menu-item>
	<w1c-menu-item>View</w1c-menu-item>
</w1c-menu-bar>
```

## Slots

- default menu items

## Parts

- `chrome`
- `menu-bar`

## Accessibility

The component provides menu-bar styling and role context. Applications own popover behavior and focus movement between opened menus.
