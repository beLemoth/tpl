'use strict';

let prepend = function (container, newElement) {
    container.insertBefore(newElement,this.firstElementChild);
};

module.exports = prepend;
