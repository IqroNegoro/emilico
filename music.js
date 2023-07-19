const audio = new Audio('./music/opening.mp3');
const slider = document.getElementById("slider");
const start = document.getElementById("start");
const end = document.getElementById("end");
const btnPlay = document.getElementById("btnPlay");
const btnRepeat = document.getElementById("btnRepeat");

const handlePlayAudio = () => {
    if (audio.paused) {
        btnPlay.classList.toggle("bx-pause")
        btnPlay.classList.toggle("bx-play")
        audio.play();
        document.getElementById("imageMusic").classList.toggle("animate-[spin_15s_linear_infinite]")
        btnPlay.parentElement.classList.add("active");
    } else {
        btnPlay.classList.toggle("bx-pause")
        btnPlay.classList.toggle("bx-play")
        audio.pause();
        document.getElementById("imageMusic").classList.toggle("animate-[spin_15s_linear_infinite]")
        btnPlay.parentElement.classList.remove("active");
    }
}

const handleTimeUpdate = () => {
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    start.textContent = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    slider.value = Math.floor(audio.currentTime);
}

const handleChangeDuration = () => {
    let currentTimeSlider = slider.value;
    audio.currentTime = Math.floor(currentTimeSlider);
}

const handleMute = () => {
    if (audio.muted) {
        document.getElementById("btnVol").classList.toggle("bx-volume-mute")
        document.getElementById("btnVol").classList.toggle("bx-volume")
        audio.muted = false;
    } else {
        document.getElementById("btnVol").classList.toggle("bx-volume-mute")
        document.getElementById("btnVol").classList.toggle("bx-volume")
        audio.muted = true;
    }
}

const handleRepeat = () => {
    if (audio.loop) {
        audio.loop = false;
        btnRepeat.parentElement.classList.remove("active");
    } else {
        audio.loop = true;
        btnRepeat.parentElement.classList.add("active");
    }
}

audio.addEventListener("ended", () => {
    audio.currentTime = 0;
    slider.value = audio.currentTime;
    btnPlay.classList.toggle("bx-pause");
    btnPlay.classList.toggle("bx-play");
    document.getElementById("imageMusic").classList.remove("animate-[spin_15s_linear_infinite]")
})

audio.addEventListener("loadeddata", () => {
    const minutes = Math.floor(audio.duration / 60);
    const seconds = Math.floor(audio.duration % 60);
    end.textContent = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    slider.max = Math.floor(audio.duration);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    slider.addEventListener("input", handleChangeDuration);
})