const name = "Shraddha"
let age = 22

//not to cool now 
console.log("Name: "+name+", Age: "+age);

//string interpolation
console.log(`Name: ${name} , age: ${age}`);

//one more way to declare a string with new and constructor
let str1 = new String("Google")
console.log(str1);

console.log(str1.at(-3)) //but can take -ve input
//both are same
console.log(str1.charAt(3)) //only takes +ve

console.log(str1.concat(" Cloud"))
console.log(str1.endsWith("e",6)) //ends with char tru/false and at what position(optional) the position starts with 1
console.log(str1.includes("clo"))
console.log(str1.length)
console.log(str1.repeat(5)) //only print the string for no. of times mentioned
console.log(str1.slice(0,3)) // give small string from - till (does not include last index char)
console.log(str1.split("g")) //splits string in array excluding the given char 
console.log(str1.substring(1,3));
console.log(str1.toUpperCase());



let str2 = "   hello    "
console.log(str2);
console.log(str2.trim());

