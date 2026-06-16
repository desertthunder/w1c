---
title: Image Map | W1C Docs
description: Image-map-style sticker sheet with accessible slotted hotspots.
---

<p class="doc-kicker">w1c-image-map</p>

# Image Map

Use `w1c-image-map` for clickable sticker sheets and image-map-style navigation with normal links or buttons.

```ts
import '@w1c/components/image-map';
```

```html
<w1c-image-map src="/map.png" alt="Homepage map" caption="Click a district.">
	<a href="/music/" style="--x: 8%; --y: 18%; --w: 28%; --h: 18%;">Music</a>
	<a href="/links/" style="--x: 56%; --y: 52%; --w: 32%; --h: 20%;">Links</a>
</w1c-image-map>
```

## API

- `src`: base image URL.
- `alt`: base image alt text.
- `caption`: optional visible caption.

## Slots

- default positioned anchors or buttons. Set `--x`, `--y`, `--w`, and `--h` on each hotspot.

## Parts

- `chrome`
- `image`
- `hotspots`
- `caption`
