const char = prompt('Enter an char:');

switch (char) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    result = 'Vowel';
    break;
  default:
    result = 'Consonant';
    break;
}

// Print the result
console.log(char + ' is a ' + result);
