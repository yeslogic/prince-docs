Watermarks
----------

You need  
-   `@prince-overlay`

When producing a PDF, it might be desirable to include a watermark, visible on all pages. In Prince it is easy to do so with CSS.

In order to repeat it on all pages, the watermark needs to be placed in a [`@page`](doc-latest/doc-refs.html#at-page) at-rule. We shall place it in the page region `@prince-overlay` (see ) and create the watermark with generated content (see ):

``
    @page {
       @prince-overlay {
          color: rgba(0,0,0,0.8);
          content: "Watermark";
          font-size: 20pt;
       }
    }

The overlay can be styled in all possible ways and it can be aligned in other places than middle center:

``
    @page {
       @prince-overlay {
          content: "Watermark";
          vertical-align: top;
       }
    }

Currently it is only possible to have one overlay, but you could flow an entire element having multiple individually positioned contents (see ).

The styled watermark can be saved into a `watermark.css` file, which will be called when generating the document:

``
    prince --style=watermark.css myfile.html -o myfile_with_watermark.pdf


