var number1 = prompt('Enter the first number:');

var number2 = prompt('Enter the second number:');

switch (true) {
  case number1 > number2:
    max = number1;
    break;

  default:
    max = number2;
    break;
}

console.log('The max between ' + number1 + ' and ' + number2 + ' is: ' + max);
