'use strict';

let button = document.getElementById('addBlock'),
    target = document.getElementById('target');

let droping,
    offsetY,
    offsetX;

function randomColor() {

    let chars = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }

    return color;
}

function randomValue(min,max) {
    return Math.random() * (max - min) + min;
}

let insertBlock = (e) => {

    let block = document.createElement('div'),
        height = randomValue(0,600),
        width = randomValue(0,1000);


    block.style.backgroundColor = '' + randomColor();
    block.style.width = width + 'px';
    block.style.height = height + 'px';
    block.style.top = randomValue(0,window.innerHeight - height) + 'px';
    block.style.left = randomValue(0,window.innerWidth - width) + 'px';
    block.style.border = 'solid 1px #000000';
    block.classList.add('newBlock');

    target.appendChild(block);
};

button.addEventListener('click',insertBlock);

target.addEventListener('mousedown',(e) => {
    droping = true;

    console.dir(e);

    offsetY = e.offsetY;
    offsetX = e.offsetX;
});

target.addEventListener('mouseup',() => {
    droping = false;
});

target.addEventListener('mousemove',(e) => {

    if(droping && e.target.className === 'newBlock') {

        e.target.style.top = e.clientY - offsetY + 'px';
        e.target.style.left = e.clientX - offsetX + 'px';
    }

});




