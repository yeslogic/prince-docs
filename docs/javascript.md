---
title: Scripting
---

JavaScript can be used to transform documents by generating tables of contents and indices, sorting tables, rendering charts and graphs, and other tasks that go beyond the scope of CSS.

Scripts can access and modify the input document using the W3C standard DOM (Document Object Model). Prince also supports some additional properties and methods described below.

Prince is not running JavaScript by default - it needs to be explicitly enabled. See [Applying JavaScript in Prince](prince-input.md#applying-javascript-in-prince).

JavaScript in Printed Media
---------------------------

Prince is a user agent producing primarily documents meant to be printed, and as such, some limitations are in place that set it apart from most other user agents that support JavaScript.

The most notable difference is the fact that a printed page cannot be interactive, being static in nature: in principle a document cannot be modified after it is deemed to be ready for print. JavaScript can basically be run twice: the first time it is run before layout, where it interacts with and modifies the layout (and the DOM structure). Once layout is finished, JavaScript can be run a second time from the `complete` event handler (see [Event Handling](javascript.md#event-handling)) to inspect the layout, without modifying the DOM.

However, Prince also offers to register the function [`Prince.registerPostLayoutFunc(func)`](js-support.md#window.Prince.registerPostLayoutFunc), which is called after layout finished, similar to the current `oncomplete` event. If this function modifies the DOM, Prince will perform layout again on the updated document. For more details see [Multi-Pass formatting](#multi-pass-formatting) and [The "Multi-Pass" Solution](cookbook.md#the-multi-pass-solution).

Please also note that a consequence of the non-interactive nature of printed media is that any interactive events, such as e.g. `onClick`, do not make sense, and will never fire.

JavaScript in Prince
--------------------

Prince supports most of ECMAScript 5th edition (ES5), with the exception of strict mode. ES6 is not fully supported yet, and later editions of ECMAScript are not supported.

Document JavaScript is not run by default - it needs to be explicitly enabled. See [Applying JavaScript in Prince](prince-input.md#applying-javascript-in-prince) for details.

In addition to normal JavaScript run in the document, Prince allows also for scripts to be passed directly to the PDF, to be executed when the PDF file is opened (by means of the CSS property [`-prince-pdf-script`](css-props.md#prop-prince-pdf-script)), or triggered by specific events (with the CSS property [`-prince-pdf-event-scripts`](css-props.md#prop-prince-pdf-event-scripts)). See [Script Functions](gen-content.md#script-functions) and [PDF Actions](prince-output.md#pdf-actions) for more details.

These PDF scripts, known as "Document Action" scripts, will always be run. Note, however, that these scripts are dependent on the PDF viewer, and in many cases might only work in Adobe Acrobat products.

A full list of all supported JavaScript objects, methods and properties can be found in the References section, in [JavaScript Support](js-support.md). Here we shall just illustrate a few highlights from Prince's JavaScript support.

### Logging

The Prince log can be accessed from JavaScript via the [`Log`](js-support.md#window.Log) object (also available as [`Prince.Log`](js-support.md#window.Prince.Log)), which has the following methods:

```javascript
    Log.debug("message")
    Log.info("message")
    Log.warning("message")
    Log.error("message")
    Log.data("name", "value")
```
<p class="note">
<code>Log.debug()</code> is only available when the <a href="/doc/command-line#cl-debug"><code>--debug</code></a> command-line option has been specified, while <code>Log.info()</code> is only available when the <a href="/doc/command-line#cl-verbose"><code>--verbose</code></a> command-line option has been specified.
</p>

### Console Access

When running Prince from the command-line, the [`console`](js-support.md#window.console) object can be used to write messages directly to the terminal:

```javascript
    console.log("Hello, world!")
```
<p class="note">
Console access is only supported when running Prince directly from the command-line, and should not be used when calling Prince through a server wrapper or graphical user interface.
</p>

### Event Handling

When the document has been fully parsed and is ready for processing, Prince will fire the `DOMContentLoaded` and `load` events on the `window` object.

These load events can be captured by setting the `onload` attribute on the `body` element in HTML documents, or by setting the `window.onload` property or calling [`window.addEventListener`](js-support.md#window.addEventListener).

When document conversion has finished, Prince will fire the `complete` event on the `Prince` object. This event can be captured by calling [`Prince.addEventListener`](js-support.md#window.Prince.addEventListener), or by setting the [`Prince.oncomplete`](js-support.md#window.Prince.oncomplete) property, and is useful for logging document statistics.

Prince also offers the possibility to register the function [`Prince.registerPostLayoutFunc(func)`](js-support.md#window.Prince.registerPostLayoutFunc) after layout has finished for possibly triggering a new layout - see [The Prince Object](#the-prince-object) for more details.

<p class="note">
When multiple documents are processed into one PDF, the <code>complete</code> event will only fire once, on the <em>first</em> document.
</p>

User interface events such as `onclick` are not supported by Prince.

### The Prince Object

The [`Prince`](js-support.md#window.Prince) object can be used to control various scripting aspects in Prince.

```javascript
    Prince.addEventListener(type, ...callback, optional extra options)
    Prince.oncomplete
    Prince.addScriptFunc(name, func)
    Prince.trackBoxes = (boolean)
    Prince.convertToFile(JSON, OutputFileName, ...optional extra job resources)
    Prince.convertToBuffer(JSON, ...optional extra job resources)
    Prince.failStatus
    Prince.pageCount
    Prince.registerPostLayoutFunc(func)
```

#### Event tracking

The [`Prince.addEventListener`](js-support.md#window.Prince.addEventListener) method or the [`Prince.oncomplete`](js-support.md#window.Prince.oncomplete) property can be called to listen to the `complete` event on the Prince object, which is fired when all layout is finished (and after the last repeated layout, if this was requested), just before the PDF is generated, so that it can cancel the PDF output by triggering a fail-safe if necessary, or log information about the PDF like the page count.

#### Script functions

The [`Prince.addScriptFunc`](js-support.md#window.Prince.addScriptFunc) method exposes an arbitrary JavaScript function to CSS.  It takes two arguments: the string name that will be exposed to CSS, and the function itself. See [Script Functions](gen-content.md#script-functions) for an example.

#### Box tracking

[`Prince.trackBoxes`](js-support.md#window.Prince.trackBoxes) is a bool that will enable the box tracking API if set to true, so that it can be used later in the `complete` event. See [The Box Tracking API](javascript.md#the-box-tracking-api).

#### Prince jobs

The [`Prince.convertToFile`](js-support.md#window.Prince.convertToFile) and [`Prince.convertToBuffer`](js-support.md#window.Prince.convertToBuffer) methods allow you to start new Prince jobs:

```javascript
    convertToFile(JSON, OutputFileName, ...optional extra job resources)
```
- returns bool indicating success;

```javascript
    convertToBuffer(JSON, ...optional extra job resources)
```
- returns ArrayBuffer if successful, null if not;

whereby `JSON` is a job description as specified in the [Job description JSON](server-integration.md#job-description-json), while the optional extra job resource arguments are ArrayBuffers or strings that can be referenced from the JSON using the `job-resource:` URLs. See [Prince Control Protocol](server-integration.md#prince-control-protocol).

#### Failure status

The property [`Prince.failStatus`](js-support.md#window.Prince.failStatus) is a boolean which can be set to trigger an explicit failure status through JavaScript, based on custom criteria. See also [Fail-Safe Options](server-integration.md#fail-safe-options).

It can be set to true by a script that runs after layout in the `oncomplete` handler (see [Event Handling](javascript.md#event-handling)) and checks for complex conditions, like overlapping content (see [The Box Tracking API](javascript.md#the-box-tracking-api) and the [Detecting Overflow](http://www.princexml.com/forum/topic/3603/detecting-overflow) sample) or some other user-defined issue that you want to trigger the fail-safe.

For example, perhaps there should be only one page: you check the page count (see [Document Statistics](javascript.md#document-statistics)), and if it's greater than one, you log a warning and trigger the fail-safe to ensure that no PDF is generated.

#### Document Statistics

The [`Prince.pageCount`](js-support.md#window.Prince.pageCount) property can be accessed after document conversion has finished, then logged as data for the calling process to access:

```javascript
    function logPageCount()
    {
        Log.data("total-page-count", Prince.pageCount);
    }

    Prince.addEventListener("complete", logPageCount, false);
```

#### Multi-Pass formatting

Prince also offers the possibility to register the function [`Prince.registerPostLayoutFunc(func)`](js-support.md#window.Prince.registerPostLayoutFunc), which is called after layout finished, similar to the current `oncomplete` event. If this function modifies the DOM, Prince will perform layout again on the updated document once the function returns, and before generating the PDF.

JavaScript
```javascript
    Prince.registerPostLayoutFunc(function() {
        var str = '@prince-color Color1 { alternate-color: cmyk(1,0,0,0) }';
        var add = document.getElementById('add');
        add.appendChild(document.createTextNode(str));
    });
```
HTML
```html
    <style id='add'></style>
    <p style='color: prince-color(Color1)'>This was black, becomes cyan</p>
```

A post layout function may register itself, or another post layout function, in order to repeat this process multiple times! By default the number of passes is not limited, but in order to prevent endless layout loops you can set a limit by using the [`--max-passes=N`](command-line.md#cl-max-passes) command-line option. For more details see [The "Multi-Pass" Solution](cookbook.md#the-multi-pass-solution).


### The PDF Object

The [`PDF` object](js-support.md#window.PDF) can be used to specify PDF properties and settings, including attaching extra files to the generated PDF, similar to the [`--attach`](command-line.md#cl-attach) command-line argument:

```javascript
    PDF.attachFile(url, description?)

    PDF.attachFile("data.xls", "Latest sales figures.");
```
Other PDF properties, which are set by assignment, include:

```javascript
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
```
There is one more PDF object not mentioned so far: the [`PDF.pages`](js-support.md#window.PDF.pages) object is different from all preceding PDF objects - the latter ones are set before document conversion begins, while the former becomes available only *after* the `complete` event (see [Event Handling](javascript.md#event-handling)) and returns a list of *boxes* - see [The Box Tracking API](javascript.md#the-box-tracking-api).

### The Box Tracking API

The box tracking API must be enabled with [`Prince.trackBoxes`](js-support.md#window.Prince.trackBoxes) before formatting starts.

```javascript
    Prince.trackBoxes = true;
```
It then becomes available in the `complete` event (see [Event Handling](javascript.md#event-handling)), when you can call the [`getPrinceBoxes()`](js-support.md#window.Element.prototype.getPrinceBoxes) method while iterating through the required DOM elements, to return a list of *boxes*.

```javascript
    Prince.addEventListener("complete", function() {
      var xs = document.getElementsByTagName("ins");
      for (var i = 0; i < xs.length; ++i)
        {
          var ins = xs[i];
          var boxes = ins.getPrinceBoxes();
        }
    }, false);
```


The [`PDF.pages`](js-support.md#window.PDF.pages) array mentioned earlier (see [The PDF Object](javascript.md#the-pdf-object)) also is available only after the `complete` event and also returns a list of *boxes* (see [Page regions](paged.md#page-regions)).

```javascript
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
```
*Boxes* are JavaScript objects with some or all of the following properties:

    type =          "BODY" |
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
    pageNum =       the page of the current box
    x =             x-coordinate, in pt
    y =             y-coordinate, in pt (set to zero on some boxes)
    w =             width, in pt
    h =             height, in pt (set to zero on some boxes)
    baseline =      the y-coordinate of the baseline of the box,
                    ie. the line that the text rests on, in pt -
                    applies only to inline boxes
    marginTop
    marginRight
    marginBottom
    marginLeft =    the used values for margins
    floatPosition = "TOP" | "BOTTOM"
    children =      array of child boxes
    parent =        parent box
    element =       DOM element for box (may be null)
    pseudo =        pseudo-element name or null
    text =          string
    src =           URL string for images
    style =         CSS style object for box

The `x`, `y`, `w`, `h` and `baseline` measures, defining respectively the x- and y-coordinates and the width and height of the *box*, use the same coordinate system as the PDF, i.e. the box tracking units are measured in points (`pt`) and the origin is the lower left corner of the page.

The box with the value `BODY` represents the *page area* returned by [`PDF.pages`](js-support.md#window.PDF.pages) (and thus is not necessarily equivalent with the `body` element); the content of the *page-margin boxes* is not included in the tree (see [Page regions](paged.md#page-regions) for the definition of *page area* and *page-margin boxes*).

The properties of a *box* can be queried with the [`BoxInfo()`](js-support.md#window.BoxInfo) method.

The `marginTop`, `marginRight`, `marginBottom` and `marginLeft` properties return the *used* values for margins.  This can be useful in cases of elements that are being floated to the top or to the bottom of a column, to determine whether the alternative margin will be applied (see [Margins of Page and Column Floats](styling.md#margins-of-page-and-column-floats)).

When elements are snapped to the nearest column or page end (see [Page and Column Floats](styling.md#page-and-column-floats)), the `floatPosition` property tells us whether the element snapped to the top, or to the bottom - please note that it needs to be checked not on the element itself, but on the anonymous (non-element) *parent* box that gets created to contain all the floats at the top or bottom of a page or column (in just the same fashion as the footnotes area contains all the footnotes).

See also [our nifty script](cookbook.md#how-and-where-is-my-box) to return the position and dimension of the margin box, the border box, the padding box and the content box of an element.

Two further sample applications of the box tracking API can be seen in the [Changebars](//www.princexml.com/forum/topic/3516/changebars) example, and in [Detecting Overflow](//www.princexml.com/forum/topic/3603/detecting-overflow).

### Unsupported DOM Methods

The following DOM methods are not supported in Prince:

```javascript
    document.write
    window.setInterval
```
