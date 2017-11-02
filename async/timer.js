'use strict';

let timer = (time) => {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve, time);
    });
};


//timer(3000).then(() => console.log('я вывелась через 3 секунды'));


module.exports = timer;