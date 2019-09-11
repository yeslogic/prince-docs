---
title: Command-line Reference
---

Command-line Reference
======================

Prince may be called from the command-line with the following arguments:

`prince OPTIONS     FILES` \[`-o` <span class="replaceable">PDF</span>\]

Please note that on Windows, Prince can be called from the command-line by running the `prince.exe` file found in the `Prince\engine\bin` folder of the Prince installation:

`"C:\Program Files (x86)\Prince\engine\bin\prince.exe" OPTIONS     FILES` \[`-o` <span class="replaceable">PDF</span>\]

Examples
--------

`prince file.xml`

Convert `file.xml` to `file.pdf`.
`prince doc.html` -o `out.pdf`

Convert `doc.html` to `out.pdf`.
`prince http://example.com` -o `out.pdf`

Convert the `http://example.com` webpage to `out.pdf`. Note that it is necessary to specify the output file when the input is a HTTP or HTTPS URL.
`prince         -s style1.css` -s `style2.css` `input.xml` -o `output.pdf`

Convert `input.xml` to `output.pdf`, applying two user style sheets.
`prince         doc1.html` `doc2.html` -o `out.pdf`

Combine `doc1.html` and `doc2.html` into a single PDF file, `out.pdf`.
`prince doc.html` --raster-output=`doc_%d.png`

Process `doc.html` and rasterize the output to the series of files `doc_1.png`, `doc_2.png`, `doc_3.png` etc.
Specifying input and output
---------------------------

The command-line must contain the name of the input file to process. An input filename consisting of a single hyphen "-" will cause Prince to read from the standard input stream.

The output file name can be specified on the command-line using the `-o` command-line option. An output filename consisting of a single hyphen "-" will cause Prince to write to the standard output stream.

If the output file name is omitted, the output will be placed in a file with the same name as the input, but with a PDF file extension.

It is necessary to specify the output file when the input is a HTTP or HTTPS URL.

Any of the `--long` command-line options can either be passed as a single command-line argument with an equals sign (=), or as two command-line arguments with space:

``
      --output out.pdf
      --output=out.pdf

If the value of a command-line option contains a space or other command characters, the value has to be written between quotation marks.

If rasterization is used, the `-o` option is optional. If not specified, a PDF output will not be generated.

Options
-------

The command-line may include the options described below:

### General Options

`-h`, `--help`  
Display usage and options.

`--version`  
Display version information.

`--credits`  
Display credits and acknowledgments.

### Logging Options

`-v`, `--verbose`  
Log informative messages.

`--debug`  
Log debug messages.

`--log=FILE`  
Append log messages to a file.

`--no-warn-css-unknown`  
Do not warn about unknown CSS features.

`--no-warn-css-unsupported`  
Do not warn about unsupported CSS features.

`--no-warn-css`  
Do not warn about CSS problems - this option implies the above two options.

### Input Options

 `-i FORMAT`, `--input=FORMAT`   
Set input format \[`auto` | `xml` | `html`\].

 `-l`, `--input-list=FILE`   
Read input file list from specified file.

 `--baseurl=URL`   
Specify the base URL of the input document.

 `--remap=URL=DIR`   
Rather than retrieving documents beginning with `URL` get them from the local directory `DIR`. This option can be used multiple times to specify more than one remapping. It cannot be used with `--fileroot`.

Note that Prince does not know which file to use when the path maps to a directory (in other words, an index file). If `http://www.example.com/` is requested, and mapped to `example-com` it does not know whether to open `example-com/index.html`, `example-com/index.php` or any other file as this is site dependent. In this case Prince will report an error for that resource.

 `--fileroot=DIR`   
Specify the root directory for absolute filenames (deprecated).

 `--xinclude`   
Enable XInclude and XML external entities (XXE). Note that XInclude only applies to XML files. To apply it to HTML files, the input format needs to be specified with the [`--input`](#cl-input) command-line option.

 `--xxe`, `--xml-external-entities`   
Enable XML external entities (XXE).

 `--no-local-files`   
Disable access to local files.

### Network Options

`--no-network`  
Disable network access (prevents HTTP downloads).

`--no-redirects`  
Disable all HTTP and HTTPS redirects.

`--auth-user=USER`  
Specify the username for HTTP authentication.

`--auth-password=PASS`  
Specify the password for HTTP authentication.

 `--auth-server=HOST[:PORT`\]   
