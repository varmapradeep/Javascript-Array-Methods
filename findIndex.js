//Syntax
// array.findIndex(callback(element, index, array), thisArg?);



// Example 1: Finding an object by property
let users = [
  { id: 1, name: "Varma" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Sara" }
];

let indexofusers = users.findIndex(user => user.name === "Alex");         
console.log(indexofusers);  // Output: 1

// Example 2: Finding number greater than 10
let numbers = [4, 9, 13, 22];

let index = numbers.findIndex(num => num > 10);
console.log(index);  // Output: 2 (13 is at index 2)

// Example 3: No match found
let names = ["John", "Mike", "Emma"];

let notFoundIndex = names.findIndex(name => name === "Liam");
console.log(notFoundIndex);  // Output: -1 (Liam not found)











