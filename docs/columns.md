### Columns

Reading long lines of text can be difficult - multiple columns have been used in print for a very long time. CSS allows for clean styling in multiple columns with the help of several properties.

The `` property specifies the number of columns for the selected element - the column width will be calculated automatically. Alternatively, you can define the (optimal) width of a column with the `` property, and the number of columns will be defined automatically. Note that Prince might make small adjustments to the actual width in order to use the available space at its best. Both values can also be set simultaneously with the shorthand `` property.

``
    p {
        : 3;
    }

The height of the columns is balanced by default, and the text is distributed to the available columns so that the height of the content in each column is approximately equal. In some situations it might be desirable to explicitly determine the height of the columns, creating as many columns as necessary. This is achieved by setting the `` or `` properties on a multi-column block.

With the `` property the distance between columns can be styled and the `` property allows the addition of a line between columns - this is similar to using `` or `` properties.

``
    p {
        : 2em;
        : red dotted thin;
    }

The `` property determines how the content is distributed to fill various columns: the property can be set to `auto`, filling the columns sequentially, or `balance`, dividing the content in equal ways between the columns.

When content is laid out in multiple columns, Prince can determine where column breaks are placed in a similar way to breaking content into pages. Use the properties `` and `` with the value `column` to fine tune this behavior.

Prince also supports the properties `` and ``. However, you are encouraged to use the newer properties ``, `` with the keyword `column` from the CSS Fragmentation Module Level 3.

If an element is to break the flow and span several columns, the property `` helps to achieve this. For floated elements (see ) a numeric value tells Prince how many columns the element should span. For non-floated elements that are part of the regular flow of the document, only the keyword `all` can be used.

The following example instructs Prince to make the `h1` heading element span all the columns:

``
    body {
        : 3;
    }
    h1 {
        : all;
    }

Prince features also several column-specific extensions to the `` property, namely and .
