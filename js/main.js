var timedNotes = [];
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'TpKR3KXpg_E',
        events: {
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError,
            'onReady': getPlayerTime
        }
    });
};

function getPlayerTime() {
    var t = cleanTime();
    //console.log(notes(t));
    $('#x').html(notes(t));
    setTimeout(getPlayerTime, 1000);
};

function notes(t) {
    if (t < 56) {
        return "Am";
    } else if (t < 57) {
        return "G";
    } else if (t < 59) {
        return "C";
    } else if (t < 61) {
        return "D";
    } else if (t < 63) {
        return "F";
    } else if (t < 66) {
        return "G/Am";
    } else {
        return "Am";
    }
};


function onPlayerStateChange(event) {
    // switch (event.data) {
    //     case YT.PlayerState.PLAYING:
    //         if (cleanTime() == 0) {
    //             console.log('started ' + cleanTime());
    //         } else {
    //             console.log('playing ' + cleanTime())
    //         };
    //         break;
    //     case YT.PlayerState.PAUSED:
    //         if (player.getDuration() - player.getCurrentTime() != 0) {
    //             console.log('paused' + ' @ ' + cleanTime());
    //         break;
    //     case YT.PlayerState.ENDED:
    //         console.log('ended ');
    //         break;
    // };
};
//utility
function cleanTime() {
    return Math.round(player.getCurrentTime())
};

var setHandlers = function() {
    $("#addNote").on('click', function(event) {
        event.stopPropagation();
        var note = $('#note').val();
        // $('#x').html(note);
        //console.log(note, cleanTime());
        timedNotes.push([cleanTime(), note]);
        console.log(timedNotes);
    });
};
setHandlers();

function onPlayerError(event) {
    // console.log("error");
    // switch(event.data) {
    //     case 2:
    //         console.log('' + video.id)
    //         ga('send', 'event', 'video', 'invalid id',video);
    //         break;
    //     case 100:
    //         ga('send', 'event', 'video', 'not found',video);
    //         break;
    //     case 101 || 150:
    //         ga('send', 'event', 'video', 'not allowed',video);
    //         break;
    //     };
};

// function onPlayerReady(event) {
//     event.target.playVideo();
//     console.log("player ready");
// }


// function onPlayerStateChange(event) {
//     console.log(player.getPlayerState());
//     if (event.data == YT.PlayerState.PLAYING) {
//         console.log("Video started playing");
//     }
// }



// var done = false;

// function onPlayerStateChange(event) {
//     if (event.data == YT.PlayerState.PLAYING && !done) {
//         setTimeout(stopVideo, 6000);
//         done = true;
//     }
// }

// function stopVideo() {
//     player.stopVideo();
// }