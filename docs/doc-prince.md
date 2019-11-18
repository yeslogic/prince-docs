<script>
function redirects() {
    if (location.hash.indexOf('styling') == 1) {
        window.location.href = '/doc/styling'
    }
    else if (location.hash.indexOf('fonts') == 1) {
        window.location.href = '/doc/styling#fonts'
    }
    else if (location.hash.indexOf('font-family') == 1) {
        window.location.href = '/doc/styling#defining-a-font-family'
    }
    else if (location.hash.indexOf('opentype-features') == 1) {
        window.location.href = '/doc/styling#opentype-features-in-prince'
    }
    else if (location.hash.indexOf('font-families') == 1) {
        window.location.href = '/doc/styling#generic-font-families'
    }
    else if (location.hash.indexOf('redefining-font-families') == 1) {
        window.location.href = '/doc/styling#redefining-the-generic-font-families'
    }
    else if (location.hash.indexOf('layout') == 1) {
        window.location.href = '/doc/styling#layout'
    }
    else if (location.hash.indexOf('text-formatting') == 1) {
        window.location.href = '/doc/styling#text-formatting'
    }
    else if (location.hash.indexOf('paragraph-formatting') == 1) {
        window.location.href = '/doc/styling#paragraph-formatting'
    }
    else if (location.hash.indexOf('writing-mode') == 1) {
        window.location.href = '/doc/styling#writing-mode'
    }
    else if (location.hash.indexOf('css-box') == 1) {
        window.location.href = '/doc/styling#box-model'
    }
    else if (location.hash.indexOf('display') == 1) {
        window.location.href = '/doc/styling#display'
    }
    else if (location.hash.indexOf('transformations') == 1) {
        window.location.href = '/doc/styling#transformations'
    }
    else if (location.hash.indexOf('lists') == 1) {
        window.location.href = '/doc/styling#lists'
    }
    else if (location.hash.indexOf('tables') == 1) {
        window.location.href = '/doc/styling#tables'
    }
    else if (location.hash.indexOf('columns') == 1) {
        window.location.href = '/doc/styling#columns'
    }
    else if (location.hash.indexOf('floats') == 1) {
        window.location.href = '/doc/styling#floats'
    }
    else if (location.hash.indexOf('float-extensions') == 1) {
        window.location.href = '/doc/styling#prince-extensions-to-floats'
    }
    else if (location.hash.indexOf('footnotes') == 1) {
        window.location.href = '/doc/styling#footnotes'
    }
    else if (location.hash.indexOf('flexbox') == 1) {
        window.location.href = '/doc/styling#flex-layout'
    }
    else if (location.hash.indexOf('css-vars') == 1) {
        window.location.href = '/doc/styling#custom-properties-css-variables'
    }
    else if (location.hash.indexOf('paged') == 1) {
        window.location.href = '/doc/paged'
    }
    else if (location.hash.indexOf('page-size') == 1) {
        window.location.href = '/doc/paged#page-size'
    }
    else if (location.hash.indexOf('page-style') == 1) {
        window.location.href = '/doc/paged#page-style'
    }
    else if (location.hash.indexOf('page-regions') == 1) {
        window.location.href = '/doc/paged#page-regions'
    }
    else if (location.hash.indexOf('page-rules') == 1) {
        window.location.href = '/doc/paged#selecting-pages'
    }
    else if (location.hash.indexOf('controlling-pagination') == 1) {
        window.location.href = '/doc/paged#controlling-pagination'
    }
    else if (location.hash.indexOf('page-marks') == 1) {
        window.location.href = '/doc/paged#trimming-marks'
    }
    else if (location.hash.indexOf('gen-content') == 1) {
        window.location.href = '/doc/gen-content'
    }
    else if (location.hash.indexOf('gen-content-functions') == 1) {
        window.location.href = '/doc/gen-content#generated-content-functions'
    }
    else if (location.hash.indexOf('counters') == 1) {
        window.location.href = '/doc/gen-content#counters-and-numbering'
    }
    else if (location.hash.indexOf('crossref') == 1) {
        window.location.href = '/doc/gen-content#cross-references'
    }
    else if (location.hash.indexOf('scriptfunc') == 1) {
        window.location.href = '/doc/gen-content#script-functions'
    }
    else if (location.hash.indexOf('javascript') == 1) {
        window.location.href = '/doc/javascript'
    }
    else if (location.hash.indexOf('js-print') == 1) {
        window.location.href = 'doc/javascript#javascript-in-printed-media'
    }
    else if (location.hash.indexOf('js-prince') == 1) {
        window.location.href = '/doc/javascript#javascript-in-prince'
    }
    else if (location.hash.indexOf('js-prince-obj') == 1) {
        window.location.href = '/doc/javascript#the-prince-object'
    }
    else if (location.hash.indexOf('js-pdf') == 1) {
        window.location.href = '/doc/javascript#the-pdf-object'
    }
    else if (location.hash.indexOf('js-box') == 1) {
        window.location.href = '/doc/javascript#the-box-tracking-api'
    }
    else if (location.hash.indexOf('graphics') == 1) {
        window.location.href = '/doc/graphics'
    }
    else if (location.hash.indexOf('color') == 1) {
        window.location.href = '/doc/graphics#color'
    }
    else if (location.hash.indexOf('color-management') == 1) {
        window.location.href = '/doc/graphics#color-management'
    }
    else if (location.hash.indexOf('filters') == 1) {
        window.location.href = '/doc/graphics#filters'
    }
    else if (location.hash.indexOf('images') == 1) {
        window.location.href = '/doc/graphics#images'
    }
    else if (location.hash.indexOf('svg') == 1) {
        window.location.href = '/doc/graphics#scalable-vector-graphics-svg'
    }
    else if (location.hash.indexOf('rasterization') == 1) {
        window.location.href = '/doc/graphics#rasterization'
    }
    else if (location.hash.indexOf('tips-and-tricks') == 1) {
        window.location.href = '/doc/cookbook'
    }
    else if (location.hash.indexOf('table-of-content') == 1) {
        window.location.href = '/doc/cookbook#table-of-contents'
    }
    else if (location.hash.indexOf('thinking-in-spreads') == 1) {
        window.location.href = '/doc/cookbook#thinking-in-spreads'
    }
    else if (location.hash.indexOf('long-tables') == 1) {
        window.location.href = '/doc/cookbook#long-tables'
    }
    else if (location.hash.indexOf('fancy-table-captions') == 1) {
        window.location.href = '/doc/cookbook#fancy-table-captions'
    }
    else if (location.hash.indexOf('page-headers-footers') == 1) {
        window.location.href = '/doc/cookbook#page-headers-and-footers'
    }
    else if (location.hash.indexOf('dictionary-page-headers') == 1) {
        window.location.href = '/doc/cookbook#dictionary-page-headers'
    }
    else if (location.hash.indexOf('page-numbering') == 1) {
        window.location.href = '/doc/cookbook#page-numbering'
    }
    else if (location.hash.indexOf('footnotes-per-column') == 1) {
        window.location.href = '/doc/cookbook#footnotes-per-column'
    }
    else if (location.hash.indexOf('multiple-footnotes') == 1) {
        window.location.href = '/doc/cookbook#multiple-footnotes'
    }
    else if (location.hash.indexOf('sidenotes') == 1) {
        window.location.href = '/doc/cookbook#sidenotes'
    }
    else if (location.hash.indexOf('endnotes') == 1) {
        window.location.href = '/doc/cookbook#endnotes'
    }
    else if (location.hash.indexOf('hyperlinks-in-print') == 1) {
        window.location.href = '/doc/cookbook#hyperlinks-in-print'
    }
    else if (location.hash.indexOf('image-magic') == 1) {
        window.location.href = '/doc/cookbook#image-magic'
    }
    else if (location.hash.indexOf('hyphenation') == 1) {
        window.location.href = '/doc/cookbook#hyphenation'
    }
    else if (location.hash.indexOf('ligatures') == 1) {
        window.location.href = '/doc/cookbook#typographic-ligatures'
    }
    else if (location.hash.indexOf('watermarks') == 1) {
        window.location.href = '/doc/cookbook#watermarks'
    }
    else if (location.hash.indexOf('rotating') == 1) {
        window.location.href = '/doc/cookbook#rotating-content'
    }
    else if (location.hash.indexOf('two-pass') == 1) {
        window.location.href = '/doc/cookbook#the-two-pass-solution'
    }
    else if (location.hash.indexOf('pdf-doc') == 1) {
        window.location.href = '/doc/cookbook#documentation-in-pdf-format'
    }
    else if (location.hash.indexOf('help') == 1) {
        window.location.href = '/doc/help'
    }
    else if (location.hash.indexOf('troubleshooting') == 1) {
        window.location.href = '/doc/help#troubleshooting'
    }
    else if (location.hash.indexOf('faq') == 1) {
        window.location.href = '/doc/help#frequently-asked-questions'
    }
    else if (location.hash.indexOf('prince-input') == 1) {
        window.location.href = '/doc/prince-input'
    }
    else if (location.hash.indexOf('apply-css') == 1) {
        window.location.href = '/doc/prince-input#applying-style-sheets-in-prince'
    }
    else if (location.hash.indexOf('applying-javascript') == 1) {
        window.location.href = '/doc/prince-input#applying-javascript-in-prince'
    }
    else if (location.hash.indexOf('xml') == 1) {
        window.location.href = '/doc/prince-input#xml-input'
    }
    else if (location.hash.indexOf('xinclude') == 1) {
        window.location.href = '/doc/prince-input#xml-inclusions-xinclude'
    }
    else if (location.hash.indexOf('pdf-output') == 1) {
        window.location.href = '/doc/prince-output'
    }
    else if (location.hash.indexOf('pdf-profiles') == 1) {
        window.location.href = '/doc/prince-output#pdf-versions-and-profiles'
    }
    else if (location.hash.indexOf('pdf-accessibility') == 1) {
        window.location.href = '/doc/prince-output#pdf-accessibility'
    }
    else if (location.hash.indexOf('pdf-features') == 1) {
        window.location.href = '/doc/prince-output#pdf-features'
    }
    else if (location.hash.indexOf('prince-networking') == 1) {
        window.location.href = '/doc/prince-networking'
    }
    else if (location.hash.indexOf('prince-networking-auth') == 1) {
        window.location.href = '/doc/prince-networking#authentication'
    }
    else if (location.hash.indexOf('prince-networking-cookies') == 1) {
        window.location.href = '/doc/prince-networking#cookies'
    }
    else if (location.hash.indexOf('prince-networking-ssl') == 1) {
        window.location.href = '/doc/prince-networking#ssl'
    }
    else if (location.hash.indexOf('server-integration') == 1) {
        window.location.href = '/doc/server-integration'
    }
    else if (location.hash.indexOf('security') == 1) {
        window.location.href = '/doc/server-integration#security-and-performance'
    }
    else if (location.hash.indexOf('wrappers') == 1) {
        window.location.href = '/server-integration#prince-wrappers'
    }
    else if (location.hash.indexOf('advanced-cmd') == 1) {
        window.location.href = '/doc/server-integration#advanced-command-line-options'
    }
    else if (location.hash.indexOf('pfb') == 1) {
        window.location.href = '/doc/prince-for-books'
    }
    else {
        window.location.href = '/doc/intro-userguide'
    }
}
window.addEventListener("load",  function() { redirects(); });
</script>