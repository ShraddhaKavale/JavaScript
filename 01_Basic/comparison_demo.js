// let comparison = "2" > 1
// console.log(typeof comparison)

console.log("2" > 1) //"2" → number 2  o/t->true
console.log("2" == 1)//"2" → number 2  o/t->false
console.log("2" < 1)//"2" → number 2  o/t->false

console.log("2" === 1)//no conversions cause "===" checks datatype and value both  o/t->false


// datatypes premitive and user defined

const arr =["waffle", "gulab jamun", "jalebi"]
console.log("items i love:",arr)
let myself = {
    name: "shraddha",
    age: 22,
    city: "Pune"
}
console.log(myself)

let a = 10, b = 20
function addition(){
    console.log(a+b)
}
addition()