---
title: JSON Viewer | W1C Docs
description: Read-only formatted JSON/source viewer.
---

<p class="doc-kicker">w1c-json-viewer</p>

# JSON Viewer

`w1c-json-viewer` renders formatted JSON from a property or text attribute.

```ts
import '@w1c/components/json-viewer';
```

```html
<w1c-json-viewer text='{"status":"ready"}' line-numbers></w1c-json-viewer>
```

```ts
const viewer = document.querySelector('w1c-json-viewer');
viewer.value = { status: 'ready', count: 3 };
```

## API

- `value`: JavaScript object value, set as a property.
- `text`: JSON string or source text.
- `indent`: JSON indentation size.
- `line-numbers`: shows the gutter.

## Slots

- `toolbar`

## Parts

- `chrome`
- `toolbar`
- `gutter`
- `code`
