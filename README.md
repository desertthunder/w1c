# W1C

Web 1.0 style web components for retro operating-system and early-web interfaces.

W1C is a pnpm workspace with a Lit component package, a public SvelteKit docs app, a
Storybook workshop, and a small scaffolding CLI.

## Workspace

```text
packages/
  cli/          @w1c/cli scaffolding/bootstrap CLI
  dnd/          @w1c/dnd drag, resize, and geometry primitives
  docs/         @w1c/docs public SvelteKit documentation app
  fonts/        @w1c/fonts theme font CSS and vendored font assets
  lib/          @w1c/components Lit + Vite web component library
  storybook/    @w1c/storybook Web Components Storybook app
```

## Requirements

- Node.js
- pnpm

This repo currently uses TypeScript, Lit, Vite, SvelteKit, Storybook for Web Components,
Vitest, Playwright tooling, ESLint, Prettier, and tsdown.

## Install

```sh
pnpm install
```

The workspace allows `esbuild` postinstall builds in `pnpm-workspace.yaml` because Vite
and Storybook require it.

## Development

Run the public docs app:

```sh
pnpm dev
```

Equivalent explicit command:

```sh
pnpm dev:docs
```

Run Storybook:

```sh
pnpm dev:storybook
```

Run the Lit/Vite library demo:

```sh
pnpm dev:lib
```

Run the CLI in development:

```sh
pnpm --filter @w1c/cli dev -- --help
```

## Package Usage

Register every stable component:

```ts
import '@w1c/components';
```

Register one component:

```ts
import '@w1c/components/window';
```

Theme CSS and optional page styles are separate imports. Theme CSS loads the matching font package automatically:

```ts
import '@w1c/components/themes/windows-95.css';
import '@w1c/components/styles/native.css';
import '@w1c/components/styles/utilities.css';
```

Load every bundled theme font directly when a docs or preview app needs to switch typography without switching component themes:

```ts
import '@w1c/fonts/all.css';
```

## Theme Typography

| Theme       | Headings        | UI            | Code          | Source                                                                                   |
| ----------- | --------------- | ------------- | ------------- | ---------------------------------------------------------------------------------------- |
| Windows 95  | IBM Plex Serif  | IBM Plex Sans | IBM Plex Mono | Fontsource                                                                               |
| GNOME 2     | Ubuntu          | Ubuntu        | Ubuntu Mono   | Fontsource                                                                               |
| Ubuntu 8.10 | Ubuntu          | Ubuntu        | Ubuntu Mono   | Fontsource                                                                               |
| Classic Mac | ChiKareGo2      | ChicagoFLF    | Anonymous Pro | [system.css fonts](https://github.com/sakofchit/system.css/tree/main/fonts) + Fontsource |
| Web 1.0     | Times New Roman | Arial         | Courier New   | System fonts                                                                             |
| Geocities   | Comic Relief    | Comic Neue    | Comic Neue    | Fontsource                                                                               |

## Checks

Type-check all packages:

```sh
pnpm check
```

Build all packages:

```sh
pnpm build
```

Run tests:

```sh
pnpm test
```

Format all packages:

```sh
pnpm format
```

## Package Commands

Docs:

```sh
pnpm --filter @w1c/docs dev
pnpm --filter @w1c/docs check
pnpm --filter @w1c/docs build
```

Storybook:

```sh
pnpm --filter @w1c/storybook dev
pnpm --filter @w1c/storybook check
pnpm --filter @w1c/storybook build
```

Library:

```sh
pnpm --filter @w1c/components dev
pnpm --filter @w1c/components check
pnpm --filter @w1c/components build
```

Fonts:

```sh
pnpm --filter @w1c/fonts format
```

DnD:

```sh
pnpm --filter @w1c/dnd check
pnpm --filter @w1c/dnd build
```

CLI:

```sh
pnpm --filter @w1c/cli check
pnpm --filter @w1c/cli build
node packages/cli/dist/index.mjs --help
```

## Further Reading

- [ROADMAP.md](./ROADMAP.md): project contract and implementation phases.
- [RESEARCH.md](./RESEARCH.md): research notes on reference studies, web component
  libraries, and Web 1.0 / Geocities aesthetics.
- [ibex](https://tangled.org/desertthunder.dev/ibex)
- [tempest](https://tangled.org/desertthunder.dev/tempest)

## References

- [Bolt Design System](https://boltdesignsystem.com/)
- [Web Awesome](https://webawesome.com/)
- [Nord Design System Web Components](https://nordhealth.design/components/)
- [Freshworks Crayons](https://crayons.freshworks.com/)

### Web 1.0

- [GeoCities](https://en.wikipedia.org/wiki/GeoCities)
- [Web 1.0](https://en.wikipedia.org/wiki/Web_2.0#Web_1.0)
- [History of web design](https://en.wikipedia.org/wiki/Web_design)
- [Tableless web design](https://en.wikipedia.org/wiki/Tableless_web_design)
- [Ghost Pages: A Wired.com Farewell to GeoCities](https://www.wired.com/2009/11/geocities)
- [The indie web is here...](https://www.theverge.com/column/829831/indie-web-geocities-neocities)

### Colors

- [Reasonable Colors](https://github.com/matthewhowell/reasonable-colors)
- [Uchu color system](https://code.webb.page/nevercease/uchu.git/about/)

### Icons

- [OpenMoji icon set](https://icon-sets.iconify.design/openmoji/)
- [Twemoji icon set](https://icon-sets.iconify.design/twemoji/)
- [FxEmoji icon set](https://icon-sets.iconify.design/fxemoji/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Ubuntu Humanity icon theme](https://github.com/mk-pmb/ubuntu-icon-theme-humanity)
- [Iconify icon data](https://iconify.design/docs/icons/icon-data.html)
- [icondata](https://github.com/carloskiki/icondata)
