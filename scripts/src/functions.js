const fA = par => (par + "_?")

console.log("A: " + fA)
console.log("B: " + fA("HI"))


function fB(par) {
    return par + "_!";
}

console.log("##############")

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

class CarCl {
    constructor(make,model,year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

const car1 = new Car('Eagle', 'Talon TSi', 1991);
const car2 = Car('Eagle2', 'Talon TSi2', 1992);
const car3 = Car('Eagle3', 'Talon TSi3', 1993);
const car4 = new CarCl('Eagle4', 'Talon TSi4', 1994)

console.log("C: " + JSON.stringify(car1))
console.log("D: " + JSON.stringify(car2))
console.log("E: " + JSON.stringify(car3))
console.log("F: " + JSON.stringify(car4))

console.log("G: " + (typeof fA))
console.log("H: " + (typeof Car))
console.log("I: " + (typeof car1))
console.log("J: " + (typeof car4))
console.log("K: " + (typeof CarCl))

const isFunction = function (obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
};

console.log("L: " + isFunction(fA))
console.log("M: " + isFunction(Car))
console.log("N: " + isFunction(car1))
console.log("O: " + isFunction(CarCl))
console.log("P: " + isFunction(car4))