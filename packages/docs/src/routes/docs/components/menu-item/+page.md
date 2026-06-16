---
title: Menu Item | W1C Docs
description: Button or anchor command row for menus and menubars.
---

<p class="doc-kicker">w1c-menu-item</p>

# Menu Item

`w1c-menu-item` renders a command row. It becomes an anchor when `href` is present.

```ts
import '@w1c/components/menu-item';
```

```html
<w1c-menu-item>
	Print
	<span slot="suffix">Ctrl+P</span>
</w1c-menu-item>
```

## API

- `href`: renders an anchor when present.
- `disabled`: prevents activation.
- `checked`: shows a default checkmark in the prefix slot.

## Slots

- `prefix`
- default label
- `suffix`

## Events

- `w1c-menu-item-select`: fires from enabled menu items when selected.

## Parts

- `control`
- `prefix`
- `label`
- `suffix`
