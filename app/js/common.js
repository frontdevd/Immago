

$(function() {


    //animation



	// Custom JS
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:28,
        responsiveClass:true,
        dots:false,
        nav: true,
        navText: ["<img src='img/home/slider/r-arr.svg'>","<img src='img/home/slider/lf-arr.svg'>"],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            480:{
                items:1,
                nav:true
            },
            768:{
                items:2,
                nav: true,
            },
            1400:{
                items: 3,
                nav:true,

            },
            1499:{
                items: 4,
                nav: true
            }
        }
    });

    // menu toogle in mobile
    $('.mobile-menu').on('click', function() {
        $('.login-box ul').toggle();
    })


});
