---
title: Troubleshooting
---

Troubleshooting
---------------

We work hard to make Prince work on multiple platforms (Windows, Linux, etc) and with multiple configurations. However things don't always work correctly the first time. You're very welcome to [contact us](contact.html) for support or visit our [forum](forum/forum.html). However if you are facing a common problem, you may be able to find an explanation and solution below.

### Output log

When running into trouble with Prince, the first thing you should do is to check for any errors. These can be found in the Prince output log.

When launching Prince from the command line, Prince will print any error or warning messages directly to the console, prefixed with `error:` or `warning:` messages. The level of verbosity, or a log file where to print all output, can be controlled with a few command-line . A more advanced control of the output is given by the .

When using the Prince GUI, the output log is printed to the log window on the bottom left of the main GUI window.

### Image formats

Symptom  
``
    prince: ./picture.bmp: warning: Unknown image format

Explanation  
Prince supports JPEG, PNG, TIFF and GIF images as well as SVG (see ). If you try to format a document that includes images in a format that is not supported by Prince, such as BMP, you may see the above error message from Prince.

Solution  
The solution is to convert the image file into a format that is supported by Prince. We suggest PNG, which is a well-supported general purpose image format with lossless compression.

### The capture/replay system

Prince offers a convenient capture/replay system with the two command-line options [--capture](doc-latest/doc-refs.html#cl-capture) and [--replay](doc-latest/doc-refs.html#cl-replay) - the former saving a copy of all the information in a job to a specified directory, including the input document(s) and all of the resources referenced by them and on the command line (including remote HTTP resources), such as style sheets, images, JavaScript files, fonts, etc., conveniently allowing it to be replayed later for debugging purposes with the latter command-line option. The directory might contain sensitive information (as far as included in the PDF job), so we recommend only submitting them by email when requested to do so, instead of posting them on the forum.

### Running the debug script

For assisting in tracking down difficult platform bugs, the `princedebug` script is available on Linux and MacOS X platforms. It is located in `/usr/lib/prince/bin` and runs Prince with the specified command-line arguments, dumping a considerable amount of debug information to two files in the `/tmp` directory, namely `prince.debug` and `prince.strace`. These files contain information about the system and environment in which Prince was run, and about the job in question, so we recommend only submitting them by email when requested to do so, instead of posting them on the forum.

This script is not available on Windows.
