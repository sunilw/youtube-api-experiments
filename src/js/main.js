$ = jQuery.noConflict() ;

jQuery(document).ready(function() {

    console.log("starting script...");

    var mySwiper = new Swiper ('.swiper-container', {

        loop: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });


});
