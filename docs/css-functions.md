---
title: CSS Functional Expressions
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">

<style>
.navigationSlider .slidingNav ul li:nth-child(3), .navigationSlider .slidingNav ul li:nth-child(3) > a:hover, .navigationSlider .slidingNav ul li.siteNavGroupActive > a {
    background-color: #fff;
}
.nav-site li:nth-child(3) a {
    color: #333 !important;
}
.nav-site li:nth-child(3) a:hover {
    color: #22b573 !important;;
}
</style>
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
<td><code>attr( &lt;<i>attr-name</i>&gt; &lt;<i>attr-type</i>&gt;? [,&#160;&lt;<i>fallback</i>&gt;]? )</code></td>
<td>Retrieves the value of an attribute of the selected element. Please note that for the optional second argument also the Prince-specific attribute type <code>idref</code> is supported, which treats the attribute value of the first argument as if it were an IDREF - essentially converting it to a URL by prepending a hash mark.</td>
<td></td>
</tr>
<tr>
<td><code>url( &lt;<i>url</i>&gt; )</code></td>
<td>Represents a URL, i.e. a pointer to a source.</td>
<td></td>
</tr>
<tr>
<td><code>calc( &lt;<i>expression</i>&gt; )</code></td>
<td>Calculates the expression's result, to be used as the value.</td>
<td></td>
</tr>
<tr>
<td><code>var( &lt;<i>custom-property-name</i>&gt; [,&#160;&lt;<i>fallback</i>&gt;]? )</code></td>
<td>Retrieves the value of a custom property set elsewhere.</td>
<td><a href="/doc/styling#custom-properties-css-variables">Custom properties (CSS variables)</a></td>
</tr>
<tr>
<td><code>rgb( [&lt;<i>percentage</i>&gt;]{3} [/&#160;[&lt;<i>alpha-value</i>&gt;]? ) |
rgb( [&lt;<i>number</i>&gt;]{3} [/&#160;[&lt;<i>alpha-value</i>&gt;]? )</code></td>
<td>Defines red, green and blue values of a color. The final argument specifies the alpha value of the color - if omitted, it defaults to 100%. For legacy reasons, <code>rgb()</code> also supports the legacy color syntax, in which the values are separated by commas. Also a legacy <code>rgba()</code> function exists, with an identical grammar and behavior to <code>rgb()</code>.</td>
<td rowspan="6">all <code><i><a href="/doc/graphics#color">color</a></i></code> values</td>
</tr>
<tr>
<td><code>device-cmyk( [&lt;<i>number</i>&gt; | &lt;<i>percentage</i>&gt;]{4} [/&#160;&lt;<i>alpha-value</i>&gt;]? )</code></td>
<td>The arguments of the <code>device-cmyk()</code> function specify the cyan, magenta, yellow, and black components, in this order, as a number between 0 and 1, or a percentage between 0% and 100%. The fifth argument specifies the alpha channel of the color - if omitted, it defaults to 100%. For legacy reasons, <code>device-cmyk()</code> also supports the legacy color syntax, in which the values are separated by commas. Also a legacy <code>cmyk()</code> function exists, with an identical grammar and behavior to <code>device-cmyk()</code>.</td>
</tr>
<tr>
<td><code>hsl( [&lt;<i>hue</i>&gt;] [&lt;<i>percentage</i>&gt;] [&lt;<i>percentage</i>&gt;] [/&#160;[&lt;<i>alpha-value</i>&gt;]? )</code></td>
<td>Defines hue, saturation and lightness values of a color. The final argument specifies the alpha channel of the color - if omitted, it defaults to 100%. For legacy reasons, <code>hsl()</code> also supports the legacy color syntax, in which the values are separated by commas. Also a legacy <code>hsla()</code> function exists, with an identical grammar and behavior to <code>hsl()</code>.</td>
</tr>
<tr>
<td><code>hwb( [&lt;<i>hue</i>&gt;] [&lt;<i>percentage</i>&gt;] [&lt;<i>percentage</i>&gt;] [/&#160;[&lt;<i>alpha-value</i>&gt;]? )</code></td>
<td>Defines hue, whiteness and blackness values of a color. The final argument specifies the alpha channel of the color - if omitted, it defaults to 100%. This function is new, thus <code>hwb()</code> does <em>not</em> support a legacy color syntax that separates all of its arguments with commas - using commas inside <code>hwb()</code> is an error.</td>
</tr>
<tr class="ext">
<td><code>prince-color( &lt;<i>colorname</i>&gt;  [,&#160;&lt;<i>number</i>&gt; |&#160;&lt;<i>percentage</i>&gt;]? , overprint? )*</code></td>
<td>Using a spot color defined in the <code><a href="/doc/css-at-rules/#at-prince-color">@prince-color</a></code>
at-rule. The number or percentage defines the tint. An optional <code>overprint</code>
keyword instructs Prince whether to overprint the color.
<pre>
<code class="hljs"><span class="hljs-attribute">color</span>: <span class="hljs-built_in">prince-color</span>(MyColor, 50%, overprint)</code>
</pre>
</td>
</tr>
<tr class="ext">
<td><code>prince-overprint( &lt;<i>colorname</i>&gt; | rgb() | device-cmyk() | hsl() | hwb() | prince-color() [, [overprint-mode-nonzero | overprint-mode-zero]]? )*</code></td>
<td>Specifies a non-transparent color value to overprint.  If no overprint mode
is given, it defaults to <code>overprint-mode-nonzero</code>.</td>
</tr>
<tr>
<td><code>linear-gradient([ [ &lt;<i>angle</i>&gt; | to &lt;<i>side-or-corner</i>&gt; ] ,]? &lt;<i>color-stop</i>&gt; [,&#160;&lt;<i>color-stop</i>&gt;]+)</code></td>
<td>Creates an image consisting of a progressive transition between two or more
colors along a straight line.</td>
<td rowspan="4"><code><a href="/doc/css-props#prop-background-image">background-image</a></code></td>
</tr>
<tr>
<td><code>radial-gradient([ [ &lt;<i>shape</i>&gt; || &lt;<i>size</i>&gt; ] [ at &lt;<i>position</i>&gt; ]?, | at &lt;<i>position</i>&gt;, ]? &lt;<i>color-stop</i>&gt; [,&#160;&lt;<i>color-stop</i>&gt; ]+)</code></td>
<td>Creates an image consisting of a progressive transition between two or more
colors that radiate from an origin point</td>
</tr>
<tr>
<td><code>repeating-linear-gradient([ [ &lt;<i>angle</i>&gt; | to &lt;<i>side-or-corner</i>&gt; ] ,]? &lt;<i>color-stop</i>&gt; [,&#160;&lt;<i>color-stop</i>&gt;]+)</code></td>
<td>Creates an image consisting of repeating linear gradients.</td>
</tr>
<tr>
<td><code>repeating-radial-gradient([ [ &lt;<i>shape</i>&gt; || &lt;<i>size</i>&gt; ] [ at &lt;<i>position</i>&gt; ]?, | at &lt;<i>position</i>&gt;, ]? &lt;<i>color-stop</i>&gt; [,&#160;&lt;<i>color-stop</i>&gt; ]+)</code></td>
<td>Creates an image consisting of repeating radial gradients.</td>
</tr>
<tr>
<td><code>rect( &lt;<i>offset</i>&gt;, &lt;<i>offset</i>&gt;, &lt;<i>offset</i>&gt;, &lt;<i>offset</i>&gt; )</code></td>
<td>Defines a region in the form of a rectangle.</td>
<td><code><a href="/doc/css-props#prop-clip">clip</a></code></td>
</tr>
<tr>
<td><code>content()</code></td>
<td>Retrieves the text content of the selected element.  It can be used with several
different properties.</td>
<td rowspan="17"><code><a href="/doc/css-props#prop-content">content</a></code> - see also <a href="/doc/gen-content#generated-content-functions">Generated Content Functions</a></td>
</tr>
<tr>
<td><code>element( &lt;<i>name</i>&gt;, &lt;<i>page-policy</i>&gt;? )</code></td>
<td>Places an element (which has been removed from the normal flow with the
<code>running()</code> function) in a page region.  See
<a href="/doc/paged#taking-elements-from-the-document">Taking elements from the document</a>.</td>
</tr>
<tr>
<td><code>prince-expansion-text( &lt;<i>expansion</i>&gt;, &lt;<i>abbreviation</i>&gt; )*</code></td>
<td>Resolves abbreviations in the targeted element or psedudo-element.</td>
</tr>
<tr>
<td><code>counter( &lt;<i>name</i>&gt;, &lt;<i>counter-style</i>&gt;?, &lt;<i>page-policy</i>&gt;? )</code></td>
<td>Generates a value for the innermost counter.</td>
</tr>
<tr>
<td><code>counters( &lt;<i>name</i>&gt;, "&lt;<i>separator</i>&gt;", &lt;<i>counter-style</i>&gt;?, &lt;<i>page-policy</i>&gt;? )</code></td>
<td>Concatenates counters on different levels.</td>
</tr>
<tr>
<td><code>target-counter( &lt;<i>url</i>&gt;, &lt;<i>counter</i>&gt;, &lt;<i>counter-style</i>&gt;? )</code></td>
<td>Retrieves the value of the innermost counter with a given name at the given URL.
See <a href="/doc/gen-content#using-target-counter">Using target-counter()</a>.</td>
</tr>
<tr>
<td><code>target-counters( &lt;<i>url</i>&gt;, &lt;<i>counter</i>&gt;, "&lt;<i>separator</i>&gt;", &lt;<i>counter-style</i>&gt;? )</code></td>
<td>Retrieves the value of all counters of a given name from the end of the given
URL.</td>
</tr>
<tr>
<td><code>target-content( &lt;<i>url</i>&gt; )</code></td>
<td>References the text content of the linked element.  See <a href="/doc/gen-content#using-target-content">Using target-content()</a>.</td>
</tr>
<tr>
<td><code>leader( ("<i>...</i>" | dotted | solid | space), &lt;<i>min-width</i>&gt;? )</code></td>
<td>Inserts the given string before the element - useful in tables of content. The optional second argument can be used to specify a minimum width.</td>
</tr>
<tr>
<td><code>string( &lt;<i>ident</i>&gt;, &lt;<i>page-policy</i>&gt;? )</code></td>
<td>Retrieves the value defined with the <code><a href="/doc/css-props#prop-string-set">string-set</a></code>
property.  See <a href="/doc/paged#copying-content-from-the-document">Copying content from the document</a>.</td>
</tr>
<tr>
<td><code>repeat( &lt;<i>string</i>&gt;+ )</code></td>
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
<td><code>symbols( &lt;<i>string</i>&gt;+ )</code></td>
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
<td><code>flow( &lt;<i>name</i>&gt;, &lt;<i>page-policy</i>&gt;? ) | prince-flow( &lt;<i>name</i>&gt;, &lt;<i>page-policy</i>&gt;? )*</code></td>
<td>Inserts an element that has previously been removed with the <code>static()</code>
function.  See <a href="/doc/paged#taking-elements-from-the-document">Taking elements from the document</a>.</td>
</tr>
<tr class="ext">
<td><code>prince-script( &lt;<i>ident</i>&gt; [, &lt;<i>content</i>&gt;+]? )*</code></td>
<td>Calls arbitrary JavaScript functions in CSS generated content.</td>
</tr>
<tr class="ext">
<td><code>prince-fallback( &lt;<i>uri</i>&gt; )*[, &lt;<i>content</i>&gt;+]?</code></td>
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
<td><code>prince-glyph-index( &lt;<i>int</i>&gt; )*</code></td>
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
<td><code>grayscale( &lt;<i>number</i>&gt; | &lt;<i>percent</i>&gt; )</code></td>
<td>Converts the input image to grayscale.</td>
<td rowspan="10"><code><a href="/doc/css-props#prop-filter">filter</a></code></td>
</tr>
<tr>
<td><code>sepia( &lt;<i>number</i>&gt; | &lt;<i>percent</i>&gt; )</code></td>
<td>Converts the input image to sepia.</td>
</tr>
<tr>
<td><code>saturate( &lt;<i>number</i>&gt; | &lt;<i>percent</i>&gt; )</code></td>
<td>Saturates the input image.</td>
</tr>
<tr>
<td><code>hue-rotate( &lt;<i>angle</i>&gt; )</code></td>
<td>Applies a hue rotation on the input image.</td>
</tr>
<tr>
<td><code>invert( &lt;<i>number</i>&gt; | &lt;<i>percent</i>&gt; )</code></td>
<td>Inverts the samples in the input image.</td>
</tr>
<tr>
<td><code>opacity( &lt;<i>number</i>&gt; | &lt;<i>percent</i>&gt; )</code></td>
<td>Applies transparency to the input image.</td>
</tr>
<tr>
<td><code>brightness( &lt;<i>number</i>&gt; | &lt;<i>percent</i>&gt; )</code></td>
<td>Applies a linear multiplier to the input image, making it appear more or less
bright.</td>
</tr>
<tr>
<td><code>contrast( &lt;<i>number</i>&gt; | &lt;<i>percent</i>&gt; )</code></td>
<td>Adjusts the contrast of the input image.</td>
</tr>
<tr>
<td><code>blur( &lt;<i>length</i>&gt; )</code></td>
<td>Applies a Gaussian blur to the input image.</td>
</tr>
<tr>
<td><code>drop-shadow( &lt;<i>length</i>&gt;{1..3}, &lt;<i>color</i>&gt;? )</code></td>
<td>Applies a drop shadow effect to the input image.</td>
</tr>

<tr class="ext">
<td><code>prince-opentype( [ &lt;<i>feature</i>&gt; ]+ )*</code></td>
<td>Specifies a comma-separated list of OpenType features to be enabled.  For details
please see the <code><a href="/doc/css-props#prop-font-variant">font-variant</a></code> property and
<a href="/doc/styling#opentype-features-in-prince">OpenType Features in Prince</a>.</td>
<td><code><a href="/doc/css-props#prop-font-variant">font-variant</a></code></td>
</tr>
<tr>
<td><code>running( &lt;<i>name</i>&gt; )</code></td>
<td>Removes an element from the normal document flow, to make it available for use
in a page region with the <code>element()</code> function.  See
<a href="/doc/paged#taking-elements-from-the-document">Taking elements from the document</a>.</td>
<td><code><a href="/doc/css-props#prop-position">position</a></code></td>
</tr>
<tr class="ext">
<td><code>recompress-jpeg( &lt;<i>quality%</i>&gt; )*</code></td>
<td>Recompresses JPEG images by the indicated percentage to save space.</td>
<td rowspan="2"><code><a href="/doc/css-props#prop-prince-image-magic">-prince-image-magic</a></code></td>
</tr>
<tr class="ext">
<td><code>convert-to-jpeg( &lt;<i>quality%</i>&gt; )*</code></td>
<td>Converts non-JPEG images to JPEG.</td>
</tr>
<tr class="ext">
<td><code>static( &lt;<i>name</i>&gt;, [ start | current ]? )*</code></td>
<td>Removes an element from the normal document flow, to make it available for use
with the <code>flow()</code> function.  See <a href="/doc/paged#taking-elements-from-the-document">Taking elements from the document</a>.</td>
<td><code><a href="/doc/css-props#prop-prince-flow">-prince-flow</a></code></td>
</tr>
<tr class="ext">
<td><code>command( &lt;<i>ident</i>&gt; )*</code></td>
<td>Specifies any arbitrary command to be passed to the PDF viewer when the PDF file
is opened.  The user can supply values that Prince doesn't know about, but the viewer
does.</td>
<td><code><a href="/doc/css-props#prop-prince-pdf-open-action">-prince-pdf-open-action</a></code></td>
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
<td><code>rotate( &lt;<i>angle</i>&gt; )</code></td>
<td>Rotates an element around a fixed point on the 2D plane.</td>
<td rowspan="12"><code><a href="/doc/css-props#prop-transform">transform</a></code></td>
</tr>
<tr>
<td><code>matrix( &lt;<i>number</i>&gt;[, &lt;<i>number</i>&gt;]{5,5} )</code></td>
<td>Describes a homogeneous 2D transformation matrix.</td>
</tr>
<tr>
<td><code>translate( &lt;<i>offset</i>&gt;[, &lt;<i>offset</i>&gt;]? )</code></td>
<td>Translates an element on the 2D plane.</td>
</tr>
<tr>
<td><code>translatex( &lt;<i>offset</i>&gt; )</code></td>
<td>Translates an element horizontally.</td>
</tr>
<tr>
<td><code>translatey( &lt;<i>offset</i>&gt; )</code></td>
<td>Translates an element vertically.</td>
</tr>
<tr>
<td><code>translate3d( &lt;<i>offset</i>&gt;, &lt;<i>offset</i>&gt;, &lt;<i>offset</i>&gt; )</code></td>
<td>Translates an element in 3D space.</td>
</tr>
<tr>
<td><code>scale( &lt;<i>number</i>&gt;[, &lt;<i>number</i>&gt;]? )</code></td>
<td>Scales an element up or down on the 2D plane.</td>
</tr>
<tr>
<td><code>scalex( &lt;<i>number</i>&gt; )</code></td>
<td>Scales an element up or down horizontally.</td>
</tr>
<tr>
<td><code>scaley( &lt;<i>number</i>&gt; )</code></td>
<td>Scales an element up or down vertically.</td>
</tr>
<tr>
<td><code>skew( &lt;<i>angle</i>&gt;[, &lt;<i>angle</i>&gt;]? )</code></td>
<td>Skews an element on the 2D plane.</td>
</tr>
<tr>
<td><code>skewx( &lt;<i>angle</i>&gt; )</code></td>
<td>Skews an element in the horizontal direction.</td>
</tr>
<tr>
<td><code>skewy( &lt;<i>angle</i>&gt; )</code></td>
<td>Skews an element in the vertical direction.</td>
</tr>
<tr>
<td><code>supports([ &lt;<i>supports-condition</i>&gt; | &lt;<i>declaration</i>&gt; ])</code></td>
<td>Interpreted as a <code><a href="/doc/css-at-rules/#at-supports">@supports</a></code>
condition.</td>
<td><code><a href="/doc/css-at-rules/#at-import">@import</a></code></td>
</tr>
</tbody>
</table>
