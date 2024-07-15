// Activity 1

// Task 1 
var number12 = 123
console.log(number12)

// Task 2 
let number1 = 1234
console.log(number1)


// Activity 2

// Task 3
const boolean2 = true
console.log(boolean2)

// Activity 3

// Task 4 

let number3  = 1
let string1 = "saad"
let boolean1 = false
let obj = {
    "key": "value"
}
let array1 = [1, 2, 3, 4]

console.log(typeof number3)
console.log(typeof string1)
console.log(typeof boolean1)
console.log(typeof obj)
console.log(typeof array1)

// Activity 4 

// Task 5

let name = "iqbal"
console.log(name)
name = 123
console.log(name) 

// Activity 5

// Task 6

// const newName = "iqbal";
// console.log(newName);
// newName = 123;
// console.log(newName); 

// Feature Request

// Declare variables of different data types
let number = 42;
let string = "Hello, world!";
let boolean = true;
let object = { name: "Alice", age: 30 };
let array = [1, 2, 3];
let undefinedVar;
let nullVar = null;
let symbol = Symbol("unique");

// Log the value and type of each variable
console.log(`number: value = ${number}, type = ${typeof number}`);
console.log(`string: value = "${string}", type = ${typeof string}`);
console.log(`boolean: value = ${boolean}, type = ${typeof boolean}`);
console.log(`object: value = ${JSON.stringify(object)}, type = ${typeof object}`);
console.log(`array: value = ${array}, type = ${typeof array}`);
console.log(`undefinedVar: value = ${undefinedVar}, type = ${typeof undefinedVar}`);
console.log(`nullVar: value = ${nullVar}, type = ${typeof nullVar}`);
console.log(`symbol: value = ${symbol.toString()}, type = ${typeof symbol}`);


// let allows reassignment
let variableLet = "initial value";
console.log(`let before reassignment: ${variableLet}`);
variableLet = "reassigned value";
console.log(`let after reassignment: ${variableLet}`);

// const does not allow reassignment
const variableConst = "initial value";
console.log(`const before reassignment: ${variableConst}`);
try {
    variableConst = "reassigned value";
} catch (error) {
    console.log(`const after reassignment attempt: ${error.message}`);
}
