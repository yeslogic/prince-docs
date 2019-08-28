### Display

Every HTML element is displayed in a way depending on what type of element it is. Most elements are displayed as either `block` or `inline` elements. The default display value can be changed with the `` property.

A `block` element always starts on a new line and takes up all the available width.

An `inline` element, on the other hand, does not start on a new line, and only takes up as much space as necessary.

`inline` elements are not allowed to have `block` elements inside it.

A hybrid type, namely the `inline-block` element, is like `inline` elements, but it can have a width and a height - which can be very useful when you want to create a grid of CSS boxes that fills all the width and wraps nicely. The inside of an `inline-block` element is formatted like a block box.

Care needs to be taken with `inline-block` elements, because Prince [cannot split them over several pages](#faq-one-page).

The value `run-in` displays a block element as if it were an inline element at the beginning of the following block element.

With the value `list-item`, the element is effectively transformed into a list item - for more on lists, please see the chapter .

The value `flex` enables , while `inline-flex` makes an element behave like an inline element and lays out its content according to the flex layout model.

Several values refer to , making elements behave as if they were table elements. However, the value `inline-table` has no direct equivalent in HTML - it behaves like a `table` HTML element, but as an inline element, rather than a block element. Inside the table box is a block context.

The special value `none`, which removes the content from the document, is very useful when hiding certain elements in the printed layout.
