---
title: Installation | W1C Docs
description: Install W1C with npm, bundlers, static HTML, and server-rendered pages.
---

<p class="doc-kicker">Installation</p>

# Install W1C

Use W1C as a package when your project has a build step. Use browser ESM imports when you are proving a static page or server-rendered template.

## npm

```sh
pnpm add @w1c/components
```

Register every stable component from the package root:

```ts
import '@w1c/components';
```

Cherry-pick one component when a page only needs a narrow surface:

```ts
import '@w1c/components/window';
import '@w1c/components/button';
```

## Static HTML

```html
<link rel="stylesheet" href="/assets/w1c/themes/windows-95.css" />
<script type="module" src="/assets/w1c/components/index.js"></script>

<w1c-button>Start</w1c-button>
```

The static asset path is only a placeholder until the package has a published CDN or copied asset layout. Keep the import explicit so your page still shows which theme and component bundle it needs.

## Server-rendered HTML

Render W1C markup on the server the same way you render native HTML. Load the component module and theme CSS in the page template:

```html
<head>
	<link rel="stylesheet" href="/static/w1c/themes/ubuntu-810.css" />
	<script type="module" src="/static/w1c/components/index.js"></script>
</head>
<body>
	<w1c-window title="Server Rendered">
		<p>This markup can come from Rails, Phoenix, Django, or plain templates.</p>
	</w1c-window>
</body>
```

## SvelteKit and Vite

Import W1C in a browser entry, route layout, or page component:

```ts
import '@w1c/components';
```

Import one theme beside the component registration:

```ts
import '@w1c/components';
import '@w1c/components/themes/windows-95.css';
```

Optional native element styles and utilities are separate imports:

```ts
import '@w1c/components/styles/native.css';
import '@w1c/components/styles/utilities.css';
```
