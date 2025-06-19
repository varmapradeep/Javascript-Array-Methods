//Syntax
// array.splice(index, howmany, item1, ..., itemX);  

//Example

let temparray = [99, 32, 23, 43, 53, 100];
temparray.splice(2, 3, "a", "b", "c");

console.log(temparray)
//Output: [ 99, 32, 'a', 'b', 'c', 100]

