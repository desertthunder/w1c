# Roadmap

W1C is a web component library for retro operating-system and early-web UI.

Two local projects helped define the desired feel and primitive set:

- [ibex](https://tangled.org/desertthunder.dev/ibex): Ubuntu 8.10 / GNOME 2 desktop UI.
- [tempest](https://tangled.org/desertthunder.dev/tempest): Windows 95-style windows,
  forms, docs, and admin surfaces.

W1C should stand on its own and stay small.

## Design System Contract

W1C ships five public surfaces:

- `@w1c/lib`: Lit web components with stable custom element names.
- `@w1c/lib/themes/*`: CSS theme files and design tokens.
- `@w1c/lib/icons/*`: icon assets and icon metadata.
- `@w1c/lib/styles/*`: optional native element styles and CSS utilities.
- `@w1c/cli`: scaffolding helpers for adding W1C to HTML pages and projects that can load
  custom elements, ESM, CSS, and static assets.

The public API should follow the useful patterns from Web Awesome, Nord, Crayons, and Bolt:

- Components are plain custom elements usable anywhere the platform supports custom
  elements, ESM, CSS, and static assets.
- Components can be imported one at a time for small bundles.
- Themes are explicit CSS imports, not hidden global side effects.
- Optional CSS utilities are separate from required theme styles.
- Icon and asset loading has a documented base-path story.
- Docs include installation, usage, theming, accessibility notes, component examples,
  and migration notes.
- Storybook is the component workshop and visual regression surface.

Reference notes:

- Web Awesome documents CDN and npm usage, cherry-picked component imports, theme CSS,
  optional native styles/utilities, asset base paths, integration guides, server-rendering
  notes, visual tests, and AI usage docs.
- Nord documents a component catalog with status, category filters, accessible
  descriptions, tokens, themes, CSS, icons, templates, and web components.
- Crayons emphasizes no-build CDN usage, tree-shakable/lazy web components, CSS variable
  customization, optional CSS utilities, i18n, icons, and wrapper packages.
- Bolt separates visual styles, layouts, elements, components, animations, and guidelines
  as a "system of systems."

## Web 1.0 And Geocities Contract

W1C's Geocities and Web 1.0 layer should model the early personal-web vocabulary without
requiring obsolete markup or inaccessible behavior.

Historical cues to support:

- Static-page composition: fixed sections, visible navigation lists, site-map pages,
  hand-authored link clusters, and personal "home page" structure.
- Theme neighborhoods: named page themes and directory-like navigation inspired by
  GeoCities neighborhoods and street-address URLs.
- Tiled backgrounds, starfields, paper textures, loud image borders, beveled rules, and
  high-contrast link colors.
- 88x31 badge buttons for browsers, editors, operating systems, "best viewed in",
  validation, affiliation, and project links.
- Guestbook, webring, visitor counter, email-me, and under-construction primitives.
- Marquee/blink-inspired components with reduced-motion fallbacks and accessible text.
- Table/frames-era layout cues expressed with modern semantic HTML and CSS grid, not real
  layout tables unless rendering tabular data.
- Image-map-style navigation and clickable sticker sheets.
- Low-bandwidth constraints: small images, sprite sheets, repeated assets, and
  intentionally simple markup.
- DIY voice: visible labels, obvious links, decorative separators, personal badges, and
  "last updated" metadata.

Required Geocities components:

- `w1c-badge-88x31`
- `w1c-visitor-counter`
- `w1c-guestbook-panel`
- `w1c-webring`
- `w1c-under-construction`
- `w1c-marquee`
- `w1c-blink`
- `w1c-tiled-background`
- `w1c-link-cluster`
- `w1c-last-updated`
- `w1c-image-map`

Acceptance checks:

- The Geocities theme can make a static HTML page look intentionally hand-built without
  relying on invalid HTML.
- Motion components respect `prefers-reduced-motion`.
- Badges and counters remain readable at native 88x31 scale and when zoomed.
- Docs include examples for static HTML with no build step.

Research sources:

- Web 1.0 common elements: static pages, frames, tables, marquee/blink, guestbooks, GIF
  buttons, and mailto forms.
- GeoCities history: free personal homepages organized by themed neighborhoods.
- Early web design history: tables, spacer GIFs, browser wars, CSS emergence, animated
  GIFs, image maps, and bandwidth constraints.
- Indie web revival notes: chaotic/colorful personal sites, pixel GIFs, webrings, and
  anti-algorithmic creative autonomy.

## Reference App Lessons

### Intrepid Ibex

Intrepid Ibex demonstrates the GNOME 2 / Ubuntu 8.10 direction W1C should be able to express.

Useful primitives:

- Desktop shell background and panel tokens.
- Top panel with launchers, window list, menu bar slot, and tray slot.
- Desktop icon.
- Application window with titlebar, icon, controls, menubar slot, toolbar slot, content
  slot, resize affordance, and native/GTK variant.
- Menu bar, menu item, separator, submenu, and disabled item.
- Toolbar and address/location field.
- Dialog and setup dialog.
- Status/tray indicators.
- JSON/document viewer shell primitives for gedit-style surfaces.

Useful icon families:

- Humanity-style apps: browser, mail, terminal, file manager, text editor, feed reader.
- Humanity-style places/devices/status: home, folder, trash, computer, volume, wireless.
- Mime icons: text document and PDF.

Design checks:

- Components preserve Ubuntu 8.10-style dense desktop spacing, panel chrome, window
  affordances, and accessible names.
- GNOME/Ubuntu theme tokens are portable and not tied to any app or protocol.
- The visual language works in standalone docs and Storybook examples without copying
  Intrepid app state.

### Tempest

Tempest demonstrates the Windows 95 and document/admin surface direction W1C should be
able to express.

Useful primitives:

- Windows 95 desktop shell background and texture tokens.
- Taskbar/start-button primitive.
- Window, titlebar, controls, toolbar, statusbar, and resize-less window variant.
- Raised/sunken button.
- Form field, label, input, select, textarea, checkbox, and validation message styling.
- Flash/alert window.
- Data table, data list, status card, and endpoint row.
- Document browser shell with bookmarks/sidebar, toolbar, location field, content pane,
  toast, and statusbar.
- Word processor shell with toolbar, ruler, page, article typography, source/details area,
  and statusbar.

Useful icons:

- Window controls: minimize, maximize, close.
- Actions: back, forward, refresh, search, print, stop.
- Formatting: bold, italic, underline, align-left, highlight, list.
- Objects/status: computer, browser, page, doc, database, home, warning, danger, info,
  GitHub, AT symbol.

Design checks:

- Components preserve Windows 95 raised/sunken geometry, titlebars, toolbar density, and
  readable admin/document layouts.
- Windows 95 theme tokens are portable and not tied to any app or protocol.
- Static markup examples work without inline scripts or app-specific data.

## Package Architecture

### `packages/lib`

Keep this as the only runtime component package.

Target entrypoints:

- `@w1c/lib`: register all stable components.
- `@w1c/lib/components/window.js`
- `@w1c/lib/components/button.js`
- `@w1c/lib/components/icon.js`
- `@w1c/lib/themes/gnome2.css`
- `@w1c/lib/themes/ubuntu-810.css`
- `@w1c/lib/themes/windows-95.css`
- `@w1c/lib/themes/classic-mac.css`
- `@w1c/lib/themes/geocities.css`
- `@w1c/lib/styles/native.css`
- `@w1c/lib/styles/utilities.css`
- `@w1c/lib/icons/humanity.css`
- `@w1c/lib/icons/win95.css`

Implementation rules:

- Use Lit for components.
- Use Shadow DOM for component internals only when it does not prevent theming.
- Expose CSS parts for chrome, titlebars, toolbars, controls, content, and statusbars.
- Prefer slots over adapter-specific render APIs.
- Keep behavior conservative: buttons, dialogs, menus, tabs, disclosure, drag/resize
  only where needed.
- Avoid ATProto-specific behavior in components.

### `packages/docs`

Docs is the public documentation app.

Required sections:

- Getting started.
- Installation for CDN/no-build usage, npm package usage, bundlers, static HTML, and
  server-rendered HTML.
- Component catalog.
- Icon catalog.
- Theme catalog.
- Recipes for static HTML, npm/bundler usage, and server-rendered HTML.
- Accessibility notes.
- Migration guide from app-local CSS/components.
- Changelog.

### `packages/storybook`

Storybook is the component workshop.

Required stories:

- One page per component.
- Theme switcher for GNOME 2, Ubuntu 8.10, Windows 95, classic Mac, and Geocities.
- Icon galleries for Humanity and Windows 95 icons.
- Reference examples that show GNOME 2/Ubuntu and Windows 95 screens without depending
  on local apps.
- Keyboard/focus states, disabled states, long labels, narrow viewports, and high-density
  examples.

### `packages/cli`

The CLI is a convenience wrapper, not a required runtime dependency.

Initial commands:

- `w1c init`: add W1C imports and theme setup to an existing project.
- `w1c add theme`: add one or more theme CSS imports.
- `w1c add icons`: copy or configure icon assets.
- `w1c create`: create a small static or bundled demo.

Initial templates:

- Static HTML.
- Bundler project.
- Static site.
- Server-rendered asset pipeline.

## Phase 0: Workspace Foundation

Status: mostly done.

- Establish the pnpm workspace with `packages/docs`, `packages/storybook`,
  `packages/lib`, and `packages/cli`.
- Keep `packages/lib` as the Lit/Vite component package.
- Keep `packages/docs` as the public documentation app.
- Keep `packages/storybook` as the isolated component demo and regression surface.
- Keep `packages/cli` as the bootstrap/scaffolding entrypoint.
- Replace the starter `my-element` with real W1C component names.

## Phase 1: Tokens, Themes, Icons

Goal: make existing local app styling portable before adding many components.

- Define common token layers: color, typography, spacing, border, radius, shadow, z-index,
  motion.
- Add Ubuntu 8.10 / GNOME 2 tokens informed by Intrepid Ibex.
- Add Windows 95 tokens informed by Tempest.
- Add first-pass classic Mac, Web 1.0, and Geocities tokens.
- Add icon asset packaging and a base-path helper.
- Add icon metadata for name, family, category, source app, and intended size.
- Document icon licensing/source assumptions before publishing.

Deliverable:

- Docs page and Storybook gallery showing themes and icons without app-specific code.

## Phase 2: First Components

Goal: ship the smallest useful component set for standalone retro UIs.

Priority 1:

- `w1c-icon`
- `w1c-button`
- `w1c-window`
- `w1c-titlebar`
- `w1c-toolbar`
- `w1c-statusbar`
- `w1c-desktop-icon`
- `w1c-dialog`

Priority 2:

- `w1c-panel`
- `w1c-taskbar`
- `w1c-menu-bar`
- `w1c-menu`
- `w1c-menu-item`
- `w1c-address-field`
- `w1c-tabs`
- `w1c-toast`

Priority 3:

- `w1c-data-table`
- `w1c-data-list`
- `w1c-document-browser`
- `w1c-word-processor`
- `w1c-json-viewer`
- `w1c-geocities-badge`
- `w1c-marquee`
- `w1c-visitor-counter`
- `w1c-webring`
- `w1c-under-construction`
- `w1c-divider`

Deliverable:

- Docs and Storybook demonstrate the first components across GNOME 2/Ubuntu, Windows 95,
  classic Mac, and Geocities themes.

## Phase 3: Usage Recipes

Goal: prove the package works in common integration styles.

- Add a static HTML recipe using CDN-style assets.
- Add an npm/bundler recipe using direct ESM imports.
- Add a server-rendered HTML recipe for asset pipeline integrations.
- Add migration notes for app-local CSS variables to W1C tokens.

Deliverable:

- Docs include copy-paste examples for common project types without assuming a specific
  app.

## Phase 4: Quality Gates

Goal: make changes safe enough for a visual component library.

- Add unit tests for registration, attributes/properties, events, and accessibility
  helpers.
- Add browser tests for focus, keyboard menus, dialog behavior, and slot rendering.
- Add visual smoke tests across themes.
- Add package export checks for every documented import path.
- Add docs build checks and Storybook build checks.
- Add CI once repository workflow is ready.

## Non-Goals For Now

- No app router.
- No data fetching or ATProto client.
- No full desktop/window manager state system.
- No wrapper packages until web component usage proves insufficient.
- No design-token build pipeline until plain CSS files become painful.
- No broad modern SaaS component set unless it directly serves retro UI patterns.
