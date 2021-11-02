---
title: Command-line Options
---

Prince may be called from the command-line with the following arguments:

```bash
    $ prince OPTIONS
        FILES
        [-o PDF]
```

Please note that on Windows, Prince can be called from the command-line by running the `prince.exe` file found in the `Prince\engine\bin` folder of the Prince installation:

```powershell
    "C:\Program Files (x86)\Prince\engine\bin\prince.exe" OPTIONS
        FILES
        [-o PDF]
```
Examples
--------

    prince file.xml
Convert `file.xml` to `file.pdf`.

    prince doc.html -o out.pdf
Convert `doc.html` to `out.pdf`.

    prince http://example.com -o out.pdf
Convert the `http://example.com` webpage to `out.pdf`. Note that it is necessary to specify the output file when the input is a HTTP or HTTPS URL.

    prince
        -s style1.css
        -s style2.css
        input.xml
        -o output.pdf
Convert `input.xml` to `output.pdf`, applying two user style sheets.

    prince
        doc1.html
        doc2.html
        -o out.pdf
Combine `doc1.html` and `doc2.html` into a single PDF file, `out.pdf`.

    prince doc.html --raster-output=doc_%d.png
Process `doc.html` and rasterize the output to the series of files `doc_1.png`, `doc_2.png`, `doc_3.png` etc.


Specifying input and output
---------------------------

The command-line must contain the name of the input file to process. An input filename consisting of a single hyphen "-" will cause Prince to read from the standard input stream.

The output file name can be specified on the command-line using the `-o` command-line option. An output filename consisting of a single hyphen "-" will cause Prince to write to the standard output stream.

If the output file name is omitted, the output will be placed in a file with the same name as the input, but with a PDF file extension.

It is necessary to specify the output file when the input is a HTTP or HTTPS URL.

Any of the `--long` command-line options can either be passed as a single command-line argument with an equals sign (=), or as two command-line arguments with space:


      --output out.pdf
      --output=out.pdf

If the value of a command-line option contains a space or other command characters, the value has to be written between quotation marks.

If rasterization is used, the `-o` option is optional. If not specified, a PDF output will not be generated.

Options
-------

The command-line may include the options described below:

### General Options

<dl>
    <dt id="cl-help">
<code>-h</code>, <code>--help</code>
</dt>
    <dd>
        Display usage and options.
    </dd>
    <dt id="cl-version"><code>--version</code></dt>
    <dd>
    Display version information.
    </dd>
    <dt id="cl-credits"><code>--credits</code></dt>
    <dd>
    Display credits and acknowledgments.
    </dd>
    <dt id="cl-license-key"><code>--license-key=<span class="replaceable">KEY</span></code></dt>
    <dd>
    Pass the license key on the command line.
    </dd>
</dl>

### Logging Options

<dl>
    <dt id="cl-verbose">
<code>-v</code>, <code>--verbose</code>
</dt>
    <dd>
    Log informative messages.
    </dd>
    <dt id="cl-debug"><code>--debug</code></dt>
    <dd>
    Log debug messages.
    </dd>
    <dt id="cl-log"><code>--log=<span class="replaceable">FILE</span></code></dt>
    <dd>
    Append log messages to a file.
    </dd>
    <dt id="cl-no-warn-css-unknown"><code>--no-warn-css-unknown</code></dt>
    <dd>
    Do not warn about unknown CSS features.
    </dd>
    <dt id="cl-no-warn-css-unsupported"><code>--no-warn-css-unsupported</code></dt>
    <dd>
    Do not warn about unsupported CSS features.
    </dd>
    <dt id="cl-no-warn-css"><code>--no-warn-css</code></dt>
    <dd>
    Do not warn about CSS problems - this option implies the above two
    options.
    </dd>
</dl>

### Input Options

