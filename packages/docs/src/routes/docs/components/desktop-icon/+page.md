---
title: Desktop Icon | W1C Docs
description: Desktop shortcut button or link with wrapped label.
---

<p class="doc-kicker">w1c-desktop-icon</p>

# Desktop Icons

`w1c-desktop-icon` renders a desktop shortcut. It becomes an anchor when `href` is present and a button otherwise.

```ts
import '@w1c/components/desktop-icon';
```

```html
<w1c-desktop-icon label="Home Folder" href="/home">
	<w1c-icon slot="icon" name="folder" label=""></w1c-icon>
	Home Folder
</w1c-desktop-icon>
```

## API

- `href`: renders an anchor when present.
- `label`: accessible name and fallback label.
- `selected`: marks the shortcut as selected.

## Slots

- `icon`
- default label

## Parts

- `control`
- `icon`
- `label`
