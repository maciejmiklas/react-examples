const R = require('ramda');

console.log("\n\n#### 001 - function as param ####")
{
    function applyOp(a, b, op) {
        return op(a, b)
    }

    const multiplayer = (a, b) => a * b;
    console.log(applyOp(2, 3, multiplayer));
}

console.log("\n\n#### 002 - negate function ####")
{
    const negative = (func) => {
        return function () {
            return !func.apply(null, arguments);
        }
    }

    const isNull = val => {
        return val === null;
    }

    const isNotNull = negative(isNull);
    console.log("A:", isNotNull(null))
    console.log("B:", isNotNull("hi"))
}

console.log("\n\n#### 003 - closure ####")
{
    const closure = () => {
        let x = 1;
        return (y) => {
            x++;
            return x + y;
        }
    }
    const cl = closure();
    console.log("A:", cl(1))
    console.log("B:", cl(1))
}

console.log("\n\n#### 004 - currying ####")
{
    const makeAddFunction = amount => number => number + amount
    const makeExpFunction = base => exponent => Math.pow(base, exponent)
    const addTenTo = makeAddFunction(10);
    const riseThreeTo = makeExpFunction(3);
    console.log("A:", addTenTo(2));
    console.log("B:", riseThreeTo(2));
}

console.log("\n\n#### 005 - currying ####")
{
    const curry_long = fn => {
        return function (firstArg) {
            return function (secondArg) {
                return fn(firstArg, secondArg)
            }
        }
    }
    const curry = fn => firstArg => secondArg => fn(firstArg, secondArg)
    const name = curry(function (last, first) {
        return {last, first}
    })
    console.log(name("Maciej")("Miklas"));
}

console.log("\n\n#### 006 - currying R ####")
{
    const name = R.curry(function (last, first) {
        return {last, first}
    })
    console.log("A:", name("Maciej")("Miklas"));
    console.log("B:", name("Maciej", "Miklas"));
}

console.log("\n\n#### 007 - compose R ####")
{
    const explode = str => str.split(/\s+/)
    const count = arr => arr.length
    const countWords = R.compose(count, explode)
    console.log(countWords("This is a test string"))
}

console.log("\n\n#### 008 - zip ####")
{
    const students = ['Rosser', 'Turing', 'Kleene', 'Church'];
    const grades = [80, 100, 90, 99];
    console.log(R.zip(students, grades))
}

console.log("\n\n#### 009 - sort by grade ####")
{
    const students = ['Rosser', 'Turing', 'Kleene', 'Church'];
    const grades = [80, 100, 90, 99];
    console.log(R.compose(R.reverse, R.sortBy(R.prop(1)), R.zip)(students, grades));
}

console.log("\n\n#### 010 - sort by grade 2 ####")
{
    const students = ['Rosser', 'Turing', 'Kleene', 'Church'];
    const grades = [80, 100, 90, 99];
    const reverse = R.reverse
    const sort = R.sortBy(R.prop(1))
    const zip = R.zip
    console.log("A:", R.compose(reverse, sort, zip)(students, grades));
    console.log("B:", R.pipe(zip, sort, reverse)(students, grades));
}

console.log("\n\n#### 011 - tap ####")
{
    const students = ['Rosser', 'Turing', 'Kleene', 'Church'];
    const grades = [80, 100, 90, 99];
    const reverse = R.reverse
    const sort = R.sortBy(R.prop(1))
    const zip = R.zip
    const debug = R.tap(v => console.log("A:", v))
    console.log("B:", R.pipe(zip, sort, debug, reverse)(students, grades));
}

console.log("\n\n#### 012 - identity ####")
{
    const students = ['Rosser', 'Turing', 'Kleene', 'Church'];
    const grades = [80, 100, 90, 99];
    const reverse = R.reverse
    const sort = R.sortBy(R.prop(1))
    const zip = R.zip
    const debug = R.identity(v => {
        v.push(['MACIEJ', 33]);
        return v;
    })
    console.log("B:", R.pipe(zip, sort, debug, reverse)(students, grades));
}

console.log("\n\n#### 013 - OR ####")
const alt = (f1, f2) => val => f1(val) || f2(val)
const ff1 = val => val === 'HI' ? "HO" : null
const ff2 = val => val === 'JO' ? "HE!" : null
const ff = alt(ff1, ff2)
console.log("A:", ff("HI"))
console.log("B:", ff("JO"))