<dl>
  <dt id="cl-input">
    <code>-i <span class="replaceable">FORMAT</span></code>,
    <code>--input=<span class="replaceable">FORMAT</span></code>
  </dt>
  <dd>
    Set input format [<code>auto</code> | <code>xml</code> |
      <code>html</code>].
  </dd>
  <dt id="cl-input-list">
    <code>-l</code>,
    <code>--input-list=<span class="replaceable">FILE</span></code>
  </dt>
  <dd>
    Read input file list from specified file.
  </dd>
  <dt id="cl-baseurl">
    <code>--baseurl=<span class="replaceable">URL</span></code>
  </dt>
  <dd>
    Specify the base URL of the input document.
  </dd>
  <dt id="cl-remap">
    <code>--remap=<span class="replaceable">URL</span>=<span class="replaceable">DIR</span></code>
  </dt>
  <dd>
  <p>
    Rather than retrieving documents beginning with
    <code class="replaceable">URL</code> get them from the local directory
    <code class="replaceable">DIR</code>.
    This option can be used multiple times to specify more than one remapping.
    It cannot be used with <code>--fileroot</code>.
  </p>
  <p>
    Note that Prince does not know which file to use when the path maps to a
    directory (in other words, an index file).
    If <code>http://www.example.com/</code> is requested, and mapped to
    <code>example-com</code> it does not know whether to open
    <code>example-com/index.html</code>,
    <code>example-com/index.php</code> or any other file
    as this is site dependent.  In this case Prince will report an error for
    that resource.
  </p>
  </dd>
  <dt id="cl-fileroot">
    <code>--fileroot=<span class="replaceable">DIR</span></code>
  </dt>
  <dd>
    Specify the root directory for absolute filenames (deprecated).
  </dd>
  <dt id="cl-xinclude">
    <code>--xinclude</code>
  </dt>
  <dd>
    Enable XInclude and XML external entities (XXE).  Note that XInclude only
    applies to XML files.  To apply it to HTML files, the input format needs
    to be specified with the <a href="#cl-input"><code>--input</code></a>
    command-line option.
  </dd>
  <dt id="cl-xxe">
    <code>--xxe</code>,
    <code>--xml-external-entities</code>
  </dt>
  <dd>
    Enable XML external entities (XXE).
  </dd>
  <dt id="cl-no-local-files">
    <code>--no-local-files</code>
  </dt>
  <dd>
    Disable access to local files.
  </dd>
</dl>

### Network Options

