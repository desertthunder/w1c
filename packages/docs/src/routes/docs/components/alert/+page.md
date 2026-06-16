---
title: Alert | W1C Docs
description: Inline alert or flash notice.
---

<p class="doc-kicker">w1c-alert</p>

# Alert

Use `w1c-alert` for inline status, warning, success, and danger notices.

```ts
import '@w1c/components/alert';
```

```html
<w1c-alert title="Deployment" variant="warning">
	Configuration saved, but one endpoint still needs credentials.
	<w1c-button slot="actions">Review</w1c-button>
</w1c-alert>
```

## API

- `title`
- `variant`: `status`, `info`, `success`, `warning`, or `danger`.

## Slots

- `icon`
- default content
- `actions`

## CSS Parts

- `chrome`
- `icon`
- `content`
- `title`
- `actions`
