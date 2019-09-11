---
title: The C\# / .Net Wrapper
---

### The C\# / .Net Wrapper

Prince can be called from .NET languages using the [Prince C\# / .Net wrapper](wrappers.html#wrapper-csharp).

The wrapper package contains:

-   the DLL file,
-   the [API documentation](wrappers/csharp/readme.html) and
-   the source code.

#### Using Prince with C\#

To use the Prince .NET wrapper in C\#, add a reference to the DLL to your Visual Studio project.

To convert HTML or XML files into PDF, instantiate a Prince object with the full path to the Prince engine executable file. Once this is done, you can apply style sheets and scripts, or configure other properties by calling the appropriate subroutines. Finally, you can call one of the Convert functions to generate a PDF file.

Please note that document scripts need to first be enabled with `prn.SetJavaScript(true)` - external scripts added with `AddScript` will always be run.

The following code sample demonstrates how to convert a single HTML document into a PDF file:

``
    // instantiate Prince by specifying the full path to the engine executable
    Prince prn = new Prince("C:\\Program Files\\Prince\\Engine\\bin\\prince.exe");

    // specify the log file for error and warning messages
    // make sure that you have write permissions for this file
    prn.SetLog("C:\\docs\\log.txt");

    // apply a CSS style sheet (optional)
    prn.AddStyleSheet("C:\\docs\\css\\stylesheet-1.css");

    // apply an external JavaScript file (optional) and enable document JavaScript
    prn.AddScript("C:\\docs\\js\\test.js");
    prn.SetJavaScript(true);

    // convert a HTML document into a PDF file
    prn.Convert("C:\\docs\\test1.html", "C:\\docs\\pdf\\test1.pdf");

To combine multiple HTML documents into a single PDF file, call `ConvertMultiple`:

``
    String[] doc_array = {"C:\\docs\\test1.html", "C:\\docs\\test2.html"};

    prn.ConvertMultiple(doc_array, "C:\\docs\\pdf\\merged.pdf");

#### Using Prince with VB.NET

To use the Prince [The C\# / .Net Wrapper](doc-latest/dotnet.html#csharp) in VB.NET, add a reference to the DLL to your Visual Studio project. Alternatively, you can include the Prince.vb source file directly if you prefer.

To convert HTML or XML files into PDF, instantiate a Prince object with the full path to the Prince engine executable file. Once this is done, you can apply style sheets and scripts, or configure other properties by calling the appropriate subroutines. Finally, you can call one of the Convert functions to generate a PDF file.

Please note that document scripts need to first be enabled with `prn.SetJavaScript(true)` - external scripts added with `AddScript` will always be run.

The following code sample demonstrates how to convert a single HTML document into a PDF file:

``
    ' instantiate Prince by specifying the full path to the engine executable
    Dim prn As Prince

    prn = New Prince("C:\Program Files\Prince\Engine\bin\prince.exe")

    ' specify the log file for error and warning messages
    ' make sure that you have write permissions for this file
    prn.SetLog("C:\docs\log.txt")

    ' apply a CSS style sheet (optional)
    prn.AddStyleSheet("C:\docs\css\stylesheet-1.css")

    // apply an external JavaScript file (optional) and enable document JavaScript
    prn.AddScript("C:\\docs\\js\\test.js")
    prn.SetJavaScript(true)

    ' convert a HTML document into a PDF file
    prn.Convert("C:\docs\test1.html", "C:\docs\pdf\test1.pdf")

To combine multiple HTML documents into a single PDF file, call `ConvertMultiple`:

``
    Dim doc_array() As String

    doc_array = {"C:\docs\test1.html", "C:\docs\test2.html"}

    prn.ConvertMultiple(doc_array, "C:\docs\pdf\merged.pdf")

