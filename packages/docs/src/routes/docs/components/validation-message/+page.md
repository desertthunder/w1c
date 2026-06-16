---
title: Validation Message | W1C Docs
description: Compact validation and helper message.
---

<p class="doc-kicker">w1c-validation-message</p>

# Validation Message

Use `w1c-validation-message` under a field when a value needs correction or context.

```ts
import '@w1c/components/validation-message';
```

```html
<w1c-validation-message>Hostname is required.</w1c-validation-message>
```

## API

- `variant`: `error`, `warning`, or `info`.

## Slots

- `icon`
- default content

## CSS Parts

- `chrome`
- `icon`
- `content`
