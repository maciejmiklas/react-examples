const add5 = async (num) => num + 5;
console.log("A: " + add5(5).then())

// ####

add5(12).then(v => console.log("B: " + v))

// ####

let valc;
add5(3).then(v => valc = v);
console.log("C: " + valc)

// ####

let vald = async () => await add5(3)
console.log("D: " + vald)

// ####

let vale = async () => {
    let val = await add5(3)
    console.log("E1: " + val)
    return val
}
let valeRes = vale();
console.log("E2: " + valeRes)
valeRes.then(v => console.log("E3: " + v))

// ####

