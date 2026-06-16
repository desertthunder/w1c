---
title: Badge 88x31 | W1C Docs
description: Native-size 88x31 badge button for early-web links and affiliations.
---

<script>
	import ComponentPreview from '$components/ComponentPreview.svelte';
</script>

<p class="doc-kicker">w1c-badge-88x31</p>

# Badge 88x31

Use `w1c-badge-88x31` for browser badges, project links, validators, affiliations, and "best viewed in" stamps.

```ts
import '@w1c/components/badge-88x31';
```

<ComponentPreview components={['badge-88x31']}>
<w1c-badge-88x31 href="/about/" label="My Site">
<span slot="icon">★</span>
LOL
</w1c-badge-88x31>
</ComponentPreview>

```html
<w1c-badge-88x31 href="/about/" label="My Site">
	<span slot="icon">★</span>
	LOL
</w1c-badge-88x31>
```

## API

- `href`: renders the badge as a link when set.
- `target`: forwarded to the link.
- `rel`: forwarded to the link.
- `variant`: `split`, `plain`, or `warning`.
- `label`: fallback text when the default slot is empty.

## Slots

- default badge label
- `icon`: small left-side mark

## Parts

- `chrome`
- `icon`
- `label`
