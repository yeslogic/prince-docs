---
title: CSS Properties
---

Below are all of the CSS properties supported by Prince. For their precise definitions please refer to the CSS specifications.

\* properties marked with an asterisk and a darker background color shade are Prince extensions, while the extension values of a standard property are highlighted with a <span class="ext">light grey background</span>.  Besides the standard `-prince-` prefix, Prince also accepts `prince-` as a vendor prefix.

For the values, the grammar draws on the [CSS Values and Units Module Level 3](https://www.w3.org/TR/css3-values/) specification - with the notable exception of the meaning of an asterisk (\*), as explained above. A short explanation of the signs:

-   A bar (**|**) separates two or more *alternatives*: exactly one of them must occur.
-   A double bar (**||**) separates two or more *options*: one or more of them must occur, in any order.
-   A double ampersand (**&&**) separates two or more *components*, all of which must occur, in any order.
-   Square brackets (**\[ \]**) are only used for grouping.
-   A plus (**+**) indicates that the preceding item occurs one or more times.
-   A question mark (**?**) indicates that the preceding item is optional (occurs zero or one times).
-   A hash mark (**\#**) indicates that the preceding item occurs one or more times, separated by comma tokens.
-   A pair of numbers in curly braces, separated by two dots (**{*A*..*B*}**) indicates that the preceding item occurs at least *A* and at most *B* times.

<a href="#" id="toggle-css" onclick="javascript:toggleAllDetails('css'); return false;">Toggle (open/close) all properties</a>

<div id="prop-list">

<details><summary id="prop---custom-property-name">--custom-property-name <a class="self-link" href="#prop---custom-property-name"></a></summary><div><div><div id="prop---custom-property-name-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>--custom-property-name: <i>declaration-value</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>nothing</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop---custom-property-name-comments">Comments</div><p>This property family, called custom properties, is defined as any valid
    identifier that starts with two dashes. Custom properties are solely for
    use by authors and users; CSS will never give them a meaning beyond what
    is presented here.</p><p class="note">Unlike other CSS properties, custom property names are case-sensitive.</p></div><div><div id="prop---custom-property-name-seealso">See Also</div><ul><li><a href="/doc/styling#custom-properties-css-variables">Custom properties (CSS variables)</a></li></ul></div><div><div id="prop---custom-property-name-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-variables-1/#defining-variables">CSS Custom Properties for Cascading Variables Module Level 1</a></li></ul></div></div></details>

<details><summary id="prop-align-content">align-content <a class="self-link" href="#prop-align-content"></a></summary><div><div><div id="prop-align-content-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>align-content: flex-start |&#160;flex-end |&#160;center |&#160;space-between |&#160;space-around |&#160;stretch</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>stretch</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>multi-line flex containers</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-align-content-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-flexbox-1/#align-content-property">CSS Flexible Box Layout Module Level 1</a></li></ul></div></div></details>

<details><summary id="prop-align-items">align-items <a class="self-link" href="#prop-align-items"></a></summary><div><div><div id="prop-align-items-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>align-items: flex-start |&#160;flex-end |&#160;center |&#160;baseline |&#160;stretch</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>stretch</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>flex containers</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-align-items-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-flexbox-1/#align-items-property">CSS Flexible Box Layout Module Level 1</a></li></ul></div></div></details>

<details><summary id="prop-align-self">align-self <a class="self-link" href="#prop-align-self"></a></summary><div><div><div id="prop-align-self-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>align-self: auto |&#160;flex-start |&#160;flex-end |&#160;center |&#160;space-between |&#160;space-around</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>flex items</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-align-self-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-flexbox-1/#align-items-property">CSS Flexible Box Layout Module Level 1</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-alternate-color">alternate-color*  <a class="self-link" href="#prop-alternate-color"></a></summary><div><div><div id="prop-alternate-color-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>alternate-color: <i>color</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code /></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@prince-color</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-alternate-color-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@prince-color  TestColor { alternate-color: cmyk(1, 0, 0, 0) }
	color: prince-color(TestColor)</code></pre></div></div></div><div><div id="prop-alternate-color-comments">Comments</div><p>This <code>@prince-color</code> at-rule descriptor takes an RGB or CMYK color in any of the valid notations for
    RGB and CMYK colors, that will be used to display the color being defined, when
    the named color is not available.  Please note that it cannot be RGBA or CMYKA.</p><p>A color value must be specified for the rule to be valid.</p></div><div><div id="prop-alternate-color-seealso">See Also</div><ul><li><a href="/doc/graphics#spot-colors">Spot colors</a></li></ul></div></div></details>

<details><summary id="prop-background">background <a class="self-link" href="#prop-background"></a></summary><div><div><div id="prop-background-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>background: <br />&#160;&#160;&#160;[ <i><a href="#prop-background-image">background-image</a></i>
&#160;&#160;&#160;&#160;&#160;||&#160;<i><a href="#prop-background-position">background-position</a></i> [ / <i><a href="#prop-background-size">background-size</a></i> ]?
&#160;&#160;&#160;&#160;&#160;||&#160;<i><a href="#prop-background-repeat">background-repeat</a></i>
&#160;&#160;&#160;&#160;&#160;||&#160;<i><a href="#prop-background-attachment">background-attachment</a></i>
&#160;&#160;&#160;&#160;&#160;||&#160;<i><a href="#prop-background-origin">background-origin</a></i> <i><a href="#prop-background-clip">background-clip</a></i>?
&#160;&#160;&#160;&#160;&#160;||&#160;<i><a href="#prop-background-color">background-color</a></i> ]#</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>transparent</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-background-comments">Comments</div><p>
        The <code>background</code> property is a shorthand for
        setting the following CSS properties:
    </p><ul><li><code><a href="#prop-background-image">background-image</a></code></li><li><code><a href="#prop-background-position">background-position</a></code></li><li><code><a href="#prop-background-size">background-size</a></code></li><li><code><a href="#prop-background-repeat">background-repeat</a></code></li><li><code><a href="#prop-background-attachment">background-attachment</a></code></li><li><code><a href="#prop-background-origin">background-origin</a></code></li><li><code><a href="#prop-background-clip">background-clip</a></code></li><li><code><a href="#prop-background-color">background-color</a></code></li></ul></div><div><div id="prop-background-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-background">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-background-attachment">background-attachment <a class="self-link" href="#prop-background-attachment"></a></summary><div><div><div id="prop-background-attachment-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>background-attachment: scroll |&#160;fixed <span class="ext">bleed</span>?</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>scroll</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-background-attachment-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@page {
    background-attachment: fixed bleed;
    background-size: cover;
}</code></pre></div></div></div><div><div id="prop-background-attachment-comments">Comments</div><p>
	The <code>background-attachment</code> property determines the origin
	of the coordinate system for background images. The default value of
	<code>scroll</code> will position background images based on an origin
	at the top-left corner of the padding area of the current element,
	while a value of <code>fixed</code> places the origin at the top-left
	corner of the page box.
	</p><p>
    The optional <code>bleed</code> modifier allows a background image to
    cover the entire page bleed area when used together with
    <code><a href="#prop-background-size">background-size</a>: cover</code>.
    </p><p class="note">
	The <code>background-attachment</code> property only changes
	the origin of the coordinate system used to position the image; the
	background image will still only be shown within the padding area of
	the current element.
	</p></div><div><div id="prop-background-attachment-seealso">See Also</div><ul><li><a href="/doc/styling#background">Background</a></li></ul></div><div><div id="prop-background-attachment-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-background-attachment">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-background-color">background-color <a class="self-link" href="#prop-background-color"></a></summary><div><div><div id="prop-background-color-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>background-color: <i>color</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>transparent</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-background-color-seealso">See Also</div><ul><li><a href="/doc/graphics#color">Color</a></li></ul></div><div><div id="prop-background-color-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-background-color">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-background-clip">background-clip <a class="self-link" href="#prop-background-clip"></a></summary><div><div><div id="prop-background-clip-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>background-clip: content-box |&#160;padding-box |&#160;border-box</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>border-box</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-background-clip-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-background-clip">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-background-image">background-image <a class="self-link" href="#prop-background-image"></a></summary><div><div><div id="prop-background-image-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>background-image: none |&#160;url(&#160;<i>filename</i>&#160;) |&#160;linear-gradient(&#160;...&#160;) |&#160;radial-gradient(&#160;...&#160;) |&#160;repeating-linear-gradient(&#160;...&#160;) |&#160;repeating-radial-gradient(&#160;...&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-background-image-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-background-image">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-background-image-resolution">background-image-resolution*  <a class="self-link" href="#prop-background-image-resolution"></a></summary><div><div><div id="prop-background-image-resolution-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>background-image-resolution: <i>dpi</i> |&#160;normal |&#160;auto [ , normal |&#160;<i>dpi</i> ]?</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>background image elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-background-image-resolution-comments">Comments</div><p>
    This property determines the resolution of a background image.  The value <code>normal</code>
    means 96dpi, or else the current CSS DPI setting.  A custom DPI value can also
    be specified.  The value <code>auto</code> means to check the original resolution
    of the image.  One can specify a second value, as for example <code>auto, normal</code>
    or <code>auto, 300dpi</code> in order to check the original resolution of the
    image first, and to fall back on the second value if the image doesn't contain
    resolution information.
    </p><p class="note">
        The property <a href="#prop-prince-background-image-resolution"><code>-prince-background-image-resolution</code></a> can be used as an alias.
        </p></div><div><div id="prop-background-image-resolution-seealso">See Also</div><ul><li><a href="/doc/graphics#image-size">Image Size</a></li></ul></div></div></details>

<details><summary id="prop-background-origin">background-origin <a class="self-link" href="#prop-background-origin"></a></summary><div><div><div id="prop-background-origin-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>background-origin: content-box |&#160;padding-box |&#160;border-box</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>padding-box</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-background-origin-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-background-origin">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-background-position">background-position <a class="self-link" href="#prop-background-position"></a></summary><div><div><div id="prop-background-position-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>background-position: <br />&#160;&#160;&#160;left |&#160;center |&#160;right |&#160;top |&#160;bottom |&#160;<i>length</i> |&#160;<i>percent</i>
&#160;&#160;&#160;|&#160;[ left |&#160;center |&#160;right |&#160;<i>length</i> |&#160;<i>percent</i> ]
&#160;&#160;&#160;&#160;&#160;&#160;[ top |&#160;center |&#160;bottom |&#160;<i>length</i> |&#160;<i>percent</i> ]
&#160;&#160;&#160;|&#160;[ [ center |&#160;[ left |&#160;right ] [ <i>length</i> <i>percent</i> ]? ]
&#160;&#160;&#160;&#160;&#160;&#160;&#160;&amp;&amp;&#160;[ center |&#160;[ left |&#160;right ] [ <i>length</i> <i>percent</i> ]? ] ]</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>top left</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-background-position-comments">Comments</div><p>
	The <code>background-position</code> property determines the position
	of the background image relative to the top-left corner of the
	padding area of the element in which it appears.
	</p><p class="note">
	The <code><a href="#prop-background-attachment">background-attachment</a></code>
	property can be used to change the origin relative to which the
	background image is positioned.
	</p></div><div><div id="prop-background-position-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-background-position">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-background-repeat">background-repeat <a class="self-link" href="#prop-background-repeat"></a></summary><div><div><div id="prop-background-repeat-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>background-repeat: [ repeat-x |&#160;repeat-y |&#160;[ repeat |&#160;space |&#160;round |&#160;no-repeat ]{1..2} ]#</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>repeat</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-background-repeat-comments">Comments</div><p>
    The <code>background-repeat</code> property determines whether the
    background image is repeated to cover the padding area of the current
    element with a rectangular tiling, or only repeated horizontally or
    vertically, or only drawn once and not repeated at all.
    </p></div><div><div id="prop-background-repeat-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-background-repeat">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-background-size">background-size <a class="self-link" href="#prop-background-size"></a></summary><div><div><div id="prop-background-size-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>background-size: [ contain |&#160;cover |&#160;[ auto |&#160;<i>length</i> |&#160;<i>percent</i> ]{1..2} ]#</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-background-size-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-background-size">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-baseline-shift">baseline-shift <a class="self-link" href="#prop-baseline-shift"></a></summary><div><div><div id="prop-baseline-shift-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>baseline-shift: baseline |&#160;sub |&#160;super |&#160;<i>percent</i> |&#160;<i>length</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>baseline</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>inline elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-baseline-shift-comments">Comments</div><p>
	The <code>baseline-shift</code> property only applies to SVG text elements.
	</p></div><div><div id="prop-baseline-shift-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/SVG11/text.html#BaselineShiftProperty">SVG 1.1</a></li></ul></div></div></details>

<details><summary id="prop-bleed">bleed <a class="self-link" href="#prop-bleed"></a></summary><div><div><div id="prop-bleed-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>bleed: auto |&#160;[ <i>length</i> ]{1..4}</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@page</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-bleed-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@page { bleed: 10mm }</code></pre></div></div></div><div><div id="prop-bleed-comments">Comments</div><p>
	This CSS at-rule descriptor can be used to specify the size of the bleed area of the
	page when crop marks are enabled.
	</p></div><div><div id="prop-bleed-seealso">See Also</div><ul><li><a href="/doc/paged#page-style">Page style</a></li><li><code><a href="#prop-prince-trim">-prince-trim</a></code></li></ul></div><div><div id="prop-bleed-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-page-3/#bleed">CSS Paged Media Module Level 3</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-bookmark-label">bookmark-label*  <a class="self-link" href="#prop-bookmark-label"></a></summary><div><div><div id="prop-bookmark-label-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>bookmark-label: none |&#160;<i>content</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>content()</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-bookmark-label-comments">Comments</div><p>
	This property is used to determine the text content of the PDF
	bookmark generated by the current element.
	</p><p>
    Several ways of creating content are here defined by means of functions - the
    detailed explanation can be found in the <a href="/doc/gen-content#generated-content-functions">Generated Content Functions</a>
    section.
    </p><p class="note">
	Even though the initial value for this property is
	<code>content()</code>, no PDF bookmark will be generated by default
	as the initial value for the <code><a href="#prop-prince-bookmark-level">-prince-bookmark-level</a></code>
	property is <code>none</code>.
    </p><p>
	See the documentation for <a href="/doc/prince-output#pdf-bookmarks">PDF Bookmarks</a> for more details.
	</p><p class="note">
        The property <a href="#prop-prince-bookmark-label"><code>-prince-bookmark-label</code></a> can be used as an alias.
        </p></div><div><div id="prop-bookmark-label-seealso">See Also</div><ul><li><a href="/doc/gen-content#generated-content-functions">Generated Content Functions</a></li><li><a href="/doc/prince-output#bookmark-labels">Bookmark labels</a></li><li><code><a href="#prop-content">content</a></code></li></ul></div><div><div id="prop-bookmark-label-spec">Specification</div><ul><li><a href="https://books.spec.whatwg.org/#'bookmark-label'">CSS Books</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-bookmark-level">bookmark-level*  <a class="self-link" href="#prop-bookmark-level"></a></summary><div><div><div id="prop-bookmark-level-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>bookmark-level: none |&#160;<i>integer</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-bookmark-level-comments">Comments</div><p>
	This property is used to determine the numeric level in the bookmark
	hierarchy of the PDF bookmark generated by the current element.
	See the documentation for <a href="/doc/prince-output#pdf-bookmarks">PDF Bookmarks</a> for more details.
	</p><p class="note">
        The property <a href="#prop-prince-bookmark-level"><code>-prince-bookmark-level</code></a> can be used as an alias.
        </p></div><div><div id="prop-bookmark-level-seealso">See Also</div><ul><li><a href="/doc/prince-output#bookmark-levels">Bookmark levels</a></li></ul></div><div><div id="prop-bookmark-level-spec">Specification</div><ul><li><a href="https://books.spec.whatwg.org/#'bookmark-level'">CSS Books</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-bookmark-state">bookmark-state*  <a class="self-link" href="#prop-bookmark-state"></a></summary><div><div><div id="prop-bookmark-state-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>bookmark-state: open |&#160;closed</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>open</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-bookmark-state-comments">Comments</div><p>
    This property is used to determine whether the bookmark tree item is open or closed
    when the PDF is first viewed.  In this way you can close each chapter and hide
    the subsections for documents that are very long, or you can choose to have a
    deep bookmark tree.
    </p><p class="note">
        The property <a href="#prop-prince-bookmark-state"><code>-prince-bookmark-state</code></a> can be used as an alias.
        </p></div><div><div id="prop-bookmark-state-seealso">See Also</div><ul><li><a href="/doc/prince-output#bookmark-levels">Bookmark levels</a></li></ul></div><div><div id="prop-bookmark-state-spec">Specification</div><ul><li><a href="https://books.spec.whatwg.org/#'bookmark-state'">CSS Books</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-bookmark-target">bookmark-target*  <a class="self-link" href="#prop-bookmark-target"></a></summary><div><div><div id="prop-bookmark-target-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>bookmark-target: self |&#160;url(&#160;<i>target-url</i>&#160;) |&#160;attr(&#160;<i>target-attr</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>self</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-bookmark-target-comments">Comments</div><p>
	This property is used to determine the link target for the
	PDF bookmark generated by the current element.
	See the documentation for <a href="/doc/prince-output#pdf-bookmarks">PDF Bookmarks</a> for more details.
	</p><p class="note">
        The property <a href="#prop-prince-bookmark-target"><code>-prince-bookmark-target</code></a> can be used as an alias.
        </p></div><div><div id="prop-bookmark-target-seealso">See Also</div><ul><li><a href="/doc/prince-output#bookmark-targets">Bookmark targets</a></li></ul></div></div></details>

<details><summary id="prop-border">border <a class="self-link" href="#prop-border"></a></summary><div><div><div id="prop-border-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border: <i>color</i> ||&#160;<i>border-style</i> ||&#160;<i>border-width</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-border-comments">Comments</div><p>
        The <code>border</code> property is a shorthand for
        setting the following CSS properties:
    </p><ul><li><code><a href="#prop-border-bottom-color">border-bottom-color</a></code></li><li><code><a href="#prop-border-bottom-style">border-bottom-style</a></code></li><li><code><a href="#prop-border-bottom-width">border-bottom-width</a></code></li><li><code><a href="#prop-border-left-color">border-left-color</a></code></li><li><code><a href="#prop-border-left-style">border-left-style</a></code></li><li><code><a href="#prop-border-left-width">border-left-width</a></code></li><li><code><a href="#prop-border-right-color">border-right-color</a></code></li><li><code><a href="#prop-border-right-style">border-right-style</a></code></li><li><code><a href="#prop-border-right-width">border-right-width</a></code></li><li><code><a href="#prop-border-top-color">border-top-color</a></code></li><li><code><a href="#prop-border-top-style">border-top-style</a></code></li><li><code><a href="#prop-border-top-width">border-top-width</a></code></li></ul></div><div><div id="prop-border-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-shorthands">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-bottom">border-bottom <a class="self-link" href="#prop-border-bottom"></a></summary><div><div><div id="prop-border-bottom-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-bottom: <i>color</i> ||&#160;<i>border-style</i> ||&#160;<i>border-width</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-border-bottom-comments">Comments</div><p>
        The <code>border-bottom</code> property is a shorthand for
        setting the following CSS properties:
    </p><ul><li><code><a href="#prop-border-bottom-color">border-bottom-color</a></code></li><li><code><a href="#prop-border-bottom-style">border-bottom-style</a></code></li><li><code><a href="#prop-border-bottom-width">border-bottom-width</a></code></li></ul></div><div><div id="prop-border-bottom-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-shorthands">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-bottom-color">border-bottom-color <a class="self-link" href="#prop-border-bottom-color"></a></summary><div><div><div id="prop-border-bottom-color-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-bottom-color: <i>color</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>CurrentColor</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-border-bottom-color-seealso">See Also</div><ul><li><a href="/doc/graphics#color">Color</a></li></ul></div><div><div id="prop-border-bottom-color-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-color">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-bottom-style">border-bottom-style <a class="self-link" href="#prop-border-bottom-style"></a></summary><div><div><div id="prop-border-bottom-style-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-bottom-style: none |&#160;hidden |&#160;solid |&#160;dashed |&#160;dotted |&#160;double |&#160;groove |&#160;ridge |&#160;inset |&#160;outset</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-border-bottom-style-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-style">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-bottom-width">border-bottom-width <a class="self-link" href="#prop-border-bottom-width"></a></summary><div><div><div id="prop-border-bottom-width-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-bottom-width: thin |&#160;medium |&#160;thick |&#160;<i>length</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>medium</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-border-bottom-width-comments">Comments</div><p class="note">
	Even though the initial value for this property is
	<code>medium</code>, no bottom border will be shown by default as
	the initial value for <code><a href="#prop-border-bottom-style">border-bottom-style</a></code>
	is <code>none</code>.
	</p></div><div><div id="prop-border-bottom-width-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-width">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-clip">border-clip <a class="self-link" href="#prop-border-clip"></a></summary><div><div><div id="prop-border-clip-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-clip: normal |&#160;<i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>footnotes</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-border-clip-comments">Comments</div><p>
	Please note that currently this property only applies to footnotes.
	</p></div></div></details>

<details><summary id="prop-border-collapse">border-collapse <a class="self-link" href="#prop-border-collapse"></a></summary><div><div><div id="prop-border-collapse-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-collapse: separate |&#160;collapse</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>separate</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-border-collapse-comments">Comments</div><p>
	This property determines whether tables use separate table and cell
	borders or collapse the table and cell borders together. See the
	<a href="/doc/styling#tables">Tables</a> documentation for more details.
	</p></div><div><div id="prop-border-collapse-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/tables.html#borders">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-border-color">border-color <a class="self-link" href="#prop-border-color"></a></summary><div><div><div id="prop-border-color-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-color: <i>color</i>{1..4}</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>CurrentColor</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-border-color-comments">Comments</div><p>
        The <code>border-color</code> property is a shorthand for
        setting the following CSS properties:
    </p><ul><li><code><a href="#prop-border-bottom-color">border-bottom-color</a></code></li><li><code><a href="#prop-border-left-color">border-left-color</a></code></li><li><code><a href="#prop-border-right-color">border-right-color</a></code></li><li><code><a href="#prop-border-top-color">border-top-color</a></code></li></ul></div><div><div id="prop-border-color-seealso">See Also</div><ul><li><a href="/doc/graphics#color">Color</a></li></ul></div><div><div id="prop-border-color-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-color">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-left">border-left <a class="self-link" href="#prop-border-left"></a></summary><div><div><div id="prop-border-left-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-left: <i>color</i> ||&#160;<i>border-style</i> ||&#160;<i>border-width</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-border-left-comments">Comments</div><p>
        The <code>border-left</code> property is a shorthand for
        setting the following CSS properties:
    </p><ul><li><code><a href="#prop-border-left-color">border-left-color</a></code></li><li><code><a href="#prop-border-left-style">border-left-style</a></code></li><li><code><a href="#prop-border-left-width">border-left-width</a></code></li></ul></div><div><div id="prop-border-left-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-shorthands">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-left-color">border-left-color <a class="self-link" href="#prop-border-left-color"></a></summary><div><div><div id="prop-border-left-color-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-left-color: <i>color</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>CurrentColor</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-border-left-color-seealso">See Also</div><ul><li><a href="/doc/graphics#color">Color</a></li></ul></div><div><div id="prop-border-left-color-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-color">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-left-style">border-left-style <a class="self-link" href="#prop-border-left-style"></a></summary><div><div><div id="prop-border-left-style-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-left-style: none |&#160;hidden |&#160;solid |&#160;dashed |&#160;dotted |&#160;double |&#160;groove |&#160;ridge |&#160;inset |&#160;outset</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-border-left-style-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-style">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-left-width">border-left-width <a class="self-link" href="#prop-border-left-width"></a></summary><div><div><div id="prop-border-left-width-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-left-width: thin |&#160;medium |&#160;thick |&#160;<i>length</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>medium</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-border-left-width-comments">Comments</div><p class="note">
	Even though the initial value for this property is
	<code>medium</code>, no left border will be shown by default as
	the initial value for <code><a href="#prop-border-left-style">border-left-style</a></code>
	is <code>none</code>.
	</p></div><div><div id="prop-border-left-width-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-width">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-radius">border-radius <a class="self-link" href="#prop-border-radius"></a></summary><div><div><div id="prop-border-radius-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-radius: [ <i>length</i> |&#160;<i>percent</i> ]{1..2}</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-border-radius-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-radius">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-bottom-left-radius">border-bottom-left-radius <a class="self-link" href="#prop-border-bottom-left-radius"></a></summary><div><div><div id="prop-border-bottom-left-radius-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-bottom-left-radius: [ <i>length</i> |&#160;<i>percent</i> ]{1..2}</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-border-bottom-left-radius-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-radius">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-bottom-right-radius">border-bottom-right-radius <a class="self-link" href="#prop-border-bottom-right-radius"></a></summary><div><div><div id="prop-border-bottom-right-radius-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-bottom-right-radius: [ <i>length</i> |&#160;<i>percent</i> ]{1..2}</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-border-bottom-right-radius-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-radius">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-top-left-radius">border-top-left-radius <a class="self-link" href="#prop-border-top-left-radius"></a></summary><div><div><div id="prop-border-top-left-radius-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-top-left-radius: [ <i>length</i> |&#160;<i>percent</i> ]{1..2}</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-border-top-left-radius-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-radius">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-top-right-radius">border-top-right-radius <a class="self-link" href="#prop-border-top-right-radius"></a></summary><div><div><div id="prop-border-top-right-radius-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-top-right-radius: [ <i>length</i> |&#160;<i>percent</i> ]{1..2}</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-border-top-right-radius-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-radius">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-right">border-right <a class="self-link" href="#prop-border-right"></a></summary><div><div><div id="prop-border-right-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-right: <i>color</i> ||&#160;<i>border-style</i> ||&#160;<i>border-width</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-border-right-comments">Comments</div><p>
        The <code>border-right</code> property is a shorthand for
        setting the following CSS properties:
    </p><ul><li><code><a href="#prop-border-right-color">border-right-color</a></code></li><li><code><a href="#prop-border-right-style">border-right-style</a></code></li><li><code><a href="#prop-border-right-width">border-right-width</a></code></li></ul></div><div><div id="prop-border-right-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-shorthands">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-right-color">border-right-color <a class="self-link" href="#prop-border-right-color"></a></summary><div><div><div id="prop-border-right-color-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-right-color: <i>color</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>CurrentColor</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-border-right-color-seealso">See Also</div><ul><li><a href="/doc/graphics#color">Color</a></li></ul></div><div><div id="prop-border-right-color-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-color">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-right-style">border-right-style <a class="self-link" href="#prop-border-right-style"></a></summary><div><div><div id="prop-border-right-style-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-right-style: none |&#160;hidden |&#160;solid |&#160;dashed |&#160;dotted |&#160;double |&#160;groove |&#160;ridge |&#160;inset |&#160;outset</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-border-right-style-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-style">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-right-width">border-right-width <a class="self-link" href="#prop-border-right-width"></a></summary><div><div><div id="prop-border-right-width-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-right-width: thin |&#160;medium |&#160;thick |&#160;<i>length</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>medium</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-border-right-width-comments">Comments</div><p class="note">
	Even though the initial value for this property is
	<code>medium</code>, no right border will be shown by default as
	the initial value for <code><a href="#prop-border-right-style">border-right-style</a></code>
	is <code>none</code>.
	</p></div><div><div id="prop-border-right-width-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-width">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-spacing">border-spacing <a class="self-link" href="#prop-border-spacing"></a></summary><div><div><div id="prop-border-spacing-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-spacing: <i>length</i>{1..2}</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-border-spacing-comments">Comments</div><p>
	This property determines the spacing between table cell borders for
	tables that use the separated table border model. See the
	<a href="/doc/styling#tables">Tables</a> documentation for more details.
	</p></div><div><div id="prop-border-spacing-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/tables.html#separated-borders">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-border-style">border-style <a class="self-link" href="#prop-border-style"></a></summary><div><div><div id="prop-border-style-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-style: <i>border-style</i>{1..4}</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-border-style-comments">Comments</div><p>
        The <code>border-style</code> property is a shorthand for
        setting the following CSS properties:
    </p><ul><li><code><a href="#prop-border-bottom-style">border-bottom-style</a></code></li><li><code><a href="#prop-border-left-style">border-left-style</a></code></li><li><code><a href="#prop-border-right-style">border-right-style</a></code></li><li><code><a href="#prop-border-top-style">border-top-style</a></code></li></ul></div><div><div id="prop-border-style-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-style">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-top">border-top <a class="self-link" href="#prop-border-top"></a></summary><div><div><div id="prop-border-top-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-top: <i>color</i> ||&#160;<i>border-style</i> ||&#160;<i>border-width</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-border-top-comments">Comments</div><p>
        The <code>border-top</code> property is a shorthand for
        setting the following CSS properties:
    </p><ul><li><code><a href="#prop-border-top-color">border-top-color</a></code></li><li><code><a href="#prop-border-top-style">border-top-style</a></code></li><li><code><a href="#prop-border-top-width">border-top-width</a></code></li></ul></div><div><div id="prop-border-top-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-shorthands">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-top-color">border-top-color <a class="self-link" href="#prop-border-top-color"></a></summary><div><div><div id="prop-border-top-color-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-top-color: <i>color</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>CurrentColor</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-border-top-color-seealso">See Also</div><ul><li><a href="/doc/graphics#color">Color</a></li></ul></div><div><div id="prop-border-top-color-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-color">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-top-style">border-top-style <a class="self-link" href="#prop-border-top-style"></a></summary><div><div><div id="prop-border-top-style-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-top-style: none |&#160;hidden |&#160;solid |&#160;dashed |&#160;dotted |&#160;double |&#160;groove |&#160;ridge |&#160;inset |&#160;outset</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-border-top-style-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-style">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-top-width">border-top-width <a class="self-link" href="#prop-border-top-width"></a></summary><div><div><div id="prop-border-top-width-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-top-width: thin |&#160;medium |&#160;thick |&#160;<i>length</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>medium</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-border-top-width-comments">Comments</div><p class="note">
	Even though the initial value for this property is
	<code>medium</code>, no top border will be shown by default as
	the initial value for <code><a href="#prop-border-top-style">border-top-style</a></code>
	is <code>none</code>.
	</p></div><div><div id="prop-border-top-width-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-width">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-border-width">border-width <a class="self-link" href="#prop-border-width"></a></summary><div><div><div id="prop-border-width-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>border-width: [ thin |&#160;medium |&#160;thick |&#160;<i>length</i> ]{1..4}</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>medium</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-border-width-comments">Comments</div><p>
        The <code>border-width</code> property is a shorthand for
        setting the following CSS properties:
    </p><ul><li><code><a href="#prop-border-bottom-width">border-bottom-width</a></code></li><li><code><a href="#prop-border-left-width">border-left-width</a></code></li><li><code><a href="#prop-border-right-width">border-right-width</a></code></li><li><code><a href="#prop-border-top-width">border-top-width</a></code></li></ul></div><div><div id="prop-border-width-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-backgrounds-3/#the-border-width">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-bottom">bottom <a class="self-link" href="#prop-bottom"></a></summary><div><div><div id="prop-bottom-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>bottom: auto |&#160;<i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>positioned elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-bottom-comments">Comments</div><p>
	This property determines the bottom offset for positioned elements
	(ie. elements with a <code><a href="#prop-position">position</a></code>
	value of <code>relative</code>, <code>absolute</code> or
	<code>fixed</code>).
	</p></div><div><div id="prop-bottom-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visuren.html#choose-position">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-box-decoration-break">box-decoration-break <a class="self-link" href="#prop-box-decoration-break"></a></summary><div><div><div id="prop-box-decoration-break-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>box-decoration-break: slice |&#160;clone</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>clone</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>block elements and tables</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-box-decoration-break-comments">Comments</div><p>
    This property is only supported on block elements and tables.  Also note that
    Prince defaults to <code>clone</code>.
    </p></div><div><div id="prop-box-decoration-break-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-break-3/#break-decoration">CSS Fragmentation Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-box-shadow">box-shadow <a class="self-link" href="#prop-box-shadow"></a></summary><div><div><div id="prop-box-shadow-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>box-shadow: none |&#160;[ inset? &amp;&amp;&#160;<i>length</i>{2..4} &amp;&amp;&#160;<i>color</i>? ]#</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-box-shadow-spec">Specification</div><ul><li><a href="https://drafts.csswg.org/css-backgrounds-3/#box-shadow">CSS Backgrounds and Borders Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-box-sizing">box-sizing <a class="self-link" href="#prop-box-sizing"></a></summary><div><div><div id="prop-box-sizing-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>box-sizing: content-box |&#160;padding-box |&#160;border-box</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>content-box</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-box-sizing-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-ui-3/#box-sizing">CSS Basic User Interface Module Level 3 (CSS3 UI)</a></li></ul></div></div></details>

<details><summary id="prop-break-after">break-after <a class="self-link" href="#prop-break-after"></a></summary><div><div><div id="prop-break-after-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>break-after: auto |&#160;avoid |&#160;avoid-page |&#160;avoid-column |&#160;page |&#160;left |&#160;right |&#160;recto |&#160;verso |&#160;column</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>block-level elements in the normal flow of the root element</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-break-after-comments">Comments</div><p>
    This property can be used to force or suppress page breaks after an
    element.
    </p><p>
    The values <code>avoid-page</code> and <code>avoid-column</code> each behave
    as simply <code>avoid</code>: it is not possible to avoid page breaks without
    also avoiding column breaks.
    </p><p>
    See the documentation for <a href="/doc/paged#page-breaks">Page breaks</a> for more details.
    </p></div><div><div id="prop-break-after-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-break-3/#breaking-controls">CSS Fragmentation Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-break-before">break-before <a class="self-link" href="#prop-break-before"></a></summary><div><div><div id="prop-break-before-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>break-before: auto |&#160;avoid |&#160;avoid-page |&#160;avoid-column |&#160;page |&#160;left |&#160;right |&#160;recto |&#160;verso |&#160;column</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>block-level elements in the normal flow of the root element</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-break-before-comments">Comments</div><p>
    This property can be used to force or suppress page breaks before an
    element.
    </p><p>
    The values <code>avoid-page</code> and <code>avoid-column</code> each behave
    as simply <code>avoid</code>: it is not possible to avoid page breaks without
    also avoiding column breaks.
    </p><p>
    See the documentation for <a href="/doc/paged#page-breaks">Page breaks</a> for more details.
    </p></div><div><div id="prop-break-before-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-break-3/#breaking-controls">CSS Fragmentation Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-break-inside">break-inside <a class="self-link" href="#prop-break-inside"></a></summary><div><div><div id="prop-break-inside-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>break-inside: auto |&#160;avoid |&#160;avoid-page |&#160;avoid-column</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>block-level elements in the normal flow of the root element</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-break-inside-comments">Comments</div><p>
    This property can be used to suppress page breaks inside an
    element. See the documentation for <a href="/doc/paged#page-breaks">Page breaks</a>
    for more details.
    </p></div><div><div id="prop-break-inside-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-break-3/#breaking-controls">CSS Fragmentation Module Level 3</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-caption-page">caption-page*  <a class="self-link" href="#prop-caption-page"></a></summary><div><div><div id="prop-caption-page-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>caption-page: first |&#160;following |&#160;all</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>first</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>table elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-caption-page-comments">Comments</div><p>
	This property determines whether table captions will be displayed on
	the first page of a table, or only on following pages, or repeated on
	every page that a table appears on.
	</p><p class="note">
        The property <a href="#prop-prince-caption-page"><code>-prince-caption-page</code></a> can be used as an alias.
        </p></div><div><div id="prop-caption-page-seealso">See Also</div><ul><li><a href="/doc/styling#table-captions">Table captions</a></li></ul></div></div></details>

<details><summary id="prop-caption-side">caption-side <a class="self-link" href="#prop-caption-side"></a></summary><div><div><div id="prop-caption-side-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>caption-side: top |&#160;bottom</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>top</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>table-caption elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-caption-side-comments">Comments</div><p>
	This property determines whether table captions will be displayed at
	the top or bottom of the table.
	</p></div><div><div id="prop-caption-side-seealso">See Also</div><ul><li><a href="/doc/styling#table-captions">Table captions</a></li></ul></div><div><div id="prop-caption-side-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/tables.html#caption-position">CSS 2.1</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-clear">clear* <a class="self-link" href="#prop-clear"></a></summary><div><div><div id="prop-clear-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>clear: none |&#160;left |&#160;right |&#160;<span class="ext">inside</span> |&#160;<span class="ext">outside</span> |&#160;<span class="ext">both</span> |&#160;<span class="ext">page</span> |&#160;<span class="ext">column</span> |&#160;<span class="ext">end</span></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>block-level elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-clear-comments">Comments</div><p>
	This property determines whether an element should be moved down the
	page in order to clear elements that have been floated to the left or
	right of the page. The <code>left</code>, <code>right</code>,
	<code>inside</code> and <code>outside</code>
	values correspond to values given to the <code><a href="#prop-float">float</a></code>
	property, while <code>both</code> will clear floats on either side.
	</p><p>
    The keyword <code>end</code> clears the float, and places the next
    float in the next available position - so if e.g. you have a column
    layout with a float already at the top of the first column, it will
    place the next float, whose natural position would be just below the
    first one, at the bottom of the same column.
    </p><p>
    The keyword <code>column</code> clears the end of the column (so any
    further float would be pushed to the next column), while the keyword
    <code>page</code> clears the page (pushing further floats to the next
    page).
    </p><p class="note">
        The property <a href="#prop-prince-clear"><code>-prince-clear</code></a> can be used as an alias.
        </p></div><div><div id="prop-float-seealso">See Also</div><ul><li><a href="/doc/styling#floats">Floats</a></li><li><code><a href="#prop-float">float</a></code></li></ul></div><div><div id="prop-clear-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visuren.html#flow-control">CSS 2.1</a></li><li><a href="https://figures.spec.whatwg.org/#floating-inside-and-outside-pages">CSS Figures - Floating Inside and Outside Pages</a></li><li><a href="https://figures.idea.whatwg.org/#page-floats">CSS Figures - Page Floats</a></li></ul></div></div></details>

<details><summary id="prop-clip">clip <a class="self-link" href="#prop-clip"></a></summary><div><div><div id="prop-clip-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>clip: auto |&#160;rect(&#160;<i>offset</i>, <i>offset</i>, <i>offset</i>, <i>offset</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>absolutely positioned elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-clip-comments">Comments</div><p>
	This property determines the clipping rectangle for absolutely
	positioned elements (ie. elements with a <code><a href="#prop-position">position</a></code>
	value of <code>absolute</code> or
	<code>fixed</code>).
	</p></div><div><div id="prop-clip-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visufx.html#clipping">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-clip-path">clip-path <a class="self-link" href="#prop-clip-path"></a></summary><div><div><div id="prop-clip-path-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>clip-path: none |&#160;url(&#160;<i>path</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>SVG elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-clip-path-comments">Comments</div><p>
	The <code>clip-path</code> property only applies to SVG elements.
	</p></div><div><div id="prop-clip-path-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/SVG11/masking.html#ClipPathProperty">SVG 1.1</a></li></ul></div></div></details>

<details><summary id="prop-clip-rule">clip-rule <a class="self-link" href="#prop-clip-rule"></a></summary><div><div><div id="prop-clip-rule-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>clip-rule: nonzero |&#160;evenodd</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>nonzero</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>SVG elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-clip-rule-comments">Comments</div><p>
	The <code>clip-rule</code> property only applies to SVG elements.
	</p></div><div><div id="prop-clip-rule-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/SVG11/masking.html#ClipRuleProperty">SVG 1.1</a></li></ul></div></div></details>

<details><summary id="prop-color">color <a class="self-link" href="#prop-color"></a></summary><div><div><div id="prop-color-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>color: <i>color</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>black</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-color-comments">Comments</div><p>
	See the <a href="/doc/graphics#color">Color</a> section for supported color values.
	</p></div><div><div id="prop-color-seealso">See Also</div><ul><li><a href="/doc/graphics#color">Color</a></li></ul></div><div><div id="prop-color-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css3-color/#foreground">CSS Color Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-column-break-after">column-break-after <a class="self-link" href="#prop-column-break-after"></a></summary><div><div><div id="prop-column-break-after-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>column-break-after: auto |&#160;always</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>multicol elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-column-break-after-comments">Comments</div><p class="note">
    This property is deprecated.  Use <code><a href="#prop-break-after">break-after</a>:column</code>
    instead.  See the documentation for <a href="/doc/styling#columns">Columns</a> for more details.
    </p></div><div><div id="prop-column-break-after-seealso">See Also</div><ul><li><code><a href="#prop-break-after">break-after</a></code></li></ul></div></div></details>

<details><summary id="prop-column-break-before">column-break-before <a class="self-link" href="#prop-column-break-before"></a></summary><div><div><div id="prop-column-break-before-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>column-break-before: auto |&#160;always</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>multicol elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-column-break-before-comments">Comments</div><p class="note">
    This property is deprecated.  Use <code><a href="#prop-break-before">break-before</a>:column</code>
    instead.  See the documentation for <a href="/doc/styling#columns">Columns</a> for more details.
    </p></div><div><div id="prop-column-break-before-seealso">See Also</div><ul><li><code><a href="#prop-break-before">break-before</a></code></li></ul></div></div></details>

<details><summary id="prop-column-count">column-count <a class="self-link" href="#prop-column-count"></a></summary><div><div><div id="prop-column-count-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>column-count: auto |&#160;<i>number</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>1</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>non-replaced block-level elements (except table elements), table cells, and inline-block elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-column-count-seealso">See Also</div><ul><li><a href="/doc/styling#columns">Columns</a></li></ul></div><div><div id="prop-column-count-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css3-multicol/#cc">CSS Multi-column Layout Module</a></li></ul></div></div></details>

<details><summary id="prop-column-fill">column-fill <a class="self-link" href="#prop-column-fill"></a></summary><div><div><div id="prop-column-fill-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>column-fill: auto |&#160;balance</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>balance</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>multicol elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-column-fill-seealso">See Also</div><ul><li><a href="/doc/styling#columns">Columns</a></li></ul></div><div><div id="prop-column-fill-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css3-multicol/#cf">CSS Multi-column Layout Module</a></li></ul></div></div></details>

<details><summary id="prop-column-gap">column-gap <a class="self-link" href="#prop-column-gap"></a></summary><div><div><div id="prop-column-gap-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>column-gap: <i>length</i> |&#160;<i>percent</i> |&#160;normal</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>multicol elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-column-gap-seealso">See Also</div><ul><li><a href="/doc/styling#columns">Columns</a></li></ul></div><div><div id="prop-column-gap-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css3-multicol/#column-gap">CSS Multi-column Layout Module</a></li></ul></div></div></details>

<details><summary id="prop-column-rule">column-rule <a class="self-link" href="#prop-column-rule"></a></summary><div><div><div id="prop-column-rule-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>column-rule: <i><a href="#prop-column-rule-color">column-rule-color</a></i> ||&#160;<i><a href="#prop-column-rule-style">column-rule-style</a></i> ||&#160;<i><a href="#prop-column-rule-width">column-rule-width</a></i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>multicol elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-column-rule-comments">Comments</div><p>
        The <code>column-rule</code> property is a shorthand for
        setting the following CSS properties:
    </p><ul><li><code><a href="#prop-column-rule-color">column-rule-color</a></code></li><li><code><a href="#prop-column-rule-style">column-rule-style</a></code></li><li><code><a href="#prop-column-rule-width">column-rule-width</a></code></li></ul></div><div><div id="prop-column-rule-seealso">See Also</div><ul><li><a href="/doc/styling#columns">Columns</a></li></ul></div><div><div id="prop-column-rule-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css3-multicol/#column-rule">CSS Multi-column Layout Module</a></li></ul></div></div></details>

<details><summary id="prop-column-rule-color">column-rule-color <a class="self-link" href="#prop-column-rule-color"></a></summary><div><div><div id="prop-column-rule-color-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>column-rule-color: <i>color</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>CurrentColor</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>multicol elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-column-rule-color-seealso">See Also</div><ul><li><a href="/doc/styling#columns">Columns</a></li><li><a href="/doc/graphics#color">Color</a></li></ul></div><div><div id="prop-column-rule-color-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css3-multicol/#crc">CSS Multi-column Layout Module</a></li></ul></div></div></details>

<details><summary id="prop-column-rule-style">column-rule-style <a class="self-link" href="#prop-column-rule-style"></a></summary><div><div><div id="prop-column-rule-style-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>column-rule-style: none |&#160;solid |&#160;dashed |&#160;dotted |&#160;double |&#160;groove |&#160;ridge |&#160;inset |&#160;outset</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>multicol elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-column-rule-style-seealso">See Also</div><ul><li><a href="/doc/styling#columns">Columns</a></li></ul></div><div><div id="prop-column-rule-style-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css3-multicol/#crs">CSS Multi-column Layout Module</a></li></ul></div></div></details>

<details><summary id="prop-column-rule-width">column-rule-width <a class="self-link" href="#prop-column-rule-width"></a></summary><div><div><div id="prop-column-rule-width-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>column-rule-width: thin |&#160;medium |&#160;thick |&#160;<i>length</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>medium</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>multicol elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-column-rule-width-comments">Comments</div><p class="note">
	Even though the initial value for this property is
	<code>medium</code>, no column rule will be shown by default as
	the initial value for <code><a href="#prop-column-rule-style">column-rule-style</a></code>
	is <code>none</code>.
	</p></div><div><div id="prop-column-rule-width-seealso">See Also</div><ul><li><a href="/doc/styling#columns">Columns</a></li></ul></div><div><div id="prop-column-rule-width-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css3-multicol/#crw">CSS Multi-column Layout Module</a></li></ul></div></div></details>

<details><summary id="prop-column-span">column-span <a class="self-link" href="#prop-column-span"></a></summary><div><div><div id="prop-column-span-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>column-span: <i>number</i> |&#160;none |&#160;all</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>1</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>in-flow block-level elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-column-span-comments">Comments</div>
                <p class="note">
	A numeric <code>column-span</code> value other than <code>1</code> will only affect column floats.
    The keyword <code>none</code> is treated as equivalent to the numeric value <code>1</code>.
	</p></div><div><div id="prop-column-span-seealso">See Also</div><ul><li><a href="/doc/styling#columns">Columns</a></li></ul></div><div><div id="prop-column-span-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css3-multicol/#column-span">CSS Multi-column Layout Module</a></li></ul></div></div></details>

<details><summary id="prop-column-width">column-width <a class="self-link" href="#prop-column-width"></a></summary><div><div><div id="prop-column-width-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>column-width: auto |&#160;<i>width</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>non-replaced block-level elements (except table elements), table cells, and inline-block elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-column-width-seealso">See Also</div><ul><li><a href="/doc/styling#columns">Columns</a></li></ul></div><div><div id="prop-column-width-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css3-multicol/#cw">CSS Multi-column Layout Module</a></li></ul></div></div></details>

<details><summary id="prop-columns">columns <a class="self-link" href="#prop-columns"></a></summary><div><div><div id="prop-columns-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>columns: <i><a href="#prop-column-count">column-count</a></i> |&#160;<i><a href="#prop-column-width">column-width</a></i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>1</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>non-replaced block-level elements (except table elements), table cells, and inline-block elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-columns-comments">Comments</div><p>
        The <code>columns</code> property is a shorthand for
        setting the following CSS properties:
    </p><ul><li><code><a href="#prop-column-count">column-count</a></code></li><li><code><a href="#prop-column-width">column-width</a></code></li></ul></div><div><div id="prop-columns-seealso">See Also</div><ul><li><a href="/doc/styling#columns">Columns</a></li></ul></div><div><div id="prop-columns-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css3-multicol/#columns">CSS Multi-column Layout Module</a></li></ul></div></div></details>

<details><summary id="prop-content">content <a class="self-link" href="#prop-content"></a></summary><div><div><div id="prop-content-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>content: normal |&#160;<span class="ext">flow(&#160;<i>name</i>, <i>page-policy</i>?&#160;)</span> |&#160;[ "string" |&#160;url(&#160;<i>filename</i>&#160;) |&#160;counter(&#160;<i>name</i>, <i>counter-style</i>?, <i>page-policy</i>?&#160;) |&#160;counters(&#160;<i>name</i>, "separator", <i>counter-style</i>?, <i>page-policy</i>?&#160;) |&#160;target-counter(&#160;<i>url</i>, <i>counter</i>, <i>counter-style</i>?&#160;) |&#160;target-counters(&#160;<i>url</i>, <i>counter</i>, "separator", <i>counter-style</i>?&#160;) |&#160;target-content(&#160;<i>url</i>&#160;) |&#160;<span class="ext">leader(&#160;["..." |&#160;dotted |&#160;solid |&#160;space], <i>length</i>?&#160;)</span> |&#160;string(&#160;<i>ident</i>, <i>page-policy</i>?&#160;) |&#160;content(&#160;&#160;) |&#160;<span class="ext">prince-base-url(&#160;&#160;)</span> |&#160;<span class="ext">prince-script(&#160;<i>ident</i>, <i>content</i>?&#160;)</span> |&#160;<span class="ext">prince-glyph-index(&#160;<i>number</i>&#160;)</span> |&#160;<span class="ext">prince-fallback(&#160;<i>url</i>&#160;)</span> [ , <i>content</i>+ ]? |&#160;element(&#160;<i>name</i>&#160;) |&#160;prince-expansion-text(&#160;<i>expansion</i>, <i>abbreviation</i> ) ]+</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements, tree-abiding pseudo-elements, and page regions</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-content-comments">Comments</div><p>
    The <code>content</code> property can be used to insert text and other content
    into the original document.  The uses are very wide-ranging and are treated in
    more depth in the <a href="/doc/gen-content">Generated Content</a> section.
    </p><p>
    Several ways of creating content are here defined by means of functions - the
    detailed explanation can be found in the <a href="/doc/gen-content#generated-content-functions">Generated Content Functions</a>
    section.
    </p></div><div><div id="prop-content-seealso">See Also</div><ul><li><a href="/doc/gen-content#generated-content-functions">Generated Content Functions</a></li><li><a href="/doc/gen-content">Generated Content</a></li><li><a href="/doc/gen-content#generated-content-in-page-regions">Generated content in page regions</a></li><li><a href="/doc/paged#copying-content-from-the-document">Copying content from the document</a></li><li><a href="/doc/paged#taking-elements-from-the-document">Taking elements from the document</a></li><li><a href="/doc/gen-content#counters-and-numbering">Counters and Numbering</a></li><li><a href="/doc/gen-content#cross-references">Cross-references</a></li></ul></div><div><div id="prop-content-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-content-3/#content-property">CSS Generated Content Module Level 3</a></li><li><a href="https://www.w3.org/TR/css-gcpm-3/#running-elements">CSS Generated Content for Paged Media Module</a></li><li><a href="https://books.spec.whatwg.org/#the-''target-counter''-and-''target-counters''-values">CSS Books</a></li></ul></div></div></details>

<details><summary id="prop-counter-increment">counter-increment <a class="self-link" href="#prop-counter-increment"></a></summary><div><div><div id="prop-counter-increment-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>counter-increment: none |&#160;[ <i>name</i> <i>number</i>? ]+</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements, or <code>@page</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-counter-increment-comments">Comments</div><p>
	For information about the use of the <code>counter-increment</code>
	property see the documentation for <a href="/doc/gen-content#counters-and-numbering">Counters and Numbering</a>.
	</p></div><div><div id="prop-counter-increment-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/generate.html#propdef-counter-increment">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-counter-reset">counter-reset <a class="self-link" href="#prop-counter-reset"></a></summary><div><div><div id="prop-counter-reset-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>counter-reset: none |&#160;[ <i>name</i> <i>number</i>? ]+</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements, or <code>@page</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-counter-reset-comments">Comments</div><p>
	For information about the use of the <code>counter-reset</code>
	property see the documentation for <a href="/doc/gen-content#counters-and-numbering">Counters and Numbering</a>.
	</p></div><div><div id="prop-counter-reset-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/generate.html#propdef-counter-reset">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-direction">direction <a class="self-link" href="#prop-direction"></a></summary><div><div><div id="prop-direction-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>direction: ltr |&#160;rtl</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>ltr</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div /><div><div id="prop-direction-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-writing-modes-3/#direction">CSS Writing Modes Level 3</a></li></ul></div></div></details>

<details><summary id="prop-display">display <a class="self-link" href="#prop-display"></a></summary><div><div><div id="prop-display-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>display: inline |&#160;block |&#160;flex |&#160;inline-flex |&#160;none |&#160;list-item |&#160;run-in |&#160;table |&#160;table-header-group |&#160;table-footer-group |&#160;table-row-group |&#160;table-row |&#160;table-cell |&#160;table-caption |&#160;table-column |&#160;table-column-group |&#160;inline-block |&#160;inline-table</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>inline</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-display-seealso">See Also</div><ul><li><a href="/doc/styling#display">Display</a></li></ul></div><div><div id="prop-display-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visuren.html#display-prop">CSS 2.1</a></li><li><a href="https://www.w3.org/TR/css-flexbox-1/#flex-containers">CSS Flexible Box Layout Module Level 1</a></li></ul></div></div></details>

<details><summary id="prop-dominant-baseline">dominant-baseline <a class="self-link" href="#prop-dominant-baseline"></a></summary><div><div><div id="prop-dominant-baseline-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>dominant-baseline: auto |&#160;use-script |&#160;no-change |&#160;reset-size |&#160;ideographic |&#160;alphabetic |&#160;hanging |&#160;mathematical |&#160;central |&#160;middle |&#160;text-after-edge |&#160;text-before-edge</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>SVG elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-dominant-baseline-comments">Comments</div><p>
	The <code>dominant-baseline</code> property only applies to SVG text elements.
	</p></div><div><div id="prop-dominant-baseline-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/SVG11/text.html#DominantBaselineProperty">SVG 1.1</a></li></ul></div></div></details>

<details><summary id="prop-empty-cells">empty-cells <a class="self-link" href="#prop-empty-cells"></a></summary><div><div><div id="prop-empty-cells-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>empty-cells: show |&#160;hide</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>show</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>table-cell elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div /><div><div id="prop-empty-cells-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/tables.html#empty-cells">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-fill">fill <a class="self-link" href="#prop-fill"></a></summary><div><div><div id="prop-fill-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>fill: none |&#160;<i>color</i> |&#160;url(&#160;<i>paint-server</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>black</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>SVG elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-fill-comments">Comments</div><p>
	The <code>fill</code> property only applies to SVG elements.
	</p></div><div><div id="prop-fill-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/SVG11/painting.html#FillProperty">SVG 1.1</a></li></ul></div></div></details>

<details><summary id="prop-fill-opacity">fill-opacity <a class="self-link" href="#prop-fill-opacity"></a></summary><div><div><div id="prop-fill-opacity-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>fill-opacity: <i>number</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>1</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>SVG elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-fill-opacity-comments">Comments</div><p>
	The <code>fill-opacity</code> property only applies to SVG elements.
	</p></div><div><div id="prop-fill-opacity-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/SVG11/painting.html#FillOpacityProperty">SVG 1.1</a></li></ul></div></div></details>

<details><summary id="prop-fill-rule">fill-rule <a class="self-link" href="#prop-fill-rule"></a></summary><div><div><div id="prop-fill-rule-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>fill-rule: nonzero |&#160;evenodd</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>nonzero</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>SVG elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-fill-rule-comments">Comments</div><p>
	The <code>fill-rule</code> property only applies to SVG elements.
	</p></div><div><div id="prop-fill-rule-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/SVG11/painting.html#FillRuleProperty">SVG 1.1</a></li></ul></div></div></details>

<details><summary id="prop-filter">filter <a class="self-link" href="#prop-filter"></a></summary><div><div><div id="prop-filter-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>filter: none |&#160;[ url(&#160;<i>url</i>&#160;) |&#160;blur(&#160;<i>length</i>&#160;) |&#160;brightness(&#160;<i>number</i> |&#160;<i>percent</i>&#160;) |&#160;contrast(&#160;<i>number</i> |&#160;<i>percent</i>&#160;) |&#160;drop-shadow(&#160;<i>length</i>{1..3}, <i>color</i>?&#160;) |&#160;grayscale(&#160;<i>number</i> |&#160;<i>percent</i>&#160;) |&#160;hue-rotate(&#160;<i>angle</i>&#160;) |&#160;invert(&#160;<i>number</i> |&#160;<i>percent</i>&#160;) |&#160;opacity(&#160;<i>number</i> |&#160;<i>percent</i>&#160;) |&#160;saturate(&#160;<i>number</i> |&#160;<i>percent</i>&#160;) |&#160;sepia(&#160;<i>number</i> |&#160;<i>percent</i>&#160;) ]+</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-filter-comments">Comments</div><p>The <code>filter</code> property provides graphical effects like blurring,
	saturating or color shifting an element.  For more details see the
    <a href="/doc/graphics#filters">Filters</a> section.
	</p></div><div><div id="prop-filter-seealso">See Also</div><ul><li><a href="/doc/graphics#filters">Filters</a></li></ul></div><div><div id="prop-filter-spec">Specification</div><ul><li><a href="https://drafts.fxtf.org/filters/#FilterProperty">Filter Effects Module Level 1</a></li></ul></div></div></details>

<details><summary id="prop-flex">flex <a class="self-link" href="#prop-flex"></a></summary><div><div><div id="prop-flex-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>flex: none |&#160;[ <i><a href="#prop-flex-grow">flex-grow</a></i> <i><a href="#prop-flex-shrink">flex-shrink</a></i>? ||&#160;<i><a href="#prop-flex-basis">flex-basis</a></i> ]</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>1 0 auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>flex items</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-flex-comments">Comments</div><p>
        The <code>flex</code> property is a shorthand for
        setting the following CSS properties:
    </p><ul><li><code><a href="#prop-flex-grow">flex-grow</a></code></li><li><code><a href="#prop-flex-shrink">flex-shrink</a></code></li><li><code><a href="#prop-flex-basis">flex-basis</a></code></li></ul></div><div><div id="prop-flex-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-flexbox-1/#flex-property">CSS Flexible Box Layout Module Level 1</a></li></ul></div></div></details>

<details><summary id="prop-flex-basis">flex-basis <a class="self-link" href="#prop-flex-basis"></a></summary><div><div><div id="prop-flex-basis-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>flex-basis: content |&#160;<i>width</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>flex containers</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-flex-basis-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-flexbox-1/#flex-basis-property">CSS Flexible Box Layout Module Level 1</a></li></ul></div></div></details>

<details><summary id="prop-flex-direction">flex-direction <a class="self-link" href="#prop-flex-direction"></a></summary><div><div><div id="prop-flex-direction-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>flex-direction: row |&#160;row-reverse |&#160;column |&#160;column-reverse</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>row</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>flex containers</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-flex-direction-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-flexbox-1/#flex-direction-property">CSS Flexible Box Layout Module Level 1</a></li></ul></div></div></details>

<details><summary id="prop-flex-grow">flex-grow <a class="self-link" href="#prop-flex-grow"></a></summary><div><div><div id="prop-flex-grow-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>flex-grow: <i>number</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>flex items</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-flex-grow-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-flexbox-1/#flex-grow-property">CSS Flexible Box Layout Module Level 1</a></li></ul></div></div></details>

<details><summary id="prop-flex-shrink">flex-shrink <a class="self-link" href="#prop-flex-shrink"></a></summary><div><div><div id="prop-flex-shrink-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>flex-shrink: <i>number</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>1</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>flex items</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-flex-shrink-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-flexbox-1/#flex-shrink-property">CSS Flexible Box Layout Module Level 1</a></li></ul></div></div></details>

<details><summary id="prop-flex-wrap">flex-wrap <a class="self-link" href="#prop-flex-wrap"></a></summary><div><div><div id="prop-flex-wrap-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>flex-wrap: nowrap |&#160;wrap |&#160;wrap-reverse</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>nowrap</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>flex containers</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-flex-wrap-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-flexbox-1/#flex-wrap-property">CSS Flexible Box Layout Module Level 1</a></li></ul></div></div></details>

<details><summary id="prop-flex-flow">flex-flow <a class="self-link" href="#prop-flex-flow"></a></summary><div><div><div id="prop-flex-flow-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>flex-flow: <i><a href="#prop-flex-direction">flex-direction</a></i> ||&#160;<i><a href="#prop-flex-wrap">flex-wrap</a></i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>row nowrap</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>flex containers</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-flex-flow-comments">Comments</div><p>
        The <code>flex-flow</code> property is a shorthand for
        setting the following CSS properties:
    </p><ul><li><code><a href="#prop-flex-direction">flex-direction</a></code></li><li><code><a href="#prop-flex-wrap">flex-wrap</a></code></li></ul></div><div><div id="prop-flex-flow-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-flexbox-1/#flex-flow-property">CSS Flexible Box Layout Module Level 1</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-float">float* <a class="self-link" href="#prop-float"></a></summary><div><div><div id="prop-float-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>float: <br />&#160;&#160;&#160;<i class="ext">float-reference</i> ||&#160;<i class="ext">float-placement</i> ||&#160;<i class="ext">float-modifier</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-float-comments">Comments</div><p>
	Traditionally, floats move in the inline direction, left or right.  Prince extends
    this behavior with page and column floats that move in the block direction, specifying that
    an element should be floated to the top or to the bottom, or to the nearest edge
    of the column.
	</p><p>
    Prince's implementation of <code>float</code> is a shorthand for the following properties:
	</p>
    <ul><li><code><a href="#prop-float-reference">float-reference</a></code></li><li><code><a href="#prop-float-placement">float-placement</a></code></li><li><code><a href="#prop-float-modifier">float-modifier</a></code></li></ul>
    <p>
    Note that when setting only the value for <code><i>float-reference</i></code>, i.e.
    <code>column</code> or <code>page</code>, the default value for <code><i>float-placement</i></code>
    is <code>top-bottom</code> and differs from its initial value.  This means that Prince
    will try to float the element to the top of the indicated float reference, and if that
    should not be possible, it would be floated to the bottom.
    </p><p>
    On a vertical float to the top or bottom of the float reference, a vertical margin
    set to the value <code>auto</code> will expand and thereby repal other content.  By
    setting top and bottom margins to <code>auto</code>, the element is vertically centered.
    </p><p>
    Please also see the property <code><a href="#prop-margin-alt">margin-alt</a></code> for
    alternative margins for top or bottom floated elements.
    </p><p class="note">
        The property <a href="#prop-prince-float"><code>-prince-float</code></a> can be used as an alias.
        </p></div><div><div id="prop-float-seealso">See Also</div><ul><li><a href="/doc/styling#floats">Floats</a></li></ul></div><div><div id="prop-float-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visuren.html#float-position">CSS 2.1</a></li><li><a href="https://www.w3.org/TR/css-gcpm-3/#footnotes">CSS Generated Content for Paged Media Module</a></li><li><a href="https://figures.spec.whatwg.org/">CSS Figures</a></li><li><a href="https://books.spec.whatwg.org/#footnotes">CSS Books</a></li><li><a href="https://drafts.csswg.org/css-page-floats/">CSS Page Floats</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-float-defer-column">float-defer-column* <a class="self-link" href="#prop-float-defer-column"></a></summary><div><div><div id="prop-float-defer-column-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>float-defer-column: none |&#160;inside |&#160;outside |&#160;last |&#160;<i>integer</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all floated elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-float-defer-column-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>figure {
&nbsp;&nbsp;float: top;
&nbsp;&nbsp;float-defer-column: 1;
}</code></pre></div></div></div><div><div id="prop-float-defer-column-comments">Comments</div><p>
        The <code>float-defer-column</code> property defines the number of columns that the float should be deferred.</p><p class="note">
        The property <a href="#prop-prince-float-defer-column"><code>-prince-float-defer-column</code></a> can be used as an alias.
        </p></div><div><div id="prop-float-defer-column-seealso">See Also</div><ul><li><a href="/doc/styling#floats">Floats</a></li></ul></div><div><div id="prop-float-defer-column-spec">Specification</div><ul><li><a href="https://figures.spec.whatwg.org/#float-defer-column">CSS Figures</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-float-defer-page">float-defer-page* <a class="self-link" href="#prop-float-defer-page"></a></summary><div><div><div id="prop-float-defer-page-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>float-defer-page: none |&#160;[ <i>integer</i> ||&#160;[ left |&#160;right ]]</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all floated elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-float-defer-page-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>figure {
