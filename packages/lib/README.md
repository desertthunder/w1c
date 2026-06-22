# @w1c/components

Retro OS and early-web web components built with Lit.

## Install

```sh
npm install @w1c/components @w1c/fonts
```

pnpm, Yarn, npm, and Bun can install the published package.

## Usage

Register every stable component:

```ts
import '@w1c/components';
```

Register one component:

```ts
import '@w1c/components/window';
```

Load theme and optional page CSS separately:

```ts
import '@w1c/components/themes/windows-95.css';
import '@w1c/components/styles/native.css';
import '@w1c/components/styles/utilities.css';
```

Static assets are exported explicitly:

```ts
import iconsUrl from '@w1c/components/static/icons.svg';
```

## Related Packages

- `@w1c/dnd` provides framework-neutral drag and resize primitives.
- `@w1c/fonts` provides theme font CSS.
- `@w1c/cli` scaffolds W1C imports and static assets.
