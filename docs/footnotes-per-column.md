---
title: Footnotes per Column
---

Footnotes per Column
--------------------

You need  
[Columns](columns.md#columns)

[Page and column floats](floats.md#float-extension-page-column)

[Footnotes](footnotes.md#footnotes)

-   `float: prince-column-footnote`

Prince has a simple way of creating footnotes: the `@footnote` page area, where footnotes can be floated to with the `float` property. For details see [Footnotes](footnotes.md#footnotes).

In a multi-column layout (see [Columns](columns.md#columns)), footnotes can be placed at the bottom of the page, spanning all columns. But usually you want to position the footnote at the bottom of the column the footnote call appears in.

To achieve this, the values `prince-column-footnote` or `prince-column-inline-footnote` of the `float` property are used.

The value `prince-column-footnote` transforms the element into a column footnote: it creates a footnote call in the place where it appears in its natural flow, and moves the element to the bottom of the column. The footnote marker is placed outside of the block of the footnote. With the value `prince-column-inline-footnote`, the footnote marker is placed inside of the block of the footnote.


    float: prince-column-footnote

