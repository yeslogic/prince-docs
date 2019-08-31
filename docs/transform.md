---
title: Transformations
---

### Transformations

Prince supports CSS transformations of Level 1, with some limitations: it recognizes `transform` and `transform-origin`, but does not recognize `transform-box`. Furthermore, Prince does not allow perspective transforms.

The `` property can be used to rotate, translate, scale or skew an element.

The `` property currently does not affect SVG elements - they need to use their own `transform` attribute instead (see SVG Transformations).

The `` property function `rotate()` rotates the element clockwise from its current position. Negative values rotate conter-clockwise.

The function `translate()` moves an element along a vertical and/or horizontal axis. The functions `translatex()` and `translatey()` move the element along one of those axis only. The function `translate3d()` is supported if the Z (third) coordinate is zero, thus making it equivalent to the 2D `translate()`.

The function `scale()` affects the size of the element - note that this also alters other properties of an element, such as its ``, ``, `` and ``. The functions `scalex()` and `scaley()` transform the element in one dimension only.

The functions `skewx()` and `skewy()` tilt an element to the left or right. There is no shorthand form.

The origin for the transformations, i.e. the point around which a transformation is applied, can be set with the `` property.

If only one term is given, then the second component is assumed to be `center`. In particular, if only a percentage or length is given, then it is assumed to be the horizontal coordinate.

If both values are given as keywords, order doesn't matter; but if two coordinates are given and either coordinate is a length or percentage, then the horizontal component must come first: so `top 50%` is not valid, but `top` and `top center` and `50% top` are all valid and equivalent.
