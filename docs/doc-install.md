<script>
function redirects() {
    if (location.hash.indexOf('start') == 1) {
        window.location.href = '/doc/installing'
    }
    else if (location.hash.indexOf('installing') == 1) {
        window.location.href = '/doc/installing#installing-prince'
    }
    else if (location.hash.indexOf('license-install') == 1) {
        window.location.href = '/doc/installing#installing-a-license-file'
    }
    else if (location.hash.indexOf('installation-layout') == 1) {
        window.location.href = '/doc/installing#installation-layout'
    }
    else if (location.hash.indexOf('first-doc') == 1) {
        window.location.href = '/doc/first-doc'
    }
    else if (location.hash.indexOf('lab-report') == 1) {
        window.location.href = '/doc/first-doc#the-lab-report'
    }
    else if (location.hash.indexOf('running-prince') == 1) {
        window.location.href = '/doc/first-doc#processing-the-document'
    }
    else if (location.hash.indexOf('styling-lab-report') == 1) {
        window.location.href = '/doc/first-doc#styling-the-document'
    }
    else if (location.hash.indexOf('help-install') == 1) {
        window.location.href = '/doc/help-install'
    }
    else if (location.hash.indexOf('troubleshooting-install') == 1) {
        window.location.href = '/doc/help-install#troubleshooting'
    }
    else if (location.hash.indexOf('missing-fonts') == 1) {
        window.location.href = '/doc/help-install#missing-glyphs-or-fonts'
    }
    else if (location.hash.indexOf('fontconfig') == 1) {
        window.location.href = '/doc/help-install#fontconfig'
    }
    else if (location.hash.indexOf('shared-libraries') == 1) {
        window.location.href = '/doc/help-install#shared-library-trouble'
    }
    else if (location.hash.indexOf('trouble-path-issues') == 1) {
        window.location.href = '/doc/help-install#path-issues'
    }
    else if (location.hash.indexOf('faq-install') == 1) {
        window.location.href = '/doc/help-install#frequently-asked-questions'
    }
}
window.addEventListener("load",  function() { redirects(); });
</script>