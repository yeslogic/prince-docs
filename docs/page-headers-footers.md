Page Headers and Footers
------------------------

You need  

When preparing a document for print, "running" headers and footers repeating on every page, such as page numbering and titles of the book and of the current chapter, are a common need.

Prince uses CSS for these headers and footers and for styling them.

Each page is structured in - most page content is located inside the *page area*, including the , but the *page-margin boxes* contain most of the content repeating in slightly varied way across the whole book - the running headers and footers.

A typical case is page numbering, which can easily be obtained with : the current page number can be printed in a page region with the `` property. (See also ).

``
    @page {
        @bottom {
            : counter(page)
        }
    }

By using , you can style the page numbering of the Preface with roman numbers and the main pages with arabic numbers - see the example .

The title of the book, or the current chapter, can be copyied into the page regions by using the property. For details, please see the chapter.

CSS

``
    @page {
        @top { content: string(doctitle) }
    }

    h1 { string-set: doctitle content() }

The @page rule specifies that the top-center page region will contain the text content of the document title copied from the text content of the `h1` element in the document.

If some special formatting of the text in the margin box is required, copying the text will not suffice - you need to remove an element from the natural page flow to place it in the margin box. See for details.
