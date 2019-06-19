(function (i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, "script", "//dordnung.de/raspberrypi-ledstrip/external.php?file=analytics.js&ver=1.0", "ga");

var gaProperty = 'UA-54198343-6';

ga("create", gaProperty, "auto");
ga("set", "anonymizeIp", true);
ga("send", "pageview");

// Disable tracking if the opt-out cookie exists.
var disableStr = 'ga-disable-' + gaProperty;
if (document.cookie.indexOf(disableStr + '=true') > -1) {
    window[disableStr] = true;
}

// Opt-out function
function gaOptout() {
    document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
    window[disableStr] = true;
}

$(document).ready(function() {
    // Navigation
    $("nav li a").click(function() {
        $("nav li a").removeClass("active");
        $(this).toggleClass("active");
    });
    // Scroll to the desired section on click
    // Make sure to add the `data-scroll` attribute to your `<a>` tag.
    // Example:
    // `<a data-scroll href="#my-section">My Section</a>` will scroll to an element with the id of 'my-section'.
    function scrollToSection(event) {
        event.preventDefault();
        var $section = $($(this).attr("href"));
        $("html, body").animate(
            {
                scrollTop: $section.offset().top - $("#nav").outerHeight() * 1.1
            },
            500
        );
    }
    $("[data-scroll]").on("click", scrollToSection);

    $("#skills")
        .find("div")
        .click(function() {
            $("#skills")
                .find("div")
                .removeClass("skill-active");
            $(this).addClass("skill-active");
            let i = $(this).index() + 1;
            $(".carousel-inner")
                .find("div")
                .removeClass("active");
            $(".carousel-inner")
                .find("div:nth-child(" + i + ")")
                .addClass("active");
        });

    $("#menu").click(function() {
        if ($("#nav ul li:nth-child(2)").css("display") == "none") {
            $("#nav ul li").css("display", "inline-block");
        } else {
            $("#nav ul li").css("display", "none");
        }
    });
});
