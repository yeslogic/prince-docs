---
title: Rotating content
---

Rotating content
----------------

Sometimes it is necessary to rotate a block element so that it fits on the page. This is common with tables. Two approaches are possible: either the whole page is [printed sideways](rotating.html#wide-content-sideways), or only [the content in a table cell is rotated](rotating.html#rotating-table-cells). We shall see each approach separately.

### Printing wide content sideways

You need  
`prince-rotate-body`

`prince-shrink-to-fit`

Figure [Printing a big table sideways](rotating.html#fig-bigtable) shows a table, rotated so that its width fits within the page's length. This can be achieved with the following rules:

Printing a big table sideways

![Image of a large table printed sideways so that its width fits along the page's length.](samples/rotate-body-2.bw.png)
This table is too wide to fit on the paper, so we use `prince-rotate-body` in a *named page* to print it sideways. Download the [PDF](samples/rotate-body.pdf) or the [HTML](samples/rotate-body.html).


    @page big_table {
        prince-rotate-body: landscape;
        prince-shrink-to-fit: auto;
    }

    table.big {
        page: big_table
    }

The `prince-rotate-body` property works within [`@page`](doc-refs.html#at-page) rules only, so this example uses a named page to place the table on a page of its own. Then the [`@page`](doc-refs.html#at-page) rule for `big_table` pages uses the `prince-rotate-body` property to tell prince that the body of the page, but not the headers and footers, should be rotated. The table in this example is still too wide so we also use the `prince-shrink-to-fit` property to make it a little smaller.

If you download the full example ([HTML](samples/rotate-body.html) or [PDF](samples/rotate-body.pdf)) you will see that the paragraphs before and after the table are not placed on the same page. This is because they do not belong to the same named page (see [Named pages](paged.html#named-pages)). However on page four there are two tables, both tables belong to the same named page and therefore Prince will try to place them together on the same page.

Another way of rotating content is by changing the writing mode with the `writing-mode` property, or by transforming an element with `transform: rotate()` - see [Rotating content in table cells](rotating.html#rotating-table-cells).

### Rotating content in table cells

You need  
`transform: rotate()`

`writing-mode`

There are cases, when preparing a table with a large amount of content, that you would like to configure your layout to be most efficient - a useful trick is to rotate the content in some table cells, or in the table headers. Rotating by 90° might be a way to achieve this, but readability suffers. A reasonable compromise is to rotate 45° only - the space it needs is not more than with a 90° rotation, and your readers don't have to tilt their heads repeatedly. In the following example we shall rotate table headers by 45°.

The rotation is achieved with `transform: rotate()`. It could be applied directly to the `th` element, but it is impossible to configure the width of the column as we wish it. We shall thus nest a `div` and a `span` element:


    <th class="rotate">
      <div>
        <span>Column header 1</span>
      </div>
    </th>

The rotation will happen with the following CSS code:


    th.rotate {
      /* Make sure the th is high enough, */
      height: 150px;
      /* and make sure the words of the header are not split with a newline. */
      white-space: nowrap;
    }

    th.rotate > div {
      transform:
        /* Magic Numbers to put it in place, */
        translate(25px, 50px)
        /* rotate it, */
        rotate(-45deg);
      /* and give the div the width you wish. */
      width: 30px;
    }
    th.rotate > div > span {
      /* And finally, add some styling. */
      border-bottom: 1px solid #ccc;
      padding: 5px 10px;
    }

A more basic means for rotation, allowing for less fine-tuning, is the use of the `writing-mode` CSS property. This option only allows rotation by 90°. It can be very handy when only some table cells with too much content are rotated, so as not to use too much horizontal space. You cannot rotate the table cell directly, so you have to nest one `span` element inside - and then you style it:


    td.rotate > span {
      /* Rotate the content */
      writing-mode: vertical-rl;
      /* Optionally, you can force the table cell's content not to wrap */
      white-space: nowrap;
    }

For a different approach to rotating content, see the section on [Printing wide content sideways](rotating.html#wide-content-sideways).

