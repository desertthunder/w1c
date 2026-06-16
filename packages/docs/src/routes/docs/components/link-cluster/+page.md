---
title: Link Cluster | W1C Docs
description: Directory-style cluster of hand-authored links.
---

<p class="doc-kicker">w1c-link-cluster</p>

# Link Cluster

Use `w1c-link-cluster` for blogrolls, neighborhood links, site maps, and hand-authored link pages.

```ts
import '@w1c/components/link-cluster';
```

```html
<w1c-link-cluster heading="Neighborhood Links" columns="two">
	<ul>
		<li><a href="/zines/">Zines</a></li>
		<li><a href="/buttons/">Button Wall</a></li>
	</ul>
</w1c-link-cluster>
```

## API

- `heading`: visible heading.
- `columns`: `auto`, `one`, or `two`.

## Slots

- default links or lists

## Parts

- `chrome`
- `heading`
- `content`
