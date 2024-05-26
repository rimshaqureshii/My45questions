//Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, 
//each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables.
// Then, log these variables.
var laptops = [
    { make: "Apple", model: "MecBook pro", year: 2021 },
    { make: "Dell", model: "XPS 16", year: 2020 },
    { make: "Hp", model: "spectrex360", year: 2019 }
];
var laptop1 = laptops[0], laptop2 = laptops[1];
console.log(laptop1);
console.log(laptop2);
