---
title: Marquee | W1C Docs
description: Accessible marquee-inspired scrolling banner.
---

<p class="doc-kicker">w1c-marquee</p>

# Marquee

Use `w1c-marquee` for short announcement text that evokes `<marquee>` without using obsolete markup.

```ts
import '@w1c/components/marquee';
```

```html
<w1c-marquee speed="14" pause-on-hover>Welcome to my homepage.</w1c-marquee>
```

## API

- `direction`: `left` or `right`.
- `speed`: animation duration in seconds.
- `pause-on-hover`: pauses motion when the pointer is over the banner.

## Accessibility

The component disables scrolling when `prefers-reduced-motion: reduce` is active.

## Slots

- default marquee content

## Parts

- `chrome`
- `track`
