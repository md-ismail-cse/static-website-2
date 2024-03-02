/*=============================================
                Wow
===============================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});

/*=============================================
                Wow
===============================================*/
$(function () {
    new WOW().init();
});

/*=============================================
                Home
===============================================*/
$(function () {
    $('.skitter-large').skitter();
});

/*=============================================
                Services
===============================================*/
$(function () {
    $("#services-items").owlCarousel({
        items: 4,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            481: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items: 3
            },
            // breakpoint from 992 up
            992: {
                items: 4
            }
        }
    });
});

/*=============================================
                Portfolio
===============================================*/
$(window).on('load', function () {

    // Initialize Isotope
    $("#portfolio-container").isotope({});

    // filter items on button click
    $("#portfolio-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#portfolio-container").isotope({
            filter: filterValue
        });

        // active button
        $("#portfolio-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/*=============================================
                Magnific-popup
===============================================*/
$('.view-portfolio').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
});

/*====================================================
                        NAVIGATION
====================================================*/
// Show/Hide transparent black navigation
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            // hide nav
            $("nav").removeClass("site-top-nav");
            $("#back-to-top").fadeOut();

        } else {
            // show nav
            $("nav").addClass("site-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});
// Smooth scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #work, #team and etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250);
    });
});

// Close mobile menu on click
$(function () {

    $(".navbar-collapse ul li a").on("click touch", function () {

        $(".navbar-toggle").click();
    });
});