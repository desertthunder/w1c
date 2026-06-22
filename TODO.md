# TODO

Keep this list aligned with [ROADMAP.md](./ROADMAP.md)

## NPM Publishing

- [ ] Remove `private: true` from publishable package manifests only when the release gate
      is ready.
- [x] Confirm final package names and scopes: `@w1c/components`, `@w1c/dnd`, `@w1c/fonts`,
      and `@w1c/cli`. (confirmed)
- [x] Add package metadata for npm: description, README, repository, homepage, bugs,
      keywords, license, and package manager support notes.
- [x] Replace source-only exports with publishable build outputs for JavaScript, type
      declarations, CSS, fonts, and static assets.
- [ ] Replace all `workspace:*` dependencies in publishable manifests with semver ranges
      during release versioning.
- [x] Add or verify `files` arrays so each package ships only runtime files, declarations,
      CSS, assets, README, package manifest, and license.
- [x] Run `npm pack --dry-run` for every publishable package and inspect the file list.
- [x] Verify CSS theme, style, font, icon, and asset export paths against the packed
      tarballs.
- [x] Decide whether the first npm release should be prerelease-only, for example
      `0.1.0-next.0`. (yes)
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

- [ ] Verify icon licensing and redistribution assumptions before copying reference assets.
- [ ] Prefer slots, attributes/properties, CSS custom properties, and CSS parts over
      app-specific render APIs.
- [ ] Add visual regression once the component surface stabilizes.

### CI

- [ ] Add CI once repository workflow is ready.
- [ ] Add CI release workflow using npm trusted publishing with provenance instead of a
      long-lived publish token.
