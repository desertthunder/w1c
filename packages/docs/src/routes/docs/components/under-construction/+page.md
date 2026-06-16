---
title: Under Construction | W1C Docs
description: Hazard-stripe notice for unfinished static sections.
---

<p class="doc-kicker">w1c-under-construction</p>

# Under Construction

Use `w1c-under-construction` for unfinished pages, placeholder sections, and nostalgic "come back soon" notes.

```ts
import '@w1c/components/under-construction';
```

```html
<w1c-under-construction message="Under Construction">
	Updates are posted whenever the modem cooperates.
</w1c-under-construction>
```

## API

- `message`: main sign text.

## Slots

- default details
- `icon`: custom sign icon

## Parts

- `chrome`
- `sign`
- `icon`
- `message`
- `details`
