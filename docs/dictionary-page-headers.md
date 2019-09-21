---
title: Dictionary Page Headers
---

Dictionary Page Headers
-----------------------

You need  
[Page regions](paged.md#page-regions)

[Generated Content](gen-content.md#gen-content)

[The optional page-policy value](gen-content.md#gen-content-functions-pagepolicy)

-   `content: string(term, first)`
-   `content: string(term, last)`

A peculiar and interesting use of page headers happens in dictionaries: typically, you might want to display page headers like "a-af", where "a" is the first definition on the page and "af" is the last one. This can easily be obtained by adding [The optional page-policy value](gen-content.md#gen-content-functions-pagepolicy) to the `string()` function.

The `string-set` property is applied to each definition in the dictionary (the **b:first-child** from the following example), and then the `first` and `last` page policy values are use to select the relevant definition to display in the page header.


    @page {
      @top-left { content: string(term, first);}
      @top-right { content: string(term, last);}
    }

    .chapter p b:first-child { string-set: term content() }  /* pick up term to be used in running header */

This is the crucial set of rules for the [Dictionary](sample-docs.md#dictionary) sample.

The dictionary sample is furthermore noticeable for its use of the optional page policy keyword `first-except`: the current letter of the alphabet is displayed on each page heading, *except* for the page on which the letter appears in the body of the page, starting the new section.


    @page {
      @top-center { content: string(letter, first-except);}
    }

    .chapter header { string-set: letter content() }

