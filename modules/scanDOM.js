'use strict';

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

module.exports = scanDOM;