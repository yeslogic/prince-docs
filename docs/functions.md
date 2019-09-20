---
title: CSS Functional Expressions
---

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
<td><code>attr( <i>attribute-name</i> <i>type-or-unit</i>? [, <i>fallback</i>]? )</code></td>
<td>Retrieves the value of an attribute of the selected element.</td>
<td><code></code></td>
</tr>
<tr>
<td><code>url( <i>url</i> )</code></td>
<td>Represents a URL, i.e. a pointer to a source.</td>
<td><code></code></td>
</tr>
<tr>
<td><code>var( <i>custom-property-name</i> [, <i>fallback</i>]? )</code></td>
<td>Retrieves the value of a custom property set elsewhere.</td>
<td><a href="css-vars.html#css-vars">Custom properties (CSS variables)</a></td>
</tr>
<tr>
<td><code>rgb(R,G,B)</code></td>
<td>Defines red, green and blue values of a color.</td>
<td rowspan="7">all <code><i><a href="color.html#color">color</a></i></code> values</td>
</tr>
<tr>
<td><code>rgba(R,G,B,A)</code></td>
<td>Defines red, green and blue values and the alpha component of a color.</td>
</tr>
<tr>
<td><code>cmyk(C,M,Y,K[,A])</code> | <code>device-cmyk(C,M,Y,K[,A])</code></td>
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
<td><code>prince-color( <i>colorname</i>  [, <i>number</i> | <i>percentage</i>]? , overprint? )*</code></td>
<td>Using a spot color defined in the <code><a href="doc-refs.html#at-prince-color">@prince-color</a></code>
at-rule. The number or percentage defines the tint. An optional <code>overprint</code>
keyword instructs Prince whether to overprint the color.
<div class="example">
<div class="programlisting">
<code language="CSS"><pre>color: prince-color(MyColor, 50%, overprint)</pre></code>
</div>
</div>
</td>
</tr>
<tr class="ext">
<td><code>prince-overprint( <i>colorname</i> | rgb() | cmyk() | device-cmyk() | hsl() | prince-color() [, [overprint-mode-nonzero | overprint-mode-zero]]? )*</code></td>
<td>Specifies a non-transparent color value to overprint.  If no overprint mode
is given, it defaults to <code>overprint-mode-nonzero</code>.</td>
</tr>
<tr>
<td><code>linear-gradient([ [ &lt;angle&gt; | to &lt;side-or-corner&gt; ] ,]? &lt;color-stop&gt;[, &lt;color-stop&gt;]+)</code></td>
<td>Creates an image consisting of a progressive transition between two or more
colors along a straight line.</td>
<td rowspan="4"><code><a href="doc-refs.html#prop-background-image">background-image</a></code></td>
</tr>
<tr>
<td><code>radial-gradient([ [ &lt;shape&gt; || &lt;size&gt; ] [ at &lt;position&gt; ]?, | at &lt;position&gt;, ]? &lt;color-stop&gt; [, &lt;color-stop&gt; ]+)</code></td>
<td>Creates an image consisting of a progressive transition between two or more
colors that radiate from an origin point</td>
</tr>
<tr>
<td><code>repeating-linear-gradient([ [ &lt;angle&gt; | to &lt;side-or-corner&gt; ] ,]? &lt;color-stop&gt; [, &lt;color-stop&gt;]+)</code></td>
<td>Creates an image consisting of repeating linear gradients.</td>
</tr>
<tr>
<td><code>repeating-radial-gradient([ [ &lt;shape&gt; || &lt;size&gt; ] [ at &lt;position&gt; ]?, | at &lt;position&gt;, ]? &lt;color-stop&gt; [, &lt;color-stop&gt; ]+)</code></td>
<td>Creates an image consisting of repeating radial gradients.</td>
</tr>
<tr>
<td><code>rect( <i>offset</i>, <i>offset</i>, <i>offset</i>, <i>offset</i> )</code></td>
<td>Defines a region in the form of a rectangle.</td>
<td><code><a href="doc-refs.html#prop-clip">clip</a></code></td>
</tr>
<tr>
<td><code>content()</code></td>
<td>Retrieves the text content of the selected element.  It can be used with several
different properties.</td>
<td rowspan="16"><code><a href="doc-refs.html#prop-content">content</a></code> - see also <a href="gen-content.html#gen-content-functions">Generated Content Functions</a></td>
</tr>
<tr>
<td><code>element( <i>name</i>, <i>page-policy</i>? )</code></td>
<td>Places an element (which has been removed from the normal flow with the
<code>running()</code> function) in a page region.  See
<a href="paged.html#content-taking-elements">Taking elements from the document</a>.</td>
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
See <a href="gen-content.html#counter-target">Using target-counter()</a>.</td>
</tr>
<tr>
<td><code>target-counters( <i>url</i>, <i>counter</i>, "<i>separator</i>", <i>counter-style</i>? )</code></td>
<td>Retrieves the value of all counters of a given name from the end of the given
URL.</td>
</tr>
<tr>
<td><code>target-content( <i>url</i> )</code></td>
<td>References the text content of the linked element.  See <a href="gen-content.html#target-content">Using target-content()</a>.</td>
</tr>
<tr>
<td><code>leader( "<i>...</i>" | dotted | solid | space )</code></td>
<td>Inserts the given string before the element - useful in tables of content.</td>
</tr>
<tr>
<td><code>string( <i>ident</i>, <i>page-policy</i>? )</code></td>
<td>Retrieves the value defined with the <code><a href="doc-refs.html#prop-string-set">string-set</a></code>
property.  See <a href="paged.html#content-copying-text">Copying content from the document</a>.</td>
</tr>
<tr>
<td><code>repeat( <i>string</i>+ )</code></td>
<td>Used in counters as a <code>counter-style</code>, it defines a sequentially
repeated pattern for numbering the items.
<div class="example">
<div class="programlisting">
<code language="CSS"><pre>h4::before { counter(h4, repeat("x", "y", "z")) }</pre></code>
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
<div class="example">
<div class="programlisting">
<code language="CSS"><pre>h4::before { counter(h4, symbols("x", "y", "z")) }</pre></code>
</div>
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
function.  See <a href="paged.html#content-taking-elements">Taking elements from the document</a>.</td>
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
<div class="example">
<div class="programlisting">
<code language="CSS"><pre>img { content: prince-fallback(attr(src, url)), attr(data-altsrc, url) }</pre></code>
</div>
</div>
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
<code>prince-opentype()</code> value of the <code><a href="doc-refs.html#prop-font-variant">font-variant</a></code>
property, which is more likely to work when changing font.</p></td>
</tr>
<tr>
<td><code>grayscale( <i>number</i> | <i>percent</i> )</code></td>
<td>Converts the input image to grayscale.</td>
<td rowspan="10"><code><a href="doc-refs.html#prop-filter">filter</a></code></td>
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
please see the <code><a href="doc-refs.html#prop-font-variant">font-variant</a></code> property and
<a href="fonts.html#opentype-features">OpenType Features in Prince</a>.</td>
<td><code><a href="doc-refs.html#prop-font-variant">font-variant</a></code></td>
</tr>
<tr>
<td><code>running( <i>name</i> )</code></td>
<td>Removes an element from the normal document flow, to make it available for use
in a page region with the <code>element()</code> function.  See
<a href="paged.html#content-taking-elements">Taking elements from the document</a>.</td>
<td><code><a href="doc-refs.html#prop-position">position</a></code></td>
</tr>
<tr class="ext">
<td><code>recompress-jpeg( <i>quality%</i> )*</code></td>
<td>Recompresses JPEG images by the indicated percentage to save space.</td>
<td rowspan="2"><code><a href="doc-refs.html#prop-prince-image-magic">prince-image-magic</a></code></td>
</tr>
<tr class="ext">
<td><code>convert-to-jpeg( <i>quality%</i> )*</code></td>
<td>Converts non-JPEG images to JPEG.</td>
</tr>
<tr class="ext">
<td><code>static( <i>name</i>, [ start | current ]? )*</code></td>
<td>Removes an element from the normal document flow, to make it available for use
with the <code>flow()</code> function.  See <a href="paged.html#content-taking-elements">Taking elements from the document</a>.</td>
<td><code><a href="doc-refs.html#prop-prince-flow">prince-flow</a></code></td>
</tr>
<tr class="ext">
<td><code>command( <i>ident</i> )*</code></td>
<td>Specifies any arbitrary command to be passed to the PDF viewer when the PDF file
is opened.  The user can supply values that Prince doesn't know about, but the viewer
does.</td>
<td><code><a href="doc-refs.html#prop-prince-pdf-open-action">prince-pdf-open-action</a></code></td>
</tr>
<tr>
<td><code>format()</code></td>
<td>Contains a comma-separated list of format strings that denote well-known font
formats.
<div class="example">
<div class="programlisting">
<code language="CSS"><pre>@font-face {
  font-family: bodytext;
  src: url(sans-serif-font.ttf) format("opentype");
}</pre></code>
</div>
</div>
</td>
<td rowspan="3"><code><a href="doc-refs.html#prop-src">src</a></code></td>
</tr>
<tr>
<td><code>local()</code></td>
<td>Searches for locally installed system fonts.</td>
</tr>
<tr class="ext">
<td><code>prince-lookup()*</code></td>
<td>Searches for locally installed system fonts, but will also find fonts defined
by other <code>@font-face</code> rules.  See <a href="fonts.html#font-family">Defining a font family</a>.</td>
</tr>
<tr>
<td><code>rotate( <i>angle</i> )</code></td>
<td>Rotates an element around a fixed point on the 2D plane.</td>
<td rowspan="12"><code><a href="doc-refs.html#prop-transform">transform</a></code></td>
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
<td>Interpreted as a <code><a href="doc-refs.html#at-supports">@supports</a></code>
condition.</td>
<td><code><a href="doc-refs.html#at-import">@import</a></code></td>
</tr>
</tbody>
</table>

