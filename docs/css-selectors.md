---
title: CSS Selectors
---

Below are the CSS selectors supported by Prince. For their precise definition please refer to the CSS specification - Prince largely implements [Selectors Level 4](https://www.w3.org/TR/selectors4/).

Terminology and Definitions
---------------------------

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

Logical Combinations
--------------------

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

Elemental Selectors
-------------------

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

Attribute Selectors
-------------------

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


Linguistic Pseudo-classes
-------------------------

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


Input Pseudo-classes
--------------------

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


Location Pseudo-classes
-----------------------

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


Tree-Structural pseudo-classes
------------------------------

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


Combinators
-----------

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


Tree-Abiding Pseudo-element Selectors
-------------------------------------

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


Typographic Pseudo-element Selectors
------------------------------------

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


Footnote Pseudo-element Selectors
---------------------------------

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


Page Selectors
--------------

<table class="grid">
<tr>
<th colspan="2">The <code>nth(<i>N</i>)</code> selector</th>
</tr>
<tr>
<td><code>nth(<i>N</i>)</code></td>
<td>Represents the <i>N</i>th page of the document: <code>@page:nth(42) {...}</code></td>
</tr>
</table>
