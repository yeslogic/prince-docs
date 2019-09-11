---
title: Using Prince with Perl
---

### Using Prince with Perl

Prince can be called from Perl using the [command-line interface](doc-latest/doc-refs.html#command-line), like this:

``
    system("prince foo.xml bar.pdf");

It is possible to write XML to Prince directly from the Perl script rather than have Prince read it from an external file:

``
    open(PRINCE, "| prince - out.pdf");
    print PRINCE "<html><body><h1>Hello, world!</h1></body></html>";
    close(PRINCE);

The first filename argument of "-" instructs Prince to read the XML from its standard input stream rather than from a file.

For Perl CGI scripts, the PDF output can be written to the standard output stream so that it is returned to the browser:

``
    print "Content-Type: application/pdf\n\n";
    open(PRINCE, "| prince -");
    print PRINCE "<html><body><h1>Hello, world!</h1></body></html>";
    close(PRINCE);

Because the second filename argument has been omitted and the XML is being read from standard input, the PDF will be written to standard output. Be careful to redirect the output of this script if you try running it from the terminal.

Alternatively, it is possible for the Perl script to read the PDF output directly rather than have Prince save it to an external file:

``
    open(PRINCE, "prince foo.xml - |");
    # ... read PDF output from PRINCE file handle
    close(PRINCE);

