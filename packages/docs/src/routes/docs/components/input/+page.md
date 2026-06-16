---
title: Input | W1C Docs
description: Native text input with W1C control chrome.
---

<script>
	import ComponentPreview from '$components/ComponentPreview.svelte';
</script>

<p class="doc-kicker">w1c-input</p>

# Input

Use `w1c-input` for text-like fields that need themeable retro chrome.

```ts
import '@w1c/components/input';
```

<ComponentPreview components={['input']}>
<w1c-input name="hostname" value="mail-01" required></w1c-input>
</ComponentPreview>

```html
<w1c-input name="hostname" value="mail-01" required></w1c-input>
```

## API

- `type`
- `name`
- `value`
- `placeholder`
- `autocomplete`
- `disabled`
- `readonly`
- `required`
- `invalid`

## Events

- `input`
- `change`

## CSS Parts

- `control`
- `input`
