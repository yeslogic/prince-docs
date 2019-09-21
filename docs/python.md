---
title: Using Prince with Python
---

### Using Prince with Python

Prince can be called from Python using the [command-line interface](doc-refs.md#command-line), like this:


    import subprocess

    subprocess.call(["prince","foo.xml","bar.pdf"]);

It is possible to write XML to Prince directly from the Python script rather than have Prince read it from an external file:


    import subprocess

    p = Popen(["prince","-","out.pdf"], stdin=subprocess.PIPE, stdout=subprocess.PIPE)

    outs, errs = p.communicate("<html><body><h1>Hello, world!</h1></body></html>".encode("utf-8"))

    if p.returncode :
      # Ugh.
    else :
      pdf = outs

The first filename argument of "-" instructs Prince to read the XML from its standard input stream rather than from a file.

For Python CGI scripts, the PDF output can be written to the standard output stream so that it is returned to the browser:


    import subprocess

    p = Popen(["prince","-"], stdin=subprocess.PIPE, stdout=subprocess.PIPE)

    outs, errs = p.communicate("<html><body><h1>Hello, world!</h1></body></html>".encode("utf-8"))

    if p.returncode :
      # Ugh.
    else :
      pdf = outs

Because the second filename argument has been omitted and the XML is being read from standard input, the PDF will be written to standard output. Be careful to redirect the output of this script if you try running it from the terminal.

Alternatively, it is possible for the Python script to read the PDF output directly rather than have Prince save it to an external file:


    import subprocess

    p = Popen(["prince","-"], stdin=subprocess.PIPE, stdout=subprocess.PIPE)

    outs, errs = p.communicate("<html><body><h1>Hello, world!</h1></body></html>".encode("utf-8"))

    if p.returncode :
      # Ugh.
    else :
      pdf = outs

    print("PDF is "+str(len(pdf))+" bytes in size")

