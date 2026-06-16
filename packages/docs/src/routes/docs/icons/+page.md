---
title: Icons | W1C Docs
description: Use W1C icons, icon metadata, and asset base paths for copied icon files, sprite sheets, and images.
---

<p class="doc-kicker">Icon Data</p>

# Icons

W1C ships one icon set as TypeScript data. The icons are inline
SVG paths, so they do not need a network request or asset base path.

```ts
import '@w1c/components/icon';
import { W1C_ICON_LICENSE_REVIEW, W1C_ICON_METADATA, W1C_ICON_NAMES, W1C_ICONS } from '@w1c/components/icons';
import type { IconData } from '@w1c/components/icons';

const folder: IconData = W1C_ICONS.folder;
const names = W1C_ICON_NAMES;
const source = W1C_ICON_METADATA.folder.sourceReferenceProject;
const review = W1C_ICON_LICENSE_REVIEW.status;
```

```html
<w1c-icon name="folder" label="Folder"></w1c-icon>
```

## Icon data

`IconData` matches the practical shape used by Iconify-style icon data:

```ts
type IconData = {
	body: string;
	width?: number;
	height?: number;
	left?: number;
	top?: number;
	rotate?: number;
	hFlip?: boolean;
	vFlip?: boolean;
};
```

Use package-provided data or trusted local data. Do not pass user-authored SVG strings
into `w1c-icon`.

`body` contains the inner SVG markup, not the outer `<svg>` element. It may include
multiple children, such as several `<path>` elements.

Set `width`, `height`, `left`, or `top` when the source icon uses a viewBox other than
`0 0 16 16`.

Bundled icons with source-specific viewBoxes:

- `danger`: `0 0 24 24`
- `globe`: `0 0 24 24`
- `pdf`: `0 0 15 15`
- `web-browser`: `0 0 24 24`

## Metadata

Each bundled icon has metadata for:

- name
- category
- source/reference project
- source icon name
- source URL
- license
- attribution text
- intended size

The bundled W1C icon set is normalized as package SVG data. Windows-style icons come from
Wikimedia Commons references. Other icon source families are: OpenMoji, Twemoji, FxEmoji,
Bootstrap Icons, & Ubuntu Humanity.

### Sources

- Wikimedia Commons Windows-style icon references: mixed per-file licenses.
- OpenMoji: CC BY-SA 4.0.
- Twemoji: CC BY 4.0.
- FxEmoji: CC BY 4.0.
- Bootstrap Icons: MIT.
- Ubuntu Humanity icon theme: mixed GPL / CC-BY-SA theme assets.
- Iconify icon data and icondata: data shape and attribution model references.
- Ibex and Tempest local references: coverage reference only.

Copied or source-derived icon assets still need file-level license review before they are added to the package.

## Asset Paths

Inline W1C icons do not need asset paths. Copied assets do: external icon files, SVG
sprite sheets, tiled backgrounds, and images need predictable URLs in static HTML, CDN,
Vite, SvelteKit, and server-rendered pages.

Configure those paths once:

```ts
import { resolveW1cAssetUrl, setW1cAssetBasePaths } from '@w1c/components/assets';

setW1cAssetBasePaths({ icons: '/assets/w1c/icons', sprites: '/assets/w1c/sprites', images: '/assets/w1c/images' });

const folderUrl = resolveW1cAssetUrl('icons', 'folder.svg');
const spriteUrl = resolveW1cAssetUrl('sprites', 'system.svg#close');
const tileUrl = resolveW1cAssetUrl('images', 'tiles/stars.gif');
```

`resolveW1cAssetUrl` leaves absolute URLs, root-relative URLs, data URLs, and
fragment-only URLs alone. Relative paths are joined to the configured base path for
their asset kind.

## Styling

`w1c-icon` exposes `part="icon"` on its SVG. Size and color use CSS custom properties:

```css
w1c-icon::part(icon) {
	image-rendering: pixelated;
}

w1c-icon {
	--w1c-icon-size: 16px;
	--w1c-icon-color: currentColor;
}
```
