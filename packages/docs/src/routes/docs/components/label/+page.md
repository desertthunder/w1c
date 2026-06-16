---
title: Label | W1C Docs
description: Form label primitive with required and disabled states.
---

<script>
	import ComponentPreview from '$components/ComponentPreview.svelte';
</script>

<p class="doc-kicker">w1c-label</p>

# Label

Use `w1c-label` for visible labels next to W1C form controls.

```ts
import '@w1c/components/label';
```

<ComponentPreview components={['label']}>
<w1c-label for="hostname" required>Hostname</w1c-label>
</ComponentPreview>

```html
<w1c-label for="hostname" required>Hostname</w1c-label>
```

## API

- `for`: id of the labelled control.
- `text`: fallback text when the default slot is empty.
- `required`
- `disabled`

## Slots

- default content

## CSS Parts

- `label`
- `required`
