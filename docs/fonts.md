---
title: Fonts
---

Fonts
-----

Prince supports WOFF (Web Open Font Format), TrueType and OpenType (TTF and CFF) font formats.

### Defining a font family

To define the font, or the fonts to be used in a document, the `font-family` property is used. Prince will try to use the specified font, and should glyphs be missing, it will silently fall back to the next font in the cascade - typically a [generic font family](doc-latest/fonts.html#font-families).

To prevent this font switching mechanism and force Prince to only use the defined font, the special keyword `prince-no-fallback` is available: it triggers a warning if any glyphs are not found in the specified font, instead of switching to another one.

``
    h1 { font-family: MyFont, prince-no-fallback; }

The [`@font-face`](doc-latest/doc-refs.html#at-font-face) at-rule can be used to define custom font names. The `font-family` descriptor defines the font family name that will be used in all CSS font family name matching, and the `src` descriptor specifies the resource containing font data. They both are required for the [`@font-face`](doc-latest/doc-refs.html#at-font-face) rule to be valid.

The `src` descriptor can define the resource with a `url()` function - an optional `format()` function defines the format of the remotely fetched font. Alternatively, the `local()` and `prince-lookup()` functions can be used - the former searches for locally installed system fonts, while the latter will also find fonts defined by other [`@font-face`](doc-latest/doc-refs.html#at-font-face) rules. See [CSS Functional Expressions](doc-latest/doc-refs.html#css-functions).

``
    @font-face {
      font-family: MyFont;
      src: prince-lookup("MyFont"),
           url("http://example.com/MyFont.ttf") format("truetype");
    }

In this example we are defining a new font face, called `MyFont`. We instruct Prince to check if the MyFont truetype font is installed locally or already defined by another @font-face rule, and, all failing, to download it from a remote location.

When a chosen bold and/or italic font is missing, Prince tries to artificially synthesize the missing font - i.e. to embolden or italicize the original font. However, it might lead to undesired results. This feature can be disabled with the [`--no-artificial-fonts`](doc-latest/doc-refs.html#cl-no-artificial-fonts) command-line option.

### OpenType Features in Prince

Prince supports OpenType features, and enables certain ones by default in specific scripts. The following ones are enabled by default in Prince:

Script
Enabled features
Latin, Greek, Cyrillic
ccmp, liga, dist, kern\*, mark, mkmk, vrt2/vert
Arabic/Syriac
ccmp, rlig, calt, liga, mset, isol, medi, fina, kern, curs, mark, mkmk
Indic
ccmp, and many other Indic-specific substitutions
Other scripts
kern\*, mark, mkmk
\* Kerning can be disabled with the keyword `prince-no-kerning` of the `font-variant` property.

Microsoft has a list of the OpenType feature names [here](https://www.microsoft.com/typography/otspec/featurelist.htm).

It is possible to enable other OpenType features by using the `font-variant` CSS property with the `prince-opentype()` function (see [CSS Functional Expressions](doc-latest/doc-refs.html#css-functions)).

Care must be taken in which order the features are enabled! And please note that enabling one feature will disable all the default features.

### Generic font families

Prince maps the CSS generic font families to the Microsoft Core Fonts. The Microsoft Core Fonts are pre-installed on Windows and MacOS X systems but not on Linux systems. To use them on Linux you must install the [msttcorefonts](http://corefonts.sourceforge.net) package, which is available for most Linux distributions.

The following table shows the default fonts for the main languages on Windows, MacOS X and Linux.

Generic family
Operating system
Language
Actual font
`serif`
Windows
Latin
Times New Roman
Chinese
MingLiU, Microsoft YaHei, SimSun
Japanese
MS Mincho, Yu Gothic
Korean
Batang, Malgun Gothic
Devanagari / Hindi
Mangal
MacOS X
Latin
Times New Roman
Chinese
LiSong Pro
Japanese
Hiragino Mincho ProN
Korean
AppleMyungjo
Devanagari / Hindi
Devanagari MT
Linux
Latin
Times New Roman, DejaVu Serif, DejaVu LGC Serif, Liberation Serif
Chinese
AR PL UMing CN, AR PL SungtiL GB
Japanese
Kochi Mincho, IPAMincho
Korean
UnBatang, Baekmuk Batang
Devanagari / Hindi
Lohit Devanagari
`sans-serif`
Windows
Latin
Arial
Chinese
Japanese
MS Gothic
Korean
Dotum
MacOS X
Latin
Arial
Chinese
LiHei Pro
Japanese
Hiragino Kaku Gothic ProN
Korean
Apple SD Gothic Neo, Apple Gothic
Linux
Latin
Arial, DejaVu Sans, DejaVu LGC Sans, Liberation Sans
Chinese
AR PL UKai CN, AR PL KaitiM GB
Japanese
Kochi Gothic, IPAGothic
Korean
UnDotum, Baekmuk Gulim
`monospace`
Windows
Courier New
MacOS X
Linux
Courier New, DejaVu Sans Mono, DejaVu LGC Sans Mono, Liberation Mono
The complete list of defaults, including details like e.g. the exact Unicode ranges Prince is using, can be found in the `fonts.css` file located in the installation directory of Prince resources. (See [Installation Layout](doc-latest/installation-layout.html#installation-layout)).

In order to redefine these defaults, see [Redefining the generic font families](doc-latest/redefining-font-families.html#redefining-font-families).

