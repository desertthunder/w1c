---
title: Blink | W1C Docs
description: Blink-inspired inline emphasis with reduced-motion fallback.
---

<script>
	import ComponentPreview from '$components/ComponentPreview.svelte';
</script>

<p class="doc-kicker">w1c-blink</p>

# Blink

Use `w1c-blink` sparingly for early-web emphasis. Keep the text meaningful when animation is disabled.

```ts
import '@w1c/components/blink';
```

<ComponentPreview components={['blink']}>

<p><w1c-blink>New!</w1c-blink> Guestbook entries are open.</p>
</ComponentPreview>

```html
<p><w1c-blink>New!</w1c-blink> Guestbook entries are open.</p>
```

## API

- `speed`: blink cycle duration in seconds.

## Accessibility

The component replaces blinking with a dotted outline when `prefers-reduced-motion: reduce` is active.

## Slots

- default inline content

## Parts

- `text`
