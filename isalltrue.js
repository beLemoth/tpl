let isAllTrue = (source,filterFn) => {
	try {
		if (!(source.length)) throw new Error ('empty source');
		let res = true;
		for (let i=0; i<source.length; i++) {
			if (!filterFn(source[i])) {
				res = false;
				break;
			}
		}
		return res;
	}
	catch(e){
		console.error(e.message);
	}
}


let allNumbers = [1, 2, 4, 5, 6, 7, 8],
    someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
    noNumbers = ['это', 'массив', 'без', 'чисел'];
function isNumber(val) {
    return typeof val === 'number';
}

console.log(isAllTrue(allNumbers,isNumber));
console.log(isAllTrue(someNumbers,isNumber));
console.log(isAllTrue(noNumbers,isNumber));
//console.log(isAllTrue([],isNumber));

module.exports = isAllTrue;