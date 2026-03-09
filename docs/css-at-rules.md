---
title: CSS At-rules
---

In this section you find the documentation for the supported CSS at-rules.

Prince accepts `@-prince` as a vendor prefix for Prince-specific at-rules to comply with validators - eg. `@-prince-pdf` and `@-prince-color`.

## Initial At-Rules

The following at-rules have to appear at the beginning of the CSS document, and exactly in this order:

<table className="grid">
<tr>
<td id="at-charset">
    <code>
    @charset
    </code>
</td>
<td>Defines the fallback encoding to use for the stylesheet. Prince supports stylesheets
in <code>UTF-8</code>, <code>UTF-16</code>, <code>Latin1</code> and <code>Windows-1252</code>.</td>
</tr>
<tr>
<td id="at-import">
    <code>
    @import [ &lt;url(<i>URL</i>)&gt; | &lt;<i>string</i>&gt; ] supports([ &lt;<i>supports-condition</i>&gt; | &lt;<i>declaration</i>&gt; ])? &lt;<i>media-query-list</i>&gt;?
    </code>
</td>
<td>Allows authors to import style rules from other style sheets. The <code>url(<i>URL</i>)</code> or <code>&lt;<i>string</i>&gt;</code> give the URL of the style sheet to be imported, while the optional <code>supports(...)</code> expression and <code>&lt;<i>media-query-list</i>&gt;</code> state the import conditions.</td>
</tr>
<tr>
<td id="at-namespace">
    <code>
    @namespace [<i>Prefix</i>]? [ &lt;url(<i>URL</i>)&gt; | &lt;<i>string</i>&gt; ]
    </code>
</td>
<td>Defines a namespace prefix or default namespace to be used in the stylesheet.</td>
</tr>
</table>

## Nested At-Rules

After the initial at-rules, the following at-rules can appear also in nested form in the CSS document:

<table className="grid">
<tr>
<th colSpan="2" id="at-page" scope="col">
    <code>
    @page &lt;<i>page-selector-list</i>&gt; {"{"} &lt;<i>declaration-list</i>&gt; {"}"}
    </code>
</th>
</tr>
<tr>
<td colSpan="2">Defines the size of a page, and <code>margin</code>, <code>border</code>, <code>padding</code> and <code>background</code> of a document. The pages can be identified by a name, or by a page pseudo-class, and page declarations can either be style declarations or nested page region at-rules. The initial values for <code>@page</code> styles are documented in the <a href="/doc/paged">Paged Media</a> chapter.</td>
</tr>
<tr>
<td>
    <code>
    :left
    </code>
</td>
<td rowSpan="9">Page pseudo-classes</td>
</tr>
<tr>
<td>
    <code>
    :right
    </code>
</td>
</tr>
<tr>
<td>
    <code>
    :recto
    </code>
</td>
</tr>
<tr>
<td>
    <code>
    :verso
    </code>
</td>
</tr>
<tr>
<td>
    <code>
    :blank
    </code>
</td>
</tr>
<tr>
<td>
    <code>
    :first
    </code>
</td>
</tr>
<tr>
<td>
    <code>
    :nth(<i>N</i>)
    </code>
</td>
</tr>
<tr>
<td>
    <code>
    :first-of-group
    </code>
</td>
</tr>
<tr>
<td>
    <code>
    :nth-of-group(<i>N</i>)
    </code>
</td>
</tr>
<tr>
<td>
    <code>
    @left-top | @left-middle | @left-bottom
    </code>
</td>
<td rowSpan="8"><a href="/doc/paged#page-regions">Page region</a> at-rules</td>
</tr>
<tr>
<td>
    <code>
    @right-top | @right-middle | @right-bottom
    </code>
</td>
</tr>
<tr>
<td>
    <code>
    @top-left-corner | @top-left | @top-center | @top-right | @top-right-corner
    </code>
</td>
</tr>
<tr>
<td>
    <code>
    @bottom-left-corner | @bottom-left | @bottom-center | @bottom-right | @bottom-right-corner
    </code>
</td>
</tr>
<tr>
<td>
    <code>
    @page-float-top | @page-float-bottom
    </code>
