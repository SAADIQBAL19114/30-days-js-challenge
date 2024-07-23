// Activity 1

// Task 1

let number = 0;

if (number > 0) {
  console.log("Number is Positive");
} else if (number < 0) {
  console.log("Number is Negative");
} else {
  console.log("Number is 0");
}

// Task 2

let age = 18;

if (age >= 18) {
  console.log("Person is Eligible to vote");
} else {
  console.log("Person is nor Eligible to vote");
}

// Activity 2

// Task 3

a = 2;
b = 3;
c = 4;

if (a > b) {
  if (a > c) {
    console.log(`${a} is greater`);
  } else {
    console.log(`${c} is greater`);
  }
} else {
  if (b > a) {
    if (b > c) {
      console.log(`${b} is greater`);
    } else {
      console.log(`${c} is greater`);
    }
  }
}

// Activity 3

// Task 4

dayNumber = 10
switch (dayNumber) {
    case dayNumber = 1:
        console.log("Monday");   
        break;
    case dayNumber = 2:
        console.log("Tuesday");   
        break;
    case dayNumber = 2:
        console.log("Wednesday");   
        break;
    case dayNumber = 2:
        console.log("Thursday");   
        break;
    case dayNumber = 2:
        console.log("Friday");   
        break;
    case dayNumber = 2:
        console.log("Saturday");   
        break;
    case dayNumber = 2:
        console.log("Sunday");   
        break;
    default:
         console.log("Invalid day number")
        break;
}

// Task 5

const score = 85; 
let grade;

switch (true) {
  case score >= 90 && score <= 100:
    grade = "A";
    break;
  case score >= 80 && score < 90:
    grade = "B";
    break;
  case score >= 70 && score < 80:
    grade = "C";
    break;
  case score >= 60 && score < 70:
    grade = "D";
    break;
  case score >= 0 && score < 60:
    grade = "F";
    break;
  default:
    grade = "Invalid score";
}

console.log(`The grade for a score of ${score} is ${grade}.`);


// Activity 4

// Task 6 

let number3 = 12;
let result = number3 > 0 ? "positive" : "negative";
console.log(result);

// Activity 5 

// Task 7

const year = 202

let leapYear;
if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            leapYear = true
        }else{
            leapYear = false
        }
    }else{
        leapYear = true
    }
}else{
    leapYear = false
}

if (leapYear) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}