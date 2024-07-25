// Activity 1
// Task 1
const name = "Saad";
const age = 24;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

// Task 2
const multilineString = `This is a string \nthat spans multiple \nlines.`;
console.log(multilineString);

// Activity 2
// Task 3
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(first);
console.log(second);

// Task 4
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};
const { title, author } = book;
console.log(title); 
console.log(author);

// Activity 3
// Task 5
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5, 6];
console.log(newArray);

// Task 6
function sum(...numbers) {
    return numbers.reduce((prev,curr) => prev + curr, 0)
}

console.log(sum(1,2,3,4,5));

// Activity 4
// Task 7
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5, 2)); 
console.log(multiply(5));

// Activity 5
// Task 8
const name1 = "Alice";
const age1 = 30;

const person = {
  name1,
  age1,
  greet() {
    return `Hello, my name is ${this.name1} and I am ${this.age1} years old.`;
  },
};
console.log(person);
console.log(person.greet());

// Task 9
const propName = "dynamicProperty";
const propValue = "This is a dynamic value";

const dynamicObject = {
  [propName]: propValue,
};

console.log(dynamicObject);