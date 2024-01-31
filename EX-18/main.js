var number = prompt('Enter a number:');

switch (true) {
  case number % 2 == 0:
    result = 'Even';
    break;

  default:
    result = 'Odd';
    break;
}

console.log(number + ' is ' + result);
