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

    var player3;
    window.onYouTubeIframeAPIReady = function () {

        player3 = new YT.Player( 'video-placeholder',
                                 {
				     host: 'https://www.youtube.com' ,
                                     width: '600',
                                     height: '400',
                                     videoId: 'SuRiuBhciw',
                                     playerVars: {
                                         color : 'white',
                                     },
                                     events : {
					 
                                     }
                                 }
                               );
    };



       
});
