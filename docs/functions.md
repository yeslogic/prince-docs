---
title: CSS Functional Expressions
---

CSS Functional Expressions
--------------------------

In this section you find the documentation for the supported CSS functional expressions. For additional details, make sure to also check the linked properties that use the functions.

\* functions marked with an asterisk are Prince extensions.

Function
Definition
Used in property
`attr( attribute-name type-or-unit? [, fallback]? )`
Retrieves the value of an attribute of the selected element.
``
`url( url )`
Represents a URL, i.e. a pointer to a source.
``
`var( custom-property-name [, fallback]? )`
Retrieves the value of a custom property set elsewhere.
[Custom properties (CSS variables)](css-vars.html#css-vars)
`rgb(R,G,B)`
Defines red, green and blue values of a color.
all `color` values
`rgba(R,G,B,A)`
Defines red, green and blue values and the alpha component of a color.
`cmyk(C,M,Y,K[,A])` | `device-cmyk(C,M,Y,K[,A])`
Defines cyan, magenta, yellow and black values of a color, as well as the optional alpha component.
`hsl(H,S,L)`
Defines hue, saturation and lightness values of a color.
`hsla(H,S,L,A)`
Defines hue, saturation and lightness values and the alpha component of a color.
`prince-color( colorname  [, number | percentage]? , overprint? )*`
Using a spot color defined in the `@prince-color` at-rule. The number or percentage defines the tint. An optional `overprint` keyword instructs Prince whether to overprint the color.
``
    color: prince-color(MyColor, 50%, overprint)

`prince-overprint( colorname | rgb() | cmyk() | device-cmyk() | hsl() | prince-color() [, [overprint-mode-nonzero | overprint-mode-zero]]? )*`
Specifies a non-transparent color value to overprint. If no overprint mode is given, it defaults to `overprint-mode-nonzero`.
`linear-gradient([ [ <angle> | to <side-or-corner> ] ,]? <color-stop>[, <color-stop>]+)`
Creates an image consisting of a progressive transition between two or more colors along a straight line.
`background-image`
`radial-gradient([ [ <shape> || <size> ] [ at <position> ]?, | at <position>, ]? <color-stop> [, <color-stop> ]+)`
Creates an image consisting of a progressive transition between two or more colors that radiate from an origin point
`repeating-linear-gradient([ [ <angle> | to <side-or-corner> ] ,]? <color-stop> [, <color-stop>]+)`
Creates an image consisting of repeating linear gradients.
`repeating-radial-gradient([ [ <shape> || <size> ] [ at <position> ]?, | at <position>, ]? <color-stop> [, <color-stop> ]+)`
Creates an image consisting of repeating radial gradients.
`rect( offset, offset, offset, offset )`
Defines a region in the form of a rectangle.
`clip`
`content()`
Retrieves the text content of the selected element. It can be used with several different properties.
`content` - see also [Generated Content Functions](gen-content.html#gen-content-functions)
`element( name, page-policy? )`
Places an element (which has been removed from the normal flow with the `running()` function) in a page region. See [Taking elements from the document](paged.html#content-taking-elements).
`counter( name, counter-style?, page-policy? )`
Generates a value for the innermost counter.
`counters( name, "separator", counter-style?, page-policy? )`
Concatenates counters on different levels.
`target-counter( url, counter, counter-style? )`
Retrieves the value of the innermost counter with a given name at the given URL. See [Using target-counter()](gen-content.html#counter-target).
`target-counters( url, counter, "separator", counter-style? )`
Retrieves the value of all counters of a given name from the end of the given URL.
`target-content( url )`
References the text content of the linked element. See [Using target-content()](gen-content.html#target-content).
`leader( "..." | dotted | solid | space )`
Inserts the given string before the element - useful in tables of content.
`string( ident, page-policy? )`
Retrieves the value defined with the `string-set` property. See [Copying content from the document](paged.html#content-copying-text).
`repeat( string+ )`
Used in counters as a `counter-style`, it defines a sequentially repeated pattern for numbering the items.
``
    h4::before { counter(h4, repeat("x", "y", "z")) }

This counter will yield the sequence "x, y, z, xx, yy, zz" etc.

`symbols( string+ )`
Used in counters as a `counter-style`, it defines the symbols used for numbering the items.
``
    h4::before { counter(h4, symbols("x", "y", "z")) }

This counter will yield the sequence "x, y, z, 4, 5, 6" etc.

`prince-base-url()*`
Returns the base URL of the current document.
`flow( name, page-policy? ) | prince-flow( name, page-policy? )*`
Inserts an element that has previously been removed with the `static()` function. See [Taking elements from the document](paged.html#content-taking-elements).
`prince-script( ident [, content+]? )*`
Calls arbitrary JavaScript functions in CSS generated content.
`prince-fallback( uri )*[, content+]?`
Inserts content fetched from another resource (like the `url()` function), but also has the possibility of specifying a fallback content, in case the loading of the URL should fail. If no comma and *content* items are provided, the fallback is as if `content: normal` were specified.
``
    img { content: prince-fallback(attr(src, url)), attr(data-altsrc, url) }

`prince-glyph-index( int )*`
Allows to choose a glyph from a font by the index of that glyph in the font.
Please note that this is very non-portable, as glyph indices are specific to individual font versions. But it is a possible escape hatch for people who need a specific glyph and don't have any other way of accessing it (by Unicode character or OpenType substitution).

Usually, authors should prefer to use named OpenType features, using the `prince-opentype()` value of the `font-variant` property, which is more likely to work when changing font.

`grayscale( number | percent )`
Converts the input image to grayscale.
`filter`
`sepia( number | percent )`
Converts the input image to sepia.
`saturate( number | percent )`
Saturates the input image.
`hue-rotate( angle )`
Applies a hue rotation on the input image.
`invert( number | percent )`
Inverts the samples in the input image.
`opacity( number | percent )`
Applies transparency to the input image.
`brightness( number | percent )`
Applies a linear multiplier to the input image, making it appear more or less bright.
`contrast( number | percent )`
Adjusts the contrast of the input image.
`blur( length )`
Applies a Gaussian blur to the input image.
`drop-shadow( length{1..3}, color? )`
Applies a drop shadow effect to the input image.
`prince-opentype( [ feature ]+ )*`
Specifies a comma-separated list of OpenType features to be enabled. For details please see the `font-variant` property and [OpenType Features in Prince](fonts.html#opentype-features).
`font-variant`
`running( name )`
Removes an element from the normal document flow, to make it available for use in a page region with the `element()` function. See [Taking elements from the document](paged.html#content-taking-elements).
`position`
`recompress-jpeg( quality% )*`
Recompresses JPEG images by the indicated percentage to save space.
`prince-image-magic`
`convert-to-jpeg( quality% )*`
Converts non-JPEG images to JPEG.
`static( name, [ start | current ]? )*`
Removes an element from the normal document flow, to make it available for use with the `flow()` function. See [Taking elements from the document](paged.html#content-taking-elements).
`prince-flow`
`command( ident )*`
Specifies any arbitrary command to be passed to the PDF viewer when the PDF file is opened. The user can supply values that Prince doesn't know about, but the viewer does.
`prince-pdf-open-action`
`format()`
Contains a comma-separated list of format strings that denote well-known font formats.
``
    @font-face {
      font-family: bodytext;
      src: url(sans-serif-font.ttf) format("opentype");
    }

`src`
`local()`
Searches for locally installed system fonts.
`prince-lookup()*`
Searches for locally installed system fonts, but will also find fonts defined by other `@font-face` rules. See [Defining a font family](fonts.html#font-family).
`rotate( angle )`
Rotates an element around a fixed point on the 2D plane.
`transform`
`matrix( number[, number]{5,5} )`
Describes a homogeneous 2D transformation matrix.
`translate( offset[, offset]? )`
Translates an element on the 2D plane.
`translatex( offset )`
Translates an element horizontally.
`translatey( offset )`
Translates an element vertically.
`translate3d( offset, offset, offset )`
Translates an element in 3D space.
`scale( number[, number]? )`
Scales an element up or down on the 2D plane.
`scalex( number )`
Scales an element up or down horizontally.
`scaley( number )`
Scales an element up or down vertically.
`skew( angle[, angle]? )`
Skews an element on the 2D plane.
`skewx( angle )`
Skews an element in the horizontal direction.
`skewy( angle )`
Skews an element in the vertical direction.
`supports([ <supports-condition> | <declaration> ])`
Interpreted as a `@supports` condition.
`@import`

