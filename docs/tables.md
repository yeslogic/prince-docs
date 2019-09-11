---
title: Tables
---

### Tables

#### Automatic table layout

When the *automatic table layout* algorithm is used, all contents of the table will be processed to determine the table width and its column width.

The *automatic table layout* algorithm is used in the following situations:

-   by default; or
-   when table `table-layout` property is `auto`; or
-   when table `width` property is `auto`, regardless of the value of the `table-layout` property.

The basic rules used by Prince can be summarized as follows:

-   Uses all contents of a column to calculate its maximum and minimum width. The minimum width typically ensures that the column should be big enough to hold the widest non-breakable unit (for example, a word or an image). The maximum width typically ensures that the column should hold all cell contents without breaking line (unless an explicit line break occurs).
-   If a calculated minimum or maximum column width is smaller than the corresponding specified column width, it will be replaced with the specified column width.
-   If table `width` has value `auto`, and if the table fits in the container when using maximum column widths, then maximum column widths will be used. Otherwise, minimum column widths will be used, but they will be adjusted, if the sum of them is smaller than the specified the table width or the container width, so that the table can take up as much space as possible.

#### Fixed table layout

When the *fixed table layout* algorithm is used, the table column widths are determined by their specified widths or by the remaining space available, regardless of their contents.

The *fixed table layout* algorithm is used in the following situations:

-   when the table `table-layout` property has a value `fixed`, and
-   the value of `width` property is not `auto`

``
    table {
        table-layout: fixed;
        width: 90%
    }

Note that if the `width` property has value `auto` (which is the default value), the `table-layout` property will be ignored and automatic table layout will be used instead.

The basic rules used by Prince are as follows:

-   If a column has a specified width, then the specified width is used as its minimum width.
-   For columns that do not have specified widths, the remaining space (specified table width - sum of all the specified column widths) is evenly divided among them as their minimum widths.
-   If the sum of all the minimum column widths is smaller than the specified table width, they will be adjusted to eat up the remaining space.

#### Separated table borders

When the `border-collapse` property is set to `separate`, a table can have separate borders around individual cells. The space between table cell borders is determined by the value of its `border-spacing` property.

CSS

``
    table {
        border-collapse: separate;
        border-spacing: 5px;
        border: solid 3px black
    }
    td { border: solid 1px red }
    td.dash-blue  { border: 2px dashed blue }
    td.solid-green { border: 2px solid green }

Output

|     |     |     |
|-----|-----|-----|
| A   | B   | C   |
| D   | E   | F   |
| G   | H   | I   |

Note that by default, the value of `border-collapse` is `separate`.

#### Collapsing table borders

When the CSS property `border-collapse` is set to `collapse`, each edge of each cell resolves its final border style and border width based on certain rules.

CSS

``
    table {
        border-collapse: collapse;
        border: solid 3px black
    }
    table td { border: solid 1px red }
    td.dash-blue  { border: 2px dashed blue }
    td.solid-green { border: 2px solid green }

Output

|     |     |     |
|-----|-----|-----|
| A   | B   | C   |
| D   | E   | F   |
| G   | H   | I   |

Note that the `border-spacing` property is not used in the collapsing table border model.

The rules used by Prince for choosing the "winner" border are as follows:

-   If a border has a border style of `hidden`, it beats those with other border styles;
-   Otherwise, if a border has a border style of `none`, it loses to those with other border styles;
-   Otherwise, if a border has thicker border width, it beats those with thinner ones;
-   Otherwise, a border wins if its border style has higher precedence. The precedence order is: `solid`, `dashed` then `dotted`;
-   Otherwise, a border wins if it is set in a part that has higher precedence. The precedence order is: cell, row, row-group then table.

#### Cells that span columns

Prince table cells that span multiple columns using the `table-column-span` CSS property, which takes an integer value and is set to 1 by default.

CSS

``
    td.colspan2 { table-column-span: 2 }

XML

``
    <td class="colspan2"> B </td>

Output

A
B
C
D
E

#### Cells that span rows

Prince supports table cells that span multiple rows using the `table-row-span` CSS property, which takes an integer value and is set to 1 by default.

CSS

``
    td.rowspan2 { table-row-span: 2 }

XML

``
    <td class="rowspan2"> A </td>

Output

A
B
C
D
E

#### Numbering table rows

If you want to number table rows in a table, but there are just too many rows to number by hand, or if the document is dynamically generated and hand numbering is impossible, CSS counters and generated content can help you out:

CSS

``
    table { counter-reset: row }
    tr { counter-increment: row }
    tr::before {
        content: counter(row);
        display: table-cell
    }

HTML

``
    <table>
    <tr><td>The First Table Row</td></tr>
    <tr><td>The Second Table Row</td></tr>
    <tr><td>The Third Table Row</td></tr>
    </table>

Output

|     |                      |
|-----|----------------------|
| 1   | The First Table Row  |
| 2   | The Second Table Row |
| 3   | The Third Table Row  |

As pseudo-elements only inherit inheritable properties from the element they are attached, non-inheritable properties, such as display and border properties, need to be explicitly set in the pseudo-elements.

#### Running table headers and footers

When a table spans across more than one page, it might be desirable to have a "running" table header and footer so that they can be carried on to all the subsequent pages on which the table appears.

HTML

``
    <table>
     <thead>
      <tr> <td>Name</td> <td>Mark</td> <td>Grade</td> </tr>
     </thead>
     <tr> <td>Xuehong</td> <td>95</td> <td>H1</td> </tr>
     <!-- other rows for other students -->
     <tfoot>
      <tr> <td>Name</td> <td>Mark</td> <td>Grade</td> </tr>
     </tfoot>
    </table>

Rows inside the `thead` element are used as a running table header. Rows inside the `tfoot` element are used as a running table footer.

See also [Long Tables](doc-latest/long-tables.html#long-tables).

#### Table captions

Tables can also be provided with a table caption by using the `caption` HTML element, or by styling an arbitrary element with `display: table-caption` to be made to behave like `caption` elements. The caption is positioned above the table by default, but it can be moved to the bottom with the `caption-side` property.

When a table spans across more than one page, the `prince-caption-page` property determines whether table captions will be displayed on the first page of a table, or only on the following pages, or repeated on every page that a table appears on. See also [Fancy Table Captions](doc-latest/fancy-table-captions.html#fancy-table-captions).

