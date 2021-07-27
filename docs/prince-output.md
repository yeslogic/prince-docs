---
title: Prince Output
---

Prince produces PDF files that are compatible with Adobe Acrobat and other PDF viewers. The output can be controlled in several different ways, addressing different aspects of the resulting files.

For the error and warning output log, please see [Output log](help.md#output-log).


PDF Versions and Profiles
-------------------------

The PDF files produced by Prince conform to several different PDF versions, up to PDF 1.7, depending on the chosen PDF Profile and the enabled PDF features.

Prince supports tagged PDF files and optional PDF profiles, which can be selected using the [`--pdf-profile`](command-line.md#cl-pdf-profile) option on the [command-line interface](command-line.md), or the `setProfile` method if using a [server wrapper](server-integration.md#wrappers), or the [`PDF.profile`](js-support.md#window.PDF.profile) function in JavaScript.

The available profiles, and the PDF version they are based on, are:

| PDF Profile   | PDF version |
|---------------|-------------|
| PDF/A-1a      | PDF 1.4     |
| PDF/A-1b      | PDF 1.4     |
| PDF/A-2a      | PDF 1.7     |
| PDF/A-2b      | PDF 1.7     |
| PDF/A-3a      | PDF 1.7     |
| PDF/A-3b      | PDF 1.7     |
| PDF/UA-1      | PDF 1.7     |
| PDF/X-1a:2001 | PDF 1.3     |
| PDF/X-1a:2003 | PDF 1.4     |
| PDF/X-3:2002  | PDF 1.3     |
| PDF/X-3:2003  | PDF 1.4     |
| PDF/X-4       | PDF 1.6     |

Prince supports files with the combined PDF/A-1a+PDF/UA-1, PDF/A-2a+PDF/UA-1, and PDF/A-3a+PDF/UA-1 profiles.

Prince also uses:

PDF 1.5  
-   if object streams are enabled, or
-   if tagged PDF is enabled, or
-   if 16-bit images are included in the PDF;

PDF 1.6  
-   if the [`-prince-pdf-print-scaling`](css-props.md#prop-prince-pdf-print-scaling) property is set, or
-   if the [`-prince-pdf-page-mode`](css-props.md#prop-prince-pdf-page-mode) property has the value `show-attachments`;

PDF 1.7  
-   if the [`-prince-pdf-paper-tray`](css-props.md#prop-prince-pdf-paper-tray) property is set, or
-   if the [`-prince-pdf-duplex`](css-props.md#prop-prince-pdf-duplex) property is set.

To enable tagged PDF without using one of the profiles that already imply it, the command-line option [`--tagged-pdf`](command-line.md#cl-tagged-pdf) can be used.

Prince supports PDF object streams to reduce the size of tagged PDFs. This can be disabled by the command-line argument [`--no-object-streams`](command-line.md#cl-no-object-streams) or from JavaScript via the [`PDF.objectStreams`](js-support.md#window.PDF.objectStreams) boolean property.

Object streams are enabled by default, therefore Prince produces files with PDF version 1.5 - unless a profile that requires older PDF versions will automatically disable object streams.

Choosing one profile over another can help producing a PDF file which has the right properties for its intended destination. Each PDF profile places restrictions on the features allowed in a PDF file in order to achieve its aims. Please also see the [Color Management](graphics.md#color-management) section for the impact the PDF profiles have on color management. Prince produces error messages when the restrictions are not respected.

```bash
    $ prince foo.md --encrypt --no-embed-fonts --pdf-profile="PDF/A-1b"
    prince: error: PDF/A-1b does not support encryption
    prince: error: PDF/A-1b requires fonts to be embedded
```

To abort the production of a PDF file when the requirements for a specific PDF profile are not met, the `--fail-pdf-profile-error` command-line option from the [Fail-Safe Options](server-integration.md#fail-safe-options) needs to be invoked.

Generally speaking, PDF/A profiles were created with the goal of long-term preservation of the documents (**PDF** for **A**rchiving), while PDF/X profiles were created to address publisher's needs in the graphic arts industry (**PDF** for e**X**change). The PDF/UA profile is a standard for producing accessible electronic documents (**PDF** for **U**niversal **A**ccessibility).

### PDF/A

-   PDF/A tries to maximize device independence
-   Audio and video content is forbidden
-   All fonts are embedded
-   Colorspaces should be specified in a device-independent manner: all color data must be Grayscale, CMYK or named Spot Colors and there must be an output intent. Transparency is not allowed. See also [Color Management and PDF Profiles](graphics.md#color-management-and-pdf-profiles)
-   Encryption is forbidden

The PDF/A-3 profiles support attachments.  Please note that currently Prince does not support attachments in the PDF/A-2 profiles.

### PDF/UA

-   Content must be tagged in a logical order
-   Tags must correctly represent the semantic structure (headings, lists, etc.)
-   Content not accessible to assistive technology must be avoided
-   Meaningful images and graphics must contain alternative text descriptions
-   Security settings must allow assistive technologies to access the content
-   All fonts must be embedded
-   Text must be mapped to Unicode

The PDF/UA-1 profile supports attachments.

### PDF/X

-   PDF/X is intended to support "blind exchange", i.e. no exchange of technical information is needed to render the printed page as intended
-   Audio and video content is forbidden
-   All fonts are embedded
-   Colorspaces must be specified in a device-independent manner - an output intent is required (see the [`--pdf-output-intent`](command-line.md#cl-pdf-output-intent) command-line option in the [PDF Output Options](command-line.md#cmd-pdf) section)
-   See the [Color Management and PDF Profiles](graphics.md#color-management-and-pdf-profiles) section for the color profiles available in each PDF/X version. Transparency is not allowed, with the exception of PDF/X-4
-   Encryption is forbidden

The PDF/X-4 profile supports attachments.

PDF Accessibility
-----------------

Producing accessible documents is very important when documents are to be shared with a wider audience. There are several criteria that need to be addressed, summed up in the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/), often abbreviated to WCAG, a set of guidelines for improving web accessibility.

The relevant criteria for producing accessible PDF can also be found in a separate document, the [PDF Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/pdf.html).

A first step would be to produce files with one of the PDF profiles addressing accessibility, namely the PDF/UA-1 profile or the combined PDF/A-1a+PDF/UA-1 or PDF/A-3a+PDF/UA-1 profiles, by specifying the [`--pdf-profile`](doc-refs.html#cl-pdf-profile) command line option. See [PDF Versions and Profiles](#pdf-versions-and-profiles) for details.

The next step would be to specifically check compliance of the document's content with the requirements. A number of resoures or tools can be helpful in this step:

-   [Free PDF Accessibility Checker](https://www.access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html)
-   [VIP-PDF-Reader](https://www.access-for-all.ch/en/pdf-lab/500-vip-pdf-reader-e.html)
-   [PDF Checker of the European Internet Inclusion Initiative](http://checkers.eiii.eu/en/pdfcheck/)

Prince helps in creating accessible documents. Note, however, that Prince does not create WCAG-compliant documents by itself - care has to be taken, and the HTML source has to be coded in specific ways to address all requirements in order to create WCAG-compliant PDF documents.

Bruce Lawson has written an interesting introduction on how to make [accessible tagged PDFs with Prince](https://medium.com/@bruce_39084/making-accessible-tagged-pdfs-with-prince-ad7fd7a48711) - all you need to know about PDF tags and Prince! Last but not least, there is a nice [Resources](https://taggedpdf.com/resources/) page on tagged and accessible PDFs.


PDF Features
------------

Prince supports a wide range of PDF features, including the following:

### PDF Links

Prince supports PDF-internal and -external links. HTML hyperlinks are automatically converted. To make an element in XML, or any arbitrary element, a clickable link, the [`-prince-link`](css-props.md#prop-prince-link) CSS property is required.

```
    xref {
        -prince-link: attr( linkend )
    }
```
The property [`-prince-pdf-link-type`](css-props.md#prop-prince-pdf-link-type) may be used to control the link type and target, i.e. whether relative links should be embedded in the PDF as web (URL) links or file links (by default they will be resolved against the base URL of the input document) and whether to open the links in the same or a new window. Note however that the optional link target keywords `same-window` and `new-window` only affect links to local PDF files.

```
    a[href] {
        -prince-pdf-link-type: new-window;
    }
```
This example is equivalent to `-prince-pdf-link-type: auto new-window` and has only effect for links to local files.

Prince also supports the following PDF-specific fragment identifiers, supported by web browsers, and will use them when generating links to local PDF files.

```html
    <a href="test.pdf#page=2">...</a>

    <a href="test.pdf#nameddest=section1">...</a>
```
Named destinations (`nameddest`) in PDF files have a similar function to HTML IDs: they can be the target anchors for links from other documents. The property [`-prince-pdf-destination`](css-props.md#prop-prince-pdf-destination) is used for creating them.

HTML

```html
    <div class="section" data-sectionid="section1">
```
CSS

```css
    div.section {
        -prince-pdf-destination: attr( data-sectionid )
    }
```
In order to link to this section, the following syntax is used:

HTML

```html
    <a href="test.pdf#nameddest=section1">...</a>
```
### PDF Actions

Prince supports the `pdf-action:` URL scheme for PDF actions. Typical values are `Print`, `GoBack`, `GoForward`, `NextPage`, `PrevPage`, `FirstPage`, `LastPage`.

```html
    <a href="pdf-action:Print">Print Document</a>
```
However, Prince passes the provided values verbatim to the PDF viewer, so the user can supply values that Prince doesn't know about, but the viewer does. Also, these scripts will always be run, unlike JavaScript (see [Applying JavaScript in Prince](prince-input.md#applying-javascript-in-prince)).

Please be advised that this and the following actions and scripts are dependent on the PDF viewer, and in many cases might only work in Adobe Acrobat products.

The property [`-prince-pdf-open-action`](css-props.md#prop-prince-pdf-open-action) may be used to specify a space-separated list of actions to perform when the PDF file is opened, like eg. popping up the print dialog box automatically, or setting the default zoom level for PDF documents. Any arbitrary identifier can be specified, although these may be PDF viewer specific; Acrobat can take just about any menu item.

```css
    @prince-pdf {
        -prince-pdf-open-action: zoom(fit-page) print;
    }
```
In a similar fashion, scripts that will be executed when the PDF file is opened may be included with the [`-prince-pdf-script`](css-props.md#prop-prince-pdf-script) property. A common use case is to activate the "Print" dialog automatically. To achieve the equivalent of the previous example, the following code could be used:

```css
    @prince-pdf {
        -prince-pdf-script: "this.zoomType = zoomtype.fitP; this.print();"
    }
```
The property can also take the `url()` function to reference an external JavaScript file.

```css
    @prince-pdf {
        -prince-pdf-script: url("myscript.js")
    }
```
Prince offers yet another way to include scripts in a document through a stylesheet: the [`-prince-pdf-event-scripts`](css-props.md#prop-prince-pdf-event-scripts) property can be used to include JavaScript code that will be executed in the PDF when printing, saving, and closing the PDF, known as "Document Action" scripts. Just as with the previous property, scripts can either be given inline, or be included from an external file.

```css
    @prince-pdf {
        -prince-pdf-event-scripts: will-close url("onclose.js"), will-print url("onprint.js");
    }
```
### PDF Pages

Prince allows for some degree of control on the pages and the page layout in a PDF file. The CSS property [`-prince-pdf-page-label`](css-props.md#prop-prince-pdf-page-label) can be used to set the page label that will be displayed in the PDF viewer. It can be used to instruct the PDF viewer to display the page label in the ToC in a particular way.

```css
    @page {
        -prince-pdf-page-label: counter(page, lower-roman);
    }
```

The property [`-prince-pdf-page-mode`](css-props.md#prop-prince-pdf-page-mode) can be used to set the default page mode for the PDF file when it is opened. For example, whether the bookmarks panel should be displayed, and whether the viewer should be fullscreen.

```css
    @prince-pdf {
        -prince-pdf-page-mode: fullscreen;
    }
```
Also the default page layout for the PDF file when it is opened can be determined with the [`-prince-pdf-page-layout`](css-props.md#prop-prince-pdf-page-layout) property.

```css
    @prince-pdf {
        -prince-pdf-page-layout: two-column-right;
    }
```
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

The property [`-prince-pdf-display-doc-title`](css-props.md#prop-prince-pdf-display-doc-title) can be used to configure whether the document file name, or the document title are displayed in the title bar of the PDF viewer.  Note that Prince will force it to true for the PDF/UA-1 profile, which requires it, and also for PDF/A-1a and PDF/A-3a which technically do not require it but users may still expect it - or they will see a warning if they run the Adobe accessibility checker on their PDFs.


### PDF Printing

Prince also provides two properties to fine-tune the printing of the PDF. The property [`-prince-pdf-print-scaling`](css-props.md#prop-prince-pdf-print-scaling) can be used to disable print scaling for the PDF file when it is printed and the property `-prince-pdf-paper-tray` controls the PickTrayByPDFSize flag in generated PDF files, which specifies whether the PDF page size is used to select the input paper tray.

Duplex printing is supported with the CSS property [`-prince-pdf-duplex`](css-props.md#prop-prince-pdf-duplex). This property may be used inside the [`@prince-pdf`](css-refs.mn#at-prince-pdf) at-rule to set the `Duplex` property in the `PDFViewerPreferences` dictionary. The values `duplex-flip-short-edge` and `duplex-flip-long-edge` tell about how to flip the paper, while the value `simplex` suppresses duplex printing.

```css
    @prince-pdf {
        -prince-pdf-duplex: duplex-flip-long-edge;
    }
```
### PDF Compression

Prince compresses its PDF output to reduce the size of the documents that it produces, but does not create linearized PDF files, as this would increase formatting time and memory requirements. An external program such as Adobe Acrobat or Ghostscript may be used for this purpose if necessary.

Compression may be disabled with the command-line option [`--no-compress`](command-line.md#cl-no-compress).

### PDF Encryption and Document Security

Prince can encrypt the produced PDF files with the [`--encrypt`](command-line.md#cl-encrypt) command-line option.

Prince supports the RC4 encryption algorithm, and the default key size is 128 bits. With the option [`--key-bits`](command-line.md#cl-key-bits) a different key size can be chosen - the options are 40 bits, or 128 bits. Also the JavaScript methods [`PDF.encrypt`](js-support.md#window.PDF.encrypt) and [`PDF.keyBits`](js-support.md#window.PDF.keyBits) can be used for the same purpose.

The command-line options [`--user-password`](command-line.md#cl-user-password) and [`--owner-password`](command-line.md#cl-owner-password) set respectively the PDF user password and the PDF owner password.  Please note that passwords may be of maximum 32 characters from the Latin-1 encoding only.

The PDF user password, also known as Document Open Password, prevents opening of a PDF file by unauthorized users by prompting for the password.  The owner password, also known as Permissions Password, is used to configure document restrictions: Prince offers a range of command-line options to disallow printing ([`--disallow-print`](command-line.md#cl-disallow-print)), copying ([`--disallow-copy`](command-line.md#cl-disallow-copy)), annotating ([`--disallow-annotate`](command-line.md#cl-disallow-annotate)) and modifying ([`--disallow-modify`](command-line.md#cl-disallow-modify)) the PDF output.

However, the strict setting to prevent copying also impacts accessibility by screan readers.  Prince offers a command-line option to enable text access only for screen reader devices for the visually impaired ([`--allow-copy-for-accessibility`](command-line.md#cl-allow-copy-for-accessibility)), to be used as an exception for `--disallow-copy`.

The command-line option [`--allow-assembly`](command-line.md#cl-allow-assembly) can be used together with `--disallow-modify` - while preventing modification of the document itself, it allows for the document to be inserted into another document or other pages to be added.

### PDF Font Embedding and Subsetting

Prince embeds fonts in its PDF output to ensure accurate viewing and printing on any system. Typically, only the necessary parts of a font will be embedded - font subsetting is enabled by default.

Font subsetting can be disabled with the command-line option [`--no-subset-fonts`](command-line.md#cl-no-subset-fonts) or with the JavaScript function [`PDF.subsetFonts`](js-support.md#window.PDF.subsetFonts): in that case, Prince will embed the entire font in the PDF file, which is convenient if people are planning on editing the PDF file later, and may need to add glyphs that were not present in the original PDF.

Font subsetting is disabled automatically for individual fonts that do not grant permission to subset, or if Prince cannot subset them for some other reason.

Font embedding can be disabled if necessary, for example if Prince is being used to create PDF files in a controlled environment with known fonts where space is at a premium. The command-line option [`--no-embed-fonts`](command-line.md#cl-no-embed-fonts) is used for this purpose.

### PDF Attachments

Prince supports adding files to PDF documents as attachments - but please note that not all PDF profiles allow for attachments (see [PDF Versions and Profiles](#pdf-versions-and-profiles) for details).

The main mechanisms for doing so are the JavaScript function [`PDF.attachFile`](js-support.md#window.PDF.attachFile) and the command-line option [`--attach`](command-line.md#cl-attach). Additionally, the job description JSON format, used by the [Prince Control Protocol](server-integration.md#prince-control-protocol), can be used to provid an attachment "inline" through the Java/C\# APIs (see [Prince Wrappers](server-integration.md#wrappers)) instead of as a separate file on the filesystem. See [Prince Control Protocol](server-integration.md#prince-control-protocol) for details on the job description JSON format.


### PDF Bookmarks

Prince can create PDF bookmarks that link to document content.

#### Bookmark levels

PDF bookmarks have numeric levels that place them in a bookmark hierarchy. For example, a bookmark at level 2 can contain nested bookmarks at level 3, or any higher level. The level of a bookmark is controlled using the [`-prince-bookmark-level`](css-props.md#prop-prince-bookmark-level) property, shown here being applied to the XHTML heading elements:

```
    h1 { -prince-bookmark-level: 1 }
    h2 { -prince-bookmark-level: 2 }
    h3 { -prince-bookmark-level: 3 }
    h4 { -prince-bookmark-level: 4 }
    h5 { -prince-bookmark-level: 5 }
    h6 { -prince-bookmark-level: 6 }
```
The default value for this property is `none`, which inhibits the creation of a bookmark for the element.

It is possible to control the state of the bookmark, i.e. whether the bookmark is in an `open` or `closed` state, with the [`-prince-bookmark-state`](css-props.md#prop-prince-bookmark-state) property. In this way you can close each chapter and hide the subsections for documents that are very long, or you can choose to have a deep bookmark tree.

#### Bookmark labels

PDF bookmarks have textual labels that by default are copied from the text content of the element that generated the bookmark. The text of this label may be controlled using the [`-prince-bookmark-label`](css-props.md#prop-prince-bookmark-label) property, shown here being applied to a chapter element that has a title attribute:

CSS

```
    chapter {
        -prince-bookmark-level: 1;
        -prince-bookmark-label: attr(title)
    }
```
This property can take any content value, including literal text strings and counters. See [Generated Content Functions](gen-content.md#generated-content-functions).

#### Bookmark targets

PDF bookmarks are links that display a particular part of the document when activated. By default, a bookmark will link to the element that generated the bookmark, which is sensible behavior for bookmarks generated from headings or chapter elements. It is also possible to change the target of a bookmark using the [`-prince-bookmark-target`](css-props.md#prop-prince-bookmark-target) property, which takes a URL directly or an attribute containing a URL:

CSS

```
    bookmark { -prince-bookmark-target: url(#intro) }
    bookmark { -prince-bookmark-target: attr(href) }
```
The default value for this property is `self`, referring to the element that generated the bookmark.


### PDF Tags

Tagged PDF files have special handling mechanisms for specific tag types. When enabling tagged PDF files with the command line option [`--tagged-pdf`](command-line.md#cl-tagged-pdf) Prince automatically assigns default values to certain HTML elements, which can be seen in the default `html.css` style sheet (see [Installation Layout](installing.md#installation-layout)).

However, in specific cases it is advisable to fine-tune the PDF tags with the [`-prince-pdf-tag-type`](css-props.md#prop-prince-pdf-tag-type) property. In Prince, it is possible to assign PDF tag types to elements in the document through the [`-prince-pdf-tag-type`](css-props.md#prop-prince-pdf-tag-type) property, in order to create XML vocabularies in the PDF.

CSS

```
    ul.toc {
      -prince-pdf-tag-type: TOC;
    }
    .toc li {
      -prince-pdf-tag-type: TOCI;
    }
```
HTML

```html
    <ul class="toc">
      <li>First Chapter</li>
      <li>Second Chapter</li>
    </ul>
```
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
-   Table
-   BibEntry
-   Code
-   Figure
-   Formula
-   Artifact

The default value `auto` leaves the tag assignment to Prince.

The special value `none` can be used to make specific elements (such as e.g. wrapper span or block elements) transparent in a tagged PDF structure tree.

Bruce Lawson has written an interesting introduction on how to make [accessible tagged PDFs with Prince](https://medium.com/@bruce_39084/making-accessible-tagged-pdfs-with-prince-ad7fd7a48711) - all you need to know about PDF tags and Prince!


### PDF Metadata

Prince creates PDF metadata from the content of the XHTML metadata elements. The content of the `<title>` element is used for the document title, while the `<meta>` element can be used to specify the document author, subject, keywords, date, and generator application:

XML

```xml
    <html>
    <head>
    <title>Cooking with Cabbage</title>
    <meta name="author" content="John Smith"/>
    <meta name="subject" content="An interesting book about food"/>
    <meta name="keywords" content="cabbage, cooking, eating"/>
    <meta name="date" content="2009-04-01"/>
    <meta name="generator" content="MyReportingApp"/>
    </head>
```
#### XMP Metadata

Additionally, XMP metadata can be added to a PDF file from an XMP file. This file needs to be passed to Prince either via the [`--pdf-xmp`](command-line.md#cl-pdf-xmp) command-line option, the [-prince-pdf-xmp](css-props.md#prop-prince-pdf-xmp) CSS property, or it can be specified in JavaScript with the [`PDF.xmp()`](js-support.md#window.PDF.xmp) function.

The [`PDF.xmp()`](js-support.md#window.PDF.xmp) JavaScript function, the [-prince-pdf-xmp](css-props.md#prop-prince-pdf-xmp) CSS property and the [`--pdf-xmp`](command-line.md#cl-pdf-xmp) command-line option require either a URL pointing to an XMP file, or an encoded `data:` URL.

Prince includes data from the `<x:xmpmeta>` element and its contents. The `xpacket` processing instructions are ignored, as Prince generates those itself when it produces the PDF file.
