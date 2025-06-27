//Syntax
object.valueOf()         


// Example 1: Number object
let numObj = new Number(42);
console.log(numObj.valueOf());  // Output: 42

// Example 2: String object
let strObj = new String("Hello");
console.log(strObj.valueOf());  // Output: "Hello"

// Example 3: Boolean object
let boolObj = new Boolean(true);
console.log(boolObj.valueOf());  // Output: true        


let person = {
  age: 25,
  valueOf: function() {
    return this.age;
  }
};

console.log(person + 5);  // Output: 30 (because person.valueOf() → 25)





















