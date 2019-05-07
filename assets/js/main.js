$(function () {
    sliders()
})

function sliders() {
    if ($('.owl-carousel').length) {
        $('.js-testimonials').owlCarousel({
            items: 3,
            itemsDesktopSmall: [990, 3],
            itemsTablet: [768, 2],
            itemsMobile: [480, 1]
        })

        $('.js-clients').owlCarousel({
            items: 3,
            nav: false,
            loop: true,
            // autoplay: true,
            autoplayTimeout: 2500,
            itemsDesktopSmall: [990, 3],
            itemsTablet: [768, 2],
            itemsMobile: [480, 1]
        })

        $('.js-slider').owlCarousel({
            // autoPlay: true,
            loop: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            items: 1,
            itemsDesktopSmall: [990, 3],
            itemsTablet: [768, 2],
            itemsMobile: [480, 1]
        })
    }
}
