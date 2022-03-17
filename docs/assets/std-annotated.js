
var stdAnnotated = {
    NaN: {
        desc: "The special value Not a Number."
    },
    Infinity: {
        desc: "The special value Infinity."
    },
    undefined: {
        desc: "Represents the special value undefined."
    },
    eval: {
        type: "function",
        desc: "Evaluates text as JavaScript source code.",
        returns: "Result of evaluation",
        arguments: [
            {name: "source", desc: "Code to evaluate", type: "string"}
        ]
    },
    parseInt: {
        type: "function",
        desc: "Turns input into an integer number.",
        arguments: [
            {type: "string", name: "value"},
            {type: "number", name: "radix", desc: "Indicates number base, for example 10 to parse input as a decimal value, 16 for hex values."}
        ],
        example: "parseInt('50')",
        exampleReturn: 50,
        returns: "number"
    },
    parseFloat: {
        type: "function",
        desc: "Turns input into a floating point number.",
        example: "parseFloat('1.5')",
        exampleReturn: 1.5,
        returns: "number"
    },
    isNaN: {
        desc: "Checks if the argument's value is the special Not a Number value.",
        example: "isNaN(parseInt('hello'))",
        exampleReturn: true,
        returns: "boolean"
    },
    isFinite: {
        desc: "Determines whether the passed value is a finite number.",
        returns: "boolean"
    },
    escape: {
        desc: "Computes a new string by replacing certain characters with a hexadecimal escape sequence.",
        returns: "string",
        arguments: [
            {name: "string", desc: "String to escape", type: "string"}
        ]
    },
    unescape: {
        desc: "Computes a new string by replacing hexadecimal escape sequences with the characters they represent.",
        returns: "string",
        arguments: [
            {name: "string", desc: "String to unescape", type: "string"}
        ]
    },
    decodeURI: {
        desc: "Decodes a Uniform Resource Identifier (URI).",
        returns: "string",
        arguments: [
            {name: "URI", desc: "A complete URI", type: "string"}
        ]
    },
    decodeURIComponent: {
        desc: "Decodes a Uniform Resource Identifier (URI) component.",
        returns: "string",
        arguments: [
            {name: "URI", desc: "A component of a URI", type: "string"}
        ]
    },
    encodeURI: {
        desc: "Encodes a Uniform Resource Identifier (URI).",
        returns: "string",
        arguments: [
            {name: "URI", desc: "A complete URI", type: "string"}
        ]
    },
    encodeURIComponent: {
        desc: "Encodes a Uniform Resource Identifier (URI) component.",
        returns: "string",
        arguments: [
            {name: "URI", desc: "A component of a URI", type: "string"}
        ]
    },
    toString: {
        descr: "Converts an object to a string.",
        returns: "string"
    },
    toLocaleString: {
        desc: "Converts an object to a string with a language sensitive representation of said string.",
        returns: "string"
    },
    valueOf: {
        desc: "Returns the primitive value an object.",
        returns: "primitive value"
    },
    hasOwnProperty: {
        desc: "Returns a boolean indicating whether the object has the specified property.",
        returns: "boolean",
        arguments: [
            {name: "property", desc: "The property to test", type: "string"}
        ]
    },
    isPrototypeOf: {
        desc: "Checks if an object exists in another object's prototype chain.",
        returns: "boolean"
    },
    propertyIsEnumerable: {
        desc: "Returns a Boolean indicating whether the specified property is enumerable.",
        returns: "boolean"
    },
    Object: {
        create: {},
        defineProperty: {
            desc: "Adds a property to the object and defines certain traits like enumerability.", type: "function",
            arguments: [
                {type: "object", name: "base object"},
                {type: "string", name: "property name"},
                {type: "object", name: "descriptor", desc: "An object describing the property"}
            ],
            example: "Object.defineProperty(Array.prototype, 'myProp',\n  {enumerable: false})"
        },
        defineProperties: {},
        keys: {},
        getOwnPropertyDescriptor: {},
        getOwnPropertyNames: {},
        getOwnPropertySymbols: {},
        getPrototypeOf: {},
        setPrototypeOf: {},
        prototype: {
            constructor: {},
            toString: {},
            toLocaleString: {},
            valueOf: {},
            hasOwnProperty: {},
            isPrototypeOf: {},
            propertyIsEnumerable: {}
        }
    },
    Function: {
        prototype: {
            constructor: {},
            toString: {},
            apply: {},
            bind: {
                desc: "Defines a value for the this object, returns a new function.",
                returns: "function",
                arguments:[
                    {name: "new this object", type: "object"}
                ],
                example: "var myObj = {};\nfunction myFunc(){return this===myObj;};\nvar boundFunc = myFunc.bind(myObj);\nboundFunc();",
                exampleReturn: true},
            call: {}
        }
    },
    Array: {
        isArray: {},
        from: {},
        of: {},
        prototype: {
            constructor: {},
            length: {},
            toString: {},
            toLocaleString: {},
            join: {},
            concat: {},
            pop: {},
            push: {},
            reverse: {},
            shift: {},
            unshift: {},
            find: {},
            findIndex: {},
            sort: {},
            slice: {},
            splice: {},
            indexOf: {},
            lastIndexOf: {},
            forEach: {},
            map: {},
            filter: {},
            includes: {},
            every: {},
            some: {},
            reduce: {},
            fill: {},
            reduceRight: {}
        }
    },
    Map: {
        prototype: {
            size: {},
            clear: {},
            delete: {
                arguments:[
                    {name: "key", type: "string"}
                ]
            },
            get: {
                arguments:[
                    {name: "key", type: "string"}
                ]
            },
            has: {
                arguments:[
                    {name: "key", type: "string"}
                ]
            },
            set: {
                arguments:[
                    {name: "key", type: "string"},
                    {name: "value", type: "string"}
                ]
            },
            keys: {},
            values: {},
            entries: {},
            forEach: {
                arguments:[
                    {name: "callbackFn", type: "function"},
                    {name: "thisArg", type: "argument"}
                ]
            }
        }
    },
    String: {
        fromCharCode: {},
        fromCodePoint: {},
        CodePointAt: {},
        prototype: {
            constructor: {},
            length: {},
            toString: {},
            valueOf: {},
            charAt: {},
            charCodeAt: {},
            concat: {},
            indexOf: {},
            lastIndexOf: {},
            localeCompare: {},
            split: {},
            toLowerCase: {},
            toLocaleLowerCase: {},
            toUpperCase: {},
            toLocaleUpperCase: {},
            match: {},
            replace: {},
            search: {},
            slice: {},
            substring: {},
            substr: {},
            trim: {}
        }
    },
    Boolean: {
        prototype: {
            constructor: {},
            toString: {},
            valueOf: {}
        }
    },
    Number: {
        NaN: {},
        POSITIVE_INFINITY: {},
        NEGATIVE_INFINITY: {},
        MIN_VALUE: {},
        MAX_VALUE: {},
        MIN_SAFE_INTEGER: {},
        MAX_SAFE_INTEGER: {},
        prototype: {
            constructor: {},
            toExponential: {},
            toString: {},
            valueOf: {},
            toFixed: {},
            toPrecision: {}
        }
    },
    Date: {
        parse: {},
        UTC: {},
        now: {},
        prototype: {
            constructor: {},
            toString: {},
            toDateString: {},
            toTimeString: {},
            toUTCString: {},
            toISOString: {},
            valueOf: {},
            getTime: {},
            getFullYear: {},
            getMonth: {},
            getDate: {},
            getDay: {},
            getHours: {},
            getMinutes: {},
            getSeconds: {},
            getMilliseconds: {},
            getUTCFullYear: {},
            getUTCMonth: {},
            getUTCDate: {},
            getUTCDay: {},
            getUTCHours: {},
            getUTCMinutes: {},
            getUTCSeconds: {},
            getUTCMilliseconds: {},
            setTime: {},
            setMilliseconds: {},
            setSeconds: {},
            setMinutes: {},
            setHours: {},
            setDate: {},
            setMonth: {},
            setFullYear: {},
            setUTCMilliseconds: {},
            setUTCSeconds: {},
            setUTCMinutes: {},
            setUTCHours: {},
            setUTCDate: {},
            setUTCMonth: {},
            setUTCFullYear: {}
        }
    },
    RegExp: {
        prototype: {
            constructor: {},
            exec: {},
            test: {},
            toString: {}
        }
    },
    Math: {
        E: {},
        LN10: {},
        LN2: {},
        LOG2E: {},
        LOG10E: {},
        PI: {},
        SQRT1_2: {},
        SQRT2: {},
        abs: {},
        acos: {},
        asin: {},
        atan: {},
        atan2: {},
        ceil: {},
        cos: {},
        exp: {},
        floor: {},
        log: {},
        max: {},
        min: {},
        pow: {},
        random: {},
        seedRandom: {},
        round: {},
        sin: {},
        sqrt: {},
        tan: {}
    },
    JSON: {
        parse: {},
        stringify: {}
    },
    Error: {
        prototype: {
            constructor: {},
            name: {},
            message: {}
        }
    },
    RangeError: {
        prototype: {
            constructor: {},
            name: {},
            message: {}
        }
    },
    ReferenceError: {
        prototype: {
            constructor: {},
            name: {},
            message: {}
        }
    },
    SyntaxError: {
        prototype: {
            constructor: {},
            name: {},
            message: {}
        }
    },
    TypeError: {
        prototype: {
            constructor: {},
            name: {},
            message: {}
        }
    },
    URIError: {
        prototype: {
            constructor: {},
            name: {},
            message: {}
        }
    },
    // Web APIs
    window: {_is_root: true},
    self: {_is_root: true},
    top: {_is_root: true},
    parent: {_is_root: true},
    setTimeout: {},
    clearTimeout: {},
    alert: {},
    addEventListener: {},
    removeEventListener: {},
    dispatchEvent: {},
    getComputedStyle: {},
    navigator: {
        appName: {},
        appVersion: {},
        platform: {},
        userAgent: {},
        onLine: {}
    },
    console: {
        log: {},
        info: {},
        warn: {}
    },
    // Typed Arrays
    ArrayBuffer: {
        prototype: {
            byteLength: {},
            slice: {}
        }
    },
    Uint8Array: {
        BYTES_PER_ELEMENT: {},
        from: {},
        prototype: {
            BYTES_PER_ELEMENT: {},
            length: {},
            set: {},
            subarray: {}
        }
    },
    Uint8ClampedArray: {
        BYTES_PER_ELEMENT: {},
        from: {},
        prototype: {
            BYTES_PER_ELEMENT: {},
            length: {},
            set: {},
            subarray: {}
        }
    },
    Uint16Array: {
        BYTES_PER_ELEMENT: {},
        from: {},
        prototype: {
            BYTES_PER_ELEMENT: {},
            length: {},
            set: {},
            subarray: {}
        }
    },
    Uint32Array: {
        BYTES_PER_ELEMENT: {},
        from: {},
        prototype: {
            BYTES_PER_ELEMENT: {},
            length: {},
            set: {},
            subarray: {}
        }
    },
    Int8Array: {
        BYTES_PER_ELEMENT: {},
        from: {},
        prototype: {
            BYTES_PER_ELEMENT: {},
            length: {},
            set: {},
            subarray: {}
        }
    },
    Int16Array: {
        BYTES_PER_ELEMENT: {},
        from: {},
        prototype: {
            BYTES_PER_ELEMENT: {},
            length: {},
            set: {},
            subarray: {}
        }
    },
    Int32Array: {
        BYTES_PER_ELEMENT: {},
        from: {},
        prototype: {
            BYTES_PER_ELEMENT: {},
            length: {},
            set: {},
            subarray: {}
        }
    },
    // AJAX
    XMLHttpRequest: {
        UNSENT: {},
        OPENED: {},
        HEADERS_RECEIVED: {},
        LOADING: {},
        DONE: {},
        prototype: {
            UNSENT: {},
            OPENED: {},
            HEADERS_RECEIVED: {},
            LOADING: {},
            DONE: {},
            open: {},
            send: {},
            readyState: {},
            response: {},
            responseText: {},
            responseType: {},
            status: {}
        }
    },
    // DOM APIs
    EventTarget: {
        prototype: {
            addEventListener: {},
            removeEventListener: {},
            dispatchEvent: {},
        }
    },
    Event: {
        prototype: {
        }
    },
    ProgressEvent: {
        prototype: {
        }
    },
    Node: {
        ELEMENT_NODE: {},
        ATTRIBUTE_NODE: {},
        TEXT_NODE: {},
        DOCUMENT_NODE: {},
        DOCUMENT_FRAGMENT_NODE: {},
        DOCUMENT_POSITION_DISCONNECTED: {},
        DOCUMENT_POSITION_PRECEDING: {},
        DOCUMENT_POSITION_FOLLOWING: {},
        DOCUMENT_POSITION_CONTAINS: {},
        DOCUMENT_POSITION_CONTAINED_BY: {},
        prototype: {
            ELEMENT_NODE: {},
            ATTRIBUTE_NODE: {},
            TEXT_NODE: {},
            DOCUMENT_NODE: {},
            DOCUMENT_FRAGMENT_NODE: {},
            DOCUMENT_POSITION_DISCONNECTED: {},
            DOCUMENT_POSITION_PRECEDING: {},
            DOCUMENT_POSITION_FOLLOWING: {},
            DOCUMENT_POSITION_CONTAINS: {},
            DOCUMENT_POSITION_CONTAINED_BY: {},
            ownerDocument: {},
            textContent: {},
            firstChild: {},
            lastChild: {},
            previousSibling: {},
            nextSibling: {},
            parentNode: {},
            removeChild: {},
            appendChild: {},
            insertBefore: {},
            replaceChild: {},
            hasChildNodes: {},
            hasAttributes: {},
            contains: {},
            compareDocumentPosition: {},
            cloneNode: {}
        }
    },
    Document: {
        prototype: {
            implementation: {},
            documentElement: {},
            firstElementChild: {},
            lastElementChild: {},
            childElementCount: {},
            getElementsByTagName: {},
            getElementsByTagNameNS: {},
            getElementsByClassName: {},
            querySelector: {},
            querySelectorAll: {},
            getElementById: {},
            createElement: {},
            createElementNS: {},
            createAttribute: {},
            createAttributeNS: {},
            createTextNode: {},
            createComment: {},
            createDocumentFragment: {},
            nodeName: {},
            nodeType: {},
            attributes: {},
            namespaceURI: {},
            localName: {},
            compatMode: {}
        }
    },
    DocumentFragment: {
        prototype: {
            nodeName: {},
            nodeType: {},
            attributes: {},
            namespaceURI: {},
            localName: {},
            firstElementChild: {},
            lastElementChild: {},
            childElementCount: {}
        }
    },
    Element: {
        prototype: {
            nodeType: {},
            tagName: {},
            nodeName: {},
            localName: {},
            namespaceURI: {},
            id: {},
            className: {},
            classList: {},
            innerHTML: {},
            firstElementChild: {},
            lastElementChild: {},
            childElementCount: {},
            previousElementSibling: {},
            nextElementSibling: {},
            getElementsByTagName: {},
            getElementsByTagNameNS: {},
            getElementsByClassName: {},
            matches: {},
            querySelector: {},
            querySelectorAll: {},
            getAttribute: {},
            getAttributeNS: {},
            getAttributeNode: {},
            getAttributeNodeNS: {},
            removeAttribute: {},
            removeAttributeNS: {},
            removeAttributeNode: {},
            setAttributeNode: {},
            setAttributeNodeNS: {},
            setAttribute: {},
            setAttributeNS: {},
            hasAttribute: {},
            hasAttributeNS: {},
            getPrinceBoxes: {
                returns: "A list of JavaScript objects called <a href='/doc/javascript#the-box-tracking-api'>boxes</a>",
                ext: "ext"
            }
        }
    },
    Attribute: {
        prototype: {
            nodeType: {},
            name: {},
            nodeName: {},
            localName: {},
            namespaceURI: {},
            value: {},
            nodeValue: {},
            ownerElement: {},
            attributes: {},
            childNodes: {}
        }
    },
    Text: {
        prototype: {
            nodeName: {},
            nodeType: {},
            attributes: {},
            childNodes: {},
            previousElementSibling: {},
            nextElementSibling: {},
            splitText: {},
            data: {},
            nodeValue: {},
            length: {}
        }
    },
    HTMLDocument: {
        prototype: {
            head: {},
            body: {},
            title: {},
            innerHTML: {},
            write: {}
        }
    },
    HTMLCollection: {
        prototype: {
            item: {},
            namedItem: {},
            length: {}
        }
    },
    NodeList: {
        prototype: {
            item: {},
            length: {}
        }
    },
    NamedNodeMap: {
        prototype: {
            length: {},
            item: {},
            getNamedItem: {},
            getNamedItemNS: {},
            setNamedItem: {},
            setNamedItemNS: {},
            removeNamedItem: {},
            removeNamedItemNS: {},
        }
    },
    CSSStyleDeclaration: {
        prototype: {
            alignContent: { url: "property" },
            alignItems: { url: "property" },
            alignSelf: { url: "property" },
            background: { url: "property" },
            backgroundAttachment: { url: "property" },
            backgroundClip: { url: "property" },
            backgroundColor: { url: "property" },
            backgroundImage: { url: "property" },
            backgroundImageResolution: { ext: "ext", url: "property" },
            backgroundOrigin: { url: "property" },
            backgroundPosition: { url: "property" },
            backgroundRepeat: { url: "property" },
            backgroundSize: { url: "property" },
            baselineShift: { url: "property" },
            bookmarkLabel: { ext: "ext", url: "property" },
            bookmarkLevel: { ext: "ext", url: "property" },
            bookmarkState: { ext: "ext", url: "property" },
            bookmarkTarget: { ext: "ext", url: "property" },
            border: { url: "property" },
            borderBottom: { url: "property" },
            borderBottomColor: { url: "property" },
            borderBottomLeftRadius: { url: "property" },
            borderBottomRightRadius: { url: "property" },
            borderBottomStyle: { url: "property" },
            borderBottomWidth: { url: "property" },
            borderClip: { url: "property" },
            borderCollapse: { url: "property" },
            borderColor: { url: "property" },
            borderLeft: { url: "property" },
            borderLeftColor: { url: "property" },
            borderLeftStyle: { url: "property" },
            borderLeftWidth: { url: "property" },
            borderRadius: { url: "property" },
            borderRight: { url: "property" },
            borderRightColor: { url: "property" },
            borderRightStyle: { url: "property" },
            borderRightWidth: { url: "property" },
            borderSpacing: { url: "property" },
            borderStyle: { url: "property" },
            borderTop: { url: "property" },
            borderTopColor: { url: "property" },
            borderTopLeftRadius: { url: "property" },
            borderTopRightRadius: { url: "property" },
            borderTopStyle: { url: "property" },
            borderTopWidth: { url: "property" },
            borderWidth: { url: "property" },
            bottom: { url: "property" },
            boxDecorationBreak: { url: "property" },
            boxSizing: { url: "property" },
            breakAfter: { url: "property" },
            breakBefore: { url: "property" },
            breakInside: { url: "property" },
            captionPage: { ext: "ext", url: "property" },
            captionSide: { url: "property" },
            clear: { ext: "ext", url: "property" },
            clip: { url: "property" },
            clipPath: { url: "property" },
            clipRule: { url: "property" },
            color: { url: "property" },
            colorInterpolation: { url: "property" },
            colorInterpolationFilters: { url: "property" },
            columnBreakAfter: { url: "property" },
            columnBreakBefore: { url: "property" },
            columnCount: { url: "property" },
            columnFill: { url: "property" },
            columnGap: { url: "property" },
            columnRule: { url: "property" },
            columnRuleColor: { url: "property" },
            columnRuleStyle: { url: "property" },
            columnRuleWidth: { url: "property" },
            columns: { url: "property" },
            columnSpan: { url: "property" },
            columnWidth: { url: "property" },
            content: { url: "property" },
            counterIncrement: { url: "property" },
            counterReset: { url: "property" },
            direction: { url: "property" },
            display: { url: "property" },
            dominantBaseline: { url: "property" },
            emptyCells: { url: "property" },
            fill: { url: "property" },
            fillOpacity: { url: "property" },
            fillRule: { url: "property" },
            filter: { url: "property" },
            flex: { url: "property" },
            flexBasis: { url: "property" },
            flexDirection: { url: "property" },
            flexFlow: { url: "property" },
            flexGrow: { url: "property" },
            flexShrink: { url: "property" },
            flexWrap: { url: "property" },
            floodColor: { url: "property" },
            floodOpacity: { url: "property" },
            cssFloat: { ext: "ext", url: "property" },
            floatDeferColumn: { ext: "ext", url: "property" },
            floatDeferPage: { ext: "ext", url: "property" },
            floatModifier: { ext: "ext", url: "property" },
            floatPlacement: { ext: "ext", url: "property" },
            floatReference: { ext: "ext", url: "property" },
            floatTail: { ext: "ext", url: "property" },
            floatPolicy: { ext: "ext", url: "property" },
            flow: { ext: "ext", url: "property" },
            font: { url: "property" },
            fontFamily: { url: "property" },
            fontSize: { url: "property" },
            fontStretch: { url: "property" },
            fontStyle: { url: "property" },
            fontVariant: { url: "property" },
            fontWeight: { url: "property" },
            footnoteDisplay: { url: "property" },
            footnoteStylePosition: { url: "property" },
            height: { url: "property" },
            hyphenateAfter: { ext: "ext", url: "property" },
            hyphenateBefore: { ext: "ext", url: "property" },
            hyphenateLines: { ext: "ext", url: "property" },
            hyphenatePatterns: { ext: "ext", url: "property" },
            hyphens: { url: "property" },
            imageOrientation: { url: "property" },
            imageResolution: { ext: "ext", url: "property" },
            insetInside: { url: "property" },
            insetOutside: { url: "property" },
            justifyContent: { url: "property" },
            left: { url: "property" },
            letterSpacing: { url: "property" },
            lightingColor: { url: "property" },
            lineHeight: { url: "property" },
            lineStackingStrategy: { url: "property" },
            link: { ext: "ext", url: "property" },
            listStyle: { url: "property" },
            listStyleImage: { url: "property" },
            listStylePosition: { url: "property" },
            listStyleType: { url: "property" },
            margin: { url: "property" },
            marginAlt: { ext: "ext", url: "property" },
            marginBottom: { url: "property" },
            marginInside: { ext: "ext", url: "property" },
            marginLeft: { url: "property" },
            marginOutside: { ext: "ext", url: "property" },
            marginRight: { url: "property" },
            marginTop: { url: "property" },
            marker: { url: "property" },
            markerEnd: { url: "property" },
            markerMid: { url: "property" },
            markerStart: { url: "property" },
            mask: { url: "property" },
            maxHeight: { url: "property" },
            maxWidth: { url: "property" },
            minHeight: { url: "property" },
            minWidth: { url: "property" },
            opacity: { url: "property" },
            order: { url: "property" },
            orphans: { url: "property" },
            overflow: { url: "property" },
            overflowWrap: { url: "property" },
            padding: { url: "property" },
            paddingBottom: { url: "property" },
            paddingLeft: { url: "property" },
            paddingRight: { url: "property" },
            paddingTop: { url: "property" },
            page: { url: "property" },
            pageBreakAfter: { url: "property" },
            pageBreakBefore: { url: "property" },
            pageBreakInside: { url: "property" },
            pageGroup: { ext: "ext", url: "property" },
            position: { url: "property" },
            princeBackgroundImageResolution: { ext: "ext", url: "property" },
            princeBookmarkLabel: { ext: "ext", url: "property" },
            princeBookmarkLevel: { ext: "ext", url: "property" },
            princeBookmarkState: { ext: "ext", url: "property" },
            princeBookmarkTarget: { ext: "ext", url: "property" },
            princeCaptionPage: { ext: "ext", url: "property" },
            princeClear: { ext: "ext", url: "property" },
            princeFilterResolution: { ext: "ext", url: "property" },
            princeFloatDeferColumn: { ext: "ext", url: "property" },
            princeFloatDeferPage: { ext: "ext", url: "property" },
            princeFloatModifier: { ext: "ext", url: "property" },
            princeFloatPlacement: { ext: "ext", url: "property" },
            princeFloatReference: { ext: "ext", url: "property" },
            princeFloatTail: { ext: "ext", url: "property" },
            princeFloatPolicy: { ext: "ext", url: "property" },
            princeFlow: { ext: "ext", url: "property" },
            princeFootnotePolicy: { ext: "ext", url: "property" },
            princeHyphenateAfter: { ext: "ext", url: "property" },
            princeHyphenateBefore: { ext: "ext", url: "property" },
            princeHyphenateCharacter: { ext: "ext", url: "property" },
            princeHyphenateLines: { ext: "ext", url: "property" },
            princeHyphenatePatterns: { ext: "ext", url: "property" },
            princeImageMagic: { ext: "ext", url: "property" },
            princeImageResolution: { ext: "ext", url: "property" },
            princeLang: { ext: "ext", url: "property" },
            princeLinebreakMagic: { ext: "ext", url: "property" },
            princeLink: { ext: "ext", url: "property" },
            princeMarginAlt: { ext: "ext", url: "property" },
            princePageGroup: { ext: "ext", url: "property" },
            princePdfDestination: { ext: "ext", url: "property" },
            princePdfLinkType: { ext: "ext", url: "property" },
            princePdfTagType: { ext: "ext", url: "property" },
            princeTableColumnSpan: { ext: "ext", url: "property" },
            princeTableRowSpan: { ext: "ext", url: "property" },
            princeTextJustify: { ext: "ext", url: "property" },
            princeTextReplace: { ext: "ext", url: "property" },
            princeTooltip: { ext: "ext", url: "property" },
            right: { url: "property" },
            stopColor: { url: "property" },
            stopOpacity: { url: "property" },
            stringSet: { url: "property" },
            stroke: { url: "property" },
            strokeDasharray: { url: "property" },
            strokeDashoffset: { url: "property" },
            strokeLinecap: { url: "property" },
            strokeLinejoin: { url: "property" },
            strokeMiterlimit: { url: "property" },
            strokeOpacity: { url: "property" },
            strokeWidth: { url: "property" },
            tableBaseline: { ext: "ext", url: "property" },
            tableColumnSpan: { ext: "ext", url: "property" },
            tableLayout: { url: "property" },
            tableRowSpan: { ext: "ext", url: "property" },
            tabSize: { url: "property" },
            textAlign: { url: "property" },
            textAlignAll: { url: "property" },
            textAlignLast: { url: "property" },
            textAnchor: { url: "property" },
            textDecoration: { url: "property" },
            textIndent: { url: "property" },
            textJustify: { ext: "ext", url: "property" },
            textLineThrough: { url: "property" },
            textLineThroughColor: { url: "property" },
            textLineThroughStyle: { url: "property" },
            textOverflow: { url: "property" },
            textOverline: { url: "property" },
            textOverlineColor: { url: "property" },
            textOverlineStyle: { url: "property" },
            textTransform: { url: "property" },
            textUnderline: { url: "property" },
            textUnderlineColor: { url: "property" },
            textUnderlineStyle: { url: "property" },
            top: { url: "property" },
            transform: { url: "property" },
            transformOrigin: { url: "property" },
            unicodeBidi: { url: "property" },
            verticalAlign: { url: "property" },
            visibility: { url: "property" },
            whiteSpace: { url: "property" },
            widows: { url: "property" },
            width: { url: "property" },
            wordBreak: { url: "property" },
            wordSpacing: { url: "property" },
            writingMode: { url: "property" },
            zIndex: { url: "property" },
            getPropertyValue: {},
            removeProperty: {},
            setProperty: {},
            setPropertyValue: {}
        }
    },
    DOMException: {
        prototype: {
            INDEX_SIZE_ERR: {},
            HIERARCHY_REQUEST_ERR: {},
            NO_MODIFICATION_ALLOWED_ERR: {},
            NOT_FOUND_ERR: {},
            NOT_SUPPORTED_ERR: {},
            INUSE_ATTRIBUTE_ERR: {},
            INVALID_STATE_ERR: {},
            SYNTAX_ERR: {},
            TYPE_MISMATCH_ERR: {}
        }
    },
    SVGException: {
        prototype: {
            SVG_INVALID_VALUE_ERR: {},
            SVG_MATRIX_NOT_INVERTABLE: {}
        }
    },
    DOMImplementation: {
        prototype: {
            createDocument: {},
            createHTMLDocument: {},
            hasFeature: {}
        }
    },
    DOMParser: {
        prototype: {
            parseFromString: {}
        }
    },
    DOMTokenList: {
        prototype: {
            length: {},
            value: {},
            item: {},
            contains: {},
            add: {},
            remove: {},
            replace: {},
            supports: {},
            toggle: {},
            entries: {},
            forEach: {},
            keys: {},
            values: {}
        }
    },
    SVGMatrix: {
        prototype: {
            multiply: {},
            inverse: {},
            translate: {},
            scale: {},
            scaleNonUniform: {},
            rotate: {},
            rotateFromVector: {},
            flipX: {},
            flipY: {},
            skewX: {},
            skewY: {},
            a: {},
            b: {},
            c: {},
            d: {},
            e: {},
            f: {}
        }
    },
    CanvasRenderingContext2D: {
        prototype: {
            save: {},
            restore: {},
            scale: {},
            rotate: {},
            translate: {},
            transform: {},
            setTransform: {},
            resetTransform: {},
            moveTo: {},
            lineTo: {},
            rect: {},
            clearRect: {},
            fillRect: {},
            strokeRect: {},
            arc: {},
            arcTo: {},
            ellipse: {},
            bezierCurveTo: {},
            quadraticCurveTo: {},
            beginPath: {},
            closePath: {},
            fill: {},
            stroke: {},
            setLineDash: {},
            getLineDash: {},
            systemFocusRing: {},
            customFocusRing: {},
            scrollPathIntoView: {},
            clip: {},
            resetClip: {},
            isPointInPath: {},
            fillText: {},
            strokeText: {},
            measureText: {},
            createLinearGradient: {},
            createRadialGradient: {},
            createPattern: {},
            drawImage: {},
            createImageData: {},
            getImageData: {},
            putImageData: {},
            globalAlpha: {},
            globalCompositeOperation: {},
            strokeStyle: {},
            fillStyle: {},
            lineWidth: {},
            lineCap: {},
            lineJoin: {},
            lineDashOffset: {},
            miterLimit: {},
            font: {},
            textAlign: {},
            textBaseline: {},
            shadowColor: {},
            shadowOffsetX: {},
            shadowOffsetY: {},
            shadowBlue: {}
        }
    },
    ImageData: {
        prototype: {
        }
    },
    Image: {
    },
    HTMLElement: {
        prototype: {
            dir: {},
            lang: {},
            title: {}
        }
    },
    HTMLAnchorElement: {
        prototype: {
            href: {},
            protocol: {},
            username: {},
            password: {},
            host: {},
            hostname: {},
            port: {},
            pathname: {},
            search: {},
            hash: {},
            name: {},
            target: {}
        }
    },
    HTMLAreaElement: {
        prototype: {
            href: {},
            protocol: {},
            username: {},
            password: {},
            host: {},
            hostname: {},
            port: {},
            pathname: {},
            search: {},
            hash: {},
            name: {},
            target: {},
            alt: {},
            coords: {},
            shape: {},
            download: {},
            rel: {}
        }
    },
    HTMLBaseElement: {
        prototype: {
            href: {},
            target: {}
        }
    },
    HTMLBodyElement: {
        prototype: {
        }
    },
    HTMLBRElement: {
        prototype: {
        }
    },
    HTMLCanvasElement: {
        prototype: {
            getContext: {},
            width: {},
            height: {}
        }
    },
    HTMLDivElement: {
        prototype: {
        }
    },
    HTMLDListElement: {
        prototype: {
        }
    },
    HTMLHeadElement: {
        prototype: {
        }
    },
    HTMLHeadingElement: {
        prototype: {
        }
    },
    HTMLHRElement: {
        prototype: {
        }
    },
    HTMLHtmlElement: {
        prototype: {
        }
    },
    HTMLImageElement: {
        prototype: {
            alt: {},
            src: {},
            width: {},
            height: {}
        }
    },
    HTMLInputElement: {
        prototype: {
            checked: {},
            disabled: {},
            name: {},
            type: {},
            value: {}
        }
    },
    HTMLLIElement: {
        prototype: {
            value: {}
        }
    },
    HTMLLinkElement: {
        prototype: {
            href: {},
            hreflang: {},
            media: {},
            rel: {},
            type: {}
        }
    },
    HTMLMetaElement: {
        prototype: {
            name: {},
            content: {}
        }
    },
    HTMLModElement: {
        prototype: {
            cite: {}
        }
    },
    HTMLOListElement: {
        prototype: {
            start: {},
            type: {}
        }
    },
    HTMLOptionElement: {
        prototype: {
            disabled: {},
            selected: {},
            value: {}
        }
    },
    HTMLParagraphElement: {
        prototype: {
        }
    },
    HTMLPreElement: {
        prototype: {
        }
    },
    HTMLQuoteElement: {
        prototype: {
            cite: {}
        }
    },
    HTMLScriptElement: {
        prototype: {
            src: {},
            type: {}
        }
    },
    HTMLSpanElement: {
        prototype: {
        }
    },
    HTMLStyleElement: {
        prototype: {
            media: {},
            type: {}
        }
    },
    HTMLTableElement: {
        prototype: {
        }
    },
    HTMLTableCaptionElement: {
        prototype: {
        }
    },
    HTMLTableColElement: {
        prototype: {
            span: {}
        }
    },
    HTMLTableDataCellElement: {
        prototype: {
        }
    },
    HTMLTableHeaderCellElement: {
        prototype: {
        }
    },
    HTMLTableRowElement: {
        prototype: {
        }
    },
    HTMLTableSectionElement: {
        prototype: {
        }
    },
    HTMLTextAreaElement: {
        prototype: {
        }
    },
    HTMLTitleElement: {
        prototype: {
        }
    },
    HTMLUListElement: {
        prototype: {
        }
    },
    BoxInfo: {
        ext: "ext",
        type: "function",
        returns: "The properties of a box, can be accessed after document conversion has finished - see <a href='/doc/javascript#the-box-tracking-api'>The Box Tracking API</a>",
        prototype: {
            type: {
                type: "function",
                returns: "\"BODY\" | \"COLUMN\" | \"FLEXLINE\" | \"FOOTNOTES\" | \"FLOATS\" | \"BOX\" | \"LINE\" | \"SPAN\" | \"TEXT\" | \"SVG\" | \"IMAGE\""
            },
            pageNum: {},
            x: {
                type: "function",
                returns: "x-coordinate, in pt"
            },
            y: {
                type: "function",
                returns: "y-coordinate, in pt"
            },
            w: {
                type: "function",
                returns: "width, in pt"
            },
            h: {
                type: "function",
                returns: "height, in pt"
            },
            marginBottom: {
                type: "function",
                returns: "the used value for the bottom margin",
            },
            marginLeft: {
                type: "function",
                returns: "the used value for the left margin",
            },
            marginRight: {
                type: "function",
                returns: "the used value for the right margin",
            },
            marginTop: {
                type: "function",
                returns: "the used value for the top margin",
            },
            floatPosition: {
                type: "function",
                returns: "\"TOP\" | \"BOTTOM\"",
            },
            children: {
                type: "function",
                returns: "array of child boxes"
            },
            parent: {
                type: "function",
                returns: "parent box"
            },
            element: {
                type: "function",
                returns: "DOM element for box (may be null)"
            },
            pseudo: {
                type: "function",
                returns: "pseudo-element name or null"
            },
            text: {
                type: "function",
                type: "string"
            },
            style: {
                type: "function",
                returns: "CSS style object for box"
            }
        }
    },
    BoxInfoChildren: {
        ext: "ext",
        prototype: {
            item: {},
            length: {}
        }
    },
    // Prince APIs
    Prince: {
        type: "object",
        ext: "ext",
        desc: "See <a href='/doc/javascript#the-prince-object'>The Prince Object</a>",
        registerPostLayoutFunc: {
            type: "function",
            arguments: [
                {name: "function", type: "string"}
            ],
            example: "<script> \nPrince.registerPostLayoutFunc(function() {\n    var str = '@prince-color Color1 { alternate-color: cmyk(1,0,0,0) }';\n    var add = document.getElementById('add');\n    add.appendChild(document.createTextNode(str));\n});\n</script>\n<style id='add'></style>\n<p style='color: prince-color(Color1)'>This was black, becomes cyan</p>",
            desc: "See <a href='/doc/cookbook#the-multi-pass-solution'>The \"Multi-Pass\" Solution</a>"
        },
        addScriptFunc: {
            type: "function",
            arguments: [
                {name: "name", type: "string"},
                {name: "function", type: "string"}
            ],
            example: "function myfunc() {\n  return 'Some generated content text!';\n}\nPrince.addScriptFunc('myfunc', myfunc);"
        },
        trackBoxes: {
            type: "function",
            desc: "See <a href='/doc/javascript#the-box-tracking-api'>The Box Tracking API</a>",
            arguments: [
                {type: "boolean"}
            ]
        },
        convertToFile: {
            type: "function",
            arguments: [
                {name: "JSON", type: "string"},
                {name: "OutputFileName", type: "string"},
                {name: "optional extra resources", type: "ArrayBuffers or strings"}
            ],
            returns: "boolean, indicating success"
        },
        convertToBuffer: {
            type: "function",
            arguments: [
                {name: "JSON", type: "string"},
                {name: "optional extra resources", type: "ArrayBuffers or strings"}
            ],
            returns: "ArrayBuffer if successful, null if not"
        },
		failStatus: {
			returns: "boolean"
		},
        pageCount: {
            type: "function",
            returns: "Total number of document pages, can be accessed after document conversion has finished"
        },
        Log: {
            debug: {},
            info: {
                arguments: [
                    {name: "message", type: "string"}
                ]
            },
            warning: {
                arguments: [
                    {name: "message", type: "string"}
                ]
            },
            error: {
                arguments: [
                    {name: "message", type: "string"}
                ]
            },
            data: {
                arguments: [
                    {name: "name", type: "string"},
                    {name: "value", type: "string"}
                ]
            }
        }
    },
    // PDF APIs
    PDF: {
        type: "object",
        ext: "ext",
        desc: "See <a href='/doc/javascript#the-pdf-object'>The PDF Object</a>",
        attachFile: {
            type: "function",
            arguments: [
            {name: "URL", type: "string"},
            {name: "description", type: "string"},
            {name: "filename", type: "string", desc: "Optional third argument to specify the filename to be displayed for the attachment in the PDF."}
            ],
            example: "PDF.attachFile('data.xls', 'Latest sales figures.', 'Data')"
        },
        colorOptions: {
            type: "function",
            arguments: [
                {type: "string", desc: "\"auto\" | \"use-true-black\" | \"use-rich-black\""}
            ]
        },
        embedFonts: {
            type: "function",
            arguments: [
                {type: "boolean"}
            ]
        },
        subsetFonts: {
            type: "function",
            arguments: [
                {type: "boolean"}
            ]
        },
        artificialFonts: {
            type: "function",
            arguments: [
                {type: "boolean"}
            ]
        },
        forceIdentityEncoding: {
            type: "function",
            arguments: [
                {type: "boolean"}
            ]
        },
        compress: {
            type: "function",
            arguments: [
                {type: "boolean"}
            ]
        },
        encrypt: {
            type: "function",
            arguments: [
                {type: "boolean"}
            ]
        },
        userPassword: {
            type: "function",
            arguments: [
                {type: "string"}
            ]
        },
        ownerPassword: {
            type: "function",
            arguments: [
                {type: "string"}
            ]
        },
        allowPrint: {
            type: "function",
            arguments: [
                {type: "boolean"}
            ]
        },
        allowModify: {
            type: "function",
            arguments: [
                {type: "boolean"}
            ]
        },
        allowCopy: {
            type: "function",
            arguments: [
                {type: "boolean"}
            ]
        },
        allowAnnotate: {
            type: "function",
            arguments: [
                {type: "boolean"}
            ]
        },
        keyBits: {
            type: "function",
            arguments: [
                {name: "key bits", type: "string", desc: "\"40\" | \"128\""}
            ]
        },
        script: {
            type: "function",
            arguments: [
                {type: "string"}
            ]
        },
        openAction: {
            type: "function",
            arguments: [
                {type: "string", desc: "Note that Prince passes the provided values verbatim to the PDF viewer, so the user can supply values that Prince doesn't know about, but the viewer does."}
            ],
            example: "PDF.openAction('print')"
        },
        pageLayout: {
            type: "function",
            arguments: [
                {type: "string", desc: "\"single-page\" | \"one-column\" | \"two-column\[-left/right\]\""}
            ]
        },
        pageMode: {
            type: "function",
            arguments: [
                {type: "string", desc: "\"auto\" | \"show-bookmarks\" | \"fullscreen\" | \"show-attachments\""}
            ]
        },
        printScaling: {
            type: "function",
            arguments: [
                {type: "string", desc: "\"auto\" | \"none\""}
            ]
        },
        duplex: {
            type: "function",
            arguments: [
                {type: "string", desc: "\"auto\" | \"simplex\" | \"duplex-flip-short-edge\" | \"duplex-flip-long-edge\""}
            ]
        },
        profile: {
            type: "function",
            arguments: [
                {type: "string", desc:"One of the supported PDF profiles."}
            ],
            example: "PDF.profile(\"PDF/X-3:2003\")"
        },
        outputIntent: {
            type: "function",
            arguments: [
                {type: "string", name: "URL"}
            ]
        },
        objectStreams: {
            type: "function",
            desc: "Can be used to disable PDF object streams.  Object streams are enabled by default.",
            arguments: [
                {type: "boolean" }
            ]
        },
        fallbackCMYKProfile: {
            type: "function",
            arguments: [
                {type: "string", name: "URL"}
            ]
        },
        colorConversion: {
            type: "function",
            arguments: [
                {type: "string", desc: "\"none\" | \"full\""}
            ]
        },
        paperTray: {
            type: "function",
            arguments: [
                {type: "string", desc: "\"auto \" | \"pick-tray-by-pdf-size\""}
            ]
        },
        filterResolution: {
            type: "function",
            arguments: [
                {type: "string", name: "dpi"}
            ],
            example: "PDF.filterResolution('128dpi')"
        },
        xmp: {
            type: "function",
            arguments: [
                {type: "string", name: "URL"}
            ],
            example: "PDF.xmp('xmp-data.xmp')"
        },
        title: {
            type: "function",
            arguments: [
                {type: "string"}
            ]
        },
        subject: {
            type: "function",
            arguments: [
                {type: "string"}
            ]
        },
        author: {
            type: "function",
            arguments: [
                {type: "string"}
            ]
        },
        keywords: {
            type: "function",
            arguments: [
                {type: "string"}
            ]
        },
        creator: {
            type: "function",
            arguments: [
                {type: "string"}
            ]
        },
        lang: {
            type: "function",
            arguments: [
                {type: "string"}
            ]
        },
        pages: {
            type: "array",
            returns: "A list of page boxes, can be accessed after document conversion has finished"
        }
    },
    Log: {
        ext: "ext",
        type: "object",
        debug: {
            type: "function",
        },
        info: {
            type: "function",
            arguments: [
                {name: "message", type: "string"}
            ]
        },
        warning: {
            type: "function",
            arguments: [
                {name: "message", type: "string"}
            ]
        },
        error: {
            type: "function",
            arguments: [
                {name: "message", type: "string"}
            ]
        },
        data: {
            type: "function",
            arguments: [
                {name: "name", type: "string"},
                {name: "value", type: "string"}
            ]
        }
    },
};

