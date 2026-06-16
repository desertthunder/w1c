---
title: Icon | W1C Docs
description: Render bundled W1C icon data with w1c-icon.
---

<script>
	import ComponentPreview from '$components/ComponentPreview.svelte';
</script>

<p class="doc-kicker">w1c-icon</p>

# Icons

Renders bundled W1C icon data, or trusted local `IconData`, as inline SVG.

```ts
import '@w1c/components/icon';
```

<ComponentPreview components={['icon']}>
<w1c-icon name="folder" label="Folder"></w1c-icon>
</ComponentPreview>

```html
<w1c-icon name="folder" label="Folder"></w1c-icon>
```

## API

- `name`: bundled icon name.
- `label`: accessible label. Leave empty for decorative icons.
- `icon`: trusted `IconData`, set as a JavaScript property.

## Parts

- `icon`

## Notes

Do not pass user-authored SVG strings into `w1c-icon`. See [Icons](/docs/icons/) for icon data, metadata, and asset base-path details.