<dl>
  <dt id="cl-no-network"><code>--no-network</code></dt>
  <dd>
  Disable network access (prevents HTTP downloads).
  </dd>
  <dt id="cl-no-redirects"><code>--no-redirects</code></dt>
  <dd>
  Disable all HTTP and HTTPS redirects.
  </dd>
  <dt id="cl-auth-user"><code>--auth-user=<span class="replaceable">USER</span></code></dt>
  <dd>
  Specify the username for HTTP authentication.
  </dd>
  <dt id="cl-auth-password"><code>--auth-password=<span class="replaceable">PASS</span></code></dt>
  <dd>
  Specify the password for HTTP authentication.
  </dd>
  <dt id="cl-auth-server">
    <code>--auth-server=<span class="replaceable">HOST</span>[:<span class="replaceable">PORT</span></code>]
  </dt>
  <dd>
  Send username and password credentials to the specified server only. (The default
  is to send them to any server which challenges for authentication).
  </dd>
  <dt id="cl-auth-scheme">
    <code>--auth-scheme=<span class="replaceable">SCHEME</span></code>
  </dt>
  <dd>
  Send username and password credentials only for requests with the given
  scheme, either <code>http</code> or <code>https</code>
  </dd>
  <dt id="cl-auth-method"><code>--auth-method=<span class="replaceable">METHOD</span></code></dt>
  <dd>
  Specify a comma separated list of HTTP authentication methods to enable.
  Valid entries are:
  <code>basic</code>, <code>digest</code>, <code>ntlm</code> and
  <code>negotiate</code>.
  The default is <code>basic</code>.
  </dd>
  <dt id="cl-auth"><code>--auth=<span class="replaceable">URL</span></code></dt>
  <dd>
  Specify a URL with credentials for HTTP
  authentication:
  <code>[<span class="replaceable">SCHEME</span>:]//<span class="replaceable">USER</span>:<span class="replaceable">PASS</span>@<span class="replaceable">HOST</span>[:<span class="replaceable">PORT</span>]</code>.
  Unlike the preceding
  options, <code>--auth</code> may be used multiple times.
  The username and password must be percent-encoded.
  </dd>
  <dt id="cl-no-auth-preemptive"><code>--no-auth-preemptive</code></dt>
  <dd>
  Do  not  send  credentials  to  named servers until an authentication
  challenge is received.  When multiple authentication methods are enabled,  an
  initial  request may be required to discover the methods supported by the
  remote site.
  </dd>
  <dt id="cl-http-proxy"><code>--http-proxy=<span class="replaceable">PROXY</span></code></dt>
  <dd>
  Specify the HTTP proxy server.
  </dd>
  <dt id="cl-http-timeout"><code>--http-timeout=<span class="replaceable">SEC</span></code></dt>
  <dd>
  Specify the HTTP timeout in seconds.
  </dd>
  <dt id="cl-cookie"><code>--cookie=<span class="replaceable">COOKIE</span></code></dt>
  <dd>
  Specify a cookie that may be sent when making HTTP requests.  The format is a Set-Cookie header field
  value, e.g. <code>--cookie "name=value; domain=example.com"</code>. If you do not specify a domain
  for the cookie, it may not be sent.  The exact behaviour depends on the underlying libcurl version.
  </dd>
  <dt id="cl-cookiejar"><code>--cookiejar=<span class="replaceable">FILE</span></code></dt>
  <dd>
  Specify a file containing HTTP cookies.
  </dd>
  <dt id="cl-ssl-cacert"><code>--ssl-cacert=<span class="replaceable">FILE</span></code></dt>
  <dd>
  Specify an SSL certificate file.
  </dd>
  <dt id="cl-ssl-capath"><code>--ssl-capath=<span class="replaceable">PATH</span></code></dt>
  <dd>
  Specify an SSL certificate directory.
  </dd>
  <dt id="cl-ssl-cert"><code>--ssl-cert=<span class="replaceable">FILE</span></code></dt>
  <dd>
  Specify an SSL client certificate file.  On MacOS, specify a PKCS#12 file containing
  a client certificate and private key.  Client authentication is not supported on Windows.
  </dd>
  <dt id="cl-ssl-cert-type"><code>--ssl-cert-type=<span class="replaceable">TYPE</span></code></dt>
  <dd>
  Specify the SSL client certificate file type (PEM, DER). The default is PEM.
  This option is not supported on MacOS or Windows.
  </dd>
  <dt id="cl-ssl-key"><code>--ssl-key=<span class="replaceable">FILE</span></code></dt>
  <dd>
  Specify an SSL private key file.  This option is not supported on MacOS or Windows.
  </dd>
  <dt id="cl-ssl-key-type"><code>--ssl-key-type=<span class="replaceable">TYPE</span></code></dt>
  <dd>
  Specify the SSL private key file type (PEM, DER). The default is PEM.  This option
  is not supported on MacOS or Windows.
  </dd>
  <dt id="cl-ssl-key-password"><code>--ssl-key-password=<span class="replaceable">PASS</span></code></dt>
  <dd>
  Specify passphrase for the private key.
  </dd>
  <dt id="cl-ssl-version"><code>--ssl-version=<span class="replaceable">VERSION</span></code></dt>
  <dd>
  Set the minimum version of SSL to allow.
  May be one of: <code>default</code> (let
  <a href="/doc/acknowledgements/">libcurl</a>
  choose), <code>tlsv1</code>,
  <code>tlsv1.0</code>, <code>tlsv1.1</code>, <code>tlsv1.2</code> or <code>tlsv1.3</code>.
  </dd>
  <dt id="cl-insecure"><code>--insecure</code></dt>
  <dd>
  Disable SSL verification (not recommended).
  </dd>
  <dt id="cl-no-parallel-downloads"><code>--no-parallel-downloads</code></dt>
  <dd>
  Disable downloading multiple HTTP resources at once.
  </dd>
