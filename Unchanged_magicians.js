var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Question43
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magician = ["Harry Houdini", "David Blaine", 'Derren Brown'];
function copyArray(arr) {
    return __spreadArray([], arr, true);
}
function make_great(magicianArry) {
    for (var i = 0; i < magicianArry.length; i++) {
        magicianArry[i] = ' The great ' + magicianArry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
var copymagicianArray = copyArray(magician);
make_great(copymagicianArray);
console.log("\n\nThis is my orignal array");
show_magicians(magician);
console.log("\n\nThis is my modified copy of the  array");
show_magicians(copymagicianArray);
