---
title: Page Numbering
---

Page Numbering
--------------

You need  
[Paged Media](paged.html#paged)

-   [Selecting pages](paged.html#page-rules)

[Generated Content](gen-content.html#gen-content)

-   [Counters and Numbering](gen-content.html#counters)
    -   `content: counter(page)`

Paged media is organized in pages - and numbering the pages is a common task: generated content does this for you automatically. The easiest way of doing so is numbering them sequentially from the first to the last page.

To use a counter, it usually first needs to be initialized with the `counter-reset` property, which can be applied to any element and initializes one or more counters to the specified values, or to zero if no value is specified. Once initialized, the counter will be displayed with the `counter()` function in the `content` property.

Page counters work a bit more simple and usually don't need to be explicitly initialized or incremented.

``
    @page {
      @bottom {
        content: counter(page);
      }
    }

However, if you want to restart the numbering after the Preface of your book, you need to name the pages (see [Named pages](paged.html#named-pages)) and the counter needs to be re-initialized with the main content. See also the example [Restarting page numbering](paged.html#ex-restart-page-numbers).

``
    .preface {
      page: preface;
      counter-reset: page 1;
    }
    @page preface {
      @bottom {
        content: counter(page, lower-roman);
      }
    }

    .main {
      page: main;
      counter-reset: page 1;
    }
    @page main {
      @bottom {
        content: counter(page);
      }
    }

The page numbers can be referenced with the `target-counter()` function. This provides a convenient mechanism when you want to print out a page reference that on an interactive medium, such as can be seen in a web browser, might be expressed with a hyperlink.

CSS

``
    a[href]::after {
        content: " [See page " target-counter(attr(href), page) "]";
    }

This will add a cross-reference after every link with the correct page number determined automatically. For example: \[See page 17\].

If you are referencing the pages in the Preface, marked with lower roman-style numbers, you need to re-specify the counter style for the target counter - the style is not automatically taken over.

CSS

``
    a[href|="#preface"]::after {
        content: " [See page " target-counter(attr(href), page, lower-roman) "]";
    }

In some documents, particularly those that are unbound such as office documents, it can be useful to show the total number of pages on each page. The total number of pages can be accessed by using the `pages` counter. This is a pre-defined counter that is fixed to the total number of pages in the document.

``
    @page {
      @bottom {
        content: "Page " counter(page) " of " counter(pages);
      }
    }

This rule will generate page footers such as "Page 1 of 89".

