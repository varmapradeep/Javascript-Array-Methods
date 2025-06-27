//Syntax
array.reduceRight(callback(
    accumulator, currentValue, index, array), initialValue)



// Example 1: Subtract numbers from right to left
let numbers = [10, 20, 30];
let result = numbers.reduceRight((acc, curr) => acc - curr);
console.log(result);  // Output: -10 // Calculation: 30 - 20 - 10 = -10

// Example 2: Concatenate strings in reverse
let words = ["is", "this", "What"];
let sentence = words.reduceRight((acc, curr) => acc + " " + curr);
console.log(sentence);  // Output: "What this is"

// Example 3: Flatten a nested array from right
let nested = [[4, 5], [2, 3], [0, 1]];
let flat = nested.reduceRight((acc, curr) => acc.concat(curr));
console.log(flat);  // Output: [0, 1, 2, 3, 4, 5]  






























