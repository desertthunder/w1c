---
title: Dialog | W1C Docs
description: Dialog shell for alerts, confirmations, and small forms.
---

<p class="doc-kicker">w1c-dialog</p>

# Dialog

`w1c-dialog` provides dialog chrome and layout. It does not manage modality.

```ts
import '@w1c/components/dialog';
```

```html
<w1c-dialog title="Confirm Move" variant="alert">
	<w1c-icon slot="icon" name="info" label="Information"></w1c-icon>
	<p>The selected file will be moved.</p>
	<div slot="actions">
		<w1c-button>Cancel</w1c-button>
		<w1c-button>Move</w1c-button>
	</div>
</w1c-dialog>
```

## API

- `title`: accessible dialog label and default titlebar text.
- `variant`: `window` or `alert`.

## Slots

- default body content
- `icon`
- `titlebar`
- `actions`

## Parts

- `chrome`
- `titlebar`
- `body`
- `icon`
- `content`
- `actions`

## Accessibility

The component uses `role="dialog"` or `role="alertdialog"`. Applications should move focus, close the dialog, and set inert background state when needed.
