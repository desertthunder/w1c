---
title: Textarea | W1C Docs
description: Native textarea with W1C control chrome.
---

<script>
	import ComponentPreview from '$components/ComponentPreview.svelte';
</script>

<p class="doc-kicker">w1c-textarea</p>

# Textarea

Use `w1c-textarea` for notes, comments, and larger text fields.

```ts
import '@w1c/components/textarea';
```

<ComponentPreview components={['textarea']}>
<w1c-textarea name="notes" rows="5" placeholder="Incident notes"></w1c-textarea>
</ComponentPreview>

```html
<w1c-textarea name="notes" rows="5" placeholder="Incident notes"></w1c-textarea>
```

## API

- `name`
- `value`
- `placeholder`
- `rows`
- `disabled`
- `readonly`
- `required`
- `invalid`

## Events

- `input`
- `change`

## CSS Parts

- `control`
- `textarea`
