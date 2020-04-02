function myFunc(x, y, ...params) {
    console.log(x);
    console.log(y);
    console.log(params);
}

function myFunc1(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
}

function myFunc2({x, y, z}) {
    console.log(x);
    console.log(y);
    console.log(z);
}

var inputs = ["a", "b", "c", "d", "e", "f"];

console.log("#A###############");
myFunc(...inputs);

console.log("#A1###############");
myFunc({...inputs});

console.log("#A2###############");
myFunc([...inputs]);

console.log("#A3###############");
myFunc(...[...inputs]);

console.log("#B###############");
myFunc(inputs);

console.log("#C###############");
myFunc1(...inputs);

console.log("#D###############");
myFunc1(inputs);

console.log("#E###############");
myFunc2(...inputs);

console.log("#F###############");
myFunc2(inputs);

console.log("################");
console.log("################");
console.log("################");


const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];
const pizzas = [...featured, 'veg pizza', ...specialty];
console.log(pizzas);


var obj1 = {foo: 'bar', x: 42};
var obj2 = {foo: 'baz', y: 13};

var clonedObj = {...obj1};
// Object { foo: "bar", x: 42 }

var mergedObj = {...obj1, ...obj2};
// Object { foo: "baz", x: 42, y: 13 }