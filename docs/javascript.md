Scripting
=========

JavaScript can be used to transform documents by generating tables of contents and indices, sorting tables, rendering charts and graphs, and other tasks that go beyond the scope of CSS.

Scripts can access and modify the input document using the W3C standard DOM (Document Object Model). Prince also supports some additional properties and methods described below.

Please note that Prince is not running JavaScript by default - it needs to be explicitly enabled. See .

JavaScript in Printed Media
---------------------------

Prince is a user agent producing primarily documents meant to be printed, and as such, some limitations are in place that set it apart from most other user agents that support JavaScript.

The most notable difference is the fact that a printed page cannot be interactive, being static in nature: a document cannot be modified after it is deemed to be ready for print. JavaScript can be run twice only: the first time it is run before layout, where it interacts with and modifies the layout (and the DOM structure). Once layout is finished, JavaScript can be run a second time from the `complete` event handler (see ). However, this time it is only allowed to inspect the layout and cannot modify the DOM. See also .

A consequence of the non-interactive nature of printed media is that any interactive events, such as e.g. `onClick`, do not make sense, and will never fire.

Prince allows also for scripts to be passed directly to the PDF, to be executed when the PDF file is opened. The `` property is used for this purpose. A common use case is to activate the "Print" dialog automatically. See also .

JavaScript in Prince
--------------------

Prince supports most of ECMAScript 5th edition (ES5), but not strict mode. Later editions of ECMAScript are not supported.

A full list of all supported JavaScript objects, methods and properties can be found in the [References](doc-latest/doc-refs.html) section in . Here we shall just illustrate a few highlights from Prince's JavaScript support.

### Logging

