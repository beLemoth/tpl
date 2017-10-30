'use strict';

/*
let prepend = function (container, newElement) {
    container.insertBefore(newElement,container.firstElementChild);
};

let target = document.getElementById('target');

let newElement = document.createElement('div');
newElement.innerText = 'new';

prepend(target,newElement);
*/

/*

let deleteTextNodes = (element) => {

    let childNodes = element.childNodes;

    let toDel = [];

    for(let i=0; i<childNodes.length; i++) {

        if(childNodes[i].nodeType === 1) {

            let nodes = childNodes[i].childNodes;

            if(nodes.length > 1 || nodes[0].nodeType === 1) deleteTextNodes(childNodes[i]);

        } else if(childNodes[i].nodeType === 3) toDel.push(childNodes[i]);

    }

    toDel.forEach(value => element.removeChild(value));
};

let target = document.getElementById('target');

deleteTextNodes(target);

*/
/*

let scanDOM = () => {
    let tags = {},
        classes = {},
        textNodesCntr = 0,
        body = document.querySelector('body');


    let analys = (element) => {

        let tagName = element.tagName,
            className = element.classList;

        if(tags.hasOwnProperty(tagName)) tags[tagName]++;
        else tags[tagName] = 1;

        if(className) {
            for(let i=0; i<className.length; i++) {
                if(classes.hasOwnProperty(className[i])) classes[className[i]]++;
                else classes[className[i]] = 1;
            }
        }

    };

    let scaner = (element) => {

        let documentNodes = element.childNodes;

        for(let i=0; i<documentNodes.length; i++) {

            if (documentNodes[i].nodeType === 3) textNodesCntr++;
            else {
                if (documentNodes[i].nodeType === 1) {
                    analys(documentNodes[i]);
                    scaner(documentNodes[i]);

                }
            }
        }
    };

    let print = () => {

        for(let value in tags) {
            console.log(`Тэгов ${value.toLowerCase()}: ${tags[value]}`);
        }

        console.log('Текстовых узлов: ' + textNodesCntr);

        for(let value in classes) {
            console.log(`Элементов с классом ${value.toLowerCase()}: ${classes[value]}`);
        }

    };

    scaner(body);
    print();

};

scanDOM();
*/

let accordeon = document.querySelector('#accordeon');

let toogleList = (e) => {
    if(e.target.className === 'title__text' || e.target.className === 'title__icon') {

        let list = e.target.parentNode.parentNode;

        list.classList.toggle('active');
    }

    if(e.target.className === 'title') {

        let list = e.target.parentNode;

        list.classList.toggle('active');
    }

};

accordeon.addEventListener('click',toogleList);



