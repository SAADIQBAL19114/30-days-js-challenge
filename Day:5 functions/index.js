// Activity 1

// Task 1

function evenOdd(number) {
    if(number % 2 === 0){
        console.log("number is even");
    }else{
        console.log("number is odd");
    }
}
evenOdd(5)

// Task 2

function square(number) {
    return number ** 2  
}
const result = square(6)
console.log(result);

// Activity 2

// Task 3

function maxNumber(num1 ,num2) {
    if(num1 > num2){
        console.log(`${num1} is greater`);
    }else{
        console.log(`${num2} is greater`);
    }
}
maxNumber(3, 5)

// Task 4

function concatonateTwoString(str1, str2) {
    return str1 + str2;
}
const result1 = concatonateTwoString("saad", "iqbal")
console.log(result1);

// Activity 3 

// Task 5

const sumTwoNum = (num1, num2) => {
    return num1 + num2
}
console.log(sumTwoNum(2, 12))

// Task 6

const charCheck = (char, str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char){
            return true
        }
    }
    return false
}
console.log(charCheck("i","saadiqbal"))

// Activity 4 

// Task 7

function product(num1, num2 = 5) {
    return num1 * num2
}
console.log(product(3));

// Task 8

const greet = (name, age = 30) => {
  return `Hello, ${name}! You are ${age} years old.`;
};
console.log(greet("Alice"));
console.log(greet("Bob", 25));

// Activity 5 

// Task 9

function repeatFunction(func, times) {
  for (let i = 0; i < times; i++) {
    func();
  }
}
function sayHello() {
  console.log("Hello!");
}
repeatFunction(sayHello, 3);

// Task 10

function applyFunctions(func1, func2, value){
    return func2(func1(value))
}

function addTwo(value){
    return value + 2
}

function multipleFive(value){
    return value * 5
}
console.log(applyFunctions(addTwo, multipleFive, 3));
