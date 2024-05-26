//Question 61
//Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, 
//trucks, and motorcycles using enums, and show one example.
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["Car"] = 0] = "Car";
    vehicleType[vehicleType["Bike"] = 1] = "Bike";
    vehicleType[vehicleType["Airplane"] = 2] = "Airplane";
})(vehicleType || (vehicleType = {}));
console.log(vehicleType.Car);
