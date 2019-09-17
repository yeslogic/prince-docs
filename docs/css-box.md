---
title: Box Model
---

### Box Model

All HTML elements follow the CSS box model. Their `margin`, `border`, `padding` and `background` can all be styled - and they can even cast a shadow with the property `box-shadow`.

#### Margin

At the very outside of the box are the margins. Each margin's size can be set individualy with the properties [margin-top](doc-refs.html#prop-margin-top), [margin-bottom](doc-refs.html#prop-margin-bottom), [margin-left](doc-refs.html#prop-margin-left) and [margin-right](doc-refs.html#prop-margin-right), or you can use the *shorthand property* [margin](doc-refs.html#prop-margin) to specify all four margins together. The syntax of the shorthand property is:

``
    margin: top right bottom left

If there are only:

-   three values: then the left margin is set equal to the right margin;
-   two values: then the left margin is set equal to the right margin, and the bottom margin is set equal to the top margin;
-   one value: then all margins are made equal.

Prince expands the margin properties with `margin-inside` and `margin-outside`, defining the margin respectively on the inside or outside of a spread: inside is on the right when used on a left-facing page, and on left on a right-facing page; outside is on the left when used on a left-facing page, and on the right on a right-facing page.

Always keep in mind that `margin-top` and `margin-bottom` of blocks are combined (i.e. "collapsed") into a single margin according to a possibly rather complex behavior known as *margin collapsing*. The notable exception is the behavior of margins in [Flex Layout](flexbox.html#flexbox).

#### Border

The border of a box can be styled with several border properties. The borders can either be individually styled with `border-top`, `border-right`, `border-bottom` and `border-left`, or the shorthand property `border` can be used to style all four borders of the box in the same way.

To style the borders, the `border-color`, `border-style` and `border-width` properties can be used. For each of them, also `top`, `right`, `bottom` and `left` variants are available to style each border separately.

The property `border-radius` property can be used for styling rounded corners.

The `border-clip` property splits the borders into parts along the border edge - the first part is visible, the second one is invisible, the third part is visible, etc.

#### Padding

The property `padding` defines the padding inside the box model. Each padding's size can be set individually with the properties [padding-top](doc-refs.html#prop-padding-top), [padding-bottom](doc-refs.html#prop-padding-bottom), [padding-left](doc-refs.html#prop-padding-left) and [padding-right](doc-refs.html#prop-padding-right), or you can use the *shorthand property* [padding](doc-refs.html#prop-padding) to specify all four paddings together. The syntax of the shorthand property is:

``
    padding: top right bottom left

If there are only:

-   three values: then the left padding is set equal to the right padding;
-   two values: then the left padding is set equal to the right padding, and the bottom padding is set equal to the top padding;
-   one value: then all paddings are made equal.

#### Background

The background of an element can be styled with the `background-color` and the `background-image` properties, or with the shorthand property `background`. See also [Background Images](images.html#images-background).

Various standard properties are available to position the background, to clip it or to determine whether, and how it should be repeated. Prince extends control on the background with the `prince-background-image-resolution` property, used to control image size in print (see [Image Size](images.html#images-size)), and with the `bleed` modifier of the `background-attachment` property, which, when used together with `background-size: cover`, allows a background image to cover the entire page bleed area (see [Trimming marks](paged.html#page-marks)).

