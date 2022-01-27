window.onload = function() {
    if (typeof Prince !== 'undefined') {
        var links = document.querySelectorAll('a[href]');
        for (var i = links.length; i --> 0;) {
            if (links[i].hostname === location.hostname) {
                if (!(links[i].pathname.lastIndexOf('/') == links[i].pathname.length - '/'.length)) {
                    if (typeof links[i].hash !== 'undefined') {
                        links[i].href = links[i].pathname + "/" + links[i].hash;
                    } else {
                        links[i].href = links[i].pathname + "/";
                    }
                }
            }
        }
        if (document.location.href.indexOf('intro-userguide') > -1) {
            var docsNav = document.getElementById('docsNav');
            docsNav.style.setProperty('display', 'block');
            docsNav.getElementsByClassName('navGroups')[0].style.setProperty('display', 'block');
            docsNav.getElementsByClassName('navBreadcrumb')[0].style.setProperty('display', 'none');
            var toc = docsNav.getElementsByClassName('navGroup');
            toc[0].style.setProperty('display', 'none');
            toc[1].lastChild.removeAttribute('class');
            toc[2].lastChild.removeAttribute('class');
            document.getElementsByTagName('p')[2].style.setProperty('display', 'none');
        }
    }
}
