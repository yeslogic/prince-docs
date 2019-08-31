---
title: Advanced Command-Line Options
---

Advanced Command-Line Options
-----------------------------

Prince can also be called from the command-line with two special options, useful for understanding the calls Prince can be controlled with, and the output it produces, in order to write your own wrapper: the and the .

### Prince Control Protocol

`prince --control`  
The Prince Control Protocol, accessible through the command-line option `--control`, is a synchronous bidirectional protocol that consists of a sequence of "chunks" sent via the standard input and output streams.

Each chunk contains a sequence of bytes with a length and a three letter tag. Here is an example "version" chunk to demonstrate the syntax:

``
    ver 15
    Prince 20161219

This chunk has a tag `ver` (all tags are three ASCII characters) followed by a space, then the length of the data expressed as a decimal number, then a newline character, then the data itself (15 bytes), then another newline (not part of the data).

This "version" chunk is emitted by Prince when the control protocol begins and can be used to check the Prince version and confirm that communication is functioning as expected. Prince will then wait for jobs to be submitted.

If a chunk contains no data then the length is zero and the chunk ends with the newline immediately following the length. In fact the length itself may be omitted, making this a perfectly valid chunk:

``
    end

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

``
    Prince: ver
    Caller: job
    Caller: dat
    Caller: dat
    Prince: pdf
    Prince: log
    Caller: end

Instead of sending the final `end` chunk the caller may choose to submit another `job` chunk and continue converting documents. The protocol is synchronous so replies simply match requests in order.

The `job` chunk contains a description of the conversion job represented in JSON format, which can be followed by an optional sequence of `dat` chunks containing file data which is needed by the job, eg. HTML documents, style sheets, PDF attachments, or whatever.

The number of `dat` chunks is specified by the `job-resource-count` field in the job description, and these files can be accessed via a special job-resource URL scheme, eg. `job-resource:0` will access the content of the first `dat` chunk, then `job-resource:1`, `job-resource:2`, etc. This allows any number of resources to be provided inline with the request and removes the need to create actual temporary files.

The JSON job description has several nested objects with fields corresponding to Prince options:

``
    {
        "input": { <input options> },
        "pdf": { <pdf options> },
        "metadata": { <metadata options> },
        "raster": { <raster options> },
        "job-resource-count": <int>
    }

The `input options` and `job-resource-count` are mandatory, the rest are optional and will default to the normal values.

The `input options` object includes these fields:

``
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
        "xinclude": <bool>,
        "xml-external-entities": <bool>
    }

Only the `src` field is required, the rest can be left as defaults.

Now we can make some simple job descriptions, eg. to convert a single HTML file:

``
    {
        "input": {
            "src": "/path/to/input.html"
        },
        "job-resource-count": 0
    }

This can be sent as a single `job` chunk and Prince will respond with a `pdf` chunk if the conversion succeeded and a `log` chunk.

Or you can convert a HTML document without saving it to a temporary file:

``
    {
        "input": {
            "src": "job-resource:0"
        },
        "job-resource-count": 1
    }

This requires the `job` chunk to be followed by a `dat` chunk that contains the HTML and then Prince will respond as before.

The `pdf options` object includes these fields:

``
    {
        "color-options": "auto" | "use-true-black" | "use-rich-black",
        "embed-fonts": <bool>,
        "subset-fonts": <bool>,
        "artificial-fonts": <bool>,
        "force-identity-encoding": <bool>,
        "compress": <bool>,
        "encrypt": {
            "key-bits": 40 | 128,
            "user-password": <string>,
            "owner-password": <string>,
            "disallow-print": <bool>,
            "disallow-modify": <bool>,
            "disallow-copy": <bool>,
            "disallow-annotate": <bool>
        },
        "pdf-profile": <string>,
        "pdf-output-intent": <URL>,
        "fallback-cmyk-profile": <URL>,
        "color-conversion": "none" | "full",
        "pdf-lang": <string>,
        "pdf-xmp": <url>,
        "tagged-pdf": "auto" | <bool>,
        "attach": [ <list of attachments> ]
    }

Each attachment is a &lt;url&gt; (string) or an object:

``
    {
        "url": <url>,
        "filename": <string>,
        "description": <string>
    }

The `metadata options` object includes these fields:

``
    {
        "title": <string>,
        "subject": <string>,
        "author": <string>,
        "keywords": <string>,
        "creator": <string>,
    }

The `raster options` object includes these fields:

``
    {
        "dpi": <integer>,
        "background": "white" | "transparent"
    }

### Structured Log

`--structured-log=LEVEL`  
This option is designed to make it easier to integrate other software with Prince. It takes these values:

-   `--no-structured-log`
-   `--structured-log=normal`
-   `--structured-log=quiet`
-   `--structured-log=progress`
-   `--structured-log=buffered`

The default is `--no-structured-log`, in which case error and warning messages will be written to the terminal (stderr stream) as they occur in a human readable format, eg.

``
    prince: foo.html: error: can't open input file: No such file or directory
    prince: foo.html: error: could not load input file
    prince: error: failed to load all input documents

Specifying `--structured-log=normal` writes the log messages in an alternate format with fields separated by `|` characters, in order to make it easier to parse by other software.

The first field indicates the type of message, which can be:

-   `sta|` = status message;
-   `prg|` = progress percentage;
-   `fin|` = final outcome, which can be
    -   `fin|success`, or
    -   `fin|failure`;
-   `dat|name|value` = data messages produced by [`Log.data("name", "value")`](doc-latest/doc-refs.html#window.Log.data);
-   `msg|` = messages, which can be any of the following:
    -   `msg|err` = error message;
    -   `msg|wrn` = warning message;
    -   `msg|inf` = information message;
    -   `msg|dbg` = debug message;
    -   `msg|out` = console output from `console.log()`;

    and always followed by source location and the message itself.

``
    msg|err|foo.html|can't open input file: No such file or directory
    msg|err|foo.html|could not load input file
    msg|err||failed to load all input documents
    fin|failure

The last `msg|err` message has an empty source location field.

Specifying `--structured-log=quiet` suppresses *all* log messages, except for the final `fin` message, indicating success or failure:

``
    fin|failure

This allows other software to read the stdout stream from Prince containing the PDF file in its entirety, then read the final status from the stderr stream, without worrying about blocking due to deadlocks.

Specifying `--structured-log=progress` prints percentage log messages for use in GUI applications:

``
    prg|94
    prg|96
    prg|99
    prg|100
    fin|success

Specifying `--structured-log=buffered` is the same as `normal`, but all log messages will be delayed until after the full PDF has been written to the stdout stream, again so that other software can read from stdout and then read the log from stderr without deadlocking.

The deadlock problem happens when Prince writes log messages to stderr and blocks, waiting for the other software to read them, but the other software is blocked waiting for Prince to write the PDF to stdout, leading to a deadlock where both processes hang indefinitely.

By omitting log messages, or by delaying them until after the PDF is written, this deadlock can be avoided. Another option is to use the , which also avoids this problem.


