
const navbar = document.querySelector(".navbar");
const mainContainer = document.querySelector(".main-container");

mainContainer.addEventListener("scroll", () => {

    if (mainContainer.scrollTop > 0) {
        navbar.style.backgroundColor = "#121212"; // Change the color as desired
    }
    else {
        navbar.style.backgroundColor = "transparent";
    }
});

let songIdx = 0;
let audioElem = new Audio('./1.mp3')
let Play = document.getElementById('playBtn');
let progressBar = document.getElementById('progressBar')

let songs = [{
    songName: "Akhar", filePath: "songs/1.mp3",
    songName: "Akhar", filePath: "songs/1.mp3",
    songName: "Akhar", filePath: "songs/1.mp3",
}];

Play.addEventListener('click', () => {
    if(audioElem.paused || audioElem.currentTime<=0){
        audioElem.play();
        Play.classList.remove('fa-circle-play');
        Play.classList.add('fa-circle-pause');
    }
    else{
        audioElem.pause();
        Play.classList.remove('fa-circle-pause');
        Play.classList.add('fa-circle-play');
    }
});

audioElem.addEventListener('timeupdate', () => {
    progress = parseInt((audioElem.currentTime/audioElem.duration) * 100);
    progressBar.value = progress;
});

progressBar.addEventListener('change', () => {
    audioElem.currentTime = progressBar.value * audioElem.duration/100;
})
