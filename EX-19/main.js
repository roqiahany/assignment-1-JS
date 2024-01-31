const number = prompt('Enter a number:');

switch (true) {
  case number > 0:
    result = 'Positive';
    break;

  default:
    result = 'Negative';
    break;
}

console.log(number + ' is ' + result);
