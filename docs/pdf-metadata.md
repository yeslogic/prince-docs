### PDF Tags

Tagged PDF files have special handling mechanisms for specific tag types. In Prince, it is possible to assign PDF tag types to elements in the document through the `` property, in order to create XML vocabularies in the PDF.

CSS

``
    ul.toc {
      prince-pdf-tag-type: TOC;
    }
    .toc li {
      prince-pdf-tag-type: TOCI;
    }

HTML

``
    <ul class="toc">
      <li>First Chapter</li>
      <li>Second Chapter</li>
    </ul>

Bruce Lawson has written an interesting introduction on how to make [accessible tagged PDFs with Prince](https://medium.com/@bruce_39084/making-accessible-tagged-pdfs-with-prince-ad7fd7a48711) - all you need to know about PDF tags and Prince!

### PDF Metadata

Prince creates PDF metadata from the content of the XHTML metadata elements. The content of the `<title>` element is used for the document title, while the `<meta>` element can be used to specify the document author, subject, keywords, date, and generator application:

XML

``
    <html>
    <head>
    <title>Cooking with Cabbage</title>
    <meta name="author" content="John Smith"/>
    <meta name="subject" content="An interesting book about food"/>
    <meta name="keywords" content="cabbage, cooking, eating"/>
    <meta name="date" content="2009-04-01"/>
    <meta name="generator" content="MyReportingApp"/>
    </head>

#### XMP Metadata

Additionally, XMP metadata can be added to a PDF file from an XMP file. This file needs to be passed to Prince either via the [`--pdf-xmp`](doc-latest/doc-refs.html#cl-pdf-xmp) command-line option, the CSS property, or it can be specified in JavaScript with the [`PDF.xmp()`](doc-latest/doc-refs.html#window.PDF.xmp) function.

The [`PDF.xmp()`](doc-latest/doc-refs.html#window.PDF.xmp) JavaScript function, the CSS property and the [`--pdf-xmp`](doc-latest/doc-refs.html#cl-pdf-xmp) command-line option require either a URL pointing to an XMP file, or an encoded `data:` URL.

Prince includes data from the `<x:xmpmeta>` element and its contents. The `xpacket` processing instructions are ignored, as Prince generates those itself when it produces the PDF file.
