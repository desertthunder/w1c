---
title: Components | W1C Docs
description: Index of W1C custom elements with links to examples, API notes, accessibility notes, and theming notes.
---

<script>
	import ComponentIndex from '$components/ComponentIndex.svelte';
</script>

<p class="doc-kicker">Catalog</p>

# Components

W1C components are framework-agnostic custom elements. Import the whole stable set with `@w1c/components`, or import one component at a time from its package path.

<ComponentIndex />

## Import paths

```ts
import '@w1c/components';

import '@w1c/components/window';
import '@w1c/components/badge-88x31';
import '@w1c/components/data-table';
import '@w1c/components/json-viewer';
```

Theme files set component tokens. See [Usage](/docs/usage/) for token and CSS part examples.
