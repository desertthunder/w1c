---
title: Typography | W1C Docs
description: Fonts used by each W1C theme for headings, UI text, and code.
---

<p class="doc-kicker">Typography</p>

# Theme typography

Each theme defines three font tokens:

```css
--w1c-font-heading
--w1c-font-ui
--w1c-font-mono
```

The docs app loads `@w1c/fonts/all.css`, then maps the selected type choices onto docs-only variables so the docs colors and layout stay fixed while you compare the typography.

| Theme       | Headings        | UI            | Code          |
| ----------- | --------------- | ------------- | ------------- |
| Windows 95  | IBM Plex Serif  | IBM Plex Sans | IBM Plex Mono |
| GNOME 2     | Ubuntu          | Ubuntu        | Ubuntu Mono   |
| Ubuntu 8.10 | Ubuntu          | Ubuntu        | Ubuntu Mono   |
| Classic Mac | ChiKareGo2      | ChicagoFLF    | Anonymous Pro |
| Web 1.0     | Times New Roman | Arial         | Courier New   |
| Geocities   | Comic Relief    | Comic Neue    | Comic Neue    |

Classic Mac heading and UI fonts are vendored from [system.css](https://github.com/sakofchit/system.css/tree/main/fonts). The other bundled faces come from Fontsource.
