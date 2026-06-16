---
title: Visitor Counter | W1C Docs
description: Odometer-style visitor counter with accessible text.
---

<p class="doc-kicker">w1c-visitor-counter</p>

# Visitor Counter

Use `w1c-visitor-counter` for static page counters, demo statistics, and early-web page furniture.

```ts
import '@w1c/components/visitor-counter';
```

```html
<w1c-visitor-counter value="42069" digits="6" label="Visitors"></w1c-visitor-counter>
```

## API

- `value`: numeric text to display.
- `digits`: minimum number of visible digit cells.
- `label`: accessible and visible counter label.

## Parts

- `chrome`
- `label`
- `digits`
- `digit`
