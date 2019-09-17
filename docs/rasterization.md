---
title: Rasterization
---

Rasterization
-------------

Prince allows for the output of a rasterized image rather than, or in addition to a PDF output. This produces a JPEG or PNG image of the content, which can be convenient when e.g. planning to use it as a quick preview or thumbnail of the PDF content to display on a website, as can e.g. be seen in the [Sample Documents](sample-docs.html) section on this website.

Rasterization is enabled with the [`--raster-output`](doc-refs.html#cl-raster-output) command-line option, which also defines the template of the file naming. The output format can be chosen either based on the extension of the file name, or by explicitly indicating it.

``
      prince doc.html --raster-output=page_%02d.png

Furthermore the range of pages to rasterize and the resolution of the raster output can be tweaked in order to determine the number of pages in rasterized format, and the size of the images.

``
      prince doc.html --raster-output=title-thumbnail.jpg --raster-pages=first --raster-dpi=24

If you want to rasterize the HTML to an image format that supports transparency (PNG, not JPEG) and have a transparent background, in order to composite it with something else later, the command-line option [`--raster-background`](doc-refs.html#cl-raster-background) can be used with the value `transparent`.

A full list of rasterization possibilities can be found in the [Raster Output Options](doc-refs.html#cmd-raster) section.