&nbsp;&nbsp;float: top;
&nbsp;&nbsp;float-defer-page: right;
}</code></pre></div></div></div><div><div id="prop-float-defer-page-comments">Comments</div><p>
        The <code>float-defer-page</code> property specifies whether the float is placed after previous page floats have been placed, or in another float reference container.</p><p class="note">
        The property <a href="#prop-prince-float-defer-page"><code>-prince-float-defer-page</code></a> can be used as an alias.
        </p></div><div><div id="prop-float-defer-page-seealso">See Also</div><ul><li><a href="/doc/styling#floats">Floats</a></li></ul></div><div><div id="prop-float-defer-page-spec">Specification</div><ul><li><a href="https://figures.idea.whatwg.org/#float-defer-page">CSS Figures</a></li><li><a href="https://drafts.csswg.org/css-page-floats/#float-defer-property">CSS Page Floats</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-float-modifier">float-modifier* <a class="self-link" href="#prop-float-modifier"></a></summary><div><div><div id="prop-float-modifier-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>float-modifier: normal |&#160;unless-fit</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all floated elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-float-modifier-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>figure {
&nbsp;&nbsp;float: top;
&nbsp;&nbsp;float-modifier: unless-fit;
}</code></pre></div></div></div><div><div id="prop-float-modifier-comments">Comments</div><p>
        The <code>float-modifier</code> property expresses a conditional
        with the use of the keyword <code>unless-fit</code>: the element
        is only floated if it would otherwise cause a page or column break.
        </p><p class="note">
        The property <a href="#prop-prince-float-modifier"><code>-prince-float-modifier</code></a> can be used as an alias.
        </p></div><div><div id="prop-float-modifier-seealso">See Also</div><ul><li><a href="/doc/styling#floats">Floats</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-float-placement">float-placement* <a class="self-link" href="#prop-float-placement"></a></summary><div><div><div id="prop-float-placement-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>float-placement: none |&#160;left |&#160;right |&#160;<span class="ext">inside</span> |&#160;<span class="ext">outside</span>
