//Question24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 //If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the 
 //following:
//  Test for equality  with strings;
   console.log("Testing equality with strings")
  let names1 :string = "apple"
   let  names2 :string = "apple"
    let names3 :string = "Apple"
   console.log(names1 == names2); //true
// Test for inequality  with strings;
      console.log(names1 == names3); //false

// Test for lowercase function
 console.log("Testing with lowercase function")
let str1 : string = "Apples"
 let str2 : string = "apples"
   console.log(str1.toLowerCase() === str2 );//true

// Test for numarical test;
 console.log("Testing with numerical test")
  let num1 : number = 23
   let num2 : number = 6
   console.log(num1 > num2);//true
    console.log(num1 < num2);//false

// Test using "AND" operator;
  console.log("Test using for and operator ")
  let a :number = 70
    let b :number = 50
      console.log(a===70 && b===50 );//true
       console.log(a===70 && b===60);//false

// Test using "OR" operator;
  console.log("Test using for Or operator")
   let x : number = 9
    let y : number =7
      console.log(x ===9 || y ===8 );//true
       console.log(x ===19 || y ===14);//false

 //Test whether an item is in a array
   console.log("Test whether an item is in array")
  let myarray = [3 ,5 , "Rimsha"];
       let myString = "Hamna";
       console.log(Array.isArray(myarray))//true
 //Test whether an item is not array
   console.log("Not array")
       console.log(Array.isArray(myString))// false











       















