<svelte:head>
    <title>About | W1C</title>
    <meta name="description"
    		  content="Why W1C exists: retro web components for static pages, desktop-style UI, and early-web patterns." />
</svelte:head>

<p class="doc-kicker">About</p>

# About W1C

W1C is a web component library for people who want the old web's texture without
bringing back its broken markup.

The early personal web was full of static pages, visible links, tiled backgrounds,
guestbooks, 88x31 badges, hand-made navigation, and sites that looked like one person
had been there.

GeoCities made that kind of web easy to publish at large scale. It
organized personal pages into neighborhoods, gave ordinary people free space, and left
behind a record of fan pages, memorials, school projects, clubs, experiments, jokes, and
unfinished rooms.

W1C treats that history as a design material. A badge should stay legible at 88x31.
A marquee-inspired component should respect reduced motion. A table-era layout should
be built with semantic HTML and CSS grid.

We want to make the web feel authored again.

## Why this exists

Most component libraries assume a contemporary product interface that has smooth cards,
neutral dashboards, flat forms, and a thin layer of brand color. W1C is for a different
job.

It should help you build:

- Static docs and personal pages that look hand-built.
- Windows 95, GNOME 2, classic Mac, Web 1.0, and GeoCities-inspired interfaces.
- Server-rendered pages that can import custom elements and CSS without a framework
  wrapper.
- Small retro UI surfaces with slots, attributes, CSS custom properties, and CSS parts.

You should just be able to write HTML, import a script, import a stylesheet, publish the
page.

## Footprint

W1C keeps the parts of the early web that still work:

- Obvious navigation.
- Small reusable graphics.
- Local voice.
- Link clusters.
- Page metadata.
- Dense desktop chrome.
- Static HTML examples.

It leaves the harmful parts behind:

- Layout tables for non-tabular content.
- Motion that ignores user preferences.
- Inaccessible blinking text.
- Mystery scripts required to read basic content.
- Theme choices trapped inside one app.

## Inspiration

The library draws from the wider web component ecosystem, and writing on Web 1.0.

- [GeoCities](https://en.wikipedia.org/wiki/GeoCities) for neighborhoods,
  free personal homepages, and the social shape of early hosting.
- [History of the World Wide Web](https://en.wikipedia.org/wiki/History_of_the_World_Wide_Web) for static pages,
  frames, tables, spacer GIFs, guestbooks, and 88x31 buttons as common Web 1.0 patterns.
- [Ghost Pages: A Wired.com Farewell to GeoCities](https://www.wired.com/2009/11/geocities/)
  for the scale, variety, and preservation problem of personal pages.
- [The indie web is here to make the internet weird again](https://www.theverge.com/column/829831/indie-web-geocities-neocities)
  for the current revival of human-scale, algorithm-resistant sites.

---

W1C is meant to be a small toolkit for building new pages that remember how the web felt before every page tried to become an app.