The Prince log can be accessed from JavaScript via the [`Log`](doc-latest/doc-refs.html#window.Log) object (also available as [`Prince.Log`](doc-latest/doc-refs.html#window.Prince.Log)), which has the following methods:

``
    Log.info("message")
    Log.warning("message")
    Log.error("message")
    Log.data("name", "value")

### Console Access

When running Prince from the command-line, the `console` object can be used to write messages directly to the terminal:

``
    console.log("Hello, world!")

Console access is only supported when running Prince directly from the command-line, and should not be used when calling Prince through a server wrapper or graphical user interface.

### Event Handling

When the document has been fully parsed and is ready for processing, Prince will fire the `DOMContentLoaded` and `load` events on the `window` object.

These load events can be captured by setting the `onload` attribute on the `body` element in HTML documents, or by setting the `window.onload` property or calling `window.addEventListener`.

When document conversion has finished, Prince will fire the `complete` event on the `Prince` object. This event can be captured by calling `Prince.addEventListener`, and is useful for logging document statistics, or for using the output for .

When multiple documents are processed into one PDF, the `complete` event will only fire once, on the first document.

User interface events such as `onclick` are not supported by Prince.

### Document Statistics

The [`Prince.pageCount`](doc-latest/doc-refs.html#window.Prince.pageCount) property can be accessed after document conversion has finished, then logged as data for the calling process to access:

``
    function logPageCount()
    {
        Log.data("total-page-count", Prince.pageCount);
    }

    Prince.addEventListener("complete", logPageCount, false);

See also for another use of accessing document properties after the document conversion has finished.

### The Prince Object

The [`Prince`](doc-latest/doc-refs.html#window.Prince) object can be used to control various scripting aspects in Prince.

``
    Prince.addScriptFunc(name, function)
    Prince.trackBoxes = (boolean)
    Prince.convertToFile(JSON, OutputFileName, ...optional extra job resources)
    Prince.convertToBuffer(JSON, ...optional extra job resources)

The [`Prince.addScriptFunc`](doc-latest/doc-refs.html#window.Prince.addScriptFunc) method takes two arguments: the string name that will be exposed to CSS, and the function itself. See for an example.

[`Prince.trackBoxes`](doc-latest/doc-refs.html#window.Prince.trackBoxes) is a bool that will enable the box tracking API if set to true, so that it can be used later in the `complete` event. See .

The [`Prince.convertToFile`](doc-latest/doc-refs.html#window.Prince.convertToFile) and [`Prince.convertToBuffer`](doc-latest/doc-refs.html#window.Prince.convertToBuffer) methods allow you to start new Prince jobs:

``
    convertToFile(JSON, OutputFileName, ...optional extra job resources)

- returns bool indicating success

``
    convertToBuffer(JSON, ...optional extra job resources)

- returns ArrayBuffer if successful, null if not

Whereby `JSON` is a job description similar to the one specified in the , while the optional extra job resource arguments are ArrayBuffers or strings that can be referenced from the JSON using the `job-resource:` URLs. See .

### The PDF Object

The [`PDF` object](doc-latest/doc-refs.html#window.PDF) can be used to specify PDF properties and settings, including attaching extra files to the generated PDF, similar to the [`--attach`](doc-latest/doc-refs.html#cl-attach) command-line argument:

``
    PDF.attachFile(url, description?)

    PDF.attachFile("data.xls", "Latest sales figures.");

Other PDF properties, which are set by assignment, include:

``
    PDF.embedFonts = (boolean)
    PDF.subsetFonts = (boolean)
    PDF.artificialFonts = (boolean)

    PDF.compress = (boolean)

    PDF.encrypt = (boolean)
    PDF.userPassword, PDF.ownerPassword = (string, can be null)
    PDF.allowPrint, PDF.allowModify, PDF.allowCopy, PDF.allowAnnotate = (boolean)
    PDF.keyBits = "40" | "128"

    PDF.script = (string, can be null)
    PDF.openAction = (eg. "print")
    PDF.pageLayout = "single-page" | "one-column" | "two-column[-left/right]"
    PDF.pageMode = "auto" | "show-bookmarks" | "fullscreen" | "show-attachments"
    PDF.printScaling = "auto" | "none"
    PDF.duplex = "auto" | "simplex" | "duplex-flip-short-edge" | "duplex-flip-long-edge"

    PDF.profile = (string, can be null)
    PDF.outputIntent = (URL string, can be null)

    PDF.objectStreams = (boolean)

    PDF.title
    PDF.subject
    PDF.author
    PDF.keywords
    PDF.creator

    PDF.lang

There is one more PDF object not mentioned so far: the [`PDF.pages`](doc-latest/doc-refs.html#window.PDF.pages) object is different from all preceding PDF objects - the latter ones are set before document conversion begins, while the former becomes available only *after* the `complete` event (see ) and returns a list of *boxes* - see .

### The Box Tracking API

The box tracking API must be enabled with [`Prince.trackBoxes`](doc-latest/doc-refs.html#window.Prince.trackBoxes) before formatting starts.

``
    Prince.trackBoxes = true;

It then becomes available in the `complete` event (see ), when you can call the [`getPrinceBoxes()`](doc-latest/doc-refs.html#window.Element.prototype.getPrinceBoxes) method while iterating through the required DOM elements, to return a list of *boxes*.

``
    Prince.addEventListener("complete", function() {
      var xs = document.getElementsByTagName("ins");
      for (var i = 0; i < xs.length; ++i)
        {
          var ins = xs[i];
          var boxes = ins.getPrinceBoxes();
        }
    }, false);

The [`PDF.pages`](doc-latest/doc-refs.html#window.PDF.pages) array mentioned earlier (see ) also is available only after the `complete` event and also returns a list of *boxes* (see ).

``
    function printbox(str,box) {
      console.log("");
      for (var i in box) {
        console.log(str+i+": "+box[i]);
      }
      for (var i=0; i<box.children.length; i++) {
        printbox(str+"  ",box.children[i]);
      }
    }

    Prince.addEventListener("complete", function() {
      var pages = PDF.pages;
      for (var i = 0; i<pages.length; ++i)
        {
          console.log("PAGE "+(i+1)+" HAS THESE BOXES");
          printbox("  ",pages[i]);
        }
    }, false);

*Boxes* are JavaScript objects with some or all of the following properties:

``
    type =     "BODY" |
               "COLUMN" |
               "FLEXLINE" |
               "FOOTNOTES" |
               "FLOATS" |
               "BOX" |
               "LINE" |
               "SPAN" |
               "TEXT" |
               "SVG" |
               "IMAGE"
    pageNum =  the page of the current box
    x =        x-coordinate, in pt
    y =        y-coordinate, in pt (set to zero on some boxes)
    w =        width, in pt
    h =        height, in pt (set to zero on some boxes)
    children = array of child boxes
    parent =   parent box
    element =  DOM element for box (may be null)
    pseudo =   pseudo-element name or null
    text =     string
    src =      URL string for images
    style =    CSS style object for box

The `x`, `y`, `w` and `h` measures, defining respectively the x- and y-coordinates and the width and height of the *box*, use the same coordinate system as the PDF, i.e. the box tracking units are measured in points (`pt`) and the origin is the lower left corner of the page.

The box with the value `BODY` represents the *page area* returned by [`PDF.pages`](doc-latest/doc-refs.html#window.PDF.pages) (and thus is not necessarily equivalent with the `body` element); the content of the *page-margin boxes* is not included in the tree (see for the definition of *page area* and *page-margin boxes*).

The properties of a *box* can be queried with the [`BoxInfo()`](doc-latest/doc-refs.html#window.BoxInfo) method.

Since the box tracking API is available only *after* the `complete` event, it cannot be used to modify the document (see ).

However, see for making use of its output. Two further sample applications of the box tracking API can be seen in the [Changebars](//www.princexml.com/forum/topic/3516/changebars) example, and in [Detecting Overflow](//www.princexml.com/forum/topic/3603/detecting-overflow).

### Unsupported DOM Properties

The following DOM properties are not supported in Prince:

``
    document.write
    window.setInterval


