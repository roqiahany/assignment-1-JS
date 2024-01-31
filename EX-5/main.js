var num1 = prompt('Entger a first number');
var num2 = prompt('Entger a second number');
var num3 = prompt('Entger a third number');

if (num1 > num2 && num1 > num3) {
  console.log('max element = ' + num1);
} else if (num2 > num1 && num2 > num3) {
  console.log('max element = ' + num2);
} else {
  console.log('max element = ' + num3);
}
if (num1 < num2 && num1 < num3) {
  console.log('min element = ' + num1);
} else if (num2 < num1 && num2 < num3) {
  console.log('min element = ' + num2);
} else {
  console.log('min element = ' + num3);
}
