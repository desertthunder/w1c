# TODO

## Workspace

- Run `pnpm install` to generate the workspace lockfile.
- Confirm package names before any public publish path.
- Decide whether `docs` and `storybook` should share preview data or keep separate fixtures.

## Library

- Rename `my-element` into the first real W1C component.
- Create `src/icons` and choose the first icon export format.
- Create `src/themes` with tokens for GNOME 2, Ubuntu, Windows 95, classic Mac, and Geocities.
- Add tests for custom element registration and basic rendering.

## Docs

- Replace the starter docs page with real installation and usage pages.
- Add pages for components, icons, themes, and integration recipes.
- Document Windows 95 reference patterns from [tempest](https://tangled.org/desertthunder.dev/tempest).
- Document GNOME 2 / Ubuntu reference patterns from [ibex](https://tangled.org/desertthunder.dev/ibex).

## Storybook

- Add stories for every public component.
- Add theme switch controls.
- Add icon gallery stories.
- Add visual regression once the component surface stabilizes.

## CLI

- Decide the initial CLI command set.
- Add template fixtures for static HTML, npm/bundler usage, and server-rendered asset pipelines.
- Add CLI tests around file generation.
- Decide whether the CLI should install dependencies by default.
