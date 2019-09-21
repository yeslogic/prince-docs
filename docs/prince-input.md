---
title: Prince Input
---

Prince Input
============

Prince takes HTML or XML files as input, and converts them to PDF files. Additionally, CSS style sheets can be provided for styling the documents, and JavaScript files can be used for additional manipulation of the input.

See the sections [Applying Style Sheets in Prince](apply-css.md#apply-css), [Applying JavaScript in Prince](apply-javascript.md#applying-javascript) and [XML Input](xml.md#xml-input) for details.

The input files can be provided in several ways:

-   the command line (see [Command-line Reference](doc-refs.md#command-line)),
-   the GUI, or
-   through wrapper scripts (see [Server Integration](server-integration.md#server-integration)).

Input files can either be local files, or remote files that will be fetched over HTTP or HTTPS, in which case the URL to the file, or to the site, needs to be provided. Prince will automatically create the PDF output once the input pages and files have finished loading.

