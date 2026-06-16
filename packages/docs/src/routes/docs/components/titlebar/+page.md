---
title: Titlebar | W1C Docs
description: Dense titlebar for windows and dialogs.
---

<p class="doc-kicker">w1c-titlebar</p>

# Titlebar

Use `w1c-titlebar` when a custom window or dialog needs standalone chrome.

```ts
import '@w1c/components/titlebar';
```

```html
<w1c-titlebar title="Document Viewer">
	<w1c-icon slot="icon" name="document" label=""></w1c-icon>
	<w1c-button slot="controls" aria-label="Close">x</w1c-button>
</w1c-titlebar>
```

## API

- `title`: title text.

## Slots

- `icon`
- default title content
- `controls`

## Parts

- `chrome`
- `titlebar`
- `icon`
- `title`
- `controls`
