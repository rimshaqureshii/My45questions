//Question 57
//Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

let grades = [88, 96, 72, 99, 53, 74];
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
  console.log(averageGrade);
  

