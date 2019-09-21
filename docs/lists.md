---
title: Lists
---

### Lists

A list item has two parts: `marker` and `content`.

The `content` part is rendered inside the list item's border box, and is styled the same way as a normal block, such as `div` or `p` element.

The `marker` positioning is determined by the `list-style-position` property and is styled using the `::marker` pseudo-element.

#### List markers

The `content` property can be applied to the `::marker` pseudo-element to specify a custom marker for list items.

CSS


    li::marker { content: "No. " counter(list-item) }

#### List marker position

List markers are rendered outside the list item in the left margin area by default. If the CSS property `list-style-position` has value `inside`, the marker is rendered as the first inline box inside the list item.

<div class="example">
<p class="label">CSS</p>
<div class="programlisting">
<code language="css"><pre>ol {
    padding-left: 1cm;
    border: solid 2px darkgreen
}
li { border: solid 1px black }
li.inside { list-style-position: inside }
li.outside { list-style-position: outside }</pre></code>
</div>

<p class="label">Output</p>
<div class="output">
<ol style="border: solid 2px darkgreen">
<li style="border: solid 1px black; list-style-position: inside">
    This list item sets the <code><a href="doc-refs.md#prop-list-style-position">list-style-position</a></code> to <code>inside</code>,
    so the list marker is rendered inside the principal box of <code>li</code>.
</li>
<li style="border: solid 1px black; list-style-position: outside">
    This list item sets the <code><a href="doc-refs.md#prop-list-style-position">list-style-position</a></code> to <code>outside</code>,
    so the list marker is rendered outside the principal box of <code>li</code>.
</li>
</ol>
</div>
<p class="comment">
When the marker position is <code>outside</code>,
it is rendered outside the <code>li</code> principal box.
If you want the marker to appear inside the principal box of
<code>ol</code>,
make sure to give <code>ol</code> enough left padding
or <code>li</code> enough left margin.
</p>
</div>

#### List marker type

Different list marker types can be chosen by setting the CSS property `list-style-type` to different values: `disc` | `hyphen` | `decimal` | `lower-alpha` | ...

The property `list-style-type` applies to list items and determines the type of marker that they receive. The following table shows examples of some list style types (a table with examples of all supported options for ordered lists, see [Counter styles](gen-content.md#counter-styles)).

|                              |                                 |
|------------------------------|---------------------------------|
| `decimal`                    | 1, 2, 3, ...                    |
| `decimal-leading-zero`       | 01, 02, 03, ... 09, 10, 11, ... |
| `lower-alpha`, `lower-latin` | a, b, c, ... z, aa, ab, ...     |
| `upper-alpha`, `upper-latin` | A, B, C, ... Z, AA, AB, ...     |
| `lower-roman`                | i, ii, iii, iv, v, vi, ...      |
| `upper-roman`                | I, II, III, IV, V, VI, ...      |
| `asterisks`                  | \*, \*\*, \*\*\*, ...           |

<div class="example">
<p class="label">CSS</p>
<div class="programlisting">
<code language="css"><pre>li.upper-alpha { list-style-type: upper-alpha }
li.lower-roman { list-style-type: lower-roman }</pre></code>
</div>

<p class="label">Output</p>
<div class="output">
<ol>
<li style="list-style-type: upper-alpha">
    The marker type of this list item is upper-alpha.
</li>
<li style="list-style-type: lower-roman">
    The marker type of this list item is lower-roman.
</li>
</ol>
</div>

</div>

#### List marker style

The list marker can also be replaced by an image by using the `list-style-image` property.

The shorthand property `list-style` can be used to set the three properties `list-style-image`, `list-style-position` and `list-style-type` together.

Alternatively, the `::marker` pseudo-element can be used to style the list item marker, giving full control over its content, width, alignment and so on.

<div class="example">
<p class="label">CSS</p>
<div class="programlisting">
<code language="css"><pre>li::marker { width: 2.4cm }
li.left::marker { text-align: left }
li.center::marker { text-align: center }
li.right::marker { text-align: right }
li.text_marker::marker {
    content: "Number " counter(list-item)
}
li.image_marker::marker {
    content: url("../../image/prince.jpg")
}</pre></code>
</div>
<p class="label">Output</p>
<img src="images/marker.png"
     alt="Marker example"/>
</div>

