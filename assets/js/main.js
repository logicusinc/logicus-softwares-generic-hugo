$(function () {
    activateCarousels();
    activateAlternateImage();
    handleSmoothNavigationById();
    changeNavBehavior();
})


$(window).scroll(function () {
    changeNavBehavior();
})

function handleSmoothNavigationById() {
    // handle links with @href started with '#' only
    $(document).on('click', 'a[href*="#"]', function(e) {
        // target element id
        var id = $(this).attr('href');

        // Split string if string contains URL
        if (id.charAt(0) !== '#') {
            id = '#'.concat(id.split('#', 2)[1])
        }

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        var pos = $id.offset().top;

        // animated top scrolling
        $('body, html').animate({scrollTop: pos});
    });
}


function activateCarousels() {
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
            autoplay: true,
            autoplayTimeout: 2500,
            itemsDesktopSmall: [990, 3],
            itemsTablet: [768, 2],
            itemsMobile: [480, 1]
        })

        $('.js-hero').owlCarousel({
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

function changeNavBehavior() {
    navbar = $('.js-top-navbar')[0]
    offsetHeight = navbar.offsetHeight;
    offsetTop = navbar.offsetTop;

    // Make the nav sticky when scrolling
    if (window.pageYOffset > offsetTop) {
        navbar.classList.add("c-navbar--sticky");
    } else {
        navbar.classList.remove("c-navbar--sticky");
    }

    // Make nav smaller after having scrolled more than the initial size of the
    // nav. This makes it prettier in my opinion.
    if (window.pageYOffset > offsetHeight) {
        navbar.classList.add("c-navbar--small");
        navbar.classList.remove("c-navbar--default");
    } else {
        navbar.classList.add("c-navbar--default");
        navbar.classList.remove("c-navbar--small");
    }
}

function activateAlternateImage() {
    $('.js-clients').on('click', '.js-image-hover', function (event) {
        sourceImage = $(this).attr('data-source-image')
        alternateImage = $(this).attr('data-alternate-image')

        if (sourceImage !== $(this).attr('src')) {
            $(this).attr('src', sourceImage)
        } else {
            $(this).attr('src', alternateImage)
        }
    });
}
