### Floats

When printed texts contain images, the text is usually laid out to wrap around those images. To accomplish the same with CSS, the images are floated - either to the left or right of text, or at times even to the top or to the bottom of a column. The `` property does just this - it floats an element, allowing the content of other elements to flow around it.

``
    img {
        : right;
    }

The property `` can be considered the float's sister property: an element that has the `` property set on it will not move up, next to the floated element, like the float is asking for. Instead, it will move down after the float.

Prince extends the traditional behavior of floats with a few features that have been ubiquitous in printing for a long time.

#### Prince extensions to floats

Traditionally, floats move in the inline direction, left or right. Prince extends this behavior with page floats that move in the block direction, specifying that an element should be floated to the top or to the bottom of a page, and with column floats that move the float to the nearest edge of the column in a multi-column layout, with optional column spanning of the float.

This allows for more flexible layout options that meet the needs of formatting documents for print.

##### Page and column floats

When giving the `` property the value `top` or `bottom`, the element will be floated to, respectively, the top or the bottom of the page. The values `column-top` and `column-bottom` float the element to the top or bottom of the column it appears in, while `column-top-corner` and `column-bottom-corner` float the element to the top or bottom of the last column, rather than its natural column. These can be useful if you wanted to create a magazine-style layout, floating an image to the right-hand corner of the current multi-column layout.

``
    img {
        : column-top-corner;
    }

A floated element can span several columns with the help of the `` property (see ). The following example instructs Prince to make the image span two columns:

``
    img {
        : column-top-corner;
        : 2;
    }

The value `prince-snap` instructs Prince to float the image to the nearest "end", i.e. to the top or bottom of the page, or of the column in the case of a multi-column layout.

``
    img {
        : prince-snap;
    }

##### Spread floats

In print one typically has to deal with left facing and right facing pages, together forming a spread. To take this into account when placing an element, Prince extends the `` property with the values `inside` and `outside`, moving the element respectively to the inside or outside of a spread.

If the `inside` and `outside` values are used in a multi-column layout, the element is floated to the inside or outside of the column it appears in its natural flow.

##### Page and column footnotes

The value `footnote` transforms the element into a footnote: it creates a footnote call in the place where it appears in its natural flow, and moves the element to the bottom of the page. The footnote marker is placed outside of the block of the footnote. With the value `inline-footnote`, the footnote marker is placed inside of the block of the footnote. Two additional values, namely `prince-column-footnote` and `prince-column-inline-footnote` behave in an analogous way, but move the footnote not to the bottom of the page, but to the bottom of its column instead. See also .

##### Conditional modifiers

Prince also takes the additional modifier `next`. In a multi-column layout, this defers the float to the next column, otherwise it defers the float to the next page.

``
    img {
        : column-top next;
    }

The optional modifier `unless-fit` is to be used in combination with other float instructions, and expresses a conditional: the element is only floated if it would otherwise cause a page or column break. For example, If you have a large image that happens to occur at the end of the page, it could force a page break and leave a gap at the end of the previous page. So you could float the image `top unless-fit`, which would move it to the top of the next page *unless it fits on the current page without causing a break and leaving a gap*:

``
    img {
        : top unless-fit;
    }


