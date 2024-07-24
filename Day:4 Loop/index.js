// Activty 1 

// Task 1 

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2 

for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// Activity 2 

// Task 3

let sum = 0
let number = 1
while (number <= 10) {
    sum += number
    number ++
}
console.log(`The sum of numbers from 1 to 10 is ${sum}`);

// Task 4

// let number1 = 10
// while (number1 >= 1) {
//     console.log(number1);
//     number1 --
// }

// Activity 3

// Task 5

let i = 1
do {
    console.log(i);
    i++
} while (i<=5);

// Task 6

let number3 = 5
let fact = 1;


do {
    fact *= number3
    number3 -- 
} while (number3 >= 1);

console.log(fact);

// Activity 4

// Task 7

let n = 6;
for (let i = 1; i <= n; i++) {
    let a= ""
    for (let j = 1; j < i; j++) {
        a += "*"
    }
    console.log(a);
}

// Activity 5

// Task 8

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Task 9

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}

