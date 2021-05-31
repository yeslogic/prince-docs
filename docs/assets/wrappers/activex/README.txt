Prince ActiveX Dll file:	Prince.dll
Object Class:			PrinceCom.Prince
Class Methods:

	Public Sub SetPrincePath(ByVal exePath As String)

	Public Function Convert(ByVal xmlPath As String, _
                                Optional ByVal pdfPath As String = "") As Long

	Public Function ConvertMultiple(ByRef xmlPaths() As String, ByVal pdfPath As String)

	Public Sub AddStyleSheet(ByVal cssPath As String)
   	
	Public Sub ClearStyleSheets()

	Public Sub AddScript(ByVal jsPath As String)

	Public Sub ClearScripts()

	Public Sub AddFileAttachment(ByVal filePath As String)

	Public Sub ClearFileAttachments()

	Public Sub SetLicenseFile(ByVal file As String)

	Public Sub SetLicenseKey(ByVal key As String)

	Public Sub SetInputType(ByVal inputType As String)

	Public Sub SetJavaScript(ByVal js As Boolean)

	Public Sub SetHTML(ByVal html As Boolean)

	Public Sub SetLog(ByVal logFile As String)

	Public Sub SetBaseURL(ByVal baseurl As String)

	Public Sub SetXInclude(ByVal xinclude As Boolean)

	Public Sub SetHttpUser(ByVal user As String)

	Public Sub SetHttpPassword(ByVal password As String)

	Public Sub SetHttpProxy(ByVal proxy As String)

	Public Sub SetInsecure(ByVal insecure As Boolean)

	Public Sub SetFileRoot(ByVal fileRoot As String)

	Public Sub SetEmbedFonts(ByVal embed As Boolean)

	Public Sub SetSubsetFonts(ByVal subset As Boolean)

	Public Sub SetCompress(ByVal compress As Boolean)

	Public Sub SetExtraOptions(ByVal extra As String)

	Public Sub SetEncrypt(ByVal encrypt As Boolean)

	Public Sub SetEncryptInfo(ByVal keyBits As Integer, _
                          	  ByVal userPassword As String, _
                          	  ByVal ownerPassword As String, _
                         	  ByVal disallowPrint As Boolean, _
                          	  ByVal disallowModify As Boolean, _
                          	  ByVal disallowCopy As Boolean, _
                          	  ByVal disallowAnnotate As Boolean)

