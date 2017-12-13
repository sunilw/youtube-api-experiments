// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player_1;
var player_2 ;

function onYouTubeIframeAPIReady() {

    player_1 = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',

        playerVars : {
            'autoplay' : 0 ,
            'controls' : 0,
            'modestbranding' : 1
        },

        events: {
	    'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    player_2 = new YT.Player('player2', {
        height: '390',
        width: '640',
        videoId: 'xYi6rvlpsDU',
	
        playerVars : {
            'autoplay' : 0 ,
            'controls' : 0,
            'modestbranding' : 1
        },
	
        events: {
            'onReady':   function() {
                "Ready player_2" ;
            } ,
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
    // player.stopVideo();
}


jQuery(document).ready(function() {

    /*
     * Get the YouTube js. Do stuff if we can run it.
     */
    $.getScript( "https://www.youtube.com/iframe_api" )
        .done(function( script, textStatus ) {
            console.log("I think this is a success");
        })
        .fail(function( jqxhr, settings, exception ) {
            console.log("Something went wrong when we tried to get and load the youtube scripts");
        });
});
