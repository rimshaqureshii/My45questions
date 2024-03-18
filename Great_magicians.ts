//Question42
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians : string[] = ["Harry Houdini" , "David Blaine" , 'Derren Brown'];
  function make_great(magicians: string[]){
   magicians.forEach(function(magicians) {
      console.log(`The great ${magicians}`)
   }) }
      make_great(magicians);



