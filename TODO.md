# TODO

Keep this list aligned with [ROADMAP.md](./ROADMAP.md)

## Library Package

- [x] Replace `my-element` with real W1C custom elements using the `w1c-` prefix.
- [x] Define public entrypoints for all-components registration and cherry-picked component
      imports.
- [x] Add `themes/` CSS files for GNOME 2, Ubuntu 8.10, Windows 95, classic Mac, Web 1.0,
      and Geocities.
- [x] Define token layers for color, typography, spacing, border, radius, shadow, z-index,
      and motion.
- [x] Use Reasonable Colors and Uchu as references for practical theme color scales.
- [x] Add `styles/native.css` and `styles/utilities.css` as optional imports separate from
      required component/theme styles.
- [x] Add one W1C icon set. Do not expose separate icon styles or family-specific public
      packages.
- [x] Add `IconData` as a primitive type/export for single-icon data, with a shape compatible
      with Iconify-style icon data.
- [x] Add icon metadata for name, category, source/reference project, source icon name,
      source URL, license, attribution text, and intended size.
- [x] Add and document an asset base-path story for icons, sprite sheets, and images.
- [x] Expose CSS parts for chrome, titlebars, toolbars, controls, content, and statusbars.

## Component Backlog

- [x] Priority 1: `w1c-icon`, `w1c-button`, `w1c-window`, `w1c-titlebar`, `w1c-toolbar`,
      `w1c-statusbar`, `w1c-desktop-icon`, `w1c-dialog`.
- [x] Priority 2: `w1c-panel`, `w1c-taskbar`, `w1c-menu-bar`, `w1c-menu`, `w1c-menu-item`,
      `w1c-address-field`, `w1c-tabs`, `w1c-toast`.
- [x] Priority 3: `w1c-data-table`, `w1c-data-list`, `w1c-document-browser`,
      `w1c-word-processor`, `w1c-json-viewer`, `w1c-divider`.
- [x] Geocities: `w1c-badge-88x31`, `w1c-visitor-counter`, `w1c-guestbook-panel`,
      `w1c-webring`, `w1c-under-construction`, `w1c-marquee`, `w1c-blink`,
      `w1c-tiled-background`, `w1c-link-cluster`, `w1c-last-updated`, `w1c-image-map`.
- [x] Form primitives: label, input, select, textarea, checkbox, validation message,
      flash/alert, status card, endpoint row.

## Phase 3: Component Test Coverage

- [x] Add a shared `packages/lib` Vitest DOM setup for Lit custom elements & the
      vitest addon for storybook in `packages/storybook`
- [x] Add `packages/lib` tests for every public custom element registration.
- [x] Add `packages/lib` tests for reflected attributes and properties on each component.
- [x] Add `packages/lib` tests for shadow DOM roles, slots, CSS parts, default content,
      and named regions.
- [x] Add `packages/lib` tests for component events and native-control state proxying.
- [x] Add `packages/lib` tests for keyboard and focus behavior on interactive components.
- [x] Add `packages/lib` tests for reduced-motion and accessibility helper behavior where
      components expose it.
- [x] Add `packages/lib` tests for icon lookup, asset base-path resolution, and every
      documented package export path.
- [x] Add Storybook state stories for default, disabled, focused, long-label,
      narrow-viewport, high-density, reduced-motion, slotted content, and theme variants.
- [x] Add Storybook interaction stories for menus, tabs, dialogs, window controls, drag
      handles, and future resize behavior.
- [x] Add visual smoke coverage across GNOME 2/Ubuntu, Windows 95, classic Mac, Web 1.0,
      and Geocities themes.
- [x] Add a new-component story coverage checklist in `packages/storybook/README.md`
  - docs page
  - default story, state stories
  - theme coverage
  - interaction coverage (when applicable)

## DnD Package

