---
title: The "Two-Pass" Solution
---

The "Two-Pass" Solution
-----------------------

You need  
[JavaScript in Printed Media](javascript.md#js-print)

[Event Handling](javascript.md#js-event)

[Console Access](javascript.md#js-console)

-   `console.log()`

One limitation of producing a document intended for print is its non-interactive, static nature: a document cannot be modified after it is deemed to be ready for print. See [JavaScript in Printed Media](javascript.md#js-print).

JavaScript can be run twice only: the first time it is run before layout, where it interacts with and modifies the layout (and the DOM structure). Once layout is finished, JavaScript can be run a second time from the `complete` event handler - see [Event Handling](javascript.md#js-event). However, this time it is only allowed to inspect the layout and cannot modify the DOM.

A problematic situation arises when you want to modify your document after layout has finished - a typical scenario would be when you want an index to be created with correct page numbers. The content depends on the layout of the document itself.

(Please note that this only affects the creation of an index - a simple table of contents or a reference to a place on another page can easily be achieved with [target-counter links](gen-content.md#counter-target).)

Typically Prince is run a first time to prepare the layout of the document and run JavaScript after layout has finished, collecting the output of the script to append it to the document with the help of the `console.log()` - see [Console Access](javascript.md#js-console).

Now the document would be ready for generating the PDF - Prince is run a second time, producing the desired document.

Here is a minimalistic two-pass solution where the document is adorned with a ToC and index:


    wget http://www.princexml.com/howcome/2015/index/musick.html -O musick.html;
      prince --javascript musick.html >>musick.html;
      prince --javascript musick.html -o musick.pdf

Another use of the two-pass solution is to create changebars - see the description [here](http://www.princexml.com/forum/topic/3516/changebars).

