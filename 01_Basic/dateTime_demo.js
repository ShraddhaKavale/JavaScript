// let date = new Date();
// console.log(date.toString())

// console.log(date.getDate()) 
// console.log(date.getFullYear())
// console.log(date.getTimezoneOffset(5))
// console.log(date.toDateString())
// console.log(date.toISOString())
// console.log(date.toJSON())
// console.log(date.toLocaleString);
// console.log(date.toLocaleTimeString());
// console.log(date.toUTCString());

// console.log(typeof datedate) //object

// let myDate = new Date(2025, 11, 20, 20, 8)
//normally in js month count strats from 0 -> jan
//when yyyy-mm-dd format is used it starts from 01 -> jan
// let myDate = new Date("2025-12-20")
let myDate = new Date("12-20-2025")
console.log(myDate.toString())

// let timeStamp = Date.now()
// console.log(timeStamp)
// console.log(myDate.getTime())

// console.log(Math.floor(timeStamp/1000)) //to compare get small value

console.log(myDate.getMonth()+1)

console.log(`Today is ${myDate.getDate()}th of ${myDate.getMonth().toLocaleString()} of year ${myDate.getFullYear()}`)


//customizing the tolocalString->
myDate.toLocaleString("default",{weekday: "long", dateStyle: "long"})