</td>
</tr>
<tr>
<td>
    <code>
    @leftnote | @rightnote | @insidenote | @outsidenote
    </code>
</td>
</tr>
<tr>
<td>
    <code>
    @footnote
    </code>
</td>
</tr>
<tr>
<td>
    <code>
    @prince-overlay
    </code>
</td>
</tr>
<tr>
<td colSpan="2">The <code>@page</code> rule takes CSS properties to style the margins, borders, padding and background. It equally takes color, font and font-height properties that are inherited by the page-margin boxes - note that they are not inherited by the page area content.  It also takes the following CSS properties: <code><a href="/doc/css-props#prop-bleed">bleed</a></code> | <code><a href="/doc/css-props#prop-marks">marks</a></code> | <code><a href="/doc/css-props#prop-prince-mark-length">-prince-mark-length</a></code> | <code><a href="/doc/css-props#prop-prince-mark-offset">-prince-mark-offset</a></code> | <code><a href="/doc/css-props#prop-prince-mark-width">-prince-mark-width</a></code> | <code><a href="/doc/css-props#prop-prince-pdf-page-colorspace">-prince-pdf-page-colorspace</a></code> | <code><a href="/doc/css-props#prop-prince-pdf-page-label">-prince-pdf-page-label</a></code> | <code><a href="/doc/css-props#prop-prince-rotate-body">-prince-rotate-body</a></code> | <code><a href="/doc/css-props#prop-prince-shrink-to-fit">-prince-shrink-to-fit</a></code> | <code><a href="/doc/css-props#prop-prince-trim">-prince-trim</a></code> | <code><a href="/doc/css-props#prop-size">size</a></code> </td>
</tr>
<tr>
<td colSpan="2">Additionally, <a href="/doc/prince-for-books">Prince for Books</a> takes the following CSS property: <code><a href="/doc/css-props#prop-prince-page-fill">-prince-page-fill</a></code> </td>
</tr>
</table>

<table className="grid">
<tr>
<th id="at-media">
    <code>
    @media &lt;<i>media-query-list</i>&gt; {"{"} &lt;<i>stylesheet</i>&gt; {"}"}
    </code>
</th>
</tr>
<tr>
<td>The rules will apply if the device meets the criteria of the condition defined in the media query. See <a href="/doc/css-media-queries">CSS Media Queries</a> for details.</td>
</tr>
</table>

<table className="grid">
<tr>
<th id="at-supports">
    <code>
    @supports &lt;<i>supports-condition</i>&gt; {"{"} &lt;<i>stylesheet</i>&gt; {"}"}
    </code>
</th>
</tr>
<tr>
<td>Checks whether particular <code>property:value</code> combinations are supported.
Unlike media queries, this uses the classical two-valued logic.</td>
</tr>
</table>

<table className="grid">
<tr>
<th colSpan="2" id="at-font-face">
    <code>
    @font-face {"{"} &lt;<i>declaration-list</i>&gt; {"}"}
    </code>
</th>
</tr>
<tr>
<td colSpan="2">Links a font family to an actual font.</td>
</tr>
<tr>
<td colSpan="2">The <code>@font-face</code> rule takes the following CSS descriptors:</td>
</tr>
<tr>
<td>
    <code>
    <a href="/doc/css-props#prop-font-family">font-family</a>: &lt;<i>family-name</i>&gt;
    </code>
