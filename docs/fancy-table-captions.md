---
title: Fancy Table Captions
---

Fancy Table Captions
--------------------

You need  
[Tables](tables.html#tables)

-   [Table captions](tables.html#tables-caption)

[Long Tables](long-tables.html#long-tables)

HTML tables only have one caption per table. However, in printed form a table might span several pages (see [Long Tables](long-tables.html#long-tables)) and it might be desirable to have separate captions for the first and the following pages - you might want to add "cont." to the caption of the first one, or otherwise differentiate them. Prince offers an extension mechanism to do so.

As mentioned in [Long Tables](long-tables.html#long-tables), when a table spans across more than one page, the `prince-caption-page` property determines whether table captions will be displayed on the first page of a table, or only on the following pages, or repeated on every page that a table appears on. This opens up the possibility to have a different caption on the first and on the following pages.

You might define a caption in HTML for the main table caption - to be displayed on the first page. Additionally, you make another element into a table caption with the `display` property - and display it only on the following pages!

The paragraph functioning as a table caption can be hidden in browsers by using [CSS Media Queries](doc-refs.html#media-queries).

HTML


    <table>
      <caption>Demo table</caption>
      <tr>
        <td>A</td>
        <td>B</td>
      </tr>
      <tr>
        <td>C</td>
        <td>D</td>
      </tr>
      <tr>
        <td>E</td>
        <td>F</td>
      </tr>
    </table>
    <p>Demo table (cont.)</p>

CSS


    caption {
        caption-side: bottom;
        prince-caption-page: first;
    }
    table + p {
        display: table-caption;
        caption-side: bottom;
        prince-caption-page: following;
    }

