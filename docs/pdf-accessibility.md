---
title: PDF Accessibility
---

PDF Accessibility
-----------------

Producing accessible documents is very important when documents are to be shared with a wider audience. There are several criteria that need to be addressed, summed up in the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/), often abbreviated to WCAG, a set of guidelines for improving web accessibility.

The relevant criteria for producing accessible PDF can also be found in a separate document, the [PDF Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/pdf.html).

A first step would be to produce files with one of the PDF profiles addressing accessibility, namely the PDF/UA-1 profile or the combined PDF/A-1a+PDF/UA-1 or PDF/A-3a+PDF/UA-1 profiles, by specifying the [`--pdf-profile`](doc-latest/doc-refs.html#cl-pdf-profile) command line option. See for details.

The next step would be to specifically check compliance of the document's content with the requirements. A number of resoures or tools can be helpful in this step:

-   [Free PDF Accessibility Checker](https://www.access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html)
-   [VIP-PDF-Reader](https://www.access-for-all.ch/en/pdf-lab/500-vip-pdf-reader-e.html)
-   [PDF Checker of the European Internet Inclusion Initiative](http://checkers.eiii.eu/en/pdfcheck/)

Prince helps in creating accessible documents. Note, however, that Prince does not create WCAG-compliant documents by itself - care has to be taken, and the HTML source has to be coded in specific ways to address all requirements in order to create WCAG-compliant PDF documents.

Bruce Lawson has written an interesting introduction on how to make [accessible tagged PDFs with Prince](https://medium.com/@bruce_39084/making-accessible-tagged-pdfs-with-prince-ad7fd7a48711) - all you need to know about PDF tags and Prince! Last but not least, there is a nice [Resources](https://taggedpdf.com/resources/) page on tagged and accessible PDFs.
