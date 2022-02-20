'use stict';

// Next function checks browser support WEBP format ********************************************************************************************************
function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src =
        'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
        console.log('use webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
        console.log('not use webp');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    let offset = 0;
    const sliderLine = document.querySelector('.slider-line');

    // let timer = setInterval(() => {
    //   offset = offset + 256;
    //   if (offset > 768) {
    //     offset = 0;
    //   }
    //   sliderLine.style.left = -offset + 'px';
    // }, 5000);

    let imagesDB = [
        './images/elephant.png',
        './images/gorilla.png',
        './images/home.png',
        './images/ice_cream.png',
    ];

    let timer = setInterval(() => {
        offset = offset + 256;
        if (offset > 768) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    }, 5000);

    document
        .querySelector('.slider-next')
        .addEventListener('click', function () {
            offset = offset + 256;
            if (offset > 768) {
                offset = 0;
            }
            sliderLine.style.left = -offset + 'px';
        });

    document
        .querySelector('.slider-prev')
        .addEventListener('click', function () {
            offset = offset - 256;
            if (offset < 0) {
                offset = 768;
            }
            sliderLine.style.left = -offset + 'px';
        });
});
