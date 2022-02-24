

(function ($) {
    /// Home Banner Slider slider ///
    $(".h-banner-slider").slick({
        dots: false,
        slidesToShow: 1,
        infinite: true,
        centerMode: true,
        centerPadding: "50px",
        arrows: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 475,
                settings: {
                    centerPadding: "20px",
                },
            },

            {
                breakpoint: 375,
                settings: {
                    centerMode: false,
                    centerPadding: "0",
                },
            },
        ],
    });

    /// Product Slider ///
    $(".product-slider").slick({
        dots: false,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "50px",
        arrows: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 3, centerPadding: "25px",
                },
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 2, centerPadding: "25px",
                },
            },
        ],
    });

    /// Product Slider ///
    $(".everyday-slider").slick({
        dots: false,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "50px",
        arrows: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 3, centerPadding: "25px",
                },
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 2, centerPadding: "25px",
                },
            },
        ],
    });

    /// Product Slider ///
    $(".low-price-slider").slick({
        dots: false,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "50px",
        arrows: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 3, centerPadding: "25px",
                },
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 2, centerPadding: "25px",
                },
            },
        ],
    });

    /// Product Page Banner Slider ///
    $('.product-banner').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    /// Product Slider ///
    $(".product-recent-slider").slick({
        dots: false,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "50px",
        arrows: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 3, centerPadding: "25px",
                },
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 2, centerPadding: "25px",
                },
            },
        ],
    });

    /// Onboarding Slider ///
    $('.onboarding-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
})(jQuery);