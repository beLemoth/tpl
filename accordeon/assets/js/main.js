'use strict';

let accordeon = document.querySelector('#accordeon');

let lists = document.querySelectorAll('.list');

let toogleList = (e) => {

    if(e.target.className === 'title') {

        let list = e.target.parentNode;
        list.classList.toggle('active');
    }
};

accordeon.addEventListener('click',toogleList);



