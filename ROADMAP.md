# Roadmap

W1C is a web component library for retro operating-system and early-web UI.

Two local projects helped define the desired feel and primitive set:

- [ibex](https://tangled.org/desertthunder.dev/ibex): Ubuntu 8.10 / GNOME 2 desktop UI.
- [tempest](https://tangled.org/desertthunder.dev/tempest): Windows 95-style windows,
  forms, docs, and admin surfaces.

W1C should stand on its own and stay small.

## Design System Contract

W1C ships six public surfaces:

- `@w1c/components`: Lit web components with stable custom element names.
- `@w1c/dnd`: framework-neutral drag, resize, and geometry primitives for retro windows
  and desktop surfaces.
- `@w1c/components/themes/*`: CSS theme files and design tokens.
- `@w1c/components/icons/*`: the W1C icon set, icon data, assets, and source metadata.
- `@w1c/components/styles/*`: optional native element styles and CSS utilities.
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
- Drag and resize behavior lives in `@w1c/dnd`; components consume it instead of
  reimplementing pointer math.

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
- Reasonable Colors and Uchu inform practical, readable color token scales without
  requiring a token build pipeline at the start.
- OpenMoji, Twemoji, FxEmoji, Bootstrap Icons, and Ubuntu Humanity provide source material
  for one W1C icon set, subject to license and redistribution checks.

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
- Pointer-captured titlebar dragging and bottom-right resize behavior from
  `src/lib/components/AppWindow.svelte`.
- Menu bar, menu item, separator, submenu, and disabled item.
- Toolbar and address/location field.
- Dialog and setup dialog.
- Status/tray indicators.
- JSON/document viewer shell primitives for gedit-style surfaces.

Useful W1C icon set coverage:

- App icons: browser, mail, terminal, file manager, text editor, feed reader.
- Places/devices/status: home, folder, trash, computer, volume, wireless.
- Mime icons: text document and PDF.
- Colorful Web 1.0 or Geocities artwork, sourced from OpenMoji, Twemoji, or FxEmoji when
  licenses permit.
- Restrained UI action symbols, sourced from Bootstrap Icons when no better W1C-specific
  source exists.

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

Useful W1C icon set coverage:

- Window controls: minimize, maximize, close.
- Actions: back, forward, refresh, search, print, stop.
- Formatting: bold, italic, underline, align-left, highlight, list.
- Objects/status: computer, browser, page, doc, database, home, warning, danger, info,
  GitHub, AT symbol.
- Bootstrap Icons can source neutral action, formatting, and object symbols when no
  Windows 95-specific source is available.

Design checks:

- Components preserve Windows 95 raised/sunken geometry, titlebars, toolbar density, and
  readable admin/document layouts.
- Windows 95 theme tokens are portable and not tied to any app or protocol.
- Static markup examples work without inline scripts or app-specific data.

## Package Architecture

### `packages/dnd`

Keep this as the dependency-free interaction package. Publish it as `@w1c/dnd`.

Target entrypoints:

- `@w1c/dnd`: drag, resize, geometry, pointer-session, and constraint helpers.

Initial behavior to port from Intrepid Ibex:

- Start drag only on primary-button pointer input.
- Track one active pointer session by `pointerId`.
- Use pointer capture on the handle element and release it on pointer up or cancel.
- Compute drag position from start pointer coordinates plus origin geometry.
- Compute resize dimensions from start pointer coordinates plus origin size.
- Support minimum and maximum size constraints.
- Expose active drag/resize state so components can set `user-select: none`, cursors, and
  visual state classes.
- Keep persistence, z-index, maximized state, and app-specific focus callbacks outside
  `@w1c/dnd`.

Implementation rules:

- Use plain TypeScript and DOM pointer-event types only.
- Do not depend on Lit, Svelte, React, or browser storage.
- Keep the core math pure and unit-testable.
- Add optional DOM helpers only where they remove repeated pointer-capture boilerplate.
- Let `w1c-window`, docs, and Storybook own their markup, styles, ARIA labels, and CSS
  parts.

### `packages/lib`

Keep this as the source path for the only runtime component package. Publish it as
`@w1c/components`.

Target entrypoints:

- `@w1c/components`: register all stable components.
- `@w1c/components/window` and `@w1c/components/window/index.js`
- `@w1c/components/button` and `@w1c/components/button/index.js`
- `@w1c/components/icon` and `@w1c/components/icon/index.js`
- `@w1c/components/themes/gnome2.css`
- `@w1c/components/themes/ubuntu-810.css`
- `@w1c/components/themes/windows-95.css`
- `@w1c/components/themes/classic-mac.css`
- `@w1c/components/themes/web-1.css`
- `@w1c/components/themes/geocities.css`
- `@w1c/components/styles/native.css`
- `@w1c/components/styles/utilities.css`
- `@w1c/components/icons`: W1C icon set exports.
- `@w1c/components/icons/data`: `IconData` type and individual icon data exports.
- `@w1c/components/icons/w1c.css`: optional CSS helpers for the W1C icon set.

Implementation rules:

- Use Lit for components.
- Use Shadow DOM for component internals only when it does not prevent theming.
- Expose CSS parts for chrome, titlebars, toolbars, controls, content, and statusbars.
- Prefer slots over adapter-specific render APIs.
- Keep icons in a single W1C icon set. Do not expose separate public icon styles for each
  source family.
- Export `IconData` as the single-icon data primitive. Keep the shape compatible with
  Iconify-style icon data so icons can be rendered without a web component.
- Keep each icon's source project, source icon name, source URL, license, and attribution
  text explicit in metadata and generated code comments where bundled data needs it.
- Base hand-authored theme tokens on the reference apps, Reasonable Colors, and Uchu.
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
- Icon catalog for the W1C icon set, with per-icon source and license attribution.
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
- Icon galleries for the W1C icon set, including direct `IconData` rendering examples.
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
  `packages/lib`, `packages/dnd`, and `packages/cli`.
- Keep `packages/dnd` as the dependency-free drag/resize primitive package. Publish it as
  `@w1c/dnd`.
- Keep `packages/lib` as the Lit/Vite component package source. Publish it as
  `@w1c/components`.
- Keep `packages/docs` as the public documentation app. Keep it private and use
  `@w1c/docs` as its internal package name when the manifest is renamed.
- Keep `packages/storybook` as the isolated component demo and regression surface. Keep it
  private and use `@w1c/storybook` as its internal package name when the manifest is
  renamed.
- Keep `packages/cli` as the bootstrap/scaffolding entrypoint. Publish it as `@w1c/cli`.
- Share preview fixtures through `packages/lib/src/fixtures/preview.ts` only when docs and
  Storybook need the same stable public component or theme example.
- Keep one-off docs and Storybook examples local to their package.
- Treat generated output as debug evidence only. Source decisions belong in package `src/`
  directories or config files, not generated artifacts.
- Replace the starter `my-element` with real W1C component names.

## Phase 1: Tokens, Themes, Icons

Goal: make existing local app styling portable before adding many components.

- Define common token layers: color, typography, spacing, border, radius, shadow, z-index,
  motion.
- Use Reasonable Colors and Uchu as color references for readable theme token scales.
- Add Ubuntu 8.10 / GNOME 2 tokens informed by Intrepid Ibex.
- Add Windows 95 tokens informed by Tempest.
- Add first-pass classic Mac, Web 1.0, and Geocities tokens.
- Add one W1C icon set, icon asset packaging, and a base-path helper.
- Add `IconData` as a primitive type/export for single-icon data, compatible with
  Iconify-style icon data.
- Source initial W1C icons from OpenMoji, Twemoji, FxEmoji, Bootstrap Icons, and Ubuntu
  Humanity only where license and redistribution checks pass.
- Add icon metadata for name, category, source/reference project, source icon name, source
  URL, license, attribution text, and intended size.
- Document icon licensing/source assumptions and attribution rules before publishing.

Deliverable:

- Docs page and Storybook gallery showing themes and icons without app-specific code.

## Phase 2: First Components

Goal: ship the smallest useful component set for standalone retro UIs.

Interaction dependency:

- Use `@w1c/dnd` for `w1c-window` dragging and resizing.
- Preserve the Intrepid Ibex pointer-capture behavior while keeping persistence, focus,
  maximized state, and z-index outside the primitive package.

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

## Phase 3: Component Test Coverage

Goal: add complete test coverage after the component backlog is stable enough that tests
protect behavior instead of freezing churn.

Start in `packages/lib` with Vitest. This package owns the component contract, so its
tests should cover the behavior users rely on when they import `@w1c/components`.

`packages/lib` Vitest tasks:

- Add a shared DOM test setup for Lit custom elements.
- Test every public custom element registration.
- Test reflected attributes and properties for each component.
- Test shadow DOM structure for roles, slots, CSS parts, default content, and named
  regions.
- Test event behavior where components emit events or proxy native control state.
- Test keyboard and focus behavior for interactive components.
- Test reduced-motion and accessibility helper behavior where components expose it.
- Test icon lookup, asset base-path resolution, and every documented package export path.
- Add focused regression tests when fixing component bugs.

Then cover `packages/storybook`. Storybook is the integration and visual workshop, not the
source of component truth.

`packages/storybook` test tasks:

- Keep `storybook test --ci` as the package test command.
- Add stories for every public component state that `packages/lib` tests as behavior:
  default, disabled, focused, long-label, narrow-viewport, high-density, reduced-motion,
  slotted content, and theme variants.
- Add interaction stories for menus, tabs, dialogs, window controls, drag handles, and any
  future resize behavior.
- Add visual smoke coverage across GNOME 2/Ubuntu, Windows 95, classic Mac, Web 1.0, and
  Geocities themes.
- Add a small story coverage checklist when a new component is added: docs page, default
  story, state stories, theme coverage, and interaction coverage when applicable.

Completion criteria:

- `pnpm --filter @w1c/components test` covers all stable components, helpers, and public
  entrypoints.
- `pnpm --filter @w1c/storybook test` verifies the Storybook catalog renders and runs
  interaction stories.
- `pnpm test`, `pnpm check`, and `pnpm build` pass before a release branch is cut.
- Docs and Storybook are updated in the same change as any new public component behavior.

## Phase 4: Usage Recipes

Goal: prove the package works in common integration styles.

- Add a static HTML recipe using CDN-style assets.
- Add an npm/bundler recipe using direct ESM imports.
- Add a server-rendered HTML recipe for asset pipeline integrations.
- Add migration notes for app-local CSS variables to W1C tokens.

Deliverable:

- Docs include copy-paste examples for common project types without assuming a specific
  app.

## Phase 5: Quality Gates

Goal: make changes safe enough for a visual component library.

- Treat the Phase 3 `packages/lib` and `packages/storybook` test suites as required
  release checks.
- Add docs build checks and Storybook build checks.
- Add package export checks for every documented import path if they are not already
  covered by the `packages/lib` Vitest suite.
- Add CI once repository workflow is ready.

## Non-Goals For Now

- No app router.
- No data fetching or ATProto client.
- No full desktop/window manager state system.
- No wrapper packages until web component usage proves insufficient.
- No design-token build pipeline until plain CSS files become painful.
- No broad modern SaaS component set unless it directly serves retro UI patterns.
