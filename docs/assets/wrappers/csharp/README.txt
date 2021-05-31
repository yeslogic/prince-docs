
Prince C# class
-----------------------------------------------
The prince.cs file defines a class called Prince that contains methods that can be called to 
convert XML and HTML documents into PDF. 

There is a public interface called PrinceEvents which can be implemented by the user to allow
messages from Prince to be handled during conversion.
 


Constructors:
-----------------------------------------------

1) public Prince(string princePath)

   	Example: 
		Prince prn = new Prince("C:\\Program Files\\Prince\\Engine\\bin\\prince.exe");


2) public Prince(string princePath, PrinceEvents events)

	Example:

		Implement a class for the interface PrinceEvents and make an instance of that class.
		Pass the instance to the Prince constructor:

		Prince prn = new Prince("C:\\Program Files\\Prince\\Engine\\bin\\prince.exe", events);

		
On Windows, be sure to specify the path to the prince.exe file located within the Engine\bin subfolder 
of the Prince installation. 




Conversion methods
-----------------------------------------------

1)   public bool Convert(string xmlPath)

	Convert an XML or HTML file to a PDF file.


2)   public bool Convert(string xmlPath, string pdfPath)

	Convert an XML or HTML file to a PDF file specified by pdfPath.


3)   public bool ConvertMultiple(string[] xmlPaths, string pdfPath)

	Convert multiple XML or HTML files to a PDF file specified by pdfPath.


4)   public bool Convert(string xmlPath, Stream pdfOutput)

	Convert an XML or HTML file to a PDF which is written to the stream specified by pdfOutput.


5)   public bool Convert(Stream xmlInput, string pdfPath)

	Convert the XML or HTML read from stream xmlIput to a PDF file specified by pdfPath.


6)   public bool Convert(Stream xmlInput, Stream pdfOutput)

	Convert the XML or HTML read from stream xmlIput to a PDF which is written to the stream 
	specified by pdfOutput.


7)   public bool ConvertMemoryStream(MemoryStream xmlInput, Stream pdfOutput)

	Convert the XML or HTML read from MemoryStream xmlInput to a PDF which is written to 
	the stream specified by pdfOutput.


8)   public bool ConvertString(string xmlInput, Stream pdfOutput)

	Convert the XML or HTML read from the string xmlInput to a PDF which is written 
	to the stream specified by pdfOutput.





Configuration methods
-----------------------------------------------

1)   public void AddStyleSheet(string cssPath)

	Add the CSS style sheet specified by cssPath. 
	It will be applied to each input document. 
	Multiple style sheets can be accumulated by calling the function repeatedly. 


2)   public void ClearStyleSheets()

	Clear all of the CSS style sheets accumulated.


3)   public void AddScript(string jsPath)

	Add a JavaScript specified by jsPath.
	Multiple JavaScript's can be added by calling the function repeatedly. 


4)   public void ClearScripts()

	Clear all Javascript's.


5)   public void AddFileAttachment(string filePath)

	Add a file attachment specified by filePath that will be attached to the PDF file.
	Multiple file attachments can be added by calling the function repeatedly.


6)   public void ClearFileAttachments()

	Clear all of the file attachments.


7)   public void SetLicenseFile(string file)

	Notify Prince the license file.


8)   public void SetLicensekey(string key)

	Set the license key.


9)   public void SetInputType(string inputType)

	Specify the input type of the document.
	The inputType value can be: "xml", "html" or "auto".


10)  public void SetJavaScript(bool js)

	Specify whether to run Javascripts in documents.


11)  public void SetHttpUser(string user)

	Specify the username to use when accessing remote resources over HTTP.


12)  public void SetHttpPassword(string password)

	Specify the password to use when accessing remote resources over HTTP


13)  public void SetHttpProxy(string proxy)

	Specify the URL for the HTTP proxy server, if needed.


14)  public void SetInsecure(bool insecure)

	Specify whether to disable SSL verification. 
 	If set to true, SSL verification is disabled. (not recommended)


