---
title: Panel | W1C Docs
description: Framed panel surface for grouped controls, documents, and sidebar content.
---

<p class="doc-kicker">w1c-panel</p>

# Framed Panel

Use `w1c-panel` for grouped settings, sidebars, and document sections.

```ts
import '@w1c/components/panel';
```

```html
<w1c-panel variant="raised">
	<strong slot="header">System Properties</strong>
	<p>Panel content stays ordinary HTML.</p>
	<w1c-button slot="footer">Apply</w1c-button>
</w1c-panel>
```

## API

- `variant`: `raised`, `sunken`, or `flat`.

## Slots

- default content
- `header`
- `footer`

## Parts

- `chrome`
- `header`
- `content`
- `footer`
