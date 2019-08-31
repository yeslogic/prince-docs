---
title: CSS At-rules
---

CSS At-rules
------------

In this section you find the documentation for the supported CSS at-rules.

### Initial At-Rules

The following at-rules have to appear at the beginning of the CSS document, and exactly in this order:

|                                                                                                             |                                                                                                                                                                                                                                                |
|-------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `@charset`                                                                                                  | Defines the fallback encoding to use for the stylesheet. Prince supports stylesheets in `UTF-8`, `UTF-16`, `Latin1` and `Windows-1252`.                                                                                                        |
| `@import [ <url(URL)> | <string> ] supports([ <supports-condition> | <declaration> ])? <media-query-list>?` | Allows authors to import style rules from other style sheets. The `url(URL)` or `<string>` give the URL of the style sheet to be imported, while the optional `supports(...)` expression and `<media-query-list>` state the import conditions. |
| `@namespace [Prefix]? [ <url(URL)> | <string> ]`                                                            | Defines a namespace prefix or default namespace to be used in the stylesheet.                                                                                                                                                                  |

### Nested At-Rules

After the initial at-rules, the following at-rules can appear also in nested form in the CSS document:

`@page [Name] Selectors { Page-declarations }`

Modifies margins, orphans, widows and page breaks of a document when printing it. The pages are identified either by a name, or by a page pseudo-class and page declarations can either be style declarations or page region at-rules.

`:left`

Page pseudo-classes

`:right`

`:recto`

`:verso`

`:first`

`:blank`

`:nth(N)`

`@left` | `@left-top` | `@left-middle` | `@left-bottom`

Page region at-rules

`@right` | `@right-top` | `@right-middle` | `@right-bottom`

`@top` | `@top-left-corner` | `@top-left` | `@top-center` | `@top-right` | `@top-right-corner`

`@bottom` | `@bottom-left-corner` | `@bottom-left` | `@bottom-center` | `@bottom-right` | `@bottom-right-corner`

`@page-float-top` | `@page-float-bottom` | `@prince-overlay`

`@footnote`

The `@page` rule takes the following CSS properties: `` | `` | `` | `` | `` | `` | `` | `` | `` | ``

| `@media Media-query-list { Rules }`                                                                                 |
|---------------------------------------------------------------------------------------------------------------------|
| The rules will apply if the device meets the criteria of the condition defined in the media query. See for details. |

| `@supports Condition { Rules }`                                                                                                        |
|----------------------------------------------------------------------------------------------------------------------------------------|
| Checks whether particular `property:value` combinations are supported. Unlike media queries, this uses the classical two-valued logic. |

`@font-face { Font-declarations }`

Links a font family to an actual font.

The `@font-face` rule takes the following CSS descriptors:

`: <family-name>`

This descriptor defines the font family name that will be used in all CSS font family name matching. It is required for the `@font-face` rule to be valid.

`: [ url(<URL>) format(<string>#)? | local(<family-name>) | prince-lookup(<family-name>) ]#`

This descriptor specifies the resource containing font data. It is required for the `@font-face` rule to be valid. The `local()` function searches for locally installed system fonts, but `prince-lookup()` will also find fonts defined by other `@font-face` rules.

`: <urange>#`

This descriptor defines the set of Unicode codepoints that may be supported by the font face. The descriptor value is a comma-delimited list of Unicode range values.

Additionally, `@font-face` takes the CSS descriptors ``, ``, `` and ``, which take the same values as the CSS properties with the same name.

| `@prince-color Name { alternate-color: ... }`                                                                                                                                                                               |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Defines a new color name.                                                                                                                                                                                                   |
| The `@prince-color` rule takes the mandatory `` property to specify an alternate color to use if the named spot color is not available. The named color is used in a stylesheet with the `prince-color()` function. (See ). |

| `@prince-pdf Name { Declarations }`                                                                                       |
|---------------------------------------------------------------------------------------------------------------------------|
| Defines properties relating to PDFs.                                                                                      |
| The `@prince-pdf` rule takes the following CSS properties: `` | `` | `` | `` | `` | `` | `` | `` | `` | `` | `` | `` | `` |


