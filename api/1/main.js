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

let compare = array => {
    let text = input.value;

    if (text) {
        let result = [];

        array.map(value => {
            if(!value.search(text)) result.push(value);
        });

        return result;

    } else return array;
};

let buildList = array => {

    let source = document.getElementById('list-tpl').innerText,
        template = Handlebars.compile(source);

    result.innerHTML = template({list: array});

};

loading(url).then(
    (response) => {

        let sortingResponse = sorting(response);

        buildList(sortingResponse);

        input.addEventListener('input',() => {

            buildList(compare(sortingResponse));

        });

    },
    () => {
        console.log('ошибка');
    }
);