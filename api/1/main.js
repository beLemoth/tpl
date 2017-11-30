'use strict';

let url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';

let input = document.querySelector('.search'),
    result = document.querySelector('.result');

let loading = (url) => {
    return new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest();

        xhr.open('GET',url);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            resolve(xhr.response);
        });
        xhr.addEventListener('error', () => {
            reject();
        });

        xhr.send();
    })
};

let sorting = object => {

    let array = [];

    for(let item in object) {
        if(object[item].hasOwnProperty('name')) {
            array.push(object[item].name);
        }
    }

    return array.sort();
};

let compare = (array) => {
    let text = input.value;

    if (text) {
        let variants = document.createElement('ul');

        variants.className = 'variants';

        result.appendChild(variants);

        array.map((value)=>{
            if(!value.search(text)) addElement(value, variants);
        });
    }

};

let addElement = (text,targetElement) => {

    let element = document.createElement('li');

    element.className = 'item';
    element.innerText = text;

    targetElement.appendChild(element);

};

loading(url).then(
    (response) => {

        let sortingResponse = sorting(response);

        input.addEventListener('input',() => {

            let variants = result.querySelector('.variants');

            if(variants) result.removeChild(variants);
            compare(sortingResponse);

        });

    },
    () => {
        console.log('ошибка');
    }
);