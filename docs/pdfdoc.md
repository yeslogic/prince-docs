---
title: Documentation in PDF Format
---

Documentation in PDF Format
---------------------------

Documentation for Prince can easily be viewed online in the browser. But there might be circumstances when it is convenient to have the documentation in one file, stored locally - and which format would be most suitable, if not PDF?

And since Prince is a tool for creating PDF files from HTML, it could also be your choice of tool to create a PDF version of the documentation!

The HTML version of the documentation is served in three distinct files:

-   the [Installation Guide](doc-install.html),
-   the [User Guide](doc-prince.html) for the latest version, and
-   the [References](doc-refs.html).

Additionally, each file needs a few more files to display correctly - including images, CSS files to style the documents, as well as JavaScript files, necessary not just for browser-only features like scrolling to the right place in certain circumstances, but also for the core of the Prince [JavaScript Support](js-support.md#js-support) documentation.

To create a PDF version of the documentation we need to run just one simple command line:


    prince --javascript http://www.princexml.com/doc/ http://www.princexml.com/doc-prince/ http://www.princexml.com/doc-refs/ -o prince-documentation.pdf

This command produces the documentation in PDF format, including a cover page, the [User Guide](doc-prince.html) and the [References](doc-refs.html) section.

If you are using the Prince GUI on Windows, you need to paste the three URLs for the cover page, the User Guide and the References by selecting the option "Add URL" three times. Next, you select the checkbox "Merge all documents into a single PDF file" and select a location where to save this file to. Make sure that the checkbox for "Enable Document Scripts" is checked, and click on the "Convert" button to convert the documents into your documentation in PDF format.

The [Installation Guide](doc-install.html) is not included: since Prince is needed to create your documentation PDF, we assume that you have already installed it!

