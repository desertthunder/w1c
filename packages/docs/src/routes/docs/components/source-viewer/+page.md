---
title: Source Viewer | W1C Docs
description: Full source viewer shell with toolbar, pathbar, source pane, and statusbar.
---

<p class="doc-kicker">Component</p>

# `w1c-source-viewer`

`w1c-source-viewer` is the full gedit-style shell for source/code documents. Use `w1c-json-viewer` when you only need an embeddable JSON pane.

```ts
import '@w1c/components/source-viewer';
```

```html
<w1c-source-viewer filename="record.json" text='{"status":"ready"}' line-numbers>
	<w1c-toolbar slot="toolbar">
		<w1c-button>Copy</w1c-button>
		<w1c-button>Wrap</w1c-button>
		<w1c-divider orientation="vertical"></w1c-divider>
		<w1c-button>Save</w1c-button>
	</w1c-toolbar>
	<w1c-statusbar slot="statusbar">record.json - UTF-8</w1c-statusbar>
</w1c-source-viewer>
```

## API

- `label`: accessible group label.
- `filename`: default pathbar text.
- `text`: source text to render.
- `line-numbers`: shows the gutter.

## Slots

- `toolbar`
- `pathbar`
- default source content, used when `text` is empty
- `statusbar`

## Parts

- `chrome`
- `toolbar`
- `pathbar`
- `workspace`
- `gutter`
- `code`
- `statusbar`
