var operator = prompt('Enter an operator (+, -, *, /):');

var number1 = Number(prompt('Enter the first number:'));
var number2 = Number(prompt('Enter the second number:'));

let result;

// Perform the calculation based on the operator using a switch statement
switch (operator) {
  case '+':
    result = number1 + number2;
    console.log(result);
    break;
  case '-':
    result = number1 - number2;
    console.log(result);
    break;
  case '*':
    result = number1 * number2;
    console.log(result);
    break;
  case '/':
    result = number1 / number2;
    console.log(result);
    break;
  default:
    console.log('Invalid operator.');
    console.log(result);
    break;
}
