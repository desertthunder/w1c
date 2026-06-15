# TODO

Keep this list aligned with [ROADMAP.md](./ROADMAP.md) and
[RESEARCH.md](./RESEARCH.md). Prefer the smallest useful implementation before adding
new layers.

## Workspace

- Confirm package names and publish paths before any public release.
- Decide whether `packages/docs` and `packages/storybook` should share preview data or keep
  separate fixtures; document the rule before building larger examples.
- Add shared preview fixtures only if both docs and Storybook need the same stable examples.
- Keep generated output out of planning decisions; source work should live under each
  package's `src/` or config directories.

## Library Package

- Replace `my-element` with real W1C custom elements using the `w1c-` prefix.
- Define public entrypoints for all-components registration and cherry-picked component
  imports.
- Add `themes/` CSS files for GNOME 2, Ubuntu 8.10, Windows 95, classic Mac, Web 1.0,
  and Geocities.
- Define token layers for color, typography, spacing, border, radius, shadow, z-index,
  and motion.
- Use Reasonable Colors and Uchu as references for practical theme color scales.
- Add `styles/native.css` and `styles/utilities.css` as optional imports separate from
  required component/theme styles.
- Add `icons/` packaging for OpenMoji, Twemoji, FxEmoji, Bootstrap Icons, and Ubuntu
  Humanity.
- Add icon metadata for name, family, category, source/reference project, license, and
  intended size.
- Add and document an asset base-path story for icons, sprite sheets, and images.
- Verify icon licensing and redistribution assumptions before copying reference assets.
- Expose CSS parts for chrome, titlebars, toolbars, controls, content, and statusbars.
- Prefer slots, attributes/properties, CSS custom properties, and CSS parts over
  app-specific render APIs.

## Component Backlog

- Priority 1: `w1c-icon`, `w1c-button`, `w1c-window`, `w1c-titlebar`, `w1c-toolbar`,
  `w1c-statusbar`, `w1c-desktop-icon`, `w1c-dialog`.
- Priority 2: `w1c-panel`, `w1c-taskbar`, `w1c-menu-bar`, `w1c-menu`, `w1c-menu-item`,
  `w1c-address-field`, `w1c-tabs`, `w1c-toast`.
- Priority 3: `w1c-data-table`, `w1c-data-list`, `w1c-document-browser`,
  `w1c-word-processor`, `w1c-json-viewer`, `w1c-divider`.
- Geocities: `w1c-badge-88x31`, `w1c-visitor-counter`, `w1c-guestbook-panel`,
  `w1c-webring`, `w1c-under-construction`, `w1c-marquee`, `w1c-blink`,
  `w1c-tiled-background`, `w1c-link-cluster`, `w1c-last-updated`, `w1c-image-map`.
- Form/admin primitives: label, input, select, textarea, checkbox, validation message,
  flash/alert, status card, endpoint row.

## Docs

- Replace the starter docs page with real getting-started, installation, and usage pages.
- Document CDN/no-build usage, npm package usage, bundlers, static HTML, and
  server-rendered HTML.
- Add component catalog pages with status, category, description, examples, API,
  accessibility notes, and theming notes.
- Add icon catalog pages for OpenMoji, Twemoji, FxEmoji, Bootstrap Icons, and Ubuntu
  Humanity icons.
- Add theme catalog pages for GNOME 2, Ubuntu 8.10, Windows 95, classic Mac, Web 1.0,
  and Geocities.
- Add recipes for static HTML, npm/bundler usage, server-rendered HTML, SvelteKit, and
  Vite.
- Add migration notes for app-local CSS variables/components to W1C tokens/components.
- Add accessibility guidance for slots, labels, keyboard behavior, dialogs, menus, focus,
  and reduced motion.
- Add changelog page.
- Document Windows 95 reference patterns from
  [tempest](https://tangled.org/desertthunder.dev/tempest).
- Document GNOME 2 / Ubuntu reference patterns from
  [ibex](https://tangled.org/desertthunder.dev/ibex).
- Document Web 1.0 / Geocities guardrails from [RESEARCH.md](./RESEARCH.md): semantic
  HTML, reduced motion, accessible marquee/blink alternatives, and no-build examples.

## Storybook

- Replace the starter `my-element` story with one page per public component.
- Add global theme switching for GNOME 2, Ubuntu 8.10, Windows 95, classic Mac, Web 1.0,
  and Geocities.
- Add icon gallery stories for OpenMoji, Twemoji, FxEmoji, Bootstrap Icons, and Ubuntu
  Humanity icons.
- Add reference examples for GNOME 2/Ubuntu and Windows 95 screens without depending on
  the local reference apps.
- Add Geocities examples for badges, counters, guestbooks, webrings, tiled backgrounds,
  and under-construction patterns.
- Add keyboard/focus, disabled, long-label, narrow-viewport, high-density, and
  reduced-motion stories.
- Add visual regression once the component surface stabilizes.

## CLI

- Replace starter `my-element` output with real W1C component and theme setup.
- Add `w1c init` to add W1C imports and theme setup to an existing project.
- Add `w1c add theme` for one or more theme CSS imports.
- Add `w1c add icons` for copied or configured icon assets.
- Expand `w1c create` templates for static HTML, bundler projects, static sites, and
  server-rendered asset pipelines.
- Keep dependency installation opt-in unless user research shows default installation is
  expected.
- Add CLI tests around generated files and prompts.

## Quality Gates

- Add unit tests for custom element registration, rendering, attributes/properties,
  events, and accessibility helpers.
- Add browser tests for focus behavior, keyboard menus, dialog behavior, and slot
  rendering.
- Add visual smoke tests across all themes.
- Add package export checks for every documented import path.
- Add docs build and Storybook build checks.
- Add CI once repository workflow is ready.
