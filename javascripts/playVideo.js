
//toggle play and pause
document.querySelector('#play').addEventListener('click', () => {
    let playVideoContainer = document.querySelector('.play-video-container');
    let imageSrc = document.querySelector('#play');
    console.log(imageSrc);

    if (imageSrc.src.includes("play1")) {
        imageSrc.src = 'img/pause.png';
    } else {
        imageSrc.src = 'img/play1.png';  
    }
})

// Display the content from preview
let playVideo = document.querySelector('.play-video-container');
let img = playVideo.querySelector('#playVideoImage');
let title = playVideo.querySelector('b');

let data = localStorage.getItem('videoToPlay');
data = JSON.parse(data);

console.log(img);
console.log(title);

console.log(data.videoImage);
console.log(data.videoTitle);

img.src = data.videoImage;
title.textContent = data.videoTitle;