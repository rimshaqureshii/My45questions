//Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and
// refactor it into an arrow function.
function calculateArea(width, height) {
    return width * height;
}
var calculateAreaArrow = function (width, height) { return width * height; };
console.log(calculateAreaArrow(6, 10));
