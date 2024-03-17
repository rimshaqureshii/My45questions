let guestArr : string [] =["Mahnoor","Nisha","Neha","Humna"]

  let canNotAttend : string = "Humna"
     
      let newGuest : string = "Iqra"

        guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
          //console.log(guestArr)
         
           //guestArr.map((items) =>
            //console.log(`Dear ${ items }, I found a bigger dinner table so I am invited more peoples.`)
        // );
     //Part2 began
                let guestbeg : string = "Iffat"
                    guestArr.unshift(guestbeg);
                     //console.log (guestArr)
            //part3 middle
                let middleGuest : string = "Hamza"
                   let middleIndex = guestArr.length/3
                      guestArr.splice(middleIndex,0,middleGuest)
                         // console.log(guestArr);
         //part 4 append
                             guestArr.push("Ayeza")
                            //  console.log(guestArr)
            //part 5          
                    guestArr.map((items) =>
                      console.log(`Dear ${items},You are invited in the more people list on the dinner `));                   