&#160;&#160;&#160;&#160;|&#160;<span class="ext">top</span> |&#160;<span class="ext">bottom</span> |&#160;<span class="ext">top-bottom</span> |&#160;<span class="ext">snap</span>
&#160;&#160;&#160;&#160;|&#160;footnote |&#160;<span class="ext">inline-footnote</span></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all floated elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-float-placement-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>figure {
&nbsp;&nbsp;float-reference: page;
&nbsp;&nbsp;float-placement: bottom;
}</code></pre></div></div></div><div><div id="prop-float-placement-comments">Comments</div><p>
        The <code>float-placement</code> property defines how a floated element
        is positioned.  Its values are basically the values of the standard
        <code>float</code> property, plus some Prince-specific extensions.
        </p><p>
        The values <code>top</code> or <code>bottom</code> float the element to, respectively,
        the top or the bottom of the float reference (a page, or a column), while
        <code>top-bottom</code> tries to float it to the top, and if that should not be possible,
        it is floated to the bottom.
        </p><p>
        Note that the default value for <code>float-placement</code>, when omitted in the
        <code><a href="#prop-float">float</a></code> shorthand property, is
        <code>top-bottom</code>, and differs from its initial value.  This means that Prince
        will try to float the element to the top of the indicated float reference, and if that
        should not be possible, it would be floated to the bottom.
        </p><p>
        The value <code>snap</code> floats the element to the nearest "end", i.e.
        to the top or bottom of the page or of the column.
        </p><p>
        The values <code>inside</code> and <code>outside</code> float the element respectively
        to the inside or outside of a spread: <code>inside</code> moves the element to
        the right when used on a left-facing page, and to the left on a right-facing page;
        <code>outside</code> moves the element to the left when used on a left-facing
        page, and to the right on a right-facing page.
        </p><p>
        The value <code>footnote</code> transforms the element into a footnote - the footnote
        marker is placed outside of the block of the footnote.  The value <code>inline-footnote</code>
        transforms the element into a footnote and places the footnote marker inside of
        the block of the footnote.
        </p><p class="note">
        The property <a href="#prop-prince-float-placement"><code>-prince-float-placement</code></a> can be used as an alias.
        </p></div><div><div id="prop-float-placement-seealso">See Also</div><ul><li><code><a href="#prop-float">float</a></code></li><li><a href="/doc/styling#floats">Floats</a></li><li><a href="/doc/paged#page-regions">Page Regions</a></li></ul></div><div><div id="prop-float-placement-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visuren.html#float-position">CSS 2.1</a></li><li><a href="https://www.w3.org/TR/css-gcpm-3/#footnotes">CSS Generated Content for Paged Media Module</a></li><li><a href="https://figures.spec.whatwg.org/">CSS Figures</a></li><li><a href="https://books.spec.whatwg.org/#footnotes">CSS Books</a></li><li><a href="https://drafts.csswg.org/css-page-floats/">CSS Page Floats</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-float-policy">float-policy* <a class="self-link" href="#prop-float-policy"></a></summary><div><div><div id="prop-float-policy-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>float-policy: normal |&#160;in-order</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all floated elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-float-policy-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>figure {
&nbsp;&nbsp;float: bottom;
&nbsp;&nbsp;float-policy: in-order;
}</code></pre></div></div></div><div><div id="prop-float-policy-comments">Comments</div><p>
        The <code>float-policy</code> property defines the policy adopted when
        floating an element.  The value <code>in-order</code> imposes that page
        floats must be shown in source order - <code>normal</code> adds no extra
        constraints to the float.</p><p class="note">
        The property <a href="#prop-prince-float-policy"><code>-prince-float-policy</code></a> can be used as an alias.
        </p></div><div><div id="prop-float-policy-seealso">See Also</div><ul><li><a href="/doc/styling#floats">Floats</a></li></ul></div><div><div id="prop-float-policy-spec">Specification</div><ul><li><a href="https://figures.spec.whatwg.org/#page-float-preferences:-float-policy">CSS Figures</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-float-reference">float-reference* <a class="self-link" href="#prop-float-reference"></a></summary><div><div><div id="prop-float-reference-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>float-reference: column |&#160;page</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>column</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all floated elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-float-reference-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>figure {
&nbsp;&nbsp;float: top;
&nbsp;&nbsp;float-reference: page;
}</code></pre></div></div></div><div><div id="prop-float-reference-comments">Comments</div><p>
        The <code>float-reference</code> property defines the reference context for
        the float, i.e. whether the element should be floated to the top of the
        column, or of the page.</p><p>
        Please note that the initial value is <code>column</code> - the style rule
        <code>float: top</code> will create a column float in a multicol context,
        rather than a page float.</p><p class="note">
        The property <a href="#prop-prince-float-reference"><code>-prince-float-reference</code></a> can be used as an alias.
        </p></div><div><div id="prop-float-reference-seealso">See Also</div><ul><li><a href="/doc/styling#floats">Floats</a></li></ul></div><div><div id="prop-float-reference-spec">Specification</div><ul><li><a href="https://figures.spec.whatwg.org/#setting-the-page-float-reference:-float-reference">CSS Figures</a></li><li><a href="https://drafts.csswg.org/css-page-floats/#float-reference-property">CSS Page Floats</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-float-tail">float-tail* <a class="self-link" href="#prop-float-tail"></a></summary><div><div><div id="prop-float-tail-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>float-tail: keep |&#160;fill-page</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>keep</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all floated elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-float-tail-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>figure {
&nbsp;&nbsp;float: top;
&nbsp;&nbsp;float-tail: fill-page;
}</code></pre></div></div></div><div><div id="prop-float-tail-comments">Comments</div><p>
        The <code>float-tail</code> property instructs Prince how to deal with page
        floats that end up past the end of normal content: with the value
        <code>fill-page</code>, Prince will try to fill the last page, but discard
        any page floats that would create more pages.</p><p class="note">
        The property <a href="#prop-prince-float-tail"><code>-prince-float-tail</code></a> can be used as an alias.
        </p></div><div><div id="prop-float-tail-seealso">See Also</div><ul><li><a href="/doc/styling#floats">Floats</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-flow">flow*  <a class="self-link" href="#prop-flow"></a></summary><div><div><div id="prop-flow-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>flow: normal |&#160;static(&#160;<i>name</i>, [ start |&#160;current ]?&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-flow-comments">Comments</div><p>
    This property is used to remove elements from the normal flow of the
    document, to be placed in a page region with <code><a href="#prop-content">content</a>: flow()</code>,
    in order to create running page headers and footers.
    </p><p>
    The optional <code>start</code> argument (default is <code>current</code>)
    makes the fetched content available, as if it were fetched from the start
    of the document.
    </p><p>
    See the documentation for <a href="/doc/gen-content#taking-elements-from-the-document">Taking elements from the document</a> for more details.
    </p><p class="note">
        The property <a href="#prop-prince-flow"><code>-prince-flow</code></a> can be used as an alias.
        </p></div><div><div id="prop-flow-seealso">See Also</div><ul><li><a href="/doc/paged#page-regions">Page regions</a></li><li><a href="/doc/paged#taking-elements-from-the-document">Taking elements from the document</a></li><li><code><a href="#prop-content">content</a></code></li></ul></div><div><div id="prop-flow-spec">Specification</div><ul><li><a href="https://books.spec.whatwg.org/#flowing-content-to-a-named-area:-'flow'">CSS Books</a></li></ul></div></div></details>

<details><summary id="prop-font">font <a class="self-link" href="#prop-font"></a></summary><div><div><div id="prop-font-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>font: <i><a href="#prop-font-style">font-style</a></i>? <i><a href="#prop-font-variant">font-variant</a></i>? <i><a href="#prop-font-weight">font-weight</a></i>? <i><a href="#prop-font-size">font-size</a></i> [  /  <i><a href="#prop-line-height">line-height</a></i> ]? <i><a href="#prop-font-family">font-family</a></i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>12pt serif</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-font-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>font: bold 14pt/16pt Georgia, "Times New Roman", serif</code></pre></div></div></div><div><div id="prop-font-comments">Comments</div><p>
        The <code>font</code> property is a shorthand for
        setting the following CSS properties:
    </p><ul><li><code><a href="#prop-font-family">font-family</a></code></li><li><code><a href="#prop-font-size">font-size</a></code></li><li><code><a href="#prop-font-stretch">font-stretch</a></code></li><li><code><a href="#prop-font-style">font-style</a></code></li><li><code><a href="#prop-font-variant">font-variant</a></code></li><li><code><a href="#prop-font-weight">font-weight</a></code></li><li><code><a href="#prop-line-height">line-height</a></code></li></ul></div><div><div id="prop-font-seealso">See Also</div><ul><li><a href="/doc/styling#text-formatting">Text formatting</a></li></ul></div><div><div id="prop-font-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/fonts.html#font-shorthand">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-font-family">font-family <a class="self-link" href="#prop-font-family"></a></summary><div><div><div id="prop-font-family-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>font-family: [ serif |&#160;sans-serif |&#160;monospace |&#160;<i>name</i> |&#160;"name" ]# <span class="ext">prince-no-fallback</span>?</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>serif</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements / <code>@font-face</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-font-family-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>font-family: Georgia, "Times New Roman", serif</code></pre></div><div class="programlisting"><pre><code>font-family: MyFont, prince-no-fallback</code></pre></div></div></div><div><div id="prop-font-family-comments">Comments</div><p>
	The special keyword <code>prince-no-fallback</code> triggers a warning if
    any glyphs are not found in the specified font, whereas normally Prince
    would silently fallback to serif.
	</p><p>
    When used as a descriptor for the
    <a href="/doc/css-refs#at-font-face"><code>@font-face</code></a> at-rule,
    <code>font-family</code> defines the font family name that will be used in
    all CSS font family name matching.  It is required for the <code>@font-face</code>
    rule to be valid.
    </p></div><div><div id="prop-font-family-seealso">See Also</div><ul><li><a href="/doc/styling#fonts">Fonts</a></li><li><a href="/doc/styling#redefining-the-generic-font-families">Redefining the generic font families</a></li><li><a href="/doc/styling#text-formatting">Text formatting</a></li></ul></div><div><div id="prop-font-family-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/fonts.html#propdef-font-family">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-font-kerning">font-kerning <a class="self-link" href="#prop-font-kerning"></a></summary><div><div><div id="prop-font-kerning-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>font-kerning: auto |&#160;normal |&#160;none</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-font-kerning-comments">Comments</div><p>The value <code>none</code> disables font kerning.  <a href="#prop-font-variant">font-variant: prince-no-kerning</a> accomplishes the same.</p></div><div><div id="prop-font-kerning-seealso">See Also</div><ul><li><a href="/doc/styling#opentype-features-in-prince">OpenType Features in Prince</a></li></ul></div><div><div id="prop-font-kerning-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-fonts-3/#font-kerning-prop">CSS Fonts Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-font-size">font-size <a class="self-link" href="#prop-font-size"></a></summary><div><div><div id="prop-font-size-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>font-size: <i>length</i> |&#160;<i>percent</i> |&#160;smaller |&#160;larger |&#160;xx-small |&#160;x-small |&#160;small |&#160;medium |&#160;large |&#160;x-large |&#160;xx-large</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>12pt</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div /><div><div id="prop-font-size-seealso">See Also</div><ul><li><a href="/doc/styling#text-formatting">Text formatting</a></li></ul></div><div><div id="prop-font-size-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/fonts.html#propdef-font-size">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-font-stretch">font-stretch <a class="self-link" href="#prop-font-stretch"></a></summary><div><div><div id="prop-font-stretch-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>font-stretch: ultra-condensed |&#160;extra-condensed |&#160;condensed |&#160;semi-condensed |&#160;normal |&#160;semi-expanded |&#160;expanded |&#160;extra-expanded |&#160;ultra-expanded |&#160;wider |&#160;narrower</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-font-stretch-comments">Comments</div><p>
	The <code>font-stretch</code> property is not supported for system
	fonts on Windows.
	</p></div><div><div id="prop-font-stretch-seealso">See Also</div><ul><li><a href="/doc/styling#text-formatting">Text formatting</a></li></ul></div><div><div id="prop-font-stretch-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-fonts-3/#font-stretch-prop">CSS Fonts Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-font-style">font-style <a class="self-link" href="#prop-font-style"></a></summary><div><div><div id="prop-font-style-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>font-style: normal |&#160;italic</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div /><div><div id="prop-font-style-seealso">See Also</div><ul><li><a href="/doc/styling#text-formatting">Text formatting</a></li></ul></div><div><div id="prop-font-style-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/fonts.html#propdef-font-style">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-font-variant">font-variant <a class="self-link" href="#prop-font-variant"></a></summary><div><div><div id="prop-font-variant-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>font-variant:
&#160;&#160;&#160;normal
&#160;&#160;&#160;&#160;&#160;|&#160;[ [small-caps |&#160;all-small-caps] ||&#160;[common-ligatures |&#160;no-common-ligatures] ||&#160;[discretionary-ligatures |&#160;no-discretionary-ligatures] ||&#160;[historical-ligatures |&#160;no-historical-ligatures] ||&#160;[contextual |&#160;no-contextual]
&#160;&#160;&#160;&#160;&#160;||&#160;[lining-nums |&#160;oldstyle-nums] ||&#160;[proportional-nums |&#160;tabular-nums] ||&#160;[diagonal-fractions |&#160;stacked-fractions] ||&#160;ordinal ||&#160;slashed-zero
&#160;&#160;&#160;&#160;&#160;||&#160;<span class="ext">prince-no-kerning</span> ||&#160;<span class="ext">prince-opentype(&#160;[ <i>feature</i> ]+&#160;) ]</span></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-font-variant-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>&lt;span style="font-family: SpecialFont; font-variant: prince-opentype(aalt(2))"&gt;&amp;amp;&lt;/span&gt;</code></pre></div><div class="programlisting"><pre><code>font-variant: prince-opentype(onum, ccmp, liga)</code></pre></div><div class="programlisting"><pre><code>font-variant: historical-ligatures all-small-caps;</code></pre></div></div></div><div><div id="prop-font-variant-comments">Comments</div><p>The <code>prince-opentype()</code> function takes a comma-separated list of
    OpenType features. Microsoft has a list of the OpenType feature names
    <a href="https://www.microsoft.com/typography/otspec/featurelist.htm">here</a>.</p><p>Some OpenType features like <code>aalt</code> (access all alternates) can be
    used to select one of many optional glyphs, eg. a font might provide three different
    ampersand glyphs and allow the author to choose which one. An optional integer
    parameter is how you do this, however it requires intimate details of exactly
    which font is being used and what glyphs it provides.</p><p>The OpenType <code>feature</code> can be written either in function form (<code>feature(N)</code>)
    or in concatenated form (<code>featureN</code>).</p><p>The keyword <code>prince-no-kerning</code> disables the <code>kern</code>
    OpenType feature, which defines font kerning.  The property <a href="#prop-font-kerning">font-kerning</a> is the better way of achieving the same.</p><p>This property can be used as a shorthand for the properties <a href="#prop-font-variant-caps">font-variant-caps</a>, <a href="#prop-font-variant-ligatures">font-variant-ligatures</a> and <a href="#prop-font-variant-numeric">font-variant-numeric</a>.</p></div><div><div id="prop-font-variant-seealso">See Also</div><ul><li><a href="/doc/cookbook#typographic-ligatures">Typographic Ligatures</a></li><li><a href="/doc/styling#opentype-features-in-prince">OpenType Features in Prince</a></li></ul></div><div><div id="prop-font-variant-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/fonts.html#propdef-font-variant">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-font-variant-caps">font-variant-caps <a class="self-link" href="#prop-font-variant-caps"></a></summary><div><div><div id="prop-font-variant-caps-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>font-variant-caps: normal |&#160;small-caps |&#160;all-small-caps</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-font-variant-caps-comments">Comments</div><p>The value <code>small-caps</code> enables the display of small capitals, i.e. the OpenType feature <code>smcp</code>.</p><p>The value <code>all-small-caps</code> enables the display of small capitals for both uppercase and lowercase letters, i.e. the OpenType features <code>c2pc</code> and <code>smcp</code>.</p><p>The property <a href="#prop-font-variant">font-variant</a> can be used as a shorthand for this property.</p></div><div><div id="prop-font-variant-seealso">See Also</div><ul><li><a href="/doc/styling#opentype-features-in-prince">OpenType Features in Prince</a></li></ul></div><div><div id="prop-font-variant-caps-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-fonts-3/#font-variant-caps-prop">CSS Fonts Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-font-variant-ligatures">font-variant-ligatures <a class="self-link" href="#prop-font-variant-ligatures"></a></summary><div><div><div id="prop-font-variant-ligatures-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>font-variant-ligatures: normal |&#160;none |&#160;[ [common-ligatures |&#160;no-common-ligatures] ||&#160;[discretionary-ligatures |&#160;no-discretionary-ligatures ] ||&#160;[ historical-ligatures |&#160;no-historical-ligatures ] ||&#160;[ contextual |&#160;no-contextual] ]</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-font-variant-ligatures-comments">Comments</div><p>This property allows for fine-tuning of various ligature types.</p><p>The value <code>common-ligatures</code> enables display of common ligatures, i.e. the OpenType features <code>liga</code> and <code>clig</code>. Note that for OpenType fonts, common ligatures are enabled by default.</p><p>The value <code>discreationary-ligatures</code> enables the display of discretionary ligatures, i.e. the OpenTypes feature <code>dlig</code>.</p><p>The value <code>historical-ligatures</code> enables the display of historical ligatures, i.e. the OpenType feature <code>hlig</code>.</p><p>The value <code>contextual</code> enables the context of contextual alternatives, i.e. the OpenType feature <code>calt</code>.</p><p>The values starting with <code>no-*</code> disable the display of the features.</p><p>The property <a href="#prop-font-variant">font-variant</a> can be used as a shorthand for this property.</p></div><div><div id="prop-font-variant-seealso">See Also</div><ul><li><a href="/doc/styling#opentype-features-in-prince">OpenType Features in Prince</a></li><li><a href="/doc/cookbook#typographic-ligatures">Typographic Ligatures</a></li></ul></div><div><div id="prop-font-variant-ligatures-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-fonts-3/#font-variant-ligatures-prop">CSS Fonts Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-font-variant-numeric">font-variant-numeric <a class="self-link" href="#prop-font-variant-numeric"></a></summary><div><div><div id="prop-font-variant-numeric-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>font-variant-numeric: normal |&#160;[ [lining-nums | oldstyle-nums] ||&#160;[proportional-nums | tabular-nums] ||&#160;[diagonal-fractions | stacked-fractions] ||&#160;ordinal ||&#160;slashed-zero ]</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-font-variant-numeric-comments">Comments</div><p>This property specifies control over numeric forms.</p><p>The value <code>lining-nums</code> enables the display of lining numerals, i.e. the OpenTypes feature <code>lnum</code>.</p><p>The value <code>oldstyle-nums</code> enables the display of old-style numerals, i.e. the OpenTypes feature <code>onum</code>.</p><p>The value <code>proportional-nums</code> enables the display of proportional numerals, i.e. the OpenTypes feature <code>pnum</code>.</p><p>The value <code>tabular-nums</code> enables the display of tabular numerals, i.e. the OpenTypes feature <code>tnum</code>.</p><p>The value <code>diagonal-fractions</code> enables the display of lining diagonal fractions, i.e. the OpenTypes feature <code>frac</code>.</p><p>The value <code>stacked-fractions</code> enables the display of lining stacked fractions, i.e. the OpenTypes feature <code>afrc</code>.</p><p>The value <code>ordinal</code> enables the display of letter forms used with ordinal numbers (like e.g. "1<sup style="vertical-align:super;font-size:smaller;">st</sup>", i.e. the OpenTypes feature <code>ordn</code>.</p><p>The value <code>slashed-zero</code> enables the display of lining numerals, i.e. the OpenTypes feature <code>zero</code>.</p><p>The property <a href="#prop-font-variant">font-variant</a> can be used as a shorthand for this property.</p></div><div><div id="prop-font-variant-seealso">See Also</div><ul><li><a href="/doc/styling#opentype-features-in-prince">OpenType Features in Prince</a></li></ul></div><div><div id="prop-font-variant-numeric-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-fonts-3/#font-variant-numeric-prop">CSS Fonts Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-font-weight">font-weight <a class="self-link" href="#prop-font-weight"></a></summary><div><div><div id="prop-font-weight-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>font-weight: normal |&#160;bold |&#160;bolder |&#160;lighter |&#160;100 |&#160;200 |&#160;300 |&#160;400 |&#160;500 |&#160;600 |&#160;700 |&#160;800 |&#160;900</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div /><div><div id="prop-font-weight-seealso">See Also</div><ul><li><a href="/doc/styling#text-formatting">Text formatting</a></li></ul></div><div><div id="prop-font-weight-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/fonts.html#propdef-font-weight">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-footnote-display">footnote-display <a class="self-link" href="#prop-footnote-display"></a></summary><div><div><div id="prop-footnote-display-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>footnote-display: block |&#160;inline |&#160;compact</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>block</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>footnote elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-footnote-display-comments">Comments</div><p>
    This property provides a convenient way of determining whether footnotes
	should be displayed as a block element or an inline element.
    </p><p>
    The value <code>compact</code> leaves it up to Prince to determine whether
    to display the footnote as a block or inline element: if two or more footnotes
    fit on one line, they will be treated as inline elements to take up less space.
    </p></div><div><div id="prop-footnote-display-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-gcpm-3/#propdef-footnote-display">CSS Generated Content for Paged Media Module</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-footnote-style-position">footnote-style-position*  <a class="self-link" href="#prop-footnote-style-position"></a></summary><div><div><div id="prop-footnote-style-position-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>footnote-style-position: outside |&#160;inside</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>outside</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>footnote elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-footnote-style-position-comments">Comments</div><p>
	For information about the use of the <code>footnote-style-position</code>
	property see the documentation for <a href="/doc/styling#footnotes">Footnotes</a>.
	</p></div></div></details>

