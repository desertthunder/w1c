---
title: Menu | W1C Docs
description: Vertical menu surface for commands.
---

<script>
	import ComponentPreview from '$components/ComponentPreview.svelte';
</script>

<p class="doc-kicker">w1c-menu</p>

# Menu

`w1c-menu` frames a vertical command list.

```ts
import '@w1c/components/menu';
import '@w1c/components/menu-item';
```

<ComponentPreview components={['menu', 'menu-item']}>
<w1c-menu label="File">
<w1c-menu-item>New Window</w1c-menu-item>
<w1c-menu-item checked>Show Toolbar</w1c-menu-item>
<w1c-menu-item disabled>Publish</w1c-menu-item>
</w1c-menu>
</ComponentPreview>

```html
<w1c-menu label="File">
	<w1c-menu-item>New Window</w1c-menu-item>
	<w1c-menu-item checked>Show Toolbar</w1c-menu-item>
	<w1c-menu-item disabled>Publish</w1c-menu-item>
</w1c-menu>
```

## API

- `label`: accessible menu label.

## Slots

- default menu items

## Parts

- `chrome`
- `menu`

## Accessibility

The component does not open or close itself. Host apps should decide where the menu appears and where focus moves.
