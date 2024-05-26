//Question 57
//Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
var grades = [88, 96, 72, 99, 53, 74];
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(averageGrade);
