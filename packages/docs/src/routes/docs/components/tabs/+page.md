---
title: Tabs | W1C Docs
description: Slotted tabs with keyboard selection.
---

<p class="doc-kicker">w1c-tabs</p>

# Tabs

`w1c-tabs` coordinates slotted tab buttons and panels.

```ts
import '@w1c/components/tabs';
```

```html
<w1c-tabs selected="0">
	<button slot="tabs" type="button">General</button>
	<button slot="tabs" type="button">Security</button>
	<section>
		<p>General settings.</p>
	</section>
	<section>
		<p>Security settings.</p>
	</section>
</w1c-tabs>
```

## API

- `selected`: zero-based selected tab index.

## Slots

- `tabs`
- default panels

## Events

- `w1c-tab-change`: fires with `detail.selected`.

## Accessibility

Use real buttons or links in the `tabs` slot so focus and activation stay native. Arrow, Home, and End keys are supported.
