$(document).ready(function () {



    // Navigation
    $("nav li a").click(function () {

        $("nav li a").removeClass("active")
        $(this).toggleClass("active")
    });
    // Scroll to the desired section on click
    // Make sure to add the `data-scroll` attribute to your `<a>` tag.
    // Example: 
    // `<a data-scroll href="#my-section">My Section</a>` will scroll to an element with the id of 'my-section'.
    function scrollToSection(event) {
        event.preventDefault();
        var $section = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $section.offset().top - $("#nav").outerHeight() * 1.1
        }, 500);
    }
    $('[data-scroll]').on('click', scrollToSection);


    $("#skills").find("div").click(function () {

        $("#skills").find("div").removeClass("skill-active");
        $(this).addClass("skill-active");
        let i = $(this).index() + 1;
        $(".carousel-inner").find("div").removeClass("active");
        $(".carousel-inner").find("div:nth-child(" + i + ")").addClass("active");

    })


});