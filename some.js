//Syntax
// array.some(callback(element, index, array), thisArg?)  


// Example 1: At least one number is even
let numbers = [1, 3, 5, 8];
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);  // Output: true

// Example 2: No item matches
let scores = [45, 50, 60];
let hasHighScore = scores.some(score => score > 100);
console.log(hasHighScore);  // Output: false

// Example 3: At least one name starts with 'S'
let names = ["John", "Steve", "Anna"];
let nameStartsWithS = names.some(name => name.startsWith("S"));
console.log(nameStartsWithS);  // Output: true

















