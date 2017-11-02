'use strict';

let url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';

let loader = (url) => {
    return new Promise((resolve, reject) => {
       let xhr = new XMLHttpRequest();

       xhr.open('GET',url);

       xhr.addEventListener('load',() => {
           resolve(xhr.response);
       });
       xhr.addEventListener('error',() => {
           reject();
       });

       xhr.send();

    });
};

let answerHandler = answer => {
    let tplArray = [];

    let json = JSON.parse(answer);
    for (let item in json) {
        if(json[item].hasOwnProperty('name')) {
            tplArray.push(json[item].name);
        }
    }

    return tplArray.sort();
};

let addElement = array => {
    array.map( (value) => {
        let target = document.querySelector('#target');

        let element = document.createElement('div');
        element.innerText = value;

        target.appendChild(element);
    });
};

loader(url).then(
    (response) => {

        let sortingAnswer = answerHandler(response);

        addElement(sortingAnswer);

    },
    () => {
        console.log('ошибка запроса');
    }
);
