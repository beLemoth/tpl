let calculator = firstNumber => {
    return {
        'sum': function() {
            let result = firstNumber;
            for(let i=0; i<arguments.length; i++) {
                result += arguments[i];
            }
            return result;
        },
        'dif': function() {
            let result = firstNumber;
            for(let i=0; i<arguments.length; i++) {
                result -= arguments[i];
            }
            return result;
        },
        'div': function() {
            let result = firstNumber;
            try {
                for (let i=0; i < arguments.length; i++) {
                    if (!arguments[i]) throw new Error('can not be divided into zero');
                    result /= arguments[i];
                }
            } catch (e) {
                console.error(e.message);
            }
            return result;
        },
        'mul': function() {
            let result = firstNumber;
            for(let i=0; i<arguments.length; i++) {
                result *= arguments[i];
            }
            return result;
        }
    }
}

/*

let myCalculator = calculator(100),
    calc = calculator(300);

console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70
console.log(myCalculator.div(2, 2)); //вернет 25
console.log(myCalculator.mul(2, 2)); //вернет 400

console.log(calc.sum(1, 2, 3)); // вернет 306

*/

module.exports = calculator;