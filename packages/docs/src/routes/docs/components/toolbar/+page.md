---
title: Toolbar | W1C Docs
description: Compact toolbar surface for buttons, fields, and menus.
---

<p class="doc-kicker">w1c-toolbar</p>

# Toolbar

`w1c-toolbar` groups controls inside windows, document browsers, and editors.

```ts
import '@w1c/components/toolbar';
```

```html
<w1c-toolbar>
	<w1c-button>Back</w1c-button>
	<w1c-button>Forward</w1c-button>
	<w1c-address-field label="Location" value="/docs/"></w1c-address-field>
</w1c-toolbar>
```

## Slots

- default controls

## Parts

- `chrome`
- `toolbar`
- `controls`

## Notes

Keep control labels short. Toolbar layout wraps when space is tight.
