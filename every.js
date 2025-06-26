//Syntax
// array.every(callback(element, index, array), thisArg?)


// Example 1: All numbers are positive
let numbers = [10, 20, 30, 40];
let allPositive = numbers.every(num => num > 0);
console.log(allPositive);  // Output: true

// Example 2: Check if all names start with 'A'
let names = ["Alice", "Andrew", "Ava"];
let allStartWithA = names.every(name => name.startsWith("A"));
console.log(allStartWithA); // Output: true

// Example 3: Not all elements match
let ages = [18, 25, 17, 30];
let allAdults = ages.every(age => age >= 18);
console.log(allAdults);  // Output: false (because 17 is not >= 18)














