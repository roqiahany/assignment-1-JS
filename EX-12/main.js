var subject1 = prompt('Enter marks for subject 1:');
var subject2 = prompt('Enter marks for subject 2:');
var subject3 = prompt('Enter marks for subject 3:');
var subject4 = prompt('Enter marks for subject 4:');
var subject5 = prompt('Enter marks for subject 5:');

var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;

var averageMarks = totalMarks / 5;

// var percentage = (totalMarks / 500) * 100;
var percentage = averageMarks;

// Print the results
console.log('Total marks = ' + totalMarks);
console.log('Average Marks = ' + averageMarks);
console.log('Percentage = ' + percentage);
