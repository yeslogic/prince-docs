---
title: Applying JavaScript in Prince
---

Applying JavaScript in Prince
-----------------------------

Prince is not running JavaScript by default - document scripts can be enabled by specifying the [`--javascript`](command-line.md#cl-javascript) option on the command-line. Prince will then execute all JavaScript found in the HTML `script` elements in the input document.

External scripts can be run by specifying one or more [`--script=FILE`](command-line.md#cl-script) options on the command-line. These scripts will always be executed, regardless of whether document scripts have been enabled or not.

JavaScript functions can also be called from CSS generated content, by using the `prince-script()` syntax for referencing [Script Functions](gen-content.md#scriptfunc). Please note that scripts contained in the `prince-script()` function are treated as document scripts, and hence need to be explicitly enabled.

Prince also supports PDF scripts, known as "Document Action" scripts - see [PDF Actions](pdf-output.md#pdf-actions). They get included in documents through CSS, too, but will always be run. Note, however, that these scripts are dependent on the PDF viewer, and in many cases might only work in Adobe Acrobat products.

