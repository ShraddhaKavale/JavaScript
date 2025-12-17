//Conversion operations

let score = 33
console.log(typeof score) //number

let scoreStr = Number ("33abc")
console.log(typeof scoreStr) //Number
console.log(scoreStr) //NAN - not a number (cause of abc)

//"33" => 33
//"33abc" => NAN

let loggedIn = 1 //true
// let loggedIn = 0 //false
// let loggedIn = "" //null 
// let loggedIn = "Shraddha" //string
console.log(typeof loggedIn) //Number
let booleanLoggedIn = Boolean(loggedIn)
console.log(typeof booleanLoggedIn) //Boolean

console.log(loggedIn)
console.log(booleanLoggedIn)

let num = 99 
console.log(typeof num)
let numStr = String(num)
console.log(typeof numStr)
console.log(numStr)

let a = 10
let b = 10
console.log(a+b+numStr)