---
title: Footnotes
---

### Footnotes

Prince supports footnotes using the `float` property. If an element has the property float: footnote then it will be floated into the footnote area of the page and a reference will be placed in the text.

This example shows some simple footnotes, the fn class is used to create footnotes:

Footnotes example

<img src="images/footnotes.png" alt="Footnotes example" width="428" height="157" />
Footnotes example

CSS


    .fn {
        float: footnote
    }

HTML


    <p>
    Footnotes<span class="fn">A footnote is a note placed at
    the bottom of a page of a book or manuscript that comments on or
    cites a reference for a designated part of the text.</span>
    are essential in printed documents and Prince knows how to generate
    them. Most readers will read the footnotes before they read the text
    from where the footnotes are anchored<span class="fn">Often,
    the most interesting information is found in the footnotes.</span>.
    </p>

Each footnote implicitly increments the *footnote* counter which is used to number the footnotes. The footnote counter can be reset at each new page, section or chapter as necessary. This example resets the counter on each new page.


    @page {
        counter-reset: footnote
    }

#### Footnote calls

Footnote calls are the numeric anchors in the text that refer to the footnotes. Prince will generate footnote calls using the `::footnote-call` pseudo-element. This is the default style for footnote calls:


    *::footnote-call {
        content: counter(footnote);
        font-size: 83%;
        vertical-align: super;
        line-height: none
    }

This will display the current value of the footnote counter in a superscript position in a slightly smaller font than the main text. The `line-height` declaration ensures that the superscript position of the footnote does not affect the line height of the main text.

The footnote call style can be customized to use different fonts or colors. It can even be customized to include different content, such as placing the footnote counter in brackets rather than making it superscript.


    *::footnote-call {
        content: "[" counter(footnote) "]";
        font-size: inherit;
        vertical-align: inherit;
    }

This rule will generate footnote calls with the number of the footnote in brackets, like this: \[1\], \[2\], \[3\].

#### Footnote markers

Prince automatically generates footnote markers, the numeric markers placed in front of the footnote text. Footnote markers are similar to the markers added to list items (see [Lists](lists.html#lists)) in most respects, and can be styled in a similar fashion using the `::footnote-marker` pseudo-element:


    *::footnote-marker {
        font-weight: bold
    }

This rule will generate footnote markers with a bold font.

Footnote markers are rendered outside the footnote in the left margin area by default. If the CSS property `footnote-style-position` has value `inside`, the marker is rendered as the first inline box inside the footnote. This property is similar to the `list-style-position` property that applies to list markers (see [Lists](lists.html#lists)).

#### Styling and behavior of footnotes

Footnotes are placed within the `@footnote` area of the page (see [Page regions](paged.html#page-regions)), which can be styled within [`@page`](doc-refs.html#at-page) rules.


    @page {
        @footnote {
            border-top: solid black thin;
            padding-top: 8pt
        }
    }

This rule adds a border and some padding to the top of the footnotes area.

If there are no footnotes on a page, the footnotes area will not be displayed on that page at all.

By default, the `@footnote` area is at the bottom of the page. However, Prince allows to position the area in different places, effectively offering a mechanism to create simple sidenotes (see [Sidenotes](sidenotes.html#sidenotes)).


    @page {
        @footnote {
            position: absolute;
            left: 10px;
        }
    }

This rule moves the footnotes area to the left side of a page.

Footnotes are created with the `float` property (see also [Floats](floats.html#floats)): an element can be removed from the normal flow of the document by styling it with the `footnote` value. This creates a footnote call in the place where the element would be in its natural flow, and moves the element's content to the bottom of the page. The footnote marker is rendered outside the footnote in the left margin area, and the footnote is displayed as a block element.

The property `footnote-display` can be used to change the default display of footnotes: besides the default `block` display, they can be also treated as `inline` elements. The value `compact` leaves it up to Prince to determine whether to display the footnote as a block or inline element: if two or more footnotes fit on one line, they will be treated as inline elements to take up less space.

Making a footnote into an inline element moves the footnote marker into the footnote box as the first inline box inside the footnote.

The `float` property offers also the value `inline-footnote`, which is another mechanism to transform the footnote into an inline element.

In a multi-column layout, footnotes can be rendered at the bottom of the page as normal footnotes, or alternatively at the bottom of each column by using the values `prince-column-footnote` or `prince-column-inline-footnote` for the `float` property. See also [Prince extensions to floats](floats.html#float-extensions).

In some situations it might happen that footnotes do not fit on the page on which the footnote call was placed. It might be desirable to tie the footnote to the same page as the call - the `prince-footnote-policy` can be of help. The following example instructs Prince to move the line with the footnote call to the next page, in order to keep it on the same page as the footnote itself:


    p {
      prince-footnote-policy: keep-with-line;
    }

Alternatively, the value `keep-with-block` moves the entire paragraph to the next page.

This property must be applied to the paragraph in which the footnote occurs, not to the footnote element itself.

