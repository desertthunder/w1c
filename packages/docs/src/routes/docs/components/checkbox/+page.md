---
title: Checkbox | W1C Docs
description: Native checkbox with W1C label and control styling.
---

<script>
	import ComponentPreview from '$components/ComponentPreview.svelte';
</script>

<p class="doc-kicker">w1c-checkbox</p>

# Checkbox

Use `w1c-checkbox` for labelled binary settings.

```ts
import '@w1c/components/checkbox';
```

<ComponentPreview components={['checkbox']}>
<w1c-checkbox name="monitoring" checked>Enable monitoring</w1c-checkbox>
</ComponentPreview>

```html
<w1c-checkbox name="monitoring" checked>Enable monitoring</w1c-checkbox>
```

## API

- `name`
- `value`
- `checked`
- `disabled`
- `required`
- `invalid`

## Slots

- default content

## Events

- `change`

## CSS Parts

- `label`
- `control`
- `checkbox`
- `text`