//dump("", window, std);

void function dump(prefix, base, map)
{
    for (var i in map) {
        if (i === "_is_root") continue;
        try {
            var val = base[i];
            if (typeof val === "function")
            {
                if (i != val.name)
                {
                    val = "function "+prefix+i+"/"+val.length+" (but .name is '"+val.name+"')"
                }
                else
                {
                    val = "function "+prefix+i+"/"+val.length;
                }
            }
            else
            {
                val = prefix+i+": "+val;
            }

            //console.log(val);

            if (i === "constructor")
            {
                if (base[i].prototype !== base)
                {
                    throw "constructor/prototype link is broken!";
                }
            }
            else
            {
                dump(prefix+i+".", base[i], map[i]);
            }
        }
        catch (x) {
            //console.log(prefix+i+": "+x);
        }
    }

    if ((typeof base === "object" && base !== null) || typeof base === "function")
    {
        if (!map._is_root)
        {
            var names = Object.getOwnPropertyNames(base);

            for (var i in names)
            {
                var name = names[i];

                if (!(typeof base === "function" && (name === "name" || name === "length")) &&
                    !(base === window && name === "std"))
                {
                    if (!(name in map))
                    {
                        //console.log("no def for "+prefix+name+"?");
                    }
                }
            }
        }
    }
}("", window, std);

