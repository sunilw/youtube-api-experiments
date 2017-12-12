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
     *   Function for creating players, so we don't have to repeat code.
     *
     */

    function myappCreatePlayer( id, placeholder ) {
	console.log("About to create video");
	new YT.Player( placeholder, {
	    videoId : id,
	    events : {
		'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
	    }
	});	
    }
    
    /*
     * If we get the youtube script, then onYouTubeIframeAPIReady will fire,
     * and will create the iframes
     */

    
    function onYouTubeIframeAPIReady() {
	
        player_1 = new YT.Player('id-of-element-goes-here', {	    
            videoId: 'M7lc1UVf-VE',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });

	myappCreatePlayer( 'RryNwynmG6k', 'player_1' ) ;
	myappCreatePlayer( 'RY-CNTLXmMI', 'player_2' ) ;
	myappCreatePlayer('B-_KvoMR4sU', 'player_3') ;
	myappCreatePlayer('ha9OFDUunMU', 'player_4') ;
	myappCreatePlayer('4dKlbY2IC-c', 'player_5') ;

	
    } // ends onYouTubeIframeAPIReady


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
