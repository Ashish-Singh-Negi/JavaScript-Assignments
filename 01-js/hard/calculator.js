/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  result = 0;

  add(num) {
    this.result += num
  }

  subtract(num) {
    this.result -= num
  }

  mutiply(num) {
    this.result *= num
  }

  divide(num) {
    this.result /= num
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result
  }
  extractNumberAndSigns(expr) {
    const numbers = [];
    const signs = [];

    let currentNum = "";

    for (let i = 0; i < expr.length; i++) {
      const ch = expr[i];

      if ("+-*/".includes(ch)) {
        numbers.push(Number(currentNum));
        signs.push(ch);
        currentNum = "";
      } else {
        currentNum += ch;
      }
    }

    // push last number
    numbers.push(Number(currentNum));

    return { numbers, signs };
  }


  calculate(formula) {
    const expression = formula.split("").filter(s => s != " " && s != "(" && s != ")")


    const { numbers, signs } = this.extractNumberAndSigns(expression)



  }

}

module.exports = Calculator;