// // Activity 1
// // Task 1
let book = {
    title: "js",
    author: "saad",
    year: 2024
}
console.log(book);

// Task 2 
console.log(book.author);
console.log(book.year);

// Activity
// Task 3 
book.getTitleAndAuthor = function() {
    return `${this.title} by ${this.author}`
}
console.log(book.getTitleAndAuthor());

// Task 4 
book.updateYear = function(newYear) {
    return this.year = newYear
}
book.updateYear(2023)
console.log(book);

// Activity 3
// Task 5
const library = {
  name: "City Library",
  books: [
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  ],
};
console.log(library);

// Task 6
console.log(library.name); 

library.books.forEach((book) => {
  console.log(book.title);
});

// Activity 4
// Task 7
book.getTitleAndYear = function () {
  return `${this.title}, published in ${this.year}`;
};

console.log(book.getTitleAndYear());

// Activity 5 
// Task 8
 
for (let prop in book) {
    console.log(`${prop}: ${book[prop]}`);
}

// Task 9 
console.log(Object.keys(book)); 
console.log(Object.values(book));

