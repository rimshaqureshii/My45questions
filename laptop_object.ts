//Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year,
// and a method describe() that logs a sentence about the laptop.


let laptop = {
    make: "Dell",
    model: "XPS 16",
    year: 2020,
    discribe: function() {
        console.log(`This laptop is a ${this.year} , ${this.make} , ${this.model}`);
    }
};
laptop.discribe()