<details><summary id="prop-height">height <a class="self-link" href="#prop-height"></a></summary><div><div><div id="prop-height-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>height: auto |&#160;<i>length</i> |&#160;<i>percent</i> |&#160;min-content |&#160;max-content</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements except non-replaced inline elements, table columns, and column groups</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-height-comments">Comments</div><p class="note">
    The values <code>min-content</code> and <code>max-content</code> do not affect
    auto table layout.
    </p></div><div><div id="prop-height-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visudet.html#the-height-property">CSS 2.1</a></li><li><a href="https://www.w3.org/TR/css-sizing-3/#sizing-values">CSS Intrinsic &amp; Extrinsic Sizing Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-hyphens">hyphens <a class="self-link" href="#prop-hyphens"></a></summary><div><div><div id="prop-hyphens-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>hyphens: none |&#160;manual |&#160;auto</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>manual</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-hyphens-comments">Comments</div><p>
    This property defines if hyphenation is allowed to create more wrapping points
    in a line of text.
    </p></div><div><div id="prop-hyphens-seealso">See Also</div><ul><li><a href="/doc/cookbook#hyphenation">Hyphenation</a></li></ul></div><div><div id="prop-hyphens-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-text-3/#hyphens-property">CSS Text Module Level 3</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-hyphenate-patterns">hyphenate-patterns*  <a class="self-link" href="#prop-hyphenate-patterns"></a></summary><div><div><div id="prop-hyphenate-patterns-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>hyphenate-patterns: none |&#160;url(&#160;<i>patterns-url</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-hyphenate-patterns-comments">Comments</div><p>
    This property is used to point to a hyphenation dictionary.  Normally this is
    selected automatically, based on the current language.
    </p><p>
    The <code>url()</code> argument can take local paths or remote HTTP URLs as argument.
    </p><p class="note">
        The property <a href="#prop-prince-hyphenate-patterns"><code>-prince-hyphenate-patterns</code></a> can be used as an alias.
        </p></div><div><div id="prop-hyphenate-patterns-seealso">See Also</div><ul><li><a href="/doc/cookbook#hyphenation">Hyphenation</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-hyphenate-after">hyphenate-after*  <a class="self-link" href="#prop-hyphenate-after"></a></summary><div><div><div id="prop-hyphenate-after-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>hyphenate-after: <i>integer</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>1</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-hyphenate-after-comments">Comments</div><p>
	This property specifies the minimum number of letters in a word that
	may be moved to the next line when the word is hyphenated.
	</p><p class="note">
        The property <a href="#prop-prince-hyphenate-after"><code>-prince-hyphenate-after</code></a> can be used as an alias.
        </p></div><div><div id="prop-hyphenate-after-seealso">See Also</div><ul><li><a href="/doc/cookbook#hyphenation">Hyphenation</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-hyphenate-before">hyphenate-before*  <a class="self-link" href="#prop-hyphenate-before"></a></summary><div><div><div id="prop-hyphenate-before-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>hyphenate-before: <i>integer</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>1</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-hyphenate-before-comments">Comments</div><p>
	This property specifies the minimum number of letters in a word that
	may be left at the end of a line when the word is hyphenated.
	</p><p class="note">
        The property <a href="#prop-prince-hyphenate-before"><code>-prince-hyphenate-before</code></a> can be used as an alias.
        </p></div><div><div id="prop-hyphenate-before-seealso">See Also</div><ul><li><a href="/doc/cookbook#hyphenation">Hyphenation</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-hyphenate-character">hyphenate-character*  <a class="self-link" href="#prop-hyphenate-character"></a></summary><div><div><div id="prop-hyphenate-character-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>hyphenate-character: auto |&#160;"string"</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-hyphenate-character-comments">Comments</div><p>
	This property specifies the character that is shown at the end of a line
	when the word is hyphenated.
	</p><p class="note">
        The property <a href="#prop-prince-hyphenate-character"><code>-prince-hyphenate-character</code></a> can be used as an alias.
        </p></div><div><div id="prop-hyphenate-character-seealso">See Also</div><ul><li><a href="/doc/cookbook#hyphenation">Hyphenation</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-hyphenate-lines">hyphenate-lines*  <a class="self-link" href="#prop-hyphenate-lines"></a></summary><div><div><div id="prop-hyphenate-lines-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>hyphenate-lines: no-limit |&#160;<i>integer</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>no-limit</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-hyphenate-lines-comments">Comments</div><p>
	This property specifies the maximum number of consecutive lines that
	may end with a hyphenated word.
	</p><p class="note">
        The property <a href="#prop-prince-hyphenate-limit-lines"><code>-prince-hyphenate-limit-lines</code></a> can be used as an alias.
        </p></div><div><div id="prop-hyphenate-lines-seealso">See Also</div><ul><li><a href="/doc/cookbook#hyphenation">Hyphenation</a></li></ul></div><div><div id="prop-hyphenate-lines-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-text-4/#hyphenate-line-limits">CSS Text Module Level 4</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-image-resolution">image-resolution*  <a class="self-link" href="#prop-image-resolution"></a></summary><div><div><div id="prop-image-resolution-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>image-resolution: <i>dpi</i> |&#160;normal |&#160;auto [ , normal |&#160;<i>dpi</i> ]?</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>image elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-image-resolution-comments">Comments</div><p>
    This property determines the resolution of an image.  The value <code>normal</code>
    means 96dpi, or else the current CSS DPI setting.  A custom DPI value can also
    be specified.  The value <code>auto</code> means to check the original resolution
    of the image.  One can specify a second value, as for example <code>auto, normal</code>
    or <code>auto, 300dpi</code> in order to check the original resolution of the
    image first, and to fall back on the second value if the image doesn't contain
    resolution information.
    </p><p class="note">
        The property <a href="#prop-prince-image-resolution"><code>-prince-image-resolution</code></a> can be used as an alias.
        </p></div><div><div id="prop-image-resolution-seealso">See Also</div><ul><li><a href="/doc/graphics#image-size">Image Size</a></li></ul></div></div></details>

<details><summary id="prop-image-orientation">image-orientation <a class="self-link" href="#prop-image-orientation"></a></summary><div><div><div id="prop-image-orientation-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>image-orientation: from-image |&#160;none</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>from-image</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-image-orientation-comments">Comments</div><p>
    This property adds support for the orientation field in the EXIF data of
    JPEG and TIFF images.
    </p><p class="note">
    The property applies only to content images (e.g. replaced elements and
    generated content), not decorative images (such as <code>background-image</code>).
    </p></div><div><div id="prop-image-orientation-spec">Specification</div><ul><li><a href="https://drafts.csswg.org/css-images-3/#propdef-image-orientation">CSS Images Module Level 3 - Editor's Draft</a></li></ul></div></div></details>

<details><summary id="prop-justify-content">justify-content <a class="self-link" href="#prop-justify-content"></a></summary><div><div><div id="prop-justify-content-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>justify-content: flex-start |&#160;flex-end |&#160;center |&#160;space-between |&#160;space-around</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>flex-start</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>flex containers</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-justify-content-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-flexbox-1/#justify-content-property">CSS Flexible Box Layout Module Level 1</a></li></ul></div></div></details>

<details><summary id="prop-left">left <a class="self-link" href="#prop-left"></a></summary><div><div><div id="prop-left-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>left: auto |&#160;<i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>positioned elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-left-comments">Comments</div><p>
	This property determines the left offset for positioned elements
	(ie. elements with a <code><a href="#prop-position">position</a></code>
	value of <code>relative</code>, <code>absolute</code> or
	<code>fixed</code>).
	</p></div><div><div id="prop-left-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visuren.html#propdef-left">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-letter-spacing">letter-spacing <a class="self-link" href="#prop-letter-spacing"></a></summary><div><div><div id="prop-letter-spacing-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>letter-spacing: normal |&#160;<i>length</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div /><div><div id="prop-letter-spacing-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-text-3/#letter-spacing-property">CSS Text Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-line-stacking-strategy">line-stacking-strategy <a class="self-link" href="#prop-line-stacking-strategy"></a></summary><div><div><div id="prop-line-stacking-strategy-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>line-stacking-strategy: inline-line-height |&#160;block-line-height |&#160;max-height |&#160;grid-height</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>inline-line-height</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>block-level elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-line-stacking-strategy-comments">Comments</div><p>
    This property allows to choose whether individual lines should have their
    height determined based on their content, or whether all lines in a paragraph
    should have the same height, or a compromise where their heights are
    determined by their content and then rounded up to a multiple of the paragraph
    line height.
    </p><p>
    The behavior define by <code>inline-line-height</code> is the default.
    </p><p>
    The value <code>block-line-height</code> uses the line-height of the block
    element and ignores the actual height of the content on those lines, so lines
    will always have the same spacing regardless of whether they contain spans
    with larger font size of superscripts/subscripts.
    </p><p>
    The value <code>grid-height</code> is like <code>inline-line-height</code>
    but each line gets rounded up to an integer multiple of the block line-height.
    </p><p>
    Finally, the <code>max-height</code> value works like <code>inline-line-height</code>,
    but it ignores the <code><a href="#prop-line-height">line-height</a></code> property value
    for inline elements.
    </p></div><div><div id="prop-line-stacking-strategy-seealso">See Also</div><ul><li><a href="/doc/styling#paragraph-formatting">Paragraph formatting</a></li><li><code><a href="#prop-line-height">line-height</a></code></li></ul></div><div><div id="prop-line-stacking-strategy-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/2002/WD-css3-linebox-20020515/#line-stacking-strategy">CSS3 module: line (WD 15 May 2002)</a></li></ul></div></div></details>

<details><summary id="prop-line-height">line-height <a class="self-link" href="#prop-line-height"></a></summary><div><div><div id="prop-line-height-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>line-height: normal |&#160;none |&#160;<i>number</i> |&#160;<i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div /><div><div id="prop-line-height-seealso">See Also</div><ul><li><a href="/doc/styling#paragraph-formatting">Paragraph formatting</a></li></ul></div><div><div id="prop-line-height-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visudet.html#propdef-line-height">CSS 2.1</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-link">link*  <a class="self-link" href="#prop-link"></a></summary><div><div><div id="prop-link-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>link: none |&#160;url(&#160;<i>target-url</i>&#160;) |&#160;attr(&#160;<i>target-attr</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-link-comments">Comments</div><p>
    This property makes an element into a link to the specified URL.
    </p><p class="note">
        The property <a href="#prop-prince-link"><code>-prince-link</code></a> can be used as an alias.
        </p></div><div><div id="prop-link-seealso">See Also</div><ul><li><a href="/doc/prince-output#pdf-links">PDF Links</a></li></ul></div></div></details>

<details><summary id="prop-list-style">list-style <a class="self-link" href="#prop-list-style"></a></summary><div><div><div id="prop-list-style-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>list-style: <i><a href="#prop-list-style-image">list-style-image</a></i> ||&#160;<i><a href="#prop-list-style-position">list-style-position</a></i> ||&#160;<i><a href="#prop-list-style-type">list-style-type</a></i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>outside disc</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>list items</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-list-style-comments">Comments</div><p>
        The <code>list-style</code> property is a shorthand for
        setting the following CSS properties:
    </p><ul><li><code><a href="#prop-list-style-image">list-style-image</a></code></li><li><code><a href="#prop-list-style-position">list-style-position</a></code></li><li><code><a href="#prop-list-style-type">list-style-type</a></code></li></ul></div><div><div id="prop-list-style-seealso">See Also</div><ul><li><a href="/doc/styling#lists">Lists</a></li></ul></div><div><div id="prop-list-style-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/generate.html#propdef-list-style">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-list-style-image">list-style-image <a class="self-link" href="#prop-list-style-image"></a></summary><div><div><div id="prop-list-style-image-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>list-style-image: none |&#160;url(&#160;<i>image-url</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>list items</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div /><div><div id="prop-list-style-image-seealso">See Also</div><ul><li><a href="/doc/styling#lists">Lists</a></li></ul></div><div><div id="prop-list-style-image-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/generate.html#propdef-list-style-image">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-list-style-position">list-style-position <a class="self-link" href="#prop-list-style-position"></a></summary><div><div><div id="prop-list-style-position-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>list-style-position: outside |&#160;inside</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>outside</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>list items</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div /><div><div id="prop-list-style-position-seealso">See Also</div><ul><li><a href="/doc/styling#lists">Lists</a></li></ul></div><div><div id="prop-list-style-position-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/generate.html#propdef-list-style-position">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-list-style-type">list-style-type <a class="self-link" href="#prop-list-style-type"></a></summary><div><div><div id="prop-list-style-type-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>list-style-type: none |&#160;box |&#160;check |&#160;circle |&#160;diamond |&#160;disc |&#160;hyphen |&#160;square |&#160;decimal |&#160;decimal-leading-zero |&#160;lower-roman |&#160;upper-roman |&#160;lower-alpha |&#160;lower-latin |&#160;upper-alpha |&#160;upper-latin |&#160;lower-hexadecimal |&#160;upper-hexadecimal |&#160;binary |&#160;octal |&#160;asterisks |&#160;arabic-indic |&#160;lower-greek |&#160;<span class="ext">upper-greek</span> |&#160;<span class="ext">lower-norwegian</span> |&#160;<span class="ext">upper-norwegian</span> |&#160;lower-russian |&#160;upper-russian |&#160;lower-ukrainian |&#160;upper-ukrainian |&#160;lower-belarusian |&#160;upper-belarusian |&#160;lower-bulgarian |&#160;upper-bulgarian |&#160;<span class="ext">lower-serbian</span> |&#160;<span class="ext">upper-serbian</span> |&#160;persian |&#160;urdu |&#160;japanese-informal |&#160;japanese-formal |&#160;cjk-decimal |&#160;simp-chinese-informal |&#160;simp-chinese-formal |&#160;trad-chinese-informal |&#160;trad-chinese-formal</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>disc</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>list items</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div /><div><div id="prop-list-style-type-seealso">See Also</div><ul><li><a href="/doc/styling#lists">Lists</a></li><li><a href="gen-content#counters-and-numbering">Counters and Numbering</a></li></ul></div><div><div id="prop-list-style-type-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/generate.html#propdef-list-style-type">CSS 2.1</a></li><li><a href="https://www.w3.org/TR/2002/WD-css3-lists-20021107/#ltglyphgt">CSS3 module: Lists (W3C Working Draft 7 November 2002)</a></li><li><a href="https://www.w3.org/TR/css-lists-3/">CSS Lists Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-margin">margin <a class="self-link" href="#prop-margin"></a></summary><div><div><div id="prop-margin-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>margin: [ auto |&#160;<i>length</i> |&#160;<i>percent</i> ]{1..4}</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements, except elements with table display types other than table-caption, table and inline-table</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-margin-comments">Comments</div><p>
        The <code>margin</code> property is a shorthand for
        setting the following CSS properties:
    </p><ul><li><code><a href="#prop-margin-top">margin-top</a></code></li><li><code><a href="#prop-margin-right">margin-right</a></code></li><li><code><a href="#prop-margin-bottom">margin-bottom</a></code></li><li><code><a href="#prop-margin-left">margin-left</a></code></li></ul></div><div><div id="prop-margin-seealso">See Also</div><ul><li><a href="/doc/styling#margin">Margin</a></li></ul></div><div><div id="prop-margin-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/box.html#margin-properties">CSS 2.1</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-margin-alt">margin-alt* <a class="self-link" href="#prop-margin-alt"></a></summary><div><div><div id="prop-margin-alt-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>margin-alt: none |&#160;<i>length</i> <i>length</i>?</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all top- or bottom-floated elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-margin-comments">Comments</div><p>
        The <code>margin-alt</code> property defines a top and/or bottom margin
        for elements floated to the top or bottom of a page or column,
        by replacing the value of the corresponding margin property.
    </p><p>
    The default value is <code>none</code>, which means that no alternative margin value
    is defined, and thus the default margin, specified with the <code>margin</code>
    property, is applied.
    </p><p>
    If only one value is given, it refers to both the top and bottom alternative margin.
    When two values are given, the first one refers to the top alternative margin, while
    the second one refers to the bottom one.
    </p><p class="note">
        The property <a href="#prop-prince-margin-alt"><code>-prince-margin-alt</code></a> can be used as an alias.
        </p></div><div><div id="prop-margin-seealso">See Also</div><ul><li><a href="/doc/styling#margin">Margin</a></li></ul></div></div></details>

<details><summary id="prop-margin-bottom">margin-bottom <a class="self-link" href="#prop-margin-bottom"></a></summary><div><div><div id="prop-margin-bottom-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>margin-bottom: auto |&#160;<i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements, except elements with table display types other than table-caption, table and inline-table</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-margin-bottom-seealso">See Also</div><ul><li><a href="/doc/styling#margin">Margin</a></li></ul></div><div><div id="prop-margin-bottom-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/box.html#margin-properties">CSS 2.1</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-margin-inside">margin-inside*  <a class="self-link" href="#prop-margin-inside"></a></summary><div><div><div id="prop-margin-inside-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>margin-inside: auto |&#160;<i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements, except elements with table display types other than table-caption, table and inline-table</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-margin-inside-comments">Comments</div><p>
	The <code>margin-inside</code> property overrides the value of the
	<code>margin-right</code> property if the element is on a left-facing
	page and overrides the value of the <code>margin-left</code> property
	if the element is on a right-facing page. The result is a horizontal
	margin on the side of the element that is on the "inside" of the
	two-page spread.
	</p><p class="note">
        The property <a href="#prop-prince-margin-inside"><code>-prince-margin-inside</code></a> can be used as an alias.
        </p></div><div><div id="prop-margin-inside-seealso">See Also</div><ul><li><a href="/doc/styling#margin">Margin</a></li></ul></div></div></details>

<details><summary id="prop-margin-left">margin-left <a class="self-link" href="#prop-margin-left"></a></summary><div><div><div id="prop-margin-left-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>margin-left: auto |&#160;<i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements, except elements with table display types other than table-caption, table and inline-table</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-margin-left-seealso">See Also</div><ul><li><a href="/doc/styling#margin">Margin</a></li></ul></div><div><div id="prop-margin-left-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/box.html#margin-properties">CSS 2.1</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-margin-outside">margin-outside*  <a class="self-link" href="#prop-margin-outside"></a></summary><div><div><div id="prop-margin-outside-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>margin-outside: auto |&#160;<i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements, except elements with table display types other than table-caption, table and inline-table</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-margin-outside-comments">Comments</div><p>
	The <code>margin-outside</code> property overrides the value of the
	<code>margin-left</code> property if the element is on a left-facing
	page and overrides the value of the <code>margin-right</code> property
	if the element is on a right-facing page. The result is a horizontal
	margin on the side of the element that is on the "outside" of the
	two-page spread.
	</p><p class="note">
        The property <a href="#prop-prince-margin-outside"><code>-prince-margin-outside</code></a> can be used as an alias.
        </p></div><div><div id="prop-margin-outside-seealso">See Also</div><ul><li><a href="/doc/styling#margin">Margin</a></li></ul></div></div></details>

<details><summary id="prop-margin-right">margin-right <a class="self-link" href="#prop-margin-right"></a></summary><div><div><div id="prop-margin-right-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>margin-right: auto |&#160;<i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements, except elements with table display types other than table-caption, table and inline-table</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-margin-right-seealso">See Also</div><ul><li><a href="/doc/styling#margin">Margin</a></li></ul></div><div><div id="prop-margin-right-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/box.html#margin-properties">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-margin-top">margin-top <a class="self-link" href="#prop-margin-top"></a></summary><div><div><div id="prop-margin-top-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>margin-top: auto |&#160;<i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements, except elements with table display types other than table-caption, table and inline-table</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-margin-top-seealso">See Also</div><ul><li><a href="/doc/styling#margin">Margin</a></li></ul></div><div><div id="prop-margin-top-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/box.html#margin-properties">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-marker-start">marker-start <a class="self-link" href="#prop-marker-start"></a></summary><div><div><div id="prop-marker-start-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>marker-start: none |&#160;url(&#160;<i>marker-url</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>SVG elements</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-marker-start-comments">Comments</div><p>
    The <code>marker-start</code> property only applies to SVG elements.
    </p></div><div><div id="prop-marker-start-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/SVG11/painting.html#MarkerStartProperty">SVG 1.1</a></li></ul></div></div></details>

<details><summary id="prop-marker-mid">marker-mid <a class="self-link" href="#prop-marker-mid"></a></summary><div><div><div id="prop-marker-mid-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>marker-mid: none |&#160;url(&#160;<i>marker-url</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>SVG elements</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-marker-mid-comments">Comments</div><p>
    The <code>marker-mid</code> property only applies to SVG elements.
    </p></div><div><div id="prop-marker-mid-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/SVG11/painting.html#MarkerMidProperty">SVG 1.1</a></li></ul></div></div></details>

<details><summary id="prop-marker-end">marker-end <a class="self-link" href="#prop-marker-end"></a></summary><div><div><div id="prop-marker-end-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>marker-end: none |&#160;url(&#160;<i>marker-url</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>SVG elements</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-marker-end-comments">Comments</div><p>
    The <code>marker-end</code> property only applies to SVG elements.
    </p></div><div><div id="prop-marker-end-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/SVG11/painting.html#MarkerEndProperty">SVG 1.1</a></li></ul></div></div></details>

<details><summary id="prop-marks">marks <a class="self-link" href="#prop-marks"></a></summary><div><div><div id="prop-marks-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>marks: none |&#160;[ crop ||&#160;cross ]</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@page</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-marks-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@page { marks: crop }</code></pre></div><div class="programlisting"><pre><code>@page { marks: crop cross }</code></pre></div></div></div><div><div id="prop-marks-comments">Comments</div><p>
    This CSS at-rule descriptor, used with the
    <a href="/doc/css-refs#at-page"><code>@page</code></a> at-rule, adds
    crop and/or cross marks to the page.
    </p><p>
	Specifying <code>crop</code> and/or <code>cross</code> for
	the <code>marks</code> property will result in 6pt of bleed area being
	added to all four sides of the page and additional trim area to
	contain the crop marks.
	</p></div><div><div id="prop-marks-seealso">See Also</div><ul><li><code><a href="#prop-prince-mark-length">-prince-mark-length</a></code></li><li><code><a href="#prop-prince-mark-offset">-prince-mark-offset</a></code></li><li><code><a href="#prop-prince-mark-width">-prince-mark-width</a></code></li></ul></div><div><div id="prop-marks-spec">Specification</div><ul><li><a href="https://drafts.csswg.org/css-page-3/#marks">CSS Paged Media Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-mask">mask <a class="self-link" href="#prop-mask"></a></summary><div><div><div id="prop-mask-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>mask: url(&#160;<i>mask</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-mask-comments">Comments</div><p>The <code>mask</code> property is used to partially or fully hide an element
    by masking it with a provided image.
	</p></div><div><div id="prop-mask-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/SVG/">SVG 1.1</a></li></ul></div></div></details>

<details><summary id="prop-max-height">max-height <a class="self-link" href="#prop-max-height"></a></summary><div><div><div id="prop-max-height-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>max-height: none |&#160;<i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements but non-replaced inline elements, table columns, and column groups</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-max-height-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visudet.html#min-max-heights">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-max-width">max-width <a class="self-link" href="#prop-max-width"></a></summary><div><div><div id="prop-max-width-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>max-width: none |&#160;<i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements but non-replaced inline elements, table rows, and row groups</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-max-width-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visudet.html#min-max-widths">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-min-height">min-height <a class="self-link" href="#prop-min-height"></a></summary><div><div><div id="prop-min-height-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>min-height: auto |&#160;<i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements but non-replaced inline elements, table columns, and column groups</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-min-height-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visudet.html#min-max-heights">CSS 2.1</a></li><li><a href="https://www.w3.org/TR/css-flexbox-1/#min-size-auto">CSS Flexible Box Layout Module Level 1</a></li></ul></div></div></details>

<details><summary id="prop-min-width">min-width <a class="self-link" href="#prop-min-width"></a></summary><div><div><div id="prop-min-width-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>min-width: auto |&#160;<i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements but non-replaced inline elements, table rows, and row groups</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-min-width-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visudet.html#min-max-widths">CSS 2.1</a></li><li><a href="https://www.w3.org/TR/css-flexbox-1/#min-size-auto">CSS Flexible Box Layout Module Level 1</a></li></ul></div></div></details>

<details><summary id="prop-object-fit">object-fit <a class="self-link" href="#prop-object-fit"></a></summary><div><div><div id="prop-object-fit-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>object-fit: fill |&#160;contain |&#160;cover |&#160;none |&#160;scale-down</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>fill</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>replaced elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-object-fit-comments">Comments</div><p>
	This property specifies how the contents of a replaced element, such as an
    image, should be resized to fit its container.
	</p></div><div><div id="prop-object-fit-spec">Specification</div><ul><li><a href="https://drafts.csswg.org/css-images-3/#the-object-fit">CSS Images Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-object-position">object-position <a class="self-link" href="#prop-object-position"></a></summary><div><div><div id="prop-object-position-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>object-position: <br />&#160;&#160;&#160;[ [ left |&#160;center |&#160;right ] ||&#160;[ top |&#160;center |&#160;bottom ] ]
&#160;&#160;&#160;|&#160;[ left |&#160;center |&#160;right |&#160;<i>length</i> |&#160;<i>percent</i> ] [ top |&#160;center |&#160;bottom |&#160;<i>length</i> |&#160;<i>percent</i> ]?
&#160;&#160;&#160;|&#160;[ [ left |&#160;right ] [ <i>length</i> |&#160;<i>percent</i> ] &amp;&amp;&#160;[ top |&#160;bottom ] [ <i>length</i> |&#160;<i>percent</i> ] ]</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>50% 50%</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>replaced elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-object-position-comments">Comments</div><p>
	This property specifies how the contents of a replaced element, such as an
    image, are positioned in its container.
	</p></div><div><div id="prop-object-position-spec">Specification</div><ul><li><a href="https://drafts.csswg.org/css-images-3/#the-object-position">CSS Images Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-opacity">opacity <a class="self-link" href="#prop-opacity"></a></summary><div><div><div id="prop-opacity-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>opacity: <i>number</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>1</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-opacity-comments">Comments</div><p>
	Opacity is a number between 0 and 1.
	</p></div><div><div id="prop-opacity-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css3-color/#transparency">CSS Color Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-order">order <a class="self-link" href="#prop-order"></a></summary><div><div><div id="prop-order-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>order: <i>integer</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>flex items and absolutely-positioned children of flex containers</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-order-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-flexbox-1/#order-property">CSS Flexible Box Layout Module Level 1</a></li></ul></div></div></details>

<details><summary id="prop-orphans">orphans <a class="self-link" href="#prop-orphans"></a></summary><div><div><div id="prop-orphans-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>orphans: <i>integer</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>1</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>block container elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-orphans-comments">Comments</div><p>
	If a paragraph is split over two pages or columns, this property
	determines the minimum number of lines that must be left at the bottom
	of the first page or column.
	</p><p>
    Please note that the initial value has been changed from <code>2</code> to <code>1</code>.
    </p></div><div><div id="prop-orphans-seealso">See Also</div><ul><li><a href="/doc/paged#widows-and-orphans">Widows and orphans</a></li><li><code><a href="#prop-widows">widows</a></code></li></ul></div><div><div id="prop-orphans-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/page.html#break-inside">CSS 2.1</a></li><li><a href="https://www.w3.org/TR/css-break-3/#widows-orphans">CSS Fragmentation Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-overflow">overflow <a class="self-link" href="#prop-overflow"></a></summary><div><div><div id="prop-overflow-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>overflow: visible |&#160;hidden |&#160;clip |&#160;scroll |&#160;auto</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>visible</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>non-replaced block-level elements and non-replaced inline-block elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-overflow-comments">Comments</div><p>
	This property determines the visibility of content that overflows
	outside the boundaries of an element.
	</p>
    <p>
    Please note that the value <code>scroll</code> does not actually scroll, but
    establishes a new block formatting context instead - other than that, it is
    treated the same as <code>visible</code>.
    </p></div><div><div id="prop-overflow-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visufx.html#overflow">CSS 2.1</a></li><li><a href="https://drafts.csswg.org/css-overflow-3/#propdef-overflow">CSS Overflow Module Level 3 Draft</a></li></ul></div></div></details>

