Frequently Asked Questions
--------------------------

Why do I see garbled characters on my page? <a href="#faq-garbled-chars" class="self-link"></a>

This usually happens when Prince is not able to find a suitable font, or might be using the wrong font. Try installing a font that supports your script, or try using a different font in your stylesheet. See also: and .

Why is all the content displayed on one page, while I was expecting it to take several pages? <a href="#faq-one-page" class="self-link"></a>

Typically content displays on only one page, even though it should be much longer, because it is wrapped up:

-   in an absolutely positioned element, or
-   in a floated block element, or
-   in a single inline-block element, or
-   in an element with fixed height, or
-   in an element with `: hidden`,

which Prince cannot split over several pages. It can happen to the whole content in a document, or to just a section of it. This issue does not affect browsers, because they don't paginate. See also: .

How can I resize my web page to fit it on the printed page? <a href="#faq-resize-page" class="self-link"></a>

Prince usually takes care of reformatting a document to fit on a printed page. However, there are cases where it doesn't work as expected. Wide content can be made fit by , or by applying the CSS property ``, which scales down all content equally. Alternatively, the command-line option [--css-dpi](doc-latest/doc-refs.html#cl-css-dpi) changes the DPI of the "px" units in CSS, which defaults to 96dpi.

We do not recommend people making a habit of using this, and instead advise to design a layout specifically appropriate for the paper being used. Or at least using relative size units.

Why does my PDF file not show the transparent background? <a href="#faq-no-trans" class="self-link"></a>

Different PDF profiles have different requirements - you might be generating a PDF with a version or profile which does not support transparency. The only PDF profile to support transparency is the PDF/X-4 profile. See also: and .

How can I create tooltips in the PDF file? <a href="#faq-tooltips" class="self-link"></a>

PDF tooltips can be enabled with the CSS property `` like this:

``
    *[title] { prince-tooltip: attr(title) }

However, please note that tooltips are not a standard PDF feature, and they may only work in Adobe Reader and Adobe Acrobat and may not be visible in other PDF viewers, such as web browsers.

How can I make an element, such as an image or some text, appear on each page of the PDF document? <a href="#faq-everypage" class="self-link"></a>

For this purpose you can use the [`@page`](doc-latest/doc-refs.html#at-page) page regions. See: and .

How can I apply CSS styles in page regions? <a href="#faq-page-regions" class="self-link"></a>

You cannot add style to generated content in the page regions, except for some inline style properties, such as and . A possibility for using more complex styling is to use the `element()` or `flow()` CSS functions. See , and - however, this latter approach will remove the element from the document itself.

How can I start counting pages on a left page and display a right page as second page? <a href="#faq-counting-pages" class="self-link"></a>

You can specify `:left | right` on the root element of the document.

CSS

``
    body[start=even] {
      break-before:left;
    }

HTML

``
    <body start="even" startpage="28">

Does Prince support JavaScript? <a href="#faq-js" class="self-link"></a>

Yes, Prince supports JavaScript - remember to enable it with the [`--javascript`](http://www.princexml.com/doc/doc-refs/#cl-javascript) command-line option (see ). However, there are some limitations: Prince produces printed documents, and interactive events make no sense in this context. Also, modifications of the document after layout has finished are not possible. See: .

Can I modify the document after layout has finished? <a href="#faq-jsafterkayout" class="self-link"></a>

No, unfortunately this is part of the inherent limitations of printed media - see . However, JavaScript can run after layout is done, and the output can be used for a second run of Prince - see .

Can I include content of external files in my document? <a href="#faq-xinclude" class="self-link"></a>

Yes. In XML, this is done by means of . Note that XInclude is disabled by default, and can be enabled with the [`--xinclude`](doc-latest/doc-refs.html#cl-xinclude) command-line option. Also note that XInclude only applies to XML files.

To apply it to HTML files, the XML input format needs to be specified with the [`--input`](doc-latest/doc-refs.html#cl-input) command-line option.

Another option in HTML is to use the `iframe` element:

``
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
