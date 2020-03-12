var x = function ({foo, bar}) {
    console.log(foo);
    console.log(bar)
};

var y = {
    bar: "hello",
    foo: "Good bye"
};

var z = {
    bar: {h: "hello", l: "lo"},
    foo: "Good bye"
};
x(y);

console.log("#####################################");
const pros = {pr1: "val 1", pr2: "val 2"};
console.log(pros);

const {pr1, pr2} = pros;
console.log(`${pr1}  - ${pr2}`);


