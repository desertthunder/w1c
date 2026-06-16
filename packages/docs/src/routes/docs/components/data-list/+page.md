---
title: Data List | W1C Docs
description: Dense record list for files, endpoints, and search rows.
---

<script>
	import ComponentPreview from '$components/ComponentPreview.svelte';
</script>

<p class="doc-kicker">w1c-data-list</p>

# Data List

`w1c-data-list` frames row-like links, buttons, or elements.

```ts
import '@w1c/components/data-list';
```

<ComponentPreview components={['data-list']}>
<w1c-data-list>
<strong slot="header">Endpoints</strong>
<button type="button">
<span>/api/documents</span>
<span>200 OK</span>
</button>
<a href="/api/search">
<span>/api/search</span>
<span>304 Cached</span>
</a>
<span slot="footer">2 routes</span>
</w1c-data-list>
</ComponentPreview>

```html
<w1c-data-list>
	<strong slot="header">Endpoints</strong>
	<button type="button">
		<span>/api/documents</span>
		<span>200 OK</span>
	</button>
	<a href="/api/search">
		<span>/api/search</span>
		<span>304 Cached</span>
	</a>
	<span slot="footer">2 routes</span>
</w1c-data-list>
```

## API

- `compact`

## Slots

- `header`
- default rows
- `footer`

## Parts

- `chrome`
- `header`
- `list`
- `footer`
