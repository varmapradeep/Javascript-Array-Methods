//Syntax
array.fill(value, start, end)     


// Example 1: Fill entire array
let arr1 = [1, 2, 3, 4];
arr1.fill(0);
console.log(arr1);  // Output: [0, 0, 0, 0]

// Example 2: Fill from a specific index
let arr2 = [1, 2, 3, 4, 5];
arr2.fill(9, 2);
console.log(arr2);  // Output: [1, 2, 9, 9, 9]

// Example 3: Fill between two indexes
let arr3 = [10, 20, 30, 40, 50];
arr3.fill(100, 1, 3);
console.log(arr3);  // Output: [10, 100, 100, 40, 50]    

// Example 4: Fill an empty array
let arr4 = new Array(5).fill("A");
console.log(arr4);  // Output: ['A', 'A', 'A', 'A', 'A']




















