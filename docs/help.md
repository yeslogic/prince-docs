---
title: Help
---
<style>
.navbar__item:first-child {"{"}
    background-color: #7d146c !important;
    color: rgba(255, 255, 255, 0.8) !important;
{"}"}
.navbar__item:first-child:hover {"{"}
        background-color: #7d146c !important;
{"}"}
.navbar__item:nth-child(2) {"{"}
    background-color: #fff !important;
    color: #333 !important;
{"}"}
.navbar__item:nth-child(2):hover {"{"}
    background-color: #fff !important;
{"}"}
.navbar__item:hover {"{"}
    color: #22b573 !important;
{"}"}
@media only screen and (max-width: 1023px) {"{"}
    .navbar__item:first-child {"{"}
        background-color: #3b5668 !important;
    {"}"}
{"}"}
</style>

The Prince User Guide tries to be exhaustive in explaining how to use the application and its features. However, there might always be something not answered in the documentation, or something not working as expected. There are a couple of ways to get help to solve the problems:

-   The [Troubleshooting](#troubleshooting) section addresses possible common issues after installing and starting to use Prince;
-   The [Frequently Asked Questions](#frequently-asked-questions) section provides answers to the most frequently asked questions;
-   The [forum](//www.princexml.com/forum/) is an excellent place where to find an answer to an issue, or where to ask for help;
-   You can [contact us](//www.princexml.com/contact/) for support.


## Troubleshooting

We work hard to make Prince work on multiple platforms (Windows, Linux, etc) and with multiple configurations. However things don't always work correctly the first time. You're very welcome to [contact us](//www.princexml.com/contact/) for support or visit our [forum](//www.princexml.com/forum/). However if you are facing a common problem, you may be able to find an explanation and solution below.

### Output log

When running into trouble with Prince, the first thing you should do is to check for any errors. These can be found in the Prince output log.

When launching Prince from the command line, Prince will print any error or warning messages directly to the console, prefixed with `error:` or `warning:` messages. The level of verbosity, or a log file where to print all output, can be controlled with a few command-line [Logging Options](command-line.md#logging-options). A more advanced control of the output is given by the [Structured Log](server-integration.md#structured-log).

When using the Prince GUI, the output log is printed to the log window on the bottom left of the main GUI window.

### Image formats

Symptom  
```bash
    prince: ./picture.bmp: warning: Unknown image format
```
Explanation  
Prince supports the JPEG, PNG, TIFF, GIF, WebP and AVIF image formats, as well as SVG (see [Images](graphics.md#images)). If you try to format a document that includes images in a format that is not supported by Prince, such as BMP, you may see the above error message from Prince.

Solution  
The solution is to convert the image file into a format that is supported by Prince. We suggest PNG, which is a well-supported general purpose image format with lossless compression.

### The capture/replay system

Prince offers a convenient capture/replay system with the two command-line options [--capture](command-line.md#cl-capture) and [--replay](command-line.md#cl-replay) - the former saving a copy of all the information in a job to a specified directory, including the input document(s) and all of the resources referenced by them and on the command line (including remote HTTP resources), such as style sheets, images, JavaScript files, fonts, etc., conveniently allowing it to be replayed later for debugging purposes with the latter command-line option. The directory might contain sensitive information (as far as included in the PDF job), so we recommend only submitting them by email when requested to do so, instead of posting them on the forum.

### Running the debug script

For assisting in tracking down difficult platform bugs, the `princedebug` script is available on Linux and MacOS platforms. It is located in `/usr/lib/prince/bin` and runs Prince with the specified command-line arguments, dumping a considerable amount of debug information to two files in the `/tmp` directory, namely `prince.debug` and `prince.strace`.

<p className="warning">
These files contain information about the system and environment in which Prince was run, and about the job in question, so we recommend only submitting them by email when requested to do so, instead of posting them on the forum.
</p>

This script is not available on Windows.


## Frequently Asked Questions

<dl className="faq">
  <dt id="faq-garbled-chars"><p>Why do I see garbled characters on my page?
  <a className="self-link" href="#faq-garbled-chars" /></p></dt>
  <dd><p>This usually happens when Prince is not able to find a suitable font, or
  might be using the wrong font.  Try installing a font that supports your script,
  or try using a different font in your stylesheet.  See also: <a href="/doc/styling#fonts">Fonts</a>
  and <a href="/doc/styling#redefining-the-generic-font-families">Redefining the generic font families</a>.</p></dd>

  <dt><p id="faq-misspelled-words">Why do I get strangely misspelled words when I copy text from the PDF?
  <a className="self-link" href="#faq-misspelled-words" /></p></dt>
  <dd><p>Prince creates artificial bold text by double printing with an offset
  when it does not find a bold font.  To solve the issue, install the bold font,
  or try running Prince with the command-line option
  <a href="/doc/command-line#cl-no-artificial-fonts"><code>--no-artificial-fonts</code></a>.
  See also <a href="/doc/styling#defining-a-font-family">Defining a font family</a>.</p></dd>

  <dt><p id="faq-one-page">Why is all the content displayed on one page, while
  I was expecting it to take several pages?
  <a className="self-link" href="#faq-one-page" /></p></dt>
  <dd><p>Typically content displays on only one page, even though it should be
  much longer, because it is wrapped up:</p>
  <ul>
    <li>in an absolutely positioned element, or</li>
    <li>in a floated block element, or</li>
    <li>in a single inline-block element, or</li>
    <li>in an element with fixed height, or</li>
    <li>in an element with <code>overflow: hidden</code>,</li>
  </ul>
  <p>which Prince cannot split over several pages.  It can happen to the whole
  content in a document, or to just a section of it.  This issue does not affect
  browsers, because they don't paginate.  See also: <a href="/doc/paged">Paged Media</a>.</p></dd>

  <dt><p id="faq-resize-page">How can I resize my web page to fit it on the printed page?
  <a className="self-link" href="#faq-resize-page" /></p></dt>
  <dd><p>Prince usually takes care of reformatting a document to fit on a printed
  page.  However, there are cases where it doesn't work as expected.</p>
  <p><em>Wide</em> content can be made to fit by <a href="/doc/cookbook#rotating-content">Rotating content</a>,
  or by applying the CSS property <a href="/doc/css-props#prop-prince-shrink-to-fit"><code>-prince-shrink-to-fit</code></a>,
  which scales down all content equally.  Alternatively, the command-line option
  <a href="/doc/command-line#cl-css-dpi">--css-dpi</a> changes the DPI of
  the "px" units in CSS, which defaults to 96dpi.</p>
  <p className="note">We do not recommend people making a habit of using this, and
  instead advise to design a layout specifically appropriate for the paper being
  used.  Or at least using relative size units.</p>
  <p>Note that this however does not affect <em>tall</em> content - if you need elements too tall to fit on a page
  to be rescaled, there are other ways of achieving this: e.g. by limiting the <code>max-height</code>
  of an element - Prince supports <a href="/doc/css-length-units#viewport-length-units">Viewport Length Units</a>,
  and in a paged media context the viewport units refer to various aspects of the page and page area.</p>
  <p>Alternatively, <a href="/doc/styling#flex-layout">Flex Layout</a> can be used, or the content
  can be custom resized with <a href="/doc/javascript#the-box-tracking-api">The Box Tracking API</a>.</p>
  </dd>

  <dt><p id="faq-no-trans">Why does my PDF file not show the transparent
  background? <a className="self-link" href="#faq-no-trans" /></p></dt>
  <dd><p>Different PDF profiles have different requirements - you might be
  generating a PDF with a version or profile which does not support transparency.
  The only PDF profile to support transparency is the PDF/X-4 profile.  See also:
  <a href="/doc/prince-output#pdf-versions-and-profiles">PDF Versions and Profiles</a>
  and <a href="/doc/graphics#color-management-and-pdf-profiles">Color Management and
  PDF Profiles</a>.</p></dd>

  <dt><p id="faq-tooltips">How can I create tooltips in the PDF file?
  <a className="self-link" href="#faq-tooltips" /></p></dt>
  <dd><p>PDF tooltips can be enabled with the CSS property <code>-prince-tooltip</code> like this:</p>
	  <pre><code className="hljs css language-css">    *<span className="hljs-selector-attr">[title]</span> {"{"} <span className="hljs-attribute">-prince-tooltip</span>: <span className="hljs-built_in">attr</span>(title) {"}"}
</code></pre>
  <p>However, please note that tooltips are not a standard PDF feature, and they
  may only work in Adobe Reader and Adobe Acrobat and may not be visible in other
  PDF viewers, such as web browsers.</p></dd>

  <dt><p id="faq-everypage">How can I make an element, such as an image or some
  text, appear on each page of the PDF document?
  <a className="self-link" href="#faq-everypage" /></p></dt>
  <dd><p>For this purpose you can use the <a href="/doc/css-at-rules#at-page"><code>@page</code></a>
  page regions.  See: <a href="/doc/paged#page-regions">Page regions</a> and <a href="/doc/cookbook#watermarks">Watermarks</a>.</p></dd>

  <dt><p id="faq-page-regions">How can I apply CSS styles in page regions?
  <a className="self-link" href="#faq-page-regions" /></p></dt>
  <dd><p>You cannot add style to generated content in the page regions, except for
  some inline style properties, such as <code>color</code> and
  <code>font</code>.  A possibility for using more complex styling is to use
  the <code>element()</code> or <code>flow()</code> CSS functions.  See
  <a href="/doc/paged#generated-content-in-page-regions">Generated content in page regions</a>,
  <a href="/doc/paged#copying-content-from-the-document">Copying content from the document</a> and
  <a href="/doc/paged#taking-elements-from-the-document">Taking elements from the document</a> -
  however, this latter approach will remove the element from the document itself.</p></dd>

  <dt><p id="faq-counting-pages">How can I start counting pages on a left page and display a right page
  as second page? <a className="self-link" href="#faq-counting-pages" /></p></dt>
  <dd><p>You can specify <code>break-before:left | right</code>
  on the root element of the document.</p>
  <p className="label">CSS</p>
  <pre><code className="hljs">    <span className="hljs-selector-tag">body</span><span className="hljs-selector-attr">[start=even]</span> {"{"}
      <span className="hljs-attribute">break-before</span>:left;
    {"}"}
</code></pre>
    <p className="label">HTML</p>
    <pre><code className="hljs css language-html">    <span className="hljs-tag">&lt;<span className="hljs-name">body</span> <span className="hljs-attr">start</span>=<span className="hljs-string">"even"</span> <span className="hljs-attr">startpage</span>=<span className="hljs-string">"28"</span>&gt;</span>
</code></pre>
  </dd>

  <dt><p id="faq-js">Does Prince support JavaScript?
  <a className="self-link" href="#faq-js" /></p></dt>
  <dd><p>Yes, Prince supports JavaScript - remember to enable it with the
  <a href="/doc/command-line#cl-javascript"><code>--javascript</code></a>
  command-line option (see <a href="/doc/prince-input#applying-javascript-in-prince">Applying JavaScript in Prince</a>).  However,
  there are some limitations: Prince produces printed documents, and interactive
  events make no sense in this context.  Also, modifications of the document
  after layout has finished are not possible.  See: <a href="/doc/javascript">Scripting</a>.</p></dd>

  <dt><p id="faq-jsafterlayout">Can I modify the document after layout has
  finished? <a className="self-link" href="#faq-jsafterlayout" /></p></dt>
  <dd><p>Part of the inherent limitations of printed media is the impossibility to modify a document after it has been printed -
  see <a href="/doc/javascript#javascript-in-printed-media">JavaScript in Printed Media</a>.</p>
  <p>However, Prince offers the possibility to register the function <a href="/doc/js-support/#window.Prince.registerPostLayoutFunc"><code>Prince.registerPostLayoutFunc(func)</code></a> after layout has finished and before producing the PDF for possibly triggering a new layout - see <a href="/doc/javascript/#multi-pass-formatting">Multi-Pass formatting</a> for more details.</p></dd>

  <dt><p id="faq-webfonts">Why are Web fonts not loaded? <a className="self-link" href="#faq-webfonts"></a></p></dt>
  <dd><p>Prince supports and loads web fonts.  However, in some specific cases the web fonts served to Prince might
  differ from those served to browsers.  In such cases the command-line options <a href="/doc/command-line/#cl-user-agent"><code>--user-agent</code></a> may be used
  to spoof the user agent string sent to the servers, basically pretending to be a browser.</p>
  <p className="note">Please be aware that there can be unforseen side-effects when pretending to be somebody else on the web.</p></dd>

  <dt><p id="faq-xinclude">Can I include content of external files in my document?
  <a className="self-link" href="#faq-xinclude" /></p></dt>
  <dd><p>Yes.  In XML, this is done by means of <a href="/doc/prince-input#xml-inclusions-xinclude">XML Inclusions (XInclude)</a>.  Note
  that XInclude is disabled by default, and can be enabled with the
  <a href="/doc/command-line#cl-xinclude"><code>--xinclude</code></a>
  command-line option.  Also note that XInclude only applies to XML files.</p>
  <p>To apply it to HTML files, the XML input format needs to be specified with
  the <a href="/doc/command-line#cl-input"><code>--input</code></a>
  command-line option.</p>
  <p>Another option in HTML is to use the <code>iframe</code> element:</p>
  <pre><code className="hljs css language-html">    <span className="hljs-tag">&lt;<span className="hljs-name">style</span>&gt;</span>
    @page {"{"}
      @bottom {"{"}
        border: solid red thin;
        content: flow(footer)
      {"}"}
    {"}"}
    .footer {"{"}
      flow: static(footer)
    {"}"}
    <span className="hljs-tag">&lt;/<span className="hljs-name">style</span>&gt;</span>
    <span className="hljs-tag">&lt;<span className="hljs-name">iframe</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"footer"</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"https://www.google.com"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">iframe</span>&gt;</span>
    <span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Normal content<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>
</code></pre>
  <p>However there may be some subtleties required to get the correct size and
  styling of content within iframe elements.</p>
  <p>Yet another option would be to use JavaScript to issue an XMLHttpRequest,
  parse the text of the response with DOMParser, then extract the elements and
  copy them into the main document. However, it will be tricky to support
  nested styles this way.</p></dd>
</dl>

