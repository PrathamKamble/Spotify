
// const navbar = document.querySelector(".navbar");
// const mainContainer = document.querySelector(".main-container");

// mainContainer.addEventListener("scroll", () => {

//     if (mainContainer.scrollTop > 0) {
//         navbar.style.backgroundColor = "#121212"; // Change the color as desired
//     }
//     else {
//         navbar.style.backgroundColor = "transparent";
//     }
// });

let songIdx = 0;
let audioElem = new Audio('./songs/Mast Magan.mp3')
let Play = document.getElementById('playBtn');
let progressBar = document.getElementById('progressBar')
const currentPlayingSong = document.getElementById('playingSong'); 
const currentPlayingSongCoverImg = document.getElementById('playingCoverImg'); 

let songs = [
    { id: "1", songName: "Akhar (From Lahoriye Soundtrack)", filePath: "./songs/Akhar.mp3", image: "./songs/cover/akhar.png" },

    { id: "2", songName: "Darasal", filePath: "./songs/Darasal.mp3", image: "./songs/cover/darasal.png" },

    { id: "3", songName: "Isq Risk", filePath: "./songs/Isq Risk.mp3", image: "./songs/cover/ishq_risk.png" },

    { id: "4", songName: "Kaise Hua", filePath: "./songs/Kaise Hua Song.mp3", image: "./songs/cover/kaise_hua.png" },

    { id: "5", songName: "Mast Magan", filePath: "./songs/Mast Magan.mp3", image: "./songs/cover/mast_magan.png" },

    { id: "6", songName: "O Meri Laila", filePath: "./songs/O Meri Laila.mp3", image: "./songs/cover/darasal.png" },

    { id: "7", songName: "Obsessed", filePath: "./songs/Obsessed.mp3", image: "./songs/cover/obsessed.png" },

    { id: "8", songName: "Soniyo", filePath: "./songs/Soniyo.mp3", image: "./songs/cover/soniyo.png" },

    { id: "9", songName: "Tujhe Kitna Chahne Lage", filePath: "./songs/Tujhe Kitna Chahne Lage.mp3", image: "./songs/cover/tujhe_kitna_chahne_lage.png" },

    { id: "10", songName: "Tum Se Hi", filePath: "./songs/Tum Se Hi.mp3", image: "./songs/cover/tum_se_hi.png" },
];

songCard(songs);

function songCard(songs) {
    const tbody = document.querySelector('#tbody');

    let cards = "";

    for (let data of songs) {

        cards += `<tr class="song-card">
        <td>
        <i id="${data.id}" class="fa-solid fa-play mini-play-icon"></i>
        <span id="num-line">${data.id}</span>
        </td>
        <td class="s-flex"><img src="${data.image}"> &nbsp; &nbsp; ${data.songName}</td>
        <td>${data.songName}</td>
        <td><i class="fa-solid fa-heart"></i></td>
        </tr>`;
    }

    tbody.innerHTML = cards;
}

Play.addEventListener('click', () => {
    if (audioElem.paused || audioElem.currentTime <= 0) {
        audioElem.play();
        Play.classList.remove('fa-circle-play');
        Play.classList.add('fa-circle-pause');
    }
    else {
        audioElem.pause();
        Play.classList.remove('fa-circle-pause');
        Play.classList.add('fa-circle-play');
    }
});

audioElem.addEventListener('timeupdate', () => {
    progress = parseInt((audioElem.currentTime / audioElem.duration) * 100);
    progressBar.value = progress;
});

progressBar.addEventListener('change', () => {
    audioElem.currentTime = progressBar.value * audioElem.duration / 100;
})

const playSong = () => {
    Array.from(document.getElementsByClassName('mini-play-icon')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play'); 
    });
};

const miniPlay = Array.from(document.getElementsByClassName('mini-play-icon'));

miniPlay.forEach((element) => {
    element.addEventListener('click', (e) => {
        playSong();
        let songIdx = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElem.src = `./songs/${songIdx}.mp3`;
        currentPlayingSong.innerText = songs[songIdx - 1].songName;
        currentPlayingSongCoverImg.src = songs[songIdx - 1].image;
        console.log(currentPlayingSongCoverImg);
        audioElem.currentTime = 0;
        audioElem.play();
        Play.classList.remove('fa-circle-play');
        Play.classList.add('fa-circle-pause');
    })
});

document.getElementById('next').addEventListener('click', () => {
    if (songIdx>=10) {
        songIdx = 1;
        console.log(songIdx);
    }
    else {
        songIdx += 1;
        console.log(songIdx);
    }
    audioElem.src = `./songs/${songIdx}.mp3`;
    currentPlayingSong.innerText = songs[songIdx].songName;
    audioElem.currentTime = 0;
    audioElem.play();
    Play.classList.remove('fa-circle-play');
    Play.classList.add('fa-circle-pause');
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIdx<=1) {
        songIdx = 1;
    }
    else {
        songIdx -= 1;
        console.log(songIdx);
    }
    audioElem.src = `./songs/${songIdx}.mp3`;
    currentPlayingSong.innerText = songs[songIdx].songName;
    audioElem.currentTime = 0;
    audioElem.play();
    Play.classList.remove('fa-circle-play');
    Play.classList.add('fa-circle-pause');
});