Send username and password credentials to the specified server only. (The default is to send them to any server which challenges for authentication).

 `--auth-scheme=SCHEME`   
Send username and password credentials only for requests with the given scheme, either `http` or `https`

`--auth-method=METHOD`  
Specify a comma separated list of HTTP authentication methods to enable. Valid entries are: `basic`, `digest`, `ntlm` and `negotiate`. The default is `basic`.

`--auth=URL`  
Specify a URL with credentials for HTTP authentication: `[SCHEME:]//USER:PASS@HOST[:PORT]`. Unlike the preceding options, `--auth` may be used multiple times. The username and password must be percent-encoded.

`--no-auth-preemptive`  
Do not send credentials to named servers until an authentication challenge is received. When multiple authentication methods are enabled, an initial request may be required to discover the methods supported by the remote site.

`--http-proxy=PROXY`  
Specify the HTTP proxy server.

`--http-timeout=SEC`  
Specify the HTTP timeout in seconds.

`--cookie=COOKIE`  
Set a value for the `Set-Cookie` HTTP header value. `--cookie` may be used multiple times.

`--cookiejar=FILE`  
Specify a file containing HTTP cookies.

`--ssl-cacert=FILE`  
Specify an SSL certificate file.

`--ssl-capath=PATH`  
Specify an SSL certificate directory.

`--ssl-cert=FILE`  
Specify an SSL client certificate file. On MacOS, specify a PKCS\#12 file containing a client certificate and private key. Client authentication is not supported on Windows.

`--ssl-cert-type=TYPE`  
Specify the SSL client certificate file type (PEM, DER). The default is PEM. This option is not supported on MacOS or Windows.

`--ssl-key=FILE`  
Specify an SSL private key file. This option is not supported on MacOS or Windows.

`--ssl-key-type=TYPE`  
Specify the SSL private key file type (PEM, DER). The default is PEM. This option is not supported on MacOS or Windows.

`--ssl-key-password=PASS`  
Specify passphrase for the private key.

