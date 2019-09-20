---
title: Scalable Vector Graphics (SVG)
---

Scalable Vector Graphics (SVG)
------------------------------

SVG can be included in any XML document simply by adding a `svg` element.

The `display`, `float`, and `flow` properties and all `margin`, `padding`, `border`, and `background` properties can be applied to the top-level `svg` element but not to child elements within it.

Prince supports SVG 1.1, with some exceptions - the following elements are currently *not* supported:

-   `scripting`
-   `animation`
-   SVG fonts
-   `clip` (deprecated)
-   `color-interpolation`
-   `color-profile` & `icc-color`
-   `color-rendering`
-   `cursor`
-   `enable-background` (`BackgroundImage`/`BackgroundAlpha`)
-   `font-size-adjust`
-   `font-stretch`
-   `glyph-orientation-horizontal`
-   `glyph-orientation-vertical`
-   `image-rendering`
-   `kerning`
-   `pointer-events`
-   `shape-rendering`
-   `textPath method="stretch"`
-   `text-rendering`
-   `writing-mode`
-   `tref` (removed)
-   `view`
-   `externalResourcesRequired`
-   `zoomAndPan`
-   `filterRes`
-   `textLength`
-   `lengthAdjust`
-   vertical text
-   `foreignObject`
-   `svgz`
-   `visibility:collapse`
-   `switch` (`requiredFeatures`, `requiredExtensions`, `systemLanguage`)
-   `alignment-baseline`

### Style Properties

The following style properties *are* supported on SVG elements:

-   `baseline-shift`
-   `clip-path`
-   `clip-rule`
-   `dominant-baseline`
-   `font-family`
-   `font-size`
-   `font-style`
-   `font-weight`
-   `fill`
-   `fill-opacity`
-   `fill-rule`
-   `marker-start`
-   `marker-mid`
-   `marker-end`
-   `stop-color`
-   `stop-opacity`
-   `stroke`
-   `stroke-dasharray`
-   `stroke-dashoffset`
-   `stroke-linecap`
-   `stroke-linejoin`
-   `stroke-miterlimit`
-   `stroke-opacity`
-   `stroke-width`
-   `text-anchor`

Style properties can be applied using SVG presentation attributes:


    <rect fill="yellow" stroke="blue" stroke-width="20"
            width="200" height="100"/>

Or by using CSS properties inside the `style` attribute or element:


    <rect style="fill:yellow; stroke:blue; stroke-width:20"
            width="200" height="100"/>

Alternatively, style properties can be applied by linking a stylesheet, or an XML stylesheet:

SVG


    ...
    <?xml-stylesheet type="text/css" href="style.css"?>
    ...
    <rect width="200" height="100"/>

CSS


    svg rect {
        fill: yellow;
        stroke: blue;
        stroke-width: 20;
    }

