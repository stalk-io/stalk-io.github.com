(function() {

    if(typeof STALK == 'undefined') {
        loadScript('http://www.stalk.io/stalk.js', function() {
            STALK.init();
        });
    }
    
    // -----------------------------------------------------------------------//

    function loadScript(url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";

        if (script.readyState) { //IE
            script.onreadystatechange = function() {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;

                    if (typeof callback == 'undefined') return;
                    callback();
                }
            };
        } else {
            script.onload = function() {
                if (typeof callback == 'undefined') return;
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }
})();
