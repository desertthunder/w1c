# Research Notes

These notes collect the aesthetic and design-system research behind W1C. The
implementation contract lives in [ROADMAP.md](./ROADMAP.md).

## Local Reference Studies

### Intrepid Ibex

Remote: https://tangled.org/desertthunder.dev/ibex

Intrepid Ibex is a SvelteKit app recreating Ubuntu 8.10 / GNOME 2 as an ATProto browser.
It was reviewed as a reference for the kind of GNOME/Ubuntu UI W1C should be able to
express.

- Desktop shell with brown top panel, tan window chrome, desktop shortcuts, task buttons,
  tray affordances, and dense spacing.
- GNOME-style windows with titlebar icons, close/minimize/maximize controls, menubar,
  toolbar, address field, content slot, and resize affordance.
- Desktop icons using Humanity-style assets.
- GNOME apps as metaphors: Nautilus, gedit, About This Computer, future Eye of GNOME,
  Terminal, Evolution/Thunderbird, Contacts, and File Roller.
- Humanity icon assets for apps, places, devices, status indicators, actions, and mime
  types.

Design lessons for W1C:

- Components should be framework-agnostic so the GNOME/Ubuntu look is not tied to Svelte.
- GNOME/Ubuntu theme tokens should be first-class, not hardcoded into one component.
- Window, panel, desktop icon, menu, toolbar, dialog, and status/tray primitives are the
  highest-value extraction targets.

### Tempest

Remote: https://tangled.org/desertthunder.dev/tempest

Tempest is a Phoenix AT Protocol PDS with Windows 95-style web UI. It was reviewed as a
reference for the kind of Windows 95/document/admin UI W1C should be able to express.

- Windows 95 desktop background, texture, window chrome, taskbar/start affordances,
  raised/sunken borders, and blue titlebars.
- Home, account, admin, docs, changelog, and compatibility/status surfaces.
- Forms, flash messages, data tables, data lists, status cards, endpoint rows,
  document browser, and word processor shells.
- Icon set for window controls, navigation, formatting, object/status, and
  ATProto-specific labels.

Design lessons for W1C:

- Server-rendered HTML should be able to use W1C as custom elements plus CSS imports
  with no Svelte dependency.
- Markup examples should not require inline scripts.
- Static CSS utilities and theme files matter as much as interactive components.
- Window, titlebar, toolbar, statusbar, button, form styling, data table/list, flash,
  document browser, and word processor primitives are the highest-value extraction targets.

## Web Component Library References

### Bolt Design System

Reference: https://boltdesignsystem.com/

Bolt frames itself as a "system of systems" and separates visual styles, layouts,
elements, components, animations, and guidelines.

Useful pattern for W1C:

- Keep foundations, layout primitives, elements, components, animation rules, and
  usage guidance separate in docs.
- Avoid mixing theme tokens and component behavior into one undocumented layer.

### Web Awesome

Reference: https://webawesome.com/

Web Awesome is a framework-agnostic web component library with CDN and npm installation,
cherry-picked component imports, themes, optional native styles, optional utilities, asset
base-path handling, framework guides, SSR notes, visual tests, and AI usage docs.

Useful patterns for W1C:

- Support both all-in and cherry-picked component imports.
- Ship theme CSS separately from optional native styles and utilities.
- Document asset base paths for icons and images.
- Include recipes for SvelteKit, Vite, static HTML, and server-rendered HTML.
- Treat Storybook and visual tests as part of the product, not an afterthought.

### Nord Design System

Reference: https://nordhealth.design/components/

Nord provides a web component catalog with categories, status labels, accessible
descriptions, design tokens, themes, CSS, icons, templates, and AI documentation.

Useful patterns for W1C:

- Component docs should show component status, category, description, examples, API,
  accessibility notes, and theming notes.
- Icon and token documentation should be navigable as first-class docs, not hidden in
  source files.
- Layout and navigation primitives should have clear slot contracts.

### Freshworks Crayons

Reference: https://crayons.freshworks.com/

