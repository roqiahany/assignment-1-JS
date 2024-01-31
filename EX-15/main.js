var monthNumber = prompt('Enter the month number:');

switch (monthNumber) {
  case 2: // February
    daysInMonth = 28;
    break;
  case 4: // April
  case 6: // June
  case 9: // September
  case 11: // November
    daysInMonth = 30;
    break;
  default: // Months with 31 days
    daysInMonth = 31;
    break;
}

// Print the number of days in the month
console.log('Total number of days in the month: ' + daysInMonth);
