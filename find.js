//Syntax
array.find(callback(element, index, array), thisArg)

//Examples

let users = [
    { id: 1, name: "Bob" },
    { id: 2, name: "Sam" },
    { id: 3, name: "Ram" }
];
let foundUser = users.find(user => user.name === "Sam");
console.log(foundUser);  // Output: { id: 2, name: "Sam" }     

let numbers = [5, 8, 12, 20];
let result = numbers.find(num => num > 10);
console.log(result);  // Output: 12









