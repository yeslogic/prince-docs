---
title: Graphics
---

Prince supports a wide range of graphic features, treated in more detail in the following sections. RGB, RGBA, HSL, HSLA, CMYK, and named spot colors are supported, and so is color management. Bitmap images and SVG are supported.

Color
-----

Prince supports RGB, RGBA, CMYK, HSL, HSLA and named spot colors. For Prince's color management, please see the [Color Management](#color-management) section.

Prince understands CSS [basic color keywords](css-color-names.md#basic-color-keywords) as well as the list of [extended color keywords](css-color-names.md#extended-color-keywords) from the [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/#named-colors). It also supports the keywords `transparent` and `currentColor`.

### RGB(A)

To use an RGB color in CSS, it can be expressed either as a value in hexadecimal notation, as an `rgb()` function or as a named color. For example, red can be specified in three ways:

```css
    color: #ff0000
    color: rgb(255, 0, 0)
    color: red
```
RGBA colors are equivalent to RGB plus an opacity (or alpha) value between 0 and 1. When the opacity is 0 the color is transparent, and when the opacity is 1 the color is identical to the RGB color. RGBA colors are expressed as an `rgba()` function.

```css
    color: rgba(255, 0, 0, 1)    // red
    color: rgba(255, 0, 0, 0.5)  // translucent red
    color: rgba(255, 0, 0, 0)    // fully transparent
```
### CMYK

CMYK colors can be specified using the `cmyk()` or, alternatively, the equivalent `device-cmyk()` function syntax. An optional fifth value is for the alpha channel, i.e. for opacity.

```
    color: cmyk(1, 0, 0, 0)       // cyan
    color: cmyk(0, 1, 1, 0)       // red
    color: cmyk(0, 0, 0, 1)       // black
    color: cmyk(0, 1, 1, 0, 0.1)  // translucent red
```
### HSL(A)

HSL(A) colors are supported as of Prince 12.1 .

HSL (Hue-Saturation-Lightness) color values can be specified with the `hsl()` function. HSL takes three values:

-   Hue is a degree on the color wheel (`0` or `360` is red, `120` is green, `240` is blue);
-   Saturation is a percentage value, and
-   Lightness is also a percentage.

Just as with RGB values expressed with the `rgb()` function an alpha channel for opacity can be added with the `rgba()` function, so also for HSL color values an alpha channel can be expressed with the `hsla()` function, which adds a fourth value for alpha - when the opacity is 0 the color is transparent, and when the opacity is 1 the color is identical to the HSL color.

The advantage of HSL over RGB is that it is much more intuitive to use and easier to create sets of matching colors (by keeping the same hue and varying the lightness and saturation values).

### Spot colors

Prince also supports named spot colors that can be defined with the [`@prince-color`](css-refs.md#at-prince-color) rule. An alternate color must also be specified with the [`alternate-color`](css-props.md#prop-alternate-color) descriptor, using any of the valid notations for RGB, HSL or CMYK colors. This will be used in situations where the named color is not available, such as when viewing the generated PDF file on a display. Please note that [`alternate-color`](css-props.md#prop-alternate-color) cannot be RGBA, HSLA or CMYKA.

```css
    @prince-color MyColor {
        alternate-color: rgb(255,0,0)
    }
```
Spot colors can be used with the `prince-color()` function with a specified tint value between 0 and 1, which defaults to 1, or alternatively expressed in percentage. They can also enable overprint:

```
    color: prince-color(MyColor)                  // tint 1.0
    color: prince-color(MyColor, 0.5)             // tint 0.5
    color: prince-color(MyColor, overprint)       // tint 1.0, overprint
    color: prince-color(MyColor, 50%, overprint)  // tint 50%, overprint
```
Another way to enable overprint is by using the `prince-overprint()` function, which allows to specify a non-transparent color value.

```css
    color: prince-overprint(red);
    color: prince-overprint(cmyk(0,1,1,0));
```

Color Management
----------------

### Introduction

The purpose of color management is to keep the appearance of colors consistent as they are converted between different devices and media. This is e.g. of advantage when preparing a PDF file on a computer screen before sending it to a printer - the desirable result will be to have a print that looks as close as possible to the display on the screen. Perfect equivalence is not possible, also not least because of the difference between a device with reflected light, such as paper, and one with direct light, such as a screen, but color management helps to achieve a close match in perception.

The conversion of color is facilitated by profiling devices; the set of data that characterizes a device or color space, i.e. the color attributes of the device, is kept as an ICC color profile. Color profiles are often embedded in image files to denote the color space of the image. When the color space is not known, color values are essentially arbitrary numbers without a physical interpretation.

The aim of Prince, within a color-managed workflow, is to preserve color information (namely, color profiles) from the input documents and images, through to the PDF output file.

### Color Management and PDF Profiles

As described in the [PDF Versions and Profiles](prince-output.md#pdf-versions-and-profiles) section, both PDF/A and PDF/X profiles impose restrictions on the features that may be used in a PDF file, including restrictions on color.

PDF/A and PDF/X files have an output intent that defines the intended output color space of the PDF file. In Prince, the output intent color profile is selected using the [`--pdf-output-intent`](command-line.md#cl-pdf-output-intent) command-line option, or using the [`-prince-pdf-output-intent`](css-props.md#prop-prince-pdf-output-intent) property inside a [`@prince-pdf`](css-refs.md#at-prince-pdf) at-rule. Both take a filename or URL to an ICC profile as its value.

The URL specified with the [`--pdf-output-intent`](command-line.md#cl-pdf-output-intent) command-line option or the [`-prince-pdf-output-intent`](css-props.md#prop-prince-pdf-output-intent) property will be resolved relative to the base URL of the style sheet or document in which the rule is, and needs to point to an existing color profile file.

```
    @prince-pdf {
        -prince-pdf-output-intent: url("ISOcoated_v2_eci.icc")
    }
```
For PDF/X, the output intent must be given as it describes the intended printing process. For PDF/A, Prince assumes an sRGB ICC profile if an output intent is not given.

Briefly, the restrictions on color imposed by PDF/X are:

PDF/X-1  
-   All color data must be Grayscale, CMYK or named Spot Colors;
-   Transparency is not allowed.
-   All colors must be characterized by the output intent - Prince implicitly performs color conversions.

PDF/X-3  
-   Allows other color spaces but colors must be device-independent, or else characterized by the output intent;
-   Transparency is not allowed.

PDF/X-4  
-   Allows other color spaces but colors must be device-independent, or else characterized by the output intent;
-   PDF transparency is supported.

PDF/A requires that all colors to be device-independent, or else characterized by the output intent (thus making them device-independent). Transparency is not allowed.

### Color Management in Prince

Prince supports RGB, RGBA, HSL, HSLA, CMYK, and named spot colors. For Prince's color handling, please see the [Color](#color) section.

As CSS defines RGB colors in the sRGB color space, Prince tags those colors with an sRGB ICC profile in the PDF output. See also the section on [Rich black and true black](#rich-black-and-true-black) below.

CMYK colors specified using the `cmyk()` function syntax, or equivalent `device-cmyk()` syntax, represent device-dependent colors, so they will be left as such in the PDF when possible. Device-dependent color is not allowed in PDF/A or PDF/X, so those CMYK colors will be assumed to be either in the output intent color space (if it is CMYK), or else the color space of the fallback CMYK profile. See the command-line option [`--fallback-cmyk-profile`](command-line.md#cl-fallback-cmyk-profile) in the [PDF Output Options](command-line.md#pdf-output-options) section, or the [`-prince-fallback-cmyk-profile`](css-props.md#prop-prince-fallback-cmyk-profile) property.
```bash
    prince input.html
           --pdf-profile=PDF/A-1b
           --pdf-output-intent=sRGB.icc
           --fallback-cmyk-profile=ISOcoated_v2_eci.icc
```
```css
    @prince-pdf {
        -prince-pdf-output-intent: url("sRGB.icc");
        -prince-fallback-cmyk-profile: url("ISOcoated_v2_eci.icc");
    }
```
Prince preserves the ICC profiles embedded in bitmap images, unless directed not to (see the `ignore-icc-profile` value of the [`-prince-image-magic`](css-props.md#prop-prince-image-magic) property). If an image does not have an embedded ICC profile, the behavior depends on the color model of the image. Untagged RGB images will be assumed to be in the sRGB color space. Untagged CMYK images will, when necessary, be assumed to be either in the output intent color space (if it is CMYK), or else the color space of the fallback CMYK profile. Untagged grayscale images will be left as DeviceGray in the PDF (in PDF/A and PDF/X, it means it is characterized by the output intent color space).

### Color conversion

Prince will convert all the colors in a document to a single color space if the [`--convert-colors`](command-line.md#cl-convert-colors) command-line option or the [`-prince-pdf-color-conversion`](css-props.md#prop-prince-pdf-color-conversion-syntax2) descriptor in the [`@prince-pdf`](css-refs.md#at-prince-pdf) at-rule is used. The destination color space is specified with the [`--pdf-output-intent`](command-line.md#cl-pdf-output-intent) option (or the [`-prince-pdf-output-intent`](css-props.md#prop-prince-pdf-output-intent) property), even when not producing PDF/A or PDF/X files.

Prince automatically converts colors to the output intent color space only when producing PDF/X-1a files. Files in any of the other profiles need also the [`--convert-colors`](command-line.md#cl-convert-colors) command-line option or the [`-prince-pdf-color-conversion`](css-props.md#prop-prince-pdf-color-conversion) property if colors are to be converted.

When used as a descriptor in a [`@prince-pdf`](css-refs.md#at-prince-pdf) at-rule, the [`-prince-pdf-color-conversion`](css-props.md#prop-prince-pdf-color-conversion-syntax2) descriptor also takes an optional second argument to define the rendering intent, or to cause the target ICC profile to not be embedded in the output PDF, unless required by the PDF profile.  For details, please see the entry for [the `-prince-pdf-color-conversion` descriptor](css-props.md#prop-prince-pdf-color-conversion-syntax2).

Prince however also allows to use [`-prince-pdf-color-conversion`](css-props.md#prop-prince-pdf-color-conversion) as a property, applied to individual elements.  In this case, the value `auto` is the default and will enable color conversion for this element, if color conversion is enabled at the top level in the [`@prince-pdf`](css-refs.md#at-prince-pdf) at-rule or with the command-line argument.  The value `none` allows color conversion to be disabled for that element and its descendants.

### Rich black and true black

In printing, "rich black" is a mixture of CMYK ink colors to produce a darker tone than using the black ink alone ("true black").

The property [`-prince-pdf-color-options`](css-props.md#prop-prince-pdf-color-options) controls the encoding of CSS RGB values representing black and grays, i.e. RGB colors with equal values of red, green and blue.

When the value `use-true-black` is used, such an RGB value will be encoded in the DeviceGray color space in the PDF. A CMYK printer should print the gray level using only the black ink. This is the default setting of Prince.

On the other hand, the `use-rich-black` value instructs Prince to keep all RGB colors as RGB in the PDF. A CMYK printer should print RGB colors using a mixture of all four CMYK inks.

```
    @prince-pdf {
        -prince-pdf-color-options: use-rich-black;
    }
```
Color conversion takes into account the `use-true-black` value when converting CSS RGB values to CMYK. True blacks and grays will be converted to CMYK with only non-zero values in the K channel. Note, however, that this does not affect bitmap images.

### Page color space

The property [`-prince-pdf-page-colorspace`](css-props.md#prop-prince-pdf-page-colorspace) controls the color space of pages in the PDF file. It affects the compositing of transparent content onto the page by selecting the color space in which compositing is performed. Prince currently defaults to the RGB color space. It may be useful to set this property to avoid converting the colors of transparent content before it is composited onto the page, possibly resulting in distorted colors.


Filters
-------

The [`filter`](css-props.md#prop-filter) property provides graphical effects like blurring, saturating or color shifting an element. Filters can be used alone, or combined in any way. However, the order in which filters are applied matters - applying `grayscale()` after any other filter will result in a gray result.

In this section we shall examine the various possibilities offered by this property.

The following filters can be used alone, or in any number and combination. Care is to be taken to the order the filters are being applied.

`filter: grayscale([ <number> | <percent> ])`  
This filter converts the input to grayscale. The amount value defines the proportion of the conversion.

`filter: sepia([ <number> | <percent> ])`  
This filter converts the input to sepia. The amount value defines the proportion of the conversion.

`filter: saturate([ <number> | <percent> ])`  
This filter saturates the input. The amount value defines the proportion of the conversion.

`filter: hue-rotate(<angle>)`  
This filter applies a hue rotation to the input. The angle value defines the number of degrees around the color circle that the rotation will be performed.

`filter: invert([ <number> | <percent> ])`  
This filter inverts the samples of the input. The amount value defines the proportion of the conversion.

`filter: opacity([ <number> | <percent> ])`  
This filter applies transparency to the input. The amount value defines the proportion of the conversion. This function is similar to the [`opacity`](css-props.md#prop-opacity) property.

`filter: brightness([ <number> | <percent> ])`  
This filter makes the input appear more or less bright. The amount value defines the proportion of the conversion. Values over 100% are allowed.

`filter: contrast([ <number> | <percent> ])`  
This filter controls the level of contrast. The amount value defines the proportion of the conversion.

`filter: blur(<length>)`  
This filter applies a gaussian blur to the input. The amount value defines the proportion of the conversion.

`filter: drop-shadow(<length>{2,3} <color>?)`  
This filter applies a drop shadow effect to the input. This is a blurred, offset version of the input, composited below the image.

Alternatively, a filter can be written in SVG and can be referenced by a URL:

`filter: url(<url>)`  
This filter takes the URL of an SVG filter. An anchor can be used to reference a specific filter element.

The resolution used when rasterizing to images for applying CSS and SVG filters is controlled through the [`-prince-filter-resolution`](css-props.md#prop-prince-filter-resolution) property. The default value is `96dpi` for compatibility with web browsers.


Images
------

Prince supports JPEG, PNG, TIFF and GIF images as well as [Scalable Vector Graphics (SVG)](#scalable-vector-graphics-svg).

Images can be included in XHTML and DocBook documents using the appropriate image elements, which are pre-defined in the default style sheets.

Images can also be included in arbitrary XML documents using the CSS [`content`](css-props.md#prop-content) property, which can be used to specify the image filename.

Furthermore, images are widely used in style sheets for the background. CSS allows also for several mechanisms to manipulate images and background images.

Please note that Prince tries to preserve the ICC color profile embedded in images - for details see the [Color Management](#color-management) section.

### Images in XHTML

The `img` element is used to include images in XHTML documents.

XML

```xml
    <img src="picture.jpg" alt="A Nice Picture"/>
```
### Images in DocBook

The `imagedata` element is used to include images in DocBook documents.

XML

```xml
    <mediaobject>
        <imageobject>
          <imagedata fileref="picture.jpg"/>
        </imageobject>
    </mediaobject>
```
### Images in Arbitrary XML

Images can be included in arbitrary XML documents by using the CSS [`content`](css-props.md#prop-content) property to specify the image filename.

The [`content`](css-props.md#prop-content) property can specify the image filename directly, or it can take the filename from an attribute of the element to which it has been applied.

CSS

```
    picture { content: url("picture.png") }
```
XML

```xml
    <para> A nice <picture /> here. </para>
```
The [`content`](css-props.md#prop-content) property directly specifies the filename of the image that will be used as the content of the `picture` element.

CSS

```
    picture { content: attr("src", url) }
```
XML

```xml
    <para> A nice <picture src="picture.tiff" /> here. </para>
```
The [`content`](css-props.md#prop-content) property specifies that the content of the `picture` element will be an image loaded from the filename specified by the `src` attribute of the element.

### CSS and Images

Images can be added to a document as content or decoration, and can be modified with the help of CSS properties.

#### Background Images

Several properties are available to add background images: `background-image` is used to add an image to a page, while `background-position`, `background-attachment` and `background-repeat` are used to position it precisely, also defining its appearance. See also [Background](styling.md#background).

Images can also be added to style a list with the property [`list-style-image`](css-props.md#prop-list-style-image) (see also [List marker style](styling.md#list-marker-style)).

#### Image Orientation

Usually images have the correct orientation when included in a document. If the image has an orientation specified in the EXIF metadata of JPEG and TIFF images, this is honored.  However, there are cases when the image needs to be oriented as encoded, without any additional rotation applied - the default behaviour can be overridden with the [`image-orientation`](css-props.md#prop-image-orientation) property.

This property applies only to content images (e.g. replaced elements and generated content), not decorative images (such as [`background-image`](css-props.md#prop-background-image)).

#### Image Size

CSS properties also control the size of images in print. Unless an explicit size for an image is specified by using the `width` and `height` properties, Prince will determine the intrinsic size from the image resolution (DPI), which can be overridden using the [`-prince-image-resolution`](css-props.md#prop-prince-image-resolution) property:

```
    -prince-image-resolution: 300dpi;        /* set an explicit DPI */
    -prince-image-resolution: normal;        /* 1 image pixel maps to 1px unit */
    -prince-image-resolution: auto, normal;  /* auto-detect, fallback to normal */
    -prince-image-resolution: auto, 96dpi;   /* auto-detect, fallback to 96dpi */
```
Not all images have an internal resolution set, so sometimes it is necessary to specify an explicit resolution. Alternatively, specifying a resolution of `normal` means that an image that is 100 pixels wide, will be the same size on the page as a block that is 100px units wide.

The property [`-prince-background-image-resolution`](css-props.md#prop-prince-background-image-resolution) does the same for background images.

The property [`object-fit`](css-props.md#prop-object-fit) offers another mechanism to determine how an image should be resized to fit its container. The position of the image in its container can be determined with the [`object-position`](css-props.md#prop-object-position) property.

The [`object-fit`](css-props.md#prop-object-fit) and [`object-position`](css-props.md#prop-object-position) properties are not specific to images, but apply to all replaced content, including content inserted as [Generated Content](gen-content.md) via the [`content`](css-props.md#prop-content) property.

Please note that specifying [`-prince-image-resolution`](css-props.md#prop-prince-image-resolution) and [`-prince-background-image-resolution`](css-props.md#prop-prince-background-image-resolution), or [`object-fit`](css-props.md#prop-object-fit), only affects the default DPI of images, ie. it makes them physically bigger or smaller on the page, and - it does not affect the number of pixels in the image, and thus the PDF file size will be the same.

To reduce the PDF file size, JPEG images can be recompressed at a lower quality level, or PNG images be converted to JPEG, with the [`-prince-image-magic`](css-props.md#prop-prince-image-magic) property. See also [Image Magic](cookbook#image-magic).


Scalable Vector Graphics (SVG)
------------------------------

SVG can be included in any XML document simply by adding a `svg` element.

The `display`, `float`, and `flow` properties and all `margin`, `padding`, `border`, and `background` properties can be applied to the top-level `svg` element but not to child elements within it.

Fonts defined inside an embedded SVG image file with CSS `@font-face` rules control the display of fonts.

Prince supports SVG 1.1, with some exceptions - the following elements are currently *not* supported:

-   `scripting`
-   `animation`
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

```xml
    <rect fill="yellow" stroke="blue" stroke-width="20"
            width="200" height="100"/>
```
Or by using CSS properties inside the `style` attribute or element:

```xml
    <rect style="fill:yellow; stroke:blue; stroke-width:20"
            width="200" height="100"/>
```
Alternatively, style properties can be applied by linking a stylesheet, or an XML stylesheet:

SVG

```xml
    ...
    <?xml-stylesheet type="text/css" href="style.css"?>
    ...
    <rect width="200" height="100"/>
```
CSS

```
    svg rect {
        fill: yellow;
        stroke: blue;
        stroke-width: 20;
    }
```

Rasterization
-------------

Prince allows for the output of a rasterized image rather than, or in addition to a PDF output. This produces a JPEG or PNG image of the content, which can be convenient when e.g. planning to use it as a quick preview or thumbnail of the PDF content to display on a website, as can e.g. be seen in the [Sample Documents](/samples/) section on this website.

Rasterization is enabled with the [`--raster-output`](command-line.md#cl-raster-output) command-line option, which also defines the template of the file naming. The output format can be chosen either based on the extension of the file name, or by explicitly indicating it.

```bash
      prince doc.html --raster-output=page_%02d.png
```
Furthermore the range of pages to rasterize and the resolution of the raster output can be tweaked in order to determine the number of pages in rasterized format, and the size of the images.

```bash
      prince doc.html --raster-output=title-thumbnail.jpg --raster-pages=first --raster-dpi=24
```
Please note that when creating a JPEG image output, the default quality parameter given
to libjpeg is `92`.  To tweak this value and set a different compression level,
use the command-line option [`--raster-jpeg-quality`](command-line.md#cl-raster-jpeg-quality).

If you want to rasterize the HTML to an image format that supports transparency (PNG, not JPEG) and have a transparent background, in order to composite it with something else later, the command-line option [`--raster-background`](command-line.md#cl-raster-background) can be used with the value `transparent`.

A full list of rasterization possibilities can be found in the [Raster Output Options](command-line.md#raster-output-options) section.

