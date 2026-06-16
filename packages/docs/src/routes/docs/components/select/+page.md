---
title: Select | W1C Docs
description: Native select control with W1C control chrome.
---

<p class="doc-kicker">w1c-select</p>

# Select

Use `w1c-select` for compact option lists.

```ts
import '@w1c/components/select';
```

```html
<w1c-select name="priority" value="normal">
	<option value="low">Low</option>
	<option value="normal">Normal</option>
	<option value="high">High</option>
</w1c-select>
```

## API

- `name`
- `value`
- `disabled`
- `required`
- `invalid`

## Slots

- default content: `option` and `optgroup` elements.

## Events

- `change`

## CSS Parts

- `control`
- `select`
