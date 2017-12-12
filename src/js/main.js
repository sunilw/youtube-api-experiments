$ = jQuery.noConflict() ;

jQuery(document).ready(function() {

    /*
     * Create slider
     */
        var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    /*
     * If we get the youtube script, then onYouTubeIframeAPIReady will fire,
     * and will create the iframes
     */
    var player_1 ;
    
    function onYouTubeIframeAPIReady() {
	
        player_1 = new YT.Player('player_1', {	    
            videoId: 'M7lc1UVf-VE',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }


    function onPlayerReady(event) {
        console.log("got to onPlayerReady");
        event.target.playVideo();
    }

    var done = false;
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
            setTimeout(stopVideo, 6000);
            done = true;
        }
    }

    function stopVideo() {
        player.stopVideo();
    }

    /*
     * Get youtube API script
     */
    $.getScript( "https://www.youtube.com/iframe_api" )
        .done(function( script, textStatus ) {
            console.log("We successfully got the script from YoutTube");
	    onYouTubeIframeAPIReady() ;
        })
        .fail(function( jqxhr, settings, exception ) {
            console.log("Something went wrong when we tried to get and load the youtube scripts");
        });

});
