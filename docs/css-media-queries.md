---
title: CSS Media Queries
---

Below are all of the media queries supported by Prince. For their precise definition please refer to the [Media Queries Level 4](https://www.w3.org/TR/mediaqueries-4/) specification.

Media queries test how Prince is configured, rather than how the document is styled. The configuration of Prince often depends on the command-line arguments passed to it.

Media Queries
-------------

A Media Query is a method of testing certain aspects of the user agent or device that the document is being displayed in.

The syntax consists of an optional media query modifier, an optional media type, and zero or more media features.

Several media queries can be combined into a comma separated media query list.

Media Query Modifiers
---------------------

<table class="grid">
<tr>
<th colspan="2">Negating a media query</th>
</tr>
<tr>
<td><code>not</code></td>
<td>An individual media query can be negated by prefixing it with the keyword <code>not</code>.</td>
</tr>
<tr>
<th colspan="2">Hiding a media query from legacy user agents</th>
</tr>
<tr>
<td><code>only</code></td>
<td>Prefixing a media query with the keyword <code>only</code> will have no effect
on the media query's result, but will be ignored by legacy user agents.</td>
</tr>
</table>

Media Types
-----------

A media type is a category of user-agent devices on which a document may be displayed. A more fine-grained way of targeting a specific device's exclusive aspects might be to use media features instead, or in addition. Prince defaults to the media type `print`.

However, note that the command-line option `--media` can be used to set a media type that media queries can test against. This can be convenient if the person running Prince knows in advance whether the PDF will be printed or viewed on the screen, such as might be the case for slideshows, or in case one might prefer the author's idea of what `screen` means.

<table class="grid">
<tr>
<th colspan="2">Media types</th>
</tr>
<tr>
<td><code>all</code></td>
<td>Matches all devices.</td>
</tr>
<tr>
<td><code>print</code></td>
<td>Matches printers and devices intended to reproduce or produce a printed display.</td>
</tr>
<tr>
<td><code>screen</code></td>
<td>Matches all devices that are not matched by <code>print</code> or <code>speech</code>.</td>
</tr>
<tr>
<td><code>speech</code></td>
<td>Matches screenreaders and other devices that "read out" a page.</td>
</tr>
</table>

Media Features
--------------

A media feature is a more fine-grained way of targeting a specific user-agent. Media features use the same syntax as CSS properties. However, there are some differences between the two:

-   Properties provide information about how to present a document; media features describe requirements of the output device.
-   Media features are wrapped in parentheses and combined with the keyword `and`.
-   A media feature may be given with only its name to evaluate the feature in a boolean context.
-   Media features with "range" type may be expressed with standard mathematical comparison operators.
-   Properties sometimes accept complex values, while media features only accept single values.

Multiple media features may be combined into a media condition using full boolean algebra (`not`, `and`, `or`).

<table class="grid">
<tr>
<th colspan="2">Media feature types</th>
</tr>
<tr>
<td>discrete</td>
<td>Media features of the type "discrete" take their values from a set.</td>
</tr>
<tr>
<td>range</td>
<td>Media features of the type "range" take their values from a range. Their feature
names can be prefixed by <code>min-</code> or <code>max-</code>.</td>
</tr>
</table>


### Dimension Media Features

<table class="grid">
<tr>
<th colspan="2"><code>width</code></th>
</tr>
<tr>
<td>Value: <code><i>length</i></code></td>
<td rowspan="2">Describes the width of the displayed page.</td>
</tr>
<tr>
<td>Type: range</td>
</tr>
<tr>
<th colspan="2"><code>height</code></th>
</tr>
<tr>
<td>Value: <code><i>length</i></code></td>
<td rowspan="2">Describes the height of the displayed page.</td>
</tr>
<tr>
<td>Type: range</td>
</tr>
<tr>
<th colspan="2"><code>aspect-ratio</code></th>
</tr>
<tr>
<td>Value: <code><i>length</i></code></td>
<td rowspan="2">Describes the ratio of the width to the height of the displayed page.</td>
</tr>
<tr>
<td>Type: range</td>
</tr>
<tr>
<th colspan="2"><code>orientation</code></th>
</tr>
<tr>
<td>Value: <code>portrait</code> | <code>landscape</code></td>
<td rowspan="2">Describes the width of the displayed page.</td>
</tr>
<tr>
<td>Type: discrete</td>
</tr>
</table>

### Display Quality Media Features

<table class="grid">
<tr>
<th colspan="2"><code>resolution</code></th>
</tr>
<tr>
<td>Value: <code><i>resolution</i></code> | <code>infinite</code></td>
<td rowspan="2">Describes the resolution of the output device.</td>
</tr>
<tr>
<td>Type: range</td>
</tr>
<tr>
<th colspan="2"><code>scan</code></th>
</tr>
<tr>
<td>Value: <code>interlace</code> | <code>progressive</code></td>
<td rowspan="2">Describes the scanning process of the output device. This feature
is always <code>false</code> for Prince.</td>
</tr>
<tr>
<td>Type: discrete</td>
</tr>
<tr>
<th colspan="2"><code>grid</code></th>
</tr>
<tr>
<td>Value: <code><i>boolean</i></code></td>
<td rowspan="2">Describes whether the output device is grid (1) or bitmap (0). Prince
is bitmap based, and thus <code>0</code> matches.</td>
</tr>
<tr>
<td>Type: discrete</td>
</tr>
<tr>
<th colspan="2"><code>update</code></th>
</tr>
<tr>
<td>Value: <code>none</code> | <code>slow</code> | fast</td>
<td rowspan="2">Describes the ability of the output device to modify the appearance
of the content once it has been rendered. In Prince the layout cannot be updated, and
thus only <code>none</code> matches.</td>
</tr>
<tr>
<td>Type: discrete</td>
</tr>
<tr>
<th colspan="2"><code>overflow-block</code></th>
</tr>
<tr>
<td>Value: <code>none</code> | <code>scroll</code> | <code>optional-paged</code>
| <code>paged</code></td>
<td rowspan="2">Describes the behavior of the device when content overflows the
initial containing block in the block axis..</td>
</tr>
<tr>
<td>Type: discrete</td>
</tr>
<tr>
<th colspan="2"><code>overflow-inline</code></th>
</tr>
<tr>
<td>Value: <code>none</code> | <code>scroll</code></td>
<td rowspan="2">Describes the behavior of the device when content overflows the
initial containing block in the inline axis..</td>
</tr>
<tr>
<td>Type: discrete</td>
</tr>
</table>


### Color Media Features

<table class="grid">
<tr>
<th colspan="2"><code>color</code></th>
</tr>
<tr>
<td>Value: <code><i>integer</i></code></td>
<td rowspan="2">Describes the number of bits per color component of the output device.
Prince assumes <code>13</code> color bits.</td>
</tr>
<tr>
<td>Type: range</td>
</tr>
<tr>
<th colspan="2"><code>color-index</code></th>
</tr>
<tr>
<td>Value: <code><i>integer</i></code></td>
<td rowspan="2">Describes the number of entries in the color lookup table of the
output device.</td>
</tr>
<tr>
<td>Type: range</td>
</tr>
<tr>
<th colspan="2"><code>monochrome</code></th>
</tr>
<tr>
<td>Value: <code><i>integer</i></code></td>
<td rowspan="2">Describes the number of bits per pixel in a monochrome framebuffer.</td>
</tr>
<tr>
<td>Type: range</td>
</tr>
<tr>
<th colspan="2"><code>color-gamut</code></th>
</tr>
<tr>
<td>Value: <code>srgb</code> | <code>p3</code> | <code>rec2020</code></td>
<td rowspan="2">Describes the approximate range of colors that are supported by the output device.</td>
</tr>
<tr>
<td>Type: discrete</td>
</tr>
</table>


### Interaction Media Features

<table class="grid">
<tr>
<th colspan="2"><code>pointer</code>, <code>any-pointer</code></th>
</tr>
<tr>
<td>Value: <code>none</code> | <code>coarse</code> | <code>fine</code></td>
<td rowspan="2">Describes the presence and accuracy of pointing devices. Prince assumes
<code>none</code>.</td>
</tr>
<tr>
<td>Type: discrete</td>
</tr>
<tr>
<th colspan="2"><code>hover</code>, <code>any-hover</code></th>
</tr>
<tr>
<td>Value: <code>none</code> | <code>hover</code></td>
<td rowspan="2">Describes the user's ability to hover over elements on the page. Prince
assumes <code>none</code>.</td>
</tr>
<tr>
<td>Type: discrete</td>
</tr>
</table>

### Scripting Media Features

<table class="grid">
<tr>
<th colspan="2"><code>scripting</code></th>
</tr>
<tr>
<td>Value: <code>none</code> | <code>initial-only</code> | <code>enabled</code></td>
<td rowspan="2">Describes whether scripting languages, such as JavaScript, are supported.
Prince assumes <code>none</code> or <code>initial-only</code>, depending on its configuration.</td>
</tr>
<tr>
<td>Type: discrete</td>
</tr>
</table>
