---
title: Paged Media
---

Paged Media
-----------

Prince produces PDFs - which are a prominent example of paged media. There are a few differences that are crucial to keep in mind when preparing a document for paged media intended for print:

Pagination  
The major difference between formatting for the web and for PDF/Print is that PDF is paginated, i.e. the content is placed on discrete pages. Pages have a defined size and content can be laid out in a specific pattern making use of predefined page regions. Elements can not only be floated right and left, but they can also be floated to the top and bottom of the page, or of a column, or the float even can be deferred to the next page (see ). Pages can be selected and named, which allows for specific treatment of certain pages. Also, it is important to have an understanding of pagination: content might not fit on a page and might spill over into the next page, or it might be necessary to move it to the next page in order to avoid creating gaps (see also ).

Page spreads  
A basic unit for paged media in print is the page spread: the left page, called *verso* in a left-to-right script (see ), and the right page, called *recto*, are of the same size and typically are symmetrical to each other and are centered on the gutter. Selected and named pages can be placed *recto* or *verso*, and Prince expands several properties and the [`@page`](doc-latest/doc-refs.html#at-page) at-rule pseudo-classes with the values `verso` and `recto`, or `inside` and `outside`, referring to the layout on each page of the spread.

Non-interactive  
Last but not least, paged media intended for print is non-interactive by nature. All CSS properties referring to user interaction make no sense, scripting cannot be interactive and scripts need to run before layout is finished. But for these details and scripting after layout please check the section on .

Prince allows you to control a number of options that affect how to format pages, from straight-forward options such as page size, to page style, page regions like headers and footers, pagination control and page numbering.

CSS properties that affect pages are specified within page *at-rules* (see ). For example, we can use the property within the [`@page`](doc-latest/doc-refs.html#at-page) rule to specify the page size (see ).

``
    @page {
        : A4
    }

In this section we will show most of the properties that can be specified within a page rule, then we will show how pagination can be controlled and how page styles can be applied to selected pages.

### Page size

Page size can be specified using the `` property in *length* units or by a page size keyword (see for a list), optionally combined with the `portrait` or `landscape` keyword.

``
    /* Use A4 paper */
    @page { : A4 }

    /* Use A4 paper in landscape orientation */
    @page { size: A4 landscape }

    /* These two custom sizes are equivalent */
    @page { size: 30cm 40cm }
    @page { size: 40cm 30cm landscape }

    /* Use square paper, this sets width and height */
    @page { size: 30cm }

Sometimes it can be useful to specify the page dimensions in pixels, for example when creating presentation slides (see ).

``
    @page {
        : 1280px 960px;
    }

### Page style

Pages, like other block level elements, follow the CSS box model introduced in . Their ``, ``, `` and `` can be styled within [`@page`](doc-latest/doc-refs.html#at-page) rules.

The [`@page`](doc-latest/doc-refs.html#at-page) rules can only style the page and its margin boxes - it cannot contain style rules to target specific elements, but it can contain at-rules to target the page regions (for a complete list of possible at-rules, see ).

``
    @page {
        : 2cm;
    }

Prince also supports the `margin-outside` and `margin-inside` properties. These allow you to specify different margins for the inside and outside edges of paper as it is bound into a book. For example it may be necessary to have a larger inside margin (called a *gutter*) so that after some of the margin is used by the binding, the remaining margins are even.

``
    @page {
        : 2cm;
        : 3cm;
    }

This is used in .

### Page regions

Page regions

![A page with content in some of its page regions.](doc-latest/samples/marginboxes-1.colour.png)
A page with content in some of its page regions.

Most content appears inside the *page area* of one or more pages. Surrounding the page area, but within the margin area, are the *page-margin boxes*. Other special areas are overlaying the whole page or are placed at the bottom of the *page area*. Collectively, they are known as the *page regions*.

This figure shows the positions of some page regions placed in the page margin, called the *page-margin boxes*. Some of them can be used for creating running page headers and footers.

The [`@page`](doc-latest/doc-refs.html#at-page) background is <span class="fig-marginboxes-lightgrey">grey</span> and the body's, i.e. the page area's background is <span class="fig-marginboxes-white">white</span>.

The first four page-margin boxes, namely

-   `@top`,
-   `@bottom`,
-   `@left` and
-   `@right`

are easy to understand and are shown in <span class="fig-marginboxes-yellow">yellow</span> and <span class="fig-marginboxes-red">red</span>.

Each of these page-margin boxes has a synonym ending in `-center` or `-middle` - for instance `@top-center` is the same as `@top`, while `@left-middle` is the same as `@left`.

You can place content in a page-margin box with the `` property.

For example, you can print the current page number at the bottom of each page (see ):

``
    @page {
        @bottom {
            : counter(page)
        }
    }

Two examples in the next chapter show examples of page headers and footers:

-   the creates a footer to display the page number, but suppresses it for the title page; and
-   the displays a more complex use of headers by placing the book title in the header of left pages, and the current chapter's title in the header of right-facing pages, in addition to the page number.

Several other page regions can also be used. The full list of page regions is shown in the table.

Page regions

Name
Default alignment
In figure
``
``
`@top`
center
middle
yellow
`@bottom`
center
middle
yellow
`@left`
center
middle
red
`@right`
center
middle
red
`@top-left`
left
middle
green
`@top-center`
center
middle
not shown
`@top-right`
right
middle
not shown
`@bottom-left`
left
middle
not shown
`@bottom-center`
center
middle
not shown
`@bottom-right`
right
middle
not shown
`@left-top`
center
top
green
`@left-middle`
center
middle
not shown
`@left-bottom`
center
bottom
not shown
`@right-top`
center
top
not shown
`@right-middle`
center
middle
not shown
`@right-bottom`
center
bottom
not shown
`@top-left-corner`
right
middle
not shown
`@top-right-corner`
left
middle
blue
`@bottom-left-corner`
right
middle
not shown
`@bottom-right-corner`
left
middle
not shown
`@page-float-top`
center
top
not shown
`@page-float-bottom`
center
bottom
not shown
`@prince-overlay`
center
middle
not shown
`@footnote`
left
middle
not shown

Prince will try to create page regions of the correct sizes. If you need to create boxes of specific sizes you may need to use only a single box (eg: `@top`) and use the `` property to place elements with specific sizes in it.

Note that in the above figure, Prince leaves space for `@top-right` and `@left-bottom` boxes because their counterparts (`@top-left` and `@left-top` respectively) have been defined. This keeps the `@top` and `@left` centered along the top and side of the page respectively.

The page-margin boxes `@top`, `@top-left` or `@top-right` can be used to create running page headers, and the page-margin boxes `@bottom`, `@bottom-left` or `@bottom-right` are useful for page footers (see ).

The page region `@prince-overlay` is a special region, overlaying all of the page area. A typical use is for creating watermarks on all pages of the document (see ).

The page region `@footnote` is placed by default at the foot of the page area and contains the footnotes (see ). Note that if there are no footnotes on a page, the footnote area will not be displayed on that page at all.

Many CSS properties can be applied to page regions:

-   All of the ``, ``, `` and `` properties can be used to style page regions.

-   The `` property can be applied to any page region to vertically align its content.

-   When a page region contains generated content, many inline style properties such as `` and `` can be applied to style the generated content.

The `@footnote` area can be positioned other than its default position (see and ). All other page regions cannot be moved - their position is defined by the page margins.

#### Generated content in page regions

We have already shown an example of using the `page` counter to print the page number at the bottom of each page, this is one example of generated content. The `page` counter is predefined and starts at 1; it increments automatically for each new page. (Note that the page counter cannot be incremented manually using the `` property.)

The `page` counter can be reset using the `` property at any block-level element within a non-floating element in the normal flow. This is useful for restarting page numbering at a new section of the document.

Restarting page numbering

HTML

``
    <body>
        <div class="front"> cover page, etc, ... </div>
        <div class="contents">
            table of contents, ...
        </div>
        <div class="body">
        <div class="chapter"> chapter 1...</div>
        <div class="chapter"> chapter 2...</div>
        </div>
        <div class=appendix"> appendix1 </div>
        <div class=appendix"> appendix2, ... </div>
    </body>

CSS

``
    .contents {
        : block;
        : table-of-contents;
        : page 1
    }
    @page table-of-contents {
        @top { : "Table of Contents" }
        @bottom {
            content: counter(page, lower-alpha)
        }
    }

    .body {
        display: block;
        page: main;
        counter-reset: page 1
    }
    @page main {
        @top { content: string(chapter-title) }
        @bottom {
            content: counter(page)
        }
    }

    .chapter h1 { : chapter-title content() }

also uses which we will explain in more detail below. We create three types of pages: table-of-contents pages, main pages, and pages without a name.

The .contents rule names the pages that it appears on as table-of-contents and resets the page counter to 1 at the start of the contents div. Then the [`@page`](doc-latest/doc-refs.html#at-page) rule for those pages generates a page footer that contains the current page number in `lower-alpha` style. This rule also sets the page header to the string "Table of Contents".

The `.body` rule names the pages that it appears on as main and resets the page counter to 1 at the start of main div. Then the [`@page`](doc-latest/doc-refs.html#at-page) rule for the main pages generates a page footer that contains the current page number in the default decimal style. This rule, together with the .chapter h1 rule, sets the page header to the title of the chapter.

Pages that don't match either of these names have the default style, which does not include a page number in the footer.

In some documents, particularly those that are unbound such as office documents, it can be useful to show the total number of pages on each page. The total number of pages can be accessed using the `pages` counter. This is a pre-defined counter that is fixed to the total number of pages in the document.

``
    @page {
        @bottom {
            content: "Page " counter(page) " of " counter(pages)
        }
    }

This rule will generate page footers such as "Page 1 of 89".

Fancy header example

![Image of a page of a textbook or thesis with a header.](doc-latest/samples/fancyheader-2.bw.png)
This example shows a header as might be found in a textbook. The [HTML](doc-latest/samples/fancyheader.html) and [PDF](doc-latest/samples/fancyheader.pdf) are both available. This is a small part of a [larger example](https://github.com/yeslogic/prince-samples/tree/master/thesis) in our [Prince samples repository](https://github.com/yeslogic/prince-samples).

Fancy headers

This example demonstrates a more complete headers style. It uses generated content to print page numbers, the chapter number and title and the section number and title using different styles for left and right pages. It also prints an underline under the header.

``
    @page {
        : Times, Serif;
        : 11pt;
        : justify;
        : 2cm;
        : 2cm;
        : 3.5cm;
        : 2.5cm;
    }

    @page body:left {
        @top-left {
            : counter(page);
            : bottom;
        }
        @top-right {
            content: "Chapter " counter(chapter) ": " string(chapter);
            vertical-align: bottom;
        }
    }
    @page body:right {
        @top-right {
            content: counter(page);
            vertical-align: bottom;
        }
        @top-left {
            content: counter(chapter) "." counter(section) " "
                string(section);
            vertical-align: bottom;
        }
    }
    @page body {
        border-top: thin black solid;
    }
    @page body:first {
        margin-top: 25%;
        @top-left { content: normal; }
        @top-right { content: normal; }
        border: none;
    }
    @page body:blank {
        @top-left { content: normal; }
        @top-right { content: normal; }
        border: none;
    }
    body {
        font-family: Times, Serif;
        font-size: 11pt;
        text-align: justify;
        : 0.5cm 0cm;
    }

    div.body {
        page: body;
    }

    div.body h1 {
        break-before: right;
        : start;
        string-set: chapter content();
        counter-increment: chapter;
        counter-reset: section;
    }
    div.body h1::before {
        content: "Chapter " counter(chapter) ": ";
    }

    div.body h2 {
        string-set: section content();
        counter-increment: section;
    }
    div.body h2::before {
        content: counter(chapter) "." counter(section) " ";
    }

The main content area is 2.5cm from the page's edge on all sides. On the left and right this is a margin of 2.5cm and on the top and bottom it's 2cm of margin and 0.5cm of padding. This places the bottom border of the `@top` page region 0.5cm from the main content area, enough to avoid making it look crowded. The header text has the vertical-align: bottom property to ensure that it appears immediately above the border — the border is made to look like an underline. This example uses many properties and page selectors discussed later in this section. This is a small part of a [larger example](https://github.com/yeslogic/prince-samples/tree/master/thesis) in our [Prince samples repository](https://github.com/yeslogic/prince-samples).

#### Copying content from the document

Generated content in page regions may contain text content copied from the document using the `` property:

CSS

``
    @page {
        @top {
            content: string(doctitle)
        }
    }

    h1 { string-set: doctitle content() }

The @page rule specifies that the top-center page region will contain the text content of the document title copied from the text content of the `h1` element in the document.

The second argument to the `string()` function is a `page-policy` (see ).

For a dictionary, you might want to have a page header that says "a-af", where "a" is the first definition on the page and "af" is the last, so you apply `` for each definition, and then you can select the `first` and `last` one with a page policy in the page header.

``
    @page {
      @top-left { content: string(term, first);}
      @top-right { content: string(term, last);}
    }

The page policy value `first-except` is equivalent to `start`, *unless* the `` is applied on the current page, in which case it will return *no* value.

This can be very useful as a means to repeating the title of a chapter as a page heading in the `@top-center` page region, without duplicating the information on the page where the heading appears in the running text of the page.

``
    @page {
      @top-center { content: string(letter, first-except);}
    }

You can see these examples in full action in the [Dictionary](sample-docs.html#dictionary) sample ([HTML](http://css4.pub/2015/icelandic/dictionary.html) - [PDF](http://css4.pub/2015/icelandic/dictionary.pdf)).

#### Taking elements from the document

Page region content may also be taken from the document itself. Any block-level element can be removed from the normal flow and placed in a page region. It will normally inherit from its original position in the document, but does not display there. Please also note the following:

-   All `` properties of an element not in the natural document flow will be ignored.
-   The first running element that appears on a page will be used on the current page and carried onto following pages, until a new running element is encountered.

To move the content into a page region, the element needs to be removed from the normal document flow position with the `running()` function of the `` property, and inserted into the specified region with the `element()` function of the `` property.

CSS

``
    @page {
        @top { content: element(header) }
    }
    h1 { position: running(header) }

The @page rule specifies that the top page region is a new running header named "header".

The rule for the `h1` element moves it to the "header" running element, removing it from the default normal flow.

Prince also provides another interface for creating running headers: the content can be removed from the normal flow with `: static()`, to be placed in a page region with `: flow()`.

CSS

``
    @page {
        @bottom { content: flow(footer) }
    }
    footer { prince-flow: static(footer, start) }

In addition to the standard mechanism, the Prince specific one offers an extra feature that might be useful in certain scenarios: the `static()` function accepts an optional `start` argument, which makes the fetched content available, as if it were fetched from the start of the document. An example to clarify:

Many HTML documents designed for browsers have the following structure:

``
    <header>
    main content
    <footer>

Unfortunately, if you want to place the footer element in the page footer, it will only appear on the last page - because it is at the end of the document! To solve this, the document must be modified to look like this:

``
    <header>
    <footer>
    main content

It can be achieved by using JavaScript to move the element, but the simple `start` keyword on the `` property instructs Prince to pretend that the element was seen at the beginning of the document.

The `element()` and `flow()` functions replace the entire margin box, and cannot be combined with other content. If you just want to capture some text from the document, use named strings instead (see ) - they can be combined with other content.

### Selecting pages

It is often necessary to apply styles to some pages, but not others. Either applying them to only some pages, or on every page *except* selected pages. CSS and Prince provide a number of *page selectors* for choosing which pages a rule applies to.

In a novel it is useful to print a page number at the bottom of every page, *except* for some pages such as the title page. In this example the [`@page`](doc-latest/doc-refs.html#at-page) rule is applied to all pages. Then the `@page:first` rule, which is more specific, removes the footer from the first page. See and .

Novel title page example

![Novel title page example image.](doc-latest/samples/titlepage-1.bw.png)
A title page example showing use of `@page:first`. Download the [PDF](doc-latest/samples/titlepage.pdf) or the [HTML](doc-latest/samples/titlepage.html).

``

In this example the [`@page`](doc-latest/doc-refs.html#at-page) rule specifies styles that apply to all pages: Then the `@page:first` rule overrides this for the first page only. It resets the `` property for the footer and increases the top margin, printing the title of the novel in a reasonable place on the page (see ). This example also uses the `` property to force a page break (see ).

When using the `:first` page selector to choose the first page in each chapter (such as in ) it may be necessary to add `: start` to the first element in each chapter (such as `h1`). See .

The `:left` and `:right` page selectors can be used to style left and right pages in a bound book differently. This is often used in text books to place the page number on the outside top corners of pages.

Alternatively, the `:recto` and `:verso` selectors can be used, with the advantage of being independent of directionality of the script: in a left-to-right script, `:recto` is the right-hand side of a spread, and `:verso` is the left-hand side, while in a right-to-left script these values are inverted: `:recto` defines the left-hand side of a spread, and `:verso` defines the right-hand side. See also .

Textbook page numbers example

![Textbook page numbers example image.](doc-latest/samples/textbook-1.bw.png)
A text book example showing use of `@page:left` and `@page:right`. Download the [PDF](doc-latest/samples/textbook.pdf) or the [HTML](doc-latest/samples/textbook.html).

``
    @page:left {
        @top-left { content: counter(page) }
        @top-right { content: string(book-title) }
        margin-left: 2cm;
        margin-right: 3cm;
    }
    @page:right {
        @top-left { content: string(chapter-title) }
        @top-right { content: counter(page) }
        margin-left: 3cm;
        margin-right: 2cm;
    }

    h1 { string-set: book-title content() }
    h2 { string-set: chapter-title content() }

These rules also place the book title in the header of left pages, and the current chapter's title in the header of right-facing pages. The book title is copied from the text content of the `h1` element while the chapter title is copied from the text content of the `h2` elements (see ). They also specify wider margins in the *gutter* of the page spread; binders may need this extra width for a book's binding.

The first page in a document using the default left-to-right reading order is a right page. Imagine the cover or a title page of a book which appear on a right page. The first page of a right-to-left document is a left page.

By putting `break-before: left` or `right` at the very beginning of the document, it will not leave a blank page, but instead will change whether the document begins on a left or right facing page.

Sometimes it can be useful to select the *N*th page in a document. The `:nth(N)` page selector can be used to do this:

``
    @page:nth(42) {
        ...
    }

#### Named pages

Sometimes it is necessary to style pages depending on their content; named pages allow us to select pages that contain particular elements. We used this in , to apply a style to the table of contents pages to print their page numbers using roman numerals.

The element containing the table of contents has a `` property applied, specifying that this element's pages are table-of-contents pages. The `` property may be applied to any block-level element within a non-floating environment in the normal flow.

``
    .contents {
        : block;
        : table-of-contents;
    }

Then using this page name to apply a different [`@page`](doc-latest/doc-refs.html#at-page) rule to the table-of-contents pages:

``
    @page table-of-contents {
        @top { : "Table of Contents" }
        @bottom {
            content: counter(page, lower-alpha)
        }
    }

More than one element can *belong* to the same name, in other words, page names behave like CSS classes.

Prince will create a page break between elements belonging to different named pages, including elements without a named page. So in , a page break will be inserted after the the table of contents, because the next element has the page name main rather than table-of-contents.

Selectors such as `:first`, `:Nth`, `:left` and `:right` also work with named pages. For example:

``
    @page preface {
        @bottom {
            content: counter(page, lower-alpha)
        }
    }
    @page preface:first {
        @bottom {
            content: normal;
        }
    }

This example only works when a page name is used only once within a document, such as for the preface of a document (documents only have one preface). If you wish to apply a style to the first page of every chapter then you must use the `` property to create *page groups*:

``
    div.chapter {
        : chapter;
        : right;
        : start;
    }
    @page chapter {
        @bottom {
            : counter(page);
        }
    }
    @page chapter:first {
        @bottom {
            : normal;
        }
    }

The property `: start` instructs Prince to start a new page group. This is necessary for the `div.chapter:first` selector to match the first page of each chapter, instead of only the first page in the first chapter. See .

#### Blank pages

A special case are blank pages.

As we discussed in the previous section, `: right` can be used to place the first page of a chapter on the right page in a spread. If the previous page is a right page, two page breaks are inserted, leaving a blank left page. However, this page will have normal [`@page`](doc-latest/doc-refs.html#at-page) styles applied to it, which is usually not what people want. The `:blank` page selector can be used to change the style of blank pages, pages skipped such as a left page before a `break-before: right`, including removing any content.

``
    @page:left {
        @top-left {
            : counter(page);
        }
    }
    @page:right {
        @top-right {
            : counter(page);
        }
    }

    @page:blank {
        @top-left {
            : normal;
        }
        @top-right {
            : normal;
        }
    }

    h1 {
        : right;
    }

This example clears the generated content used on these pages. This works because `:blank` is more specific than either `:left` or `:right`. The `:blank` page selector can also be used with named pages.

``
    @page frontmatter {
        @bottom { content: counter(page, lower-roman); }
    }

    @page frontmatter:blank {
        @bottom { content: normal; }
    }

If chapter 1 also resets page numbering, then the page numbers will be reset on the first *content page*, i.e. a non-blank page.

It is not always desirable to have no content on blank pages. Sometimes otherwise blank pages are required have some content, such as a notice saying "This page intentionally left blank". For example, in legal documents, this prevents people from mistaking a dangerous printing error for an intentionally blank page.

#### Page groups

When consecutive elements belong to the same named page but logically separate structures (such as individual chapters) Prince combines them into one *page group*. This causes it to apply the `:first` page selector to the first page of the whole page group only (the first page of chapter 1). Instead we usually want `:first` applied to the first page of each chapter.

This can happen either:

-   when chapters are separated by an element, such as `h1` which may have `: right` applied (this can be seen in );
-   or when each chapter is a block element such as a `div`.

Prince provides the `` property that can be used to start a new page group. It can be seen in applied to h1 elements in the body of the document.

``
    div.body h1 {
        : right;
        : start;
        ...
    }

`` also forces a page break, overriding any properties that attempt to avoid page breaks. The more specific `left` and `right` page take precedence over `prince-page-group`.

### Controlling pagination

Prince will create page breaks automatically when new content will not fit on a page. Sometimes it is useful or necessary to control where page breaks should and should not be used. There are two ways to do this, and both are useful in different circumstances: page breaks can be added or prohibited with the properties, and you can control where, within a paragraph, a page break may occur with the properties.

#### Page breaks

The simplest case is when you want to explicitly create a page break. This is typically used at the beginning of a chapter, to start the new chapter on a new page.

``
    h1 {
        : page;
    }

`` is used to force a page break immediately before an `h1` element, New chapters are often started on the *recto* pages in text books, this is usually the right page:

``
    h1 {
        : right
    }

Other values are `auto`, `avoid`, `avoid-page`, `avoid-column`, `left`, as well as `recto`, `verso` and `column`.

The previous example could therefore also have been written in the following, more semantic (and possibly more flexible) way:

``
    h1 {
        : recto
    }

The property `` may also be used to force a page break after an element.

Presentation slides

Presentation slides example

![A title page slide for a presentation, with a title and subtitle.](doc-latest/samples/slide-1.colour.png) ![An example of an overhead slide for a presentation. It has a title and a single paragraph.](doc-latest/samples/slide-2.colour.png)
Two overhead slides for a presentation. The slides use white on black for better contrast on most projectors, and a 4x3 aspect ratio. Download the [PDF](doc-latest/samples/slide.pdf) or the [HTML](doc-latest/samples/slide.html) and [CSS](doc-latest/samples/slide.css).

It is necessary to force a page break when creating overhead slides. This can be done by placing the content for each slide in a `<div class="slide">` and using `: page` as shown below. This example shows other styling that may be required to create presentation slides.

CSS

``
    @page {
        : 1280px 960px;
        @bottom-left {
            : "Presentation Title";
        }
        @bottom-right {
            content: counter(page);
        }
        : black;
        : white;
        : DejaVu Sans, sans-serif;
        : 16pt;
        : 96px;
    }

    @page:first {
        @bottom-left { content: normal }
        @bottom-right { content: normal }
    }

    div.centerpage {
        /*
         * Cause the content on these pages to begin part-way through
         * the page. This is useful for a title page.
         */
        : 33%;
    }

    body {
        font-size: 28pt;
        font-family: DejaVu Sans, sans-serif;
        color: white;
    }

    div.slide {
        : page;
    }

HTML

``
    <div class="slide">
      <h2>Slide Title</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>

The `font-family` and `color` properties are specified both in the `@page` and `body` rules, even though they're the same. This is required because the page regions are outside of the `body` and must be styled separately, likewise the content within `body` cannot be styled by the `@page` rule.

A rendered slide for this example is shown in . The example has been adapted from [slides (HTML+CSS)](https://github.com/yeslogic/prince-samples/tree/master/mfug_talk) for a presentation about the [Mercury programming language](http://mercurylang.org). This is part of our [samples repository](https://github.com/yeslogic/prince-samples). You are encouraged to use samples from the repository and contribute your own.

So far we have discussed forcing a page break, however suppressing page breaks is also important. For example, it is poor style to have a page break between a header and the first paragraph of a section. Therefore, the default Prince stylesheet will use the `` property to suppress page breaks immediately after headers:

``
    h1, h2, h3, h4, h5, h6 {
        : avoid
    }

If a heading occurs at the bottom of a page, it may be moved to the next page to keep it with the content that follows it, usually a paragraph.

Avoiding page breaks within an element is also important. For example, it is best to avoid breaks within a figure or table. This can be done with the `` property:

``
    .figure, table {
        : avoid
    }

If the figure or table would have been split across two pages, it may be moved to the next page to keep it in one piece. An element longer than one page will still need to be split across multiple pages.

The `` property cannot be used to create forced page breaks; its only valid values are `auto` and `avoid`.

These three properties can be applied to block-level elements, table rows and table row groups that occur within an in-flow element (ie. inside the normal flow of the document, not inside a float or an absolutely positioned block). Therefore the figure and table example only make sense when the figure or table is not floated.

Prince also supports the properties ``, `` and `` from the CSS 2.1 specification. However, you are encouraged to use the newer properties ``, `` and `` from the CSS Fragmentation Module Level 3.

Page breaks have similarities with column breaks, see .

##### Page breaks and decoration

When a page (or column) break occurs within a box (such as a div) its bottom and top borders are *cloned* so that they also appear at the bottom of the first section and the top of the second section of the box. This is shown in the left of . This is the default but may be set with the `` property, setting its value to `clone`.

Box decoration break sample

![The box on the left is completely enclosed by its border (clone); while the box on the right has no border at the bottom where it wraps onto the next page (slice).](doc-latest/samples/box-decoration-break-1.bw.png)
This figure shows the result of using the `` property. On the left the `clone` value is used while on the right `slice` is used. The [PDF](doc-latest/samples/box-decoration-break.pdf) and [HTML](doc-latest/samples/box-decoration-break.html) are available for download.

``
    div.box1 {
        : clone
    }

If instead you wish the borders to remain open, as if the box were simply *sliced* in half, as in the right of , then you can set this property to `slice`.

``
    div.box2 {
        : slice
    }

#### Widows and orphans

Just as breaking a page between a heading and the first paragraph below the heading can look bad, breaking the page after only one or two lines of a paragraph also looks bad. These stray lines are called *orphans*. The minimum number of orphans to allow can be specified with the `` property (the default is 1).

``
    p {
        : 2
    }

Likewise the minimum number of lines to move to a new page (*widows*) can be specified with the `` property (the default is 1).

``
    p {
        : 2
    }

It can be easy to confuse widows and orphans. However a mnemonic device can help: "An orphan is alone from the beginning \[of the paragraph\]; a widow is alone at the end \[of the paragraph\]". (Source [Widows and orphans — Wikipedia](https://en.wikipedia.org/wiki/Widows_and_orphans)).

### Trimming marks

When typesetting a magazine or flier it can be useful to print right to the edge of the paper. However most printers will refuse do do this. It is better to print on larger stock and then crop the paper to the correct size. If you use the `` property, Prince will create *bleed* and *trim* areas around your content (and the declared page size). This can be seen in the catalog example, adapted from the [Catalog sample](https://github.com/yeslogic/prince-samples/tree/master/website_samples/catalogue) in the [Prince samples repository](https://github.com/yeslogic/prince-samples).

Furniture catalogue example

![Furniture catalogue with bleed and trim areas for printing and cropping. The background image is larger than the page (but not the paper), by cutting where the crop marks indicate the background image extends right to the edge of the page.](doc-latest/samples/croparea-1.colour.png)
The furniture catalogue with bleed and trim areas for printing and cropping. Download the [PDF](doc-latest/samples/croparea.pdf) or the [HTML](doc-latest/samples/croparea.html) and [CSS](doc-latest/samples/croparea.css).

``
    @page{
        : 8.5in 10.5in;
        : 0;
        : url("images/CatalogueCover.jpg");
        : center;
        : 104%;
        : no-repeat;
        : crop cross;
        : 0.25in;
        : 0.25in;
    }

This example uses some of the properties that we introduced above, plus three new ones: ``, `` and ``. These options enable crop and cross marks and specify bleed and trim areas. Note that size of the content does not change when we add these options, the *page* is still 8.5in by 10.5in as specified by the `size` property. Instead 0.25in of bleed area and 0.25in of trim area has been added to each edge (1in total). Therefore we will need to print on 9.5in by 11.5in paper. Prince will print solid background colors and repeating pictures into the bleed area - we set the background size to 104% so that it would print into the bleed area.

Prince also allows the placement, length and width of the crop marks to be specified respectively with the ``, `` and `` properties.
