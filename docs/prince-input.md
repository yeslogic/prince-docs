---
title: Prince Input
---

Prince takes HTML or XML files as input, and converts them to PDF files. Additionally, CSS style sheets can be provided for styling the documents, and JavaScript files can be used for additional manipulation of the input.

See the sections [Applying Style Sheets in Prince](#applying-style-sheets-in-prince), [Applying JavaScript in Prince](#applying-javascript-in-prince) and [XML Input](#xml-input) for details.

The input files can be provided in several ways:

-   the command line (see [Command-line Reference](command-line.md)),
-   the GUI, or
-   through wrapper scripts (see [Server Integration](server-integration.md)).

Input files can either be local files, or remote files that will be fetched over HTTP or HTTPS, in which case the URL to the file, or to the site, needs to be provided. Prince will automatically create the PDF output once the input pages and files have finished loading.

Last but not least, it is good practice familiarizing yourself with the security implications of HTML, XML, CSS or JavaScript files provided by users we do not have total control over - please see the chapter on [Security](server-integration.md#security).


Applying Style Sheets in Prince
-------------------------------

Prince can apply style sheets from three different sources:

User style sheets  
-   specified from the command line interface or the GUI

Author style sheets  
-   referenced from HTML using &lt;link rel="stylesheet" ... /&gt;
-   specified in HTML using the &lt;style&gt; element
-   referenced from XML documents using the `xml-stylesheet` processing instruction

Default style sheets  
-   applied automatically depending on the type of the document being formatted

### Importing Style Sheets

Style sheets may import other style sheets using [`@import`](css-at-rules.md#at-import) rules. These rules must occur before any other rules or declarations in the style sheet, and have the effect of importing all the rules and declarations from the specified style sheet. See [CSS At-rules](css-at-rules.md).

```
    @import "base.css";
    @import "custom.css";

    /* more declarations */
```
### Conflicting Declarations

Multiple style sheets can be applied and in some cases declarations from different style sheets may conflict. For example, one style sheet might specify that heading elements should use the Times New Roman font, while a different style sheet might specify that heading elements should use the Arial font:

First style sheet:

```
    h1 {
        font-family: "Times New Roman";
        font-size: 24pt;
    }
```
Second style sheet:

```
    h1 {
        font-family: "Arial";
        color: red
    }
```
In the above example, the `font-family` declarations conflict, and only one can possibly be applied. However, the `font-size` and `color` declarations do not conflict, and thus both will be applied to the `h1` element.

### Priority Determination

Style sheets are applied using a cascading process that calculates a priority for each declaration. Conflicting declarations are resolved by choosing the declaration with the highest priority and ignoring the remaining ones.

Priority is determined by looking at the origin of the declaration and whether or not it is labeled with `!important`.

1.  Default style sheets (lowest priority)
2.  User style sheets
3.  Author style sheets
4.  Author style sheets, `!important` declarations
5.  User style sheets, `!important` declarations (highest priority)

If the conflicting declarations have the same origin and importance, the priority is determined by comparing the specificity of the selectors used to apply them. (Combinations of selectors have even higher priority).

1.  Universal selector, eg. "\*" (lowest priority)
2.  Type selector, eg. "`h1`"
3.  Attribute, Class and Pseudo-class selectors
4.  ID selectors, eg. "`#id`" (highest priority)

If the conflicting declarations have the same specificity, the declaration that occurs *last* in the style sheet has the *highest* priority.

If the declarations are from different style sheets, the declaration that occurs in the *last* style sheet to be specified has the *highest* priority. This is based on the order that style sheets are specified on the command line and also on the order that `xml-stylesheet` processing instructions occur in the document.


Applying JavaScript in Prince
-----------------------------

Prince is not running JavaScript by default - document scripts can be enabled by specifying the [`--javascript`](command-line.md#cl-javascript) option on the command-line. Prince will then execute all JavaScript found in the HTML `script` elements in the input document.

External scripts can be run by specifying one or more [`--script=FILE`](command-line.md#cl-script) options on the command-line. These scripts will always be executed, regardless of whether document scripts have been enabled or not.

JavaScript functions can also be called from CSS generated content, by using the `prince-script()` syntax for referencing [Script Functions](gen-content.md#script-functions). Please note that scripts contained in the `prince-script()` function are treated as document scripts, and hence need to be explicitly enabled.

Prince also supports PDF scripts, known as "Document Action" scripts - see [PDF Actions](prince-output.md#pdf-actions). They get included in documents through CSS, too, but will always be run. Note, however, that these scripts are dependent on the PDF viewer, and in many cases might only work in Adobe Acrobat products.


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
Prince styles HTML or XHTML documents by applying a default style sheet for formatting headings, paragraphs, tables, lists, inline elements and images. The default style sheet can be overridden or extended by user or author style sheets - see [Applying Style Sheets in Prince](#applying-style-sheets-in-prince).

DocBook  
Prince styles DocBook documents by applying a default style sheet for formatting headings, paragraphs, tables, lists, inline elements and images. The default style sheet can be overridden or extended by user/author style sheets. (Note that Prince does not process DocBook documents expressed in SGML).

SVG  
Prince supports a rich subset of SVG 1.1, including basic shapes, paths, text and transformations. All `svg` elements are treated as replaced elements, similar to `img` elements in XHTML, and their content is rendered in a rectangular space. No line breaks or page breaks are made within an `svg` element. (See [Scalable Vector Graphics (SVG)](graphics.md#scalable-vector-graphics-svg) for details of which elements are supported).

Any other XML  
No default style sheets will be used, so style sheets will need to be specified by the user or referenced from the document in order for Prince to apply style to the document - see [Applying Style Sheets in Prince](#applying-style-sheets-in-prince).

Prince does not support XSLT. External XSLT processors can be used and the resulting document can be passed to Prince.

### XML Inclusions (XInclude)

XML Inclusions (XInclude) provides a method of including content from other files into an XML document. When Prince processes the XML document, the inclusions are resolved and the included content is treated as if it had been in the original document all along.

The core of XInclude is a single element, `<include href="..."/>`, which specifies the inclusion of the file referenced by the `href` attribute. The element is in the XInclude namespace, `http://www.w3.org/2001/XInclude`, which must be declared either on the element itself or one of its ancestor elements.

Please note that XInclude is disabled by default, and can be enabled with the [`--xinclude`](command-line.md#cl-xinclude) command-line option - but consider all security-related considerations this might imply (see also [XML External Entities and XInclude](server-integration.md#xml-external-entities-and-xinclude)). Please also note that, even when enabled, XIncludes are never processed anywhere but in the main document.

Also note that XInclude only applies to XML files. To apply it to HTML files, the input format needs to be specified with the [`--input`](command-line.md#cl-input) command-line option.

#### Including XML files

Here is an example of a book written in XHTML in which each chapter has been placed in a separate XML document for convenient editing and then included in the main document using XInclude:

```html
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
```
(Note that the XInclude namespace was defined on the root element and bound to the `xi` prefix to save space by avoiding the need to declare the namespace on every inclusion).

#### Including text files

XInclude can also be used to include text files into XML documents:

```xml
    <xi:include href="file.txt" parse="text"/>
```
This is a convenient way of including files containing arbitrary non-XML text, such as emails, database reports or program source code. It also allows the inclusion of external XML content as "unparsed text", as if all the markup had been explicitly escaped with character entities or placed in a CDATA section.

#### Fallback

It is possible to specify fallback content that should be used if an included file cannot be loaded. The fallback content can be arbitrary XML and may even contain additional inclusions.

```xml
    <xi:include href="report.md">
        <xi:fallback>
        <p>No report is available</p>
        </xi:fallback>
    </xi:include>
```
If the `report.md` file cannot be loaded then the paragraph saying "No report is available" will be included in the document instead.

