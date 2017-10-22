let isSomeTrue = (source,filterFn) => {
    try {
        if (!(source.length)) throw new Error ('empty source');
        var res = false;
        for (let i=0; i<source.length; i++) {
            if (filterFn(source[i])) {
                res = true;
                break;
            }
        }
        return res;
    }
    catch(e){
        console.error(e.message);
    }
}
/*

let allNumbers = [1, 2, 4, 5, 6, 7, 8],
    someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
    noNumbers = ['это', 'массив', 'без', 'чисел'];
function isNumber(val) {
    return typeof val === 'number';
}

console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
console.log(isSomeTrue(noNumbers, isNumber)); //вернет false
console.log(isSomeTrue([],isNumber));

*/

module.exports = isSomeTrue;