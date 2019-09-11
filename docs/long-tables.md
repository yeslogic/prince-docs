---
title: Long Tables
---

Long Tables
-----------

You need  
[Tables](doc-latest/tables.html#tables)

-   [Running table headers and footers](doc-latest/tables.html#tables-running-headers-footers)
-   [Table captions](doc-latest/tables.html#tables-caption)

One of the main differences when designing for paged media is that you need to think about concrete pages, as opposed to a continuous flow of the page designed for the web and for web browsers. A problem may arise when elements such as tables are longer than the page they need to be displayed on.

The table itself is naturally split over several pages - but if you want table headers and footers repeated on each page, you need to code them in the HTML of the document by using the elements `thead` and/or `tfoot`. The content of these elements will be carried on to all the subsequent pages on which the table appears.

Tables can also be provided with a table caption by using the `caption` HTML element, or by styling an arbitrary element with `display: table-caption` to be made to behave like `caption` elements. The caption is positioned above the table by default, but it can be moved to the bottom with the `caption-side` property.

When a table spans across more than one page, the `prince-caption-page` property determines whether table captions will be displayed on the first page of a table, or only on the following pages, or repeated on every page that a table appears on. See also [Fancy Table Captions](doc-latest/fancy-table-captions.html#fancy-table-captions).

``
    table + p {
        display: table-caption;
        caption-side: bottom;
        prince-caption-page: following;
    }

