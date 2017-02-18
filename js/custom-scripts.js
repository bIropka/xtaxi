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



    /******************************************************************************************************************
     ******* clicks scripts
     ******************************************************************************************************************/

    $(document).click(function(event) {

        if (!$(event.target).closest(".select-city").length) {
            $('.select-city').removeClass('active');
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
        $('.current-hours').html($('.current-city').find('.hours').html());
    }

    /******************************************************************************************************************
     ******* sliders scripts
     ******************************************************************************************************************/

    $('.slider-mobile').slick({
        appendArrows: '.slider-mobile-control',
        prevArrow: '.slider-mobile-prev',
        nextArrow: '.slider-mobile-next',
        dots: true
    });

    $('.slider-news').slick();


});