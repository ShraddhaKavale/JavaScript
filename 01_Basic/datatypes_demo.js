/*
number - range(2^53)
Bigint (for bigger no.s eg. in stock market)
string - '' or ""
boolean - true/false
null - standalone value
undefined - not assigned now maybe can be assigned in future.
symbol - to find uniqueness

object (imp)
*/

const dob = 19 
let fName = "shraddha"
let nullVal = null;
let companyName;

console.log(typeof dob) //number
console.log(typeof fName) //string
console.log(typeof nullVal) //object
console.log(typeof companyName) //undefined

//stack and Heap
let str1 = "shraddha"
let str2 = str1
str1 = "kavale"
console.log(str1)
console.log(str2)

let user1 = {
    uname : "mahadev",
    age : 57
}

console.log(user1)
let user2 = user1

user2.age = 1968
console.log(user2)