</dl>

### JavaScript Options

<dl>
  <dt id="cl-javascript">
    <code>-j</code>,
    <code>--javascript</code>
  </dt>
  <dd>
    Enable JavaScript in HTML documents.
  </dd>
  <dt id="cl-script"><code>--script=<span class="replaceable">FILE</span></code></dt>
  <dd>
    Run an external script.
  </dd>
  <dt id="cl-max-passes"><code>--max-passes=<span class="replaceable">NUMBER</span></code></dt>
  <dd>
    Defines the maximal number of consequent layout passes - see <a href="cookbook#the-multi-pass-solution">The "Multi-Pass" Solution</a>.  The default is unlimited passes.
  </dd>
</dl>

### CSS Options

<dl>
  <dt id="cl-style">
    <code>-s <span class="replaceable">FILE</span></code>,
    <code>--style=<span class="replaceable">FILE</span></code>
  </dt>
  <dd>
    Apply an external style sheet. Note that repeating the option multiple times
    allows for applying multiple style sheets.  They are applied in the order
    they are provided - and hence the last one will overwrite previous ones.
  </dd>
  <dt id="cl-media">
    <code>--media=<span class="replaceable">MEDIA</span></code>
  </dt>
  <dd>
    Specify the media type (eg. print, screen).
  </dd>
  <dt id="cl-page-size">
    <code>--page-size=<span class="replaceable">SIZE</span></code>
  </dt>
  <dd>
    Specify the page size (eg. A4, "155mm 190mm", etc).  The syntax is the same as
    the <code><a href="/doc/css-props/#prop-size">size</a></code> property in <a href="/doc/css-refs/#at-page"><code>@page</code></a>
    rules, which can take two values for horizontal and vertical dimensions. On the
    command-line it needs to be written between quotes as a single argument.  See
    also <a href="/doc/paged/#page-size">Page size</a> and <a href="/doc/page-size-keywords/">Page Size Keywords</a>.
  </dd>
  <dt id="cl-page-margin">
    <code>--page-margin=<span class="replaceable">MARGIN</span></code>
  </dt>
  <dd>
    Specify the page margin (eg. 20mm).
  </dd>
  <dt id="cl-no-author-style"><code>--no-author-style</code></dt>
  <dd>
    Ignore author style sheets.
  </dd>
  <dt id="cl-no-default-style"><code>--no-default-style</code></dt>
  <dd>
    Ignore default style sheets.
  </dd>
</dl>

### PDF Output Options

