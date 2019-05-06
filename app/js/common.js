$(function () {


    //animation


    // Custom JS
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 28,
        responsiveClass: true,
        dots: false,
        nav: true,
        navText: ["<img src='img/home/slider/r-arr.svg'>", "<img src='img/home/slider/lf-arr.svg'>"],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 1,
                nav: true
            },
            768: {
                items: 2,
                nav: true,
            },
            1400: {
                items: 3,
                nav: true,

            },
            1499: {
                items: 4,
                nav: true
            }
        }
    });

    // menu toogle in mobile
    $('.mobile-menu').on('click', function () {
        $('.login-box ul').toggle();
    });


//    user dropdown toggle
    $('.user-drop').on('click', function () {
        $('.user-drop-wrapp').toggle();
    });

    $('.search-box input').on('keyup', function () {
        $('.search-box input').css('border-bottom-left-radius', 0);
        $('.search-box input').css('border-bottom-right-radius', 0);
        $('.search-result-list').show();

        if($(this).val() == '') {
            $('.search-result-list').hide();
            $('.search-box input').css('border-bottom-left-radius', '46px');
            $('.search-box input').css('border-bottom-right-radius', '46px');
        }
    });

    $('.home-search').on('keyup', function () {
        $('section.home-background .search form .form-group input').css({
            'border-bottom-left-radius': 0 ,
            'box-shadow' : '0 0 4px 0 #e7e0e0'
        })
        $('.search-result-list').show();

        if($(this).val() == '') {
            $('.search-result-list').hide();
            $('section.home-background .search form .form-group input').css({
                'border-bottom-left-radius' : '46px',
                'box-shadow' : '0 0 15px 0 #e7e0e0'
            });
        }
    });

    $('.select-list .active').on('click', function () {
        $('.hidden-select').toggle();
        $('.select-list p').on('click', function(e) {
            e.preventDefault();
            var x = $(this).html();
            var activeSelect = $('p.active').html();
            $('p.active').html(x);
            $(this).html(activeSelect);
        })

    });

    var favClass = 'section.search-result .product-wrapp .product-box-rg .product-box-wr .pr-box button.fav';
    var imgSrc = "<img src='img/search_result/down-arrow.png' />";


    $('.preview').on('click', function() {

        $(this).closest('.products').toggleClass('closed');

        if($(this).closest('.products').hasClass('closed')) {

            $(this).closest('.preview').removeClass('blue');
            $(this).closest('.preview').html('<button class="preview">Preview</button>');

        }
        else {

            $(this).closest('.preview').addClass('blue');
            $(this).closest('.preview').html(imgSrc + 'Close');
        }
    })




});
