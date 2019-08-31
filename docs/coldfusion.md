---
title: Using Prince with ColdFusion
---

### Using Prince with ColdFusion

Prince can be called from ColdFusion pages using the Java interface or the ActiveX/COM interface, if on Windows.

#### Using Java

Start by downloading the Java interface for Prince. This package contains:

-   A single JAR file (`prince.jar`),
-   the [API documentation](wrappers/java/doc/index.html) and
-   the Java source code for reference.

The `Prince.jar` file contains the class file that provides the Java interface to Prince (`com.princexml.Prince`). The documentation lists the Java class methods and explains how to use them.

Place the `Prince.jar` file in a directory of your choice then start ColdFusion Administrator. Under 'Server Settings &gt; Java and JVM', you should find 'ColdFusion Class Path'. Here you can tell ColdFusion where to look for Java classes. Type in the full path of the `Prince.jar` file. It should be something like: `PATH\Prince.jar`, where `PATH` is the path of the directory that contains the `Prince.jar`.

If this is done correctly, ColdFusion should know where to find the Prince Java interface class. The following is some sample CFML code showing how to use it:

``
    <cfscript>
       pr = CreateObject("java", "com.princexml.Prince");

       pr.init("C:\Prince\engine\bin\prince.exe");
       pr.addStyleSheet("C:\Prince\test\test1.css");
       pr.addStyleSheet("C:\Prince\test\test2.css");
       pr.setJavaScript(true);
       pr.setEncryptInfo(128, "secretPassword1", "secretPassword2",
          True, True, True, True);

       if (pr.Convert("C:\Prince\examples\magic.html", "C:\output.pdf"))
          WriteOutput("Successful");
       else
          WriteOutput("Unsuccessful");
    </cfscript>

If on Linux, substitute the paths with the appropriate UNIX style paths.

#### Using ActiveX/COM

If you are running ColdFusion on Windows, you can also call Prince using the ActiveX/COM interface.

This interface is provided in the form of an ActiveX DLL file that needs to be registered in the Windows registry using REGSVR32.EXE:

``
    regsvr32 C:\Prince\PRINCE.dll

In order to call Prince from ColdFusion, we need to create a COM object using the CreateObject function that is available in CFML scripting (you can also use the `<cfobject ...>` tag if you prefer). Once the COM object is created, you can use the COM interface methods to perform the tasks.

The following is some sample code for illustration:

``
    <cfscript>
       pr = CreateObject("Com", "PrinceCom.Prince", "local");

       pr.SetPrincePath("C:\Prince\engine\bin\prince.exe");
       pr.AddStyleSheet("C:\Prince\test\test1.css");
       pr.AddStyleSheet("C:\Prince\test\test2.css");
       pr.setJavaScript(true);
       pr.SetEncryptInfo(128, "secretPassword1", "secretPassword2",
          True, True, True, True);

       if (pr.Convert("C:\Prince\examples\magic.html", "C:\output.pdf") eq 1)
          WriteOutput("Successful");
       else
          WriteOutput("Unsuccessful");

       ReleaseComObject(pr);
    </cfscript>

Please read the README.TXT file that comes with the ActiveX DLL file for more details of the COM interface methods.
