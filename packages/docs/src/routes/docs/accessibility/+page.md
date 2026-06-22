---
title: Accessibility | W1C Docs
description: >
  Accessibility guidance for W1C slots, labels, keyboard behavior, dialogs, 
  menus, focus, and reduced motion.
---

<p class="doc-kicker">Accessibility</p>

# Accessibility

W1C gives retro UI a modern HTML baseline. Components should keep native controls, visible
text, and predictable focus behavior wherever possible.

## Slots

Slots are part of each component's accessible surface. Put real headings, paragraphs,
links, buttons, and form controls in slots instead of replacing them with decorative spans.

```html
<w1c-window title="Downloads">
	<w1c-toolbar slot="toolbar" aria-label="Download actions">
		<w1c-button>Refresh</w1c-button>
	</w1c-toolbar>

	<h2>Files</h2>
	<ul>
		<li><a href="/files/readme.txt">readme.txt</a></li>
	</ul>
</w1c-window>
```

Icons used as decoration should be hidden from assistive technology. Icons that carry the
only meaning need a label.

```html
<w1c-icon name="folder" aria-hidden="true"></w1c-icon> <w1c-icon name="warning" label="Warning"></w1c-icon>
```

## Labels and forms

Prefer native label relationships. Use `w1c-label` with `for`, and give the matching input
the same `id`.

```html
<w1c-label for="email">Email</w1c-label>
<w1c-input id="email" name="email" type="email" required></w1c-input>
<w1c-validation-message for="email">Use a valid email address.</w1c-validation-message>
```

Keep validation text visible. If an app updates validation after submit, also connect the
message with `aria-describedby` or an equivalent native control relationship.

## Keyboard behavior

Interactive W1C components should be reachable with `Tab` in document order. Native buttons,
links, inputs, selects, textareas, and checkboxes keep their browser keyboard behavior.

Menus, menu bars, tabs, dialogs, and movable windows need extra care:

- Menu items should be real buttons or anchors when they run commands or navigate.
- Tabs should expose one selected tab and move selection with arrow keys.
- Dialog actions should be reachable without a pointer.
- Window drag handles should not be the only way to reach content or controls.

Do not put click handlers on non-interactive elements unless you also add keyboard support,
role, focus styling, and an accessible name.

## Dialogs

`w1c-dialog` provides dialog chrome and role-oriented markup. Your app still owns modal
behavior.

For modal dialogs:

- Move focus into the dialog when it opens.
- Return focus to the opener when it closes.
- Keep background controls inert or otherwise unavailable.
- Provide an obvious close or cancel action.
- Make `Escape` close the dialog when that matches the task.

For non-modal dialogs, keep focus movement normal and make the dialog title describe the
task.

## Menus

Use menus for compact command lists, not page navigation that should be a normal list of
links. When a menu item navigates, render it as an anchor. When it changes state or runs a
command, render it as a button.

```html
<w1c-menu aria-label="File">
	<w1c-menu-item href="/new.html">New Page</w1c-menu-item>
	<w1c-menu-item>Save</w1c-menu-item>
</w1c-menu>
```

Disabled items must not receive focus or run actions.

## Focus

Every interactive surface needs a visible focus indicator in every theme. Do not remove
outlines globally. If a theme changes focus style, keep contrast strong against the active
surface.

When building composite components around W1C, keep focus order close to visual order. Avoid
positive `tabindex`; use source order or the component's documented keyboard model.

## Reduced motion

W1C motion components must respect `prefers-reduced-motion`. Use `w1c-marquee` and
`w1c-blink` for early-web references instead of obsolete `<marquee>` or `<blink>` markup.

```html
<w1c-marquee pause-on-hover>Welcome to my homepage.</w1c-marquee> <w1c-blink>New!</w1c-blink>
```

For important text, the non-moving fallback must still be visible. Motion should decorate
the message, not be the message.