<details><summary id="prop-overflow-wrap">overflow-wrap <a class="self-link" href="#prop-overflow-wrap"></a></summary><div><div><div id="prop-overflow-wrap-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>overflow-wrap: normal |&#160;break-word</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-overflow-wrap-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>part { overflow-wrap: break-word; }
supplier, item { overflow-wrap: normal; }
&lt;part&gt;&lt;supplier&gt;xyz&lt;/supplier&gt;&lt;item&gt;12345&lt;/item&gt;&lt;/part&gt;</code></pre></div></div></div><div><div id="prop-overflow-wrap-comments">Comments</div><p>This property controls wrapping behavior of last resort:
	whether it is better for a word to overflow its container,
	or to be broken at an arbitrary point
	(subject to <code>white-space</code>, and not splitting within a grapheme cluster),
	without adding a hyphen.
	</p><p>
    The value <code>normal</code> allows text containing no other wrap
    opportunities to overflow.
    </p><p>
	This feature is most commonly used for non-words such as URIs, part codes,
	or cryptographic hashes.
	For such purposes, <code>overflow-wrap:break-word</code> can be
	compared with <code>word-break:break-all</code>:
	the latter is more willing to break the word (preferring to break
	than to leave an under-full line or advance past a CSS2-style float),
	but only breaks between alpha-numeric grapheme clusters rather than
	between any pair of grapheme clusters.
	</p><p>
	The element whose <code>overflow-wrap</code> property controls
	whether such a wrap opportunity exists at a given boundary
	is the closest ancestor that &#8220;strictly contains&#8221; the boundary,
	i.e. that contains text from both sides of the boundary.
	Thus, components of a wrappable string can be kept on one line
	by styling each component with <code>overflow-wrap:normal</code>
	even if two components are directly adjacent to each other, as
    seen in the above example.
	</p></div><div><div id="prop-overflow-wrap-seealso">See Also</div><ul><li><a href="/doc/styling#paragraph-formatting">Paragraph formatting</a></li><li><code><a href="#prop-word-break">word-break</a></code></li><li><code><a href="#prop-prince-wrap-inside">-prince-wrap-inside</a></code></li><li><code><a href="#prop-white-space">white-space</a></code></li></ul></div><div><div id="prop-overflow-wrap-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-text-3/#overflow-wrap-property">CSS Text Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-padding">padding <a class="self-link" href="#prop-padding"></a></summary><div><div><div id="prop-padding-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>padding: [ <i>length</i> |&#160;<i>percent</i> ]{1..4}</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements, except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-padding-comments">Comments</div><p>
        The <code>padding</code> property is a shorthand for
        setting the following CSS properties:
    </p><ul><li><code><a href="#prop-padding-bottom">padding-bottom</a></code></li><li><code><a href="#prop-padding-left">padding-left</a></code></li><li><code><a href="#prop-padding-right">padding-right</a></code></li><li><code><a href="#prop-padding-top">padding-top</a></code></li></ul></div><div><div id="prop-padding-seealso">See Also</div><ul><li><a href="/doc/styling#padding">Padding</a></li></ul></div><div><div id="prop-padding-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/box.html#padding-properties">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-padding-bottom">padding-bottom <a class="self-link" href="#prop-padding-bottom"></a></summary><div><div><div id="prop-padding-bottom-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>padding-bottom: <i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements, except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-padding-bottom-seealso">See Also</div><ul><li><a href="/doc/styling#padding">Padding</a></li></ul></div><div><div id="prop-padding-bottom-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/box.html#padding-properties">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-padding-left">padding-left <a class="self-link" href="#prop-padding-left"></a></summary><div><div><div id="prop-padding-left-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>padding-left: <i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements, except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-padding-left-seealso">See Also</div><ul><li><a href="/doc/styling#padding">Padding</a></li></ul></div><div><div id="prop-padding-left-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/box.html#padding-properties">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-padding-right">padding-right <a class="self-link" href="#prop-padding-right"></a></summary><div><div><div id="prop-padding-right-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>padding-right: <i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements, except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-padding-right-seealso">See Also</div><ul><li><a href="/doc/styling#padding">Padding</a></li></ul></div><div><div id="prop-padding-right-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/box.html#padding-properties">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-padding-top">padding-top <a class="self-link" href="#prop-padding-top"></a></summary><div><div><div id="prop-padding-top-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>padding-top: <i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements, except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-padding-top-seealso">See Also</div><ul><li><a href="/doc/styling#padding">Padding</a></li></ul></div><div><div id="prop-padding-top-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/box.html#padding-properties">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-page">page <a class="self-link" href="#prop-page"></a></summary><div><div><div id="prop-page-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>page: auto |&#160;<i>name</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-page-comments">Comments</div><p>
	This property determines which named page, if any, the current element
	should be placed on. See the documentation for <a href="/doc/paged#selecting-pages">Selecting pages</a>
	for more details.
	</p></div><div><div id="prop-page-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css3-page/#using-named-pages">CSS Paged Media Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-page-break-after">page-break-after <a class="self-link" href="#prop-page-break-after"></a></summary><div><div><div id="prop-page-break-after-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>page-break-after: auto |&#160;always |&#160;avoid |&#160;left |&#160;right |&#160;verso |&#160;recto</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>block-level elements in the normal flow of the root element</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-page-break-after-comments">Comments</div><p>
    This property can be used to force or suppress page breaks after an
    element.  Prince expands the property with the values <code>verso</code> and
    <code>recto</code>.
    </p><p class="note">
    This property is deprecated.  Use the property <code><a href="#prop-break-after">break-after</a></code>
    instead.  See the documentation for <a href="/doc/paged#page-breaks">Page breaks</a> for more details.
    </p></div><div><div id="prop-page-break-after-seealso">See Also</div><ul><li><code><a href="#prop-break-after">break-after</a></code></li></ul></div><div><div id="prop-page-break-after-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/page.html#propdef-page-break-after">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-page-break-before">page-break-before <a class="self-link" href="#prop-page-break-before"></a></summary><div><div><div id="prop-page-break-before-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>page-break-before: auto |&#160;always |&#160;avoid |&#160;left |&#160;right |&#160;verso |&#160;recto</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>block-level elements in the normal flow of the root element</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-page-break-before-comments">Comments</div><p>
    This property can be used to force or suppress page breaks before an
    element.  Prince expands the property with the values <code>verso</code> and
    <code>recto</code>.
    </p><p class="note">
    This property is deprecated.  Use the property <code><a href="#prop-break-before">break-before</a></code>
    instead.  See the documentation for <a href="/doc/paged#page-breaks">Page breaks</a> for more details.
    </p></div><div><div id="prop-page-break-before-seealso">See Also</div><ul><li><code><a href="#prop-break-before">break-before</a></code></li></ul></div><div><div id="prop-page-break-before-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/page.html#propdef-page-break-before">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-page-break-inside">page-break-inside <a class="self-link" href="#prop-page-break-inside"></a></summary><div><div><div id="prop-page-break-inside-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>page-break-inside: auto |&#160;avoid</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>block-level elements in the normal flow of the root element</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-page-break-inside-comments">Comments</div><p>
    This property can be used to suppress page breaks inside an
    element.
    </p><p class="note">
    This property is deprecated.  Use the property <code><a href="#prop-break-inside">break-inside</a></code>
    instead.  See the documentation for <a href="/doc/paged#page-breaks">Page breaks</a> for more details.
    </p></div><div><div id="prop-page-break-inside-seealso">See Also</div><ul><li><code><a href="#prop-break-inside">break-inside</a></code></li></ul></div><div><div id="prop-page-break-inside-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/page.html#propdef-page-break-before">CSS 2.1</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-page-group">page-group*  <a class="self-link" href="#prop-page-group"></a></summary><div><div><div id="prop-page-group-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>page-group: start |&#160;auto</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-page-group-comments">Comments</div><p>
	This property determines whether the first page of this element
	matches the :first page class selector.
	</p><p class="note">
        The property <a href="#prop-prince-page-group"><code>-prince-page-group</code></a> can be used as an alias.
        </p></div><div><div id="prop-page-group-seealso">See Also</div><ul><li><a href="/doc/paged#page-groups">Page groups</a></li></ul></div></div></details>

<details><summary id="prop-position">position <a class="self-link" href="#prop-position"></a></summary><div><div><div id="prop-position-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>position: static |&#160;relative |&#160;absolute |&#160;fixed |&#160;running(&#160;<i>name</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>static</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-position-comments">Comments</div><p>
	The <code>running()</code> function removes the element from the normal document
    flow and makes it available to be placed in a page region with the
    <code>element()</code> function of the <code><a href="#prop-content">content</a></code>
    property.  See also <a href="/doc/gen-content#taking-elements-from-the-document">Taking elements from the document</a>.
	</p></div><div><div id="prop-position-seealso">See Also</div><ul><li><a href="/doc/paged#page-regions">Page regions</a></li><li><a href="/doc/gen-content#taking-elements-from-the-document">Taking elements from the document</a></li><li><code><a href="#prop-content">content</a></code></li></ul></div><div><div id="prop-position-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visuren.html#propdef-position">CSS 2.1</a></li><li><a href="https://www.w3.org/TR/css-gcpm-3/#running-syntax">CSS Generated Content for Paged Media Module</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-alt-text">-prince-alt-text*  <a class="self-link" href="#prop-prince-alt-text"></a></summary><div><div><div id="prop-prince-alt-text-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-alt-text: auto |&#160;none |&#160;"string"</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-alt-text-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>span {
    -prince-alt-text: attr(aria-label);
}</code></pre></div></div></div><div><div id="prop-prince-alt-text-comments">Comments</div><p>
	This property can be used to tell Prince what to show as an alternate text, which is crucial
    when producing tagged PDF files.
	</p></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-background-image-resolution">-prince-background-image-resolution*  <a class="self-link" href="#prop-prince-background-image-resolution"></a></summary><div><div><div id="prop-prince-background-image-resolution-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-background-image-resolution: <i>dpi</i> |&#160;normal |&#160;auto [ , normal |&#160;<i>dpi</i> ]?</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>background image elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-background-image-resolution-comments">Comments</div><p>
    This property determines the resolution of a background image.  The value <code>normal</code>
    means 96dpi, or else the current CSS DPI setting.  A custom DPI value can also
    be specified.  The value <code>auto</code> means to check the original resolution
    of the image.  One can specify a second value, as for example <code>auto, normal</code>
    or <code>auto, 300dpi</code> in order to check the original resolution of the
    image first, and to fall back on the second value if the image doesn't contain
    resolution information.
    </p><p class="note">
        The property <a href="#prop-background-image-resolution"><code>background-image-resolution</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-background-image-resolution-seealso">See Also</div><ul><li><a href="/doc/graphics#image-size">Image Size</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-bookmark-label">-prince-bookmark-label*  <a class="self-link" href="#prop-prince-bookmark-label"></a></summary><div><div><div id="prop-prince-bookmark-label-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-bookmark-label: none |&#160;<i>content</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>content()</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-bookmark-label-comments">Comments</div><p>
	This property is used to determine the text content of the PDF
	bookmark generated by the current element.
	</p><p>
    Several ways of creating content are here defined by means of functions - the
    detailed explanation can be found in the <a href="/doc/gen-content#generated-content-functions">Generated Content Functions</a>
    section.
    </p><p class="note">
	Even though the initial value for this property is
	<code>content()</code>, no PDF bookmark will be generated by default
	as the initial value for the <code><a href="#prop-prince-bookmark-level">-prince-bookmark-level</a></code>
	property is <code>none</code>.
    </p><p>
	See the documentation for <a href="/doc/prince-output#pdf-bookmarks">PDF Bookmarks</a> for more details.
	</p><p class="note">
        The property <a href="#prop-bookmark-label"><code>bookmark-label</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-bookmark-label-seealso">See Also</div><ul><li><a href="/doc/gen-content#generated-content-functions">Generated Content Functions</a></li><li><a href="/doc/prince-output#bookmark-labels">Bookmark labels</a></li><li><code><a href="#prop-content">content</a></code></li></ul></div><div><div id="prop-prince-bookmark-label-spec">Specification</div><ul><li><a href="https://books.spec.whatwg.org/#'bookmark-label'">CSS Books</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-bookmark-level">-prince-bookmark-level*  <a class="self-link" href="#prop-prince-bookmark-level"></a></summary><div><div><div id="prop-prince-bookmark-level-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-bookmark-level: none |&#160;<i>integer</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-bookmark-level-comments">Comments</div><p>
	This property is used to determine the numeric level in the bookmark
	hierarchy of the PDF bookmark generated by the current element.
	See the documentation for <a href="/doc/prince-output#pdf-bookmarks">PDF Bookmarks</a> for more details.
	</p><p class="note">
        The property <a href="#prop-bookmark-level"><code>bookmark-level</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-bookmark-level-seealso">See Also</div><ul><li><a href="/doc/prince-output#bookmark-levels">Bookmark levels</a></li></ul></div><div><div id="prop-prince-bookmark-level-spec">Specification</div><ul><li><a href="https://books.spec.whatwg.org/#'bookmark-level'">CSS Books</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-bookmark-state">-prince-bookmark-state*  <a class="self-link" href="#prop-prince-bookmark-state"></a></summary><div><div><div id="prop-prince-bookmark-state-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-bookmark-state: open |&#160;closed</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>open</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-bookmark-state-comments">Comments</div><p>
    This property is used to determine whether the bookmark tree item is open or closed
    when the PDF is first viewed.  In this way you can close each chapter and hide
    the subsections for documents that are very long, or you can choose to have a
    deep bookmark tree.
    </p><p class="note">
        The property <a href="#prop-bookmark-state"><code>bookmark-state</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-bookmark-state-seealso">See Also</div><ul><li><a href="/doc/prince-output#bookmark-levels">Bookmark levels</a></li></ul></div><div><div id="prop-prince-bookmark-state-spec">Specification</div><ul><li><a href="https://books.spec.whatwg.org/#'bookmark-state'">CSS Books</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-bookmark-target">-prince-bookmark-target*  <a class="self-link" href="#prop-prince-bookmark-target"></a></summary><div><div><div id="prop-prince-bookmark-target-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-bookmark-target: self |&#160;url(&#160;<i>target-url</i>&#160;) |&#160;attr(&#160;<i>target-attr</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>self</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-bookmark-target-comments">Comments</div><p>
	This property is used to determine the link target for the
	PDF bookmark generated by the current element.
	See the documentation for <a href="/doc/prince-output#pdf-bookmarks">PDF Bookmarks</a> for more details.
	</p><p class="note">
        The property <a href="#prop-bookmark-target"><code>bookmark-target</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-bookmark-target-seealso">See Also</div><ul><li><a href="/doc/prince-output#bookmark-targets">Bookmark targets</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-caption-page">-prince-caption-page*  <a class="self-link" href="#prop-prince-caption-page"></a></summary><div><div><div id="prop-prince-caption-page-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-caption-page: first |&#160;following |&#160;all</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>first</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>table elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-caption-page-comments">Comments</div><p>
	This property determines whether table captions will be displayed on
	the first page of a table, or only on following pages, or repeated on
	every page that a table appears on.
	</p><p class="note">
        The property <a href="#prop-caption-page"><code>caption-page</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-caption-page-seealso">See Also</div><ul><li><a href="/doc/styling#table-captions">Table captions</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-clear">-prince-clear* <a class="self-link" href="#prop-prince-clear"></a></summary><div><div><div id="prop-prince-clear-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-clear: none |&#160;left |&#160;right |&#160;<span class="ext">inside</span> |&#160;<span class="ext">outside</span> |&#160;<span class="ext">both</span> |&#160;<span class="ext">page</span> |&#160;<span class="ext">column</span> |&#160;<span class="ext">end</span></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>block-level elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-clear-comments">Comments</div><p>
	This property determines whether an element should be moved down the
	page in order to clear elements that have been floated to the left or
	right of the page. The <code>left</code>, <code>right</code>,
	<code>inside</code> and <code>outside</code>
	values correspond to values given to the <code><a href="#prop-float">float</a></code>
	property, while <code>both</code> will clear floats on either side.
	</p><p>
    The keyword <code>end</code> clears the float, and places the next
    float in the next available position - so if e.g. you have a column
    layout with a float already at the top of the first column, it will
    place the next float, whose natural position would be just below the
    first one, at the bottom of the same column.
    </p><p>
    The keyword <code>column</code> clears the end of the column (so any
    further float would be pushed to the next column), while the keyword
    <code>page</code> clears the page (pushing further floats to the next
    page).
    </p><p class="note">
        The property <a href="#prop-clear"><code>clear</code></a> can be used as an alias.
        </p></div><div><div id="prop-float-seealso">See Also</div><ul><li><a href="/doc/styling#floats">Floats</a></li><li><code><a href="#prop-float">float</a></code></li></ul></div><div><div id="prop-prince-clear-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visuren.html#flow-control">CSS 2.1</a></li><li><a href="https://figures.spec.whatwg.org/#floating-inside-and-outside-pages">CSS Figures - Floating Inside and Outside Pages</a></li><li><a href="https://figures.idea.whatwg.org/#page-floats">CSS Figures - Page Floats</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-expansion-text">-prince-expansion-text*  <a class="self-link" href="#prop-prince-expansion-text"></a></summary><div><div><div id="prop-prince-expansion-text-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>prince-expansion-text: auto |&#160;none |&#160;"string"</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>inline elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-expansion-text-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>abbr {
&nbsp;&nbsp;-prince-expansion-text: attr(title);
}</code></pre></div></div></div><div><div id="prop-prince-expansion-text-comments">Comments</div><p>
	This property can be used for specific elements, such as e.g. <code>abbr</code> and <code>acronym</code>,
    to tell Prince what to show as an expansion text, which is crucial when producing tagged PDF files.
	</p></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-fallback-cmyk-profile">-prince-fallback-cmyk-profile*  <a class="self-link" href="#prop-prince-fallback-cmyk-profile"></a></summary><div><div><div id="prop-prince-fallback-cmyk-profile-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-fallback-cmyk-profile: url(&#160;<i>filename</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code /></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@prince-pdf</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-prince-fallback-cmyk-profile-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@prince-pdf {
    -prince-pdf-output-intent: url("AdobeRGB1998.icc");
	-prince-fallback-cmyk-profile: url("ISOcoated_v2_eci.icc");
}</code></pre></div></div></div><div><div id="prop-prince-fallback-cmyk-profile-comments">Comments</div><p>
	This property is used inside a
    <a href="/doc/css-refs#at-prince-pdf"><code>@prince-pdf</code></a>
    at-rule to determine a fallback CMYK profile to be used for uncalibrated
    (untagged) CMYK colors or images, if it is not possible to use the output
    intent ICC profile (see <code><a href="#prop-prince-pdf-output-intent">-prince-pdf-output-intent</a></code>).
	</p><p>CMYK colors are treated as uncalibrated in either of the following three cases:
	conversion of an untagged CMYK image to another color space, conversion
	of a device dependent CMYK color, or when a PDF Profile requires that only device
	independent color is present, in which case both untagged CMYK images and device
	dependent CMYK colors are treated as uncalibrated CMYK colors.
	</p></div><div><div id="prop-prince-fallback-cmyk-profile-seealso">See Also</div><ul><li><code><a href="#prop-prince-pdf-output-intent">-prince-pdf-output-intent</a></code></li><li><a href="/doc/graphics#color-management">Color Management</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-filter-resolution">-prince-filter-resolution*  <a class="self-link" href="#prop-prince-filter-resolution"></a></summary><div><div><div id="prop-prince-filter-resolution-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-filter-resolution: <i>dpi</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>96dpi</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements, <code>@prince-pdf</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-prince-filter-resolution-comments">Comments</div><p>
    This property is used to specify the resolution used when
    rasterizing to images for applying CSS and SVG filters.  It can be
    used for individual elements, or inside a
    <a href="/doc/css-refs#at-prince-pdf"><code>@prince-pdf</code></a>
    at-rule.  In this latter case, it affects all filters in the document.
    </p></div><div><div id="prop-prince-filter-resolution-seealso">See Also</div><ul><li><a href="/doc/graphics#filters">Filters</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-float">-prince-float* <a class="self-link" href="#prop-prince-float"></a></summary><div><div><div id="prop-prince-float-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-float: <br />&#160;&#160;&#160;<i class="ext">-prince-float-reference</i> ||&#160;<i class="ext">-prince-float-placement</i> ||&#160;<i class="ext">-prince-float-modifier</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-float-comments">Comments</div><p>
	Traditionally, floats move in the inline direction, left or right.  Prince extends
    this behavior with page floats that move in the block direction, specifying that
    an element should be floated to the top or to the bottom, or to the nearest edge
    of the column.
	</p><p>
    Prince's implementation of <code>-prince-float</code> is a shorthand for the following properties:
	</p>
    <ul><li><code><a href="#prop-prince-float-reference">-prince-float-reference</a></code></li><li><code><a href="#prop-prince-float-placement">-prince-float-placement</a></code></li><li><code><a href="#prop-prince-float-modifier">-prince-float-modifier</a></code></li></ul>
    <p>
    Note that when setting only the value for <code><i>-prince-float-reference</i></code>, i.e.
    <code>column</code> or <code>page</code>, the default value for <code><i>-prince-float-placement</i></code>
    is <code>top-bottom</code> and differs from its initial value.  This means that Prince
    will try to float the element to the top of the indicated float reference, and if that
    should not be possible, it would be floated to the bottom.
    </p><p>
    On a vertical float to the top or bottom of the float reference, a vertical margin
    set to the value <code>auto</code> will expand and thereby repal other content.  By
    setting top and bottom margins to <code>auto</code>, the element is vertically centered.
    </p><p>
    Please also see the property <code><a href="#prop-prince-margin-alt">-prince-margin-alt</a></code> for
    alternative margins for top or bottom floated elements.
    </p><p class="note">
        The property <a href="#prop-float"><code>float</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-float-seealso">See Also</div><ul><li><a href="/doc/styling#floats">Floats</a></li></ul></div><div><div id="prop-prince-float-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visuren.html#float-position">CSS 2.1</a></li><li><a href="https://www.w3.org/TR/css-gcpm-3/#footnotes">CSS Generated Content for Paged Media Module</a></li><li><a href="https://figures.spec.whatwg.org/">CSS Figures</a></li><li><a href="https://books.spec.whatwg.org/#footnotes">CSS Books</a></li><li><a href="https://drafts.csswg.org/css-page-floats/">CSS Page Floats</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-float-defer-column">-prince-float-defer-column* <a class="self-link" href="#prop-prince-float-defer-column"></a></summary><div><div><div id="prop-prince-float-defer-column-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-float-defer-column: none |&#160;inside |&#160;outside |&#160;last |&#160;<i>integer</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all floated elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-float-defer-column-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>figure {
&nbsp;&nbsp;-prince-float: top;
&nbsp;&nbsp;-prince-float-defer-column: 1;
}</code></pre></div></div></div><div><div id="prop-prince-float-defer-column-comments">Comments</div><p>
        The <code>-prince-float-defer-column</code> property defines the number of columns that the float should be deferred.</p><p class="note">
        The property <a href="#prop-float-defer-column"><code>float-defer-column</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-float-defer-column-seealso">See Also</div><ul><li><a href="/doc/styling#floats">Floats</a></li></ul></div><div><div id="prop-prince-float-defer-column-spec">Specification</div><ul><li><a href="https://figures.spec.whatwg.org/#float-defer-column">CSS Figures</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-float-defer-page">-prince-float-defer-page* <a class="self-link" href="#prop-prince-float-defer-page"></a></summary><div><div><div id="prop-prince-float-defer-page-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-float-defer-page: none |&#160;[ <i>integer</i> ||&#160;[ left |&#160;right ]]</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all floated elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-float-defer-page-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>figure {
&nbsp;&nbsp;-prince-float: top;
&nbsp;&nbsp;-prince-float-defer-page: right;
}</code></pre></div></div></div><div><div id="prop-prince-float-defer-page-comments">Comments</div><p>
        The <code>-prince-float-defer-page</code> property specifies whether the float is placed after previous page floats have been placed, or in another float reference container.</p><p class="note">
        The property <a href="#prop-float-defer-page"><code>float-defer-page</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-float-defer-page-seealso">See Also</div><ul><li><a href="/doc/styling#floats">Floats</a></li></ul></div><div><div id="prop-prince-float-defer-page-spec">Specification</div><ul><li><a href="https://figures.idea.whatwg.org/#float-defer-page">CSS Figures</a></li><li><a href="https://drafts.csswg.org/css-page-floats/#float-defer-property">CSS Page Floats</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-float-modifier">-prince-float-modifier* <a class="self-link" href="#prop-prince-float-modifier"></a></summary><div><div><div id="prop-prince-float-modifier-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-float-modifier: normal |&#160;unless-fit</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all floated elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-float-modifier-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>figure {
&nbsp;&nbsp;-prince-float: top;
&nbsp;&nbsp;-prince-float-modifier: unless-fit;
}</code></pre></div></div></div><div><div id="prop-prince-float-modifier-comments">Comments</div><p>
        The <code>-prince-float-modifier</code> property expresses a conditional
        with the use of the keyword <code>unless-fit</code>: the element
        is only floated if it would otherwise cause a page or column break.
        </p><p class="note">
        The property <a href="#prop-float-modifier"><code>float-modifier</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-float-modifier-seealso">See Also</div><ul><li><a href="/doc/styling#floats">Floats</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-float-placement">-prince-float-placement* <a class="self-link" href="#prop-prince-float-placement"></a></summary><div><div><div id="prop-prince-float-placement-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-float-placement: none |&#160;left |&#160;right |&#160;<span class="ext">inside</span> |&#160;<span class="ext">outside</span>
&#160;&#160;&#160;&#160;|&#160;<span class="ext">top</span> |&#160;<span class="ext">bottom</span> |&#160;<span class="ext">top-bottom</span> |&#160;<span class="ext">snap</span>
&#160;&#160;&#160;&#160;|&#160;footnote |&#160;<span class="ext">inline-footnote</span></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all floated elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-float-placement-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>figure {
&nbsp;&nbsp;-prince-float-reference: page;
&nbsp;&nbsp;-prince-float-placement: bottom;
}</code></pre></div></div></div><div><div id="prop-prince-float-placement-comments">Comments</div><p>
        The <code>-prince-float-placement</code> property defines how a floated element
        is positioned.  Its values are basically the values of the standard
        <code>float</code> property, plus some Prince-specific extensions.
        </p><p>
        The values <code>top</code> or <code>bottom</code> float the element to, respectively,
        the top or the bottom of the float reference (a page, or a column), while
        <code>top-bottom</code> tries to float it to the top, and if that should not be possible,
        it is floated to the bottom.
        </p><p>
        Note that the default value for <code>-prince-float-placement</code>, when omitted in the
        <code><a href="#prop-prince-float">-prince-float</a></code> shorthand property, is
        <code>top-bottom</code>, and differs from its initial value.  This means that Prince
        will try to float the element to the top of the indicated float reference, and if that
        should not be possible, it would be floated to the bottom.
        </p><p>
        The value <code>snap</code> floats the element to the nearest "end", i.e.
        to the top or bottom of the page or of the column.
        </p><p>
        The values <code>inside</code> and <code>outside</code> float the element respectively
        to the inside or outside of a spread: <code>inside</code> moves the element to
        the right when used on a left-facing page, and to the left on a right-facing page;
        <code>outside</code> moves the element to the left when used on a left-facing
        page, and to the right on a right-facing page.
        </p><p>
        The value <code>footnote</code> transforms the element into a footnote - the footnote
        marker is placed outside of the block of the footnote.  The value <code>inline-footnote</code>
        transforms the element into a footnote and places the footnote marker inside of
        the block of the footnote.
        </p><p class="note">
        The property <a href="#prop-float-placement"><code>float-placement</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-float-placement-seealso">See Also</div><ul><li><code><a href="#prop-float">float</a></code></li><li><a href="/doc/styling#floats">Floats</a></li><li><a href="/doc/paged#page-regions">Page Regions</a></li></ul></div><div><div id="prop-prince-float-placement-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visuren.html#float-position">CSS 2.1</a></li><li><a href="https://www.w3.org/TR/css-gcpm-3/#footnotes">CSS Generated Content for Paged Media Module</a></li><li><a href="https://figures.spec.whatwg.org/">CSS Figures</a></li><li><a href="https://books.spec.whatwg.org/#footnotes">CSS Books</a></li><li><a href="https://drafts.csswg.org/css-page-floats/">CSS Page Floats</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-float-policy">-prince-float-policy* <a class="self-link" href="#prop-prince-float-policy"></a></summary><div><div><div id="prop-prince-float-policy-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-float-policy: normal |&#160;in-order</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all floated elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-float-policy-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>figure {
