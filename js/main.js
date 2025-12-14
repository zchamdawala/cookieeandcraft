(function($) {
    "use strict";

    // Spinner
    var spinner = function() {
        setTimeout(function() {
            var spinnerElement = $('#spinner');
            if (spinnerElement.length > 0) {
                spinnerElement.removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Initialize WOW.js
    new WOW().init();

    // Navbar show/hide on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            if ($('.navbar').length > 0) {
                $('.navbar').fadeIn('slow').css('display', 'flex');
            }
        } else {
            if ($('.navbar').length > 0) {
                $('.navbar').fadeOut('slow').css('display', 'none');
            }
        }
    });

    // Modal Video
    // var $videoSrc;
    // $('.btn-play').click(function () {
    //     $videoSrc = $(this).data("src");
    // });
    // console.log($videoSrc);
    // $('#videoModal').on('shown.bs.modal', function (e) {
    //     $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    // })
    // $('#videoModal').on('hide.bs.modal', function (e) {
    //     $("#video").attr('src', $videoSrc);
    // })
    $(document).ready(function() {
        var $videoSrc;
        $('.btn-play').click(function() {
            $videoSrc = $(this).data("src");
            console.log("Video source set to:", $videoSrc); // Debugging log
        });

        $('#videoModal').on('shown.bs.modal', function () {
            console.log("Modal is shown!"); // Debugging log
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
            console.log("Video src set to:", $("#video").attr('src')); // Debugging log
        });

        $('#videoModal').on('hide.bs.modal', function () {
            console.log("Modal is hidden!"); // Debugging log
            $("#video").attr('src', "");
            console.log("Video src reset to:", $("#video").attr('src')); // Debugging log
        });
    });


    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Counter Up
    if ($('[data-toggle="counter-up"]').length > 0) {
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // Testimonial Carousel
    if ($(".testimonial-carousel").length > 0) {
        $(".testimonial-carousel").owlCarousel({
            autoplay: false,
            smartSpeed: 1000,
            margin: 25,
            loop: true,
            center: true,
            dots: false,
            nav: true,
            navText: [
                '<i class="bi bi-chevron-left"></i>',
                '<i class="bi bi-chevron-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

})(jQuery);
