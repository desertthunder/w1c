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
