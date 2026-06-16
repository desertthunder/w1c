---
title: Taskbar | W1C Docs
description: Desktop taskbar or GNOME-style panel row.
---

<script>
	import ComponentPreview from '$components/ComponentPreview.svelte';
</script>

<p class="doc-kicker">w1c-taskbar</p>

# Taskbar

`w1c-taskbar` arranges start controls, window buttons, and tray content.

```ts
import '@w1c/components/taskbar';
import '@w1c/components/button';
```

<ComponentPreview components={['taskbar', 'button']}>
<w1c-taskbar>
<w1c-button slot="start">Start</w1c-button>
<w1c-button variant="sunken">Documents</w1c-button>
<span slot="tray">10:24 AM</span>
</w1c-taskbar>
</ComponentPreview>

```html
<w1c-taskbar>
	<w1c-button slot="start">Start</w1c-button>
	<w1c-button variant="sunken">Documents</w1c-button>
	<span slot="tray">10:24 AM</span>
</w1c-taskbar>
```

## Slots

- `start`
- default content
- `tray`

## Parts

- `chrome`
- `start`
- `content`
- `tray`
