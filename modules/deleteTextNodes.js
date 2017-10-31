'use strict';

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

module.exports = deleteTextNodes;