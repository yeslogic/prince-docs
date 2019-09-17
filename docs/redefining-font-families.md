---
title: Redefining the generic font families
---

### Redefining the generic font families

The CSS generic font families can be redefined to use different fonts by editing the `fonts.css` file in the Prince installation (see [Installation Layout](installation-layout.html#installation-layout)). Each font family is defined using a [`@font-face`](doc-refs.html#at-font-face) rule, which maps a font family to an actual font either by name or by filename. (See [Generic font families](fonts.html#font-families)).

Here is an example of mapping the generic "sans-serif" font family to the local system font called "Trebuchet MS".

fonts.css

``
    @font-face {
        font-family: sans-serif;
        src: local("Trebuchet MS")
    }

It is also possible to map the generic font families to local fonts specified by the filename of the TrueType font file. This will usually require using multiple [`@font-face`](doc-refs.html#at-font-face) rules, one for each TrueType font file in the font family, which usually includes four files (normal, bold, italic and bold-italic). Here is an example of mapping the generic "sans-serif" font family to the "Trebuchet MS" font using filenames, assuming that the font is installed in the usual system directory on Linux.

fonts.css

``
    @font-face {
        font-family: sans-serif;
        font-style: normal;
        font-weight: normal;
        src: url("/usr/share/fonts/truetype/msttcorefonts/trebuc.ttf")
    }

    @font-face {
        font-family: sans-serif;
        font-style: normal;
        font-weight: bold;
        src: url("/usr/share/fonts/truetype/msttcorefonts/trebucbd.ttf")
    }

    @font-face {
        font-family: sans-serif;
        font-style: italic;
        font-weight: normal;
        src: url("/usr/share/fonts/truetype/msttcorefonts/trebucit.ttf")
    }

    @font-face {
        font-family: sans-serif;
        font-style: italic;
        font-weight: bold;
        src: url("/usr/share/fonts/truetype/msttcorefonts/trebucbi.ttf")
    }

Prince can be instructed not to use system fonts with the [`--no-system-fonts`](doc-refs.html#cl-no-system-fonts) command-line option. Only fonts defined with [`@font-face`](doc-refs.html#at-font-face) rules in CSS will be available.

