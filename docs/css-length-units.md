---
title: Length & Angle Units
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">

Prince supports the following length and angle units:

Absolute Length Units
---------------------

The absolute length units correspond to exact distances in the PDF file.

<table class="grid">
<tr>
<th colspan="2">Absolute length units</th>
</tr>
<tr>
<td class="example"><code>cm</code></td>
<td>centimeters</td>
</tr>
<tr>
<td class="example"><code>mm</code></td>
<td>millimeters</td>
</tr>
<tr>
<td class="example"><code>q</code></td>
<td>quarter-millimeters</td>
</tr>
<tr>
<td class="example"><code>in</code></td>
<td>inches</td>
</tr>
<tr>
<td class="example"><code>pc</code></td>
<td>picas</td>
</tr>
<tr>
<td class="example"><code>pt</code></td>
<td>points</td>
</tr>
</table>

Font Length Units
-----------------

The font length units are relative to the [`font-size`](css-props.md#prop-font-size) property.

<table class="grid">
<tr>
<th colspan="2">Font length units</th>
</tr>
<tr>
<td class="example"><code>em</code></td>
<td>font size of the element</td>
</tr>
<tr>
<td class="example"><code>rem</code></td>
<td>font size of the root element</td>
</tr>
<tr>
<td class="example"><code>ex</code></td>
<td>x-height of the element's font</td>
</tr>
</table>

Viewport Length Units
---------------------

The viewport length units are relative to the [`@page` area](css-at-rules.md#at-page): the unit `vw` is equal to 1% of the width of the *page area*, i.e. the [page size minus the margin area](paged.md#page-regions) (and minus border and padding), while the unit `vh` is equal to 1% of its height.

The values `pvw` and `pvh` are equal to respectively 1% of the width and height of the *entire page*, as defined by the [page size](paged.md#page-size).

Please note that these values cannot be used with elements for which a viewport, such as the root element, has not been established.

<table class="grid">
<tr>
<th colspan="2">Viewport length Units</th>
</tr>
<tr>
<td class="example"><code>vw</code></td>
<td>content area width</td>
</tr>
<tr>
<td class="example"><code>vh</code></td>
<td>content area height</td>
</tr>
<tr>
<td class="example"><code>vmin</code></td>
<td>the smaller length of <code>vw</code> or <code>vh</code></td>
</tr>
<tr>
<td class="example"><code>vmax</code></td>
<td>the larger length of <code>vw</code> or <code>vh</code></td>
</tr>
<tr>
<td class="example"><code>pvw</code></td>
<td>page width</td>
</tr>
<tr>
<td class="example"><code>pvh</code></td>
<td>page height</td>
</tr>
<tr>
<td class="example"><code>pvmin</code></td>
<td>the smaller length of <code>pvw</code> or <code>pvh</code></td>
</tr>
<tr>
<td class="example"><code>pvmax</code></td>
<td>the larger length of <code>pvw</code> or <code>pvh</code></td>
</tr>
</table>

Pixel Unit
----------

The pixel unit is relative to the de-facto standard of `96dpi` (or rather, 96 *pixel* per inch) for compatibility with browsers.

<table class="grid">
<tr>
<th colspan="2">Pixel unit</th>
</tr>
<tr>
<td class="example"><code>px</code></td>
<td>pixel</td>
</tr>
</table>


Fractional Length Unit
----------------------

CSS grids require a flexible length, expressed as a fraction of the leftover space in a grid container.

<table class="grid">
<tr>
<th colspan="2">Fractional length unit</th>
</tr>
<tr>
<td class="example"><code>fr</code></td>
<td>fraction of the leftover space in the grid container</td>
</tr>
</table>


Angle Units
-----------

Furthermore, Prince supports the four angle units `deg`, `grad`, `rad` and `turn` on the following properties:

* the CSS [`transform`](css-props.md#prop-transform) property has `rotate`, `skew` and `skewx`/`skewy` operators;
* linear gradients have an angle;
* [HSL colors](graphics.md#hsla) have a hue angle;
* the [`hue-rotate` filter](css-props.md#prop-filter) takes an angle;
* the `@page` [`-prince-rotate-body`](css-props.md#prop-prince-rotate-body) descriptor takes multiples of `90deg`.


Line Height Units
-----------------

Only supported by [Prince for Books](prince-for-books.md) are line height units.

<p class="note">
If <code>line-height</code> is set to <code>normal</code>, then these units currently
use the approximation of <code>1.2</code> instead of using the exact font-metrics.
</p>

<table class="grid">
<tr>
<th colspan="2">Line height units</th>
</tr>
<tr>
<td class="example"><code>lh</code></td>
<td>line height of the element</td>
</tr>
<tr>
<td class="example"><code>rlh</code></td>
<td>line height of the root element</td>
</tr>
</table>
