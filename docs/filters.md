---
title: Filters
---

Filters
-------

The `filter` property provides graphical effects like blurring, saturating or color shifting an element. Filters can be used alone, or combined in any way. However, the order in which filters are applied matters - applying `grayscale()` after any other filter will result in a gray result.

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
This filter applies transparency to the input. The amount value defines the proportion of the conversion. This function is similar to the `opacity` property.

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

The resolution used when rasterizing to images for applying CSS and SVG filters is controlled through the [prince-filter-resolution](doc-refs.html#prop-prince-filter-resolution) property. The default value is `96dpi` for compatibility with web browsers.