&nbsp;&nbsp;-prince-float: bottom;
&nbsp;&nbsp;-prince-float-policy: in-order;
}</code></pre></div></div></div><div><div id="prop-prince-float-policy-comments">Comments</div><p>
        The <code>-prince-float-policy</code> property defines the policy adopted when
        floating an element.  The value <code>in-order</code> imposes that page
        floats must be shown in source order - <code>normal</code> adds no extra
        constraints to the float.</p><p class="note">
        The property <a href="#prop-float-policy"><code>float-policy</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-float-policy-seealso">See Also</div><ul><li><a href="/doc/styling#floats">Floats</a></li></ul></div><div><div id="prop-prince-float-policy-spec">Specification</div><ul><li><a href="https://figures.spec.whatwg.org/#page-float-preferences:-float-policy">CSS Figures</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-float-reference">-prince-float-reference* <a class="self-link" href="#prop-prince-float-reference"></a></summary><div><div><div id="prop-prince-float-reference-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-float-reference: column |&#160;page</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>column</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all floated elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-float-reference-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>figure {
&nbsp;&nbsp;-prince-float: top;
&nbsp;&nbsp;-prince-float-reference: page;
}</code></pre></div></div></div><div><div id="prop-prince-float-reference-comments">Comments</div><p>
        The <code>-prince-float-reference</code> property defines the reference context for
        the float, i.e. whether the element should be floated to the top of the
        column, or of the page.</p><p>
        Please note that the initial value is <code>column</code> - the style rule
        <code>-prince-float: top</code> will create a column float in a multicol context,
        rather than a page float.</p><p class="note">
        The property <a href="#prop-float-reference"><code>float-reference</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-float-reference-seealso">See Also</div><ul><li><a href="/doc/styling#floats">Floats</a></li></ul></div><div><div id="prop-prince-float-reference-spec">Specification</div><ul><li><a href="https://figures.spec.whatwg.org/#setting-the-page-float-reference:-float-reference">CSS Figures</a></li><li><a href="https://drafts.csswg.org/css-page-floats/#float-reference-property">CSS Page Floats</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-float-tail">-prince-float-tail* <a class="self-link" href="#prop-prince-float-tail"></a></summary><div><div><div id="prop-prince-float-tail-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-float-tail: keep |&#160;fill-page</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>keep</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all floated elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-float-tail-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>figure {
&nbsp;&nbsp;-prince-float: top;
&nbsp;&nbsp;-prince-float-tail: fill-page;
}</code></pre></div></div></div><div><div id="prop-prince-float-tail-comments">Comments</div><p>
        The <code>-prince-float-tail</code> property instructs Prince how to deal with page
        floats that end up past the end of normal content: with the value
        <code>fill-page</code>, Prince will try to fill the last page, but discard
        any page floats that would create more pages.</p><p class="note">
        The property <a href="#prop-float-tail"><code>float-tail</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-float-tail-seealso">See Also</div><ul><li><a href="/doc/styling#floats">Floats</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-flow">-prince-flow*  <a class="self-link" href="#prop-prince-flow"></a></summary><div><div><div id="prop-prince-flow-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-flow: normal |&#160;static(&#160;<i>name</i>, [ start |&#160;current ]?&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-flow-comments">Comments</div><p>
    This property is used to remove elements from the normal flow of the
    document, to be placed in a page region with <code><a href="#prop-content">content</a>: flow()</code>,
    in order to create running page headers and footers.
    </p><p>
    The optional <code>start</code> argument (default is <code>current</code>)
    makes the fetched content available, as if it were fetched from the start
    of the document.
    </p><p>
    See the documentation for <a href="/doc/gen-content#taking-elements-from-the-document">Taking elements from the document</a> for more details.
    </p><p class="note">
        The property <a href="#prop-flow"><code>flow</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-flow-seealso">See Also</div><ul><li><a href="/doc/paged#page-regions">Page regions</a></li><li><a href="/doc/gen-content#taking-elements-from-the-document">Taking elements from the document</a></li><li><code><a href="#prop-content">content</a></code></li></ul></div><div><div id="prop-prince-flow-spec">Specification</div><ul><li><a href="https://books.spec.whatwg.org/#flowing-content-to-a-named-area:-'flow'">CSS Books</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-footnote-policy">-prince-footnote-policy*  <a class="self-link" href="#prop-prince-footnote-policy"></a></summary><div><div><div id="prop-prince-footnote-policy-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-footnote-policy: auto |&#160;keep-with-line |&#160;keep-with-block</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>footnote elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-footnote-policy-comments">Comments</div><p>
	This property determines whether a footnote should always be displayed on the
    same page as its footnote call is located on, or whether it may slip to the next
    page. The value <code>keep-with-line</code> instructs Prince to keep the footnote
    on the same page as the line with the footnote call, while <code>keep-with-block</code>
    tells Prince to keep it together with the whole paragraph with the footnote call.
    </p><p class="note">
    The property must be applied to the paragraph in which the footnote	occurs, not
    to the footnote element itself.
	</p></div><div><div id="prop-prince-footnote-policy-seealso">See Also</div><ul><li><a href="/doc/styling#footnotes">Footnotes</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-forced-breaks">-prince-forced-breaks*  <a class="self-link" href="#prop-prince-forced-breaks"></a></summary><div><div><div id="prop-prince-forced-breaks-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-forced-breaks: short |&#160;full</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>short</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-forced-breaks-comments">Comments</div><p>This property controls whether a line ended by a &#8220;preserved newline&#8221;
	(such as introduced by <code>&lt;br&gt;</code>)
	should preferably appear to be a normal full line (as if ended only by normal line wrapping),
	or whether being shorter than a normal full line is actually preferable,
	for example to mark a deliberate break.</p><p>The difference is particularly marked in justified text,
	where lines ended by <code>-prince-forced-breaks:full</code> are subject to
	justification like most other lines.</p><p>(Limitation: At the time of writing, this property only affects justified text.)</p><p>This property only applies to <a href="/doc/prince-for-books">Prince for Books</a>.</p></div><div><div id="prop-prince-forced-breaks-seealso">See Also</div><ul><li><a href="/doc/prince-for-books#line-breaking">Line breaking</a></li><li><code><a href="/doc/prince-for-books#the-property-prince-forced-breaks">-prince-forced-breaks</a></code></li><li><code><a href="#prop-text-align-last">text-align-last</a></code></li><li><code><a href="#prop-white-space">white-space</a></code></li><li><code><a href="#prop-prince-wrap-inside">-prince-wrap-inside</a></code></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-hyphenate-patterns">-prince-hyphenate-patterns*  <a class="self-link" href="#prop-prince-hyphenate-patterns"></a></summary><div><div><div id="prop-prince-hyphenate-patterns-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-hyphenate-patterns: none |&#160;url(&#160;<i>patterns-url</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-hyphenate-patterns-comments">Comments</div><p>
    This property is used to point to a hyphenation dictionary.  Normally this is
    selected automatically, based on the current language.
    </p><p>
    The <code>url()</code> argument can take local paths or remote HTTP URLs as argument.
    </p><p class="note">
        The property <a href="#prop-hyphenate-patterns"><code>hyphenate-patterns</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-hyphenate-patterns-seealso">See Also</div><ul><li><a href="/doc/cookbook#hyphenation">Hyphenation</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-hyphenate-after">-prince-hyphenate-after*  <a class="self-link" href="#prop-prince-hyphenate-after"></a></summary><div><div><div id="prop-prince-hyphenate-after-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-hyphenate-after: <i>integer</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>1</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-hyphenate-after-comments">Comments</div><p>
	This property specifies the minimum number of letters in a word that
	may be moved to the next line when the word is hyphenated.
	</p><p class="note">
        The property <a href="#prop-hyphenate-after"><code>hyphenate-after</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-hyphenate-after-seealso">See Also</div><ul><li><a href="/doc/cookbook#hyphenation">Hyphenation</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-hyphenate-before">-prince-hyphenate-before*  <a class="self-link" href="#prop-prince-hyphenate-before"></a></summary><div><div><div id="prop-prince-hyphenate-before-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-hyphenate-before: <i>integer</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>1</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-hyphenate-before-comments">Comments</div><p>
	This property specifies the minimum number of letters in a word that
	may be left at the end of a line when the word is hyphenated.
	</p><p class="note">
        The property <a href="#prop-hyphenate-before"><code>hyphenate-before</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-hyphenate-before-seealso">See Also</div><ul><li><a href="/doc/cookbook#hyphenation">Hyphenation</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-hyphenate-character">-prince-hyphenate-character*  <a class="self-link" href="#prop-prince-hyphenate-character"></a></summary><div><div><div id="prop-prince-hyphenate-character-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-hyphenate-character: auto |&#160;"string"</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-hyphenate-character-comments">Comments</div><p>
	This property specifies the character that is shown at the end of a line
	when the word is hyphenated.
	</p><p class="note">
        The property <a href="#prop-hyphenate-character"><code>hyphenate-character</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-hyphenate-character-seealso">See Also</div><ul><li><a href="/doc/cookbook#hyphenation">Hyphenation</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-hyphenate-limit-lines">-prince-hyphenate-limit-lines*  <a class="self-link" href="#prop-prince-hyphenate-limit-lines"></a></summary><div><div><div id="prop-prince-hyphenate-limit-lines-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-hyphenate-limit-lines: no-limit |&#160;<i>integer</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>no-limit</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-hyphenate-limit-lines-comments">Comments</div><p>
	This property specifies the maximum number of consecutive lines that
	may end with a hyphenated word.
	</p><p class="note">
        The property <a href="#prop-hyphenate-lines"><code>hyphenate-lines</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-hyphenate-limit-lines-seealso">See Also</div><ul><li><a href="/doc/cookbook#hyphenation">Hyphenation</a></li></ul></div><div><div id="prop-prince-hyphenate-limit-lines-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-text-4/#hyphenate-line-limits">CSS Text Module Level 4</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-hyphenate-lines">-prince-hyphenate-lines*  <a class="self-link" href="#prop-prince-hyphenate-lines"></a></summary><div><div><div id="prop-prince-hyphenate-lines-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-hyphenate-lines: no-limit |&#160;<i>integer</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>no-limit</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-hyphenate-lines-comments">Comments</div><p>
	This property specifies the maximum number of consecutive lines that
	may end with a hyphenated word.
	</p><p class="note">
        The property <a href="#prop-prince-hyphenate-limit-lines"><code>-prince-hyphenate-limit-lines</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-hyphenate-lines-seealso">See Also</div><ul><li><a href="/doc/cookbook#hyphenation">Hyphenation</a></li></ul></div><div><div id="prop-prince-hyphenate-lines-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-text-4/#hyphenate-line-limits">CSS Text Module Level 4</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-image-magic">-prince-image-magic*  <a class="self-link" href="#prop-prince-image-magic"></a></summary><div><div><div id="prop-prince-image-magic-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-image-magic: none |&#160;[ snap-to-integer-coords ||&#160;ignore-icc-profile ||&#160;[ jpeg-verbatim |&#160;recompress-jpeg(&#160;<i>percent</i>&#160;) ] ||&#160;[ convert-to-jpeg |&#160;convert-to-jpeg(&#160;<i>percent</i>&#160;) ] ]</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>image elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-image-magic-comments">Comments</div><p>
    This property performs various image-related, Prince-specific tasks that do not
    fit into other existing CSS properties. It applies magic to images!
    </p><p>
    The <code>snap-to-integer-coords</code> value can be used to avoid blurring of
    images in some PDF viewers.
    </p><p>
    The <code>ignore-icc-profile</code> value causes Prince to ignore any ICC color
    profile embedded in the image.
    </p><p>
    The <code>jpeg-verbatim</code> value inhibits the normal stripping that Prince
    performs, where unnecessary metadata is removed from JPEG images when they are
    embedded in the PDF file.
    </p><p>
    When <code>recompress-jpeg(quality%)</code> is specified for this property, Prince
    will recompress JPEG images to the specified percentage to save space when
    embedding them in the PDF output.
    </p><p>
    The <code>convert-to-jpeg</code> keyword or the <code>convert-to-jpeg(quality%)</code>
    function convert non-JPEG images to JPEG, so that they take less space (but may look blurry).
    </p><p class="note">
    Several of the values can be combined, to perform more than one
    magic on images.
    </p></div><div><div id="prop-prince-image-magic-seealso">See Also</div><ul><li><a href="/doc/graphics#image-size">Image Size</a></li><li><a href="/doc/cookbook#image-magic">Image Magic</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-image-resolution">-prince-image-resolution*  <a class="self-link" href="#prop-prince-image-resolution"></a></summary><div><div><div id="prop-prince-image-resolution-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-image-resolution: <i>dpi</i> |&#160;normal |&#160;auto [ , normal |&#160;<i>dpi</i> ]?</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>image elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-image-resolution-comments">Comments</div><p>
    This property determines the resolution of an image.  The value <code>normal</code>
    means 96dpi, or else the current CSS DPI setting.  A custom DPI value can also
    be specified.  The value <code>auto</code> means to check the original resolution
    of the image.  One can specify a second value, as for example <code>auto, normal</code>
    or <code>auto, 300dpi</code> in order to check the original resolution of the
    image first, and to fall back on the second value if the image doesn't contain
    resolution information.
    </p><p class="note">
        The property <a href="#prop-image-resolution"><code>image-resolution</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-image-resolution-seealso">See Also</div><ul><li><a href="/doc/graphics#image-size">Image Size</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-linebreak-magic">-prince-linebreak-magic*  <a class="self-link" href="#prop-prince-linebreak-magic"></a></summary><div><div><div id="prop-prince-linebreak-magic-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-linebreak-magic: none |&#160;auto</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-linebreak-magic-comments">Comments</div><p>
	This property enables line-breaking in certain situations even in the
	absence of whitespace. For example, after slashes in long URLs. It can
	be disabled for situations in which more precise control over
	line-breaking behavior is preferred.
	</p></div><div><div id="prop-prince-linebreak-magic-seealso">See Also</div><ul><li><a href="/doc/styling#paragraph-formatting">Paragraph formatting</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-line-break-choices">-prince-line-break-choices*  <a class="self-link" href="#prop-prince-line-break-choices"></a></summary><div><div><div id="prop-prince-line-break-choices-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-line-break-choices: body |&#160;heading |&#160;title |&#160;body-gready |&#160;body-lookahead |&#160;heading-gready |&#160;heading-lookahead |&#160;title-gready |&#160;title-lookahead |&#160;fast</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>body</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-line-break-choices-comments">Comments</div><p>
	This property is used for fine tuning the line breaking approach.
	</p><p>
    The keyword <code>title</code> is intended for title pages of books or
    chapters, where phrasing considerations are of prime consideration even
    at the cost of extremely unbalanced lines.
    </p><p>
    The keyword <code>heading</code>, on the other hand, is closer to
    <code>body</code>, differing mainly in that it's less likely to hyphenate,
    and is more willing to make the first line(s) a little shorter if doing so
    avoids a short last line.
    </p><p>
    The <code>\*-greedy</code> keywords decide on line breaks solely based on the
    current line and on the length of the next word, never going back to change a
    decision on a line in the light of line-breaking issues encountered later.
    </p><p>
    The <code>\*-lookahead</code> keywords, on the other hand, enable paragraph-at-a-time
    line-breaking not just based on what seems best for the current line, but also
    considering the effect on future lines.
    </p><p>
    The keyword <code>fast</code> can be used for quick web-browers&#8211;style line
    breaking, useful for testing the effect of styling changes that don't depend
    on good line breaking.
    </p><p>
    For more details, please see <a href="/doc/prince-for-books#line-breaking">Line breaking</a>.
    </p><p>
    This property only applies to <a href="/doc/prince-for-books">Prince for Books</a>.
    </p><p class="note">
        The property <a href="#prop-prince-text-wrap"><code>-prince-text-wrap</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-line-break-choices-seealso">See Also</div><ul><li><a href="/doc/prince-for-books#line-breaking">Line breaking</a></li><li><code><a href="/doc/prince-for-books#the-property-prince-line-break-choices">-prince-line-break-choices</a></code></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-link">-prince-link*  <a class="self-link" href="#prop-prince-link"></a></summary><div><div><div id="prop-prince-link-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-link: none |&#160;url(&#160;<i>target-url</i>&#160;) |&#160;attr(&#160;<i>target-attr</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-link-comments">Comments</div><p>
    This property makes an element into a link to the specified URL.
    </p><p class="note">
        The property <a href="#prop-link"><code>link</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-link-seealso">See Also</div><ul><li><a href="/doc/prince-output#pdf-links">PDF Links</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-margin-alt">-prince-margin-alt* <a class="self-link" href="#prop-prince-margin-alt"></a></summary><div><div><div id="prop-prince-margin-alt-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-margin-alt: none |&#160;<i>length</i> <i>length</i>?</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all top- or bottom-floated elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-margin-comments">Comments</div><p>
        The <code>-prince-margin-alt</code> property defines a top and/or bottom margin
        for elements floated to the top or bottom of a page or column,
        by replacing the value of the corresponding margin property.
    </p><p>
    The default value is <code>none</code>, which means that no alternative margin value
    is defined, and thus the default margin, specified with the <code>margin</code>
    property, is applied.
    </p><p>
    If only one value is given, it refers to both the top and bottom alternative margin.
    When two values are given, the first one refers to the top alternative margin, while
    the second one refers to the bottom one.
    </p><p class="note">
        The property <a href="#prop-margin-alt"><code>margin-alt</code></a> can be used as an alias.
        </p></div><div><div id="prop-margin-seealso">See Also</div><ul><li><a href="/doc/styling#margin">Margin</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-margin-inside">-prince-margin-inside*  <a class="self-link" href="#prop-prince-margin-inside"></a></summary><div><div><div id="prop-prince-margin-inside-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-margin-inside: auto |&#160;<i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements, except elements with table display types other than table-caption, table and inline-table</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-margin-inside-comments">Comments</div><p>
	The <code>-prince-margin-inside</code> property overrides the value of the
	<code>margin-right</code> property if the element is on a left-facing
	page and overrides the value of the <code>margin-left</code> property
	if the element is on a right-facing page. The result is a horizontal
	margin on the side of the element that is on the "inside" of the
	two-page spread.
	</p><p class="note">
        The property <a href="#prop-margin-inside"><code>margin-inside</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-margin-inside-seealso">See Also</div><ul><li><a href="/doc/styling#margin">Margin</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-margin-outside">-prince-margin-outside*  <a class="self-link" href="#prop-prince-margin-outside"></a></summary><div><div><div id="prop-prince-margin-outside-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-margin-outside: auto |&#160;<i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements, except elements with table display types other than table-caption, table and inline-table</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-margin-outside-comments">Comments</div><p>
	The <code>-prince-margin-outside</code> property overrides the value of the
	<code>margin-left</code> property if the element is on a left-facing
	page and overrides the value of the <code>margin-right</code> property
	if the element is on a right-facing page. The result is a horizontal
	margin on the side of the element that is on the "outside" of the
	two-page spread.
	</p><p class="note">
        The property <a href="#prop-margin-outside"><code>margin-outside</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-margin-outside-seealso">See Also</div><ul><li><a href="/doc/styling#margin">Margin</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-mark-length">-prince-mark-length*  <a class="self-link" href="#prop-prince-mark-length"></a></summary><div><div><div id="prop-prince-mark-length-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-mark-length: <i>length</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>24pt</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@page</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-prince-mark-length-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@page { -prince-mark-length: 2cm }</code></pre></div></div></div><div><div id="prop-prince-mark-length-comments">Comments</div><p>
	This CSS at-rule descriptor can be used to specify the length of crop marks,
	beginning after the offset from the page area and extending towards
	the edge of the paper.
	</p></div><div><div id="prop-prince-mark-length-seealso">See Also</div><ul><li><code><a href="#prop-marks">marks</a></code></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-mark-offset">-prince-mark-offset*  <a class="self-link" href="#prop-prince-mark-offset"></a></summary><div><div><div id="prop-prince-mark-offset-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-mark-offset: auto |&#160;[ <i>length</i> ]{1..4}</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@page</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-prince-mark-offset-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@page { -prince-mark-offset: 6pt }</code></pre></div></div></div><div><div id="prop-prince-mark-offset-comments">Comments</div><p>
	This CSS at-rule descriptor can be used to specify the offset between crop and
	cross marks and the page area.
	</p></div><div><div id="prop-prince-mark-offset-seealso">See Also</div><ul><li><code><a href="#prop-marks">marks</a></code></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-mark-width">-prince-mark-width*  <a class="self-link" href="#prop-prince-mark-width"></a></summary><div><div><div id="prop-prince-mark-width-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-mark-width: <i>width</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0.1pt</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@page</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-prince-mark-width-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@page { -prince-mark-width: 1pt }</code></pre></div></div></div><div><div id="prop-prince-mark-width-comments">Comments</div><p>
	This CSS at-rule descriptor can be used to specify the line width of the crop and
	cross marks.
	</p></div><div><div id="prop-prince-mark-width-seealso">See Also</div><ul><li><code><a href="#prop-marks">marks</a></code></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-n-lines">-prince-n-lines*  <a class="self-link" href="#prop-prince-n-lines"></a></summary><div><div><div id="prop-prince-n-lines-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-n-lines: auto |&#160;<i>integer</i>? [ longer |&#160;shorter ] |&#160;change |&#160;<i>integer</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>"paragraphs": block container boxes that establish
        inline formatting contexts
    </td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-n-lines-comments">Comments</div><p>
    This property is for use in the pagination phase of typesetting, for
    ensuring that page ends are even while avoiding widows and other awkward
    breaks.
    </p><p>
    Values other than the initial value of <code>auto</code> request that the
    paragraph occupy the given number of lines; where values other than a simple
    integer are relative to the number of lines that the paragraph would have
    occupied if this property still had its initial value (<code>auto</code>).
    </p><p>
    The value <code>change</code> means to make the paragraph either a line
    longer or shorter, whichever will be deemed to look better.  This value is
    provided for the common case that a page break opportunity exists both at a
    line earlier and at a line later than where the page end would naturally
    fall, as would typically be the case if the only relevant restriction arises
    from <code>widows:2</code> or <code>orphans:2</code> or a minor heading that
    occupies two body lines worth of height.  Thus, this tends to be the most
    commonly used value for this property, other than leaving at its initial
    value.
    </p><p>
    A simple integer value is the least convenient value to use (since choosing
    the desired number requires counting the existing number of lines, and since
    this property is most commonly used on long paragraphs).  Its value lies in
    the fact that the result is not subject to variation in "the number of lines
    that the paragraph would otherwise have had", as can occur if this paragraph
    spans a page end, and a subsequent styling change causes some earlier
    content to change in size, affecting what is the last line before the
    break, and if this in turn affects line-breaking decisions made to avoid
    having a hyphenation at the end of a page.
    </p><p>This property only applies to <a href="/doc/prince-for-books">Prince for Books</a>.</p></div><div><div id="prop-prince-n-lines-seealso">See Also</div><ul><li><a href="/doc/prince-for-books#spread-balancing">Spread Balancing</a></li><li><code><a href="/doc/prince-for-books#the-property-prince-n-lines">-prince-n-lines</a></code></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-page-fill">-prince-page-fill*  <a class="self-link" href="#prop-prince-page-fill"></a></summary><div><div><div id="prop-prince-page-fill-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-page-fill: prefer-balance |&#160;prefer-fill</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>prefer-fill</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@page</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-page-fill-comments">Comments</div><p>
	This property determines whether Prince should balance text layout on page
    spreads.
	</p><p>This property only applies to <a href="/doc/prince-for-books">Prince for Books</a>.</p></div><div><div id="prop-prince-page-fill-seealso">See Also</div><ul><li><a href="/doc/prince-for-books#spread-balancing">Spread Balancing</a></li><li><code><a href="/doc/prince-for-books#the-property-prince-n-lines">-prince-n-lines</a></code></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-page-group">-prince-page-group*  <a class="self-link" href="#prop-prince-page-group"></a></summary><div><div><div id="prop-prince-page-group-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-page-group: start |&#160;auto</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-page-group-comments">Comments</div><p>
	This property determines whether the first page of this element
	matches the :first page class selector.
	</p><p class="note">
        The property <a href="#prop-page-group"><code>page-group</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-page-group-seealso">See Also</div><ul><li><a href="/doc/paged#page-groups">Page groups</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-pdf-color-conversion">-prince-pdf-color-conversion*  <a class="self-link" href="#prop-prince-pdf-color-conversion"></a></summary><div><div><div id="prop-prince-pdf-color-conversion-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-pdf-color-conversion: auto |&#160;none</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-pdf-color-conversion-comments">Comments</div><p>
    As a property, <code>-prince-pdf-color-conversion</code>
    is applied to elements in order to convert the colors of the elements to
    the output intent color space, if provided.  The value <code>none</code>
    can be used to prevent color conversion for individual elements if the
    document itself is converted.
    </p><p class="note">
    The same property, used as a descriptor in the <code>@prince-pdf</code>
    at-rule, has a different syntax - see <a href="#prop-prince-pdf-color-conversion-syntax2">below</a>.
	</p></div></div><div><div><div id="prop-prince-pdf-color-conversion-syntax2">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-pdf-color-conversion: none |&#160;[&#160;output-intent |&#160;full |&#160;url(&#160;<i>color-profile</i>&#160;)&#160;] [&#160;[&#160;absolute-colorimetric |&#160;relative-colorimetric |&#160;relative-colorimetric-bpc |&#160;perceptual |&#160;perceptual-bpc |&#160;saturation |&#160;saturation-bpc&#160;] ||&#160;no-embed&#160;]?</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>output-intent</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@prince-pdf</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td>
              no
            </td></tr></table></div></div></div><div><div id="prop-prince-pdf-color-conversion-comments2">Comments</div><p>
    As a descriptor inside the
    <a href="/doc/css-refs#at-prince-pdf"><code>@prince-pdf</code></a>
    at-rule, <code>-prince-pdf-color-conversion</code> is used
    to convert the colors of the PDF to the output intent color space, or to a
    color profile of choice.
    </p><p>
    When used with the default value <code>output-intent</code>, it functions
    like the
    <a href="/doc/command-line#cl-convert-colors"><code>--convert-colors</code></a>
    command-line option - the colors are converted to the output intent color profile.
	</p><p class="note">
    The value <code>full</code> is a deprecated synonym for <code>output-intent</code>.
    </p><p>
    The <code>url()</code> function allows for an ICC color profile to convert
    to, different from the output-intent.
    </p><p>
    The optional second argument comprises the rendering intent: Black point compensation ("BPC") will most commonly be used with a relative-colorimetric rendering intent.  Prince however also accepts black point compensation with perceptual and saturation rendering intents because "there are atypical profiles [...] in which BPC may actually be beneficial for Perceptual or Saturation processing" (quoted from the in-depth analysis <a href="http://www.color.org/WP40-Black_Point_Compensation_2010-07-27.pdf">Black-point compensation: theory and application</a>).
    </p><p>
    Prince also allows for the additional <code>no-embed</code> keyword, which causes the color conversion target ICC profile to not be embedded in the output PDF, unless required by the PDF profile.  The converted colors will be left device dependent or else implicitly mapped to the output intent color space.
    </p><p class="note">
    When the descriptor is used as a property, applied to single elements, it
    has a different syntax - see <a href="#prop-prince-pdf-color-conversion">above</a>.
    </p></div><div><div id="prop-prince-pdf-color-conversion-seealso2">See Also</div><ul><li><a href="/doc/graphics#color-conversion">Color conversion</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-pdf-color-options">-prince-pdf-color-options*  <a class="self-link" href="#prop-prince-pdf-color-options"></a></summary><div><div><div id="prop-prince-pdf-color-options-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-pdf-color-options: auto |&#160;use-true-black |&#160;use-rich-black</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@prince-pdf</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-pdf-color-options-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@prince-pdf {
    -prince-pdf-color-options: use-rich-black;
}</code></pre></div></div></div><div><div id="prop-prince-pdf-color-options-comments">Comments</div><p>This property may be used to control the encoding of RGB blacks and grays:
		when <code>use-true-black</code> is used, they are encoded in the /DeviceGray colorspace
		in the PDF, instead of /DeviceRGB, whereas <code>use-rich-black</code> disables this behavior
		and keeps all the colors in RGB. Currently, auto is equivalent to <code>use-true-black</code>.
		</p></div><div><div id="prop-prince-pdf-color-options-seealso">See Also</div><ul><li><a href="/doc/graphics#rich-black-and-true-black">Rich black and true black</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-pdf-destination">-prince-pdf-destination*  <a class="self-link" href="#prop-prince-pdf-destination"></a></summary><div><div><div id="prop-prince-pdf-destination-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-pdf-destination: none |&#160;"name" |&#160;attr(&#160;<i>attr</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-pdf-destination-comments">Comments</div><p>
    This property may be used to create "named destinations" (<code>nameddest</code>)
    in generated PDF files which can be linked to from other documents.
    </p></div><div><div id="prop-prince-pdf-destination-seealso">See Also</div><ul><li><a href="/doc/prince-output#pdf-links">PDF Links</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-pdf-display-doc-title">-prince-pdf-display-doc-title*  <a class="self-link" href="#prop-prince-pdf-display-doc-title"></a></summary><div><div><div id="prop-prince-pdf-display-doc-title-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-pdf-display-doc-title: true |&#160;false</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>false</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@prince-pdf</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-pdf-display-doc-title-comments">Comments</div><p>
    This property may be used to control whether the document file name or the
    document title is displayed in the PDF.
    </p><p>
    Prince will force it to true for the PDF/UA-1 profile, which requires it,
    and also for PDF/A-1a and PDF/A-3a which technically do not require it but
    users may still expect it - or they will see a warning if they run the
    Adobe accessibility checker on their PDFs.
    </p></div><div><div id="prop-prince-pdf-display-doc-title-seealso">See Also</div><ul><li><a href="/doc/prince-output#pdf-pages">PDF Pages</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-pdf-duplex">-prince-pdf-duplex*  <a class="self-link" href="#prop-prince-pdf-duplex"></a></summary><div><div><div id="prop-prince-pdf-duplex-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-pdf-duplex: auto |&#160;simplex |&#160;duplex-flip-short-edge |&#160;duplex-flip-long-edge</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@prince-pdf</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-pdf-duplex-comments">Comments</div><p>
	This property may be used inside the
    <a href="/doc/css-refs#at-prince-pdf"><code>@prince-pdf</code></a>
    at-rule to set the <code>Duplex</code> property in the
    <code>PDFViewerPreferences</code> dictionary.
	</p></div><div><div id="prop-prince-pdf-duplex-seealso">See Also</div><ul><li><a href="/doc/prince-output#pdf-printing">PDF Printing</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-pdf-event-scripts">-prince-pdf-event-scripts*  <a class="self-link" href="#prop-prince-pdf-event-scripts"></a></summary><div><div><div id="prop-prince-pdf-event-scripts-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-pdf-event-scripts: <br />&#160;&#160;&#160;none
