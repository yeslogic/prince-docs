---
title: Frequently Asked Questions
---

Frequently Asked Questions
--------------------------

Why do I see garbled characters on my page? <a href="#faq-garbled-chars" class="self-link"></a>

This usually happens when Prince is not able to find a suitable font, or might be using the wrong font. Try installing a font that supports your script, or try using a different font in your stylesheet. See also: [Fonts](fonts.md#fonts) and [Redefining the generic font families](redefining-font-families.md#redefining-font-families).

Why do I get strangely misspelled words when I copy text from the PDF? <a href="#faq-misspelled-words" class="self-link"></a>

Prince creates artificial bold text by double printing with an offset when it does not find a bold font. To solve the issue, install the bold font, or try running Prince with the command-line option [`--no-artificial-fonts`](command-line.md#cl-css-dpi). See also [Defining a font family](fonts.md#font-family).

Why is all the content displayed on one page, while I was expecting it to take several pages? <a href="#faq-one-page" class="self-link"></a>

Typically content displays on only one page, even though it should be much longer, because it is wrapped up:

-   in an absolutely positioned element, or
-   in a floated block element, or
-   in a single inline-block element, or
-   in an element with fixed height, or
-   in an element with `overflow: hidden`,

which Prince cannot split over several pages. It can happen to the whole content in a document, or to just a section of it. This issue does not affect browsers, because they don't paginate. See also: [Paged Media](paged.md#paged).

How can I resize my web page to fit it on the printed page? <a href="#faq-resize-page" class="self-link"></a>

Prince usually takes care of reformatting a document to fit on a printed page. However, there are cases where it doesn't work as expected. Wide content can be made fit by [Rotating content](rotating.md#rotating), or by applying the CSS property `prince-shrink-to-fit`, which scales down all content equally. Alternatively, the command-line option [--css-dpi](command-line.md#cl-css-dpi) changes the DPI of the "px" units in CSS, which defaults to 96dpi.

We do not recommend people making a habit of using this, and instead advise to design a layout specifically appropriate for the paper being used. Or at least using relative size units.

Why does my PDF file not show the transparent background? <a href="#faq-no-trans" class="self-link"></a>

Different PDF profiles have different requirements - you might be generating a PDF with a version or profile which does not support transparency. The only PDF profile to support transparency is the PDF/X-4 profile. See also: [PDF Versions and Profiles](pdf-profiles.md#pdf-profiles) and [Color Management and PDF Profiles](color-management.md#pdf-colman).

How can I create tooltips in the PDF file? <a href="#faq-tooltips" class="self-link"></a>

PDF tooltips can be enabled with the CSS property `prince-tooltip` like this:


    *[title] { prince-tooltip: attr(title) }

However, please note that tooltips are not a standard PDF feature, and they may only work in Adobe Reader and Adobe Acrobat and may not be visible in other PDF viewers, such as web browsers.

How can I make an element, such as an image or some text, appear on each page of the PDF document? <a href="#faq-everypage" class="self-link"></a>

For this purpose you can use the [`@page`](at-rules.md#at-page) page regions. See: [Page regions](paged.md#page-regions) and [Watermarks](watermarks.md#watermarks).

How can I apply CSS styles in page regions? <a href="#faq-page-regions" class="self-link"></a>

You cannot add style to generated content in the page regions, except for some inline style properties, such as [color](doc-refs.md#prop-color) and [font](doc-refs.md#prop-font). A possibility for using more complex styling is to use the `element()` or `flow()` CSS functions. See [Generated content in page regions](paged.md#page-gen-content), [Copying content from the document](paged.md#content-copying-text) and [Taking elements from the document](paged.md#content-taking-elements) - however, this latter approach will remove the element from the document itself.

How can I start counting pages on a left page and display a right page as second page? <a href="#faq-counting-pages" class="self-link"></a>

You can specify `break-before:left | right` on the root element of the document.

CSS


    body[start=even] {
      break-before:left;
    }

HTML


    <body start="even" startpage="28">

Does Prince support JavaScript? <a href="#faq-js" class="self-link"></a>

Yes, Prince supports JavaScript - remember to enable it with the [`--javascript`](command-line.md#cl-javascript) command-line option (see [Applying JavaScript in Prince](apply-javascript.md#applying-javascript)). However, there are some limitations: Prince produces printed documents, and interactive events make no sense in this context. Also, modifications of the document after layout has finished are not possible. See: [Scripting](javascript.md#javascript).

Can I modify the document after layout has finished? <a href="#faq-jsafterkayout" class="self-link"></a>

No, unfortunately this is part of the inherent limitations of printed media - see [JavaScript in Printed Media](javascript.md#js-print). However, JavaScript can run after layout is done, and the output can be used for a second run of Prince - see [The "Two-Pass" Solution](two-pass.md#two-pass).

Can I include content of external files in my document? <a href="#faq-xinclude" class="self-link"></a>

Yes. In XML, this is done by means of [XML Inclusions (XInclude)](xml.md#xinclude). Note that XInclude is disabled by default, and can be enabled with the [`--xinclude`](command-line.md#cl-xinclude) command-line option. Also note that XInclude only applies to XML files.

To apply it to HTML files, the XML input format needs to be specified with the [`--input`](command-line.md#cl-input) command-line option.

Another option in HTML is to use the `iframe` element:


    <style>
    @page {
      @bottom {
        border: solid red thin;
        content: flow(footer)
      }
    }
    .footer {
      flow: static(footer)
    }
    </style>
    <iframe class="footer" src="http://www.google.com"></iframe>
    <p>Normal content</p>

However there may be some subtleties required to get the correct size and styling of content within iframe elements.

Yet another option would be to use JavaScript to issue an XMLHttpRequest, parse the text of the response with DOMParser, then extract the elements and copy them into the main document. However, it will be tricky to support nested styles this way.

