//Syntax
array.copyWithin(target, start, end)     


// Example 1: Basic usage
let arr1 = [1, 2, 3, 4, 5];
arr1.copyWithin(0, 3);
console.log(arr1);  // Output: [4, 5, 3, 4, 5]
// Copies [4, 5] to start from index 0

// Example 2: Copy a specific range
let arr2 = [10, 20, 30, 40, 50];
arr2.copyWithin(1, 3, 5);
console.log(arr2);  // Output: [10, 40, 50, 40, 50]           
// Copies [40, 50] to start at index 1

// Example 3: Overlapping copy
let arr3 = [100, 200, 300, 400];
arr3.copyWithin(2, 0, 2);
console.log(arr3);  // Output: [100, 200, 100, 200]
// Copies [100, 200] to start at index 2




















