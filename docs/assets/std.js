
var std = {
    NaN: {},
    Infinity: {},
    undefined: {},
    eval: {},
    parseInt: {},
    parseFloat: {},
    isNaN: {},
    isFinite: {},
    escape: {},
    unescape: {},
    decodeURI: {},
    decodeURIComponent: {},
    encodeURI: {},
    encodeURIComponent: {},
    toString: {},
    toLocaleString: {},
    valueOf: {},
    hasOwnProperty: {},
    isPrototypeOf: {},
    propertyIsEnumerable: {},
    Object: {
        create: {},
        defineProperty: {},
        defineProperties: {},
        keys: {},
        getOwnPropertyDescriptor: {},
        getOwnPropertyNames: {},
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
            bind: {},
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
            getPrinceBoxes: {}
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
            alignContent: {},
            alignItems: {},
            alignSelf: {},
            background: {},
            backgroundAttachment: {},
            backgroundClip: {},
            backgroundColor: {},
            backgroundImage: {},
            backgroundImageResolution: {},
            backgroundOrigin: {},
            backgroundPosition: {},
            backgroundRepeat: {},
            backgroundSize: {},
            baselineShift: {},
            bookmarkLabel: {},
            bookmarkLevel: {},
            bookmarkState: {},
            bookmarkTarget: {},
            border: {},
            borderBottom: {},
            borderBottomColor: {},
            borderBottomLeftRadius: {},
            borderBottomRightRadius: {},
            borderBottomStyle: {},
            borderBottomWidth: {},
            borderClip: {},
            borderCollapse: {},
            borderColor: {},
            borderLeft: {},
            borderLeftColor: {},
            borderLeftStyle: {},
            borderLeftWidth: {},
            borderRadius: {},
            borderRight: {},
            borderRightColor: {},
            borderRightStyle: {},
            borderRightWidth: {},
            borderSpacing: {},
            borderStyle: {},
            borderTop: {},
            borderTopColor: {},
            borderTopLeftRadius: {},
            borderTopRightRadius: {},
            borderTopStyle: {},
            borderTopWidth: {},
            borderWidth: {},
            bottom: {},
            boxDecorationBreak: {},
            boxSizing: {},
            breakAfter: {},
            breakBefore: {},
            breakInside: {},
            captionPage: {},
            captionSide: {},
            clear: {},
            clip: {},
            clipPath: {},
            clipRule: {},
            color: {},
            colorInterpolation: {},
            colorInterpolationFilters: {},
            columnBreakAfter: {},
            columnBreakBefore: {},
            columnCount: {},
            columnFill: {},
            columnGap: {},
            columnRule: {},
            columnRuleColor: {},
            columnRuleStyle: {},
            columnRuleWidth: {},
            columns: {},
            columnSpan: {},
            columnWidth: {},
            content: {},
            counterIncrement: {},
            counterReset: {},
            direction: {},
            display: {},
            dominantBaseline: {},
            emptyCells: {},
            fill: {},
            fillOpacity: {},
            fillRule: {},
            filter: {},
            flex: {},
            flexBasis: {},
            flexDirection: {},
            flexFlow: {},
            flexGrow: {},
            flexShrink: {},
            flexWrap: {},
            floodColor: {},
            floodOpacity: {},
            cssFloat: {},
            floatDeferColumn: {},
            floatDeferPage: {},
            floatModifier: {},
            floatPlacement: {},
            floatReference: {},
            floatTail: {},
            floatPolicy: {},
            flow: {},
            font: {},
            fontFamily: {},
            fontSize: {},
            fontStretch: {},
            fontStyle: {},
            fontVariant: {},
            fontWeight: {},
            footnoteDisplay: {},
            footnoteStylePosition: {},
            height: {},
            hyphenateAfter: {},
            hyphenateBefore: {},
            hyphenateLines: {},
            hyphenatePatterns: {},
            hyphens: {},
            imageOrientation: {},
            imageResolution: {},
            insetInside: {},
            insetOutside: {},
            justifyContent: {},
            left: {},
            letterSpacing: {},
            lightingColor: {},
            lineHeight: {},
            lineStackingStrategy: {},
            link: {},
            listStyle: {},
            listStyleImage: {},
            listStylePosition: {},
            listStyleType: {},
            margin: {},
            marginAlt: {},
            marginBottom: {},
            marginInside: {},
            marginLeft: {},
            marginOutside: {},
            marginRight: {},
            marginTop: {},
            marker: {},
            markerEnd: {},
            markerMid: {},
            markerStart: {},
            mask: {},
            maxHeight: {},
            maxWidth: {},
            minHeight: {},
            minWidth: {},
            opacity: {},
            order: {},
            orphans: {},
            overflow: {},
            overflowWrap: {},
            padding: {},
            paddingBottom: {},
            paddingLeft: {},
            paddingRight: {},
            paddingTop: {},
            page: {},
            pageBreakAfter: {},
            pageBreakBefore: {},
            pageBreakInside: {},
            pageGroup: {},
            position: {},
            princeBackgroundImageResolution: {},
            princeBookmarkLabel: {},
            princeBookmarkLevel: {},
            princeBookmarkState: {},
            princeBookmarkTarget: {},
            princeBorderClip: {},
            princeCaptionPage: {},
            princeClear: {},
            princeFilterResolution: {},
            princeFloatDeferColumn: {},
            princeFloatDeferPage: {},
            princeFloatModifier: {},
            princeFloatPlacement: {},
            princeFloatReference: {},
            princeFloatTail: {},
            princeFloatPolicy: {},
            princeFlow: {},
            princeFootnoteDisplay: {},
            princeFootnotePolicy: {},
            princeHyphenateAfter: {},
            princeHyphenateBefore: {},
            princeHyphenateCharacter: {},
            princeHyphenateLines: {},
            princeHyphenatePatterns: {},
            princeHyphens: {},
            princeImageMagic: {},
            princeImageResolution: {},
            princeLang: {},
            princeLinebreakMagic: {},
            princeLink: {},
            princeMarginAlt: {},
            princePageGroup: {},
            princePdfDestination: {},
            princePdfLinkType: {},
            princePdfTagType: {},
            princeTableColumnSpan: {},
            princeTableRowSpan: {},
            princeTabSize: {},
            princeTextAlignAll: {},
            princeTextJustify: {},
            princeTextReplace: {},
            princeTooltip: {},
            right: {},
            stopColor: {},
            stopOpacity: {},
            stringSet: {},
            stroke: {},
            strokeDasharray: {},
            strokeDashoffset: {},
            strokeLinecap: {},
            strokeLinejoin: {},
            strokeMiterlimit: {},
            strokeOpacity: {},
            strokeWidth: {},
            tableBaseline: {},
            tableColumnSpan: {},
            tableLayout: {},
            tableRowSpan: {},
            tabSize: {},
            textAlign: {},
            textAlignAll: {},
            textAlignLast: {},
            textAnchor: {},
            textDecoration: {},
            textIndent: {},
            textJustify: {},
            textLineThrough: {},
            textLineThroughColor: {},
            textLineThroughStyle: {},
            textOverflow: {},
            textOverline: {},
            textOverlineColor: {},
            textOverlineStyle: {},
            textTransform: {},
            textUnderline: {},
            textUnderlineColor: {},
            textUnderlineStyle: {},
            top: {},
            transform: {},
            transformOrigin: {},
            unicodeBidi: {},
            verticalAlign: {},
            visibility: {},
            whiteSpace: {},
            widows: {},
            width: {},
            wordBreak: {},
            wordSpacing: {},
            writingMode: {},
            zIndex: {},
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
        prototype: {
            type: {},
            pageNum: {},
            x: {},
            y: {},
            w: {},
            h: {},
            marginBottom: {},
            marginLeft: {},
            marginRight: {},
            marginTop: {},
            floatPosition: {},
            children: {},
            parent: {},
            element: {},
            pseudo: {},
            text: {},
            style: {}
        }
    },
    BoxInfoChildren: {
        prototype: {
            item: {},
            length: {}
        }
    },
    // Prince APIs
    Prince: {
        registerPostLayoutFunc: {},
        addScriptFunc: {},
        trackBoxes: {},
        convertToFile: {},
        convertToBuffer: {},
		failStatus: {},
        pageCount: {},
        Log: {
            debug: {},
            info: {},
            warning: {},
            error: {},
            data: {}
        }
    },
    // PDF APIs
    PDF: {
        colorOptions: {},
        attachFile: {},
        embedFonts: {},
        subsetFonts: {},
        artificialFonts: {},
        forceIdentityEncoding: {},
        compress: {},
        encrypt: {},
        userPassword: {},
        ownerPassword: {},
        allowPrint: {},
        allowModify: {},
        allowCopy: {},
        allowAnnotate: {},
        keyBits: {},
        script: {},
        openAction: {},
        pageLayout: {},
        pageMode: {},
        printScaling: {},
        duplex: {},
        profile: {},
        outputIntent: {},
        objectStreams: {},
        fallbackCMYKProfile: {},
        colorConversion: {},
        paperTray: {},
        filterResolution: {},
        xmp: {},
        title: {},
        subject: {},
        author: {},
        keywords: {},
        creator: {},
        lang: {},
        pages: {}
    },
    Log: {
        debug: {},
        info: {},
        warning: {},
        error: {},
        data: {}
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

