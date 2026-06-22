# W1C Storybook

Storybook is the visual workshop for `@w1c/components`. Stories should use public imports,
for example `@w1c/components/button`, and keep examples framework-neutral.

## New Component Checklist

Before adding a component to the public catalog:

- Add or update the matching docs page in `packages/docs/src/routes/docs/components/<component>/+page.md`.
- Add a default story with realistic content and the component's most common public properties.
- Add state coverage for disabled, focused, long-label, narrow-viewport, high-density,
  reduced-motion, and slotted-content cases when the component exposes those states.
- Add theme coverage for GNOME 2, Ubuntu 8.10, Windows 95, classic Mac, Web 1.0, and Geocities.
- Add interaction coverage when the component handles user input, keyboard navigation,
  dialogs, menus, window controls, drag handles, or resize behavior.
- Keep the component matrix in `src/component-matrix.stories.ts` current when a new component
  affects, shared chrome, layout, theme tokens, or interaction patterns.

Use the component's real custom element and CSS custom properties in stories.
Avoid app-only wrappers or local state unless the story is demonstrating an interaction
that needs it.
