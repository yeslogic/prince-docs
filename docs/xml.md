---
title: XML Input
---

XML Input
---------

### XML Input

Prince processes well-formed XML 1.0 documents with full support for namespaces, internal and external entities, DTDs, character references and CDATA sections. Comments and processing instructions are ignored and do not affect the output.

#### Validation

Prince loads DTD files in order to resolve entity definitions and default attribute values. However, Prince does not perform validation upon input documents. If validation is a processing requirement, the use of an external validator is recommended.

#### `xml:lang`

Prince supports the `xml:lang` attribute, which is used to indicate the language of the document text. Elements can be selected by language using the CSS `:lang()` selector.

#### `xml:id`

Prince supports the `xml:id` attribute, which is used to give elements a unique identifier. This identifier can be used when creating links and cross-references; it also allows elements to be selected using the CSS ID selector.

#### `xml:base`

Prince does not support the `xml:base` attribute, therefore hyperlinks must be absolute URLs or relative to the document path.

### XML Styling

Prince provides sensible default styling behavior for several common XML vocabularies:

(X)HTML  
Prince styles HTML or XHTML documents by applying a default style sheet for formatting headings, paragraphs, tables, lists, inline elements and images. The default style sheet can be overridden or extended by user or author style sheets - see [Applying Style Sheets in Prince](apply-css.html#apply-css).

DocBook  
Prince styles DocBook documents by applying a default style sheet for formatting headings, paragraphs, tables, lists, inline elements and images. The default style sheet can be overridden or extended by user/author style sheets. (Note that Prince does not process DocBook documents expressed in SGML).

SVG  
Prince supports a rich subset of SVG 1.1, including basic shapes, paths, text and transformations. All `svg` elements are treated as replaced elements, similar to `img` elements in XHTML, and their content is rendered in a rectangular space. No line breaks or page breaks are made within an `svg` element. (See [Scalable Vector Graphics (SVG)](svg.html#svg) for details of which elements are supported).

Any other XML  
No default style sheets will be used, so style sheets will need to be specified by the user or referenced from the document in order for Prince to apply style to the document - see [Applying Style Sheets in Prince](apply-css.html#apply-css).

Prince does not support XSLT. External XSLT processors can be used and the resulting document can be passed to Prince.

### XML Inclusions (XInclude)

XML Inclusions (XInclude) provides a method of including content from other files into an XML document. When Prince processes the XML document, the inclusions are resolved and the included content is treated as if it had been in the original document all along.

The core of XInclude is a single element, `<include href="..."/>`, which specifies the inclusion of the file referenced by the `href` attribute. The element is in the XInclude namespace, `http://www.w3.org/2001/XInclude`, which must be declared either on the element itself or one of its ancestor elements.

Please note that XInclude is disabled by default, and can be enabled with the [`--xinclude`](doc-refs.html#cl-xinclude) command-line option. Also note that XInclude only applies to XML files. To apply it to HTML files, the input format needs to be specified with the [`--input`](doc-refs.html#cl-input) command-line option.

#### Including XML files

Here is an example of a book written in XHTML in which each chapter has been placed in a separate XML document for convenient editing and then included in the main document using XInclude:


    <html xmlns:xi="http://www.w3.org/2001/XInclude">
    <head>
    <title>Book Title</title>
    </head>
    <body>
    <xi:include href="chap1.xml"/>
    <xi:include href="chap2.xml"/>
    <xi:include href="chap3.xml"/>
    </body>
    </html>

(Note that the XInclude namespace was defined on the root element and bound to the `xi` prefix to save space by avoiding the need to declare the namespace on every inclusion).

#### Including text files

XInclude can also be used to include text files into XML documents:


    <xi:include href="file.txt" parse="text"/>

This is a convenient way of including files containing arbitrary non-XML text, such as emails, database reports or program source code. It also allows the inclusion of external XML content as "unparsed text", as if all the markup had been explicitly escaped with character entities or placed in a CDATA section.

#### Fallback

It is possible to specify fallback content that should be used if an included file cannot be loaded. The fallback content can be arbitrary XML and may even contain additional inclusions.


    <xi:include href="report.html">
        <xi:fallback>
        <p>No report is available</p>
        </xi:fallback>
    </xi:include>

If the `report.html` file cannot be loaded then the paragraph saying "No report is available" will be included in the document instead.

