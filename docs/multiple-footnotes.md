---
title: Multiple Footnotes
---

Multiple Footnotes
------------------

You need  
[Prince extensions to floats](floats.html#float-extensions)

[Footnotes](footnotes.html#footnotes)

-   `float: footnote`

[Generated Content Functions](gen-content.html#gen-content-functions)

[Using target-counter()](gen-content.html#counter-target)

In some cases it might happen that you want to point several footnote calls at the same footnote. Prince offers a convenient mechanism to achieve this by combining regular footnotes with the generated content function `target-counter()`.

First we create our regular footnotes - the only extra step we need to do, is to provide each footnote with a unique ID.


    <p>
    This paragraph has a footnote.<span class="fn" id="fn1">First footnote.</span>
    </p>

When another foonote call needs to be pointing at this, already existing footnote, we have to create it manually by adding a link to this footnote's ID.


    <p>
    This paragraph refers to the first footnote.<a class="rfn" href="#fn1"></a>
    </p>

This footnote call will be created by using the generated content function `target-counter()` referencing the footnote counter.


    content: target-counter(attr(href), footnote);

When creating regular footnotes, Prince automatically takes care of the styling of the footnote calls, but the manually created ones need to be explicitly styled. The following are the default rules that style a footnote call - here shown with all the rules necessary for creating all the footnote calls:


    .fn {
        float: footnote;
    }

    .rfn {
        color: inherit;
        text-decoration: none;
        content: target-counter(attr(href), footnote);
        vertical-align: super;
        line-height: none;
        font-size: 83%;
    }

