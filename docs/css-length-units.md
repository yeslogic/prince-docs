---
title: Length & Angle Units
---

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

The viewport length units are relative to the [`@page` area](#at-page): the unit `vw` is equal to 1% of the width of the *page area*, i.e. the [page size minus the margin area](paged.md#page-regions) (and minus border and padding), while the unit `vh` is equal to 1% of its height.

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



Angle Units
-----------

Furthermore, Prince supports the four angle units `deg`, `grad`, `rad` and `turn` on the following properties:

* the CSS `transform` property has `rotate` and `skew` operators;
* linear gradients have and angle;
* `hsl`/`hsla` colors have a hue angle;
* the `hue-rotate` filter takes an angle;
* the @page `prince-rotate-body` property takes multiples of `90deg`.

