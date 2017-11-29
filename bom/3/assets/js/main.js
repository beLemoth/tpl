'use strict';

let addButton = document.getElementById('addBlock'),
    saveButton = document.getElementById('saveBlocks'),
    clearButton = document.getElementById('clear'),
    target = document.getElementById('target');

let droping,
    offsetY,
    offsetX;

let randomColor = () => {

    let chars = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }

    return color;
};

let randomValue = (min,max) => {
    return Math.random() * (max - min) + min;
};

let initBlock = blockParams => {

    let params = blockParams.split('&'),
        block = document.createElement('div');

    block.style.top = params[0];
    block.style.left = params[1];
    block.style.width = params[2];
    block.style.height = params[3];
    block.style.backgroundColor = params[4];

    block.style.border = 'solid 1px #000000';
    block.classList.add('newBlock');

    target.appendChild(block);
};

let insertBlock = () => {

    let height = randomValue(0,600),
        width = randomValue(0,1000),
        top = randomValue(0,window.innerHeight - height),
        left = randomValue(0,window.innerWidth - width),
        color = '' + randomColor(),
        params = `${top}px&${left}px&${width}px&${height}px&${color}`;

    initBlock(params);
};


let saveDivs = () => {
    let divs = document.getElementsByClassName('newBlock');

    [].forEach.call(divs, (elem,idx) => {
        let date = new Date();
        date.setTime(date.getTime()+10000000000);
        document.cookie = `block${idx+1}=${elem.style.top}&${elem.style.left}&${elem.style.width}&${elem.style.height}&${elem.style.backgroundColor}; expires=${date.toUTCString()}`;
    });
};

let loadBlocks = () => {
    let cookies = document.cookie.split('; ');

    cookies.forEach(cookieString => {
        let cookieArray = cookieString.split('=');

        initBlock(cookieArray[1]);
    });
};

let clearCookies = () => {
    let cookies = document.cookie.split('; ');

    cookies.forEach(cookieString => {
        let cookieArray = cookieString.split('=');

        let date = new Date();
        date.setTime(date.getTime()-1);

        document.cookie = `${cookieArray[0]}=0; expires=${date.toUTCString()}`;
    });
};

// EVENTS

addButton.addEventListener('click',insertBlock);
saveButton.addEventListener('click',saveDivs);
clearButton.addEventListener('click',clearCookies);

target.addEventListener('mousedown',(e) => {
    droping = true;

    offsetY = e.offsetY;
    offsetX = e.offsetX;
});

target.addEventListener('mouseup',() => {           // reset droping
    droping = false;
});

target.addEventListener('mousemove',(e) => {

    if(droping && e.target.className === 'newBlock') {

        e.target.style.top = e.clientY - offsetY + 'px';
        e.target.style.left = e.clientX - offsetX + 'px';
    }
});

// ON PAGE LOAD

if(document.cookie) loadBlocks();       // if there is a saved blocks