Crayons emphasizes no-build CDN usage, optimized web components, tree-shakable bundles,
lazy-loaded components, CSS variable customization, optional CSS utilities, i18n, icons,
and framework bindings.

Useful patterns for W1C:

- Static HTML usage should work without a build step.
- CSS custom properties should be the primary customization mechanism.
- Optional utilities should be packaged separately.
- Framework wrappers can wait; prove the custom elements first.

## Icon Source References

W1C should draw from a small set of recognizable, documented icon sources instead of
inventing a large icon language from scratch.

References:

- [OpenMoji](https://icon-sets.iconify.design/openmoji/)
- [Twemoji](https://icon-sets.iconify.design/twemoji/)
- [FxEmoji](https://icon-sets.iconify.design/fxemoji/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Ubuntu Humanity icon theme](https://github.com/mk-pmb/ubuntu-icon-theme-humanity)

Useful patterns for W1C:

- Use OpenMoji, Twemoji, and FxEmoji as colorful early-web-friendly icon/sticker sources.
- Use Bootstrap Icons for plain UI actions where emoji-style artwork is too loud.
- Use Humanity as the primary Ubuntu/GNOME reference family.
- Preserve source family metadata so docs, Storybook, and package exports can explain
  where each icon came from.
- Verify license and redistribution requirements before copying or bundling any source
  assets.

## Color System References

W1C color tokens should be practical CSS variables informed by existing color systems,
not a generated token pipeline at the start.

References:

- [Reasonable Colors](https://github.com/matthewhowell/reasonable-colors)
- [Uchu](https://code.webb.page/nevercease/uchu.git/about/)

Useful patterns for W1C:

- Use Reasonable Colors as a source for predictable, named CSS color scales.
- Use Uchu as a reference for wide-gamut, perceptual color thinking where it helps theme
  quality.
- Keep final W1C theme tokens hand-authored and readable until a build pipeline is truly
  needed.

## Web 1.0 And Geocities Aesthetic

References:

- https://en.wikipedia.org/wiki/GeoCities
- https://en.wikipedia.org/wiki/Web_2.0#Web_1.0
- https://en.wikipedia.org/wiki/Web_design
- https://en.wikipedia.org/wiki/Tableless_web_design
- https://www.wired.com/2009/11/geocities
- https://www.theverge.com/column/829831/indie-web-geocities-neocities

## Historical Cues

- Static, hand-authored pages rather than app-like dynamic interfaces.
- Personal homepages hosted on services such as GeoCities, Tripod, and Angelfire.
- GeoCities neighborhoods and address-like URLs as organizing metaphors.
- Framesets, tables, spacer GIFs, image maps, and early browser-era layout constraints.
- Proprietary browser-era elements such as `marquee` and `blink`.
- Guestbooks, webrings, visitor counters, "email me" links, and "last updated" text.
- 88x31 GIF buttons for browsers, editors, validators, projects, affiliations, and
  "best viewed in" badges.
- Tiled backgrounds, starfields, paper textures, high-contrast links, loud borders,
  beveled separators, and animated GIFs.
- Under-construction pages, warning stripes, hardhat icons, and "coming soon"
  placeholders.
- Low-bandwidth design constraints: small reusable assets, repeated patterns,
  simple markup, and visible navigation lists.

Modern implementation guardrails:

- Use semantic HTML and CSS to evoke tables/frames-era layouts instead of requiring
  invalid or inaccessible markup.
- Motion components must respect `prefers-reduced-motion`.
- Marquee/blink-inspired components should expose accessible static text.
- Badges and counters should be legible at 88x31 and remain usable when zoomed.
- Static HTML examples should work without a bundler.

Candidate Geocities components:

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

## Open Questions

- Icon licensing and redistribution need to be verified before copying reference assets
  into `packages/lib`.
- Should W1C ship a CDN-ready bundle in addition to npm package exports?
- Should Web 1.0 components live under one theme package or a separate novelty package?
- How much interactive desktop behavior belongs in W1C before it starts becoming an
  app/window manager?
