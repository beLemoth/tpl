
let forEach = (array,handlerFn,thisArg) => {

    for(let i=0; i<array.length; i++) {
        handlerFn(array[i],i,array);
    }
};

let filter = (array,handlerFn) => {
    let outputArray = [],
        outputIdx = 0;
    for(let i=0; i<array.length; i++) {
        let result = handlerFn(array[i],i,array);
        if (result) outputArray[outputIdx++] = array[i];
    }
    return outputArray;
};

let map = (array,handlerFn) => {
    let outputArray = [],
        outputIdx = 0;
    for(let i=0; i<array.length; i++) {
        outputArray[outputIdx++] = handlerFn(array[i],i,array);
    }
    return outputArray;
};

let slice = (array,start,end) => {
    start = (start<0) ? array.length+start : start || 0;
    end = (end<0) ? array.length+end : end || array.length;

    let outputArray = [],
        outputIdx = 0;

    for(let i=start; i<end; i++) {
        outputArray[outputIdx++] = array[i];
    }
    return outputArray;
};

let reduce = function (array,handlerFn,previousValue) {
    previousValue = previousValue || (previousValue===0) ? previousValue : array[0];

    let startIdx = (arguments.length>2)?0:1;

    for (let i=startIdx; i<array.length; i++) {
        console.log(previousValue);
        previousValue = handlerFn(previousValue,array[i],i,array);

    }

    return previousValue;
};

let splice = function(array,start,deleteCount) {
    let deletedItems = [],
        deletedIdx = 0,
        tplArray = [],
        tplIdx = 0;

    start = start || 0;
    if(start) {
        start = (start > array.length) ? array.length : start;
        start = (start < 0) ? array.length + 1 : start;
    }

    deleteCount = deleteCount || 0;
    try {
        if(deleteCount < 0) throw new Error('wrong numbers of files to remove');
    } catch(e) {
        console.error(e.message);
    }

    let end = start + deleteCount;

    if(end) {
        end = (end > array.length) ? array.length : end;
    }

    for(let i = 0; i < start; i++)
        tplArray[tplIdx++] = array[i];

    if(arguments.length > 3){
        for(let i = 3; i < arguments.length; i++)
            tplArray[tplIdx++] = arguments[i];
    }

    for(let i = end; i < array.length; i++)
        tplArray[tplIdx++] = array[i];

    for(let i = start; i < end; i++)
        deletedItems[deletedIdx++] = array[i];

    array.length = 0;
    for(let i = 0; i < tplArray.length; i++) {
        array[i] = tplArray[i];
    }

    return deletedItems;
};


//let array = [1, 2, 3, 4, 5, 6];
/*
forEach(array, item => console.log(item));

let greaterThan4 = filter(array, item => item > 4);
console.log(greaterThan4);

let square = map(array, item => item*item);
console.log(square);

console.log(slice(array,0,-1));

console.log(reduce(array,(previousValue, currentValue, index, array)=>previousValue + currentValue,3));



//console.log(splice(array,2,3));
let tplArray = array.splice(2,3);
console.log(array,tplArray);

let tplArray = splice(array,2,3);
console.log(array,tplArray);

*/

module.exports = {
    forEach : forEach,
    filter : filter,
    map : map,
    slice : slice,
    reduce : reduce,
    splice : splice
};

