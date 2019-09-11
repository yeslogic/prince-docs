---
title: CSS Media Queries
---

CSS Media Queries
-----------------

Below are all of the media queries supported by Prince. For their precise definition please refer to the [Media Queries Level 4](https://www.w3.org/TR/mediaqueries-4/) specification.

Media queries test how Prince is configured, rather than how the document is styled. The configuration of Prince often depends on the command-line arguments passed to it.

### Media Queries

A Media Query is a method of testing certain aspects of the user agent or device that the document is being displayed in.

The syntax consists of an optional media query modifier, an optional media type, and zero or more media features.

Several media queries can be combined into a comma separated media query list.

### Media Query Modifiers

Negating a media query
`not`
An individual media query can be negated by prefixing it with the keyword `not`.
Hiding a media query from legacy user agents
`only`
Prefixing a media query with the keyword `only` will have no effect on the media query's result, but will be ignored by legacy user agents.
### Media Types

A media type is a category of user-agent devices on which a document may be displayed. A more fine-grained way of targeting a specific device's exclusive aspects might be to use media features instead, or in addition. Prince defaults to the media type `print`.

However, note that the command-line option `--media` can be used to set a media type that media queries can test against. This can be convenient if the person running Prince knows in advance whether the PDF will be printed or viewed on the screen, such as might be the case for slideshows, or in case one might prefer the author's idea of what `screen` means.

Media types
`all`
Matches all devices.
`print`
Matches printers and devices intended to reproduce or produce a printed display.
`screen`
Matches all devices that are not matched by `print` or `speech`.
`speech`
Matches screenreaders and other devices that "read out" a page.
### Media Features

A media feature is a more fine-grained way of targeting a specific user-agent. Media features use the same syntax as CSS properties. However, there are some differences between the two:

-   Properties provide information about how to present a document; media features describe requirements of the output device.
-   Media features are wrapped in parentheses and combined with the keyword `and`.
-   A media feature may be given with only its name to evaluate the feature in a boolean context.
-   Media features with "range" type may be expressed with standard mathematical comparison operators.
-   Properties sometimes accept complex values, while media features only accept single values.

Multiple media features may be combined into a media condition using full boolean algebra (`not`, `and`, `or`).

Media feature types
discrete
Media features of the type "discrete" take their values from a set.
range
Media features of the type "range" take their values from a range. Their feature names can be prefixed by `min-` or `max-`.
### Dimension Media Features

`width`
Value: `length`
Describes the width of the displayed page.
Type: range
`height`
Value: `length`
Describes the height of the displayed page.
Type: range
`aspect-ratio`
Value: `length`
Describes the ratio of the width to the height of the displayed page.
Type: range
`orientation`
Value: `portrait` | `landscape`
Describes the width of the displayed page.
Type: discrete
### Display Quality Media Features

`resolution`
Value: `resolution` | `infinite`
Describes the resolution of the output device.
Type: range
`scan`
Value: `interlace` | `progressive`
Describes the scanning process of the output device. This feature is always `false` for Prince.
Type: discrete
`grid`
Value: `boolean`
Describes whether the output device is grid (1) or bitmap (0). Prince is bitmap based, and thus `0` matches.
Type: discrete
`update`
Value: `none` | `slow` | fast
Describes the ability of the output device to modify the appearance of the content once it has been rendered. In Prince the layout cannot be updated, and thus only `none` matches.
Type: discrete
`overflow-block`
Value: `none` | `scroll` | `optional-paged` | `paged`
Describes the behavior of the device when content overflows the initial containing block in the block axis..
Type: discrete
`overflow-inline`
Value: `none` | `scroll`
Describes the behavior of the device when content overflows the initial containing block in the inline axis..
Type: discrete
### Color Media Features

`color`
Value: `integer`
Describes the number of bits per color component of the output device. Prince assumes `13` color bits.
Type: range
`color-index`
Value: `integer`
Describes the number of entries in the color lookup table of the output device.
Type: range
`monochrome`
Value: `integer`
Describes the number of bits per pixel in a monochrome framebuffer.
Type: range
`color-gamut`
Value: `srgb` | `p3` | `rec2020`
Describes the approximate range of colors that are supported by the output device.
Type: discrete
### Interaction Media Features

`pointer`, `any-pointer`
Value: `none` | `coarse` | `fine`
Describes the presence and accuracy of pointing devices. Prince assumes `none`.
Type: discrete
`hover`, `any-hover`
Value: `none` | `hover`
Describes the user's ability to hover over elements on the page. Prince assumes `none`.
Type: discrete
### Scripting Media Features

`scripting`
Value: `none` | `initial-only` | `enabled`
Describes whether scripting languages, such as JavaScript, are supported. Prince assumes `none` or `initial-only`, depending on its configuration.
Type: discrete

