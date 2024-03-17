var guestArr = ["Mahnoor", "Nisha", "Neha", "Humna"];
var canNotAttend = "Humna";
var newGuest = "Iqra";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr)
//guestArr.map((items) =>
//console.log(`Dear ${ items }, I found a bigger dinner table so I am invited more peoples.`)
// );
//Part2 began
var guestbeg = "Iffat";
guestArr.unshift(guestbeg);
//console.log (guestArr)
//part3 middle
var middleGuest = "Hamza";
var middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 0, middleGuest);
// console.log(guestArr);
//part 4 append
guestArr.push("Ayeza");
//  console.log(guestArr)
//part 5          
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ",You are invited in the more people list on the dinner "));
});
