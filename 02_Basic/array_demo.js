const arr1 = [1,2,3,4,5]
// console.log(arr1)

const arr2 = Array(0,1,2,3,4,"smk")
// console.log(arr2[5])

// arr1.push(5)
// console.log(arr1)
// arr1.pop()
// console.log(arr1)
// arr1.unshift(0)
// console.log(arr1)
// arr1.shift()
// console.log(arr1)

// console.log(arr1.includes(9));
// console.log(arr1.includes(0));

// console.log(arr1.indexOf(5))
// console.log(arr1.indexOf())

// console.log(arr1.join(",")) 



//IMP NOTE : Interview
//1.slice(): gives part of array, does not include the range(last index given) and dose not manipulate or touch the orginial array 
//2.splice(): gives part of array, till the count is given and manipulate the orginial array by deleting the spliced part and keep remaining ele in the array 

// console.log("OG: ",arr1)
// const sliArr = arr1.slice(0,3)
// console.log("A: ",sliArr)
// console.log("OG: ",arr1)
// const splArr = arr1.splice(0,3,["smk"]) //0-start index, 3-count of ele to be deleted. "smk"-ele to be added at deleted ele's place
// console.log("B: ",splArr)
// console.log("OG: ",arr1)


// const starter = ["chiken_tandori", "chiken_tikka", "chiken_65", "chiken_changezi"]
// const roti = ["tandor_roti", "plain_naan", "butter_naan", "rumali_roti", "chapati"]
// const dessert =["gulabJamun", "Lassi", "Ice_creame", "Jalebi"]

// console.log(starter.push(roti)) //returns the length of new array and does not add whole array add a new ele ehich is a array like[.... [...]]


// starter.push(...roti);
// console.log(starter);
//OR
// const menu1 = [...starter, ...roti, ...dessert] //adv over concat:more than one array can be added
// console.log(menu1)
// //OR
// const menu2 = starter.concat(roti)
// console.log(menu2);


// const arr3 = [1,2,3,[4,5],6,[7,[8,9],10],11]
// const flatArr = arr3.flat(1) //infinity for full depth
// console.log(flatArr);

console.log(Array.isArray("Shraddha")) //checking purpose : boolean val
console.log(Array.from("Shraddha"))
console.log(Array.from({name: "Shraddha"}))


let num1 = 100
let num2 = 200
let num3 = 300
console.log(Array.of(num1,num2,num3))