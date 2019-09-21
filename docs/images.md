---
title: Images
---

Images
------

Prince supports JPEG, PNG, TIFF and GIF images as well as [Scalable Vector Graphics (SVG)](svg.md#svg).

Images can be included in XHTML and DocBook documents using the appropriate image elements, which are pre-defined in the default style sheets.

Images can also be included in arbitrary XML documents using the CSS `content` property, which can be used to specify the image filename.

Furthermore, images are widely used in style sheets for the background. CSS allows also for several mechanisms to manipulate images and background images.

Please note that Prince tries to preserve the ICC color profile embedded in images - for details see the [Color Management](color-management.md#color-management) section.

### Images in XHTML

The `img` element is used to include images in XHTML documents.

XML


    <img src="picture.jpg" alt="A Nice Picture"/>

### Images in DocBook

The `imagedata` element is used to include images in DocBook documents.

XML


    <mediaobject>
        <imageobject>
          <imagedata fileref="picture.jpg"/>
        </imageobject>
    </mediaobject>

### Images in Arbitrary XML

Images can be included in arbitrary XML documents by using the CSS `content` property to specify the image filename.

The `content` property can specify the image filename directly, or it can take the filename from an attribute of the element to which it has been applied.

CSS


    picture { content: url("picture.png") }

XML


    <para> A nice <picture /> here. </para>

The `content` property directly specifies the filename of the image that will be used as the content of the `picture` element.

CSS


    picture { content: attr("src", url) }

XML


    <para> A nice <picture src="picture.tiff" /> here. </para>

The `content` property specifies that the content of the `picture` element will be an image loaded from the filename specified by the `src` attribute of the element.

### CSS and Images

Images can be added to a document as content or decoration, and can be modified with the help of CSS properties.

#### Background Images

Several properties are available to add background images: `background-image` is used to add an image to a page, while `background-position`, `background-attachment` and `background-repeat` are used to position it precisely, also defining its appearance. See also [Background](css-box.md#background).

Images can also be added to style a list with the property `list-style-image` (see also [List marker style](lists.md#list-marker-style)).

#### Image Orientation

Usually images have the correct orientation when included in a document. However, it can be important to honor the orientation field in the EXIF data of JPEG and TIFF images, which can be done with the `image-orientation` property.

The property applies only to content images (e.g. replaced elements and generated content), not decorative images (such as `background-image`).

#### Image Size

CSS properties also control the size of images in print. Unless an explicit size for an image is specified by using the `width` and `height` properties, Prince will determine the intrinsic size from the image resolution (DPI), which can be overridden using the `prince-image-resolution` property:


    prince-image-resolution: 300dpi;        /* set an explicit DPI */
    prince-image-resolution: normal;        /* 1 image pixel maps to 1px unit */
    prince-image-resolution: auto, normal;  /* auto-detect, fallback to normal */
    prince-image-resolution: auto, 96dpi;   /* auto-detect, fallback to 96dpi */

Not all images have an internal resolution set, so sometimes it is necessary to specify an explicit resolution. Alternatively, specifying a resolution of `normal` means that an image that is 100 pixels wide, will be the same size on the page as a block that is 100px units wide.

The property `prince-background-image-resolution` does the same for background images.

The property `object-fit` offers another mechanism to determine how an image should be resized to fit its container. The position of the image in its container can be determined with the `object-position` property.

The `object-fit` and `object-position` properties are not specific to images, but apply to all replaced content, including content inserted as [Generated Content](gen-content.md#gen-content) via the `content` property.

Please note that specifying `prince-image-resolution` and `prince-background-image-resolution`, or `object-fit`, only affects the default DPI of images, ie. it makes them physically bigger or smaller on the page, and - it does not affect the number of pixels in the image, and thus the PDF file size will be the same.

To reduce the PDF file size, JPEG images can be recompressed at a lower quality level, or PNG images be converted to JPEG, with the `prince-image-magic` property. See also [Image Magic](image-magic.md#image-magic).

