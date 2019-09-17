---
title: CSS References
---

CSS References
==============

In this section you find the documentation for the supported CSS features.

Supported CSS Specifications
----------------------------

Prince supports, fully or partially, the following CSS specifications:

CSS Level 2
[CSS 2.1](https://www.w3.org/TR/CSS2/)
Prince supports the specification, with few exceptions: Prince does not support the `quotes` property or the `open-quote` and `close-quote` values. Prince does not support properties that apply only to interactive media. Note that this includes `outline` and its `outline-*` subproperties. For similar reasons, Prince does not support `visibility: collapse`. Prince does not support the `armenian` or `georgian` list styles. Prince treats `1ex` equivalently to `0.5em`, which might not be correct for some fonts.
CSS Level 3
[CSS Backgrounds and Borders Module Level 3](https://www.w3.org/TR/css-backgrounds-3/)
Prince does not support `box-shadow` and the `border-image` properties.
[CSS Fragmentation Module Level 3](https://www.w3.org/TR/css-break-3/)
Prince does not support `break-{before,after,inside}`. However, Prince supports also the Prince-specific properties `column-break-{before,after}`. The initial value of `widows` and `orphans` has been changed from `2` to `1`.
[CSS Color Module Level 3](https://www.w3.org/TR/css3-color/)
Prince supports `opacity`. It supports some of the extensions of the `color` property. `rgba()` is supported in builds after Prince 11.
[CSS Generated Content Module Level 3](https://www.w3.org/TR/css-content-3/)
Prince does not recognize the `quotes` property and the quote-related content types.
[CSS Fonts Module Level 3](https://www.w3.org/TR/css-fonts-3/)
Beyond the definitions in CSS 2.1, only `font-stretch` is recognized. However, Prince provides a different interface to the functionality of the `font-variant-*` and `font-feature-settings` properties.
[CSS Generated Content for Paged Media Module](https://www.w3.org/TR/css-gcpm-3/)
Prince recognizes `footnote-display` and `string-set` as well as the mechanism for running elements. It does not recognize the `running` or `footnote-policy` properties, but Prince provides a different interface to the functionality of footnotes.
[CSS Image Values and Replaced Content Module Level 3](https://www.w3.org/TR/css3-images/)
Prince recognizes `image-resolution`, but takes a different syntax.
[CSS Images Module Level 3 - Editor's Draft](https://drafts.csswg.org/css-images-3/)
Prince supports the mandatory values of `image-orientation`, as well as the properties `object-fit` and `object-position`.
[CSS Multi-column Layout Module](https://www.w3.org/TR/css3-multicol/)
Prince largely supports this module.
[CSS Overflow Module Level 3](https://www.w3.org/TR/css-overflow-3/)
Prince only recognizes the `overflow` property from CSS 2.1. However, it supports its behaviour as described in the Level 3 module.
[CSS Paged Media Module Level 3](https://www.w3.org/TR/css3-page/)
Prince supports this module.
[CSS Text Module Level 3](https://www.w3.org/TR/css-text-3/)
Prince does not recognize `line-break`, `text-align-all` and `hanging-punctuation`, and it does not support the value `break-word` of the property `word-break`.
[CSS Transforms Module Level 1](https://www.w3.org/TR/css-transforms-1/)
Prince recognizes `transform` and `transform-origin`, but does not recognize `transform-box`. Prince does not allow perspective transforms.
[CSS Basic User Interface Module Level 3 (CSS3 UI)](https://www.w3.org/TR/css-ui-3/)
Prince recognizes `box-sizing` and `text-overflow`.
[CSS Writing Modes Level 3](https://www.w3.org/TR/css-writing-modes-3/)
Prince partially implements `writing-mode`.
[CSS Namespaces Module Level 3](https://www.w3.org/TR/css-namespaces-3/)
Prince supports namespaces in CSS.
[CSS Conditional Rules Module Level 3](https://www.w3.org/TR/css3-conditional/)
Prince supports the [`@media`](doc-refs.html#at-media) and [`@supports`](doc-refs.html#at-supports) at-rules.
[Filter Effects Module Level 1](https://drafts.fxtf.org/filters/)
Prince supports the `filter` property.
CSS Level 4
[CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)
Prince supports this module as of Prince 12, with the exception of page breaking/fragmentation, break-before/-after, visibility:collapse and vertical writing.
[Selectors Level 4](https://www.w3.org/TR/selectors4/)
Prince largely supports this module.
[Media Queries Level 4](https://www.w3.org/TR/mediaqueries-4/)
Prince supports this module as of Prince 11.1.
[CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/css-cascade-4/)
Prince supports the new `supports()` condition for the `@import` rule.
[CSS Backgrounds and Borders Module Level 4](https://drafts.csswg.org/css-backgrounds-4/)
Prince supports the `border-clip` property.
[CSS Custom Properties for Cascading Variables Module Level 1](https://www.w3.org/TR/css-variables-1/)
Prince supports this module.
Living Standards
[CSS Books](https://books.spec.whatwg.org/)
Prince supports target counters, footnote floats, bookmarks labels, levels and states, the `flow` property and the `string-set` property.
[CSS Figures](https://figures.spec.whatwg.org/)
Prince largely supports the float extensions of the spec.
SVG
[SVG 1.1](https://www.w3.org/TR/SVG/)
Prince supports the specification with some exceptions - please see [Scalable Vector Graphics (SVG)](svg.html#svg) for a full list of currently not supported elements.
Length Units
------------

Prince supports the following length units:

### Absolute Length Units

The absolute length units correspond to exact distances in the PDF file.

Absolute length units
`cm`
centimeters
`mm`
millimeters
`q`
quarter-millimeters
`in`
inches
`pc`
picas
`pt`
points
### Font Length Units

The font length units are relative to the `font-size` property.

Font length units
`em`
font size of the element
`rem`
font size of the root element
`ex`
x-height of the element's font
### Pixel Unit

The pixel unit is relative to the de-facto standard of `96dpi` (or rather, 96 *pixel* per inch) for compatibility with browsers.

Pixel unit
`px`
pixel

