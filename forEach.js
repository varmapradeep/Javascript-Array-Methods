//Syntax
// array.forEach(callback(element, index, array), thisArg?)  


// Example 1: Simple array
let fruits = ["apple", "banana", "mango"];

fruits.forEach(fruit => {
  console.log(fruit);
});
// Output:
// apple
// banana
// mango

// Example 2: With index
let numbers = [10, 20, 30];
numbers.forEach((num, index) => {
  console.log(`Index ${index} has value ${num}`);             
});
// Output:
// Index 0 has value 10
// Index 1 has value 20
// Index 2 has value 30

// Example 3: Modify values inside an object array
let users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 25 }
];

users.forEach(user => {
  user.age += 1;
});

console.log(users);// Output: [ { name: 'Alice', age: 23 }, { name: 'Bob', age: 26 } ]
























