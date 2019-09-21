---
title: Hyperlinks in Print
---

Hyperlinks in Print
-------------------

You need  
[Generated Content](gen-content.md#gen-content)

[Generated Content Functions](gen-content.md#gen-content-functions)

[Cross-references](gen-content.md#crossref)

-   [Using target-counter()](gen-content.md#counter-target)
-   [Using target-content()](gen-content.md#target-content)

Hyperlinks are a direct reference to another location, easy to follow on the interactive web page, or a PDF loaded in a viewer, by clicking on it. On the printed page, this mechanism obviously does not work.

Prince offers some CSS functions to help translating hyperlinks into print-friendly display, useful in different scenarios: `target-counter()`, `target-content()` and `attr()`, to be used with the `content` property. (See also [Generated Content Functions](gen-content.md#gen-content-functions)).

The `target-counter()` function can be used to reference the value of a counter at a linked element, and it can specify any counter, allowing cross-references to refer to list items, chapters or sections as well as pages.

Used with generated content after a hyperlink, it will add a cross-reference with the correct page number determined automatically.

CSS


    a[href]::after {
        content: " [See page " target-counter(attr(href), page) "]"
    }

This adds something like "\[See page 17\]" after each link. Note the use of the function `attr()` inside the `target-counter()` function.

It can also take an optional counter style, similar to the normal `counter()` function.

CSS


    a[href]::after {
        content: " [See chapter "
                 target-counter(attr(href), chapter, upper-roman)
                 "]"
    }

This will add a cross-reference after every link with the correct chapter number determined automatically and displayed using roman numerals. For example: "\[See chapter IV\]".

The `target-content()` function can be used to reference the text content of the linked element.

CSS


    a[href]::after {
        content: " [See '" target-content(attr(href)) "']"
    }

This will add a cross-reference after every link that includes the text of the element being linked to, such as a chapter title. For example: "\[See 'Introduction'\]".

The `attr()` function, used in the previous examples inside the other functions, can also be used on its own to insert the URL of a remote resource.

CSS


    a[href]::after {
        content: " [Located at '" attr(href) "']";
    }

This will add the URL after every link. For example: "\[Located at 'http://www.princexml.com/'\]".

