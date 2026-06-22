# Roadmap

W1C is a web component library for retro operating-system and early-web UI.

## Publishing Contract

W1C should publish only the packages that users install directly:

- `@w1c/components`
- `@w1c/dnd`
- `@w1c/fonts`
- `@w1c/cli`

Keep `@w1c/docs` and `@w1c/storybook` private. They are not runtime packages.

Publishable packages must not expose `src/` paths as the npm API. Each package should ship
built ESM, type declarations, and the runtime assets needed by its documented exports.
CSS, fonts, icon metadata, and copied static assets should be covered by explicit package
exports and verified from the packed tarball.

Release metadata requirements:

- `private: true` is removed only from publishable packages.
- Package manifests include description, license, repository, homepage, bugs, keywords,
  `files`, and stable exports.
- Workspace dependency specifiers are replaced with semver ranges during release
  versioning.
- README files explain the public package API for the package they ship with.
- The root README and docs installation page match the packages that are actually
  published.

Release workflow requirements:

- Use Changesets for versioning and changelog generation.
- Run `pnpm check`, `pnpm test`, `pnpm build`, docs build, Storybook build, and package
  export checks before release.
- Run `npm pack --dry-run` for each publishable package and inspect the file list.
- Publish scoped packages with public access.
- Prefer npm trusted publishing with provenance from CI. Avoid long-lived npm publish
  tokens.
- Keep the first public release conservative. A prerelease tag is acceptable while the
  component surface, theme tokens, and icon redistribution assumptions settle.

## Phase 5: Quality Gates

Goal: make changes safe enough for a visual component library.

- Treat the Phase 3 `packages/lib` and `packages/storybook` test suites as required
  release checks.
- Add docs build checks and Storybook build checks.
- Add package export checks for every documented import path if they are not already
  covered by the `packages/lib` Vitest suite.
- Add CI once repository workflow is ready.

## Non-Goals For Now

- No wrapper packages until web component usage proves insufficient.
- No design-token build pipeline until plain CSS files become painful.
- No broad modern SaaS component set unless it directly serves retro UI patterns.
