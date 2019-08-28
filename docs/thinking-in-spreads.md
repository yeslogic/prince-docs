Thinking in Spreads
-------------------

You need  
-   -   

Prince produces PDFs - which are a prominent example of paged media. The main difference with conventional CSS design for browsers is to always keep in mind that you are dealing with pagination, i.e. the content is placed on discrete pages.

The basic unit for paged media in print is the page, organized in page spreads: the left page, called *verso* in a left-to-right script (see ), and the right page, called *recto*, are of the same size and typically are symmetrical to each other and are centered on the gutter. Selected and can be placed *recto* or *verso*, and Prince expands several properties and the [`@page`](doc-latest/doc-refs.html#at-page) at-rule pseudo-classes with the values `verso` and `recto`, or `inside` and `outside`, referring to the layout on each page of the spread to facilitate the work with page spreads.

### Pagination on a page spread

You have control on wether to place specific selected and named pages right or left, or *recto* or *verso* with the help of `` and ``, each of which takes the values `recto` and `verso` in addition to the traditional values.

``
    h1 {
        break-before: recto;
    }

This rule places an `h1` element always at the beginning of a *recto* page.

Pages can also be specifically targeted and styled with the [`@page`](doc-latest/doc-refs.html#at-page) at-rule pseudo-classes `:right` and `:left`, or `:recto` and `:verso`.

### Layout on a page spread

Using the values `right` and `left` when placing elements on pages symmetrically arranged around the central gutter is possible, but rather cumbersome, since their placement depends on the placement of the page on a spread. Prince offers the extensions `inside` and `outside` to ease the task.

``
    p {
        margin: 2em;
    }
    @page:left {
        margin-right: 3em;
    }
    @page:right {
        margin-left: 3em;
    }

This example creates a bigger margin around the central gutter.

So, when you start thinking about the layout box model, Prince offers the properties `` and `` to help styling.

``
    p { 
        margin: 2em;
        margin-inside: 3em;
    }

This example creates a bigger margin around the central gutter, like the previous one - albeit in a shorter way.

Floats are particularly sensitive to the placement on the page with regards to whether it is a left-facing or right-facing page. Prince extends the `` property (and the property ``) with the values `inside` and `outside`. For details please see the chapter .

On a paragraph level, the properties `` and `` similarly take the keywords `inside` and `outside` to help achieving a smooth layout.

``
    @page:verso {
        @top-left { content: counter(page) }
        @top-right { content: string(book-title) }
    }
    @page:recto {
        @top-left { content: string(chapter-title) }
        @top-right { content: counter(page) }
    }
    h1 {
        text-align: center;
        string-set: book-title content();
    }
    h2 {
        text-align: outside;
        string-set: chapter-title content();
    }
    img {
        float: inside;
    }

This style snippet could be part of the stylesheet for a little booklet - it displays the page number in the upper outside corners, the book title in the upper inside of the left, or *verso* page, and the chapter title in the upper inside of the right, or *recto* page. Chapter headings are aligned to the outside of the page spreads, while any image in the book is floated close to the central gutter.


