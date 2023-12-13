let songIdx = 0;

let audioElem = new Audio('./songs/Mast Magan.mp3')

let Play = document.getElementById('playBtn');

let progressBar = document.getElementById('progressBar')

const currentPlayingSong = document.getElementById('playingSong');

const currentPlayingSongCoverImg = document.getElementById('playingCoverImg');

let recent_volume = document.getElementById('volume-change');

const volume_mute = document.querySelector('.mute-btn');

// song data ------------------------------------------------------------------------

let songs = [
    { id: "1", songName: "Akhar (From Lahoriye Soundtrack)", filePath: "./songs/1.mp3", image: "./songs/cover/akhar.png", duration: "3:40" },

    { id: "2", songName: "Darasal", filePath: "./songs/2.mp3", image: "./songs/cover/darasal.png", duration: "4:33" },

    { id: "3", songName: "Isq Risk", filePath: "./songs/3.mp3", image: "./songs/cover/ishq_risk.png", duration: "3:34" },

    { id: "4", songName: "Kaise Hua", filePath: "./songs/4.mp3", image: "./songs/cover/kaise_hua.png", duration: "2:47" },

    { id: "5", songName: "Mast Magan", filePath: "./songs/5.mp3", image: "./songs/cover/mast_magan.png", duration: "3:43" },

    { id: "6", songName: "O Meri Laila", filePath: "./songs/6.mp3", image: "./songs/cover/laila-majnu.jpeg", duration: "4:48" },

    { id: "7", songName: "Obsessed", filePath: "./songs/7.mp3", image: "./songs/cover/obsessed.png", duration: "3:04" },

    { id: "8", songName: "Soniyo", filePath: "./songs/8.mp3", image: "./songs/cover/soniyo.png", duration: "5:28" },

    { id: "9", songName: "Tujhe Kitna Chahne Lage", filePath: "./songs/9.mp3", image: "./songs/cover/tujhe_kitna_chahne_lage.png", duration: "3:38" },

    { id: "10", songName: "Tum Se Hi", filePath: "./songs/10.mp3", image: "./songs/cover/tum_se_hi.png", duration: "4:18" },

    { id: "11", songName: "Tum Hi Ho", filePath: "./songs/11.mp3", image: "./songs/cover/Aashique.jpeg", duration: "4:22" },

    { id: "12", songName: "Hrudayat Vaje Something", filePath: "./songs/12.mp3", image: "./songs/cover/hridyat.jpeg", duration: "4:54" },

    { id: "13", songName: "Kadhi Tu", filePath: "./songs/13.mp3", image: "./songs/cover/kadhi-tu.jpeg", duration: "5:19" },

    { id: "14", songName: "Dil Dosti Duniyadari", filePath: "./songs/14.mp3", image: "./songs/cover/Dil-Dosti-Duniyadaari.jpg", duration: "2:41" },

    { id: "15", songName: "Aise Kyun", filePath: "./songs/15.mp3", image: "./songs/cover/Aise-kyun.jpeg", duration: "4:27" },

    { id: "16", songName: "Ek Din Teri Raahon", filePath: "./songs/16.mp3", image: "./songs/cover/ek-din.jpeg", duration: "4:52" },

    { id: "17", songName: "Apna Bana Le", filePath: "./songs/17.mp3", image: "./songs/cover/apna-banale.jpeg", duration: "3:24" },

    { id: "18", songName: "Hasi - Male Version", filePath: "./songs/18.mp3", image: "./songs/cover/hasi.jpeg", duration: "4:32" },

    { id: "19", songName: "Jeev Rangla", filePath: "./songs/19.mp3", image: "./songs/cover/jeev-rangla.jpeg", duration: "4:14" },

    { id: "20", songName: "Jiya Dhadak Dhadak Jaye", filePath: "./songs/20.mp3", image: "./songs/cover/jiya-dhadak-jaye.jpeg", duration: "5:20" },
];

songCard(songs);

function songCard(songs) {
    const tbody = document.querySelector('#tbody');

    let cards = "";

    for (let data of songs) {

        cards += `<tr class="song-card">
        <td>
        <i id="${data.id}" class="fa-solid fa-play fa-lg mini-play-icon"></i>
        <span id="num-line">${data.id}</span>
        </td>
        <td class="s-flex song-name"><img src="${data.image}"> &nbsp; &nbsp; ${data.songName}</td>
        <td class="song-album-name">${data.songName}</td>
        <td><i class="fa-solid fa-heart liked-song"></i></td>
        <td>${data.duration}</td>
        </tr>`;
    }

    tbody.innerHTML = cards;
}

audioElem.muted = false;

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
    document.getElementById('songDoneTime').innerText = `${progress}%`;
});

progressBar.addEventListener('change', () => {
    audioElem.currentTime = progressBar.value * audioElem.duration / 100;
})

// code for mini play icon button ---------------------------------------------------------

const playSong = () => {
    Array.from(document.getElementsByClassName('mini-play-icon')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
        element.style.color = "#fff"
    });
};

const miniPlay = Array.from(document.getElementsByClassName('mini-play-icon'));

miniPlay.forEach((element) => {
    element.addEventListener('click', (e) => {
        playSong();
        
        let songIdx = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        e.target.style.color = '#1bd760';
        audioElem.src = `./songs/${songIdx}.mp3`;

        currentPlayingSong.innerText = songs[songIdx - 1].songName;
        currentPlayingSongCoverImg.src = songs[songIdx - 1].image;
        document.getElementById('songTime').innerText = songs[songIdx - 1].duration;

        audioElem.currentTime = 0;
        audioElem.play();

        Play.classList.remove('fa-circle-play');
        Play.classList.add('fa-circle-pause');
    })
});

// code for playing next song -------------------------------------------------------

document.getElementById('next').addEventListener('click', () => {
    if (songIdx >= 10) {
        songIdx = 1;
    }
    else {
        songIdx += 1;
    }
    audioElem.src = `./songs/${songIdx}.mp3`;
    
    currentPlayingSong.innerText = songs[songIdx - 1].songName;
    currentPlayingSongCoverImg.src = songs[songIdx - 1].image;
    document.getElementById('songTime').innerText = songs[songIdx - 1].duration;
    
    audioElem.currentTime = 0;
    audioElem.play();
    
    Play.classList.remove('fa-circle-play');
    Play.classList.add('fa-circle-pause');
});

// code for playing previous song -------------------------------------------------------

document.getElementById('previous').addEventListener('click', () => {
    if (songIdx <= 1) {
        songIdx = 1;
    }
    else {
        songIdx -= 1;
    }
    audioElem.src = `./songs/${songIdx}.mp3`;

    currentPlayingSong.innerText = songs[songIdx - 1].songName;
    currentPlayingSongCoverImg.src = songs[songIdx - 1].image;
    document.getElementById('songTime').innerText = songs[songIdx - 1].duration;

    audioElem.currentTime = 0;
    audioElem.play();

    Play.classList.remove('fa-circle-play');
    Play.classList.add('fa-circle-pause');
});

// code for volume slider ---------------------------------------------------------

recent_volume.addEventListener('change', () => {
    audioElem.volume = recent_volume.value / 100;
})

// code for audio mute button-------------------------------------------------

volume_mute.addEventListener('click', () => {
    if(audioElem.muted === false) {
        audioElem.muted = true;
        volume_mute.classList.remove('fa-volume-high');
        volume_mute.classList.add('fa-volume-xmark')
    }
    else {
        audioElem.muted = false;
        volume_mute.classList.remove('fa-volume-xmark');
        volume_mute.classList.add('fa-volume-high')
    }
})