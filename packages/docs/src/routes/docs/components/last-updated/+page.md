---
title: Last Updated | W1C Docs
description: Static page update stamp.
---

<script>
	import ComponentPreview from '$components/ComponentPreview.svelte';
</script>

<p class="doc-kicker">w1c-last-updated</p>

# Last Updated

Use `w1c-last-updated` for visible page maintenance dates.

```ts
import '@w1c/components/last-updated';
```

<ComponentPreview components={['last-updated']}>
<w1c-last-updated datetime="1999-08-24">August 24, 1999</w1c-last-updated>
</ComponentPreview>

```html
<w1c-last-updated datetime="1999-08-24">August 24, 1999</w1c-last-updated>
```

## API

- `datetime`: machine-readable date for the internal `time` element.
- `label`: visible label before the date.

## Slots

- default date text

## Parts

- `chrome`
- `label`
- `value`
