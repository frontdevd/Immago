$(function() {

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
            600:{
                items:3,
                nav:false
            },
            1000:{
                items: 4,
                nav:true,
                loop:false
            }
        }
    })

});
