---
title: Inspiration | W1C Docs
description: How W1C grew out of local experiments, retro interface history, and modern web component systems.
---

<p class="doc-kicker">Inspiration</p>

# Inspiration

W1C started as a way to extract the good parts from two experiments: a
GNOME/[Ubuntu desktop wrapped around ATProto browsing](https://ibex.desertthunder.dev),
and a Windows 95-style Phoenix [ATProto PDS](https://tempest.desertthunder.dev). I was
starting to feel like their interface work was too useful to stay trapped in those apps.

Intrepid Ibex gave W1C its GNOME 2 and Ubuntu 8.10 center of gravity with the brown top
panel, tan window chrome, compact task buttons, tray affordances, desktop shortcuts, and
the practical density of Nautilus, gedit, Terminal, and the rest of that era's app
vocabulary.<sup id="fnref-intrepid"><a href="#fn-intrepid">1</a></sup>

Tempest supplied the Windows 95 side with teal desktop color, blue titlebars, raised and
sunken borders, server-rendered forms, flash messages, dense tables, status rows, document
browsers, and word-processor shells.<sup id="fnref-tempest"><a href="#fn-tempest">2</a></sup>

Those references pushed the project toward web components rather than app components so
apps that can load custom elements and CSS would be able to use them.

## Design-Systems

I looked at a few modern design-systems to help me structure the project.

Bolt's "system of systems" framing helped split foundations, layout, elements, components,
animation, and documentation into separate concerns.<sup id="fnref-bolt"><a href="#fn-bolt">3</a></sup>

Web Awesome keeps its install story optimized for developer experience with all-in imports,
cherry-picked imports, CDN usage, theme CSS, optional native styles, utilities, SSR compatibility,
and asset loading.<sup id="fnref-webawesome"><a href="#fn-webawesome">4</a></sup>

Nord's catalog is the model for treating component pages as product surfaces because of how
cleanly they've separated status, category, API, examples, accessibility notes, theming & tokens,
and icons.<sup id="fnref-nord"><a href="#fn-nord">5</a></sup>

Crayons reinforced the no-build path, keeping static HTML as a first-class consumer, CSS
custom properties should carry customization.

Framework wrappers can wait until the custom elements are worth wrapping.<sup id="fnref-crayons"><a href="#fn-crayons">6</a></sup>

## Icons

The W1C icon set is one named set. The Windows-like file, app, desktop, and window icons cite Wikimedia Commons Microsoft icon
references as visual inspiration.<sup id="fnref-wikimedia-icons"><a href="#fn-wikimedia-icons">7</a></sup>

Plain action, formatting, status, and object symbols come from Bootstrap Icons.<sup id="fnref-bootstrap-icons"><a href="#fn-bootstrap-icons">8</a></sup>

The icon renderer follows the practical `IconData` shape used by Iconify-style data, with
attributes for inner SVG body, optional viewBox geometry, and a single trusted data object
passed to a component.<sup id="fnref-iconify-data"><a href="#fn-iconify-data">9</a></sup>

## Classic Mac

System.css shows how far plain CSS can go with monochrome controls, menu bars, windows,
dialogs, titlebars, and form elements.<sup id="fnref-system-css"><a href="#fn-system-css">10</a></sup> Its
repository also gives W1C a concrete license and font checkpoint for the Mac-facing
work.<sup id="fnref-system-css-repo"><a href="#fn-system-css-repo">11</a></sup>

AjaxIronside built a compact reference for classic Mac menu, link, and window composition,
useful because it is small enough to inspect as a whole.<sup id="fnref-ajaxironside"><a href="#fn-ajaxironside">12</a></sup>

Brian Benchoff's System 7 writeup is broader, with active and inactive windows, desktop
state, z-index, scrollbars, 32x32 icons, and the difference between recreating an
operating system and building a web page that borrows its habits.<sup id="fnref-benchoff-system7"><a href="#fn-benchoff-system7">13</a></sup>

## Color and theme tokens

W1C themes are hand-authored CSS token sets.

Reasonable Colors helped with predictable named color scales and readable shade
jumps.<sup id="fnref-reasonable-colors"><a href="#fn-reasonable-colors">14</a></sup>

Uchu helped with perceptual color thinking where the theme needed more life than a
default web-safe palette.<sup id="fnref-uchu"><a href="#fn-uchu">15</a></sup>

The result is simply readable variables first, generated token pipelines later if a
project ever needs them.

## Web 1.0 and Geocities

The early-web layer comes from personal pages. GeoCities, Tripod, Angelfire, and
neighborhood-style URLs gave the web a visible sense of place.<sup id="fnref-geocities"><a href="#fn-geocities">16</a></sup>

Early web design also left behind a somewhat eclectic recognizable culture with framesets,
tables, spacer GIFs, image maps, proprietary browser tags, and the later move away from
table-based layout.<sup id="fnref-web1"><a href="#fn-web1">17</a></sup><sup id="fnref-web-design"><a href="#fn-web-design">18</a></sup><sup id="fnref-tableless"><a href="#fn-tableless">19</a></sup>

Wired's farewell to GeoCities captured how much of the
personal web disappeared when those hosted pages shut down.<sup id="fnref-wired-geocities"><a href="#fn-wired-geocities">20</a></sup>

The modern indie-web revival shows why people still miss sites that feel owned, specific,
and a little strange.<sup id="fnref-verge-indie-web"><a href="#fn-verge-indie-web">21</a></sup>

<section class="footnotes" aria-label="References">
    <ol>
    	<li id="fn-intrepid"><a href="https://tangled.org/desertthunder.dev/ibex">Intrepid Ibex</a> <a href="#fnref-intrepid" aria-label="Back to citation 1">↑</a></li>
    	<li id="fn-tempest"><a href="https://tangled.org/desertthunder.dev/tempest">Tempest</a> <a href="#fnref-tempest" aria-label="Back to citation 2">↑</a></li>
    	<li id="fn-bolt"><a href="https://boltdesignsystem.com/">Bolt Design System</a> <a href="#fnref-bolt" aria-label="Back to citation 3">↑</a></li>
    	<li id="fn-webawesome"><a href="https://webawesome.com/">Web Awesome</a> <a href="#fnref-webawesome" aria-label="Back to citation 4">↑</a></li>
    	<li id="fn-nord"><a href="https://nordhealth.design/components/">Nord Design System components</a> <a href="#fnref-nord" aria-label="Back to citation 5">↑</a></li>
    	<li id="fn-crayons"><a href="https://crayons.freshworks.com/">Freshworks Crayons</a> <a href="#fnref-crayons" aria-label="Back to citation 6">↑</a></li>
    	<li id="fn-wikimedia-icons"><a href="https://commons.wikimedia.org/wiki/Category:Microsoft_icons">Wikimedia Commons Microsoft icon references</a> <a href="#fnref-wikimedia-icons" aria-label="Back to citation 7">↑</a></li>
    	<li id="fn-bootstrap-icons"><a href="https://icons.getbootstrap.com/">Bootstrap Icons</a> <a href="#fnref-bootstrap-icons" aria-label="Back to citation 8">↑</a></li>
    	<li id="fn-iconify-data"><a href="https://iconify.design/docs/icons/icon-data.html">Iconify icon data</a> <a href="#fnref-iconify-data" aria-label="Back to citation 9">↑</a></li>
    	<li id="fn-system-css"><a href="https://sakofchit.github.io/system.css/">System.css documentation</a> <a href="#fnref-system-css" aria-label="Back to citation 10">↑</a></li>
    	<li id="fn-system-css-repo"><a href="https://github.com/sakofchit/system.css/">System.css repository</a> <a href="#fnref-system-css-repo" aria-label="Back to citation 11">↑</a></li>
    	<li id="fn-ajaxironside"><a href="https://ajaxironside.github.io/">AjaxIronside</a> <a href="#fnref-ajaxironside" aria-label="Back to citation 12">↑</a></li>
    	<li id="fn-benchoff-system7"><a href="https://bbenchoff.github.io/pages/system7.html">Recreating Classic Macintosh System 7 in CSS</a> <a href="#fnref-benchoff-system7" aria-label="Back to citation 13">↑</a></li>
    	<li id="fn-reasonable-colors"><a href="https://github.com/matthewhowell/reasonable-colors">Reasonable Colors</a> <a href="#fnref-reasonable-colors" aria-label="Back to citation 14">↑</a></li>
    	<li id="fn-uchu"><a href="https://code.webb.page/nevercease/uchu.git/about/">Uchu</a> <a href="#fnref-uchu" aria-label="Back to citation 15">↑</a></li>
    	<li id="fn-geocities"><a href="https://en.wikipedia.org/wiki/GeoCities">GeoCities</a> <a href="#fnref-geocities" aria-label="Back to citation 16">↑</a></li>
    	<li id="fn-web1"><a href="https://en.wikipedia.org/wiki/Web_2.0#Web_1.0">Web 1.0</a> <a href="#fnref-web1" aria-label="Back to citation 17">↑</a></li>
    	<li id="fn-web-design"><a href="https://en.wikipedia.org/wiki/Web_design">History of web design</a> <a href="#fnref-web-design" aria-label="Back to citation 18">↑</a></li>
    	<li id="fn-tableless"><a href="https://en.wikipedia.org/wiki/Tableless_web_design">Tableless web design</a> <a href="#fnref-tableless" aria-label="Back to citation 19">↑</a></li>
    	<li id="fn-wired-geocities"><a href="https://www.wired.com/2009/11/geocities">Ghost Pages: A Wired.com Farewell to GeoCities</a> <a href="#fnref-wired-geocities" aria-label="Back to citation 20">↑</a></li>
    	<li id="fn-verge-indie-web"><a href="https://www.theverge.com/column/829831/indie-web-geocities-neocities">The indie web is here...</a> <a href="#fnref-verge-indie-web" aria-label="Back to citation 21">↑</a></li>
    </ol>
</section>
