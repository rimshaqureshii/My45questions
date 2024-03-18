//Question24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the 
//following:
//  Test for equality  with strings;
console.log("Testing equality with strings");
var names1 = "apple";
var names2 = "apple";
var names3 = "Apple";
console.log(names1 == names2); //true
// Test for inequality  with strings;
console.log(names1 == names3); //false
// Test for lowercase function
console.log("Testing with lowercase function");
var str1 = "Apples";
var str2 = "apples";
console.log(str1.toLowerCase() === str2); //true
// Test for numarical test;
console.log("Testing with numerical test");
var num1 = 23;
var num2 = 6;
console.log(num1 > num2); //true
console.log(num1 < num2); //false
// Test using "AND" operator;
console.log("Test using for and operator ");
var a = 70;
var b = 50;
console.log(a === 70 && b === 50); //true
console.log(a === 70 && b === 60); //false
// Test using "OR" operator;
console.log("Test using for Or operator");
var x = 9;
var y = 7;
console.log(x === 9 || y === 8); //true
console.log(x === 19 || y === 14); //false
//Test whether an item is in a array
console.log("Test whether an item is in array");
var myarray = [3, 5, "Rimsha"];
var myString = "Hamna";
console.log(Array.isArray(myarray)); //true
//Test whether an item is not array
console.log("Not array");
console.log(Array.isArray(myString)); // false
