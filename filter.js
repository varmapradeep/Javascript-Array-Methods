//Syntax
// array.filter(callback(element, index, array), thisArg?)   


// Example 1: Filter numbers greater than 10
let numbers = [5, 12, 8, 20, 1];
let result = numbers.filter(num => num > 10);
console.log(result);  // Output: [12, 20]

// Example 2: Filter even numbers
let values = [3, 4, 6, 9, 10];
let evens = values.filter(val => val % 2 === 0);
console.log(evens);  // Output: [4, 6, 10]

// Example 3: Filter users based on condition
let users = [
  { name: "Varma", active: true },
  { name: "Alex", active: false },
  { name: "Sara", active: true }
];

let activeUsers = users.filter(user => user.active);
console.log(activeUsers);
// Output: [{ name: "Varma", active: true }, { name: "Sara", active: true }]























