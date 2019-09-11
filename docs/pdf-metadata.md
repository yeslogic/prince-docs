---
title: PDF Metadata
---

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

Additionally, XMP metadata can be added to a PDF file from an XMP file. This file needs to be passed to Prince either via the [`--pdf-xmp`](doc-latest/doc-refs.html#cl-pdf-xmp) command-line option, the [prince-pdf-xmp](doc-latest/doc-refs.html#prop-prince-pdf-xmp) CSS property, or it can be specified in JavaScript with the [`PDF.xmp()`](doc-latest/doc-refs.html#window.PDF.xmp) function.

The [`PDF.xmp()`](doc-latest/doc-refs.html#window.PDF.xmp) JavaScript function, the [prince-pdf-xmp](doc-latest/doc-refs.html#prop-prince-pdf-xmp) CSS property and the [`--pdf-xmp`](doc-latest/doc-refs.html#cl-pdf-xmp) command-line option require either a URL pointing to an XMP file, or an encoded `data:` URL.

Prince includes data from the `<x:xmpmeta>` element and its contents. The `xpacket` processing instructions are ignored, as Prince generates those itself when it produces the PDF file.

