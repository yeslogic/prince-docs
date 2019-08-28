Color Management
----------------

### Introduction

The purpose of color management is to keep the appearance of colors consistent as they are converted between different devices and media. This is e.g. of advantage when preparing a PDF file on a computer screen before sending it to a printer - the desirable result will be to have a print that looks as close as possible to the display on the screen. Perfect equivalence is not possible, also not least because of the difference between a device with reflected light, such as paper, and one with direct light, such as a screen, but color management helps to achieve a close match in perception.

The conversion of color is facilitated by profiling devices; the set of data that characterizes a device or color space, i.e. the color attributes of the device, is kept as an ICC color profile. Color profiles are often embedded in image files to denote the color space of the image. When the color space is not known, color values are essentially arbitrary numbers without a physical interpretation.

The aim of Prince, within a color-managed workflow, is to preserve color information (namely, color profiles) from the input documents and images, through to the PDF output file.

### Color Management and PDF Profiles

As described in the section, both PDF/A and PDF/X profiles impose restrictions on the features that may be used in a PDF file, including restrictions on color.

PDF/A and PDF/X files have an output intent that defines the intended output color space of the PDF file. In Prince, the output intent color profile is selected using the [`--pdf-output-intent`](doc-latest/doc-refs.html#cl-pdf-output-intent) command-line option, or using the `` property inside a [`@prince-pdf`](doc-latest/doc-refs.html#at-prince-pdf) at-rule. Both take a filename or URL to an ICC profile as its value.

The URL specified with the [`--pdf-output-intent`](doc-latest/doc-refs.html#cl-pdf-output-intent) command-line option or the `` property will be resolved relative to the base URL of the style sheet or document in which the rule is, and needs to point to an existing color profile file.

``
    @prince-pdf {
        prince-pdf-output-intent: url("ISOcoated_v2_eci.icc")
    }

For PDF/X, the output intent must be given as it describes the intended printing process. For PDF/A, Prince assumes an sRGB ICC profile if an output intent is not given.

Briefly, the restrictions on color imposed by PDF/X are:

PDF/X-1  
-   All color data must be Grayscale, CMYK or named Spot Colors;
-   Transparency is not allowed.
-   All colors must be characterized by the output intent - Prince implicitly performs color conversions.

PDF/X-3  
-   Allows other color spaces but colors must be device-independent, or else characterized by the output intent;
-   Transparency is not allowed.

PDF/X-4  
-   Allows other color spaces but colors must be device-independent, or else characterized by the output intent;
-   PDF transparency is supported.

PDF/A requires that all colors to be device-independent, or else characterized by the output intent (thus making them device-independent). Transparency is not allowed.

### Color Management in Prince

Prince supports RGB, RGBA, HSL, HSLA, CMYK, and named spot colors. For Prince's color handling, please see the section.

As CSS defines RGB colors in the sRGB color space, Prince tags those colors with an sRGB ICC profile in the PDF output. See also the section on below.

CMYK colors specified using the `cmyk()` function syntax, or equivalent `device-cmyk()` syntax, represent device-dependent colors, so they will be left as such in the PDF when possible. Device-dependent color is not allowed in PDF/A or PDF/X, so those CMYK colors will be assumed to be either in the output intent color space (if it is CMYK), or else the color space of the fallback CMYK profile. See the command-line option [`--fallback-cmyk-profile`](doc-latest/doc-refs.html#cl-fallback-cmyk-profile) in the section, or the `` property.

    prince input.html
           --pdf-profile=PDF/A-1b
           --pdf-output-intent=sRGB.icc
           --fallback-cmyk-profile=ISOcoated_v2_eci.icc

``
    @prince-pdf {
        prince-pdf-output-intent: url("sRGB.icc");
        prince-fallback-cmyk-profile: url("ISOcoated_v2_eci.icc");
    }

Prince preserves the ICC profiles embedded in bitmap images, unless directed not to (see the `ignore-icc-profile` value of the `` property). If an image does not have an embedded ICC profile, the behavior depends on the color model of the image. Untagged RGB images will be assumed to be in the sRGB color space. Untagged CMYK images will, when necessary, be assumed to be either in the output intent color space (if it is CMYK), or else the color space of the fallback CMYK profile. Untagged grayscale images will be left as DeviceGray in the PDF (in PDF/A and PDF/X, it means it is characterized by the output intent color space).

### Color conversion

Prince will convert all the colors in a document to a single color space if the [`--convert-colors`](doc-latest/doc-refs.html#cl-convert-colors) command-line option or the `` property is used. The destination color space is specified with the [`--pdf-output-intent`](doc-latest/doc-refs.html#cl-pdf-output-intent) option (or the `` property), even when not producing PDF/A or PDF/X files.

Prince automatically converts colors to the output intent color space only when producing PDF/X-1a files. Files in any of the other profiles need also the [`--convert-colors`](doc-latest/doc-refs.html#cl-convert-colors) command-line option or the `` property if colors are to be converted.

### Rich black and true black

In printing, "rich black" is a mixture of CMYK ink colors to produce a darker tone than using the black ink alone ("true black").

The property `` controls the encoding of CSS RGB values representing black and grays, i.e. RGB colors with equal values of red, green and blue.

When the value `use-true-black` is used, such an RGB value will be encoded in the DeviceGray color space in the PDF. A CMYK printer should print the gray level using only the black ink. This is the default setting of Prince.

On the other hand, the `use-rich-black` value instructs Prince to keep all RGB colors as RGB in the PDF. A CMYK printer should print RGB colors using a mixture of all four CMYK inks.

``
    @prince-pdf {
        prince-pdf-color-options: use-rich-black;
    }

Color conversion takes into account the `use-true-black` value when converting CSS RGB values to CMYK. True blacks and grays will be converted to CMYK with only non-zero values in the K channel. Note, however, that this does not affect bitmap images.

### Page color space

The property `` controls the color space of pages in the PDF file. It affects the compositing of transparent content onto the page by selecting the color space in which compositing is performed. Prince currently defaults to the RGB color space. It may be useful to set this property to avoid converting the colors of transparent content before it is composited onto the page, possibly resulting in distorted colors.
