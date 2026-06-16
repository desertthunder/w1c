---
title: Status Card | W1C Docs
description: Compact status summary card for admin and setup surfaces.
---

<script>
	import ComponentPreview from '$components/ComponentPreview.svelte';
</script>

<p class="doc-kicker">w1c-status-card</p>

# Status Card

Use `w1c-status-card` for small admin summaries such as uptime, queue depth, or build state.

```ts
import '@w1c/components/status-card';
```

<ComponentPreview components={['status-card']}>
<w1c-status-card title="Uptime" value="99.98%" variant="good">
Primary region
<span slot="footer">Checked 42 seconds ago</span>
</w1c-status-card>
</ComponentPreview>

```html
<w1c-status-card title="Uptime" value="99.98%" variant="good">
	Primary region
	<span slot="footer">Checked 42 seconds ago</span>
</w1c-status-card>
```

## API

- `title`
- `value`
- `variant`: `neutral`, `good`, `warning`, or `danger`.

## Slots

- `icon`
- default content
- `footer`

## CSS Parts

- `chrome`
- `icon`
- `content`
- `title`
- `value`
- `footer`
