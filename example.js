//  We declare variables using let and constants using const keywords
//  Discussion about let, const, and var will be taken later
//  We discourage the use of var for variable declaration

//  1. number
//  There is concept of int, short, long in JavaScript
//  Number is represented in most systems as a
//  double-precision floating point number (double in Java or C# or C++)
//  More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
let i = 100; //  type of i is number
console.log(`Type of i is: ${typeof i}`);

//  2. string
//  There is no concept of chars (as in Java, C#, and C++)
//  A single character is a string of length 1
//  strings can be enclosed in single-quotes (')
//  or double-quotes (") or backticks (`)
//  We prefer single-quotes
//  More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
let name = 'India'; //  type of name is string
console.log(`Type of name is: ${typeof name}`);

//  3. boolean
let closed = true;
console.log(`Type of closed is: ${typeof closed}`);

//  4. function
//  In JavaScript, function is a type
//  This allows us to create variables of function types
//  which can be used to pass functions as parameters to other functions
//  This is the fundamental concept behind functional-style of programming
//  or functional paradigm
function foo() {
  //...
}
console.log(`Type of foo is: ${typeof foo}`);

//  5. object
//  In JavaScript, the object is a chunk of memory identified by variable
//  There is no concept of class or inheritance in JavaScript
//  Analogous to class-based inheritance, we have prototypal inheritance
//  Analogous to classes, we have constructor functions
//  More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
let car = {
  model: 'XYZ',
};
console.log(`Type of car is ${typeof car}`);

//  6. symbol
//  The data type symbol is a primitive data type.
//  The Symbol() function returns a value of type symbol
//  Every symbol value returned from Symbol() is unique.
//  A symbol value may be used as an identifier for object properties
//  More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
let symbolOfString = Symbol('Greetings!');
console.log(`Type of symbolOfString is ${typeof symbolOfString}`);
