/*
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

*/

//******operations******/

console.log(1+2) //3
console.log("1"+"2") //12
console.log("1"+2) //12
console.log(1+"2") //12

//whatever dattype appear first will be taken for o/t => here it is string
console.log("1"+2+3) //123

////whatever dattype appear first will be taken for o/t => here it is number
console.log(1+2+"3") //33

let val = 10
console.log(-val)