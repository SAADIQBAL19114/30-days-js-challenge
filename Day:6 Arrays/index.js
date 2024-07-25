// Activity 1 
// Task 1
let arr = [1, 2, 3, 4, 5]
console.log(arr);

// Task 2
console.log(arr[0])
console.log(arr[4])

// Activity 2
// Task 3
let arr1 = [1, 2, 3]
arr1.push(4)
console.log(arr1)

// Task 4
arr1.pop()
console.log(arr1);

// Task 5 
arr1.shift()
console.log(arr1);

// Task 6
arr1.unshift(1)
console.log(arr1);

// Activity 3 
// Task 7
let arr2 = [1, 2, 3, 4]
let mappedArray = arr2.map(item => item * 2 )
console.log(mappedArray);

// Task 8
let filteredArray = arr2.filter(item => item % 2 == 0)
console.log(filteredArray);

// Task 9
let reducedArray = arr2.reduce((prev, curr) => prev + curr  ,0)
console.log(reducedArray);

// Activity 4
// Task 10
for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    console.log(element);
}

// Task 11
arr2.forEach(item => console.log(item))

// Activity 5
// Task 12
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);

// Task 13:
const specificElement = matrix[1][2]; 
console.log(specificElement);
