---
title: Address Field | W1C Docs
description: Toolbar location field with input, prefix, and actions.
---

<script>
	import ComponentPreview from '$components/ComponentPreview.svelte';
</script>

<p class="doc-kicker">w1c-address-field</p>

# Address Field

Use `w1c-address-field` for browser, file-manager, and document-location toolbars.

```ts
import '@w1c/components/address-field';
import '@w1c/components/button';
```

<ComponentPreview components={['address-field', 'button']}>
<w1c-address-field label="Location" value="https://example.net/docs/">
<span slot="prefix" aria-hidden="true">></span>
<w1c-button slot="actions">Go</w1c-button>
</w1c-address-field>
</ComponentPreview>

```html
<w1c-address-field label="Location" value="https://example.net/docs/">
	<span slot="prefix" aria-hidden="true">></span>
	<w1c-button slot="actions">Go</w1c-button>
</w1c-address-field>
```

## API

- `label`
- `value`
- `placeholder`
- `disabled`
- `readonly`

## Slots

- `label`
- `prefix`
- `actions`

## Events

- `input`
- `change`

## Parts

- `chrome`
- `label`
- `prefix`
- `input`
- `actions`
