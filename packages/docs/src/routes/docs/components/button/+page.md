---
title: Button | W1C Docs
description: Raised, sunken, and flat button styles with w1c-button.
---

<p class="doc-kicker">w1c-button</p>

# Button

Use `w1c-button` for retro command buttons while keeping native button behavior.

```ts
import '@w1c/components/button';
```

```html
<w1c-button>OK</w1c-button>
<w1c-button variant="sunken">Pressed</w1c-button>
<w1c-button variant="flat">Flat</w1c-button>
```

## API

- `variant`: `raised`, `sunken`, or `flat`.
- `disabled`: disables the native control.

## Parts

- `button`

## Accessibility

Use clear text labels. Icon-only buttons need `aria-label`.
