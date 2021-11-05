---
title: Supported CSS Specifications
---

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
<td>Prince largely supports this module.  Please note that the initial value of
<code>widows</code> and <code>orphans</code> has been changed from
<code>2</code> to <code>1</code>.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-color-3/">CSS Color Module Level 3</a></td>
<td>Prince supports <code>opacity</code>. It supports some of the extensions of the
<code>color</code> property. <code>rgba()</code> is supported in builds after
Prince 11, <code>hsl()</code> and <code>hsla()</code> are supported as
of Prince 12.1 .</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-content-3/">CSS Generated Content Module Level 3</a></td>
<td>Prince does not recognize the <code>quotes</code> property and the quote-related
content types.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-fonts-3/">CSS Fonts Module Level 3</a></td>
<td>Beyond the definitions in CSS 2.1, Prince supports <code>font-stretch</code>,
<code>font-kerning</code>, <code>font-variant-caps</code> and <code>font-variant-ligatures</code>.
Prince also provides a different interface to the functionality of the
<code>font-feature-settings</code> property through the
<code><a href="/doc/css-props#prop-font-variant">font-variant: prince-opentype()</a></code>
function.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-lists-3/">CSS Lists and Counters Module Level 3</a></td>
<td>Prince does not support the <code>marker-side</code> and <code>counter-set</code> properties.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-gcpm-3/">CSS Generated Content for Paged Media Module</a></td>
<td>Prince recognizes <code>footnote-display</code> and <code>string-set</code> as
well as the mechanism for running elements.  It does not recognize the
<code>running</code> or <code>footnote-policy</code> properties, but Prince provides
a different interface to the functionality of footnotes (see <a href="/doc/styling#footnotes">Footnotes</a>).</td>
</tr>
<tr>
<td><a href="https://drafts.csswg.org/css-page-floats/">CSS Page Floats - Editor's Draft</a></td>
<td>Prince recognizes the properties <code>float</code>, <code>float-reference</code> and <code>float-defer</code>, but takes a different syntax.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-images-3/">CSS Images Module Level 3</a></td>
<td>Prince supports the mandatory values of <code>image-orientation</code>, as
well as the properties <code>object-fit</code> and <code>object-position</code>.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-multicol-1/">CSS Multi-column Layout Module Level 1</a></td>
<td>Prince largely supports this module.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-overflow-3/">CSS Overflow Module Level 3</a></td>
<td>Prince supports the <code>overflow</code> property's behaviour as described in the Level 3 module, but does not support the 2-value syntax.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-page-3/">CSS Paged Media Module Level 3</a></td>
<td>Prince supports this module.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-text-3/">CSS Text Module Level 3</a></td>
<td>Prince does not recognize <code>line-break</code>, <code>text-align-all</code>
and <code>hanging-punctuation</code>. It does not support the value
<code>break-word</code> of the property <code>word-break</code>, nor the value
<code>anywhere</code> of the property <code>overflow-wrap</code>, nor the value
<code>break-spaces</code> of the property <code>white-space</code>.</td>
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
<td><a href="https://www.w3.org/TR/css-conditional-3/">CSS Conditional Rules Module Level 3</a></td>
<td>Prince supports the <a href="#at-media"><code>@media</code></a>
and <a href="#at-supports"><code>@supports</code></a> at-rules.</td>
</tr>
<tr>
<td><a href="https://drafts.fxtf.org/filter-effects/">Filter Effects Module Level 1 - Editor's Draft</a></td>
<td>Prince supports the <code>filter</code> property.</td>
</tr>
<tr>
<th colspan="2">CSS Level 4</th>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-flexbox-1/">CSS Flexible Box Layout Module Level 1</a></td>
<td>Prince supports this module as of Prince 12, with the exception of
  page breaking/fragmentation, <code>break-before</code>/<code>-after</code>,
  <code>visibility: collapse</code> and vertical writing.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/selectors-4/">Selectors Level 4</a></td>
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
<td>Prince recognizes the <code>border-clip</code> property, but takes a different syntax.</td>
</tr>
<tr>
<td><a href="https://drafts.csswg.org/css-images-4/">CSS Images Module Level 4 - Editor's Draft</a></td>
<td>Prince recognizes <code>image-resolution</code>, but takes a different syntax.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css-variables-1/">CSS Custom Properties for Cascading Variables Module Level 1</a></td>
<td>Prince supports this module.</td>
</tr>
<tr>
<th colspan="2">Living Standards</th>
</tr>
<tr>
<td><a href="https://books.idea.whatwg.org/">CSS Books</a></td>
<td>Prince supports target counters, footnote floats, bookmarks labels, levels and
states, the <code>flow</code> property and the <code>string-set</code> property.</td>
</tr>
<tr>
<td><a href="https://figures.idea.whatwg.org/">CSS Figures</a></td>
<td>Prince largely supports the float extensions of the spec.</td>
</tr>
<tr>
<th colspan="2">SVG</th>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/SVG11/">SVG 1.1</a></td>
<td>Prince supports the specification with some exceptions - please see
<a href="/doc/graphics#scalable-vector-graphics-svg">Scalable Vector Graphics (SVG)</a> for a full list of currently not supported elements.</td>
</tr>
</table>
