---
title: Tiled Background | W1C Docs
description: Repeated image or CSS background surface for personal pages.
---

<script>
	import ComponentPreview from '$components/ComponentPreview.svelte';
</script>

<p class="doc-kicker">w1c-tiled-background</p>

# Tiled Background

Use `w1c-tiled-background` for starfields, paper textures, checkerboards, and other repeated page backgrounds.

```ts
import '@w1c/components/tiled-background';
```

<ComponentPreview components={['tiled-background']}>
<w1c-tiled-background color="#000066" tile-size="16px 16px">

<h2>Welcome</h2>
<p>This section sits on a repeated background.</p>
</w1c-tiled-background>
</ComponentPreview>

```html
<w1c-tiled-background color="#000066" tile-size="16px 16px">
	<h2>Welcome</h2>
	<p>This section sits on a repeated background.</p>
</w1c-tiled-background>
```

## API

- `src`: image URL to repeat.
- `color`: background color.
- `tile-size`: CSS background-size value.

## Slots

- default section content

## Parts

- `chrome`
- `content`
