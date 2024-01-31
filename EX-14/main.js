var physics = Number(prompt('Enter marks for Physics:'));
var chemistry = Number(prompt('Enter marks for Chemistry:'));
var biology = Number(prompt('Enter marks for Biology:'));
var mathematics = Number(prompt('Enter marks for Mathematics:'));
var computer = Number(prompt('Enter marks for Computer:'));

var totalMarks = physics + chemistry + biology + mathematics + computer;

var percentage = (totalMarks / 500) * 100;

var grade;
if (percentage >= 90) {
  grade = 'Grade A';
} else if (percentage >= 80) {
  grade = 'Grade B';
} else if (percentage >= 70) {
  grade = 'Grade C';
} else if (percentage >= 60) {
  grade = 'Grade D';
} else if (percentage >= 40) {
  grade = 'Grade E';
} else {
  grade = 'Grade F';
}

console.log('Percentage: ' + percentage + '%');
console.log('Grade: ' + grade);