&#160;&#160;&#160;|&#160;[ [ will-close |&#160;will-save |&#160;did-save |&#160;will-print |&#160;did-print ] [ "JavaScript" |&#160;<i>url</i> ] ]#</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>""</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@prince-pdf</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-prince-pdf-event-scripts-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@prince-pdf {
    -prince-pdf-event-scripts: will-close url("onclose.js"), will-print url("onprint.js");
}</code></pre></div></div></div><div><div id="prop-prince-pdf-event-scripts-comments">Comments</div><p>
	This property can be used to include JavaScript code that will be
    executed in the PDF when printing, saving, and closing the PDF,
    known as "Document Action" scripts.
	</p><p class="note">
    Please be advised that these scripts are dependent on the PDF viewer, and
    in many cases might only work in Adobe Acrobat products.
    </p></div><div><div id="prop-prince-pdf-event-scripts-seealso">See Also</div><ul><li><a href="/doc/prince-output#pdf-actions">PDF Actions</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-pdf-link-type">-prince-pdf-link-type*  <a class="self-link" href="#prop-prince-pdf-link-type"></a></summary><div><div><div id="prop-prince-pdf-link-type-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-pdf-link-type: [ auto |&#160;file ]? [ same-window |&#160;new-window ]? |&#160;web</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@prince-pdf</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-pdf-link-type-comments">Comments</div><p>
	This property controls whether relative links should be embedded in the PDF
    as web (URL) links or file links (by default they will be resolved against
    the base URL of the input document), and whether to open the links in the
    same or a new window.
	</p><p>
    Note however that the optional link target keywords <code>same-window</code>
    and <code>new-window</code> only affect links to local PDF files.
    </p></div><div><div id="prop-prince-pdf-link-type-seealso">See Also</div><ul><li><a href="/doc/prince-output#pdf-links">PDF Links</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-pdf-open-action">-prince-pdf-open-action*  <a class="self-link" href="#prop-prince-pdf-open-action"></a></summary><div><div><div id="prop-prince-pdf-open-action-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-pdf-open-action: none |&#160;[ print |&#160;command(&#160;<i>ident</i>&#160;) |&#160;zoom(&#160;fit-page |&#160;fit-width |&#160;fit-height |&#160;<i>percent</i>&#160;) ]+</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@prince-pdf</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-prince-pdf-open-action-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@prince-pdf {
    -prince-pdf-open-action: zoom(fit-page) print;
}</code></pre></div></div></div><div><div id="prop-prince-pdf-open-action-comments">Comments</div><p>
	This property specifies a space-separated list of actions to perform when
    the PDF file is opened, like eg. popping up the print dialog box
    automatically, or setting the default zoom level for PDF documents.  Any
    arbitrary identifier can be specified, although these may be PDF viewer
    specific; Acrobat can take just about any menu item.
	</p></div><div><div id="prop-prince-pdf-open-action-seealso">See Also</div><ul><li><a href="/doc/prince-output#pdf-actions">PDF Actions</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-pdf-output-intent">-prince-pdf-output-intent*  <a class="self-link" href="#prop-prince-pdf-output-intent"></a></summary><div><div><div id="prop-prince-pdf-output-intent-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-pdf-output-intent: auto |&#160;url(&#160;<i>filename</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@prince-pdf</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-prince-pdf-output-intent-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@prince-pdf {
    -prince-pdf-output-intent: url("ISOcoated_v2_eci.icc")
}</code></pre></div></div></div><div><div id="prop-prince-pdf-output-intent-comments">Comments</div><p>
    This property is used inside a <a href="/doc/css-refs#at-prince-pdf"><code>@prince-pdf</code></a>
    at-rule to select the intended output color space of the generated PDF file.
    </p></div><div><div id="prop-prince-pdf-output-intent-seealso">See Also</div><ul><li><code><a href="#prop-prince-fallback-cmyk-profile">-prince-fallback-cmyk-profile</a></code></li><li><a href="/doc/graphics#color-management">Color Management</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-pdf-page-colorspace">-prince-pdf-page-colorspace*  <a class="self-link" href="#prop-prince-pdf-page-colorspace"></a></summary><div><div><div id="prop-prince-pdf-page-colorspace-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-pdf-page-colorspace: auto |&#160;none |&#160;rgb |&#160;cmyk |&#160;gray</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@page</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-pdf-page-colorspace-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@page {
    -prince-pdf-page-colorspace: cmyk;
}</code></pre></div></div></div><div><div id="prop-prince-pdf-page-colorspace-comments">Comments</div><p>
	This CSS at-rule descriptor can control the colorspace of pages in the PDF
	file, which affects blending of transparent content.  The keyword
	<code>auto</code> uses the output intent color space or the destination
	color space when color conversion is enabled, or falls back to
	<code>rgb</code> in the absence of a specified output intent.
	</p></div><div><div id="prop-prince-pdf-page-colorspace-seealso">See Also</div><ul><li><a href="/doc/graphics#page-color-space">Page color space</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-pdf-page-label">-prince-pdf-page-label*  <a class="self-link" href="#prop-prince-pdf-page-label"></a></summary><div><div><div id="prop-prince-pdf-page-label-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-pdf-page-label: auto |&#160;<i>content</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@page</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-prince-pdf-page-label-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@page {
    -prince-pdf-page-label: counter(page, lower-roman)
}</code></pre></div></div></div><div><div id="prop-prince-pdf-page-label-comments">Comments</div><p>
	This CSS at-rule descriptor can be used to set the page label that will be displayed
	in the PDF viewer.
    </p><p>
    Several ways of creating content are here defined by means of functions - the
    detailed explanation can be found in the <a href="/doc/gen-content#generated-content-functions">Generated Content Functions</a>
    section.
    </p></div><div><div id="prop-prince-pdf-page-label-seealso">See Also</div><ul><li><a href="/doc/gen-content#generated-content-functions">Generated Content Functions</a></li><li><a href="/doc/prince-output#pdf-pages">PDF Pages</a></li><li><code><a href="#prop-content">content</a></code></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-pdf-page-layout">-prince-pdf-page-layout*  <a class="self-link" href="#prop-prince-pdf-page-layout"></a></summary><div><div><div id="prop-prince-pdf-page-layout-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-pdf-page-layout: auto |&#160;single-page |&#160;two-page |&#160;two-page-left |&#160;two-page-right |&#160;one-column |&#160;two-column |&#160;two-column-left |&#160;two-column-right</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@prince-pdf</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-prince-pdf-page-layout-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@prince-pdf {
    -prince-pdf-page-layout: two-column
}</code></pre></div></div></div><div><div id="prop-prince-pdf-page-layout-comments">Comments</div><p>
	This property can be used to set the default page layout for the PDF
	file when it is opened. For example, whether the PDF pages should be
	displayed in one or two columns.
	</p></div><div><div id="prop-prince-pdf-page-layout-seealso">See Also</div><ul><li><a href="/doc/prince-output#pdf-pages">PDF Pages</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-pdf-page-mode">-prince-pdf-page-mode*  <a class="self-link" href="#prop-prince-pdf-page-mode"></a></summary><div><div><div id="prop-prince-pdf-page-mode-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-pdf-page-mode: auto |&#160;show-attachments |&#160;show-bookmarks |&#160;fullscreen</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@prince-pdf</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-prince-pdf-page-mode-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@prince-pdf {
    -prince-pdf-page-mode: show-bookmarks
}</code></pre></div></div></div><div><div id="prop-prince-pdf-page-mode-comments">Comments</div><p>
	This property can be used to set the default page mode for the PDF
	file when it is opened. For example, whether the bookmarks panel should
	be displayed, and whether the viewer should be fullscreen.
	</p></div><div><div id="prop-prince-pdf-page-mode-seealso">See Also</div><ul><li><a href="/doc/prince-output#pdf-pages">PDF Pages</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-pdf-paper-tray">-prince-pdf-paper-tray*  <a class="self-link" href="#prop-prince-pdf-paper-tray"></a></summary><div><div><div id="prop-prince-pdf-paper-tray-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-pdf-paper-tray: auto |&#160;pick-tray-by-pdf-size</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@prince-pdf</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-prince-pdf-paper-tray-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@prince-pdf {
    -prince-pdf-paper-tray: pick-tray-by-pdf-size
}</code></pre></div></div></div><div><div id="prop-prince-pdf-paper-tray-comments">Comments</div><p>
	This property controls the PickTrayByPDFSize flag in generated PDF
	files, which specifies whether the PDF page size is used to select
    the input paper tray. (See the checkbox in the Acrobat print dialog).
	</p></div><div><div id="prop-prince-pdf-paper-tray-seealso">See Also</div><ul><li><a href="/doc/prince-output#pdf-printing">PDF Printing</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-pdf-print-scaling">-prince-pdf-print-scaling*  <a class="self-link" href="#prop-prince-pdf-print-scaling"></a></summary><div><div><div id="prop-prince-pdf-print-scaling-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-pdf-print-scaling: auto |&#160;none</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@prince-pdf</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-prince-pdf-print-scaling-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@prince-pdf {
    -prince-pdf-print-scaling: none
}</code></pre></div></div></div><div><div id="prop-prince-pdf-print-scaling-comments">Comments</div><p>
	This property can be used to disable print scaling for the PDF file when
    it is printed.
	</p></div><div><div id="prop-prince-pdf-print-scaling-seealso">See Also</div><ul><li><a href="/doc/prince-output#pdf-printing">PDF Printing</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-pdf-profile">-prince-pdf-profile*  <a class="self-link" href="#prop-prince-pdf-profile"></a></summary><div><div><div id="prop-prince-pdf-profile-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-pdf-profile: none |&#160;"Profile"</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@prince-pdf</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-prince-pdf-profile-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@prince-pdf {
    -prince-pdf-profile: "PDF/X-3:2003"
}</code></pre></div></div></div><div><div id="prop-prince-pdf-profile-comments">Comments</div><p>
    PDF Profiles are used to optimize the PDF file for its specific use - for
    more details and the supported PDF profiles, see <a href="/doc/prince-output#pdf-versions-and-profiles">PDF Versions and Profiles</a>.
    </p></div><div><div id="prop-prince-pdf-profile-seealso">See Also</div><ul><li><a href="/doc/prince-output#pdf-versions-and-profiles">PDF Versions and Profiles</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-pdf-script">-prince-pdf-script*  <a class="self-link" href="#prop-prince-pdf-script"></a></summary><div><div><div id="prop-prince-pdf-script-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-pdf-script: "JavaScript" |&#160;<i>url</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>""</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@prince-pdf</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-prince-pdf-script-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@prince-pdf {
    -prince-pdf-script: "this.print();"
}</code></pre></div></div></div><div><div id="prop-prince-pdf-script-comments">Comments</div><p>
    This property can be used to include JavaScript code that will be
    executed when the PDF file is opened. A common use case is to activate
    the "Print" dialog automatically.  The script can be located in an
    external JavaScript file, referenced with the <code>url()</code> function.
    </p><p class="note">
    Please be advised that these scripts are dependent on the PDF viewer, and
    in many cases might only work in Adobe Acrobat products.
    </p></div><div><div id="prop-prince-pdf-script-seealso">See Also</div><ul><li><a href="/doc/prince-output#pdf-actions">PDF Actions</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-pdf-tag-type">-prince-pdf-tag-type*  <a class="self-link" href="#prop-prince-pdf-tag-type"></a></summary><div><div><div id="prop-prince-pdf-tag-type-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-pdf-tag-type: auto |&#160;Part |&#160;Art |&#160;Sect |&#160;Div |&#160;Index |&#160;BlockQuote |&#160;Caption |&#160;TOC |&#160;TOCI |&#160;P |&#160;H1 |&#160;H2 |&#160;H3 |&#160;H4 |&#160;H5 |&#160;H6 |&#160;OL |&#160;UL |&#160;LI |&#160;Lbl |&#160;DL |&#160;DL-Div |&#160;DT |&#160;DD |&#160;Span |&#160;Quote |&#160;Table |&#160;BibEntry |&#160;Code |&#160;Figure |&#160;Formula |&#160;Artifact |&#160;none</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-prince-pdf-tag-type-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>ul.toc {
  -prince-pdf-tag-type: TOC;
}
.toc li {
  -prince-pdf-tag-type: TOCI;
}</code></pre></div></div></div><div><div id="prop-prince-pdf-tag-type-comments">Comments</div><p>
    This property is used to influence tagged PDF for XML vocabularies or when
    using custom HTML classes.  The possible values are PDF tag types.
    </p>
    <p>
    The special value <code>none</code> can be used to make specific elements (such as e.g. wrapper span or block elements) transparent in a tagged PDF structure tree.
    </p></div><div><div id="prop-prince-pdf-tag-type-seealso">See Also</div><ul><li><a href="/doc/prince-output#pdf-tags">PDF Tags</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-pdf-xmp">-prince-pdf-xmp*  <a class="self-link" href="#prop-prince-pdf-xmp"></a></summary><div><div><div id="prop-prince-pdf-xmp-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-pdf-xmp: url(&#160;<i>filename</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>""</code></td></tr><tr><th scope="row">
          Applies to
        </th><td /></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-prince-pdf-xmp-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@prince-pdf {
    -prince-pdf-xmp: url("xmp-file.xmp");
}</code></pre></div></div></div><div><div id="prop-prince-pdf-xmp-comments">Comments</div><p>
    This property can be used inside a <a href="/doc/css-refs#at-prince-pdf"><code>@prince-pdf</code></a>
    rule to add XMP metadata to a PDF file.  Currently it takes an XMP
    file as input and includes data from the &lt;x:xmpmeta&gt; element
    and its contents (the xpacket processing instructions are ignored, as
    Prince generates those itself when it produces the PDF file).
    </p><p class="note">
    This property requires either a URL pointing to an XMP
    file, or an encoded <code>data:</code> URL.
    </p></div><div><div id="prop-prince-pdf-xmp-seealso">See Also</div><ul><li><a href="/doc/prince-output#xmp-metadata">XMP Metadata</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-rotate-body">-prince-rotate-body*  <a class="self-link" href="#prop-prince-rotate-body"></a></summary><div><div><div id="prop-prince-rotate-body-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-rotate-body: portrait |&#160;landscape |&#160;<i>angle</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0deg</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@page</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-prince-rotate-body-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@page {
    -prince-rotate-body: landscape
}</code></pre></div></div></div><div><div id="prop-prince-rotate-body-comments">Comments</div><p>
	This CSS at-rule descriptor can be used to rotate the page body, eg. to fit
	landscape content on a portrait page, while leaving the headers and
	footers where they are.
	</p><p>
    It takes multiples of `90deg` as an angle value.
	</p><p>
    Please see the <code><a href="#prop-size">size</a></code> property for determining
    the default orientation of the page.
    </p></div><div><div id="prop-prince-rotate-body-seealso">See Also</div><ul><li><a href="/doc/cookbook#printing-wide-content-sideways">Printing wide content sideways</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-shrink-to-fit">-prince-shrink-to-fit*  <a class="self-link" href="#prop-prince-shrink-to-fit"></a></summary><div><div><div id="prop-prince-shrink-to-fit-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-shrink-to-fit: none |&#160;auto</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@page</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-prince-shrink-to-fit-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@page {
	-prince-shrink-to-fit: auto
}</code></pre></div></div></div><div><div id="prop-prince-shrink-to-fit-comments">Comments</div><p>
	Specifying a value of <code>auto</code> will result in wide web pages being scaled
	down in size to fit the paper width.
	</p></div><div><div id="prop-prince-shrink-to-fit-seealso">See Also</div><ul><li><a href="/doc/cookbook#printing-wide-content-sideways">Printing wide content sideways</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-table-column-span">-prince-table-column-span*  <a class="self-link" href="#prop-prince-table-column-span"></a></summary><div><div><div id="prop-prince-table-column-span-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-table-column-span: <i>number</i> |&#160;attr(&#160;<i>colspan</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>1</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>table cells</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-table-column-span-comments">Comments</div><p>
	This property applies to table cells and determines the number of
	table columns spanned by the table cell. See the <a href="/doc/styling#tables">Tables</a>
    documentation for more details.
	</p><p class="note">
        The property <a href="#prop-table-column-span"><code>table-column-span</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-table-column-span-seealso">See Also</div><ul><li><a href="/doc/styling#tables">Tables</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-table-row-span">-prince-table-row-span*  <a class="self-link" href="#prop-prince-table-row-span"></a></summary><div><div><div id="prop-prince-table-row-span-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-table-row-span: <i>number</i> |&#160;attr(&#160;<i>rowspan</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>1</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>table cells</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-table-row-span-comments">Comments</div><p>
	This property applies to table cells and determines the number of
	table rows spanned by the table cell. See the <a href="/doc/styling#tables">Tables</a>
    documentation for more details.
	</p><p class="note">
        The property <a href="#prop-table-row-span"><code>table-row-span</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-table-row-span-seealso">See Also</div><ul><li><a href="/doc/styling#tables">Tables</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-text-justify">-prince-text-justify*  <a class="self-link" href="#prop-prince-text-justify"></a></summary><div><div><div id="prop-prince-text-justify-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-text-justify: auto |&#160;prince-cjk</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-text-justify-comments">Comments</div><p>
	This property defines how to treat justified text.  The value <code>prince-cjk</code>
    allows space to be inserted between CJK characters when justifying even if there
    aren't any space characters.
	</p></div><div><div id="prop-prince-text-justify-seealso">See Also</div><ul><li><a href="/doc/styling#paragraph-formatting">Paragraph formatting</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-text-replace">-prince-text-replace*  <a class="self-link" href="#prop-prince-text-replace"></a></summary><div><div><div id="prop-prince-text-replace-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-text-replace: none |&#160;[ "search" "replace" ]+</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-text-replace-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>body {
  -prince-text-replace: "s" "\017F"
                       "\017F\20" "s\20";
}</code></pre></div></div></div><div><div id="prop-prince-text-replace-comments">Comments</div><p>
    This property can be used to replace a character string with another one.  In
    the above example, all occurrences of "s" are replaced with the "long s", except
    if in the end of a word, where the replacement is reversed.
	</p></div><div><div id="prop-prince-text-replace-seealso">See Also</div><ul><li><a href="/doc/characters">Character Entities</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-text-wrap">-prince-text-wrap*  <a class="self-link" href="#prop-prince-text-wrap"></a></summary><div><div><div id="prop-prince-text-wrap-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-text-wrap: body |&#160;heading |&#160;title |&#160;body-gready |&#160;body-lookahead |&#160;heading-gready |&#160;heading-lookahead |&#160;title-gready |&#160;title-lookahead |&#160;fast</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>body</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-prince-text-wrap-comments">Comments</div><p>
	This property is used for fine tuning the line breaking approach.
	</p><p>
    The keyword <code>title</code> is intended for title pages of books or
    chapters, where phrasing considerations are of prime consideration even
    at the cost of extremely unbalanced lines.
    </p><p>
    The keyword <code>heading</code>, on the other hand, is closer to
    <code>body</code>, differing mainly in that it's less likely to hyphenate,
    and is more willing to make the first line(s) a little shorter if doing so
    avoids a short last line.
    </p><p>
    The <code>\*-greedy</code> keywords decide on line breaks solely based on the
    current line and on the length of the next word, never going back to change a
    decision on a line in the light of line-breaknig issues encountered later.
    </p><p>
    The <code>\*-lookahead</code> keywords, on the other hand, enable paragraph-at-a-time
    line-breaking not just based on what seems best for the current line, but also
    considering the effect on future lines.
    </p><p>
    The keyword <code>fast</code> can be used for quick web-browers&#8211;style line
    breaking, useful for testing the effect of styling changes that don't depend
    on good line breaking.
    </p><p>
    For more details, please see <a href="/doc/prince-for-books#line-breaking">Line breaking</a>.
    </p><p>
    This property only applies to <a href="/doc/prince-for-books">Prince for Books</a>.
    </p><p class="note">
        The property <a href="#prop-prince-line-break-choices"><code>-prince-line-break-choices</code></a> can be used as an alias.
        </p></div><div><div id="prop-prince-text-wrap-seealso">See Also</div><ul><li><a href="/doc/prince-for-books#line-breaking">Line breaking</a></li><li><code><a href="/doc/prince-for-books#the-property-prince-line-break-choices">-prince-line-break-choices</a></code></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-tooltip">-prince-tooltip*  <a class="self-link" href="#prop-prince-tooltip"></a></summary><div><div><div id="prop-prince-tooltip-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-tooltip: transparent |&#160;none |&#160;normal |&#160;<i>content</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>transparent</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-tooltip-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>*[title] {
  -prince-tooltip: attr(title)
}</code></pre></div></div></div><div><div id="prop-prince-tooltip-comments">Comments</div><p>
    The <code>-prince-tooltip</code> property can be used to create a tooltip when
    hovering an element in the PDF file.  The keyword <code>none</code> actually
    "suppresses" tooltips, which means that it will not show any tooltip for
    objects underneath the selected element, that might have a tooltip.  An empty
    string, or some content that evaluates to an empty string, is treated
    equivalent to <code>none</code>, rather than showing an empty tooltip.
    </p><p>
    Several ways of creating content are here defined by means of functions - the
    detailed explanation can be found in the <a href="/doc/gen-content#generated-content-functions">Generated Content Functions</a>
    section.
    </p><p class="note">
	Tooltips are not a standard PDF feature, and they may
	only work in Adobe Reader and Adobe Acrobat and may not be visible in other
	PDF viewers, such as web browsers.
	</p></div><div><div id="prop-prince-tooltip-seealso">See Also</div><ul><li><a href="/doc/gen-content#generated-content-functions">Generated Content Functions</a></li><li><a href="/doc/gen-content">Generated Content</a></li><li><code><a href="#prop-content">content</a></code></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-trim">-prince-trim*  <a class="self-link" href="#prop-prince-trim"></a></summary><div><div><div id="prop-prince-trim-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-trim: auto |&#160;[ <i>length</i> ]{1..4}</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@page</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-prince-trim-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@page {
	-prince-trim: 60mm
}</code></pre></div></div></div><div><div id="prop-prince-trim-comments">Comments</div><p>
	This CSS at-rule descriptor can be used to specify the size of the trim area of the
	page when crop marks are enabled.
	</p></div><div><div id="prop-prince-trim-seealso">See Also</div><ul><li><a href="/doc/paged#page-style">Page style</a></li><li><code><a href="#prop-bleed">bleed</a></code></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-prince-wrap-inside">-prince-wrap-inside*  <a class="self-link" href="#prop-prince-wrap-inside"></a></summary><div><div><div id="prop-prince-wrap-inside-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>-prince-wrap-inside: auto |&#160;phrase |&#160;avoid</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-prince-wrap-inside-comments">Comments</div><p><code>-prince-wrap-inside:phrase</code> is for marking up a phrase
	that one would weakly prefer to keep on a single line.</p><p>It adds to Prince's perceived cost of breaking within that phrase,
	but only a small cost, comparable to the cost of hyphenating a compound
	adjective such as &#8216;midyear&#8217;.</p><p><code>-prince-wrap-inside:avoid</code> is a stronger directive:
	it avoids breaking the text to which the property is applied even if
	it causes the affected text to be <em>unusually</em> tight, or the previous
	line to be unusually loose;
	but <em>not</em> if either line would become <em>truly exceptionally</em> tightly
	or loosely spaced.</p><p>(Limitation: At the time of writing, <code>-prince-wrap-inside</code> only affects justified text.)</p><p>This property only applies to <a href="/doc/prince-for-books">Prince for Books</a>.</p></div><div><div id="prop-prince-wrap-inside-seealso">See Also</div><ul><li><a href="/doc/prince-for-books#line-breaking">Line breaking</a></li><li><code><a href="/doc/prince-for-books#the-property-prince-wrap-inside">-prince-wrap-inside</a></code></li><li><code><a href="#prop-prince-forced-breaks">-prince-forced-breaks</a></code></li><li><code><a href="#prop-white-space">white-space</a></code></li></ul></div></div></details>

<details><summary id="prop-right">right <a class="self-link" href="#prop-right"></a></summary><div><div><div id="prop-right-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>right: auto |&#160;<i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>positioned elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-right-comments">Comments</div><p>
	This property determines the right offset for positioned elements
	(ie. elements with a <code><a href="#prop-position">position</a></code>
	value of <code>relative</code>, <code>absolute</code> or
	<code>fixed</code>).
	</p></div><div><div id="prop-right-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visuren.html#propdef-right">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-size">size <a class="self-link" href="#prop-size"></a></summary><div><div><div id="prop-size-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>size: <i>paper-size</i> |&#160;<i>length</i> <i>length</i> [ landscape |&#160;portrait ]?</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>Letter</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@page</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-size-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@page { size: A4 }</code></pre></div><div class="programlisting"><pre><code>@page { size: A4 landscape }</code></pre></div><div class="programlisting"><pre><code>@page { size: Letter }</code></pre></div><div class="programlisting"><pre><code>@page { size: 10cm 5cm }</code></pre></div></div></div><div><div id="prop-size-comments">Comments</div><p>
    This CSS at-rule descriptor, used with the
    <a href="/doc/css-refs#at-page"><code>@page</code></a> at-rule, defines
    the size and orientation of the page.  Please see also the
    <code><a href="#prop-prince-rotate-body">-prince-rotate-body</a></code> property to control the
    orientation of selected pages.
    </p></div><div><div id="prop-size-seealso">See Also</div><ul><li><a href="/doc/paged#page-size">Page size</a></li><li><a href="/doc/page-size-keywords">Page Size Keywords</a></li><li><code><a href="#prop-prince-rotate-body">-prince-rotate-body</a></code></li></ul></div><div><div id="prop-size-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css3-page/#page-size-prop">CSS Paged Media Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-src">src <a class="self-link" href="#prop-src"></a></summary><div><div><div id="prop-src-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>src: [ url(&#160;<i>filename</i>&#160;) [ format(&#160;[ "format" ]+&#160;) ]? |&#160;local(&#160;<i>name</i>&#160;) |&#160;<span class="ext">prince-lookup(&#160;<i>name</i>&#160;)</span> ]+</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>n/a</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@font-face</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-src-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@font-face {
    font-family: MyFontA;
    src: local("Local_Font_A");
}
@font-face {
    font-family: MyFontB;
    src: prince-lookup("MyFontA");
}
    </code></pre></div></div></div><div><div id="prop-src-comments">Comments</div><p>
    This CSS at-rule descriptor, used with the
    <a href="/doc/css-refs#at-font-face"><code>@font-face</code></a> at-rule,
    specifies the resource containing font data. It is required for the <code>@font-face</code>
    rule to be valid.
    </p><p>
    Prince supports WOFF (Web Open Font Format), TrueType and OpenType font formats,
    expressed respectively by the <code>woff</code>, <code>truetype</code> and
    <code>opentype</code> format hints with the optional <code>format()</code>
    function.
    </p><p>
    The <code>local()</code> function searches for locally installed system
    fonts, while <code>prince-lookup()</code> will also find fonts defined by
    other <code>@font-face</code> rules.
    </p></div><div><div id="prop-src-seealso">See Also</div><ul><li><a href="/doc/styling#fonts">Fonts</a></li></ul></div><div><div id="prop-src-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-fonts-3/#src-desc">CSS Fonts Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-stop-color">stop-color <a class="self-link" href="#prop-stop-color"></a></summary><div><div><div id="prop-stop-color-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>stop-color: color</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>black</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>SVG elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-stop-color-comments">Comments</div><p>
	The <code>stop-color</code> property only applies to SVG elements.
	</p></div><div><div id="prop-stop-color-seealso">See Also</div><ul><li><a href="/doc/graphics#color">Color</a></li></ul></div><div><div id="prop-stop-color-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/SVG11/pservers.html#StopColorProperty">SVG 1.1</a></li></ul></div></div></details>

