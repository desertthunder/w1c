---
title: Endpoint Row | W1C Docs
description: Dense endpoint and status row for admin lists.
---

<script>
	import ComponentPreview from '$components/ComponentPreview.svelte';
</script>

<p class="doc-kicker">w1c-endpoint-row</p>

# Endpoint Row

Use `w1c-endpoint-row` for API routes, service checks, and other dense status lists.

```ts
import '@w1c/components/endpoint-row';
import '@w1c/components/button';
```

<ComponentPreview components={['endpoint-row', 'button']}>
<w1c-endpoint-row method="GET" path="/api/v1/incidents" status="200 OK" variant="good">
Public API
<w1c-button slot="actions">Open</w1c-button>
</w1c-endpoint-row>
</ComponentPreview>

```html
<w1c-endpoint-row method="GET" path="/api/v1/incidents" status="200 OK" variant="good">
	Public API
	<w1c-button slot="actions">Open</w1c-button>
</w1c-endpoint-row>
```

## API

- `method`
- `path`
- `status`
- `variant`: `neutral`, `good`, `warning`, or `danger`.

## Slots

- default content
- `actions`

## CSS Parts

- `chrome`
- `method`
- `content`
- `path`
- `status`
- `actions`
