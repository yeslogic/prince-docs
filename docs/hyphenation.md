---
title: Hyphenation
---

Hyphenation
-----------

You need  
``

-   ``
-   ``
-   ``
-   ``
-   ``

The property `` controls whether hyphenation is allowed to create opportunities to wrap within a line of text.

The default value of the `` property is `manual` - to enable automatic hyphenation in a body of text, the value `auto` has to be declared.

The value `none` instructs never to hyphenate, while the default value `manual` tells Prince to only hyphenate when there are characters inside the word that explicitly suggest hyphenation opportunities, such as e.g. "soft hyphens" (represented either by the Unicode character `U+00AD` or the HTML entity `&shy;`). With the value `auto`, words may be broken at appropriate hyphenation points as determined automatically by the language-appropriate hyphenation resources, or by hyphenation characters in a word.

In order to make automatic hyphenation work as intended, it is important to communicate to Prince the natural language the text is in, so that the language-specific hyphenation rules can be applied - this is done by means to the `lang` or `xml:lang` attributes.

The character shown at the end of a line when the word is hyphenated can be specified with the `` property.

Fine-tuning of hyphenation can be done with the `` and `` properties to determine the minimum number of letters in a word that may be moved to the next line or that may be left at the end of a line when the word is hyphenated.

The `` property is used to determine the maximum number of consecutive lines that may end with a hyphenated word.

Prince uses the hyphenation patterns from the CTAN archive - the full archive is accessible [here](http://tug.ctan.org/tex-archive/language/hyph-utf8/tex/generic/hyph-utf8/patterns/txt/). The default hyphenation patterns can be found in the installed `hyph.css` file, located in the default style sheets location (see ).

Hyphenation patterns for the following languages are provided:

|       |            |
|-------|------------|
| da    | Danish     |
| de    | German     |
| en-US | English    |
| es    | Spanish    |
| fi    | Finnish    |
| fr    | French     |
| is    | Icelandic  |
| it    | Italian    |
| lt    | Lithuanian |
| pl    | Polish     |
| pt    | Portuguese |
| ru    | Russian    |
| sl    | Slovenian  |
| sv    | Swedish    |

A special case is Thai hyphenation, supported thanks to the [LibThai](http://linux.thai.net/projects/libthai) package.

To add hyphenation patterns for other languages, download them from the [CTAN archive](http://tug.ctan.org/tex-archive/language/hyph-utf8/tex/generic/hyph-utf8/patterns/txt/). Save the files for the chosen language without the `.txt` extension, and link to the pattern file (with the `.pat` extension) with the `` CSS property. Prince determines which language to use for hyphenation with the help of the `:lang()` CSS selector, which in turn checks the `lang` or `xml:lang` attributes of the document:

``
    :lang(en-GB) {
        prince-hyphenate-patterns: url("hyph-en-gb.pat");
    }

``
    <span lang="en-GB">supercalifragilisticexpialidocious</span>

Prince only supports local hyphenation dictionaries.
