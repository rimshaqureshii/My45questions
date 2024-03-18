//Task17
  let guests : string[] = ["Hamza","Noor","Noreen","Sahiba","Hassan"]
//Informing that only two people can be invited
     console.log("Due to limited space, only two people can be invited for dinner.");

     // //Removing guests untill only two names remain
      while (guests.length > 2) {
        const removedGuest = guests.pop();
          console.log(`Sorry, ${removedGuest}, You're no longer invited to dinner.`);
      }
    let guestss : string[] = ["Hamza","Noor"]
     guestss.forEach((guest) => {
       console.log(`Dear ${guest}, You're still invited to dinner.`);
    });
//Removing the last two names from the list
guests.pop();
guests.pop();


   //printing the final list to confirms it's empty
    console.log("final guest list;", guests);


