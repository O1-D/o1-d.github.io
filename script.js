alert('Javascript is working')


let overlay = document.getElementById('btnFirstVideo');
let vid = document.getElementById('firstVideo');
let overlay2 = document.getElementById('btnSecondVideo');
let vid2 = document.getElementById('secondVideo');
let overlay3 = document.getElementById('btnThirdVideo');
let vid3 = document.getElementById('thirdVideo');


overlay.addEventListener('click', function () {
    if (firstVideo.paused) {  // если видео остановлено, запускаем
        firstVideo.play();
         overlay.className = "o";
    } else if (firstVideo.play){
        firstVideo.pause();
    }
}, false);
firstVideo.addEventListener('play', function () {
}, false);
firstVideo.addEventListener('click', function () {
    if (firstVideo.paused) {  // если видео остановлено, запускаем
        firstVideo.play();
         overlay.className = "o";
    } else if (firstVideo.play){
        firstVideo.pause();
         overlay.className = "a";
    }
}, false);
firstVideo.addEventListener('play', function () {
}, false);
         

overlay2.addEventListener('click', function () {
    if (secondVideo.paused) {  // если видео остановлено, запускаем
        secondVideo.play();
         overlay2.className = "b";
    } else if (firstVideo.play){
        secondVideo.pause();
    }
}, false);
secondVideo.addEventListener('play', function () {
}, false);
secondVideo.addEventListener('click', function () {
    if (secondVideo.paused) {  // если видео остановлено, запускаем
        secondVideo.play();
         overlay2.className = "b";
    } else if (secondVideo.play){
        secondVideo.pause();
         overlay2.className = "a2";
    }
}, false);
secondVideo.addEventListener('play', function () {
}, false);

overlay3.addEventListener('click', function () {
    if (thirdVideo.paused) {  // если видео остановлено, запускаем
        thirdVideo.play();
         overlay3.className = "c";
    } else if (thirdVideo.play){
        thirdVideo.pause();
    }
}, false);
thirdVideo.addEventListener('play', function () {
}, false);
thirdVideo.addEventListener('play', function () {
}, false);
thirdVideo.addEventListener('click', function () {
    if (thirdVideo.paused) {  // если видео остановлено, запускаем
        thirdVideo.play();
         overlay3.className = "b";
    } else if (thirdVideo.play){
        thirdVideo.pause();
         overlay3.className = "a3";
    }
}, false);
thirdVideo.addEventListener('play', function () {
}, false);