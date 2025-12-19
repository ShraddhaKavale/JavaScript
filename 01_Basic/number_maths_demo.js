//numbers
const score = 200
console.log(score);

const num1 = new Number(400)
console.log(num1);

console.log(score.toString().length);
console.log(num1.toFixed(2)) //gives .__ as the no. is given 

let num2 = new Number(500000)
console.log(num2.toPrecision(8))
console.log(num2.toLocaleString("en-IN")) //gives comma separated num - if en-IN not gives follows US pattern 

//*****Maths*****

console.log(Math);
console.log(Math.abs(-99)); // - => +
console.log(Math.cbrt(27)); //cube root
console.log(Math.max(10,20,30));

console.log(Math.round(456.218));
console.log(Math.floor(456.99))
console.log(Math.ceil(456.218))

//random gives no. in decimal , so multiply by 10 and to no. can be 0 also , so in whole() add 1 
console.log(((Math.random() * 10) + 1).toFixed(0))

const min = 10 
const max = 20

//imp
console.log(Math.floor((Math.random() * (max - min +1) + min)))