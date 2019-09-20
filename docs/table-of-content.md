---
title: Table of Contents
---

Table of Contents
-----------------

You need  
[JavaScript in Printed Media](javascript.html#js-print)

[The "Two-Pass" Solution](two-pass.html#two-pass)

[Generated Content Functions](gen-content.html#gen-content-functions)

-   `content: target-counter()`
-   `content: leader()`

Prince offers several properties and functions to facilitate the creation of a Table of Contents.

Typically, a table of contents is generated for a document by collecting the headings of each chapter, each one provided with an `id` attribute, into a list or, if necessary, also into nested lists, by means of JavaScript or in some other way, in order to generate a navigation menu for the document.

Each list item contains a hyperlink to the heading's `id`. This list functions as a navigation menu when the document is viewed in a browser.

The transformation into a proper table of contents happens with CSS when Prince generates the PDF - the resulting document will be paged, and possibly be intended for printing. It means that the hyperlinks need to be integrated with an indication of the correct page on which the target is located.

This is achieved automatically with the `target-counter()` function in the `content` property, using the `page` counter. The URL is being automatically fetched from the `href` attribute of the hyperlink element `<a>`.


    #toc a:after {
      content: target-counter(attr(href), page);
    }

The page numbers are best styled right-aligned, while the link texts are left-aligned. An easy way to achieve this is with the `leader()` function: it defines a literal string, which expands to fill the available space on the line like justified text, by repeating the string as many times as necessary. The complete CSS entry for a simple table of contents entry thus looks like this:


    #toc a:after {
      content: leader('.') target-counter(attr(href), page);
    }

### Simple Table of Contents

Our [example document](http://css4.pub/2018/toc/index.html) generates at Table of Contents (TOC) by way of JavaScript. You can easily test it by running Prince from the command line:


    $ prince --javascript http://css4.pub/2018/toc -o toc.pdf

A [second example document](http://css4.pub/2017/musick/musick.html) generates at ToC by way of JavaScript and, even more impressively, the script also prints out an index which is added to the end of the document, to be used when running Prince a second time (see [The "Two-Pass" Solution](two-pass.html#two-pass)). Notice how subsequent page numbers in the index are folded into a range. To produce this document, try running these commands from a Linux command-line:


    $ wget http://css4.pub/2017/musick/musick.html -o foo.html;
    $ prince --javascript foo.html >>foo.html;
    $ prince --javascript foo.html -o musick.pdf;

You can view the resulting PDF [here](http://css4.pub/2017/musick/musick.pdf).

### Multifile Table of Contents

For longer books, it makes sense to split chapters into separate files. Generating a Table of Contents across all files is tricky in JavaScript since scripts only see one file at a time. In Prince, you can work around this limitation with a two-pass solution (see [The "Two-Pass" Solution](two-pass.html#two-pass)) where the first pass collects items for the ToC, and the second pass generates the PDF with the ToC.

To try this for yourself, first fetch these five sample files into your own file system, e.g. by running:


    $ wget http://css4.pub/2018/multifile-toc/toc.js;
    $ wget http://css4.pub/2018/multifile-toc/toc.html;
    $ wget http://css4.pub/2018/multifile-toc/ch1.html;
    $ wget http://css4.pub/2018/multifile-toc/ch2.html;
    $ wget http://css4.pub/2018/multifile-toc/style.css;

Then, run Prince twice:


    $ prince --javascript --script=toc.js ch1.html ch2.html -o book.pdf >> toc.html;
    $ prince toc.html ch1.html ch2.html -o book.pdf;

You can view the resulting PDF [here](http://css4.pub/2018/multifile-toc/book.pdf).