<dl>
  <dt id="cl-output">
    <code>-o <span class="replaceable">FILE.PDF</span></code>,
    <code>--output=<span class="replaceable">FILE.PDF</span></code>
  </dt>
  <dd>
    Specify the output PDF file.
  </dd>
  <dt id="cl-pdf-lang">
    <code>--pdf-lang=<span class="replaceable">LANG</span></code>
  </dt>
  <dd>
    Specify the PDF document's Lang entry in the document catalog - what is known as the Reading Options' Language.
  </dd>
  <dt id="cl-pdf-profile">
    <code>--pdf-profile=<span class="replaceable">PROFILE</span></code>
  </dt>
  <dd>
    Specify the PDF profile (see <a href="/doc/prince-output/#pdf-versions-and-profiles">PDF Versions and Profiles</a>) to use.
  </dd>
  <dt id="cl-pdf-output-intent">
    <code>--pdf-output-intent=<span class="replaceable">ICC</span></code>
  </dt>
  <dd>
    Specify the ICC profile to use.
  </dd>
  <dt id="cl-attach">
    <code>--attach=<span class="replaceable">FILE</span></code>
  </dt>
  <dd>
    Attach a file to the PDF.
  </dd>
  <dt id="cl-no-artificial-fonts"><code>--no-artificial-fonts</code></dt>
  <dd>
    Disable synthesis of missing bold/italic fonts.
  </dd>
  <dt id="cl-no-embed-fonts"><code>--no-embed-fonts</code></dt>
  <dd>
    Disable font embedding in PDF output.
  </dd>
  <dt id="cl-no-subset-fonts"><code>--no-subset-fonts</code></dt>
  <dd>
    Disable font subsetting in PDF output.
  </dd>
  <dt id="cl-no-system-fonts"><code>--no-system-fonts</code></dt>
  <dd>
    Disable system fonts in PDF output.  Only fonts defined with
    <a href="/doc/css-refs/#at-font-face"><code>@font-face</code></a>
    rules in CSS will be available.
  </dd>
  <dt id="cl-force-identity-encoding"><code>--force-identity-encoding</code></dt>
  <dd>
	Ensure that all fonts are encoded in the PDF using their identity encoding
	(directly mapping to glyph indices), even if they could have used MacRoman
	or some other encoding.
  </dd>
  <dt id="cl-no-compress"><code>--no-compress</code></dt>
  <dd>
    Disable compression of PDF output.
  </dd>
  <dt id="cl-no-object-streams"><code>--no-object-streams</code></dt>
  <dd>
    Disable PDF object streams.
  </dd>
  <dt id="cl-convert-colors"><code>--convert-colors</code></dt>
  <dd>
    Convert colors to output intent color space.
  </dd>
  <dt id="cl-fallback-cmyk-profile"><code>--fallback-cmyk-profile=<span class="replaceable">ICC</span></code></dt>
  <dd>
    Set fallback ICC profile for uncalibrated CMYK.
  </dd>
  <dt id="cl-tagged-pdf"><code>--tagged-pdf</code></dt>
  <dd>
    Enable tagged PDF.
  </dd>
  <dt id="cl-pdf-forms"><code>--pdf-forms</code></dt>
  <dd>
    Enable PDF forms.
  </dd>
  <dt id="cl-css-dpi"><code>--css-dpi</code></dt>
  <dd>
    Changes the DPI of the "px" units in CSS, which defaults to 96dpi.  It can be
    useful if you have a layout designed in pixels and you need to scale it down
    for print.
  </dd>
</dl>

### PDF Metadata Options

<dl>
  <dt id="cl-pdf-title"><code>--pdf-title=<span class="replaceable">TITLE</span></code></dt>
  <dd>Set PDF document title.</dd>
  <dt id="cl-pdf-subject"><code>--pdf-subject=<span class="replaceable">SUBJECT</span></code></dt>
  <dd>Set PDF document subject.</dd>
  <dt id="cl-pdf-author"><code>--pdf-author=<span class="replaceable">AUTHOR</span></code></dt>
  <dd>Set PDF document author.</dd>
  <dt id="cl-pdf-keywords">
    <code>--pdf-keywords=<span class="replaceable">KEYWORDS</span></code>
  </dt>
  <dd>Set PDF document keywords.</dd>
  <dt id="cl-pdf-creator"><code>--pdf-creator=<span class="replaceable">CREATOR</span></code></dt>
  <dd>Set PDF document creator.</dd>
  <dt id="cl-pdf-xmp"><code>--pdf-xmp=<span class="replaceable">XMP</span></code></dt>
  <dd>Include additional XMP metadata in the PDF.  The argument is an XMP file,
  from which the data is taken.</dd>
</dl>

### PDF Encryption Options

