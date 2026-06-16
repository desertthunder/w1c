---
title: JSON Viewer | W1C Docs
description: Read-only formatted JSON/source viewer.
---

<script>
	import ComponentPreview from '$components/ComponentPreview.svelte';

	const jsonText = '{"status":"ready"}';
</script>

<p class="doc-kicker">w1c-json-viewer</p>

# JSON Viewer

`w1c-json-viewer` renders formatted JSON from a property or text attribute.

```ts
import '@w1c/components/json-viewer';
```

<ComponentPreview components={['json-viewer']}>
<w1c-json-viewer text={jsonText} line-numbers></w1c-json-viewer>
</ComponentPreview>

```html
<w1c-json-viewer text='{"status":"ready"}' line-numbers></w1c-json-viewer>
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
