//Syntax
array.reduce(callback(accumulator, currentValue, index, array), initialValue)


// Example 1: Sum of all numbers
let numbers = [10, 20, 30];
let total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total);  // Output: 60

// Example 2: Multiply all numbers
let nums = [2, 3, 4];
let product = nums.reduce((acc, curr) => acc * curr, 1);
console.log(product);  // Output: 24

// Example 3: Flatten nested arrays
let nested = [[1, 2], [3, 4], [5]];
let flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat);  // Output: [1, 2, 3, 4, 5]


// Example 4: Count how many times each name appears
let names = ["Alice", "Bob", "Alice", "Sara", "Bob"];
let nameCount = names.reduce((acc, name) => {
  acc[name] = (acc[name] || 0) + 1;
  return acc;
}, {});

console.log(nameCount);  // Output: { Alice: 2, Bob: 2, Sara: 1 }






























