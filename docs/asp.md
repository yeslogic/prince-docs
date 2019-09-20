---
title: The ActiveX/COM Wrapper
---

### The ActiveX/COM Wrapper

The [ActiveX/COM wrapper](wrappers.html#wrapper-activex) allows Prince to be called from various languages: [ASP](asp.html#asp), [ActiveX, COM, Visual Basic](activex.html#activex) and also [Coldfusion](coldfusion.html#coldfusion).

This package contains two files:

-   The `PRINCE.dll` file and
-   the [API documentation](wrappers/activex/readme.html).

#### Using Prince with ASP

Prince can be called from ASP pages using the [ActiveX/COM interface](asp.html#activex-com).

This interface is provided in the form of an ActiveX DLL file that needs to be registered in the Windows registry using REGSVR32.EXE:


    regsvr32 C:\Prince\PRINCE.dll

In order to call Prince from an ASP page, we need to create a COM object using the CreateObject server method. Once the COM object is created, you can use the COM interface methods to perform the tasks.

Please note that document scripts need to first be enabled with `prn.SetJavaScript(true)` - external scripts added with `AddScript` will always be run.

The following is some sample code for illustration:


    <%
    Dim pr
    Dim res

    Set pr = Server.CreateObject("PrinceCom.Prince")
    pr.SetPrincePath "C:\Prince\engine\bin\prince.exe"
    pr.AddStyleSheet "C:\Prince\css\test1.css"
    pr.AddStyleSheet "C:\Prince\css\test2.css"
    pr.SetJavaScript(True)
    pr.SetEncryptInfo 128, "password1", "password2", true, true, true, true

    If pr.Convert("C:\Prince\examples\magic.html", "C:\output.pdf") = 1 Then
        res = "Successful"
    Else
        res = "Unsuccessful"
    End If
    %>

