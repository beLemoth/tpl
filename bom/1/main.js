'use strict';

let table = document.querySelector('#result'),
    addButton = document.querySelector('#add');

let addCookies = () => {

    let date = new Date();
    date.setTime(date.getTime()+102000);

    document.cookie = 'name=nameValue; expires='+ date.toGMTString();
    document.cookie = 'prop=propValue; expires='+ date.toGMTString();
    document.cookie = 'user=userValue; expires='+ date.toGMTString();

    console.log('test');
};

let addElement = cookieItem => {
    let item = cookieItem.split('=');

    let row = document.createElement('tr'),
        colName = document.createElement('td'),
        colValue = document.createElement('td'),
        colButton = document.createElement('td'),
        button = document.createElement('button');

    colName.innerText = item[0];
    colValue.innerText = item[1];
    button.innerText = 'Удалить';
    colButton.appendChild(button);

    table.appendChild(row);
    row.appendChild(colName);
    row.appendChild(colValue);
    row.appendChild(colButton);

};

let delCookie = cookieName => {

    let date = new Date();
    date.setTime(date.getTime()-1);
    document.cookie = cookieName += '=; expires=' + date.toGMTString();

};

let cookiesArray = document.cookie.split('; ');

cookiesArray.forEach(addElement);

addButton.addEventListener('click', e => {
    addCookies();
});

table.addEventListener('click',(e) => {

    let name = e.target.parentNode.parentNode.firstChild;

    let answer = confirm(`Удалить cookie с именем ${name.innerText} ?`);

    if(answer) {
        delCookie(name);
        console.log(document.cookie);
    }
});