<dl>
  <dt id="cl-encrypt"><code>--encrypt</code></dt>
  <dd>
    Encrypt PDF output.
  </dd>
  <dt id="cl-key-bits"><code>--key-bits=<span class="replaceable">NUM</span></code></dt>
  <dd>
    Set encryption key size to either 40 or 128.
  </dd>
  <dt id="cl-user-password"><code>--user-password=<span class="replaceable">PASS</span></code></dt>
  <dd>
    Set PDF user password - max. 32 characters (Latin-1).
  </dd>
  <dt id="cl-owner-password">
    <code>--owner-password=<span class="replaceable">PASS</span></code>
  </dt>
  <dd>
    Set PDF owner password - max. 32 characters (Latin-1).
  </dd>
  <dt id="cl-disallow-print"><code>--disallow-print</code></dt>
  <dd>
    Disallow printing of PDF output.
  </dd>
  <dt id="cl-disallow-copy"><code>--disallow-copy</code></dt>
  <dd>
    Disallow copying from PDF output.
  </dd>
  <dt id="cl-allow-copy-for-accessibility"><code>--allow-copy-for-accessibility</code></dt>
  <dd>
    Used together with <code>--disallow-copy</code>, for which it creates an exception by enabling text access for screen reader devices for the visually impaired.
  </dd>
  <dt id="cl-disallow-annotate"><code>--disallow-annotate</code></dt>
  <dd>
    Disallow annotation of PDF output.
  </dd>
  <dt id="cl-disallow-modify"><code>--disallow-modify</code></dt>
  <dd>
    Disallow modification of PDF output.
  </dd>
  <dt id="cl-allow-assembly"><code>--allow-assembly</code></dt>
  <dd>
    Used together with <code>--disallow-modify</code>, for which it creates an exception.  It allows the document to be inserted into another document or other pages to be added, but the content of the document cannot be modified.
  </dd>
</dl>

### Raster Output Options

Rasterization is enabled with the `--raster-output` option below. When this is used the PDF output option (`-o`) is optional.

