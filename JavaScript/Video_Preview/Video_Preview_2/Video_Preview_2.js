console.log("page loaded...");
function playVideo(video){
    if (video.paused) {
        video.play();
        video.muted = true;
    } else {
        video.play();
        video.muted = true;
    }
    
}
function pauseVideo(video){
    if (video.played) {
        video.pause();
    } else {
        video.pause();
    }
    
}