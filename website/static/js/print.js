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
    }
}
