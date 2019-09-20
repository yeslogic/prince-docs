---
title: PDF Tags
---

### PDF Tags

Tagged PDF files have special handling mechanisms for specific tag types. When enabling tagged PDF files with the command line option [`--tagged-pdf`](doc-refs.html#cl-tagged-pdf) Prince automatically assigns default values to certain HTML elements, which can be seen in the default `html.css` style sheet (see [Installation Layout](installation-layout.html#installation-layout)).

However, in specific cases it is advisable to fine-tune the PDF tags with the `prince-pdf-tag-type` property. In Prince, it is possible to assign PDF tag types to elements in the document through the `prince-pdf-tag-type` property, in order to create XML vocabularies in the PDF.

CSS


    ul.toc {
      prince-pdf-tag-type: TOC;
    }
    .toc li {
      prince-pdf-tag-type: TOCI;
    }

HTML


    <ul class="toc">
      <li>First Chapter</li>
      <li>Second Chapter</li>
    </ul>

The possible values are the following PDF tag types:

-   Part
-   Art
-   Sect
-   Div
-   Index
-   BlockQuote
-   Caption
-   TOC
-   TOCI
-   P
-   H1
-   H2
-   H3
-   H4
-   H5
-   H6
-   OL
-   UL
-   LI
-   Lbl
-   DL
-   DL-Div
-   DT
-   DD
-   Span
-   Quote
-   BibEntry
-   Code
-   Figure
-   Formula

The default value `auto` leaves the tag assignment to Prince.

Bruce Lawson has written an interesting introduction on how to make [accessible tagged PDFs with Prince](https://medium.com/@bruce_39084/making-accessible-tagged-pdfs-with-prince-ad7fd7a48711) - all you need to know about PDF tags and Prince!

