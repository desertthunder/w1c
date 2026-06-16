---
title: Toast | W1C Docs
description: Status, info, warning, and danger notification shell.
---

<p class="doc-kicker">w1c-toast</p>

# Toast

Use `w1c-toast` for inline or floating notification content.

```ts
import '@w1c/components/toast';
```

```html
<w1c-toast title="Upload" variant="status" closeable>
	<w1c-icon slot="icon" name="info" label=""></w1c-icon>
	File transfer completed.
	<w1c-button slot="actions">Open</w1c-button>
</w1c-toast>
```

## API

- `open`: controls visibility.
- `title`
- `variant`: `status`, `info`, `warning`, or `danger`.
- `closeable`: shows the close button.

## Slots

- `icon`
- default content
- `actions`

## Events

- `w1c-toast-close`: fires when the close button closes the toast.
