---
title: Server Integration
---

Prince can be used server-side to produce PDFs, invoked by a wrapper script. Some care needs to be used in the configuration to make it reliable and secure.

Prince Wrappers
---------------

Since different server configurations make use of different scripting languages, wrappers in those languages are necessary to invoke Prince. Wrappers for several of the most widely used scripting languages are available for download on the [Wrappers Download Page](/download/wrappers/).

A useful tool for writing custom wrappers in other languages are the [Advanced Command-Line Options](#advanced-command-line-options).

For details on the usage of each of the wrappers, please consult the following chapters.


### The Java Wrapper

Prince can be called from within a Java class for servlets by using the [Java wrapper](/download/wrappers/#wrapper-java).

The Java wrapper is hosted on the [Maven Central Repository](https://search.maven.org/artifact/com.princexml/prince-java-wrapper).

The [API documentation](https://yeslogic.github.io/prince-java-wrapper) lists the Java class methods and explains how to use them.

The following code sample demonstrates how to convert a single HTML document into a PDF file:

```java
import com.princexml.wrapper.Prince;

Prince prn = new Prince("/usr/bin/prince");

prn.setLog("/path/to/log.txt");
prn.addStyleSheet("/path/to/stylesheet.css");
prn.addScript("/path/to/script.js");
prn.setJavaScript(true);

try {
    prn.convert("/path/to/input.html", "/path/to/output.pdf");
} catch (IOException e) {
    e.printStackTrace();
}
```

### The C\# / .NET Wrapper

Prince can be called from .NET languages using the [Prince C\# / .NET wrapper](/download/wrappers/#wrapper-csharp).

The C\# wrapper is hosted on the [NuGet gallery](https://www.nuget.org/packages/PrinceXMLWrapper/).

The [API documentation](https://yeslogic.github.io/prince-csharp-wrapper/current/api/PrinceXML.Wrapper.html) lists the C\# class methods and explains how to use them.

#### Using Prince with C\#

To use the Prince .NET wrapper in C\#, add it as a dependency to your Visual Studio project.

To convert HTML or XML files into PDF, instantiate a Prince object with the full path to the Prince engine executable file. Once this is done, you can apply style sheets and scripts, or configure other properties by calling the appropriate methods. Finally, you can call one of the `Convert` methods to generate a PDF file.

Please note that document scripts need to first be enabled with `JavaScript = true` - external scripts added with `Scripts.Add()` will always be run.

The following code sample demonstrates how to convert a single HTML document into a PDF file:

```cs
using PrinceXML.Wrapper;

// Instantiate Prince by specifying the full path to the engine executable.
Prince prn = new Prince("C:\\Program Files\\Prince\\engine\\bin\\prince.exe");

// Specify the log file for error and warning messages.
// Make sure that you have write permissions for this file.
prn.Log = "C:\\docs\\log.txt";

// Apply a CSS style sheet (optional).
prn.StyleSheets.Add("C:\\docs\\css\\stylesheet-1.css");

// Apply an external JavaScript file (optional) and enable document JavaScript.
prn.Scripts.Add("C:\\docs\\js\\test.js");
prn.JavaScript = true;

// Convert a HTML document into a PDF file.
prn.Convert("C:\\docs\\test1.html", "C:\\docs\\pdf\\test1.pdf");
```

#### Using Prince with VB.NET

To use the Prince [The C\# / .NET Wrapper](#the-c--net-wrapper) in VB.NET, add it as a dependency to your Visual Studio project.

To convert HTML or XML files into PDF, instantiate a Prince object with the full path to the Prince engine executable file. Once this is done, you can apply style sheets and scripts, or configure other properties by calling the appropriate methods. Finally, you can call one of the `Convert` methods to generate a PDF file.

Please note that document scripts need to first be enabled with `JavaScript = true` - external scripts added with `Scripts.Add()` will always be run.

The following code sample demonstrates how to convert a single HTML document into a PDF file:

```vbnet
' Instantiate Prince by specifying the full path to the engine executable.
Dim prn As New PrinceXML.Wrapper.Prince(
    "C:\Program Files\Prince\engine\bin\prince.exe")

' Specify the log file for error and warning messages.
' Make sure that you have write permissions for this file.
prn.Log = "C:\docs\log.txt"

' Apply a CSS style sheet (optional).
prn.StyleSheets.Add("C:\docs\css\stylesheet-1.css")

' Apply an external JavaScript file (optional) and enable document JavaScript.
prn.Scripts.Add("C:\docs\js\test.js")
prn.JavaScript = true

' Convert a HTML document into a PDF file.
prn.Convert("C:\docs\test1.html", "C:\docs\pdf\test1.pdf")
```

### The PHP Wrapper

Prince can be called from PHP using the [PHP wrapper](/download/wrappers/#wrapper-php).

The PHP wrapper is [hosted on Packagist](https://packagist.org/packages/yeslogic/prince-php-wrapper), so that it can be used from Composer.

The [API documentation](https://yeslogic.github.io/prince-php-wrapper) lists the PHP class methods and explains how to use them.

When instantiating the `Prince` class, pass in the full path of the Prince executable to the constructor as a string argument.

```php
use Prince\Prince;

$prince = new Prince('/usr/bin/prince');

$prince->setLog('/path/to/log.txt');
$prince->addStyleSheet('/path/to/stylesheet.css');
$prince->addScript('/path/to/script.js');
$prince->setJavaScript(true);

$prince->convertFile('/path/to/file.html');
```

### Using Prince with ColdFusion

Prince can be called from ColdFusion pages using the Java interface.

#### Using Java

Start by downloading the [Java wrapper JAR file](https://github.com/yeslogic/prince-java-wrapper/packages/993641) via the links on the sidebar.

The [API documentation](https://yeslogic.github.io/prince-java-wrapper) lists the Java class methods and explains how to use them.

Place the JAR file in a directory of your choice then start ColdFusion Administrator. Under 'Server Settings &gt; Java and JVM', you should find 'ColdFusion Class Path'. Here you can tell ColdFusion where to look for Java classes. Type in the full path of the JAR file. It should be something like: `PATH\prince-java-wrapper-X.X.X.jar`, where `PATH` is the path of the directory that contains the JAR file.

If this is done correctly, ColdFusion should know where to find the Java wrapper class. The following is some sample CFML code showing how to use it:

```
<cfscript>
    pr = CreateObject("java", "com.princexml.wrapper.Prince");

    pr.init("C:\Prince\engine\bin\prince.exe");
    pr.addStyleSheet("C:\Prince\test\test1.css");
    pr.addStyleSheet("C:\Prince\test\test2.css");
    pr.addScript("C:\Prince\test\script.js");
    pr.setJavaScript(true);

    if (pr.convert("C:\Prince\test\input.html", "C:\Prince\test\output.pdf"))
        WriteOutput("Successful");
    else
        WriteOutput("Unsuccessful");
</cfscript>
```

If on Linux, substitute the paths with the appropriate UNIX style paths.

### Using Prince with Python

Prince can be called from Python using the [command-line interface](command-line.md), like this:

```python
import subprocess

subprocess.call(["prince", "foo.xml", "-o", "bar.pdf"])
```
It is possible to write XML/HTML to Prince directly from the Python script rather than have Prince read it from an external file:

```python
import subprocess

p = subprocess.Popen(
    ["prince", "-", "-o", "out.pdf"],
    stdin=subprocess.PIPE,
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE)

outs, errs = p.communicate("""
    <html>
        <body><h1>Hello, world!</h1></body>
    </html>""".encode("utf-8"))

if p.returncode:
    # Handle `errs`.
    pass
else:
    # Handle `outs`.
    pass
```
The first filename argument of `-` instructs Prince to read the XML/HTML from its standard input stream rather than from a file.

For Python CGI scripts, the PDF output can be written to the standard output stream so that it is returned to the browser:

```python
import subprocess

p = subprocess.Popen(
    ["prince", "-"],
    stdin=subprocess.PIPE,
    stderr=subprocess.PIPE)

print("Content-Type: application/pdf\n")
_outs, errs = p.communicate("""
    <html>
        <body><h1>Hello, world!</h1></body>
    </html>""".encode("utf-8"))

if p.returncode:
    # Handle `errs`.
    pass
```
Because the second filename argument has been omitted and the XML/HTML is being read from standard input, the PDF will be written to standard output. Be careful to redirect the output of this script if you try running it from the terminal.

Alternatively, it is possible for the Python script to read the PDF output directly rather than have Prince save it to an external file:

```python
import subprocess

p = subprocess.Popen(
    ["prince", "-"],
    stdin=subprocess.PIPE,
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE)

outs, errs = p.communicate("""
    <html>
        <body><h1>Hello, world!</h1></body>
    </html>""".encode("utf-8"))

if p.returncode:
    # Handle `errs`.
    pass
else:
    pdf = outs
    print("PDF is " + str(len(pdf)) + " bytes in size")
```

### Using Prince with Perl

Prince can be called from Perl using the [command-line interface](command-line.md), like this:

```perl
system("prince foo.xml -o bar.pdf");
```
It is possible to write XML/HTML to Prince directly from the Perl script rather than have Prince read it from an external file:

```perl
open(PRINCE, "| prince - -o out.pdf");
print PRINCE "<html><body><h1>Hello, world!</h1></body></html>";
close(PRINCE);
```
The first filename argument of `-` instructs Prince to read the XML/HTML from its standard input stream rather than from a file.

For Perl CGI scripts, the PDF output can be written to the standard output stream so that it is returned to the browser:

```perl
print "Content-Type: application/pdf\n\n";
open(PRINCE, "| prince -");
print PRINCE "<html><body><h1>Hello, world!</h1></body></html>";
close(PRINCE);
```
Because the second filename argument has been omitted and the XML/HTML is being read from standard input, the PDF will be written to standard output. Be careful to redirect the output of this script if you try running it from the terminal.

Alternatively, it is possible for the Perl script to read the PDF output directly rather than have Prince save it to an external file:

```perl
open(PRINCE, "prince foo.xml -o - |");
# ... Read PDF output from PRINCE file handle.
close(PRINCE);
```

### Third-Party Wrappers

There are also third-party wrappers available for download on external sites. Please note that YesLogic does not take any responsibilities for third-party wrappers offered for download on these external locations.

Ruby on Rails  
[A simple Rails wrapper for the PrinceXML PDF generation library](https://github.com/mbleigh/princely/tree/master)

Node.js  
[Node API for executing XML/HTML to PDF renderer PrinceXML via prince(1) CLI](https://www.npmjs.com/package/prince)


Prince In Cloud Computing
--------------------------

Prince can easily be deployed on many different cloud computing platforms and solutions.  As example deployments,
we detail here installation procedures for Prince on Docker, Azure, AWS Lambda and AWS EC2.

### Prince Docker Image

Prince can easily be deployed in Docker images.  On the Docker Hub you can find [the Prince Dockerfiles](https://hub.docker.com/r/yeslogic/prince).  To pull the images, run the Docker command:

```
docker pull yeslogic/prince
```

The Prince images can be run with the following command:

```
docker run --rm -it yeslogic/prince
```

They can be run with a `license.dat` file in the following way:

```
docker run --rm -it -v /path/on/host/license.dat:/usr/lib/prince/license/license.dat yeslogic/prince
```

If, however, you want to run a specific Prince version, rather than the latest, you need to add the version tag to the command:

```
docker run --rm -it yeslogic/prince:13.1
```

### Prince on Microsoft Azure

Running Prince on Microsoft Azure is quite straightforward: we have a tutorial and a package for [deploying Prince on Azure](https://github.com/yeslogic/azure-prince-example/).  This is a Visual Studio 2019 project that demonstrates generating a PDF with Prince in C#/ASP.NET Core. It uses the [Prince C#/.NET Wrapper](#the-c--net-wrapper) and has been confirmed to work when deployed as an App Service on Microsoft Azure.

### Prince on AWS Lambda

Setting up Prince on AWS Lambda is not much more difficult than setting it up for Docker or Azure.  Bruce Lawson has written a detailed article on how to [set up Prince on AWS Lambda](https://medium.com/@bruce_39084/setting-up-prince-on-aws-lambda-and-api-gateway-4d524dcb035b) using Node.js, with all the required steps.

### Prince on EC2

Prince can easily be installed also on Amazon's EC2 platform - Bruce Lawson provides an in-depth article on how to [set up Prince on EC2](https://medium.com/@bruce_39084/setting-up-prince-on-ec2-with-php-f1604db5d754) with PHP.



Advanced Command-Line Options
-----------------------------

Prince can also be called from the command-line with some special options for fine-tuning the creation of PDF files.

Two options are useful for understanding the calls Prince can be controlled with, and the output it produces, in order to write your own wrapper: the [Prince Control Protocol](#prince-control-protocol) and the [Structured Log](#structured-log).

Prince also offers a set of [Fail-Safe Options](#fail-safe-options) to prevent the creation of a PDF file in case of specific conditions.

### Prince Control Protocol

`prince --control`  
The Prince Control Protocol, accessible through the command-line option `--control`, is a synchronous bidirectional protocol that consists of a sequence of "chunks" sent via the standard input and output streams.

Each chunk contains a sequence of bytes with a length and a three letter tag. Here is an example "version" chunk to demonstrate the syntax:

```
ver 15
Prince 20161219
```

This chunk has a tag `ver` (all tags are three ASCII characters) followed by a space, then the length of the data expressed as a decimal number, then a newline character, then the data itself (15 bytes), then another newline (not part of the data).

This version chunk is emitted by Prince when the control protocol begins and can be used to check the Prince version and confirm that communication is functioning as expected. Prince will then wait for jobs to be submitted.

If a chunk contains no data then the length is zero and the chunk ends with the newline immediately following the length. In fact the length itself may be omitted, making this a perfectly valid chunk:

```
end
```

This `end` chunk consists of three letters and a newline character and can be used to terminate the Prince process when there are no further jobs to process.

Currently the control protocol includes the following chunk types sent by Prince:

-   `ver`, sent at startup
-   `pdf`, a generated PDF file
-   `log`, the complete output log for the job including all errors and warnings
-   `err`, errors relating to the control protocol itself

And these chunks sent by the caller:

-   `job`, the description of a requested conversion job, expressed in JSON
-   `dat`, a file resource needed by the job
-   `end`, to terminate the control connection

A typical interaction looks like this:

```
Prince: ver
Caller: job
Caller: dat
Caller: dat
Prince: pdf
Prince: log
Caller: end
```

Instead of sending the final `end` chunk the caller may choose to submit another `job` chunk and continue converting documents. The protocol is synchronous so replies simply match requests in order.

The `job` chunk contains a description of the conversion job represented in JSON format, which can be followed by an optional sequence of `dat` chunks containing file data which is needed by the job, eg. HTML documents, style sheets, PDF attachments, or whatever.

The number of `dat` chunks is specified by the `job-resource-count` field in the job description, and these files can be accessed via a special job-resource URL scheme, eg. `job-resource:0` will access the content of the first `dat` chunk, then `job-resource:1`, `job-resource:2`, etc. This allows any number of resources to be provided inline with the request and removes the need to create actual temporary files.

The JSON job description ([here](#job-description-json) you can see the full description) has several nested objects with fields corresponding to Prince options:

```json
{
    "input": { <input options> },
    "pdf": { <pdf options> },
    "metadata": { <metadata options> },
    "job-resource-count": <int>
}
```
The `input options` and `job-resource-count` are mandatory, the rest are optional and will default to the normal values.

The `input options` object includes these fields:

```json
{
    "src": <single URL or list of URLs>,
    "type": <string>,
    "base": <string>,
    "media": <string>,
    "styles": [ <list of URLs> ],
    "scripts": [ <list of URLs> ],
    "default-style": <bool>,
    "author-style": <bool>,
    "javascript": <bool>,
    "max-passes": <integer>,
    "iframes": <bool>,
    "xinclude": <bool>,
    "xml-external-entities": <bool>
}
```
Only the `src` field is required, the rest can be left as defaults.

Now we can make some simple job descriptions, eg. to convert a single HTML file:

```json
{
    "input": {
        "src": "/path/to/input.html"
    },
    "job-resource-count": 0
}
```
This can be sent as a single `job` chunk and Prince will respond with a `pdf` chunk if the conversion succeeded and a `log` chunk.

Or you can convert a HTML document without saving it to a temporary file:

```json
{
    "input": {
        "src": "job-resource:0"
    },
    "job-resource-count": 1
}
```
This requires the `job` chunk to be followed by a `dat` chunk that contains the HTML and then Prince will respond as before.

The `pdf options` object includes these fields:

```json
{
    "color-options": "auto" | "use-true-black" | "use-rich-black",
    "embed-fonts": <bool>,
    "subset-fonts": <bool>,
    "artificial-fonts": <bool>,
    "force-identity-encoding": <bool>,
    "compress": <bool>,
    "object-streams": <bool>,
    "encrypt": {
        "key-bits": 40 | 128,
        "user-password": <string>,
        "owner-password": <string>,
        "disallow-print": <bool>,
        "disallow-modify": <bool>,
        "disallow-copy": <bool>,
        "disallow-annotate": <bool>,
        "allow-copy-for-accessibility": <bool>,
        "allow-assembly": <bool>
    },
    "pdf-profile": <string>,
    "pdf-output-intent": <URL>,
    "fallback-cmyk-profile": <URL>,
    "color-conversion": "none" | "output-intent" | "full",
    "pdf-script": <string> | {"url": <URL>},
    "pdf-event-scripts": {
        "will-close": <string> | {"url": <URL>},
        "will-save": <string> | {"url": <URL>},
        "did-save": <string> | {"url": <URL>},
        "will-print": <string> | {"url": <URL>},
        "did-print": <string> | {"url": <URL>}
    },
    "pdf-id": <string>,
    "pdf-lang": <string>,
    "pdf-xmp": <URL>,
    "tagged-pdf": "auto" | <bool>,
    "attach": [ <list of attachments> ]
}
```
Each attachment is a &lt;URL&gt; (string) or an object:

```json
{
    "url": <URL>,
    "filename": <string>,
    "description": <string>
}
```
The `metadata options` object includes these fields:

```json
{
    "title": <string>,
    "subject": <string>,
    "author": <string>,
    "keywords": <string>,
    "creator": <string>,
}
```

#### Job description JSON

The following is the full JSON job description:

```json
{
    "input": {
        "src": <single URL or list of URLs>,
        "type": <string>,
        "base": <string>,
        "media": <string>,
        "styles": [ <list of URLs> ],
        "scripts": [ <list of URLs> ],
        "default-style": <bool>,
        "author-style": <bool>,
        "javascript": <bool>,
        "max-passes": <integer>,
        "iframes": <bool>,
        "xinclude": <bool>,
        "xml-external-entities": <bool>
    },
    "pdf": {
        "color-options": "auto" | "use-true-black" | "use-rich-black",
        "embed-fonts": <bool>,
        "subset-fonts": <bool>,
        "artificial-fonts": <bool>,
        "force-identity-encoding": <bool>,
        "compress": <bool>,
        "object-streams": <bool>,
        "encrypt": {
            "key-bits": 40 | 128,
            "user-password": <string>,
            "owner-password": <string>,
            "disallow-print": <bool>,
            "disallow-modify": <bool>,
            "disallow-copy": <bool>,
            "disallow-annotate": <bool>,
            "allow-copy-for-accessibility": <bool>,
            "allow-assembly": <bool>
        },
        "pdf-profile": <string>,
        "pdf-output-intent": <URL>,
        "fallback-cmyk-profile": <URL>,
        "color-conversion": "none" | "output-intent" | "full",
        "pdf-script": <string> | {"url": <URL>},
        "pdf-event-scripts": {
            "will-close": <string> | {"url": <URL>},
            "will-save": <string> | {"url": <URL>},
            "did-save": <string> | {"url": <URL>},
            "will-print": <string> | {"url": <URL>},
            "did-print": <string> | {"url": <URL>}
        },
        "pdf-id": <string>,
        "pdf-lang": <string>,
        "pdf-xmp": <URL>,
        "tagged-pdf": "auto" | <bool>,
        "attach": [ {
            "url": <URL>,
            "filename": <string>,
            "description": <string>
        } ]
    },
    "metadata": {
        "title": <string>,
        "subject": <string>,
        "author": <string>,
        "keywords": <string>,
        "creator": <string>,
    },
    "job-resource-count": <int>
}
```

### Structured Log

`--structured-log=LEVEL`  
This option is designed to make it easier to integrate other software with Prince. It takes these values:

-   `--no-structured-log`
-   `--structured-log=normal`
-   `--structured-log=quiet`
-   `--structured-log=progress`
-   `--structured-log=buffered`

The default is `--no-structured-log`, in which case error and warning messages will be written to the terminal (stderr stream) as they occur in a human readable format, eg.

```
prince: foo.html: error: can't open input file: No such file or directory
prince: foo.html: error: could not load input file
prince: error: failed to load all input documents
```

Specifying `--structured-log=normal` writes the log messages in an alternate format with fields separated by `|` characters, in order to make it easier to parse by other software.

The first field indicates the type of message, which can be:

-   `sta|` = status message;
-   `prg|` = progress percentage;
-   `fin|` = final outcome, which can be
    -   `fin|success`, or
    -   `fin|failure`;
-   `dat|name|value` = data messages produced by [`Log.data("name", "value")`](js-support.md#window.Log.data);
-   `msg|` = messages, which can be any of the following:
    -   `msg|err` = error message;
    -   `msg|wrn` = warning message;
    -   `msg|inf` = information message;
    -   `msg|dbg` = debug message;
    -   `msg|out` = console output from `console.log()`;

    and always followed by source location and the message itself.

```
msg|err|foo.html|can't open input file: No such file or directory
msg|err|foo.html|could not load input file
msg|err||failed to load all input documents
fin|failure
```

The last `msg|err` message has an empty source location field.

Specifying `--structured-log=quiet` suppresses *all* log messages, except for the final `fin` message, indicating success or failure:

```
fin|failure
```

This allows other software to read the stdout stream from Prince containing the PDF file in its entirety, then read the final status from the stderr stream, without worrying about blocking due to deadlocks.

Specifying `--structured-log=progress` prints percentage log messages for use in GUI applications:

```
prg|94
prg|96
prg|99
prg|100
fin|success
```

Specifying `--structured-log=buffered` is the same as `normal`, but all log messages will be delayed until after the full PDF has been written to the stdout stream, again so that other software can read from stdout and then read the log from stderr without deadlocking.

The deadlock problem happens when Prince writes log messages to stderr and blocks, waiting for the other software to read them, but the other software is blocked waiting for Prince to write the PDF to stdout, leading to a deadlock where both processes hang indefinitely.

By omitting log messages, or by delaying them until after the PDF is written, this deadlock can be avoided. Another option is to use the [Prince Control Protocol](#prince-control-protocol), which also avoids this problem.

### Fail-Safe Options

Prince offers six Fail-Safe Options:

`--fail-dropped-content`  
Fail if any content is dropped, e.g. due to a specified attachment which needs to be dropped because the chosen PDF profile does not support attachments, or due to a layout problem, where Prince cannot pack a block on the page for some reason and is forced to discard it.

`--fail-missing-resources`  
Fail if any resources cannot be loaded, e.g. due to network problems.

`--fail-missing-glyphs`  
Fail if glyphs cannot be found for any characters.

`--fail-pdf-profile-error`  
Fail if there are problems complying with the specified PDF profile, e.g. due to incompatible options.

`--fail-pdf-tag-error`  
Fail if there are problems tagging the PDF document for accessibility.

`--fail-safe`  
Enables all of the preceding fail-safe options.

Usually Prince will try hard to solve any unexpected issues that arise, prioritizing the creation of a PDF - missing glyphs would be represented as a question mark ("?") and resources not loaded would simply be dropped. The fail-safe options are there to prevent the creation of broken PDFs due to temporary network problems or unexpected issues. If the condition specified with one of the command-line options is triggered, the conversion will return an explicit failure status, and no PDF is created. Appropriate action to identify and fix the problem can be taken before attempting a new conversion.

The JavaScript property [`Prince.failStatus`](js-support.md#window.Prince.failStatus) can also be used to trigger an explicit failure status based on custom criteria. See also under [The Prince Object](javascript.md#the-prince-object).


Security
--------

When you control the input, Prince produces the expected output - you are dealing with trusted input with no (intentionally) malicious code.

But when you have no control over the input - as happens when running Prince on a server, where all content is contributed by other users, and thus must at all times be considered untrusted - it is important to take some precautions to avoid any unexpected, or even harmful things happening.

### Untrusted Input

A first step is to thoroughly filter and escape all untrusted content - this includes all text, HTML, XML, SVG, CSS and JavaScript fed to Prince.  All untrusted HTML tags and attributes need to be sanitized with standard HTML sanitizing procedures (whitelisting is always your safer option) before reaching Prince.

This procedure is the same standard safety precaution taken when passing untrusted data to web applications and web forms.  As a starting point, the OWASP Cross Site Scripting Prevention Cheat Sheet has some nice suggestions, summed up in a series of [XSS Prevention Rules](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#xss-prevention-rules).

There are also some [ready-made libraries](https://lib.rs/crates/sanitize_html) to help you [sanitize](https://github.com/rgrove/sanitize) your HTML and CSS.

### Iframes

The HTML standard offers the possibility to embed other HTML files by means of iframes.  To allow for this feature, iframes need to explicitly be enabled with the command-line option [`--iframes`](command-line.md#cl-iframes).

It is highly recommended to never enable iframes when dealing with untrusted data!  This option is not enabled by default.

### XML External Entities and XInclude

Likewise, XML offers various ways of including external content in the parsing, namely external entities, and XInclude.

The XML standard allows for external entities, which can access local or remote content through a declared system identifier by replacing the entity with the contents dereferenced by the system identifier. This may lead to the [disclosure of confidential data](https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html) and other nasty things. To make use of external entities, they have to explicitly be enabled with the command-line option [`--xml-external-entities`](command-line.md#cl-xxe).

XInclude is a generic mechanism for including XML or non-XML data in XML files. It needs to be enabled with the command-line option [`--xinclude`](command-line.md#cl-xinclude) - see [XML Inclusions (XInclude)](prince-input.md#xml-inclusions-xinclude) for more details.

It is highly recommended to *never* enable XML external entities or XInclude when dealing with untrusted data! These options are not enabled by default.

Please also note that, even when enabled, external entities and XIncludes are never processed anywhere but in the main document.  This means that they would not be processed in SVG images included in a document (but they would be processed, if enabled, if the main document were an SVG image).

### Local Files

However, XML external entities and XInclude are not the only way for accessing local files.  Any image, CSS or JavaScript file in an HTML file can point to a local resource!  This can potentially lead to exposing resources that need to be kept confidential: be aware that the URLs are accessed while Prince is running and the *content* is embedded in the PDFs, not just the URLs themselves!

It is important to know that by default, Prince *does* have access to local files.

Therefore, it is good and safe practice to always run Prince with the command-line option [`--no-local-files`](command-line.md#cl-no-local-files) in order to exclude any unwanted access to the local file system when dealing with untrusted content.

### Network Resources

Similarly, it might be desirable to prevent a document fed to Prince to access other external resources over the network, which might possibly circumvent the filtering and escaping mechanisms you might have put in place.

Run Prince with the [`--no-network`](command-line.md#cl-no-network) command-line option to prevent all HTTP downloads.

### Running Prince in a Container

A more comprehensive hardening practice is to run Prince in a chroot, a jail, a VM or a container, in order to completely isolate the process and prevent any potential damage resulting from uncaught malicious untrusted content.

As a general rule, consider that, in order to function best, Prince will need to have access not only to several shared libraries, but also to fonts, and possibly SSL certificates.

For ease of use, Prince offers its own, maintained [Docker Images](https://hub.docker.com/r/yeslogic/prince).  See also [Prince In Cloud Computing](#prince-in-cloud-computing) for more installation guides in cloud containers.




Performance
-----------

When preparing PDFs for printing, high performance is at times not as important as proper balancing of content on a page spread.

Indeed, Prince for Books, a Prince version specifically addressed at publishers, spends more time on several calculations of line breaking and spread balancing than the standard version. For more details, please consult the [Prince for Books](prince-for-books.md) chapters.

But even for normal PDF creation there are times when performance tweaks are called for - as for example in heavy throughput scenarios. Generally speaking, Prince's performance scales linearly, since it is a standalone application - the more computing power you offer, the faster it will perform.

When running multiple instances of Prince, it might be advisable to disable parallel rasterization with the command-line option [`--raster-threads=1`](command-line.md#cl-raster-threads) to improve throughput.

Setting `GC_MARKERS=1` in the environment will do the same for garbage collection threads.
