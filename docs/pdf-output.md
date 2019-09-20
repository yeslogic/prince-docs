---
title: PDF Features
---

PDF Features
------------

Prince supports a wide range of PDF features, including the following:

### PDF Links

Prince supports PDF-internal and -external links. HTML hyperlinks are automatically converted. To make an element in XML, or any arbitrary element, a clickable link, the `prince-link` CSS property is required.


    xref {
        prince-link: attr( linkend )
    }

The property `prince-pdf-link-type` may be used to control the link type and target, i.e. whether relative links should be embedded in the PDF as web (URL) links or file links (by default they will be resolved against the base URL of the input document) and whether to open the links in the same or a new window. Note however that the optional link target keywords `same-window` and `new-window` only affect links to local PDF files.


    a[href] {
        prince-pdf-link-type: new-window;
    }

This example is equivalent to `prince-pdf-link-type: auto new-window` and has only effect for links to local files.

Prince also supports the following PDF-specific fragment identifiers, supported by web browsers, and will use them when generating links to local PDF files.


    <a href="test.pdf#page=2">...</a>

    <a href="test.pdf#nameddest=section1">...</a>

Named destinations (`nameddest`) in PDF files have a similar function to HTML IDs: they can be the target anchors for links from other documents. The property `prince-pdf-destination` is used for creating them.

HTML


    <div class="section" data-sectionid="section1">

CSS


    div.section {
        prince-pdf-destination: attr( data-sectionid )
    }

In order to link to this section, the following syntax is used:

HTML


    <a href="test.pdf#nameddest=section1">...</a>

### PDF Actions

Prince supports the `pdf-action:` URL scheme for PDF actions. Typical values are `Print`, `GoBack`, `GoForward`, `NextPage`, `PrevPage`, `FirstPage`, `LastPage`.


    <a href="pdf-action:Print">Print Document</a>

However, Prince passes the provided values verbatim to the PDF viewer, so the user can supply values that Prince doesn't know about, but the viewer does. Also, these scripts will always be run, unlike JavaScript (see [Applying JavaScript in Prince](apply-javascript.html#applying-javascript)).

Please be advised that this and the following actions and scripts are dependent on the PDF viewer, and in many cases might only work in Adobe Acrobat products.

The property `prince-pdf-open-action` may be used to specify a space-separated list of actions to perform when the PDF file is opened, like eg. popping up the print dialog box automatically, or setting the default zoom level for PDF documents. Any arbitrary identifier can be specified, although these may be PDF viewer specific; Acrobat can take just about any menu item.


    @prince-pdf {
        prince-pdf-open-action: zoom(fit-page) print;
    }

In a similar fashion, scripts that will be executed when the PDF file is opened may be included with the `prince-pdf-script` property. A common use case is to activate the "Print" dialog automatically. To achieve the equivalent of the previous example, the following code could be used:


    @prince-pdf {
        prince-pdf-script: "this.zoomType = zoomtype.fitP; this.print();"
    }

The property can also take the `url()` function to reference an external JavaScript file.


    @prince-pdf {
        prince-pdf-script: url("myscript.js")
    }

Prince offers yet another way to include scripts in a document through a stylesheet: the `prince-pdf-event-scripts` property can be used to include JavaScript code that will be executed in the PDF when printing, saving, and closing the PDF, known as "Document Action" scripts. Just as with the previous property, scripts can either be given inline, or be included from an external file.


    @prince-pdf {
        prince-pdf-event-scripts: will-close url("onclose.js"), will-print url("onprint.js");
    }

### PDF Pages

Prince allows for some degree of control on the pages and the page layout in a PDF file. The CSS property `prince-pdf-page-label` can be used to set the page label that will be displayed in the PDF viewer. It can be used to instruct the PDF viewer to display the page label in the ToC in a particular way.


    @page {
        prince-pdf-page-label: counter(page, lower-roman);
    }

The property `prince-pdf-page-mode` can be used to set the default page mode for the PDF file when it is opened. For example, whether the bookmarks panel should be displayed, and whether the viewer should be fullscreen.


    @prince-pdf {
        prince-pdf-page-mode: fullscreen;
    }

Also the default page layout for the PDF file when it is opened can be determined with the `prince-pdf-page-layout` property.


    @prince-pdf {
        prince-pdf-page-layout: two-column-right;
    }

The values of this property are mapped to PDF page layout options:

