//Syntax
array.entries()            


//Example 1
let colors = ["red", "green", "blue"];
let iterator = colors.entries();
for (let [index, value] of iterator) {
    console.log(index, value);
}// Output:0 'red', 1 'green',2 'blue'


//Example 2
let numbers = [10, 20, 30];
let it = numbers.entries();
console.log(it.next().value); // [0, 10]
console.log(it.next().value); // [1, 20]        
console.log(it.next().value); // [2, 30]











