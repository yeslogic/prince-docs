---
title: Page Headers and Footers
---

Page Headers and Footers
------------------------

You need  
[Page regions](paged.md#page-regions)

[Generated Content](gen-content.md#gen-content)

When preparing a document for print, "running" headers and footers repeating on every page, such as page numbering and titles of the book and of the current chapter, are a common need.

Prince uses CSS for these headers and footers and for styling them.

Each page is structured in [Page regions](paged.md#page-regions) - most page content is located inside the *page area*, including the [Footnotes](footnotes.md#footnotes), but the *page-margin boxes* contain most of the content repeating in slightly varied way across the whole book - the running headers and footers.

A typical case is page numbering, which can easily be obtained with [Generated Content](gen-content.md#gen-content): the current page number can be printed in a page region with the `content` property. (See also [Page Numbering](page-numbering.md#page-numbering)).


    @page {
        @bottom {
            content: counter(page)
        }
    }

By using [Named pages](paged.md#named-pages), you can style the page numbering of the Preface with roman numbers and the main pages with arabic numbers - see the example [Restarting page numbering](paged.md#ex-restart-page-numbers).

The title of the book, or the current chapter, can be copyied into the page regions by using the [string-set](doc-refs.md#prop-string-set) property. For details, please see the [Copying content from the document](paged.md#content-copying-text) chapter.

CSS


    @page {
        @top { content: string(doctitle) }
    }

    h1 { string-set: doctitle content() }

The @page rule specifies that the top-center page region will contain the text content of the document title copied from the text content of the `h1` element in the document.

If some special formatting of the text in the margin box is required, copying the text will not suffice - you need to remove an element from the natural page flow to place it in the margin box. See [Taking elements from the document](paged.md#content-taking-elements) for details.

