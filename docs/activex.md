#### Using Prince with ActiveX / COM / Visual Basic

Prince can be called from Visual Basic and other languages on Windows using the ActiveX/COM interface.

This interface is provided in the form of an ActiveX DLL file that needs to be registered in the Windows registry using REGSVR32.EXE:

``
    regsvr32 C:\Prince\PRINCE.dll

Please read the README.TXT file that comes with the ActiveX DLL file for more details of the COM interface methods.