- [x] Port the drag and resize behavior from [Ibex](https://tangled.org/desertthunder.dev/ibex)
      into `@w1c/dnd`.
- [x] Keep `@w1c/dnd` dependency-free and framework-neutral.
- [x] Add pure geometry helpers for drag sessions, resize sessions, pointer deltas, and min/max
      size constraints.
- [x] Add DOM pointer helpers for primary-button start, pointer capture, pointer-id matching,
      release on pointer up, and release on pointer cancel.
- [x] Expose active drag/resize state so components can set cursors, `user-select: none`, and
      visual state classes.
- [x] Keep persistence, z-index, maximized state, and focus callbacks in consuming components.
- [x] Add unit tests for drag movement, resize constraints, pointer-id guarding, and cancel/end
      cleanup.
- [x] Use `@w1c/dnd` in `w1c-window` instead of reimplementing drag or resize math.
- [x] Add docs and Storybook examples for draggable windows, resizable windows, disabled
      movement, disabled resize, constrained size, cancel behavior, and touch input.

## Docs

- [x] Replace the starter docs page with real getting-started, installation, and usage pages.
- [ ] Document CDN/no-build usage, npm package usage, bundlers, static HTML, and
      server-rendered HTML.
- [x] Add component catalog pages with status, category, description, examples, API,
      accessibility notes, and theming notes.
- [ ] Add an icon catalog page for the W1C icon set, with source and license attribution per
      icon.
- [ ] Add theme catalog pages for GNOME 2, Ubuntu 8.10, Windows 95, classic Mac, Web 1.0,
      and Geocities.
- [ ] Add recipes for static HTML, npm/bundler usage, server-rendered HTML, SvelteKit, and
      Vite.
- [ ] Add migration notes for app-local CSS variables/components to W1C tokens/components.
- [ ] Add accessibility guidance for slots, labels, keyboard behavior, dialogs, menus, focus,
      and reduced motion.
- [ ] Document Web 1.0 / Geocities guardrails from: semantic
      HTML, reduced motion, accessible marquee/blink alternatives, and no-build examples.

## Storybook

- [x] Replace the starter `my-element` story with one page per public component.
- [x] Add global theme switching for GNOME 2, Ubuntu 8.10, Windows 95, classic Mac, Web 1.0,
      and Geocities.
- [x] Add icon gallery stories for the W1C icon set, including `IconData` rendering examples.
- [x] Add reference examples for GNOME 2/Ubuntu and Windows 95 screens without depending on
      the local reference apps.
- [x] Add Geocities examples for badges, counters, guestbooks, webrings, tiled backgrounds,
      and under-construction patterns.
- [x] Add keyboard/focus, disabled, long-label, narrow-viewport, high-density, and
      reduced-motion stories.

## CLI

- [x] Add `w1c docs` as the first CLI command to render bundled Markdown docs in the
      terminal.
- [x] Generate the CLI docs bundle at build time by copying
      `packages/docs/src/routes/docs/**/+page.md` into a preserved route-shaped docs tree
      for `@w1c/cli`.
- [x] Keep docs source-of-truth in `packages/docs`; strip Svelte-only page code from the CLI
      docs bundle instead of maintaining separate terminal docs.
- [x] Replace starter `my-element` output with real W1C component and theme setup.
- [x] Add `w1c init` to add W1C imports and theme setup to an existing project.
- [x] Add `w1c add theme` for one or more theme CSS imports.
- [x] Add `w1c add icons` for copied or configured icon assets.
- [x] Expand `w1c create` templates for static HTML, bundler projects, static sites, and
      server-rendered asset pipelines.
- [x] Keep dependency installation opt-in unless user research shows default installation is
      expected.
- [x] Add CLI tests around generated files and prompts.

## NPM Publishing

- [ ] Remove `private: true` from publishable package manifests only when the release gate
      is ready.
- [ ] Confirm final package names and scopes: `@w1c/components`, `@w1c/dnd`, `@w1c/fonts`,
      and `@w1c/cli`.
- [ ] Add package metadata for npm: description, README, repository, homepage, bugs,
      keywords, license, and package manager support notes.
- [ ] Replace source-only exports with publishable build outputs for JavaScript, type
      declarations, CSS, fonts, and static assets.
- [ ] Replace all `workspace:*` dependencies in publishable manifests with semver ranges
      during release versioning.
- [ ] Add or verify `files` arrays so each package ships only runtime files, declarations,
      CSS, assets, README, package manifest, and license.
- [ ] Run `npm pack --dry-run` for every publishable package and inspect the file list.
- [ ] Verify CSS theme, style, font, icon, and asset export paths against the packed
      tarballs.
- [ ] Verify icon licensing and redistribution assumptions before publishing copied or
      bundled icon assets.
- [ ] Decide whether the first npm release should be prerelease-only, for example
      `0.1.0-next.0`.
- [ ] Add CI release workflow using npm trusted publishing with provenance instead of a
      long-lived publish token.
- [ ] Document the release command sequence in `CONTRIBUTING.md`.
- [ ] Update public docs from "not released yet" to installable npm and CDN examples only
      after the first package publish succeeds.

## Quality Gates

- [ ] Add unit tests for custom element registration, rendering, attributes/properties,
      events, and accessibility helpers.
- [ ] Add browser tests for focus behavior, keyboard menus, dialog behavior, and slot
      rendering.
- [ ] Add visual smoke tests across all themes.
- [ ] Add package export checks for every documented import path.
- [ ] Add `npm pack --dry-run` checks for every publishable package.
- [ ] Add docs build and Storybook build checks.

## Parking Lot

- [ ] Add CI once repository workflow is ready.
- [ ] Verify icon licensing and redistribution assumptions before copying reference assets.
- [ ] Prefer slots, attributes/properties, CSS custom properties, and CSS parts over
      app-specific render APIs.
- [ ] Add visual regression once the component surface stabilizes.
