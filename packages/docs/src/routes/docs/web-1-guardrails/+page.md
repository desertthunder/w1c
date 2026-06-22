---
title: Web 1.0 and Geocities Guardrails | W1C Docs
description: >
  Semantic HTML, reduced motion, accessible marquee and blink alternatives, 
  and no-build examples for W1C early-web pages.
---

<p class="doc-kicker">Web 1.0</p>

# Web 1.0 and Geocities Guardrails

W1C's Web 1.0 and Geocities themes should look hand-built without bringing back broken
markup or inaccessible behavior.

## Use semantic HTML

Use modern document structure first. Add W1C components where they clarify the page.

```html
<header>
	<h1>Starbase Home Page</h1>
	<nav aria-label="Main">
		<a href="/index.html">Home</a>
		<a href="/links.html">Links</a>
		<a href="/guestbook.html">Guestbook</a>
	</nav>
</header>

<main>
	<section aria-labelledby="updates-heading">
		<h2 id="updates-heading">Updates</h2>
		<w1c-last-updated value="2026-06-22">June 22, 2026</w1c-last-updated>
	</section>
</main>
```

Use tables for tabular data, not page layout. Use CSS grid for frames-era layout cues.

Use real lists for navigation clusters and site maps.

## Prefer W1C alternatives to obsolete tags

Do not use `<marquee>` or `<blink>`.

Use W1C's motion-aware components and keep the text meaningful when motion stops.

```html
<w1c-marquee speed="12" pause-on-hover> New photos from the LAN party are online. </w1c-marquee>

<p><w1c-blink>New</w1c-blink> guestbook entries are posted.</p>
```

Do not use spacer GIFs for layout. Use margins, padding, grid, or the component's CSS parts.

## Respect reduced motion

Early-web pages often used constant motion. In W1C, motion is opt-in and should pause or
flatten when the visitor requests reduced motion.

Keep important announcements readable as static text. Do not put the only call to action in
a moving banner. Avoid stacking multiple moving regions on the same page.

## Keep no-build examples valid

A Geocities-style W1C page can be a single HTML file with copied assets:

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="stylesheet" href="./w1c/themes/geocities.css" />
		<script type="module" src="./w1c/components/index.js"></script>
		<title>My Home Page</title>
	</head>
	<body data-w1c-theme="geocities">
		<main>
			<h1>My Home Page</h1>
			<w1c-tiled-background tile="./stars.gif">
				<w1c-window title="Welcome">
					<p>This page is static HTML.</p>
					<w1c-badge-88x31 href="/about.html">About Me</w1c-badge-88x31>
				</w1c-window>
			</w1c-tiled-background>
		</main>
	</body>
</html>
```

## Keep the page loud, not hostile

High-contrast links, tiled backgrounds, badges, and counters are part of the design language.
They still need readable text and stable focus states.

- Put text over a solid or quiet backing surface when a tile is busy.
- Keep link colors visually distinct from body text.
- Provide `alt` text for real images and empty `alt=""` for purely decorative images.
- Make image-map hotspots large enough to click and give each hotspot a useful label.
- Use `mailto:` links only when a visible email address or contact path is also acceptable.
