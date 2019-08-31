---
title: Typographic Ligatures
---

Typographic Ligatures
---------------------

You need  
`: prince-opentype()`

``

Prince supports typographic ligatures found in OpenType fonts, i.e. Prince will replace certain characters that appear next to each other with other special glyphs that join those two characters together into one single glyph.

A prominent example of a typographic ligature is **ﬁ**, which replaces the two characters **<span>f</span><span>i</span>** with a single glyph.

Prince automatically enables ligatures declared by the OpenType fonts with the `liga` feature (see ). This feature covers the "standard ligatures" which the font manufacturer thinks should be used in normal conditions. Microsoft has a list of the OpenType feature names [here](https://www.microsoft.com/typography/otspec/featurelist.htm).

Other special ligatures need to be explicitly enabled in Prince to take effect. This is achieved by using the `` CSS property with the `prince-opentype()` function (see ). Care must be taken in which order the features are enabled! And please note that enabling one feature will disable all the default features. To see which OpenType features are enabled by default, see the section.

``
    @page {
        : prince-opentype(dlig, liga);
    }

Unlike other ligature features, the `clig` feature specifies the context in which the ligature is recommended. "Contextual ligatures" are important in some script designs.

The `dlig` feature covers the "discretionary ligatures" which may be used for special effects.

Some ligatures were in common use in the past, such as ligatures with the so-called "long s" - but they appear anachronistic today. Some fonts include the historical forms as alternates, so the "historical ligatures", covered by the `hlig` feature, can be used for a 'period' effect. This feature replaces the default (current) forms with the historical alternates.

Some scripts, most notably Arabic and Syriac scripts, require certain ligatures to be used in normal conditions. These "required ligatures" are covered by the `rlig` feature. Prince enables this feature by default in Arabic script.

Another mechanism for replacing characters is given with the `` property. For an example use, please see the section on .
