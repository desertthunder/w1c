# @w1c/fonts

Theme font CSS for W1C, including Fontsource imports and bundled classic Mac webfonts.

## Install

```sh
npm install @w1c/fonts
```

pnpm, Yarn, npm, and Bun can install the published package.

## Usage

Load every theme font:

```ts
import '@w1c/fonts/all.css';
```

Or load one theme font set:

```ts
import '@w1c/fonts/classic-mac.css';
import '@w1c/fonts/windows.css';
import '@w1c/fonts/ubuntu.css';
import '@w1c/fonts/geocities.css';
```

The classic Mac `woff2` files are exported for tooling that needs direct asset paths.
