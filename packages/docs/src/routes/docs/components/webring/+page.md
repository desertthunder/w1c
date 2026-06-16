---
title: Webring | W1C Docs
description: Webring navigation strip with named link slots.
---

<script>
	import ComponentPreview from '$components/ComponentPreview.svelte';
</script>

<p class="doc-kicker">w1c-webring</p>

# Webring

Use `w1c-webring` for previous, home, random, and next navigation around a ring of sites.

```ts
import '@w1c/components/webring';
```

<ComponentPreview components={['webring']}>
<w1c-webring name="Pixel Gardens Webring">
Personal sites with tiny images and big opinions.
<a slot="previous" href="/prev/">Previous</a>
<a slot="home" href="/ring/">Ring Home</a>
<a slot="random" href="/random/">Random</a>
<a slot="next" href="/next/">Next</a>
</w1c-webring>
</ComponentPreview>

```html
<w1c-webring name="Pixel Gardens Webring">
	Personal sites with tiny images and big opinions.
	<a slot="previous" href="/prev/">Previous</a>
	<a slot="home" href="/ring/">Ring Home</a>
	<a slot="random" href="/random/">Random</a>
	<a slot="next" href="/next/">Next</a>
</w1c-webring>
```

## API

- `name`: accessible navigation label and visible title.

## Slots

- default description
- `previous`
- `home`
- `random`
- `next`

## Parts

- `chrome`
- `title`
- `content`
- `nav`
