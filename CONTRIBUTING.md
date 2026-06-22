# Contributing

_todo_

## Development

### Workspace

W1C is a pnpm workspace with a Lit component package, a public SvelteKit docs app, a
Storybook workshop, and a small scaffolding CLI.

```sh
packages
  ├── lib         # @w1c/components   Lit + Vite web component library
  ├── fonts       # @w1c/fonts        Theme font CSS and vendored font assets
  ├── dnd         # @w1c/dnd          Drag, resize, and geometry primitives
  ├── cli         # @w1c/cli          Scaffolding/bootstrap CLI
  ├── docs        # @w1c/docs         Public documentation app
  └── storybook   # @w1c/storybook    Web Components Storybook app
```

### Tech Stack

Web Components use TypeScript & Lit with Vite.

The doc site is made with SvelteKit.

The CLI uses bomb.sh libraries & tsdown.

Testing is handled with Vitest & Playwright; code quality & formatting with ESLint & Prettier.

### Pre-Reqs

- Node.js
- pnpm

Install workspace deps:

```sh
pnpm install
```

### Local Dev

You can filter by package name with `pnpm --filter @w1c/{name} ...`

For example, to run the documentation or storybook projects:

```sh
pnpm --filter @w1c/docs dev
```

```sh
pnpm --filter @w1c/storybook dev
```

`package.json` commands follow common conventions for `dev`, `test`, `build`, `check`, `format`

## Changes

This project uses [Changesets](https://github.com/changesets/changesets) to track
package changes before a release. Add a changeset when a change affects code that
someone can import, install, or use from one of the package entrypoints.

The tracked packages are:

- `@w1c/components`
- `@w1c/dnd`
- `@w1c/fonts`
- `@w1c/cli`

Do not add changesets for `@w1c/docs` or `@w1c/storybook`. They are ignored in
Changesets config because they are project apps, not release packages. If docs or
stories changed alongside a component change, write the changeset for the package
that users consume.

### Adding a changeset

Run:

```sh
pnpm changeset
```

Pick every package whose public behavior changed, then choose the bump:

- `patch`: bug fixes, visual corrections, accessibility fixes, documentation for
  exported APIs, or small compatible behavior changes.
- `minor`: new components, new exports, new attributes/properties/events, new CSS
  parts, new theme tokens, or compatible feature work.
- `major`: removed exports, renamed elements, changed default behavior that can
  break callers, changed CSS custom property names, changed event contracts, or
  changed CLI commands in a breaking way.

Write the note for users, not for maintainers. Mention the behavior they get, not
the internal file names you touched.

Good:

```md
Add `w1c-dialog` support for modal close events and focus return.
```

Weak:

```md
Update dialog files and fix tests.
```

### Versioning and release

When it is time to prepare a release, run:

```sh
pnpm version-packages
```

That command consumes pending files in `.changeset/`, updates package versions,
and writes changelogs. Review the result before publishing.

For the first prerelease, enter prerelease mode before versioning:

```sh
pnpm changeset pre enter next
pnpm version-packages
```

Publishable packages are:

- `@w1c/components`
- `@w1c/dnd`
- `@w1c/fonts`
- `@w1c/cli`

Keep `@w1c/docs` and `@w1c/storybook` private.

Before publishing, run the full release gate:

```sh
pnpm qa
```

Publish after the gate passes:

```sh
pnpm release
```

You can run the expensive app build checks directly when needed:

```sh
pnpm qa:docs
pnpm qa:storybook
```
