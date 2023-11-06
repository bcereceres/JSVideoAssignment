var video = document.querySelector("#player1.video");
// Given function to test if the page loads
window.addEventListener("load", function() {
	console.log("Good job opening the window")
  video.autoplay = false;
  video.loop = false;
	video.load();
});

// Play the video function
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play video")
	video.play();
  console.log("Current volume is" + ' ' + document.getElementById("slider").value + "%")
  this.value = document.getElementById("slider").value 
  document.getElementById("volume").innerHTML = this.value + "%";
  video.volume = document.getElementById("slider").value / 1000;
});

// Pause the video function
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause video")
	video.pause();
});

// Make the video slower function
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video")
	video.playbackRate -= 0.1;
	console.log("Slowed down video to:" + ' ' + video.playbackRate.toFixed(2))
});

// Make the video faster function
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video")
	video.playbackRate += 0.1;
    console.log("Sped up video to:" + ' ' + video.playbackRate.toFixed(2));
});

// Skip ahead in video function
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

// Slider Functions starts here
var slider = document.getElementById("slider");
var output = document.getElementById("volume");
slider.oninput = function() {
  output.innerHTML = this.value + "%";
  video.volume = slider.value / 1000;
  console.log("Video volume is" + ' ' + slider.value / 100)
}
// Slider Function ends here

// Make video old school function
document.querySelector("#vintage").addEventListener("click", function(){
  video.classList.add("oldSchool")
});

// Make video back to original function
document.querySelector("#orig").addEventListener("click", function(){
  video.classList.remove("oldSchool")
});