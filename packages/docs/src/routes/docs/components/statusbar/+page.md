---
title: Statusbar | W1C Docs
description: Footer row for status text and panes.
---

<script>
	import ComponentPreview from '$components/ComponentPreview.svelte';
</script>

<p class="doc-kicker">w1c-statusbar</p>

# Status Bar

Use `w1c-statusbar` for window footer text, counts, and small panes.

```ts
import '@w1c/components/statusbar';
```

<ComponentPreview components={['statusbar']}>
<w1c-statusbar>
<span>Ready</span>
<span>3 objects</span>
</w1c-statusbar>
</ComponentPreview>

```html
<w1c-statusbar>
	<span>Ready</span>
	<span>3 objects</span>
</w1c-statusbar>
```

## Slots

- default status content

## Parts

- `chrome`
- `statusbar`
- `content`
