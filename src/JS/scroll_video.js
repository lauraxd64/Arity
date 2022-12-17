//  Intro Section
const intro = document.querySelector(".content");
const video = intro.querySelector("video");

// After Intro Section
// const section = document.querySelector("section");
// const end = section.querySelector("h1");
// Scroll Magic
const controller = new ScrollMagic.Controller();

// Scenes
// Video Animation
let videoScene = new ScrollMagic.Scene({
	duration: 82000,
	triggerElement: intro,
	triggerHook: 0,
})	
	.setPin(intro)
	.addTo(controller);

// Video Animation
let accelerationRate = 0.1;
let scrollPosition = 0;
let delay = 0;
// Getting the scroll position from the event and convert it into seconds
videoScene.on("update", (e) => {
	scrollPosition = e.scrollPos / 1000;
});


// Delay catches upto the scrollPosition at accelerationRate
setInterval(() => {
	delay += (scrollPosition - delay) * accelerationRate;
	video.currentTime = delay;
}, 30);
// 33.3 will be the interval of each frame
// Video is in 30fps, so 1 sec = 30 frames => 1000 milliseconds = 30 frames
// That implies 33.3 milliseconds would be great for each frame