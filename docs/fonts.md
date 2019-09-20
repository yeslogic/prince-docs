---
title: Fonts
---

Fonts
-----

Prince supports WOFF (Web Open Font Format), TrueType and OpenType (TTF and CFF) font formats.

### Defining a font family

To define the font, or the fonts to be used in a document, the `font-family` property is used. Prince will try to use the specified font, and should glyphs be missing, it will silently fall back to the next font in the cascade - typically a [generic font family](fonts.html#font-families).

To prevent this font switching mechanism and force Prince to only use the defined font, the special keyword `prince-no-fallback` is available: it triggers a warning if any glyphs are not found in the specified font, instead of switching to another one.


    h1 { font-family: MyFont, prince-no-fallback; }

The [`@font-face`](doc-refs.html#at-font-face) at-rule can be used to define custom font names. The `font-family` descriptor defines the font family name that will be used in all CSS font family name matching, and the `src` descriptor specifies the resource containing font data. They both are required for the [`@font-face`](doc-refs.html#at-font-face) rule to be valid.

The `src` descriptor can define the resource with a `url()` function - an optional `format()` function defines the format of the remotely fetched font. Alternatively, the `local()` and `prince-lookup()` functions can be used - the former searches for locally installed system fonts, while the latter will also find fonts defined by other [`@font-face`](doc-refs.html#at-font-face) rules. See [CSS Functional Expressions](doc-refs.html#css-functions).


    @font-face {
      font-family: MyFont;
      src: prince-lookup("MyFont"),
           url("http://example.com/MyFont.ttf") format("truetype");
    }

In this example we are defining a new font face, called `MyFont`. We instruct Prince to check if the MyFont truetype font is installed locally or already defined by another @font-face rule, and, all failing, to download it from a remote location.

When a chosen bold and/or italic font is missing, Prince tries to artificially synthesize the missing font - i.e. to embolden or italicize the original font. However, it might lead to undesired results. This feature can be disabled with the [`--no-artificial-fonts`](doc-refs.html#cl-no-artificial-fonts) command-line option.

### OpenType Features in Prince

Prince supports OpenType features, and enables certain ones by default in specific scripts. The following ones are enabled by default in Prince:

<table class="grid">
<thead>
<tr>
<th>Script</th>
<th>Enabled features</th>
</tr>
</thead>
<tbody>
<tr>
<td>Latin, Greek, Cyrillic</td>
<td>ccmp, liga, dist, kern*, mark, mkmk, vrt2/vert</td>
</tr>
<tr>
<td>Arabic/Syriac</td>
<td>ccmp, rlig, calt, liga, mset, isol, medi, fina, kern, curs, mark, mkmk</td>
</tr>
<tr>
<td>Indic</td>
<td>ccmp, and many other Indic-specific substitutions</td>
</tr>
<tr>
<td>Other scripts</td>
<td>kern*, mark, mkmk</td>
</tr>
</tbody>
<tfoot>
<tr>
<td colspan="2">
<p class="note">
* Kerning can be disabled with the keyword <code>prince-no-kerning</code> of the
<code><a href="doc-latest/doc-refs.html#prop-font-variant">font-variant</a></code> property.
</p>
</td>
</tr>
</tfoot>
</table>

Microsoft has a list of the OpenType feature names [here](https://www.microsoft.com/typography/otspec/featurelist.htm).

It is possible to enable other OpenType features by using the `font-variant` CSS property with the `prince-opentype()` function (see [CSS Functional Expressions](doc-refs.html#css-functions)).

Care must be taken in which order the features are enabled! And please note that enabling one feature will disable all the default features.

### Generic font families

Prince maps the CSS generic font families to the Microsoft Core Fonts. The Microsoft Core Fonts are pre-installed on Windows and MacOS X systems but not on Linux systems. To use them on Linux you must install the [msttcorefonts](http://corefonts.sourceforge.net) package, which is available for most Linux distributions.

The following table shows the default fonts for the main languages on Windows, MacOS X and Linux.

<table class="grid">
<thead>
<tr>
<th>Generic family</th>
<th>Operating system</th>
<th>Language</th>
<th>Actual font</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="15"><code>serif</code></td>
<td rowspan="5">Windows</td>
<td>Latin</td>
<td>Times New Roman</td>
</tr>
<tr>
<td>Chinese</td>
<td>MingLiU, Microsoft YaHei, SimSun</td>
</tr>
<tr>
<td>Japanese</td>
<td>MS Mincho, Yu Gothic</td>
</tr>
<tr>
<td>Korean</td>
<td>Batang, Malgun Gothic</td>
</tr>
<tr>
<td>Devanagari / Hindi</td>
<td>Mangal</td>
</tr>
<tr>
<td rowspan="5">MacOS X</td>
<td>Latin</td>
<td>Times New Roman</td>
</tr>
<tr>
<td>Chinese</td>
<td>LiSong Pro</td>
</tr>
<tr>
<td>Japanese</td>
<td>Hiragino Mincho ProN</td>
</tr>
<tr>
<td>Korean</td>
<td>AppleMyungjo</td>
</tr>
<tr>
<td>Devanagari / Hindi</td>
<td>Devanagari MT</td>
</tr>
<tr>
<td rowspan="5">Linux</td>
<td>Latin</td>
<td>Times New Roman, DejaVu Serif, DejaVu LGC Serif, Liberation Serif</td>
</tr>
<tr>
<td>Chinese</td>
<td>AR PL UMing CN, AR PL SungtiL GB</td>
</tr>
<tr>
<td>Japanese</td>
<td>Kochi Mincho, IPAMincho</td>
</tr>
<tr>
<td>Korean</td>
<td>UnBatang, Baekmuk Batang</td>
</tr>
<tr>
<td>Devanagari / Hindi</td>
<td>Lohit Devanagari</td>
</tr>
<tr>
<td rowspan="12"><code>sans-serif</code></td>
<td rowspan="4">Windows</td>
<td>Latin</td>
<td rowspan="2">Arial</td>
</tr>
<tr>
<td>Chinese</td>
</tr>
<tr>
<td>Japanese</td>
<td>MS Gothic</td>
</tr>
<tr>
<td>Korean</td>
<td>Dotum</td>
</tr>
<tr>
<td rowspan="4">MacOS X</td>
<td>Latin</td>
<td>Arial</td>
</tr>
<tr>
<td>Chinese</td>
<td>LiHei Pro</td>
</tr>
<tr>
<td>Japanese</td>
<td>Hiragino Kaku Gothic ProN</td>
</tr>
<tr>
<td>Korean</td>
<td>Apple SD Gothic Neo, Apple Gothic</td>
</tr>
<tr>
<td rowspan="4">Linux</td>
<td>Latin</td>
<td>Arial, DejaVu Sans, DejaVu LGC Sans, Liberation Sans</td>
</tr>
<tr>
<td>Chinese</td>
<td>AR PL UKai CN, AR PL KaitiM GB</td>
</tr>
<tr>
<td>Japanese</td>
<td>Kochi Gothic, IPAGothic</td>
</tr>
<tr>
<td>Korean</td>
<td>UnDotum, Baekmuk Gulim</td>
</tr>
<tr>
<td rowspan="12"><code>monospace</code></td>
<td>Windows</td>
<td colspan="2" rowspan="2">Courier New</td>
</tr>
<tr>
<td>MacOS X</td>
</tr>
<tr>
<td>Linux</td>
<td colspan="2">Courier New, DejaVu Sans Mono, DejaVu LGC Sans Mono, Liberation Mono</td>
</tr>
</tbody>
</table>

The complete list of defaults, including details like e.g. the exact Unicode ranges Prince is using, can be found in the `fonts.css` file located in the installation directory of Prince resources. (See [Installation Layout](installation-layout.html#installation-layout)).

In order to redefine these defaults, see [Redefining the generic font families](redefining-font-families.html#redefining-font-families).