<table class="grid">
<thead>
  <tr>
    <th>CSS Keyword</th>
    <th>PDF Page Layout</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>single-page</code></td>
    <td>Single Page View</td>
    <td>Displays one page at the time</td>
  </tr>
  <tr>
    <td><code>one-column</code></td>
    <td>Enable Scrolling</td>
    <td>Displays pages in one continuous vertical column</td>
  </tr>
  <tr>
    <td><code>two-column</code> | <code>two-column-left</code></td>
    <td>Two Page Scrolling</td>
    <td>Displays facing pages side by side in a continuous vertical column - the
    first (i.e. cover) page is on the left.</td>
  </tr>
  <tr>
    <td><code>two-column-right</code></td>
    <td>Two Page Scrolling &amp; Show Cover Page</td>
    <td>Displays facing pages side by side in a continuous vertical column - the
    first (i.e. cover) page is displayed alone on the right.</td>
  </tr>
  <tr>
    <td><code>two-page</code> | <code>two-page-left</code></td>
    <td>Two Page View</td>
    <td>Displays a two-page spread at the time - the first (i.e. the cover) page
    is on the left.</td>
  </tr>
  <tr>
    <td><code>two-page-right</code></td>
    <td>Two Page View &amp; Show Cover Page</td>
    <td>Displays a two-page spread at the time - the first (i.e. the cover) page
    is displayed alone on the right.</td>
  </tr>
</tbody>
</table>

### PDF Printing

Prince also provides two properties to fine-tune the printing of the PDF. The property `prince-pdf-print-scaling` can be used to disable print scaling for the PDF file when it is printed and the property `prince-pdf-paper-tray` controls the PickTrayByPDFSize flag in generated PDF files, which specifies whether the PDF page size is used to select the input paper tray.

Duplex printing is supported with the CSS property `prince-pdf-duplex`. This property may be used inside the [`@prince-pdf`](doc-refs.html#at-prince-pdf) at-rule to set the `Duplex` property in the `PDFViewerPreferences` dictionary. The values `duplex-flip-short-edge` and `duplex-flip-long-edge` tell about how to flip the paper, while the value `simplex` suppresses duplex printing.


    @prince-pdf {
        prince-pdf-duplex: duplex-flip-long-edge;
    }

### PDF Compression

Prince compresses its PDF output to reduce the size of the documents that it produces, but does not create linearized PDF files, as this would increase formatting time and memory requirements. An external program such as Adobe Acrobat or Ghostscript may be used for this purpose if necessary.

Compression may be disabled with the command-line option [`--no-compress`](doc-refs.html#cl-no-compress).

### PDF Encryption and Document Security

Prince can encrypt the produced PDF files with the [`--encrypt`](doc-refs.html#cl-encrypt) command-line option. The default key size is 128 bits. With the option [`--key-bits`](doc-refs.html#cl-key-bits) a different key size can be chosen. Also the JavaScript methods [`PDF.encrypt`](doc-refs.html#window.PDF.encrypt) and [`PDF.keyBits`](doc-refs.html#window.PDF.keyBits) can be used for the same purpose.

The command-line options [`--user-password`](doc-refs.html#cl-user-password) and [`--owner-password`](doc-refs.html#cl-owner-password) set respectively the PDF user password and the PDF owner password.

Prince also offers a range of command-line options to disallow printing, copying, annotating and modifying the PDF output: [`--disallow-print`](doc-refs.html#cl-disallow-print), [`--disallow-copy`](doc-refs.html#cl-disallow-copy), [`--disallow-annotate`](doc-refs.html#cl-disallow-annotate) and [`--disallow-modify`](doc-refs.html#cl-disallow-modify).

### PDF Font Embedding and Subsetting

Prince embeds fonts in its PDF output to ensure accurate viewing and printing on any system. Typically, only the necessary parts of a font will be embedded - font subsetting is enabled by default.

Font subsetting can be disabled with the command-line option [`--no-subset-fonts`](doc-refs.html#cl-no-subset-fonts) or with the JavaScript function [`PDF.subsetFonts`](doc-refs.html#window.PDF.subsetFonts): in that case, Prince will embed the entire font in the PDF file, which is convenient if people are planning on editing the PDF file later, and may need to add glyphs that were not present in the original PDF.

Font subsetting is not yet supported for OpenType fonts with CFF outlines (".otf" fonts).

Font subsetting is disabled automatically for individual fonts that do not grant permission to subset, or if Prince cannot subset them for some other reason.

Font embedding can be disabled if necessary, for example if Prince is being used to create PDF files in a controlled environment with known fonts where space is at a premium. The command-line option [`--no-embed-fonts`](doc-refs.html#cl-no-embed-fonts) is used for this purpose.

### PDF Attachments

Prince supports adding files to PDF documents as attachments. The main mechanisms for doing so are the JavaScript function [`PDF.attachFile`](doc-refs.html#window.PDF.attachFile) and the command-line option [`--attach`](doc-refs.html#cl-attach). Additionally, the job description JSON format, used by the [Prince Control Protocol](cmd-control.html#cmd-control), can be used to provid an attachment "inline" through the Java/C\# APIs (see [Prince Wrappers](server-integration.html#wrappers)) instead of as a separate file on the filesystem. See [Prince Control Protocol](cmd-control.html#cmd-control) for details on the job description JSON format.

