<script>
function redirects() {
    if (location.hash.indexOf('command-line') == 1) {
        window.location.href = '/doc/command-line'
    }
    else if (location.hash.indexOf('css-refs') == 1) {
        window.location.href = '/doc/css-refs'
    }
    else if (location.hash.indexOf('css-features') == 1) {
        window.location.href = '/doc/css-refs#supported-css-specifications'
    }
    else if (location.hash.indexOf('selectors') == 1) {
        window.location.href = '/doc/css-selectors'
    }
    else if (location.hash.indexOf('media-queries') == 1) {
        window.location.href = '/doc/css-media-queries'
    }
    else if (location.hash.indexOf('css-functions') == 1) {
        window.location.href = '/doc/css-functions'
    }
    else if (location.hash.indexOf('css-atrules') == 1) {
        window.location.href = '/doc/css-at-rules'
    }
    else if (location.hash.indexOf('properties') == 1) {
        window.location.href = '/doc/css-props'
    }
    else if (location.hash.indexOf('js-support') == 1) {
        window.location.href = '/doc/js-support'
    }
    else if (location.hash.indexOf('page-size-keywords') == 1) {
        window.location.href = '/doc/page-size-keywords'
    }
    else if (location.hash.indexOf('characters') == 1) {
        window.location.href = '/doc/characters'
    }
    else if (location.hash.indexOf('acknowledgments') == 1) {
        window.location.href = '/doc/acknowledgements'
    }
    else {
        window.location.href = '/doc/command-line'
    }
}
window.addEventListener("load",  function() { redirects(); });
</script>