---
title: Installation | W1C Docs
description: Check W1C release status and preview the intended package imports.
---

<p class="doc-kicker">Installation</p>

# Installation

W1C is not released yet. Do not treat the package names below as installable npm
packages until a release is published.

## CLI setup

Scaffold a small Vite app:

```sh
w1c create my-w1c-app --template bundler --theme windows-95
```

Create other starter layouts with the same command:

```sh
w1c create my-static-page --template static-html --theme geocities
w1c create my-site --template static-site --theme classic-mac
w1c create my-server-views --template server-rendered --theme ubuntu-810
```

Update an existing browser entry file:

```sh
w1c init --entry src/main.ts --theme classic-mac
w1c init -e src/main.ts -t classic-mac
```

Add another theme import when a project needs a theme switcher or preview page:

```sh
w1c add theme gnome2 geocities --entry src/main.ts
w1c add theme gnome2 geocities -e src/main.ts
```

Copy a small icon sprite and configure asset base paths:

```sh
w1c add icons --public-dir public --base-path /w1c/icons --config src/w1c-assets.ts
w1c add icons -p public -b /w1c/icons -c src/w1c-assets.ts
w1c add icons --pub public --base-path /w1c/icons --conf src/w1c-assets.ts
```

## Intended package API

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

Copy the built W1C files into your static assets directory, then load one theme and one
component module.

```html
<link rel="stylesheet" href="/assets/w1c/themes/windows-95.css" />
<script type="module" src="/assets/w1c/components/index.js"></script>

<w1c-button>Start</w1c-button>
```

The static asset path is a placeholder until W1C has a published asset layout.
Keep the imports explicit so the page shows which theme and component bundle it needs.

## CDN/no-build

The intended CDN shape is the same as static HTML: one CSS file, one ESM module, and normal
custom element markup.

```html
<link rel="stylesheet" href="https://cdn.example.com/@w1c/components/themes/geocities.css" />
<script type="module" src="https://cdn.example.com/@w1c/components/index.js"></script>
```

Pin exact versions once a CDN package exists. For archival or personal sites, copying the
files into the site is safer than relying on a remote CDN.

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

See [Recipes](/docs/recipes/) for complete static HTML, npm, bundler, server-rendered HTML,
SvelteKit, and Vite examples.