Note:	

	1) Procedure SetPrincePath takes one string argument: exePath
		
		Argument exePath is the full path of the prince.exe file. if you have Prince installed,
		it should be in the prince\engine\bin directory.
		This procedure should be called to set the Prince path attribute before calling the Convert
		function. Convert will exit with an error if the Prince path attribute is not set correctly.

	
	2) Function Convert takes two arguments:
		
		1. String xmlPath is the full path of the xml file
		2. String pdfPath is optional, and is the full path of the output pdf file. If this argument
		   is omitted, the output pdf file is placed in the same directory as the input xml file

	   	This function returns 1 if conversion is successful, 0 if conversion fails.

	3) Function ConvertMultiple takes two arguments:

		1. String array xmlPaths contains the full paths of the documents to be converted.
		2. String pdfPath is the full path of the output pdf file.

		This function returns 1 if conversion is successful, 0 if conversion fails.

	4) Procedure AddStyleSheet takes a string argument: cssPath
	   
		CssPath is the full path of the Cascading Style Sheet css file. 
	   	AddStyleSheet can be called more than once to add multiple style sheets. 
		Style sheets will be accumulated and applied to the conversion. 
	   	This procedure can be called before calling a convert function.

	5) Procedure ClearStyleSheets clears all of the accumulated style sheet(s).

	6) Procedure AddScript takes a string argument: jsPath

		JsPath is the full path of the javascript file.
		AddScript can be called more than once to add multiple scripts. 
		This procedure can be called before calling a convert function.

	7) Procedure ClearScripts clears all of the scripts accumulated by calling AddScript.

	8) Procedure AddFileAttachment takes a string argument: filePath

		FilePath is the full path of the file to be attached to the PDF file.
		AddFileAttachment can be called more than once to add multiple file attachements.
		This procedure can be called before calling a convert function. 

	9) Procedure ClearFileAttachments clears all of the file attachments accumulated by calling AddFileAttachment.

	10) Procedure SetLicenseFile takes a string argument: file

		Specify the license file. Argument file is the full path of the license file.

	11) Procedure SetLicenseKey take a string argument: key

		Specify the license key. Argument key is the license key.

	12) Procedure SetInputType takes a string argument: inputType

		Specify the type of the input document.
		Argument inputType can take a value of : "xml", "html" or "auto".
	
	13) Procedure SetJavaScript takes a boolean argument: js

		Specify whether Javascripts found in documents should be run.
		Document scripts will be run if js is true.

	14) Procedure SetHTML takes a boolean argument: html

		Specify whether documents should be parsed as HTML or XML/XHTML.
		All documents will be treated as HTML if html is true.

	15) Procedure SetLog takes a string argument: logFile
		
		Specify a file that Prince should use to log error/warning messages.
		Argument logFile is the full path of the log file.
		Logging will be disabled if logFile is the empty string. 

	16) Procedure SetBaseURL takes a string argument: baseurl

		Specify the base URL of the input document.
		Argument baseurl is the base URL or path of the input document, or the empty string.

	17) Procedure SetXInclude takes a boolean argument: xinclude

		Specify whether XML Inclusions (XInclude) processing should be applied to input documents. 
		XInclude processing will be performed by default unless explicitly disabled. 
		XInclude processing will be disabled if xinclude is false.

	18) Procedure SetHttpUser takes a string argument: user
	
		Specify a username to use when fetching remote resources over HTTP. 
		Argument user is the username to use for basic HTTP authentication.

	19) Procedure SetHttpPassword takes a string argument: password

		Specify a password to use when fetching remote resources over HTTP. 
		Argument password is The password to use for basic HTTP authentication.

	20) Procedure SetHttpProxy takes a string argument: proxy

		Specify the URL for the HTTP proxy server, if needed. 
		Argument proxy is the URL for the HTTP proxy server.

	21) Procedure SetInsecure takes a boolean argument: insecure
		
		Specify whether to disable SSL verification. 
		If insecure is true, SSL verification will be disabled. (not recommended)
		
	22) Procedure SetFileRoot takes a string argument: fileRoot
		
		Specify the root directory for absolute filenames. 
		This can be used when converting a local file that uses absolute paths to refer to web resources. 
		For example, /images/logo.jpg can be rewritten to /usr/share/images/logo.jpg by specifying "/usr/share" as the root.
		Argument fileRoot is the path to prepend to absolute filenames.

	23) Procedure SetEmbedFonts takes a boolean argument: embed

		Specify whether fonts should be embedded in the output PDF file. 
		Fonts will be embedded by default unless explicitly disabled. 
		PDF font embedding will be disabled if embed is false.

	24) Procedure SetSubsetFonts takes a boolean argument: subset

		Specify whether embedded fonts should be subset in the output PDF file.
		Fonts will be subset by default unless explicitly disabled. 
		PDF font subsetting will be disabled if subset is false.

	25) Procedure SetCompress takes a boolean argument: compress
		
		Specify whether compression should be applied to the output PDF file. 
		Compression will be applied by default unless explicitly disabled. 
		PDF compression will be disabled if compress is false.

	26) Procedure SetEncrypt takes a boolean argument: encrypt

		Specify whether encryption should be applied to the output PDF file. 
		Encryption will not be applied by default unless explicitly enabled. 
		PDF encryption will be enabled if encrypt is true.

	27) Procedure SetEncryptInfo takes seven arguments. They are related to encryption of the output pdf file.
	    This procedure can be called if encryption is required. It can be called before calling a convert function.

		1. Integer keyBits can be either 40 or 128.
		2. String userPassword sets the password the user will have to type in to open the pdf file 
		   as a user.
		3. String ownerPassword sets the password the user will have to type in to open the pdf file 
		   as the owner.
		4. Boolean disallowPrint, if set true, printing will be disallowed for the user.
		5. Boolean disallowModify, if set true, modifying will be disallowed for the user.
		6. Boolean disallowCopy, if set true, copying text will be disallowed for the user.
		7. Boolean disallowAnnotate, if set true, Annotation will be disallowed for the user.

	28) Messages from Prince are passed on to the caller as events. An event is raised for each message Prince
	   outputs. The message event is declared as follows:

		Public Event Message(msgType As String, msgLocation As String, msg As String)

	   It has three string arguments representing the message type, its location and the message.

		1. msgType:
				Value    Meaning				

				"inf" -- information
				"wrn" -- warning
				"err" -- error

		2. msgLocation: shows where the message came from or where the error occured (this can be empty).

		3. msg: is the content of the message
				

	   Visual Basic Users wishing to write an event handler to process messages from Prince will need to
	   declare a WithEvents variable, create a Prince class object then assign the the latter to the former.
	   	
		Example:   	
			Dim WithEvents pr As Prince
			...
			Set pr = New Prince
