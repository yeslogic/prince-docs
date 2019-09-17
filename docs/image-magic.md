---
title: Image Magic
---

Image Magic
-----------

You need  
[Images](images.html#images)

[CSS and Images](images.html#images-css)

-   `prince-image-magic`

The `prince-image-magic` property performs various image-related, Prince-specific tasks that do not fit into other existing CSS properties. It applies magic to images!

To reduce the PDF file size, JPEG images can be recompressed at a lower quality level by using the function `recompress-jpeg(quality%)` with the required quality percentage as argument.

PNG images can be converted to JPEG images with the keyword `convert-to-jpeg` (using the default compression rate), or they can also be converted to JPEG with the required compression rate as argument with the function `convert-to-jpeg(quality%)`.

Prince usually strips unnecessary metadata from JPEG images to help contain size. But it might happen that you need that extra data, possibly for further downstream processing. The keyword `jpeg-verbatim` inhibtis this stripping and includes the images without modification in the PDF file.

Two more keywords perform more obscure tasks that might be required in very specific circumstances: the keyword `ignore-icc-profile` causes Prince to ignore any ICC color profile embedded in the image, useful e.g. in those cases when the embedded ICC profile is broken; and `snap-to-integer-coords` can be used to avoid blurring of images in some PDF viewers.

Several of the values can be combined, to perform more than one magic on images - for details please check the grammar of the `prince-image-magic` property.

``
    img {
        prince-image-magic: recompress-jpeg(50%) convert-to-jpeg(50%) snap-to-integer-coords;
    }

This example recompresses all JPEG images to 50%, converts any non-JPEG images to JPEG with the same quality, and snaps them all to integer coordinates to avoid blurring in some PDF viewers.

