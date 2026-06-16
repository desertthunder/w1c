---
title: Divider | W1C Docs
description: Horizontal or vertical separator with an optional label.
---

<script>
	import ComponentPreview from '$components/ComponentPreview.svelte';
</script>

<p class="doc-kicker">w1c-divider</p>

# Divider

Use `w1c-divider` between toolbar groups, menu groups, panels, or document sections.

```ts
import '@w1c/components/divider';
```

<ComponentPreview components={['divider']}>
<w1c-divider>Options</w1c-divider> <w1c-divider orientation="vertical"></w1c-divider>
</ComponentPreview>

```html
<w1c-divider>Options</w1c-divider> <w1c-divider orientation="vertical"></w1c-divider>
```

## API

- `orientation`: `horizontal` or `vertical`.

## Slots

- default optional label

## Parts

- `chrome`
- `line`
- `label`
