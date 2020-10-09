class SimpleClass {
    sayHallo() {
        console.log("Hallo!")
    }
}

let sh = SimpleClass
console.log("A: " + sh)
console.log("B: " + JSON.stringify(sh))
console.log("C: " + JSON.stringify(new sh))
console.log("##############")
console.log("D: " + (new sh).sayHallo())









