cookie = function(name, value, options) {
    if (typeof value != 'undefined') {
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }

        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = (cookies[i] || "").replace( /^\s+|\s+$/g, "" );
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};


var ua = navigator.userAgent;
var url = document.URL;
var protocol = location.protocol;
var domain = document.domain;

if(url.match(domain + "/sp/")) {
	cookie("sp","visit",{expires:0, path:"/"});
}
else if(ua.match("Android") && ua.match("Mobile") || ua.match("iPhone")|| (ua.match("iPod")) || (ua.match("IEMobile")) || (ua.match("Symbian"))) {
	if(cookie("sp") || cookie("sp") == "visit") {
		function switcherGenerate() {
			var switcher = 	document.createElement("div");
			switcher.id =  "switcher";
			switcher.innerHTML = "<p><a href='/sp/'><img src='/images/switcher-outer.jpg' width='100%' alt='スマートフォン用サイトはこちらからご覧いただけます' /></a></p>";
			document.getElementById("switcherOuter").appendChild(switcher);
		}
		
		//　function
		if(window.addEventListener) {
			window.addEventListener("load", switcherGenerate, false);
		}
	}
	else {
		location.href = "/sp/";
	}
}