`--ssl-version=VERSION`  
Set the minimum version of SSL to allow. May be one of: `default` (let [libcurl](doc-latest/doc-refs.html#acknowledgments) choose), `tlsv1`, `tlsv1.0`, `tlsv1.1` or `tlsv1.2`.

`--insecure`  
Disable SSL verification (not recommended).

`--no-parallel-downloads`  
Disable downloading multiple HTTP resources at once.

### JavaScript Options

`--javascript`  
Enable JavaScript in HTML documents.

`--script=FILE`  
Run an external script.

### CSS Options

 `-s FILE`, `--style=FILE`   
Apply an external style sheet.

 `--media=MEDIA`   
Specify the media type (eg. print, screen).

 `--page-size=SIZE`   
Specify the page size (eg. A4, "155mm 190mm", etc). The syntax is the same as the `size` property in [`@page`](doc-latest/doc-refs.html#at-page) rules, which can take two values for horizontal and vertical dimensions. On the command-line it needs to be written between quotes as a single argument. See also [Page size](doc-latest/paged.html#page-size) and [Page Size Keywords](doc-latest/doc-refs.html#page-size-keywords).

 `--page-margin=MARGIN`   
Specify the page margin (eg. 20mm).

`--no-author-style`  
Ignore author style sheets.

`--no-default-style`  
Ignore default style sheets.

### PDF Output Options

 `-o FILE.PDF`, `--output=FILE.PDF`   
Specify the output PDF file.

 `--pdf-lang=LANG`   
Specify the PDF document's language.

 `--pdf-profile=PROFILE`   
Specify the PDF profile (see [PDF Versions and Profiles](doc-latest/pdf-profiles.html#pdf-profiles)) to use.

 `--pdf-output-intent=ICC`   
Specify the ICC profile to use.

 `--attach=FILE`   
Attach a file to the PDF.

`--no-artificial-fonts`  
Disable synthesis of missing bold/italic fonts.

`--no-embed-fonts`  
Disable font embedding in PDF output.

`--no-subset-fonts`  
Disable font subsetting in PDF output.

`--no-system-fonts`  
Disable system fonts in PDF output. Only fonts defined with [`@font-face`](doc-latest/doc-refs.html#at-font-face) rules in CSS will be available.

`--force-identity-encoding`  
Ensure that all fonts are encoded in the PDF using their identity encoding (directly mapping to glyph indices), even if they could have used MacRoman or some other encoding.

`--no-compress`  
Disable compression of PDF output.

`--no-object-streams`  
Disable PDF object streams.

`--convert-colors`  
Convert colors to output intent color space.

`--fallback-cmyk-profile=ICC`  
Set fallback ICC profile for uncalibrated CMYK.

`--tagged-pdf`  
Enable tagged PDF.

`--css-dpi`  
Changes the DPI of the "px" units in CSS, which defaults to 96dpi. It can be useful if you have a layout designed in pixels and you need to scale it down for print.

### PDF Metadata Options

`--pdf-title=TITLE`  
Set PDF document title.

`--pdf-subject=SUBJECT`  
Set PDF document subject.

`--pdf-author=AUTHOR`  
Set PDF document author.

 `--pdf-keywords=KEYWORDS`   
Set PDF document keywords.

`--pdf-creator=CREATOR`  
Set PDF document creator.

`--pdf-xmp=XMP`  
Include additional XMP metadata in the PDF. The argument is an XMP file, from which the data is taken.

### PDF Encryption Options

`--encrypt`  
Encrypt PDF output.

`--key-bits=NUM`  
Set encryption key size to either 40 or 128.

`--user-password=PASS`  
Set PDF user password.

 `--owner-password=PASS`   
Set PDF owner password.

`--disallow-print`  
Disallow printing of PDF output.

`--disallow-copy`  
Disallow copying from PDF output.

`--disallow-annotate`  
Disallow annotation of PDF output.

`--disallow-modify`  
Disallow modification of PDF output.

### Raster Output Options

Rasterization is enabled with the `--raster-output` option below. When this is used the PDF output option (`-o`) is optional.

 `--raster-output=TEMPLATE`   
Enable raster output. The output files will be named based on the template. Prince will replace every '`%[WIDTH]d`' with the current page number. The optional <span class="replaceable">WIDTH</span> value gives the number of characters the page number should take within the file name. Smaller page numbers will be padded to the left with either spaces, or if the width begins with a zero, with zeros.

For example `--raster-output=page_%02d.png` will cause Prince to generate `page_01.png`, `page_02.png`, …, `page_10.png`, `page_11.png` etc.

Prince also accepts \``-`' meaning the standard output stream.

 `--raster-format=FORMAT`   
Set the format for the raster output. Valid formats are: `auto` (guess based on file extension, the default), `png` or `jpeg`. If Prince does not recognize the file extension, or `--raster-output` is '`-`', then it is necessary to provide this option.

 `--raster-pages=PAGE`   
Set the range of pages to be rasterize. Valid ranges are `all` (the default), `first` and `NUM` (a single page).

 `--raster-dpi=DPI`   
Set the resolution of raster output (The default is 96 dots per inch).

 `--raster-threads=NUM`   
Set the number of threads to use for multi-threaded rasterization. By default Prince chooses the number of threads based on the number of cores and hyperthreads your system provides.

 `--raster-background=BACKGROUND`   
Set the background - allowed values are `transparent` or `white`. It can be used when rasterizing to an image format that supports transparency (PNG, not JPG) and have a transparent background, so it can be composited with something else later.

### Utility Options

`--scanfonts FILES...`  
Scan font files and create a CSS file.

### Advanced Options

`--capture DIR`
`--replay DIR`  
The capture/replay system saves a copy of all the information in a job to a specified directory, conveniently allowing it to be replayed later for debugging purposes. See also [The capture/replay system](doc-latest/troubleshooting.html#capturereplay).

`--control`  
The Prince Control Protocol is a synchronous bidirectional protocol that consists of a sequence of "chunks" sent via the standard input and output streams. For more details, please check the detailed documentation in the separate [Prince Control Protocol](doc-latest/cmd-control.html#cmd-control) chapter.

`--structured-log=LEVEL`  
The Structured Log option is a formatting option for Prince's output to stderr. For more details, please check the detailed documentation in the separate [Structured Log](doc-latest/cmd-control.html#structured-log) chapter.

`--fail-dropped-content`
`--fail-missing-resources`
`--fail-missing-glyphs`  
These three Fail-Safe Options abort the creation of a PDF when one of the conditions is met. For more details, please check the detailed documentation in the separate [Fail-Safe Options](doc-latest/cmd-control.html#fail-safe-options) chapter.

