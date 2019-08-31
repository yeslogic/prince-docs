---
title: PDF Features
---

PDF Features
------------

Prince supports a wide range of PDF features, including the following:

### PDF Links

Prince supports PDF-internal and -external links. HTML hyperlinks are automatically converted. To make an element in XML, or any arbitrary element, a clickable link, the `` CSS property is required.

``
    xref {
        prince-link: attr( linkend )
    }

The property `` may be used to control whether relative links should be embedded in the PDF as web (URL) links or file links. By default they will be resolved against the base URL of the input document.

Prince also supports the following PDF-specific fragment identifiers, supported by web browsers, and will use them when generating links to local PDF files.

``
    <a href="test.pdf#page=2">...</a>

    <a href="test.pdf#nameddest=section1">...</a>

Named destinations (`nameddest`) in PDF files have a similar function to HTML IDs: they can be the target anchors for links from other documents. The property `` is used for creating them.

HTML

``
    <div class="section" data-sectionid="section1">

CSS

``
    div.section {
        prince-pdf-destination: attr( data-sectionid )
    }

In order to link to this section, the following syntax is used:

HTML

``
    <a href="test.pdf#nameddest=section1">...</a>

### PDF Actions

Prince supports the `pdf-action:` URL scheme for PDF actions. Typical values are `Print`, `GoBack`, `GoForward`, `NextPage`, `PrevPage`, `FirstPage`, `LastPage`.

``
    <a href="pdf-action:Print">Print Document</a>

However, Prince passes the provided values verbatim to the PDF viewer, so the user can supply values that Prince doesn't know about, but the viewer does.

Please be advised that this and the following actions and scripts are dependent on the PDF viewer, and in many cases might only work in Adobe Acrobat products.

The property `` may be used to specify a space-separated list of actions to perform when the PDF file is opened, like eg. popping up the print dialog box automatically, or setting the default zoom level for PDF documents. Any arbitrary identifier can be specified, although these may be PDF viewer specific; Acrobat can take just about any menu item.

``
    @prince-pdf {
        prince-pdf-open-action: zoom(fit-page) print;
    }

In a similar fashion, JavaScript code that will be executed when the PDF file is opened may be included with the `` property. A common use case is to activate the "Print" dialog automatically. To achieve the equivalent of the previous example, the following code could be used:

``
    @prince-pdf {
        prince-pdf-script: "this.zoomType = zoomtype.fitP; this.print();"
    }

### PDF Pages

Prince allows for some degree of control on the pages and the page layout in a PDF file. The CSS property `` can be used to set the page label that will be displayed in the PDF viewer. It can be used to instruct the PDF viewer to display the page label in the ToC in a particular way.

``
    @page {
        prince-pdf-page-label: counter(page, lower-roman);
    }

The property `` can be used to set the default page mode for the PDF file when it is opened. For example, whether the bookmarks panel should be displayed, and whether the viewer should be fullscreen.

``
    @prince-pdf {
        prince-pdf-page-mode: fullscreen;
    }

Also the default page layout for the PDF file when it is opened can be determined with the `` property.

``
    @prince-pdf {
        prince-pdf-page-layout: two-column-right;
    }

The values of this property are mapped to PDF page layout options:

| CSS Keyword                      | PDF Page Layout                      | Description                                                                                                                       |
|----------------------------------|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| `single-page`                    | Single Page View                     | Displays one page at the time                                                                                                     |
| `one-column`                     | Enable Scrolling                     | Displays pages in one continuous vertical column                                                                                  |
| `two-column` | `two-column-left` | Two Page Scrolling                   | Displays facing pages side by side in a continuous vertical column - the first (i.e. cover) page is on the left.                  |
| `two-column-right`               | Two Page Scrolling & Show Cover Page | Displays facing pages side by side in a continuous vertical column - the first (i.e. cover) page is displayed alone on the right. |
| `two-page` | `two-page-left`     | Two Page View                        | Displays a two-page spread at the time - the first (i.e. the cover) page is on the left.                                          |
| `two-page-right`                 | Two Page View & Show Cover Page      | Displays a two-page spread at the time - the first (i.e. the cover) page is displayed alone on the right.                         |

### PDF Printing

Prince also provides two properties to fine-tune the printing of the PDF. The property `` can be used to disable print scaling for the PDF file when it is printed and the property `` controls the PickTrayByPDFSize flag in generated PDF files, which specifies whether the PDF page size is used to select the input paper tray.

### PDF Compression

Prince compresses its PDF output to reduce the size of the documents that it produces, but does not create linearized PDF files, as this would increase formatting time and memory requirements. An external program such as Adobe Acrobat or Ghostscript may be used for this purpose if necessary.

Compression may be disabled with the command-line option [`--no-compress`](doc-latest/doc-refs.html#cl-no-compress).

### PDF Encryption and Restriction

Prince can encrypt the produced PDF files with the [`--encrypt`](doc-latest/doc-refs.html#cl-encrypt) command-line option. The default key size is 128 bits. With the option [`--key-bits`](doc-latest/doc-refs.html#cl-key-bits) a different key size can be chosen. Also the JavaScript methods [`PDF.encrypt`](doc-latest/doc-refs.html#window.PDF.encrypt) and [`PDF.keyBits`](doc-latest/doc-refs.html#window.PDF.keyBits) can be used for the same purpose.

The command-line options [`--user-password`](doc-latest/doc-refs.html#cl-user-password) and [`--owner-password`](doc-latest/doc-refs.html#cl-owner-password) set respectively the PDF user password and the PDF owner password.

Prince also offers a range of command-line options to disallow printing, copying, annotating and modifying the PDF output: [`--disallow-print`](doc-latest/doc-refs.html#cl-disallow-print), [`--disallow-copy`](doc-latest/doc-refs.html#cl-disallow-copy), [`--disallow-annotate`](doc-latest/doc-refs.html#cl-disallow-annotate) and [`--disallow-modify`](doc-latest/doc-refs.html#cl-disallow-modify).

### PDF Font Embedding

Prince embeds fonts in its PDF output to ensure accurate viewing and printing on any system. Typically, only the necessary parts of a font will be embedded.

When disabling font subsetting with the command-line option [`--no-subset-fonts`](doc-latest/doc-refs.html#cl-no-subset-fonts), Prince will embed the entire font in the PDF file, which is convenient if people are planning on editing the PDF file later, and may need to add glyphs that were not present in the original PDF.

Font embedding can be disabled if necessary, for example if Prince is being used to create PDF files in a controlled environment with known fonts where space is at a premium. The command-line option [`--no-embed-fonts`](doc-latest/doc-refs.html#cl-no-embed-fonts) is used for this purpose.
