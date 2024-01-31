var base = prompt('enter the base');
var power = prompt('enter the power');

let result = 1;

for (var i = 1; i <= power; i++) {
  result *= base;
}
console.log(result);
