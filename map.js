//Syntax
// array.map(callback(element, index, array), thisArg?)   


// Example 1: Multiply each number by 2
let numbers = [1, 2, 3, 4];

let doubled = numbers.map(num => num * 2);
console.log(doubled);  // Output: [2, 4, 6, 8]

// Example 2: Convert strings to uppercase
let names = ["alice", "bob", "sara"];

let upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);  // Output: ["ALICE", "BOB", "SARA"]   

// Example 3: Return a list of user names from object array
let users = [
    { id: 1, name: "Varma" },
    { id: 2, name: "Alex" }
];
let userNames = users.map(user => user.name);
console.log(userNames);  // Output: ["Varma", "Alex"]





















