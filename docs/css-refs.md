---
title: CSS References
---

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
<td>Prince largely supports this module.  Please note that the initial value of
<code>widows</code> and <code>orphans</code> has been changed from
<code>2</code> to <code>1</code>.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/css3-color/">CSS Color Module Level 3</a></td>
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
<td><a href="https://www.w3.org/TR/css-lists-3/">CSS Lists Module Level 3</a></td>
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
<td>Prince recognizes the properties <code>float-reference</code> and <code>float-defer</code>, but takes a different syntax.</td>
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
<td>Prince supports the <code>overflow</code> property's behaviour as described in the Level 3 module, but does not support the 2-value syntax.</td>
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
<td>Prince supports the <a href="#at-media"><code>@media</code></a>
and <a href="#at-supports"><code>@supports</code></a> at-rules.</td>
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
  page breaking/fragmentation, <code>break-before</code>/<code>-after</code>,
  <code>visibility: collapse</code> and vertical writing.</td>
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
<td>Prince recognizes the <code>border-clip</code> property, but takes a different syntax.</td>
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
<a href="/doc/graphics#scalable-vector-graphics-svg">Scalable Vector Graphics (SVG)</a> for a full list of currently not supported elements.</td>
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


CSS Selectors
-------------

Below are the CSS selectors supported by Prince. For their precise definition please refer to the CSS specification - Prince largely implements [Selectors Level 4](https://www.w3.org/TR/selectors4/).

### Terminology and Definitions

<table class="grid">
<tr>
<td><code>selector</code></td>
<td>Can refer to a <code>simple selector</code>, <code>compound selector</code>,
<code>complex selector</code>, or <code>selector list</code>.</td>
</tr>
<tr>
<td><code>selector list</code></td>
<td>A comma-separate list of selectors.</td>
</tr>
<tr>
<td><code>compound selector</code></td>
<td>A chain of simple selectors that are not separated by a combinator.</td>
</tr>
<tr>
<td><code>simple selector</code></td>
<td>Either a type selector, universal selector, attribute selector, class selector,
ID selector, or pseudo-class.</td>
</tr>
<tr>
<td><code>relative selector</code></td>
<td>A shorthand for selectors that represent elements relative to a <code>:scope</code>
element.</td>
</tr>
<tr>
<td><code>combinator</code></td>
<td>Punctuation that represents a particular kind of relationship between compound
selectors on either side.</td>
</tr>
<tr>
<td><code><i>An+B</i></code></td>
<td>This micro-syntax to indicate indexes in a list of sibling elements represents
an integer <code>step (A)</code> and <code>offset (B)</code>, i.e. it indicates the
<code><i>An+B</i></code>th elements in a list. It also takes the keywords <code>odd</code>
and <code>even</code>.</td>
</tr>
<tr>
<td><code>expanded element name</code></td>
<td>The tuple of local element name and namespace name.</td>
</tr>
</table>

### Logical Combinations

<table class="grid">
<tr>
<th colspan="2">Selector List</th>
</tr>
<tr>
<td><code>E, F, G</code></td>
<td>A comma-separated list of selectors represents all the elements selected by
each selector of the list.</td>
</tr>
<tr>
<th colspan="2">The Matches-Any Pseudo-class</th>
</tr>
<tr>
<td><code>E:matches(<i>s1</i>, <i>s2</i>)</code></td>
<td>The matches-any pseudo-class represents an element <code>E</code> that is
represented by the list of compound selectors it takes as argument.</td>
</tr>
<tr>
<th colspan="2">The Negation Pseudo-class</th>
</tr>
<tr>
<td><code>E:not(<i>s1</i>, <i>s2</i>)</code></td>
<td>The negation pseudo-class represents an element <code>E</code> that is not
represented by the list of compound selectors it takes as argument.</td>
</tr>
<tr>
<th colspan="2">The Relational Pseudo-class</th>
</tr>
<tr>
<td><code>E:has(<i>rs1</i>, <i>rs2</i>)</code></td>
<td>The relational pseudo-class represents an element <code>E</code>, if either
of the relative selectors <code>rs1</code> or <code>rs2</code>, when evaluated
with <code>E</code> as the <code>:scope</code> element, match an element.</td>
</tr>
<tr>
<th colspan="2">The Contains Pseudo-class</th>
</tr>
<tr>
<td><code>E:contains(<i>foo</i>)</code></td>
<td>The contains pseudo-class represents an element <code>E</code> containing the
text <code>foo</code>.</td>
</tr>
</table>

### Elemental Selectors

<table class="grid">
<tr>
<th colspan="2">Type (tag name) selectors</th>
</tr>
<tr>
<td><code>E</code></td>
<td>A type selector representing an element <code>E</code> in the default namespace.</td>
</tr>
<tr>
<td><code>|E</code></td>
<td>A type selector representing an element <code>E</code> in no namespace.</td>
</tr>
<tr>
<td><code>ns|E</code></td>
<td>A type selector representing an element <code>E</code> in the namespace <code>ns</code>.</td>
</tr>
<tr>
<td><code>*|E</code></td>
<td>A type selector representing an element <code>E</code> in any or no namespace.</td>
</tr>
<tr>
<th colspan="2">Universal selectors</th>
</tr>
<tr>
<td><code>*</code></td>
<td>A universal selector representing all elements in the default namespace.</td>
</tr>
<tr>
<td><code>|*</code></td>
<td>A universal selector representing all elements in no namespace.</td>
</tr>
<tr>
<td><code>ns|*</code></td>
<td>A type selector representing all elements in the namespace <code>ns</code>.</td>
</tr>
<tr>
<td><code>*|*</code></td>
<td>A type selector representing all elements.</td>
</tr>
</table>

### Attribute Selectors

Case-sensitivity of the attributes and values depends on the document language. To match values case-insensitively, the attribute selector may contain the identifier `i` before the closing bracket. (Example: `[att=val i]`)

Default namespaces do not apply to attributes. Therefore a namespace `ns` that has been previously declared should be added before the namespace separator `|` preceding the attribute name.

<table class="grid">
<tr>
<th colspan="2">Attribute presence and value selectors</th>
</tr>
<tr>
<td><code>[att]</code></td>
<td>An attribute selector representing an element with the <code>att</code> attribute.</td>
</tr>
<tr>
<td><code>[att=val]</code></td>
<td>An attribute selector representing an element with the <code>att</code> attribute
with the value <code>val</code>.</td>
</tr>
<tr>
<td><code>[att~=val]</code></td>
<td>An attribute selector representing an element with the <code>att</code> attribute
containing the value <code>val</code>.</td>
</tr>
<tr>
<td><code>[att|=val]</code></td>
<td>An attribute selector representing an element with the <code>att</code> attribute
equal to or beginning with the value <code>val</code>.</td>
</tr>
<tr>
<th colspan="2">Substring matching attribute selectors</th>
</tr>
<tr>
<td><code>[att^=val]</code></td>
<td>An attribute selector representing an element with the <code>att</code> attribute
whose value begins with the prefix <code>val</code>.</td>
</tr>
<tr>
<td><code>[att$=val]</code></td>
<td>An attribute selector representing an element with the <code>att</code> attribute
whose value ends with the suffix <code>val</code>.</td>
</tr>
<tr>
<td><code>[att*=val]</code></td>
<td>An attribute selector representing an element with the <code>att</code> attribute
whose value contains <code>val</code>.</td>
</tr>
<tr>
<th colspan="2">Class selectors</th>
</tr>
<tr>
<td><code>E.val</code></td>
<td>A class selector representing an element <code>E</code> with a class identifier
<code>val</code>.</td>
</tr>
<tr>
<th colspan="2">ID selectors</th>
</tr>
<tr>
<td><code>E#val</code></td>
<td>An ID selector representing an element <code>E</code> with an ID identifier
<code>val</code>.</td>
</tr>
</table>


### Linguistic Pseudo-classes

<table class="grid">
<tr>
<th colspan="2">The language pseudo-class</th>
</tr>
<tr>
<td><code>E:lang(<i>C</i>)</code></td>
<td>The language pseudo-class represents an element <code>E</code> that is in the
language <code>C</code>.</td>
</tr>
</table>


### Input Pseudo-classes

<table class="grid">
<tr>
<th colspan="2">The input control states</th>
</tr>
<tr>
<td><code>:enabled</code></td>
<td>The <code>:enabled</code> pseudo-class represents user interface elements that
are in the enabled state.</td>
</tr>
<tr>
<td><code>:disabled</code></td>
<td>The <code>:disabled</code> pseudo-class represents user interface elements that
are in the disabled state.</td>
</tr>
<tr>
<td><code>:read-write</code></td>
<td>The <code>:read-write</code> pseudo-class matches an element that is user-alterable.</td>
</tr>
<tr>
<td><code>:read-only</code></td>
<td>The <code>:read-only</code> pseudo-class matches an element that is not user-alterable.</td>
</tr>
<tr>
<th colspan="2">The input value state</th>
</tr>
<tr>
<td><code>:checked</code></td>
<td>The <code>:checked</code> pseudo-class represents user interface elements
such as radio and checkbox elements that are selected by the user.</td>
</tr>
</table>


### Location Pseudo-classes

<table class="grid">
<tr>
<th colspan="2">The link pseudo-classes</th>
</tr>
<tr>
<td><code>E:link</code></td>
<td>The <code>:link</code> pseudo-class applies to links that have not yet been visited.</td>
</tr>
<tr>
<td><code>E:visited</code></td>
<td>The <code>:visited</code> pseudo-class applies to visited links.</td>
</tr>
<tr>
<th colspan="2">The contextual reference element pseudo-class</th>
</tr>
<tr>
<td><code>E:scope</code></td>
<td>The contextual reference element pseudo-class represents an element <code>E</code>
being a designated contextual reference element. <code>:scope</code> is supported
in conjunction with <code>:has()</code>, meaning that <code>:scope</code> matches
the element that <code>:has()</code> is applied to.</td>
</tr>
</table>


### Tree-Structural pseudo-classes

<table class="grid">
<tr>
<th colspan="2">The <code>:root</code> pseudo-class</th>
</tr>
<tr>
<td><code>:root</code></td>
<td>The <code>:root</code> pseudo-class represents an element that is the root of
the document. In HTML 4 this is always the <code>HTML</code> element.</td>
</tr>
<tr>
<th colspan="2">The <code>:empty</code> pseudo-class</th>
</tr>
<tr>
<td><code>:empty</code></td>
<td>The <code>:empty</code> pseudo-class represents an element that has no children
at all.</td>
</tr>
<tr>
<th colspan="2">The child-indexed pseudo-classes</th>
</tr>
<tr>
<td><code>:nth-child(<i>An+B</i> of <i>S</i>)</code></td>
<td>The <code>:nth-child(An+B)</code> pseudo-class represents the <code>An+B</code>th
element that matches the selector list <code>S</code> among its inclusive siblings.</td>
</tr>
<tr>
<td><code>:nth-last-child(<i>An+B</i> of <i>S</i>)</code></td>
<td>The <code>:nth-last-child(An+B)</code> pseudo-class represents the <code>An+B</code>th
element that matches the selector list <code>S</code> among its inclusive siblings,
counting backwards from the end.</td>
</tr>
<tr>
<td><code>:first-child</code></td>
<td>The <code>:first-child</code> pseudo-class represents an element that is first
among its inclusive siblings.</td>
</tr>
<tr>
<td><code>:last-child</code></td>
<td>The <code>:last-child</code> pseudo-class represents an element that is last
among its inclusive siblings.</td>
</tr>
<tr>
<td><code>:only-child</code></td>
<td>The <code>:only-child</code> pseudo-class represents an element that has no siblings.</td>
</tr>
<tr>
<th colspan="2">The typed child-indexed pseudo-classes</th>
</tr>
<tr>
<td><code>:nth-of-type(<i>An+B</i>)</code></td>
<td>The <code>:nth-of-type(<i>An+B</i>)</code> pseudo-class represents the <code>An+B</code>th
element with the same namespace and type among its inclusive siblings.</td>
</tr>
<tr>
<td><code>:nth-last-of-type(<i>An+B</i>)</code></td>
<td>The <code>:nth-last-of-type(<i>An+B</i>)</code> pseudo-class represents the <code>An+B</code>th
element with the same namespace and type among its inclusive siblings, counting backwards
from the end.</td>
</tr>
<tr>
<td><code>:first-of-type</code></td>
<td>The <code>:first-of-type</code> pseudo-class represents an element that is the
first with a particular namespace and type among its inclusive siblings.</td>
</tr>
<tr>
<td><code>:last-of-type</code></td>
<td>The <code>:last-of-type</code> pseudo-class represents an element that is the
first with a particular namespace and type among its inclusive siblings, counting
backwards from the end.</td>
</tr>
<tr>
<td><code>:only-of-type</code></td>
<td>The <code>:only-of-type</code> pseudo-class represents an element that has no
siblings with the same namespace and type.</td>
</tr>
</table>


### Combinators

<table class="grid">
<tr>
<th colspan="2">Descendant combinator</th>
</tr>
<tr>
<td><code>E F</code></td>
<td rowspan="2">An <code>F</code> element descendant of an <code>E</code> element.</td>
</tr>
<tr>
<td><code>E >> F</code></td>
</tr>
<tr>
<th colspan="2">Child combinator</th>
</tr>
<tr>
<td><code>E > F</code></td>
<td>An <code>F</code> element child of an <code>E</code> element.</td>
</tr>
<tr>
<th colspan="2">Next-sibling combinator</th>
</tr>
<tr>
<td><code>E + F</code></td>
<td>An <code>F</code> element immediately preceded by an <code>E</code> element.</td>
</tr>
<tr>
<th colspan="2">Following-sibling combinator</th>
</tr>
<tr>
<td><code>E ~ F</code></td>
<td>An <code>F</code> element preceded by an <code>E</code> element.</td>
</tr>
</table>


### Tree-Abiding Pseudo-element Selectors

<table class="grid">
<tr>
<th colspan="2">Generated content pseudo-elements</th>
</tr>
<tr>
<td><code>::before</code></td>
<td>Represents a styleable child pseudo-element immediately before the originating
element's actual content.</td>
</tr>
<tr>
<td><code>::after</code></td>
<td>Represents a styleable child pseudo-element immediately after the originating
element's actual content.</td>
</tr>
<tr>
<th colspan="2">List markers</th>
</tr>
<tr>
<td><code>::marker</code></td>
<td>Represents the automatically generated marker box of a list item.</td>
</tr>
</table>


### Typographic Pseudo-element Selectors

<table class="grid">
<tr>
<th colspan="2">The <code>::first-line</code> pseudo-element</th>
</tr>
<tr>
<td><code>::first-line</code></td>
<td>Represents the content of the formatted line of the originating element.</td>
</tr>
<tr>
<th colspan="2">The <code>::first-letter</code> pseudo-element</th>
</tr>
<tr>
<td><code>::first-letter</code></td>
<td>Represents the first typographic letter unit of the first formatted line of the
originating element, if it is not preceded by other content.</td>
</tr>
</table>


### Footnote Pseudo-element Selectors

<table class="grid">
<tr>
<th colspan="2">The <code>::footnote-call</code> pseudo-element</th>
</tr>
<tr>
<td><code>::footnote-call</code></td>
<td>Represents the footnote calls, i.e. the anchors that refer to footnotes.</td>
</tr>
<tr>
<th colspan="2">The <code>::footnote-marker</code> pseudo-element</th>
</tr>
<tr>
<td><code>::footnote-marker</code></td>
<td>Represents the footnote markers placed in front of the actual footnote text.</td>
</tr>
</table>


### Page Selectors

<table class="grid">
<tr>
<th colspan="2">The <code>nth(<i>N</i>)</code> selector</th>
</tr>
<tr>
<td><code>nth(<i>N</i>)</code></td>
<td>Represents the <i>N</i>th page of the document: <code>@page:nth(42) {...}</code></td>
</tr>
</table>


CSS Media Queries
-----------------

Below are all of the media queries supported by Prince. For their precise definition please refer to the [Media Queries Level 4](https://www.w3.org/TR/mediaqueries-4/) specification.

Media queries test how Prince is configured, rather than how the document is styled. The configuration of Prince often depends on the command-line arguments passed to it.

### Media Queries

A Media Query is a method of testing certain aspects of the user agent or device that the document is being displayed in.

The syntax consists of an optional media query modifier, an optional media type, and zero or more media features.

Several media queries can be combined into a comma separated media query list.

### Media Query Modifiers

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

### Media Types

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

### Media Features

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

CSS Functional Expressions
--------------------------

In this section you find the documentation for the supported CSS functional expressions. For additional details, make sure to also check the linked properties that use the functions.

\* functions marked with an asterisk are Prince extensions.

<table class="grid">
<thead>
<tr>
<th>Function</th>
<th>Definition</th>
<th>Used in property</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>attr( <i>attribute-name</i> <i>type-or-unit</i>? [,&#160;<i>fallback</i>]? )</code></td>
<td>Retrieves the value of an attribute of the selected element.</td>
<td></td>
</tr>
<tr>
<td><code>url( <i>url</i> )</code></td>
<td>Represents a URL, i.e. a pointer to a source.</td>
<td></td>
</tr>
<tr>
<td><code>calc( <i>expression</i> )</code></td>
<td>Calculates the expression's result, to be used as the value.</td>
<td></td>
</tr>
<tr>
<td><code>var( <i>custom-property-name</i> [,&#160;<i>fallback</i>]? )</code></td>
<td>Retrieves the value of a custom property set elsewhere.</td>
<td><a href="/doc/styling#custom-properties-css-variables">Custom properties (CSS variables)</a></td>
</tr>
<tr>
<td><code>rgb(R,G,B)</code></td>
<td>Defines red, green and blue values of a color.</td>
<td rowspan="7">all <code><i><a href="/doc/graphics#color">color</a></i></code> values</td>
</tr>
<tr>
<td><code>rgba(R,G,B,A)</code></td>
<td>Defines red, green and blue values and the alpha component of a color.</td>
</tr>
<tr>
<td><code>cmyk(C,M,Y,K[,A])</code> |&#160;<code>device-cmyk(C,M,Y,K[,A])</code></td>
<td>Defines cyan, magenta, yellow and black values of a color, as well as the optional
alpha component.</td>
</tr>
<tr>
<td><code>hsl(H,S,L)</code></td>
<td>Defines hue, saturation and lightness values of a color.</td>
</tr>
<tr>
<td><code>hsla(H,S,L,A)</code></td>
<td>Defines hue, saturation and lightness values and the alpha component of a color.</td>
</tr>
<tr class="ext">
<td><code>prince-color( <i>colorname</i>  [,&#160;<i>number</i> |&#160;<i>percentage</i>]? , overprint? )*</code></td>
<td>Using a spot color defined in the <code><a href="#at-prince-color">@prince-color</a></code>
at-rule. The number or percentage defines the tint. An optional <code>overprint</code>
keyword instructs Prince whether to overprint the color.
<pre>
<code class="hljs"><span class="hljs-attribute">color</span>: <span class="hljs-built_in">prince-color</span>(MyColor, 50%, overprint)</code>
</pre>
</td>
</tr>
<tr class="ext">
<td><code>prince-overprint( <i>colorname</i> | rgb() | cmyk() | device-cmyk() | hsl() | prince-color() [, [overprint-mode-nonzero | overprint-mode-zero]]? )*</code></td>
<td>Specifies a non-transparent color value to overprint.  If no overprint mode
is given, it defaults to <code>overprint-mode-nonzero</code>.</td>
</tr>
<tr>
<td><code>linear-gradient([ [ <i>angle</i> | to <i>side-or-corner</i> ] ,]? <i>color-stop</i> [,&#160;<i>color-stop</i>]+)</code></td>
<td>Creates an image consisting of a progressive transition between two or more
colors along a straight line.</td>
<td rowspan="4"><code><a href="/doc/css-props#prop-background-image">background-image</a></code></td>
</tr>
<tr>
<td><code>radial-gradient([ [ <i>shape</i> || <i>size</i> ] [ at <i>position</i> ]?, | at <i>position</i>, ]? <i>color-stop</i> [,&#160;<i>color-stop</i> ]+)</code></td>
<td>Creates an image consisting of a progressive transition between two or more
colors that radiate from an origin point</td>
</tr>
<tr>
<td><code>repeating-linear-gradient([ [ <i>angle</i> | to <i>side-or-corner</i> ] ,]? <i>color-stop</i> [,&#160;<i>color-stop</i>]+)</code></td>
<td>Creates an image consisting of repeating linear gradients.</td>
</tr>
<tr>
<td><code>repeating-radial-gradient([ [ <i>shape</i> || <i>size</i> ] [ at <i>position</i> ]?, | at <i>position</i>, ]? <i>color-stop</i> [,&#160;<i>color-stop</i> ]+)</code></td>
<td>Creates an image consisting of repeating radial gradients.</td>
</tr>
<tr>
<td><code>rect( <i>offset</i>, <i>offset</i>, <i>offset</i>, <i>offset</i> )</code></td>
<td>Defines a region in the form of a rectangle.</td>
<td><code><a href="/doc/css-props#prop-clip">clip</a></code></td>
</tr>
<tr>
<td><code>content()</code></td>
<td>Retrieves the text content of the selected element.  It can be used with several
different properties.</td>
<td rowspan="16"><code><a href="/doc/css-props#prop-content">content</a></code> - see also <a href="/doc/gen-content#generated-content-functions">Generated Content Functions</a></td>
</tr>
<tr>
<td><code>element( <i>name</i>, <i>page-policy</i>? )</code></td>
<td>Places an element (which has been removed from the normal flow with the
<code>running()</code> function) in a page region.  See
<a href="/doc/paged#taking-elements-from-the-document">Taking elements from the document</a>.</td>
</tr>
<tr>
<td><code>prince-expansion-text( <i>expansion</i>, <i>abbreviation</i> )</code></td>
<td>Resolves abbreviations in the targeted element or psedudo-element.</td>
</tr>
<tr>
<td><code>counter( <i>name</i>, <i>counter-style</i>?, <i>page-policy</i>? )</code></td>
<td>Generates a value for the innermost counter.</td>
</tr>
<tr>
<td><code>counters( <i>name</i>, "<i>separator</i>", <i>counter-style</i>?, <i>page-policy</i>? )</code></td>
<td>Concatenates counters on different levels.</td>
</tr>
<tr>
<td><code>target-counter( <i>url</i>, <i>counter</i>, <i>counter-style</i>? )</code></td>
<td>Retrieves the value of the innermost counter with a given name at the given URL.
See <a href="/doc/gen-content#using-target-counter">Using target-counter()</a>.</td>
</tr>
<tr>
<td><code>target-counters( <i>url</i>, <i>counter</i>, "<i>separator</i>", <i>counter-style</i>? )</code></td>
<td>Retrieves the value of all counters of a given name from the end of the given
URL.</td>
</tr>
<tr>
<td><code>target-content( <i>url</i> )</code></td>
<td>References the text content of the linked element.  See <a href="/doc/gen-content#using-target-content">Using target-content()</a>.</td>
</tr>
<tr>
<td><code>leader( ("<i>...</i>" | dotted | solid | space), <i>length</i>? )</code></td>
<td>Inserts the given string before the element - useful in tables of content. The optional second argument can be used to specify a minimum width.</td>
</tr>
<tr>
<td><code>string( <i>ident</i>, <i>page-policy</i>? )</code></td>
<td>Retrieves the value defined with the <code><a href="/doc/css-props#prop-string-set">string-set</a></code>
property.  See <a href="/doc/paged#copying-content-from-the-document">Copying content from the document</a>.</td>
</tr>
<tr>
<td><code>repeat( <i>string</i>+ )</code></td>
<td>Used in counters as a <code>counter-style</code>, it defines a sequentially
repeated pattern for numbering the items.
<pre>
<code class="hljs"><span class="hljs-selector-tag">h4</span><span class="hljs-selector-pseudo">::before</span> { <span class="hljs-attribute">content</span>: <span class="hljs-built_in">counter</span>(h4, <span class="hljs-built_in">repeat</span>("x", "y", "z")) }</code>
</pre>
</div>
<p class="comment">
This counter will yield the sequence "x, y, z, xx, yy, zz" etc.
</p>
</div>
</td>
</tr>
<tr>
<td><code>symbols( <i>string</i>+ )</code></td>
<td>Used in counters as a <code>counter-style</code>, it defines the symbols used
for numbering the items.
<pre>
<code class="hljs"><span class="hljs-selector-tag">h4</span><span class="hljs-selector-pseudo">::before</span> { <span class="hljs-attribute">content</span>: <span class="hljs-built_in">counter</span>(h4, <span class="hljs-built_in">symbols</span>("x", "y", "z")) }</code>
</pre>
<p class="comment">
This counter will yield the sequence "x, y, z, 4, 5, 6" etc.
</p>
</div>
</td>
</tr>
<tr class="ext">
<td><code>prince-base-url()*</code></td>
<td>Returns the base URL of the current document.</td>
</tr>
<tr class="ext">
<td><code>flow( <i>name</i>, <i>page-policy</i>? ) | prince-flow( <i>name</i>, <i>page-policy</i>? )*</code></td>
<td>Inserts an element that has previously been removed with the <code>static()</code>
function.  See <a href="/doc/paged#taking-elements-from-the-document">Taking elements from the document</a>.</td>
</tr>
<tr class="ext">
<td><code>prince-script( <i>ident</i> [, <i>content</i>+]? )*</code></td>
<td>Calls arbitrary JavaScript functions in CSS generated content.</td>
</tr>
<tr class="ext">
<td><code>prince-fallback( <i>uri</i> )*[, <i>content</i>+]?</code></td>
<td>Inserts content fetched from another resource (like the <code>url()</code> function),
but also has the possibility of specifying a fallback content, in case the loading of the
URL should fail.  If no comma and <i>content</i> items are provided, the fallback is as
if <code>content: normal</code> were specified.
<pre>
<code class="hljs"><span class="hljs-selector-tag">img</span> { <span class="hljs-attribute">content</span>: <span class="hljs-built_in">prince-fallback</span>(<span class="hljs-built_in">attr</span>(src, url)), <span class="hljs-built_in">attr</span>(data-altsrc, url) }</code>
</pre>
</td>
</tr>
<tr class="ext">
<td><code>prince-glyph-index( <i>int</i> )*</code></td>
<td>Allows to choose a glyph from a font by the index of that glyph in the font.
<p>Please note that this is very non-portable, as glyph indices are specific to individual
font versions. But it is a possible escape hatch for people who need a specific
glyph and don't have any other way of accessing it (by Unicode character or OpenType
substitution).</p>
<p>Usually, authors should prefer to use named OpenType features, using the
<code>prince-opentype()</code> value of the <code><a href="/doc/css-props#prop-font-variant">font-variant</a></code>
property, which is more likely to work when changing font.</p></td>
</tr>
<tr>
<td><code>grayscale( <i>number</i> | <i>percent</i> )</code></td>
<td>Converts the input image to grayscale.</td>
<td rowspan="10"><code><a href="/doc/css-props#prop-filter">filter</a></code></td>
</tr>
<tr>
<td><code>sepia( <i>number</i> | <i>percent</i> )</code></td>
<td>Converts the input image to sepia.</td>
</tr>
<tr>
<td><code>saturate( <i>number</i> | <i>percent</i> )</code></td>
<td>Saturates the input image.</td>
</tr>
<tr>
<td><code>hue-rotate( <i>angle</i> )</code></td>
<td>Applies a hue rotation on the input image.</td>
</tr>
<tr>
<td><code>invert( <i>number</i> | <i>percent</i> )</code></td>
<td>Inverts the samples in the input image.</td>
</tr>
<tr>
<td><code>opacity( <i>number</i> | <i>percent</i> )</code></td>
<td>Applies transparency to the input image.</td>
</tr>
<tr>
<td><code>brightness( <i>number</i> | <i>percent</i> )</code></td>
<td>Applies a linear multiplier to the input image, making it appear more or less
bright.</td>
</tr>
<tr>
<td><code>contrast( <i>number</i> | <i>percent</i> )</code></td>
<td>Adjusts the contrast of the input image.</td>
</tr>
<tr>
<td><code>blur( <i>length</i> )</code></td>
<td>Applies a Gaussian blur to the input image.</td>
</tr>
<tr>
<td><code>drop-shadow( <i>length</i>{1..3}, <i>color</i>? )</code></td>
<td>Applies a drop shadow effect to the input image.</td>
</tr>

<tr class="ext">
<td><code>prince-opentype( [ <i>feature</i> ]+ )*</code></td>
<td>Specifies a comma-separated list of OpenType features to be enabled.  For details
please see the <code><a href="/doc/css-props#prop-font-variant">font-variant</a></code> property and
<a href="/doc/styling#opentype-features-in-prince">OpenType Features in Prince</a>.</td>
<td><code><a href="/doc/css-props#prop-font-variant">font-variant</a></code></td>
</tr>
<tr>
<td><code>running( <i>name</i> )</code></td>
<td>Removes an element from the normal document flow, to make it available for use
in a page region with the <code>element()</code> function.  See
<a href="/doc/paged#taking-elements-from-the-document">Taking elements from the document</a>.</td>
<td><code><a href="/doc/css-props#prop-position">position</a></code></td>
</tr>
<tr class="ext">
<td><code>recompress-jpeg( <i>quality%</i> )*</code></td>
<td>Recompresses JPEG images by the indicated percentage to save space.</td>
<td rowspan="2"><code><a href="/doc/css-props#prop-prince-image-magic">prince-image-magic</a></code></td>
</tr>
<tr class="ext">
<td><code>convert-to-jpeg( <i>quality%</i> )*</code></td>
<td>Converts non-JPEG images to JPEG.</td>
</tr>
<tr class="ext">
<td><code>static( <i>name</i>, [ start | current ]? )*</code></td>
<td>Removes an element from the normal document flow, to make it available for use
with the <code>flow()</code> function.  See <a href="/doc/paged#taking-elements-from-the-document">Taking elements from the document</a>.</td>
<td><code><a href="/doc/css-props#prop-prince-flow">prince-flow</a></code></td>
</tr>
<tr class="ext">
<td><code>command( <i>ident</i> )*</code></td>
<td>Specifies any arbitrary command to be passed to the PDF viewer when the PDF file
is opened.  The user can supply values that Prince doesn't know about, but the viewer
does.</td>
<td><code><a href="/doc/css-props#prop-prince-pdf-open-action">prince-pdf-open-action</a></code></td>
</tr>
<tr>
<td><code>format()</code></td>
<td>Contains a comma-separated list of format strings that denote well-known font
formats.
<pre>
<code class="hljs"><span class="hljs-keyword">@font-face</span> {
  <span class="hljs-attribute">font-family</span>: bodytext;
  <span class="hljs-attribute">src</span>: <span class="hljs-built_in">url</span>(sans-serif-font.ttf) <span class="hljs-built_in">format</span>("opentype");
}</code>
</pre>
</td>
<td rowspan="3"><code><a href="/doc/css-props#prop-src">src</a></code></td>
</tr>
<tr>
<td><code>local()</code></td>
<td>Searches for locally installed system fonts.</td>
</tr>
<tr class="ext">
<td><code>prince-lookup()*</code></td>
<td>Searches for locally installed system fonts, but will also find fonts defined
by other <code>@font-face</code> rules.  See <a href="/doc/styling#defining-a-font-family">Defining a font family</a>.</td>
</tr>
<tr>
<td><code>rotate( <i>angle</i> )</code></td>
<td>Rotates an element around a fixed point on the 2D plane.</td>
<td rowspan="12"><code><a href="/doc/css-props#prop-transform">transform</a></code></td>
</tr>
<tr>
<td><code>matrix( <i>number</i>[, <i>number</i>]{5,5} )</code></td>
<td>Describes a homogeneous 2D transformation matrix.</td>
</tr>
<tr>
<td><code>translate( <i>offset</i>[, <i>offset</i>]? )</code></td>
<td>Translates an element on the 2D plane.</td>
</tr>
<tr>
<td><code>translatex( <i>offset</i> )</code></td>
<td>Translates an element horizontally.</td>
</tr>
<tr>
<td><code>translatey( <i>offset</i> )</code></td>
<td>Translates an element vertically.</td>
</tr>
<tr>
<td><code>translate3d( <i>offset</i>, <i>offset</i>, <i>offset</i> )</code></td>
<td>Translates an element in 3D space.</td>
</tr>
<tr>
<td><code>scale( <i>number</i>[, <i>number</i>]? )</code></td>
<td>Scales an element up or down on the 2D plane.</td>
</tr>
<tr>
<td><code>scalex( <i>number</i> )</code></td>
<td>Scales an element up or down horizontally.</td>
</tr>
<tr>
<td><code>scaley( <i>number</i> )</code></td>
<td>Scales an element up or down vertically.</td>
</tr>
<tr>
<td><code>skew( <i>angle</i>[, <i>angle</i>]? )</code></td>
<td>Skews an element on the 2D plane.</td>
</tr>
<tr>
<td><code>skewx( <i>angle</i> )</code></td>
<td>Skews an element in the horizontal direction.</td>
</tr>
<tr>
<td><code>skewy( <i>angle</i> )</code></td>
<td>Skews an element in the vertical direction.</td>
</tr>
<tr>
<td><code>supports([ &lt;<i>supports-condition</i>&gt; | &lt;<i>declaration</i>&gt; ])</code></td>
<td>Interpreted as a <code><a href="#at-supports">@supports</a></code>
condition.</td>
<td><code><a href="#at-import">@import</a></code></td>
</tr>
</tbody>
</table>


CSS At-rules
------------

In this section you find the documentation for the supported CSS at-rules.

Prince accepts `@-prince` as a vendor prefix for Prince-specific at-rules to comply with validators - eg. `@-prince-pdf` and `@-prince-color`.

### Initial At-Rules

The following at-rules have to appear at the beginning of the CSS document, and exactly in this order:

<table class="grid">
<tr>
<td class="example" id="at-charset"><code>@charset</code></td>
<td>Defines the fallback encoding to use for the stylesheet. Prince supports stylesheets
in <code>UTF-8</code>, <code>UTF-16</code>, <code>Latin1</code> and <code>Windows-1252</code>.</td>
</tr>
<tr>
<td class="example" id="at-import"><code>@import [ &lt;url(<i>URL</i>)&gt; | &lt;<i>string</i>&gt; ] supports([ &lt;<i>supports-condition</i>&gt; | &lt;<i>declaration</i>&gt; ])?
&lt;<i>media-query-list</i>&gt;?</code></td>
<td>Allows authors to import style rules from other style sheets. The <code>url(<i>URL</i>)</code>
or <code>&lt;<i>string</i>&gt;</code> give the URL of the style sheet to be imported, while
the optional <code>supports(...)</code> expression and <code>&lt;<i>media-query-list</i>&gt;</code>
state the import conditions.</td>
</tr>
<tr>
<td class="example" id="at-namespace"><code>@namespace [<i>Prefix</i>]? [ &lt;url(<i>URL</i>)&gt; | &lt;<i>string</i>&gt; ]</code></td>
<td>Defines a namespace prefix or default namespace to be used in the stylesheet.</td>
</tr>
</table>

### Nested At-Rules

After the initial at-rules, the following at-rules can appear also in nested form in the CSS document:

<table class="grid">
<tr>
<th colspan="2" id="at-page"><code>@page [<i>Name</i>] <i>Selectors</i> { <i>Page-declarations</i> }</code></th>
</tr>
<tr>
<td colspan="2">Modifies margins, orphans, widows and page breaks of a document when
printing it. The pages are identified either by a name, or by a page pseudo-class and
page declarations can either be style declarations or page region at-rules.
The initial values for <code>@page</code> styles are documented in the
<a href="/doc/paged">Paged Media</a> chapter.</td>
</tr>
<tr>
<td><code>:left</code></td>
<td rowspan="7">Page pseudo-classes</td>
</tr>
<tr>
<td><code>:right</code></td>
</tr>
<tr>
<td><code>:recto</code></td>
</tr>
<tr>
<td><code>:verso</code></td>
</tr>
<tr>
<td><code>:first</code></td>
</tr>
<tr>
<td><code>:blank</code></td>
</tr>
<tr>
<td><code>:nth(<i>N</i>)</code></td>
</tr>
<tr>
<td><code>@left</code> | <code>@left-top</code> | <code>@left-middle</code> |
<code>@left-bottom</code></td>
<td rowspan="6"><a href="/doc/paged#page-regions">Page region</a> at-rules</td>
</tr>
<tr>
<td><code>@right</code> | <code>@right-top</code> | <code>@right-middle</code> |
<code>@right-bottom</code></td>
</tr>
<tr>
<td><code>@top</code> | <code>@top-left-corner</code> | <code>@top-left</code> |
<code>@top-center</code> | <code>@top-right</code> | <code>@top-right-corner</code></td>
</tr>
<tr>
<td><code>@bottom</code> | <code>@bottom-left-corner</code> | <code>@bottom-left</code> |
<code>@bottom-center</code> | <code>@bottom-right</code> | <code>@bottom-right-corner</code></td>
</tr>
<tr>
<td><code>@page-float-top</code> | <code>@page-float-bottom</code> | <code>@prince-overlay</code></td>
</tr>
<tr>
<td><code>@footnote</code></td>
</tr>
<tr>
<td colspan="2">The <code>@page</code> rule takes the following CSS properties:
<code><a href="/doc/css-props#prop-background-attachment">background-attachment</a></code> |
<code><a href="/doc/css-props#prop-bleed">bleed</a></code> |
<code><a href="/doc/css-props#prop-marks">marks</a></code> |
<code><a href="/doc/css-props#prop-prince-mark-length">prince-mark-length</a></code> |
<code><a href="/doc/css-props#prop-prince-mark-offset">prince-mark-offset</a></code> |
<code><a href="/doc/css-props#prop-prince-mark-width">prince-mark-width</a></code> |
<code><a href="/doc/css-props#prop-prince-pdf-page-colorspace">prince-pdf-page-colorspace</a></code> |
<code><a href="/doc/css-props#prop-prince-pdf-page-label">prince-pdf-page-label</a></code> |
<code><a href="/doc/css-props#prop-prince-rotate-body">prince-rotate-body</a></code> |
<code><a href="/doc/css-props#prop-prince-shrink-to-fit">prince-shrink-to-fit</a></code> |
<code><a href="/doc/css-props#prop-prince-trim">prince-trim</a></code> |
<code><a href="/doc/css-props#prop-size">size</a></code>
</td>
</tr>
<tr>
<td colspan="2">Additionally, <a href="/doc/prince-for-books">Prince for Books</a> takes the following CSS property:
<code><a href="/doc/css-props#prop-prince-page-fill">prince-page-fill</a></code>
</td>
</tr>
</table>

<table class="grid">
<tr>
<th id="at-media"><code>@media <i>Media-query-list</i> { <i>Rules</i> }</code></th>
</tr>
<tr>
<td>The rules will apply if the device meets the criteria of the condition defined
in the media query. See <a href="#css-media-queries">CSS Media Queries</a> for details.</td>
</tr>
</table>

<table class="grid">
<tr>
<th id="at-supports"><code>@supports <i>Condition</i> { <i>Rules</i> }</code></th>
</tr>
<tr>
<td>Checks whether particular <code>property:value</code> combinations are supported.
Unlike media queries, this uses the classical two-valued logic.</td>
</tr>
</table>

<table class="grid">
<tr>
<th colspan="2" id="at-font-face"><code>@font-face { <i>Font-declarations</i> }</code></th>
</tr>
<tr>
<td colspan="2">Links a font family to an actual font.</td>
</tr>
<tr>
<td colspan="2">The <code>@font-face</code> rule takes the following CSS descriptors:</td>
</tr>
<tr>
<td><code><a href="/doc/css-props#prop-font-family">font-family</a>: &lt;<i>family-name</i>&gt;</code></td>
<td>This descriptor defines the font family name that will be used in all CSS font
family name matching. It is required for the <code>@font-face</code> rule to be valid.</td>
</tr>
<tr>
<td><code><a href="/doc/css-props#prop-src">src</a>: [ url(&lt;<i>URL</i>&gt;) format(&lt;<i>string</i>&gt;#)? | local(&lt;<i>family-name</i>&gt;) |
prince-lookup(&lt;<i>family-name</i>&gt;) ]#</code></td>
<td>This descriptor specifies the resource containing font data. It is required for
the <code>@font-face</code> rule to be valid. The <code>local()</code> function searches
for locally installed system fonts, but <code>prince-lookup()</code> will also find
fonts defined by other <code>@font-face</code> rules.</td>
</tr>
<tr>
<td><code><a href="/doc/css-props#prop-unicode-range">unicode-range</a>: &lt;<i>urange</i>&gt;#</code></td>
<td>This descriptor defines the set of Unicode codepoints that may be supported by
the font face. The descriptor value is a comma-delimited list of Unicode range values.</td>
</tr>
<tr>
<td colspan="2">Additionally, <code>@font-face</code> takes the CSS descriptors
<code><a href="/doc/css-props#prop-font-variant">font-variant</a></code>, <code><a href="/doc/css-props#prop-font-stretch">font-stretch</a></code>,
<code><a href="/doc/css-props#prop-font-weight">font-weight</a></code> and <code><a href="/doc/css-props#prop-font-style">font-style</a></code>,
which take the same values as the CSS properties with the same name.</td>
</tr>
</table>

<table class="grid">
<tr>
<th colspan="2" id="at-prince-color"><code>@prince-color <i>Name</i> { alternate-color: ... }</code></th>
</tr>
<tr>
<td colspan="2">Defines a new color name.</td>
</tr>
<tr>
<td colspan="2">The <code>@prince-color</code> rule takes the mandatory
<code><a href="/doc/css-props#prop-alternate-color">alternate-color</a></code> descriptor to specify an alternate
color to use if the named spot color is not available.  The named color is used in
a stylesheet with the <code>prince-color()</code> function.  (See <a href="/doc/graphics#spot-colors">Spot colors</a>).</td>
</tr>
</table>

<table class="grid">
<tr>
<th colspan="2" id="at-prince-pdf"><code>@prince-pdf <i>Name</i> { <i>Declarations</i> }</code></th>
</tr>
<tr>
<td colspan="2">Defines properties relating to PDFs.</td>
</tr>
<tr>
<td colspan="2">The <code>@prince-pdf</code> rule takes the following CSS properties:
<code><a href="/doc/css-props#prop-prince-fallback-cmyk-profile">prince-fallback-cmyk-profile</a></code> |
<code><a href="/doc/css-props#prop-prince-filter-resolution">prince-filter-resolution</a></code> |
<code><a href="/doc/css-props#prop-prince-pdf-color-conversion">prince-pdf-color-conversion</a></code> |
<code><a href="/doc/css-props#prop-prince-pdf-color-options">prince-pdf-color-options</a></code> |
<code><a href="/doc/css-props#prop-prince-pdf-display-doc-title">prince-pdf-display-doc-title</a></code> |
<code><a href="/doc/css-props#prop-prince-pdf-duplex">prince-pdf-duplex</a></code> |
<code><a href="/doc/css-props#prop-prince-pdf-event-scripts">prince-pdf-event-scripts</a></code> |
<code><a href="/doc/css-props#prop-prince-pdf-link-type">prince-pdf-link-type</a></code> |
<code><a href="/doc/css-props#prop-prince-pdf-open-action">prince-pdf-open-action</a></code> |
<code><a href="/doc/css-props#prop-prince-pdf-output-intent">prince-pdf-output-intent</a></code> |
<code><a href="/doc/css-props#prop-prince-pdf-page-layout">prince-pdf-page-layout</a></code> |
<code><a href="/doc/css-props#prop-prince-pdf-page-mode">prince-pdf-page-mode</a></code> |
<code><a href="/doc/css-props#prop-prince-pdf-paper-tray">prince-pdf-paper-tray</a></code> |
<code><a href="/doc/css-props#prop-prince-pdf-print-scaling">prince-pdf-print-scaling</a></code> |
<code><a href="/doc/css-props#prop-prince-pdf-profile">prince-pdf-profile</a></code> |
<code><a href="/doc/css-props#prop-prince-pdf-script">prince-pdf-script</a></code> |
<code><a href="/doc/css-props#prop-prince-pdf-xmp">prince-pdf-xmp</a></code></td>
</tr>
</table>

<script>
function shiftWindow() { if (location.hash.indexOf('at-') == 1) if (window.innerWidth < "1024") {scrollBy(0, -158)} else {scrollBy(0, -60)};};
window.addEventListener("load",  function() { shiftWindow(); });
window.addEventListener("hashchange", function() { shiftWindow(); });
</script>
