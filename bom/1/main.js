'use strict';

let table = document.querySelector('#result');

let date = new Date();
date.setTime(date.getTime()+123456789);
document.cookie = 'cook3=cookie3;expires='+date.toUTCString();

let addElement = (cookieItem) => {

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

    table.querySelector('tbody').appendChild(row);
    row.appendChild(colName);
    row.appendChild(colValue);
    row.appendChild(colButton);
};

let delCookie = cookieName => {
    let date = new Date();
    date.setTime(date.getTime()-1);
    document.cookie = cookieName += '=; expires=' + date.toUTCString();

    clearTable();
    buildTable();
};

let clearTable = () => {

    let tbody = table.querySelector('tbody');

    table.removeChild(tbody);

};

let buildTable = () => {

    let tbody = table.querySelector('tbody');
    if (!tbody) {
        tbody = document.createElement('tbody');
        table.appendChild(tbody);
    }

    if(document.cookie) {
        let cookiesArray = document.cookie.split('; ');
        cookiesArray.forEach(addElement);
    } else {
        let text = document.createElement('span');
        text.innerText = 'пустой cookie';

        tbody.appendChild(text);
    }
};

buildTable();

table.addEventListener('click',(e) => {

    if(e.target.tagName==='BUTTON') {
        let name = e.target.parentNode.parentNode.firstChild.innerText;
        let answer = confirm(`Удалить cookie с именем ${name} ?`);

        if(answer) {
            delCookie(name);
        }
    }

});


