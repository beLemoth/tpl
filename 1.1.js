function consoleRec(array,elementNumber) {
	elementNumber = elementNumber || 0;
	console.log(array[elementNumber]);
	if(elementNumber<array.length-1) {
		consoleRec(array,++elementNumber);
	}
}

let arr = ['я', 'умею', 'писать', 'рекурсивные', 'функции'];

consoleRec(arr);

module.exports consoleRec;
	