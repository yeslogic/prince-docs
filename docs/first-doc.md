---
title: Your First Document
---

In this section we will process a very simple document. We've chosen a document that fits HTML's heading and paragraph structure naturally: a lab report. The lab report will have a title, an author and date, several headings (Aim, Hypothesis, Method, Results and Conclusion). It does not include a table of results, graphics or diagrams: it is a very simple lab report.

The lab report
--------------

The report itself is very basic, the HTML source is shown below. You can save the HTML to a file named lab\_report.html or download it [here](/doc/assets/samples/lab_report.html).

```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <title>Lab Report</title>
    </head>
    <body>

    <h1>Lab Report</h1>
    <h2 class="subtitle">John Doe</h2>

    <h2>Aim</h2>

    <p>
    This simple document aims to show just how easy it is to generate PDFs from
    HTML+CSS using Prince.  The document mostly uses Prince's built in styles
    for HTML, but it also applies some custom styles.  The custom styles: center
    the title and subtitle, choose fonts and specify the style for the hello
    world exclamation below.
    </p>

    <h2>Hypothesis</h2>

    <p>
    Our hypothesis is that generating PDFs using Prince is easy.
    By using a simple document containing only
    <code>h1</code>,
    <code>h2</code>,
    <code>h3</code>,
    <code>p</code>,
    <code>code</code>,
    <code>pre</code>,
    <code>ul</code> and
    <code>li</code>
    tags and a simple stylesheet we will generate a PDF that looks good.
    </p>

    <h2>Method</h2>
    <h3>Apparatus</h3>

    <ul>
      <li>Prince</li>
      <li>This document</li>
      <li>A stylesheet</li>
    </ul>

    <h3>Steps</h3>

    Execute this on your computer's command line:

    <code><pre>
    $ prince style.css lab_report.html
    </pre></code>

    <h2>Results</h2>

    <p id="hello">Hello World!</p>

    <h2>Conclusions</h2>

    <p>
    If you're currently looking at a PDF file then this works.
    </p>

    <p>
    The resulting file includes a title and subtitle (centered), a list of the
    apparatus needed.  The resulting file uses a sensible-looking a sans-serif
    font except for the code tags which use a monospace font and the Hello World
    exclamation which has serifs.
    </p>

    </body>
    </html>
```
The report is written using very familiar HTML5 tags. Headings (`h1`, `h2` and `h3`), paragraphs (`p`) and lists (`ul`, `li`) are used for the report's structure, the `code` tag is used to identify code and `pre` is used to identify pre-formatted text.

All user agents, including Prince, associate default styles with all of these tags. Without any explicit styles Prince will format this document in a reasonable and familiar way, similar to most web browsers. The major difference between Prince and a web browser is that Prince needs to create discrete pages, a web browser will format the document as a continuous flow. See [Paged Media](paged.md#paged) for more information.

Processing the document
-----------------------

Process the document using the command line `prince` command:

<p id="fig.lab-report.unstyled">Unstyled lab report</p>

![The unstyled lab report](assets/samples/lab_report-1.bw.png)
The unstyled lab report. Download the PDF [here](assets/samples/lab_report.pdf).


    $ prince lab_report.html

This will create a `lab_report.pdf` file in the current directory. If it did not, the [Troubleshooting](help-install.md#troubleshooting) section may be useful. When you open the document in a PDF viewer you should see something like [Unstyled lab report](#fig.lab-report.unstyled). Prince has applied a default stylesheet to the document. A different default stylesheet is used depending upon the document's type (HTML or Docbook XML) see [XML Input](prince-input.md#xml-input). The default stylesheet may be overridden by other stylesheets, more on that in [Applying Style Sheets in Prince](prince-input.md#applying-style-sheets-in-prince).

<p id="fig.gui01">Prince GUI</p>

![The Prince GUI](assets/images/gui_02.png)
The Prince GUI. Note that in this image both a HTML and a CSS file had been selected.

Prince's command line interface supports many options (see [Command-line Reference](command-line.md)) and can be called from scripts and other software. However some users may not be comfortable with the command line interface. On Windows, Prince provides a more familiar GUI interface, which can be started by choosing Prince from the start menu. [Prince GUI](#fig.gui01) shows the Prince GUI, click "Add File(s)" to choose your HTML file (`lab_report.html`) then click the large "Convert" button to convert it. Prince will generate a PDF file and place it in the directory with your HTML file.

Styling the document
--------------------

We can now make the report look better by adding our own styles. It is good practice to keep style information separate from the document itself. This makes it easy to modify or replace the styles later. The style information is kept in one or more Cascading Style Sheets (CSS) files.

Let's start by creating and opening a new file named `lab_report.css`, First we can specify a sans-serif font for the document:

```
    body {
        font-family: sans-serif;
    }
```
The default is a font with serifs, a sans-serif font is easier to read on a computer screen while a serif font is easier to read when printed out. See [Text formatting](styling.md#text-formatting) and the [`font-family`](css-props.md#prop-font-family) property.

Next, let's center the title and subtitle and decrease the font size of the subtitle:

<p id="fig.lab-report-styled">Styled lab report</p>

![The styled lab report](assets/samples/lab_report-styled-1.colour.png)
The styled lab report, download the [here](assets/samples/lab_report-styled.pdf).

```
    h1, h2.subtitle {
        text-align: center;
    }

    h2.subtitle {
        font-size: 14pt;
    }
```
Note that we use the `.class` syntax to style only the subtitle, which is a `h2` with the subtitle class, without affecting the other `h2` elements in the document. See the section on [CSS Selectors](css-selectors.md) for more information. Information about alignment (such as centered text) can be found in the [Paragraph formatting](styling.md#paragraph-formatting) section.

Finally we will make the "Hello World!" paragraph stand out. This paragraph is identified by an `id` attribute so we can use the `#id` syntax in the CSS selector.

```
    #hello {
        color: red;
        text-align: center;
        font-size: large;
        font-style: italic;
        font-family: serif;
    }
```
Okay, that's getting unnecessary, however we can see just how easy it is to apply styles to our document. You can download the complete CSS file here: [`lab_report.css`](samples/lab_report.css).

There are many ways to apply a stylesheet to a document, for this tutorial we will show only three. For information about the ways that styles can be applied and style precedence see [Applying Style Sheets in Prince](prince-input.md#applying-style-sheets-in-prince).

Using the `-s` command line option:  

    $ prince -s lab_report.css lab_report.html

Using the GUI  
Press the "Add CSS" button on the right of the Prince GUI and choose your CSS file ([Prince GUI](#fig.gui01)). You will need to click "Convert" again for these changes to take effect.

By creating a link from the HTML `link` tag.  
Place the tag within the `head` tag of the document. For example:

```html
    <!DOCTYPE html>
    <html>
    <head>
    <title>Lab Report</title>
    <link rel="stylesheet" href="lab_report.css" />
    </head>
    <body>
    ...
```
You will need to re-run Prince for these changes to take effect.

After applying the style as above, Prince should generate something similar to [Styled lab report](#fig.lab-report-styled). You can download the generated PDF file here: [`lab_report-styled.pdf`](assets/samples/lab_report-styled.pdf).

This sample document and many others are available in our [samples repository](https://github.com/yeslogic/prince-samples). You are encouraged to use samples from the repository and contribute your own.

You are now ready to proceed to the [User Guide](intro-userguide.md) to learn about all the features - and to make the best out of Prince!

