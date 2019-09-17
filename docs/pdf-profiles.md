---
title: PDF Versions and Profiles
---

PDF Versions and Profiles
-------------------------

The PDF files produced by Prince conform to several different PDF versions, up to PDF 1.7, depending on the chosen PDF Profile and the enabled PDF features.

Prince supports tagged PDF files and optional PDF profiles, which can be selected using the [`--pdf-profile`](doc-refs.html#cl-pdf-profile) option on the [command-line interface](doc-refs.html#command-line), or the `setProfile` method if using a [server wrapper](server-integration.html#wrappers), or the [`PDF.profile`](doc-refs.html#window.PDF.profile) function in JavaScript.

The available profiles, and the PDF version they are based on, are:

| PDF Profile   | PDF version |
|---------------|-------------|
| PDF/A-1a      | PDF 1.4     |
| PDF/A-1b      | PDF 1.4     |
| PDF/A-3a      | PDF 1.7     |
| PDF/A-3b      | PDF 1.7     |
| PDF/UA-1      | PDF 1.7     |
| PDF/X-1a:2001 | PDF 1.3     |
| PDF/X-1a:2003 | PDF 1.4     |
| PDF/X-3:2002  | PDF 1.3     |
| PDF/X-3:2003  | PDF 1.4     |
| PDF/X-4       | PDF 1.6     |

Prince supports files with the combined PDF/A-1a+PDF/UA-1 and PDF/A-3a+PDF/UA-1 profiles.

Prince also uses:

PDF 1.5  
-   if object streams are enabled, or
-   if tagged PDF is enabled, or
-   if 16-bit images are included in the PDF;

PDF 1.6  
-   if the `prince-pdf-print-scaling` property is set, or
-   if the `prince-pdf-page-mode` property has the value `show-attachments`;

PDF 1.7  
-   if the `prince-pdf-paper-tray` property is set, or
-   if the `prince-pdf-duplex` property is set.

To enable tagged PDF without using one of the profiles that already imply it, the command-line option [`--tagged-pdf`](doc-refs.html#cl-tagged-pdf) can be used.

Prince supports PDF object streams to reduce the size of tagged PDFs. This can be disabled by the command-line argument [`--no-object-streams`](doc-refs.html#cl-no-object-streams) or from JavaScript via the [`PDF.objectStreams`](doc-refs.html#window.PDF.objectStreams) boolean property.

Object streams are enabled by default, therefore Prince produces files with PDF version 1.5 - unless a profile that requires older PDF versions will automatically disable object streams.

Choosing one profile over another can help producing a PDF file which has the right properties for its intended destination. Each PDF profile places restrictions on the features allowed in a PDF file in order to achieve its aims. Please also see the [Color Management](color-management.html#color-management) section for the impact the PDF profiles have on color management. Prince produces error messages when the restrictions are not respected.

``
    $ prince foo.html --encrypt --no-embed-fonts --pdf-profile="PDF/A-1b"
    prince: error: PDF/A-1b does not support encryption
    prince: error: PDF/A-1b requires fonts to be embedded

Generally speaking, PDF/A profiles were created with the goal of long-term preservation of the documents (**PDF** for **A**rchiving), while PDF/X profiles were created to address publisher's needs in the graphic arts industry (**PDF** for e**X**change). The PDF/UA profile is a standard for producing accessible electronic documents (**PDF** for **U**niversal **A**ccessibility).

### PDF/A

-   PDF/A tries to maximize device independence
-   Audio and video content is forbidden
-   All fonts are embedded
-   Colorspaces should be specified in a device-independent manner: all color data must be Grayscale, CMYK or named Spot Colors and there must be an output intent. Transparency is not allowed. See also [Color Management and PDF Profiles](color-management.html#pdf-colman)
-   Encryption is forbidden

### PDF/UA

-   Content must be tagged in a logical order
-   Tags must correctly represent the semantic structure (headings, lists, etc.)
-   Content not accessible to assistive technology must be avoided
-   Meaningful images and graphics must contain alternative text descriptions
-   Security settings must allow assistive technologies to access the content
-   All fonts must be embedded
-   Text must be mapped to Unicode

### PDF/X

-   PDF/X is intended to support "blind exchange", i.e. no exchange of technical information is needed to render the printed page as intended
-   Audio and video content is forbidden
-   All fonts are embedded
-   Colorspaces must be specified in a device-independent manner - an output intent is required (see the [`--pdf-output-intent`](doc-refs.html#cl-pdf-output-intent) command-line option in the [PDF Output Options](doc-refs.html#cmd-pdf) section)
-   See the [Color Management and PDF Profiles](color-management.html#pdf-colman) section for the color profiles available in each PDF/X version. Transparency is not allowed, with the exception of PDF/X-4
-   Encryption is forbidden

