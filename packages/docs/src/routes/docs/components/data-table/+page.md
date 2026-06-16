---
title: Data Table | W1C Docs
description: Dense ARIA table grid for interactive tables & details.
---

<p class="doc-kicker">w1c-data-table</p>

# Data Table

`w1c-data-table` frames row elements as a dense ARIA table grid.

```ts
import '@w1c/components/data-table';
```

```html
<w1c-data-table striped style="--w1c-data-table-columns: 1.4fr 1fr 1fr;">
	<span slot="caption">Network shares</span>
	<div slot="head" role="row">
		<strong role="columnheader">Name</strong>
		<strong role="columnheader">Type</strong>
		<strong role="columnheader">Status</strong>
	</div>
	<div role="row" aria-selected="true">
		<span role="cell">Public</span>
		<span role="cell">Folder</span>
		<span role="cell">Mounted</span>
	</div>
</w1c-data-table>
```

## API

- `compact`
- `striped`

## Slots

- `caption`
- `head`
- default body rows
- `foot`

## Parts

- `chrome`
- `table`
- `caption`
- `head`
- `body`
- `foot`

## Accessibility

Use `role="row"`, `role="columnheader"`, and `role="cell"` on slotted markup when the row content is not already semantic.
