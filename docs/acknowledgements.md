---
title: Acknowledgements
---

Prince uses several open source libraries - for a complete list also showing the used version numbers, please run Prince with the following command-line option:

```bash
    $ prince --credits
```

## Open Source Libraries

<dl>

<dt id="mercury">Mercury</dt>
<dd>
Prince is written in the <a href="https://mercurylang.org">Mercury</a> programming language and uses the Mercury core libraries and the Mercury Cairo bindings.
</dd>

<dt id="boehmgc">Boehm-Demers-Weiser Garbage Collector</dt>
<dd>
The <a href="https://www.hboehm.info/gc/">Boehm-Demers-Weiser Garbage Collector</a> library is used by the Mercury runtime for garbage collection, and uses the <a href="https://github.com/ivmai/libatomic_ops/">libatomic_ops</a> library for memory management.
</dd>

<dt id="mimalloc">mimalloc</dt>
<dd>
Prince also uses the <a href="https://github.com/microsoft/mimalloc">mimalloc</a> library for memory management.
</dd>

<dt id="libgomp">GNU libgomp</dt>
<dd>
The <a href="https://gcc.gnu.org/onlinedocs/libgomp/">GNU libgomp</a> library is used by Prince for OpenMP support.
</dd>

<dt id="libxml2">libxml2</dt>
<dd>
The <a href="https://gitlab.gnome.org/GNOME/libxml2/-/wikis/home">libxml2</a> library is used by Prince to load XML and HTML documents.
</dd>

<dt id="libcurl">libcurl</dt>
<dd>
The <a href="https://curl.se/">libcurl</a> library is used by Prince to load resources from HTTP URLs.
</dd>

<dt id="openssl-nss">OpenSSL and NSS</dt>
<dd>
The <a href="https://www.openssl.org/">OpenSSL</a> and <a href="https://firefox-source-docs.mozilla.org/security/nss/index.html">NSS</a> libraries are used by Prince to load resources from secure HTTPS URLs.
</dd>

<dt id="fontconfig">Fontconfig</dt>
<dd>
The <a href="https://www.fontconfig.org/">Fontconfig</a> library is used by Prince on Linux to scan for installed system fonts.
</dd>

<dt id="freetype">FreeType</dt>
<dd>
The <a href="https://freetype.org/">FreeType</a> library is used by Prince to load and process TrueType font files.
</dd>

<dt id="ctan-hyph">CTAN hyphenation files</dt>
<dd>
Prince uses the hyphenation pattern files from the <a href="https://ctan.org/tex-archive/language/hyph-utf8/tex/patterns/txt">CTAN archive</a>.
</dd>

<dt id="libthai">libthai</dt>
<dd>
The <a href="https://linux.thai.net/projects/libthai">libthai</a> library is used by Prince to handle word breaking in the Thai language.
</dd>

<dt id="datrie">libdatrie</dt>
<dd>
The <a href="https://github.com/tlwg/libdatrie">libdatrie</a> library is used by Prince to load the Thai dictionary.
</dd>

<dt id="giflib">GIFLIB</dt>
<dd>
The <a href="https://giflib.sourceforge.net/">GIFLIB</a> library is used by Prince to load GIF image files.
</dd>

<dt id="libavif-aom">libavif and aom</dt>
<dd>
The <a href="https://github.com/AOMediaCodec/libavif">libavif</a> and <a href="https://aomedia.googlesource.com/aom/">aom</a> libraries are used by Prince to load AVIF image files.
</dd>

<dt id="libjpeg">libjpeg<i>-turbo</i></dt>
<dd>
The <a href="https://libjpeg-turbo.org/">libjpeg<i>-turbo</i></a> library is used by Prince to load JPEG image files.
</dd>

<dt id="libpng">libpng</dt>
<dd>
The <a href="https://www.libpng.org/pub/png/">libpng</a> library is used by Prince to load PNG image files.
</dd>

<dt id="libtiff">libtiff</dt>
<dd>
The <a href="https://libtiff.gitlab.io/libtiff/">libtiff</a> library is used by Prince to load TIFF image files.
</dd>

<dt id="libwebp">libwebp</dt>
<dd>
The <a href="https://developers.google.com/speed/webp">libwebp</a> library is used by Prince to load WebP image files.
</dd>

<dt id="littlecms">Little CMS</dt>
<dd>
<a href="https://www.littlecms.com/">Little CMS</a> (lcms2) library is used by Prince for color management.
</dd>

<dt id="cairo-pixman">Cairo and Pixman</dt>
<dd>
The <a href="https://www.cairographics.org/">Cairo</a> and <a href="https://www.pixman.org/">Pixman</a> libraries are used by Prince for rasterization.
</dd>

<dt id="zlib">zlib</dt>
<dd>
The <a href="https://www.zlib.net/">zlib</a> library is used by Prince to perform compression of PDF files.
</dd>

</dl>

Prince also uses the [Rust](https://rust-lang.org/) standard library to load the following [Rust crates](https://crates.io/):

* aliasable
* alloc-no-stdlib
* alloc-stdlib
* allsorts
* bitflags
* bitreader
* brotli-decompressor
* byteorder
* cfg-if
* const-cstr
* core-foundation
* core-foundation-sys
* core-graphics
* core-text
* crc32fast
* dlib
* either
* encoding_rs
* flate2
* fontconfig
* foreign-types
* foreign-types-shared
* glyph-names
* heck
* itertools
* lazy_static
* libc
* libloading
* libz-sys
* log
* num-traits
* once_cell
* ouroboros
* ouroboros_macro
* pathfinder_geometry
* pathfinder_simd
* proc-macro-error
* proc-macro-error-attr
* proc-macro2
* quote
* rustc-hash
* static_assertions
* syn
* tinyvec
* tinyvec_macros
* ucd-trie
* unicode-bidi
* unicode-canonical-combining-class
* unicode-case-mapping
* unicode-general-category
* unicode-ident
* unicode-joining-type
* unicode-linebreak
* winapi
* winapi-x86_64-pc-windows-gnu
* yeslogic-fontconfig-sys
* yeslogic-unicode-script
