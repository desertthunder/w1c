---
title: Recipes | W1C Docs
description: Static HTML, npm, bundler, server-rendered HTML, SvelteKit, and Vite recipes for W1C.
---

<p class="doc-kicker">Recipes</p>

# Recipes

W1C is plain custom elements plus CSS. Pick the loading pattern that matches the page you
already have.

W1C is not published yet. Package names and CDN URLs below show the intended release API.

## Static HTML

Use this shape for hand-authored pages, small static sites, and no-build Geocities-style
pages.

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="stylesheet" href="/assets/w1c/themes/geocities.css" />
		<script type="module" src="/assets/w1c/components/index.js"></script>
		<title>My W1C Page</title>
	</head>
	<body data-w1c-theme="geocities">
		<main>
			<w1c-under-construction>Updated by hand.</w1c-under-construction>
			<w1c-window title="Links">
				<w1c-link-cluster>
					<a href="/about.html">About</a>
					<a href="/guestbook.html">Guestbook</a>
				</w1c-link-cluster>
			</w1c-window>
		</main>
	</body>
</html>
```

Keep the component module and theme CSS as two explicit files. That makes the page easy to
mirror on static hosting and easy to inspect without a framework.

## CDN or no-build

After W1C is published, the no-build path should load one theme CSS file and one ESM module
from a CDN:

```html
<link rel="stylesheet" href="https://cdn.example.com/@w1c/components/themes/windows-95.css" />
<script type="module" src="https://cdn.example.com/@w1c/components/index.js"></script>
```

Use CDN imports only for prototypes or static pages that can accept third-party availability
as a dependency. For production sites, pin an exact version and host copied assets when you
need long-term control.

## npm and bundlers

Install the package once it is released:

```sh
pnpm add @w1c/components
```

Register all components when bundle size is not the main concern:

```ts
import '@w1c/components';
import '@w1c/components/themes/windows-95.css';
```

Cherry-pick imports for smaller surfaces:

```ts
import '@w1c/components/window';
import '@w1c/components/button';
import '@w1c/components/statusbar';
import '@w1c/components/themes/gnome2.css';
```

Optional native element styles and utilities stay separate:

```ts
import '@w1c/components/styles/native.css';
import '@w1c/components/styles/utilities.css';
```

## Server-rendered HTML

Render custom element tags in your template and load W1C in the document shell. The server
does not need to execute Lit.

```html
<head>
	<link rel="stylesheet" href="/static/w1c/themes/ubuntu-810.css" />
	<script type="module" src="/static/w1c/components/index.js"></script>
</head>
<body>
	<w1c-window title="Account">
		<form method="post" action="/account">
			<w1c-label for="display-name">Display name</w1c-label>
			<w1c-input id="display-name" name="display_name" value="Owais"></w1c-input>
			<w1c-button type="submit">Save</w1c-button>
		</form>
	</w1c-window>
</body>
```

Use native form controls and server actions normally. W1C should decorate the UI, not own
your request lifecycle.

## SvelteKit

Register browser-only custom elements from `+layout.svelte`, `+page.svelte`, or a client
entry module. Static CSS imports can live beside the registration.

```svelte
<script>
	import '@w1c/components/window';
	import '@w1c/components/button';
	import '@w1c/components/themes/classic-mac.css';
</script>

<w1c-window title="SvelteKit">
	<w1c-button>Render</w1c-button>
</w1c-window>
```

If a route is server-rendered, leave W1C markup in the HTML and let the browser upgrade it
after the module loads. Avoid reading custom element instances during SSR.

## Vite

Import W1C from the app entry file:

```ts
// src/main.ts
import '@w1c/components';
import '@w1c/components/themes/web-1.css';
import './app.css';
```

Then write W1C tags in HTML, framework templates, or hydrated islands:

```html
<w1c-window title="Vite Demo">
	<w1c-toolbar slot="toolbar">
		<w1c-button>File</w1c-button>
		<w1c-button>Edit</w1c-button>
	</w1c-toolbar>
	<p>W1C runs after the browser loads the module.</p>
</w1c-window>
```

Put copied icons, sprites, and tiled backgrounds under `public/` when a component or page
needs stable asset URLs.
