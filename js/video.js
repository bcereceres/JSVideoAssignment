var video = document.querySelector("#player1.video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.load();
});
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play video")
	video.play();
});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause video")
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video")
	video.playbackRate -= 0.1;
	console.log("Slowed down video to:" + ' ' + video.playbackRate.toFixed(2))
});
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video")
	video.playbackRate += 0.1;
    console.log("Sped up video to:" + ' ' + video.playbackRate.toFixed(2));
});
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead in video")
	newTime = video.currentTime + 10;
    if (newTime > video.duration) {
      video.currentTime = 0;
    } else {
      video.currentTime = newTime;
    }
    console.log("Skipped ahead to:" + ' ' + video.currentTime.toFixed(2) + ' ' + "seconds");
});
// Mute Function Starts here
    muteButton = document.querySelector("#mute");
    let isMuted = false;
    updateButtonText();
	muteButton.addEventListener("click", toggleMute);
    function toggleMute() {
    isMuted = !isMuted;
    video.muted = isMuted;
    updateButtonText();
    console.log(isMuted ? "Muted" : "Unmuted");
    }
    function updateButtonText() {
    muteButton.innerHTML = isMuted ? "Unmute" : "Mute";
    }
// Mute Functions ends here