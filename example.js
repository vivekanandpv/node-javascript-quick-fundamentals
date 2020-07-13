//  In JavaScript there are three main ways to define a function

//  1. function declaration
function namedFoo() {
  console.log('namedFoo is called');
}

//  2. function expression
//  Here we assign an anonymous function to a variable
let expressionFoo = function () {
  console.log('expressionFoo is called');
};

//  3. arrow function expression (lambda expression)
//  This is only available since ES6
let arrowFoo = () => console.log('arrowFoo is called');

//  Calling each of these functions is the same
namedFoo();
expressionFoo();
arrowFoo();