<dl>
  <dt id="cl-raster-output">
    <code>--raster-output=<span class="replaceable">TEMPLATE</span></code>
  </dt>
  <dd>
    <p>
    Enable raster output.
    The output files will be named based on the template.
    Prince will replace every
    '<code>%[<span class="replaceable">WIDTH</span>]d</code>'
    with the current page number.
    The optional <span class="replaceable">WIDTH</span> value gives the
    number of characters the page number should take within the file name.
    Smaller page numbers will be padded to the left with either spaces,
    or if the width begins with a zero, with zeros.
    </p>
    <p>
    For example <code>--raster-output=page_%02d.png</code> will cause
    Prince to generate
    <code class="filename">page_01.png</code>,
    <code class="filename">page_02.png</code>, …,
    <code class="filename">page_10.png</code>,
    <code class="filename">page_11.png</code> etc.
    </p>
    <p>
    Prince also accepts `<code>-</code>' meaning the standard output
    stream.
    </p>
  </dd>
  <dt id="cl-raster-format">
    <code>--raster-format=<span class="replaceable">FORMAT</span></code>
  </dt>
  <dd>
    Set the format for the raster output.  Valid formats are:
    <code>auto</code> (guess based on file extension, the default),
    <code>png</code> or <code>jpeg</code>.
    If Prince does not recognize the file extension, or
    <code>--raster-output</code> is '<code>-</code>',
    then it is necessary to provide this option.
  </dd>
  <dt id="cl-raster-jpeg-quality">
    <code>--raster-jpeg-quality=<span class="replaceable">QUALITY</span></code>
  </dt>
  <dd>
    Set the level of JPEG compression when generating raster output in JPEG
    format.  It takes a number between 0 and 100, default is 92.
  </dd>
  <dt id="cl-raster-pages">
    <code>--raster-pages=<span class="replaceable">PAGE</span></code>
  </dt>
  <dd>
    Set the range of pages to be rasterize.
    Valid ranges are
    <code>all</code> (the default),
    <code>first</code> and
    <code><span class="replaceable">NUM</span></code> (a single page).
  </dd>
  <dt id="cl-raster-dpi">
    <code>--raster-dpi=<span class="replaceable">DPI</span></code>
  </dt>
  <dd>
    Set the resolution of raster output (The default is 96 dots per inch).
  </dd>
  <dt id="cl-raster-threads">
    <code>--raster-threads=<span class="replaceable">NUM</span></code>
  </dt>
  <dd>
    Set the number of threads to use for multi-threaded rasterization.
    By default Prince chooses the number of threads based on the number of
    cores and hyperthreads your system provides.
  </dd>
  <dt id="cl-raster-background">
    <code>--raster-background=<span class="replaceable">BACKGROUND</span></code>
  </dt>
  <dd>
    Set the background - allowed values are <code>transparent</code> or
    <code>white</code>.  It can be used when rasterizing to an
    image format that supports transparency (PNG, not JPG) and have a
    transparent background, so it can be composited with something else
    later.
  </dd>
</dl>

### Utility Options

<dl>
  <dt id="cl-scanfonts"><code>--scanfonts <span class="replaceable">FILES...</span></code></dt>
  <dd>
    Scan font files and create a CSS file.
  </dd>
</dl>

### Advanced Options

<dl>
  <dt id="cl-capture"><code>--capture <span class="replaceable">DIR</span></code></dt>
  <dt id="cl-replay"><code>--replay <span class="replaceable">DIR</span></code></dt>
  <dd>
    <p>The capture/replay system saves a copy of all the information in a job to
    a specified directory, conveniently allowing it to be replayed later for
    debugging purposes. See also <a href="/doc/help/#the-capturereplay-system">The capture/replay system</a>.</p>
  </dd>
  <dt id="cl-control"><code>--control</code></dt>
  <dd>
    <p>The Prince Control Protocol is a synchronous bidirectional protocol that
    consists of a sequence of "chunks" sent via the standard input and output streams.
    For more details, please check the detailed documentation in the separate <a href="/doc/server-integration/#prince-control-protocol">Prince Control Protocol</a>
    chapter.</p>
  </dd>
  <dt id="cl-structured-log"><code>--structured-log=<span class="replaceable">LEVEL</span></code></dt>
  <dd>
    <p>The Structured Log option is a formatting option for Prince's output to stderr.
    For more details, please check the detailed documentation in the separate <a href="/doc/server-integration/#structured-log">Structured Log</a>
    chapter.</p>
  </dd>
  <dt id="cl-fail-dropped-content"><code>--fail-dropped-content</code></dt>
  <dt id="cl-fail-missing-resources"><code>--fail-missing-resources</code></dt>
  <dt id="cl-fail-missing-glyphs"><code>--fail-missing-glyphs</code></dt>
  <dt id="cl-fail-pdf-profile-error"><code>--fail-pdf-profile-error</code></dt>
  <dt id="cl-fail-pdf-tag-error"><code>--fail-pdf-tag-error</code></dt>
  <dt id="cl-fail-safe"><code>--fail-safe</code></dt>
  <dd>
    <p>These six Fail-Safe Options abort the creation of a PDF when one of
    the conditions is met.  For more details, please check the detailed
    documentation in the separate <a href="/doc/server-integration/#fail-safe-options">Fail-Safe Options</a> chapter.</p>
  </dd>
</dl>

<script>
function shiftWindow() { if (location.hash.indexOf('cl-') == 1) if (window.innerWidth < "1024") {scrollBy(0, -158)} else {scrollBy(0, -60)};
};
window.addEventListener("load",  function() { shiftWindow(); });
window.addEventListener("hashchange", function() { shiftWindow(); });
</script>
