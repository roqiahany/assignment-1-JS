const monthNumber = prompt('Enter the month number:');

if (monthNumber === 2) {
  // February
  daysInMonth = 28;
} else if (
  monthNumber === 4 ||
  monthNumber === 6 ||
  monthNumber === 9 ||
  monthNumber === 11
) {
  // April, June, September, November
  daysInMonth = 30;
} else {
  // january ,march ,may,july ,august,octabar , december
  daysInMonth = 31;
}

console.log('Days in Month: ' + daysInMonth);
