---
title: CSS References
---

CSS References
==============

In this section you find the documentation for the supported CSS features.

Supported CSS Specifications
----------------------------

Prince supports, fully or partially, the following CSS specifications:

<table class="grid">
<tr>
<th colspan="2">CSS Level 2</th>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/CSS2/">CSS 2.1</a></td>
<td>Prince supports the specification, with few exceptions: Prince does not support
the <code>quotes</code> property or the <code>open-quote</code> and <code>close-quote</code>
values. Prince does not support properties that apply only to interactive media. Note
that this includes <code>outline</code> and its <code>outline-*</code> subproperties.
For similar reasons, Prince does not support <code>visibility: collapse</code>. Prince
does not support the <code>armenian</code> or <code>georgian</code> list styles. Prince
treats <code>1ex</code> equivalently to <code>0.5em</code>, which might not be correct
for some fonts.</td>
</tr>
<tr>
<th colspan="2">CSS Level 3</th>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-backgrounds-3/">CSS Backgrounds and Borders Module Level 3</a></td>
<td>Prince does not support <code>box-shadow</code> and the <code>border-image</code>
properties.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-break-3/">CSS Fragmentation Module Level 3</a></td>
<td>Prince does not support <code>break-{before,after,inside}</code>. However, Prince
supports also the Prince-specific properties <code>column-break-{before,after}</code>.
The initial value of <code>widows</code> and <code>orphans</code> has been changed from
<code>2</code> to <code>1</code>.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css3-color/">CSS Color Module Level 3</a></td>
<td>Prince supports <code>opacity</code>. It supports some of the extensions of the
<code>color</code> property. <code>rgba()</code> is supported in builds after
Prince 11.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-content-3/">CSS Generated Content Module Level 3</a></td>
<td>Prince does not recognize the <code>quotes</code> property and the quote-related
content types.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-fonts-3/">CSS Fonts Module Level 3</a></td>
<td>Beyond the definitions in CSS 2.1, only <code>font-stretch</code> is recognized.
However, Prince provides a different interface to the functionality of the <code>font-variant-*</code>
and <code>font-feature-settings</code> properties.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-gcpm-3/">CSS Generated Content for Paged Media Module</a></td>
<td>Prince recognizes <code>footnote-display</code> and <code>string-set</code> as
well as the mechanism for running elements.  It does not recognize the
<code>running</code> or <code>footnote-policy</code> properties, but Prince provides
a different interface to the functionality of footnotes.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css3-images/">CSS Image Values and Replaced Content Module Level 3</a></td>
<td>Prince recognizes <code>image-resolution</code>, but takes a different syntax.</td>
</tr>
<tr>
<td><a href="https://drafts.csswg.org/css-images-3/">CSS Images Module Level 3 - Editor's Draft</a></td>
<td>Prince supports the mandatory values of <code>image-orientation</code>, as
well as the properties <code>object-fit</code> and <code>object-position</code>.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css3-multicol/">CSS Multi-column Layout Module</a></td>
<td>Prince largely supports this module.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-overflow-3/">CSS Overflow Module Level 3</a></td>
<td>Prince only recognizes the <code>overflow</code> property from CSS 2.1. However,
it supports its behaviour as described in the Level 3 module.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css3-page/">CSS Paged Media Module Level 3</a></td>
<td>Prince supports this module.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-text-3/">CSS Text Module Level 3</a></td>
<td>Prince does not recognize <code>line-break</code>, <code>text-align-all</code>
and <code>hanging-punctuation</code>, and it does not support the value
<code>break-word</code> of the property <code>word-break</code>.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-transforms-1/">CSS Transforms Module Level 1</a></td>
<td>Prince recognizes <code>transform</code> and <code>transform-origin</code>, but
does not recognize <code>transform-box</code>. Prince does not allow perspective transforms.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-ui-3/">CSS Basic User Interface Module Level 3 (CSS3 UI)</a></td>
<td>Prince recognizes <code>box-sizing</code> and <code>text-overflow</code>.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-writing-modes-3/">CSS Writing Modes Level 3</a></td>
<td>Prince partially implements <code>writing-mode</code>.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-namespaces-3/">CSS Namespaces Module Level 3</a></td>
<td>Prince supports namespaces in CSS.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css3-conditional/">CSS Conditional Rules Module Level 3</a></td>
<td>Prince supports the <a href="doc-refs.html#at-media"><code>@media</code></a>
and <a href="doc-refs.html#at-supports"><code>@supports</code></a> at-rules.</td>
</tr>
<tr>
<td><a href="https://drafts.fxtf.org/filters/">Filter Effects Module Level 1</a></td>
<td>Prince supports the <code>filter</code> property.</td>
</tr>
<tr>
<th colspan="2">CSS Level 4</th>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-flexbox-1/">CSS Flexible Box Layout Module Level 1</a></td>
<td>Prince supports this module as of Prince 12, with the exception of
  page breaking/fragmentation, break-before/-after,
  visibility:collapse and vertical writing.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/selectors4/">Selectors Level 4</a></td>
<td>Prince largely supports this module.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/mediaqueries-4/">Media Queries Level 4</a></td>
<td>Prince supports this module as of Prince 11.1.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-cascade-4/">CSS Cascading and Inheritance Level 4</a></td>
<td>Prince supports the new <code>supports()</code> condition for the <code>@import</code> rule.</td>
</tr>
<tr>
<td><a href="https://drafts.csswg.org/css-backgrounds-4/">CSS Backgrounds and Borders Module Level 4</a></td>
<td>Prince supports the <code>border-clip</code> property.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-variables-1/">CSS Custom Properties for Cascading Variables Module Level 1</a></td>
<td>Prince supports this module.</td>
</tr>
<tr>
<th colspan="2">Living Standards</th>
</tr>
<tr>
<td><a href="https://books.spec.whatwg.org/">CSS Books</a></td>
<td>Prince supports target counters, footnote floats, bookmarks labels, levels and
states, the <code>flow</code> property and the <code>string-set</code> property.</td>
</tr>
<tr>
<td><a href="https://figures.spec.whatwg.org/">CSS Figures</a></td>
<td>Prince largely supports the float extensions of the spec.</td>
</tr>
<tr>
<th colspan="2">SVG</th>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/SVG/">SVG 1.1</a></td>
<td>Prince supports the specification with some exceptions - please see
<a href="svg.html#svg">Scalable Vector Graphics (SVG)</a> for a full list of currently not supported elements.</td>
</tr>
</table>

Length Units
------------

Prince supports the following length units:

### Absolute Length Units

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

### Font Length Units

The font length units are relative to the `font-size` property.

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

### Pixel Unit

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