<details><summary id="prop-stop-opacity">stop-opacity <a class="self-link" href="#prop-stop-opacity"></a></summary><div><div><div id="prop-stop-opacity-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>stop-opacity: <i>number</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>1</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>SVG elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-stop-opacity-comments">Comments</div><p>
	The <code>stop-opacity</code> property only applies to SVG elements.
	</p></div><div><div id="prop-stop-opacity-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/SVG11/pservers.html#StopOpacityProperty">SVG 1.1</a></li></ul></div></div></details>

<details><summary id="prop-string-set">string-set <a class="self-link" href="#prop-string-set"></a></summary><div><div><div id="prop-string-set-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>string-set: none |&#160;[ <i>ident</i> <i>content</i> ]+</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-string-set-comments">Comments</div><p>
	This property can be used to create a named string, which may then be referenced
    from the <code><a href="#prop-content">content</a></code> property to create generated
    content.  Typically this is achieved with the <code>content()</code> function,
    which retrieves the text of the selected element.
    </p><p>
    But any other means of generating content, as described in the
    <a href="/doc/gen-content#generated-content-functions">Generated Content Functions</a> section, are available.  See also
    <a href="/doc/paged#page-regions">Page regions</a> for more details.
	</p></div><div><div id="prop-string-set-seealso">See Also</div><ul><li><a href="/doc/gen-content#generated-content-functions">Generated Content Functions</a></li><li><code><a href="#prop-content">content</a></code></li></ul></div><div><div id="prop-string-set-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-gcpm-3/#setting-named-strings-the-string-set-pro">CSS Generated Content for Paged Media Module</a></li><li><a href="https://books.spec.whatwg.org/#named-strings">CSS Books</a></li></ul></div></div></details>

<details><summary id="prop-stroke">stroke <a class="self-link" href="#prop-stroke"></a></summary><div><div><div id="prop-stroke-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>stroke: none |&#160;<i>color</i> |&#160;url(&#160;<i>paint-server</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>SVG elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-stroke-comments">Comments</div><p>
	The <code>stroke</code> property only applies to SVG elements.
	</p></div><div><div id="prop-stroke-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/SVG11/painting.html#StrokeProperty">SVG 1.1</a></li></ul></div></div></details>

<details><summary id="prop-stroke-dasharray">stroke-dasharray <a class="self-link" href="#prop-stroke-dasharray"></a></summary><div><div><div id="prop-stroke-dasharray-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>stroke-dasharray: none |&#160;[ <i>length</i> |&#160;<i>percent</i> ]+</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>SVG elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-stroke-dasharray-comments">Comments</div><p>
	The <code>stroke-dasharray</code> property only applies to SVG elements. It
	takes <a href="https://www.w3.org/TR/SVG/types.html#DataTypeList">a comma or
	whitespace separated list</a> of lengths or percentages as argument.
	</p></div><div><div id="prop-stroke-dasharray-seealso">See Also</div><ul><li><a href="https://www.w3.org/TR/SVG/types.html#DataTypeList">Data Type List</a></li></ul></div><div><div id="prop-stroke-dasharray-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/SVG11/painting.html#StrokeDasharrayProperty">SVG 1.1</a></li></ul></div></div></details>

<details><summary id="prop-stroke-dashoffset">stroke-dashoffset <a class="self-link" href="#prop-stroke-dashoffset"></a></summary><div><div><div id="prop-stroke-dashoffset-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>stroke-dashoffset: <i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>SVG elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-stroke-dashoffset-comments">Comments</div><p>
	The <code>stroke-dashoffset</code> property only applies to SVG elements.
	</p></div><div><div id="prop-stroke-dashoffset-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/SVG11/painting.html#StrokeDashoffsetProperty">SVG 1.1</a></li></ul></div></div></details>

<details><summary id="prop-stroke-linecap">stroke-linecap <a class="self-link" href="#prop-stroke-linecap"></a></summary><div><div><div id="prop-stroke-linecap-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>stroke-linecap: butt |&#160;round |&#160;square</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>butt</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>SVG elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-stroke-linecap-comments">Comments</div><p>
	The <code>stroke-linecap</code> property only applies to SVG elements.
	</p></div><div><div id="prop-stroke-linecap-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/SVG11/painting.html#StrokeLinecapProperty">SVG 1.1</a></li></ul></div></div></details>

<details><summary id="prop-stroke-linejoin">stroke-linejoin <a class="self-link" href="#prop-stroke-linejoin"></a></summary><div><div><div id="prop-stroke-linejoin-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>stroke-linejoin: miter |&#160;round |&#160;bevel</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>miter</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>SVG elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-stroke-linejoin-comments">Comments</div><p>
	The <code>stroke-linejoin</code> property only applies to SVG elements.
	</p></div><div><div id="prop-stroke-linejoin-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/SVG11/painting.html#StrokeLinejoinProperty">SVG 1.1</a></li></ul></div></div></details>

<details><summary id="prop-stroke-miterlimit">stroke-miterlimit <a class="self-link" href="#prop-stroke-miterlimit"></a></summary><div><div><div id="prop-stroke-miterlimit-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>stroke-miterlimit: <i>number</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>4</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>SVG elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-stroke-miterlimit-comments">Comments</div><p>
	The <code>stroke-miterlimit</code> property only applies to SVG elements.
	</p></div><div><div id="prop-stroke-miterlimit-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/SVG11/painting.html#StrokeMiterlimitProperty">SVG 1.1</a></li></ul></div></div></details>

<details><summary id="prop-stroke-opacity">stroke-opacity <a class="self-link" href="#prop-stroke-opacity"></a></summary><div><div><div id="prop-stroke-opacity-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>stroke-opacity: <i>number</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>1</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>SVG elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-stroke-opacity-comments">Comments</div><p>
	The <code>stroke-opacity</code> property only applies to SVG elements.
	</p></div><div><div id="prop-stroke-opacity-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/SVG11/painting.html#StrokeOpacityProperty">SVG 1.1</a></li></ul></div></div></details>

<details><summary id="prop-stroke-width">stroke-width <a class="self-link" href="#prop-stroke-width"></a></summary><div><div><div id="prop-stroke-width-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>stroke-width: <i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>1</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>SVG elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-stroke-width-comments">Comments</div><p>
	The <code>stroke-width</code> property only applies to SVG elements.
	</p></div><div><div id="prop-stroke-width-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/SVG11/painting.html#StrokeWidthProperty">SVG 1.1</a></li></ul></div></div></details>

<details><summary id="prop-table-baseline">table-baseline <a class="self-link" href="#prop-table-baseline"></a></summary><div><div><div id="prop-table-baseline-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>table-baseline: <i>number</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>1</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>table and inline-table elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /></div></details>

<details><summary class="ext" title="Prince extension" id="prop-table-column-span">table-column-span*  <a class="self-link" href="#prop-table-column-span"></a></summary><div><div><div id="prop-table-column-span-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>table-column-span: <i>number</i> |&#160;attr(&#160;<i>colspan</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>1</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>table cells</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-table-column-span-comments">Comments</div><p>
	This property applies to table cells and determines the number of
	table columns spanned by the table cell. See the <a href="/doc/styling#tables">Tables</a>
    documentation for more details.
	</p><p class="note">
        The property <a href="#prop-prince-table-column-span"><code>-prince-table-column-span</code></a> can be used as an alias.
        </p></div></div></details>

<details><summary id="prop-table-layout">table-layout <a class="self-link" href="#prop-table-layout"></a></summary><div><div><div id="prop-table-layout-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>table-layout: auto |&#160;fixed</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>table and inline-table elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-table-layout-comments">Comments</div><p>
	This property determines whether a table uses automatic table
	layout or fixed table layout. See the <a href="/doc/styling#tables">Tables</a>
    documentation for more details.
	</p></div><div><div id="prop-table-layout-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/tables.html#width-layout">CSS 2.1</a></li></ul></div></div></details>

<details><summary class="ext" title="Prince extension" id="prop-table-row-span">table-row-span*  <a class="self-link" href="#prop-table-row-span"></a></summary><div><div><div id="prop-table-row-span-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>table-row-span: <i>number</i> |&#160;attr(&#160;<i>rowspan</i>&#160;)</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>1</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>table cells</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-table-row-span-comments">Comments</div><p>
	This property applies to table cells and determines the number of
	table rows spanned by the table cell. See the <a href="/doc/styling#tables">Tables</a>
    documentation for more details.
	</p><p class="note">
        The property <a href="#prop-prince-table-row-span"><code>-prince-table-row-span</code></a> can be used as an alias.
        </p></div></div></details>

<details><summary id="prop-tab-size">tab-size <a class="self-link" href="#prop-tab-size"></a></summary><div><div><div id="prop-tab-size-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>tab-size: <i>number</i> |&#160;<i>length</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>8</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>block containers</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-tab-size-comments">Comments</div><p>
	This property determines the tab-size for preserved tab characters (U+0009).
    An integer defines number of spaces in a tab, a length represents the width
    of a tab.
	</p><p>
    Please note that Prince replaces preserved tab characters with the specified
    number of spaces, but does not create actual "tab stops" aligned to the left
    edge of the block.</p></div><div><div id="prop-tab-size-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-text-3/#tab-size-property">CSS Text Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-text-align">text-align <a class="self-link" href="#prop-text-align"></a></summary><div><div><div id="prop-text-align-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>text-align: left |&#160;right |&#160;inside |&#160;outside |&#160;center |&#160;justify</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>left</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>block containers</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div /><div><div id="prop-text-align-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/text.html#alignment-prop">CSS 2.1</a></li><li><a href="https://figures.spec.whatwg.org/#aligning-text-inside-and-outside-pages">CSS Figures</a></li></ul></div></div></details>

<details><summary id="prop-text-align-last">text-align-last <a class="self-link" href="#prop-text-align-last"></a></summary><div><div><div id="prop-text-align-last-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>text-align-last: left |&#160;right |&#160;inside |&#160;outside |&#160;center |&#160;justify</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>left</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>block containers</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-text-align-last-comments">Comments</div><p>
    This property allows the last line of an element to receive its own alignment
    style.
    </p></div><div><div id="prop-text-align-last-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-text-3/#text-align-last-property">CSS Text Module Level 3</a></li><li><a href="https://figures.spec.whatwg.org/#aligning-text-inside-and-outside-pages">CSS Figures</a></li></ul></div></div></details>

<details><summary id="prop-text-anchor">text-anchor <a class="self-link" href="#prop-text-anchor"></a></summary><div><div><div id="prop-text-anchor-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>text-anchor: start |&#160;middle |&#160;end</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>start</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>SVG elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-text-anchor-comments">Comments</div><p>
	The <code>text-anchor</code> property only applies to SVG text elements.
	</p></div><div><div id="prop-text-anchor-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/SVG11/text.html#TextAnchorProperty">SVG 1.1</a></li></ul></div></div></details>

<details><summary id="prop-text-decoration">text-decoration <a class="self-link" href="#prop-text-decoration"></a></summary><div><div><div id="prop-text-decoration-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>text-decoration: none |&#160;[ underline ||&#160;overline ||&#160;line-through ]</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-text-decoration-comments">Comments</div><p>
        The <code>text-decoration</code> property is a shorthand for
        setting the following CSS properties:
    </p><ul><li><code><a href="#prop-text-line-through-color">text-line-through-color</a></code></li><li><code><a href="#prop-text-line-through-style">text-line-through-style</a></code></li><li><code><a href="#prop-text-overline-color">text-overline-color</a></code></li><li><code><a href="#prop-text-overline-style">text-overline-style</a></code></li><li><code><a href="#prop-text-underline-color">text-underline-color</a></code></li><li><code><a href="#prop-text-underline-style">text-underline-style</a></code></li></ul></div><div><div id="prop-text-decoration-seealso">See Also</div><ul><li><a href="/doc/styling#text-formatting">Text formatting</a></li></ul></div><div><div id="prop-text-decoration-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/text.html#lining-striking-props">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-text-indent">text-indent <a class="self-link" href="#prop-text-indent"></a></summary><div><div><div id="prop-text-indent-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>text-indent: <i>length</i> |&#160;<i>percent</i> hanging?</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>0</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>block containers</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-text-indent-comments">Comments</div><p>
	This property determines the indentation of the first line of text in
	the element. If the <code>hanging</code> keyword is added after the
	length, a hanging indent will be created by applying the
	indentation to every line of text but the first.
	</p></div><div><div id="prop-text-indent-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-text-3/#text-indent-property">CSS Text Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-text-line-through">text-line-through <a class="self-link" href="#prop-text-line-through"></a></summary><div><div><div id="prop-text-line-through-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>text-line-through: <i>color</i> ||&#160;<i><a href="#prop-text-line-through-style">text-line-through-style</a></i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-text-line-through-comments">Comments</div><p>
        The <code>text-line-through</code> property is a shorthand for
        setting the following CSS properties:
    </p><ul><li><code><a href="#prop-text-line-through-color">text-line-through-color</a></code></li><li><code><a href="#prop-text-line-through-style">text-line-through-style</a></code></li></ul></div></div></details>

<details><summary id="prop-text-line-through-color">text-line-through-color <a class="self-link" href="#prop-text-line-through-color"></a></summary><div><div><div id="prop-text-line-through-color-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>text-line-through-color: <i>color</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>CurrentColor</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-text-line-through-color-seealso">See Also</div><ul><li><a href="/doc/graphics#color">Color</a></li></ul></div></div></details>

<details><summary id="prop-text-line-through-style">text-line-through-style <a class="self-link" href="#prop-text-line-through-style"></a></summary><div><div><div id="prop-text-line-through-style-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>text-line-through-style: none |&#160;solid |&#160;dashed |&#160;dotted</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /></div></details>

<details><summary id="prop-text-overflow">text-overflow <a class="self-link" href="#prop-text-overflow"></a></summary><div><div><div id="prop-text-overflow-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>text-overflow: clip |&#160;ellipsis</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>clip</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>block container elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-text-overflow-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-ui-3/#text-overflow">CSS Basic User Interface Module Level 3 (CSS3 UI)</a></li></ul></div></div></details>

<details><summary id="prop-text-overline">text-overline <a class="self-link" href="#prop-text-overline"></a></summary><div><div><div id="prop-text-overline-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>text-overline: <i>color</i> ||&#160;<i><a href="#prop-text-overline-style">text-overline-style</a></i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-text-overline-comments">Comments</div><p>
        The <code>text-overline</code> property is a shorthand for
        setting the following CSS properties:
    </p><ul><li><code><a href="#prop-text-overline-color">text-overline-color</a></code></li><li><code><a href="#prop-text-overline-style">text-overline-style</a></code></li></ul></div></div></details>

<details><summary id="prop-text-overline-color">text-overline-color <a class="self-link" href="#prop-text-overline-color"></a></summary><div><div><div id="prop-text-overline-color-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>text-overline-color: <i>color</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>CurrentColor</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-text-overline-color-seealso">See Also</div><ul><li><a href="/doc/graphics#color">Color</a></li></ul></div></div></details>

<details><summary id="prop-text-overline-style">text-overline-style <a class="self-link" href="#prop-text-overline-style"></a></summary><div><div><div id="prop-text-overline-style-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>text-overline-style: none |&#160;solid |&#160;dashed |&#160;dotted</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /></div></details>

<details><summary id="prop-text-shadow">text-shadow <a class="self-link" href="#prop-text-shadow"></a></summary><div><div><div id="prop-text-shadow-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>text-shadow: none |&#160;[ <i>color</i>? &amp;&amp;&#160;<i>length</i>{2..3} ]#</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div /><div><div id="prop-text-shadow-seealso">See Also</div><ul><li><a href="/doc/styling#text-formatting">Text formatting</a></li></ul></div><div><div id="prop-text-shadow-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-text-decor-3/#text-shadow-property">CSS Text Decoration Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-text-transform">text-transform <a class="self-link" href="#prop-text-transform"></a></summary><div><div><div id="prop-text-transform-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>text-transform: none |&#160;lowercase |&#160;uppercase |&#160;capitalize</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div /><div><div id="prop-text-transform-seealso">See Also</div><ul><li><a href="/doc/styling#text-formatting">Text formatting</a></li></ul></div><div><div id="prop-text-transform-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/text.html#caps-prop">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-text-underline">text-underline <a class="self-link" href="#prop-text-underline"></a></summary><div><div><div id="prop-text-underline-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>text-underline: <i>color</i> ||&#160;<i><a href="#prop-text-underline-style">text-underline-style</a></i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-text-underline-comments">Comments</div><p>
        The <code>text-underline</code> property is a shorthand for
        setting the following CSS properties:
    </p><ul><li><code><a href="#prop-text-underline-color">text-underline-color</a></code></li><li><code><a href="#prop-text-underline-style">text-underline-style</a></code></li></ul></div></div></details>

<details><summary id="prop-text-underline-color">text-underline-color <a class="self-link" href="#prop-text-underline-color"></a></summary><div><div><div id="prop-text-underline-color-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>text-underline-color: <i>color</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>CurrentColor</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-text-underline-color-seealso">See Also</div><ul><li><a href="/doc/graphics#color">Color</a></li></ul></div></div></details>

<details><summary id="prop-text-underline-style">text-underline-style <a class="self-link" href="#prop-text-underline-style"></a></summary><div><div><div id="prop-text-underline-style-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>text-underline-style: none |&#160;solid |&#160;dashed |&#160;dotted</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /></div></details>

<details><summary id="prop-top">top <a class="self-link" href="#prop-top"></a></summary><div><div><div id="prop-top-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>top: auto |&#160;<i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>positioned elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-top-comments">Comments</div><p>
	This property determines the top offset for positioned elements
	(ie. elements with a <code><a href="#prop-position">position</a></code>
	value of <code>relative</code>, <code>absolute</code> or
	<code>fixed</code>).
	</p></div><div><div id="prop-top-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visuren.html#propdef-top">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-transform">transform <a class="self-link" href="#prop-transform"></a></summary><div><div><div id="prop-transform-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>transform: none |&#160;[ rotate(&#160;<i>angle</i>&#160;) |&#160;translate(&#160;<i>offset</i>, <i>offset</i>?&#160;) |&#160;translatex(&#160;<i>offset</i>&#160;) |&#160;translatey(&#160;<i>offset</i>&#160;) |&#160;translate3d(&#160;<i>offset</i>, <i>offset</i>, <i>offset</i>&#160;) |&#160;scale(&#160;<i>number</i>, <i>number</i>?&#160;) |&#160;scalex(&#160;<i>number</i>&#160;) |&#160;scaley(&#160;<i>number</i>&#160;) |&#160;skewx(&#160;<i>angle</i>&#160;) |&#160;skewy(&#160;<i>angle</i>&#160;) ]+</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>none</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>transformable elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-transform-comments">Comments</div><p>
    Please note that the function <code>translate3d()</code> is supported if the
    Z (third) coordinate is zero, thus making it equivalent to the 2D <code>translate()</code>.
    </p><p>
    Also note that this property currently does not affect SVG elements - they
    need to use their own <code>transform</code> attribute instead.
    </p></div><div><div id="prop-transform-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-transforms-1/#transform-property">CSS Transforms Module Level 1</a></li></ul></div></div></details>

<details><summary id="prop-transform-origin">transform-origin <a class="self-link" href="#prop-transform-origin"></a></summary><div><div><div id="prop-transform-origin-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>transform-origin: [ center |&#160;left |&#160;right |&#160;top |&#160;bottom |&#160;<i>percent</i> |&#160;<i>length</i> ]{1..2}</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>50% 50%</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>transformable elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-transform-origin-comments">Comments</div><p>If only one term is given, then the second is assumed to be <code>center</code>.
    In particular, if only a percentage or length is given, then it is assumed to be the
    horizontal coordinate.</p><p>Either one or two coordinates can be given, and if both values are given
    as keywords, order doesn't matter; but if two coordinates are given and either
    coordinate is a length or percentage, then the horizontal component must come
    first: so <code>top 50%</code> is not valid, but <code>top</code> and
    <code>top center</code> and <code>50% top</code> are all valid and equivalent.</p></div><div><div id="prop-transform-origin-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-transforms-1/#transform-origin-property">CSS Transforms Module Level 1</a></li></ul></div></div></details>

<details><summary id="prop-unicode-bidi">unicode-bidi <a class="self-link" href="#prop-unicode-bidi"></a></summary><div><div><div id="prop-unicode-bidi-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>unicode-bidi: normal |&#160;embed |&#160;bidi-override</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-unicode-bidi-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visuren.html#propdef-unicode-bidi">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-unicode-range">unicode-range <a class="self-link" href="#prop-unicode-range"></a></summary><div><div><div id="prop-unicode-range-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>unicode-range: <i>urange</i>+</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>U+0-10FFFF</code></td></tr><tr><th scope="row">
          Applies to
        </th><td><code>@font-face</code> at-rule</td></tr><tr><th scope="row">
          Inherited
        </th><td /></tr></table></div></div></div><div><div id="prop-unicode-range-examples">Examples</div><div class="example"><div class="programlisting"><pre><code>@font-face {
    unicode-range: U+0025-00FF;
}</code></pre></div></div></div><div><div id="prop-unicode-range-comments">Comments</div><p>
    This CSS at-rule descriptor, used with the
    <a href="/doc/css-refs#at-font-face"><code>@font-face</code></a> at-rule,
    defines the set of Unicode codepoints that may be supported by the font face
    for which it is declared.  The descriptor value is a comma-delimited list of
    Unicode range (&lt;urange&gt;) values.  The union of these ranges defines the
    set of codepoints that serves as a hint for user agents when deciding whether
    or not to download a font resource needed for the test content of a particular
    page.
    </p></div><div><div id="prop-unicode-range-spec">Specification</div><ul><li><a href="https://drafts.csswg.org/css-fonts-3/#descdef-font-face-unicode-range">CSS Fonts Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-vertical-align">vertical-align <a class="self-link" href="#prop-vertical-align"></a></summary><div><div><div id="prop-vertical-align-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>vertical-align: baseline |&#160;sub |&#160;super |&#160;top |&#160;text-top |&#160;middle |&#160;bottom |&#160;text-bottom |&#160;<i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>baseline</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>inline-level and table-cell elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-vertical-align-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visudet.html#propdef-vertical-align">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-visibility">visibility <a class="self-link" href="#prop-visibility"></a></summary><div><div><div id="prop-visibility-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>visibility: visible |&#160;hidden</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>visible</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-visibility-comments">Comments</div><p>
	This property can be used to make the content of an element invisible.
    </p><p class="note">
	Unlike using <code>display: none</code>, the element will
	still take up space on the page and its descendants may still have
	visible content.
	</p></div><div><div id="prop-visibility-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visufx.html#visibility">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-white-space">white-space <a class="self-link" href="#prop-white-space"></a></summary><div><div><div id="prop-white-space-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>white-space: normal |&#160;pre |&#160;pre-wrap |&#160;pre-line |&#160;nowrap</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div /><div><div id="prop-white-space-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/text.html#white-space-prop">CSS 2.1</a></li></ul></div></div></details>

<details><summary id="prop-widows">widows <a class="self-link" href="#prop-widows"></a></summary><div><div><div id="prop-widows-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>widows: <i>integer</i> |&#160;<span class="ext"><i>percent</i></span></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>1</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>block container elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-widows-comments">Comments</div><p>
	If a paragraph is split over two pages or columns, this property
	determines the minimum number of lines that must be left at the top of
	the second page or column.
	</p><p>
    The percentage value only applies to <a href="/doc/prince-for-books">Prince for Books</a>, and indicates
    that one widow line is accepted, as long as the line width is at least the
    given percentage value of the available page width, to avoid the worst case
    of having a widow line that is only one or two words long.  For more details
    see <a href="/doc/prince-for-books#fractional-widows">Fractional Widows</a>.
    </p><p>
    Please note that the initial value has been changed from <code>2</code> to <code>1</code>.
    </p></div><div><div id="prop-widows-seealso">See Also</div><ul><li><a href="/doc/paged#widows-and-orphans">Widows and orphans</a></li><li><a href="/doc/prince-for-books">Prince for Books</a></li><li><a href="/doc/prince-for-books#fractional-widows">Fractional Widows</a></li><li><code><a href="#prop-orphans">orphans</a></code></li></ul></div><div><div id="prop-widows-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/page.html#break-inside">CSS 2.1</a></li><li><a href="https://www.w3.org/TR/css-break-3/#widows-orphans">CSS Fragmentation Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-width">width <a class="self-link" href="#prop-width"></a></summary><div><div><div id="prop-width-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>width: auto |&#160;<i>length</i> |&#160;<i>percent</i> |&#160;min-content |&#160;max-content</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements but non-replaced inline elements, table rows, and row groups</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div><div id="prop-width-comments">Comments</div><p class="note">
    The values <code>min-content</code> and <code>max-content</code> do not affect
    auto table layout.
    </p></div><div><div id="prop-width-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visudet.html#the-width-property">CSS 2.1</a></li><li><a href="https://www.w3.org/TR/css-sizing-3/#sizing-values">CSS Intrinsic &amp; Extrinsic Sizing Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-word-break">word-break <a class="self-link" href="#prop-word-break"></a></summary><div><div><div id="prop-word-break-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>word-break: normal |&#160;keep-all |&#160;break-all</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div><div id="prop-word-break-comments">Comments</div><p class="note">
    Prince does not support the value <code>break-word</code>.  Use
    the value <code>break-all</code> or the property <code><a href="#prop-overflow-wrap">overflow-wrap</a></code>
    with the value <code>break-word</code> instead.
    </p></div><div><div id="prop-word-break-seealso">See Also</div><ul><li><a href="/doc/styling#paragraph-formatting">Paragraph formatting</a></li><li><code><a href="#prop-overflow-wrap">overflow-wrap</a></code></li></ul></div><div><div id="prop-word-break-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-text-3/#word-break-property">CSS Text Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-word-spacing">word-spacing <a class="self-link" href="#prop-word-spacing"></a></summary><div><div><div id="prop-word-spacing-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>word-spacing: normal |&#160;<i>length</i> |&#160;<i>percent</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>normal</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div /><div><div id="prop-word-spacing-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/css-text-3/#propdef-word-spacing">CSS Text Module Level 3</a></li></ul></div></div></details>

<details><summary id="prop-writing-mode">writing-mode <a class="self-link" href="#prop-writing-mode"></a></summary><div><div><div id="prop-writing-mode-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>writing-mode: horizontal-tb |&#160;vertical-rl</code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>horizontal-tb</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>all elements except table row groups, table column groups, table rows, and table columns</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  yes
                </td></tr></table></div></div></div><div /><div><div id="prop-writing-mode-spec">Specification</div><ul><li><a href="https://drafts.csswg.org/css-writing-modes-3/#block-flow">CSS Writing Modes Level 3</a></li></ul></div></div></details>

<details><summary id="prop-z-index">z-index <a class="self-link" href="#prop-z-index"></a></summary><div><div><div id="prop-z-index-syntax">Syntax</div><div class="example"><div class="syntax-block"><pre><code>z-index: auto |&#160;<i>number</i></code></pre></div></div></div><div><div class="example"><div class="syntax-block"><table class="property-table"><tr><th scope="row">
          Initial value
        </th><td><code>auto</code></td></tr><tr><th scope="row">
          Applies to
        </th><td>positioned elements</td></tr><tr><th scope="row">
          Inherited
        </th><td>
                  no
                </td></tr></table></div></div></div><div /><div><div id="prop-z-index-spec">Specification</div><ul><li><a href="https://www.w3.org/TR/CSS2/visuren.html#z-index">CSS 2.1</a></li></ul></div></div></details></div>

<script>
function shiftWindow() { if (location.hash.indexOf('prop-') == 1) if (window.innerWidth < "1024") {scrollBy(0, -158)} else {scrollBy(0, -60)};
};
function toggleDetails() { if ((location.hash.indexOf('window.') == 1) || (location.hash.indexOf('prop-') == 1)) {
var prop = document.getElementById(location.hash.substr(1));
var parentDetails = [];
var parent = prop.parentNode;
while (parent) { if (parent.tagName === 'DETAILS') parentDetails.push(parent); parent = parent.parentNode; }
for (i = 0; i < parentDetails.length; i++) {
  parentDetails[i].setAttribute('open','')
}
prop.scrollIntoView();
}};
function toggleAllDetails(t) {
if (t == 'js') { var type = 'js-support-table' } else if (t == 'css') { var type = 'prop-list' };
var g = document.getElementById(type);
var d = g.getElementsByTagName('details');
var id = 'toggle-' + t;
var a = document.getElementById(id);
if ( a.hasAttribute('open') == false ) {
for (i=0; i < d.length; i++) {
  d[i].setAttribute('open','');
  a.setAttribute('open','');
}}
else if ( a.hasAttribute('open') == true ) {
for (i=0; i < d.length; i++) {
  d[i].removeAttribute('open');
  a.removeAttribute('open');
}}
if ( t == 'js' ) { document.getElementById('.window').parentElement.setAttribute('open','') }
}
window.addEventListener("load",  function() { toggleDetails(); shiftWindow(); });
window.addEventListener("hashchange", function() { toggleDetails(); shiftWindow(); });
</script>