</td>
<td>This descriptor defines the font family name that will be used in all CSS font family name matching. It is required for the <code>@font-face</code> rule to be valid.</td>
</tr>
<tr>
<td>
    <code>
    <a href="/doc/css-props#prop-src">src</a>: [ url(&lt;<i>URL</i>&gt;) format(&lt;<i>string</i>&gt;#)? | local(&lt;<i>family-name</i>&gt;) | prince-lookup(&lt;<i>family-name</i>&gt;) ]#
    </code>
</td>
<td>This descriptor specifies the resource containing font data. It is required for the <code>@font-face</code> rule to be valid. The <code>local()</code> function searches for locally installed system fonts, but <code>prince-lookup()</code> will also find fonts defined by other <code>@font-face</code> rules.</td>
</tr>
<tr>
<td>
    <code>
    <a href="/doc/css-props#prop-unicode-range">unicode-range</a>: &lt;<i>urange</i>&gt;#
    </code>
</td>
<td>This descriptor defines the set of Unicode codepoints that may be supported by the font face. The descriptor value is a comma-delimited list of Unicode range values.</td>
</tr>
<tr>
<td colSpan="2">Additionally, <code>@font-face</code> takes the CSS descriptors <code><a href="/doc/css-props#prop-font-variant">font-variant</a></code>, <code><a href="/doc/css-props#prop-font-stretch">font-stretch</a></code>, <code><a href="/doc/css-props#prop-font-weight">font-weight</a></code> and <code><a href="/doc/css-props#prop-font-style">font-style</a></code>, which take the same values as the CSS properties with the same name.</td>
</tr>
</table>

<table className="grid">
<tr>
<th colSpan="2" id="at-counter-style">
    <code>
    @counter-style &lt;<i>counter-style-name</i>&gt; {"{"} &lt;<i>declaration-list</i>&gt; {"}"}
    </code>
</th>
</tr>
<tr>
<td colSpan="2">Extends predefined list styles with custom counter styles.</td>
</tr>
<tr>
<td colSpan="2">The <code>@counter-styles</code> rule takes the following CSS descriptors:</td>
</tr>
<tr>
<td>
    <code>
    <a href="/doc/css-props#prop-system">system</a>: cyclic | numeric | alphabetic | symbolic | additive | [ fixed &lt;<i>integer</i>&gt;? ] | [ extends &lt;<i>counter-style-name</i>&gt; ]
    </code>
</td>
<td>This descriptor specifies how to represent a counter value.</td>
</tr>
<tr>
<td>
    <code>
    <a href="/doc/css-props#prop-symbols">symbols</a>: [ &lt;<i>string</i>&gt; | &lt;<i>custom-ident</i>&gt; ]+
    </code>
</td>
<td>This descriptor specifies the symbols used to represent a counter value.</td>
</tr>
<tr>
<td>
    <code>
    <a href="/doc/css-props#prop-additive-symbols">additive-symbols</a>: [ &lt;<i>integer</i>[0,∞]&gt; && [ &lt;<i>string</i>&gt; | &lt;<i>custom-ident</i>&gt; ] ]#
    </code>
</td>
<td>This descriptor specifies the symbols used to represent a counter value when the <code>system</code> descriptor is set to <code>additive</code>.</td>
</tr>
<tr>
<td>
    <code>
    <a href="/doc/css-props#prop-negative">negative</a>: [ &lt;<i>string</i>&gt; | &lt;<i>custom-ident</i>&gt; ] [ &lt;<i>string</i>&gt; | &lt;<i>custom-ident</i>&gt; ]?
    </code>
</td>
<td>This descriptor specifies how negative counter values are represented.</td>
</tr>
<tr>
<td>
    <code>
    <a href="/doc/css-props#prop-prefix">prefix</a>: &lt;<i>string</i>&gt; | &lt;<i>custom-ident</i>&gt;
    </code>
</td>
<td>This descriptor specifies content added to the beginning of a custom counter representation.</td>
</tr>
<tr>
<td>
    <code>
    <a href="/doc/css-props#prop-suffix">suffix</a>: &lt;<i>string</i>&gt; | &lt;<i>custom-ident</i>&gt;
    </code>
</td>
<td>This descriptor specifies content added to the end of a custom counter representation.</td>
</tr>
<tr>
<td>
    <code>
    <a href="/doc/css-props#prop-range">range</a>: [ [ &lt;<i>integer</i>&gt; | infinite ]{"{"}2{"}"} ]# | auto
    </code>
</td>
<td>This descriptor specifies one or more ranges of counter values for which the style is applied.</td>
</tr>
<tr>
<td>
    <code>
    <a href="/doc/css-props#prop-pad">pad</a>: &lt;<i>integer</i>[0,∞]&gt; && [ &lt;<i>string</i>&gt; | &lt;<i>custom-ident</i>&gt; ]
    </code>
</td>
<td>This descriptor specifies the minimum length for marker representations.</td>
</tr>
<tr>
<td>
    <code>
    <a href="/doc/css-props#prop-fallback">fallback</a>: &lt;<i>counter-style-name</i>&gt;
    </code>
</td>
<td>This descriptor specifies a counter style to fall back to if the defined style cannot be created.</td>
</tr>
<tr>
<td colSpan="2">Additionally, <code>@counter-style</code> takes the CSS descriptors <code><a href="/doc/css-props#prop-prince-pdf-page-numbering">-prince-pdf-page-numbering</a></code> and <code><a href="/doc/css-props#prop-prince-pdf-list-numbering">-prince-pdf-list-numbering</a></code>.</td>
</tr>
</table>

<table className="grid">
<tr>
<th colSpan="2" id="at-prince-color">
    <code>
    @prince-color &lt;<i>color-name</i>&gt; {"{"} alternate-color: &lt;<i>color</i>&gt; {"}"}
    </code>
</th>
</tr>
<tr>
<td colSpan="2">Defines a new color name.</td>
</tr>
<tr>
<td colSpan="2">The <code>@prince-color</code> rule takes the mandatory <code><a href="/doc/css-props#prop-alternate-color">alternate-color</a></code> descriptor to specify an alternate color to use if the named spot color is not available.  The named color is used in a stylesheet with the <code>prince-color()</code> function.  (See <a href="/doc/graphics#spot-colors">Spot colors</a>).</td>
</tr>
</table>

<table className="grid">
<tr>
<th colSpan="2" id="at-prince-pdf">
    <code>
    @prince-pdf {"{"} &lt;<i>declaration-list</i>&gt; {"}"}
    </code>
</th>
</tr>
<tr>
<td colSpan="2">Defines properties relating to PDFs.</td>
</tr>
<tr>
<td colSpan="2">The <code>@prince-pdf</code> rule takes the following CSS descriptors: <code><a href="/doc/css-props#prop-prince-fallback-cmyk-profile">-prince-fallback-cmyk-profile</a></code> | <code><a href="/doc/css-props#prop-prince-filter-resolution">-prince-filter-resolution</a></code> | <code><a href="/doc/css-props#prop-prince-pdf-color-conversion">-prince-pdf-color-conversion</a></code> | <code><a href="/doc/css-props#prop-prince-pdf-color-options">-prince-pdf-color-options</a></code> | <code><a href="/doc/css-props#prop-prince-pdf-display-doc-title">-prince-pdf-display-doc-title</a></code> | <code><a href="/doc/css-props#prop-prince-pdf-duplex">-prince-pdf-duplex</a></code> | <code><a href="/doc/css-props#prop-prince-pdf-event-scripts">-prince-pdf-event-scripts</a></code> | <code><a href="/doc/css-props#prop-prince-pdf-open-action">-prince-pdf-open-action</a></code> | <code><a href="/doc/css-props#prop-prince-pdf-output-intent">-prince-pdf-output-intent</a></code> | <code><a href="/doc/css-props#prop-prince-pdf-page-layout">-prince-pdf-page-layout</a></code> | <code><a href="/doc/css-props#prop-prince-pdf-page-mode">-prince-pdf-page-mode</a></code> | <code><a href="/doc/css-props#prop-prince-pdf-paper-tray">-prince-pdf-paper-tray</a></code> | <code><a href="/doc/css-props#prop-prince-pdf-print-scaling">-prince-pdf-print-scaling</a></code> | <code><a href="/doc/css-props#prop-prince-pdf-profile">-prince-pdf-profile</a></code> | <code><a href="/doc/css-props#prop-prince-pdf-role-map">-prince-pdf-role-map</a></code> | <code><a href="/doc/css-props#prop-prince-pdf-script">-prince-pdf-script</a></code> | <code><a href="/doc/css-props#prop-prince-pdf-tagged">-prince-pdf-tagged</a></code> | <code><a href="/doc/css-props#prop-prince-pdf-xmp">-prince-pdf-xmp</a></code></td>
</tr>
</table>
