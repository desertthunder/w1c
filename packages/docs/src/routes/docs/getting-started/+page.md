---
title: Getting started | W1C Docs
description: Preview the W1C package API and render the first retro custom element.
---

<p class="doc-kicker">Getting started</p>

# Build a W1C page

W1C is a Lit web component package for retro operating-system and early-web UI. Import the elements once, choose a theme, then write ordinary HTML.

<div class="callout">
W1C components use the <code>w1c-</code> prefix and work anywhere custom elements, ESM, CSS, and static assets are available.
</div>

## Release status

W1C is not released yet. The examples below show the intended package API.

## First window

```ts
import '@w1c/components';
```

```html
<w1c-window title="Documents">
	<w1c-toolbar slot="toolbar">
		<w1c-button>Back</w1c-button>
		<w1c-button>Forward</w1c-button>
	</w1c-toolbar>

	<h1>Quarterly Notes</h1>
	<p>W1C renders a retro shell without taking over your app.</p>

	<w1c-statusbar slot="statusbar">3 objects</w1c-statusbar>
</w1c-window>
```

## What to read next

<ol class="steps">
	<li><a href="/docs/installation/">Check release status</a> before using W1C in another project.</li>
	<li><a href="/docs/usage/">Use W1C components</a> with slots, attributes, and direct imports.</li>
	<li><a href="/docs/components/">Browse the component catalog</a> for slots, parts, and theme notes.</li>
</ol>
