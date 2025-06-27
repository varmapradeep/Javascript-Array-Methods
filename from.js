//Syntax
// Array.from(arrayLike, mapFn?, thisArg?)       



// Example 1: Convert a string to array
let str = "Hello";
let chars = Array.from(str);
console.log(chars);  // Output: ['H', 'e', 'l', 'l', 'o']

// Example 2: Convert a Set to an array
let mySet = new Set([1, 2, 3]);
let arr = Array.from(mySet);
console.log(arr);  // Output: [1, 2, 3]

// Example 3: Using a map function
let squares = Array.from([1, 2, 3], x => x * x);
console.log(squares);  // Output: [1, 4, 9]             

// Example 4: Convert arguments to an array (in a function)
function example() {
  let argsArray = Array.from(arguments);
  console.log(argsArray);
}
example(10, 20, 30);  // Output: [10, 20, 30]


































