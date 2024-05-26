// Question 56
//Question 56: Keep Only Strings: Given a mix of different types of items, 
//make a new list that has only the words.

let mixedArray = ["Balloons" , 20 , true , "Corrot" , 4 , false];
  let stringsArray = mixedArray.filter(item => typeof item === "string");
    console.log(stringsArray);
    
