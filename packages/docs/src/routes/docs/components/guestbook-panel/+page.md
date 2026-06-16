---
title: Guestbook Panel | W1C Docs
description: Guestbook surface for entries, sign links, and static forms.
---

<script>
	import ComponentPreview from '$components/ComponentPreview.svelte';
</script>

<p class="doc-kicker">w1c-guestbook-panel</p>

# Guestbook Panel

Use `w1c-guestbook-panel` to frame guestbook entries and sign/read actions without depending on a backend.

```ts
import '@w1c/components/guestbook-panel';
```

<ComponentPreview components={['guestbook-panel']}>
<w1c-guestbook-panel heading="Guestbook" subheading="Leave a note before you go.">

<article><strong>June:</strong> Cool homepage.</article>
<a slot="actions" href="mailto:webmaster@example.com">Sign Guestbook</a>
<span slot="footer">HTML welcome mat since 1998.</span>
</w1c-guestbook-panel>
</ComponentPreview>

```html
<w1c-guestbook-panel heading="Guestbook" subheading="Leave a note before you go.">
	<article><strong>June:</strong> Cool homepage.</article>
	<a slot="actions" href="mailto:webmaster@example.com">Sign Guestbook</a>
	<span slot="footer">HTML welcome mat since 1998.</span>
</w1c-guestbook-panel>
```

## API

- `heading`: header title.
- `subheading`: short header note.

## Slots

- default guestbook entries
- `actions`: links or controls
- `footer`: footer note

## Parts

- `chrome`
- `header`
- `content`
- `actions`
- `footer`
