---
title: Sidenotes
---

Sidenotes
---------

You need  
[Prince extensions to floats](doc-latest/floats.html#float-extensions)

[Footnotes](doc-latest/footnotes.html#footnotes)

-   `float: footnote`

[Styling and behavior of footnotes](doc-latest/footnotes.html#footnotes-styling)

Prince has a simple way of creating footnotes: the `@footnote` page area, where footnotes can be floated to with the `float` property. For details see [Footnotes](doc-latest/footnotes.html#footnotes).

It gets slightly more complicated when you want to position the footnotes not under the text, in their default position, but at the side of the pages as sidenotes. Two approaches are possible, each with its advantages and drawbacks. Either

-   the footnote area is positioned to the side of the page (see also [Styling and behavior of footnotes](doc-latest/footnotes.html#footnotes-styling)), or
-   the sidenotes are floated not to the footnote area, but simply to the left or right side of the page.

We shall see each approach separately.

### Positioning the footnote area

A straightforward approach for sidenotes is to position the footnote area to the desired place, instead of leaving it in its default position.

``
    @page {
        @footnote {
            position: absolute;
            left: -90px;
            width: 60px;
        }
    }

This rule moves the footnotes area to the left side of a page.

The advantage of this approach is that footnote calls and markers are created automatically (see [Footnote calls](doc-latest/footnotes.html#footnote-calls) and [Footnote markers](doc-latest/footnotes.html#footnote-markers)).

The biggest disadvantage is that the footnotes are not placed to the side of the location of the footnote calls, but are inserted into the footnote page area filling the space from the top of the page. Should this be of importance, use the second approach instead.

### Floating the footnote left or right

The footnote text is floated to the left (or right) and moved out of the way with negative margins.

``
    .footnote {
      float: left;
      max-width: 60px;
      margin-left: -90px;
    }

This rule floats the footnotes to the left side of a page.

The advantage is to position the footnotes vertically aligned with the footnote calls.

The disadvantage is that footnote calls and markers are not created automatically, but need to be manually added as counters, and styled. Also, footnotes may overlap vertically if they are too close together.

A variant of this approach, useful when creating floating sidenotes in a multicol layout, can make use of some scripting to determine, with the help of [The Box Tracking API](doc-latest/javascript.html#js-box), in which column the sidenote call, and thus the sidenote, is placed - making sure the sidenote is always in the correct position. You can see this in full action in the [Sidenotes](http://css4.pub/#sidenotes) sample ([HTML](http://css4.pub/2019/sidenotes/index.html) - [PDF](http://css4.pub/2019/sidenotes/index.pdf)).