15)  public void SetHTML(bool html)

	If set true, document will be parsed as HTML.
	If set false, document will be parsed as XML.


16)  public void SetLog(string logFile)

	Specify the log file for writing error/warning messages.


17)  public void SetBaseURL(string baseURL)

	Specify the base URL of the input document. 
        baseURL is The base URL, or the path of the input document, or ''.
 

18)  public void SetFileRoot(string fileRoot)

	Specify the root directory for absolute filenames. 
        This can be used when converting a local file that uses absolute paths to refer to web resources. 
	For example, /images/logo.jpg can be rewritten to /usr/share/images/logo.jpg 
 	by specifying "/usr/share" as the root. 


19)  public void SetXInclude(bool xInclude)

	Specify whether XML Inclusions (XInclude) processing should be applied to input documents. 
	XInclude processing will be performed by default unless explicitly disabled. 


20)  public void SetEmbedFonts(bool embed)

	Specify whether fonts should be embedded in the output PDF file. 
	Fonts are embedded by default unless explicitly disabled. 


21)  public void SetSubsetFonts(bool subset)

	Specify whether embedded fonts should be subset in the output PDF file. 
	Fonts are subset by default unless explicitly disabled. 


22)  public void SetCompress(bool compress)

	Specfy whether compression should be applied to the output PDF file. 
	Compression is applied by default unless explicitly disabled. 


23)  public void SetNoArtificialFonts(bool noArtificialFonts)
	
	Specify whether artificial bold/italic fonts should be generated if necessary. 
	Artificial fonts are enabled by default. 
	

24)  public void SetPDFTitle(string pdfTitle)

	Specify the document title for PDF metadata.


25)  public void SetPDFSubject(string pdfSubject)

	Specify the document subject for PDF metadata.


26)  public void SetPDFAuthor(string pdfAuthor)

	Specify the document author for PDF metadata.


27)  public void SetPDFKeywords(string pdfKeywords)

	Specify the document keywords for PDF metadata.


28)  public void SetPDFCreator(string pdfCreator)

	Specify the document creator for PDF metadata.


29)  public void SetAuthMethod(string authMethod)

	Specify HTTP authentication methods. (basic, digest, ntlm, negotiate)


30)  public void SetAuthUser(string authUser)

	Specify username for HTTP authentication.


31)  public void SetAuthPassword(string authPassword)

	Specify password for HTTP authentication.


32)  public void SetAuthServer(string authServer)

	Only send USER:PASS to this server.


33)  public void SetAuthScheme(string authScheme)

	Only send USER:PASS for this scheme. (HTTP, HTTPS)


34)  public void SetNoAuthPreemptive(bool noAuthPreemptive)

	Do not authenticate with named servers until asked.


35)  public void SetPageSize(string pageSize)

	Specify the page size (eg. A4).


36)  public void SetPageMargin(string pageMargin)

	Specify the page margin (eg. 20mm).


37)  public void SetEncrypt(bool encrypt)

	Specify whether to apply encryption to the output PDF file. 
	The default is no encryption.


38)  public void SetEncryptInfo(int keyBits, 
                               string userPassword, 
                               string ownerPassword, 
                               bool disallowPrint, 
                               bool disallowModify, 
                               bool disallowCopy, 
                               bool disallowAnnotate)

	Set the parameters used for PDF encryption. 
	Calling this method will also enable encryption, equivalent to calling setEncrypt(true). 
	It should be called before calling a convert method for encryption information to be applied.

 	keyBits:		The size of the encryption key in bits (must be 40 or 128).
	userPassword: 		The user password for the PDF file (may be empty).
	ownerPassword:		The owner password for the PDF file (may be empty).
	disallowPrint:		True to disallow printing of the PDF file.
	disallowModify:		True to disallow modification of the PDF file.
	disallowCopy:		True to disallow copying from the PDF file.
	disallowAnnotate:	True to disallow annotation of the PDF file.


39)  public void SetOptions(string options)

	Set other options.
	



Copyright © 2005-2015 YesLogic Pty. Ltd. 
