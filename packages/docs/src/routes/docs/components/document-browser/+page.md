---
title: Document Browser | W1C Docs
description: Browser shell with toolbar, sidebar, content pane, and statusbar.
---

<p class="doc-kicker">w1c-document-browser</p>

# Browser

`w1c-document-browser` provides a document or file browser surface without owning routing or data loading.

```ts
import '@w1c/components/document-browser';
```

```html
<w1c-document-browser location="/docs/reference/">
	<nav slot="sidebar" aria-label="Bookmarks">
		<a href="#intro">Introduction</a>
	</nav>
	<h2 id="intro">Reference Manual</h2>
	<p>Document content stays ordinary HTML.</p>
	<w1c-statusbar slot="statusbar">1 bookmark</w1c-statusbar>
</w1c-document-browser>
```

## API

- `label`: accessible group label.
- `location`: default address field value.
- `hide-sidebar`: hides the sidebar.

## Slots

- `toolbar`
- `sidebar`
- default content
- `statusbar`

## Parts

- `chrome`
- `toolbar`
- `location`
- `body`
- `sidebar`
- `content`
- `statusbar`
