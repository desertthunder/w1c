---
title: Themes | W1C Docs
description: Compare every W1C theme, source note, license note, and import path.
---

<script>
	import ThemeCatalog from '$components/ThemeCatalog.svelte';
</script>

<p class="doc-kicker">Theme Catalog</p>

# Themes

W1C ships six CSS theme files. Import one theme beside the components you register, or
apply the selector form with `data-w1c-theme` when you need multiple themes in one page.

```ts
import '@w1c/components/themes/windows-95.css';
```

<ThemeCatalog />
