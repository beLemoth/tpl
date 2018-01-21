'use strict';

class Calculator {
  constructor(firstNumber) {
      this.firstNumber = firstNumber;
  }
  sum() {
      let result = this.firstNumber;
      console.log(arguments);
      for(let i=0; i<arguments.length; i++) {
          result += arguments[i];
      }
      console.log(result);
      return result;
  }
  dif() {
      let result = this.firstNumber;
      for(let i=0; i<arguments.length; i++) {
          result -= arguments[i];
      }
      return result;
  }
  div() {
      let result = this.firstNumber;
      try {
          for (let i=0; i < arguments.length; i++) {
              if (!arguments[i]) {
                  result = 'error';
                  throw new Error('can not be divided into zero');
              }
              result /= arguments[i];
          }
      } catch (e) {
          console.error(e.message);
      }
      return result;
  }
  mul() {
      let result = this.firstNumber;
      for(let i=0; i<arguments.length; i++) {
          result *= arguments[i];
      }
      return result;
  }
}

class SqrCalc extends Calculator {
    constructor(firstNumber) {
        super(firstNumber);
    }
}

for (let method in Calculator.prototype) {
    SqrCalc.prototype[method] = function () {
        let tpl = Calculator.prototype[method].apply(this, arguments);
        return tpl*tpl;
    };
}

let myCalculator = new SqrCalc(100);

console.log(myCalculator.mul(2, 2));


/*
console.log(myCalculator.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
console.log(myCalculator.dif(10, 20)); //вернет 4 900
console.log(myCalculator.div(2, 2)); //вернет 625
console.log(myCalculator.mul(2, 2)); //вернет 160 000