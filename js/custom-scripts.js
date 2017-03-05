$(document).ready(function () {

    /******************************************************************************************************************
     ******* init scripts
     ******************************************************************************************************************/

    setTimeout(function() {
        $('.slider-wrap').animate({opacity: '1'}, 500);
    }, 500);

    refreshSelect();


    /******************************
     ****** scroll scripts ********
     ******************************/

    $(window).scroll(function () {

        if ($(window).scrollTop() > 0) {
            $('header[role="banner"]').addClass('with-background');
        } else {
            $('header[role="banner"]').removeClass('with-background');
        }

    });




    /******************************************************************************************************************
     ******* clicks scripts
     ******************************************************************************************************************/

    $(document).click(function(event) {

        if (!$(event.target).closest(".select-city").length) {
            $('.select-city').removeClass('active');
        }

        if (!$(event.target).closest(".custom-select").length) {
            $('.custom-select').removeClass('active');
        }

    });

    $('.select-city .current-city').click(function() {
        $(this).parent().toggleClass('active');
    });

    $('.select-city ul li').click(function() {

        var newChoice = $(this).html();
        $(this).html($('.current-city').html());
        $('.current-city').html(newChoice);

        refreshSelect();

        $(this).parents('.select-city').removeClass('active');

    });

    function refreshSelect() {
        $('.current-phone-number').html($('.current-city').find('.phone-number').html());
        $('.current-phone-number').attr('href', $('.current-city').find('.phone-number').attr('href'));
        $('.current-hours').html($('.current-city').find('.hours').html());
    }

    $('.burger').click(function() {

        $(this).parents('nav').toggleClass('active');

    });

    $('.callback').click(function() {

        $('.window-callback').fadeIn();

    });

    $('.to-order').click(function() {

        $('.window-order').fadeIn();

    });

    $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.window form')).length) $('.window').fadeOut();
        if ($target.hasClass('close-marker')) $('.window').fadeOut();
    });

    $('.custom-select .current-value').click(function() {

        if ($(this).parent().hasClass('active')) {
            $('.custom-select').removeClass('active');
        } else {
            $('.custom-select').removeClass('active');
            $(this).parent().addClass('active');
        }

    });

    $('.custom-select ul li').click(function() {

        $(this).parent().siblings('.current-value').find('span').html($(this).html());
        $(this).parents('.custom-select').find('input').attr('value', $(this).html());
        $(this).parents('.custom-select').removeClass('active');

    });

    /******************************************************************************************************************
     ******* sliders scripts
     ******************************************************************************************************************/

    $('.slider-mobile').slick({
        appendArrows: '.slider-mobile-control',
        prevArrow: '.slider-mobile-prev',
        nextArrow: '.slider-mobile-next',
        dots: true
    });

    $('.slider-news').slick({
        slidesToShow: 3,
        appendArrows: '.slider-news-control',
        prevArrow: '.slider-news-prev',
        nextArrow: '.slider-news-next',
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slider-rates').slick({
        appendArrows: '.slider-rates-control',
        prevArrow: '.slider-rates-prev',
        nextArrow: '.slider-rates-next'
    });


});