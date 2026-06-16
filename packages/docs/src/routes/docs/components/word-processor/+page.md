---
title: Word Processor | W1C Docs
description: Editor shell with toolbar, ruler, paper page, and details pane.
---

<p class="doc-kicker">w1c-word-processor</p>

# Word Processor

`w1c-word-processor` provides a document editor frame. The host app owns editing state.

```ts
import '@w1c/components/word-processor';
```

```html
<w1c-word-processor show-details>
	<w1c-toolbar slot="toolbar">
		<w1c-button>B</w1c-button>
		<w1c-button><i>I</i></w1c-button>
		<w1c-divider orientation="vertical"></w1c-divider>
		<w1c-button>Print</w1c-button>
	</w1c-toolbar>
	<h2>Quarterly Notes</h2>
	<p>Paper content stays editable by the host app.</p>
	<pre slot="details">mode: draft</pre>
</w1c-word-processor>
```

## API

- `label`: accessible group label.
- `show-details`: shows the details pane.

## Slots

- `toolbar`
- `ruler`
- default page content
- `details`
- `statusbar`

## Parts

- `chrome`
- `toolbar`
- `ruler`
- `workspace`
- `page`
- `details`
- `statusbar`
