//Question 60
//Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
var userProfile = (function () {
    var name = "Ayesha";
    var age = 22;
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, " , Age: ").concat(age));
        }
    };
})();
userProfile.displayInfo();
