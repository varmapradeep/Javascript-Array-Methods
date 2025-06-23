//Syntax
string.indexOf(searchValue, startIndex);

array.indexOf(searchElement, fromIndex);      

//Examples

const str = "Hello, world!";
console.log(str.indexOf("world"));  // Output: 7
console.log(str.indexOf("o"));      // Output: 4
console.log(str.indexOf("z"));      // Output: -1 (not found)

const fruits = ["apple", "banana", "mango", "banana"];
console.log(fruits.indexOf("banana"));  // Output: 1
console.log(fruits.indexOf("grape"));   // Output: -1
// 🤔 Why -1? Because "grape" is not in the array.







