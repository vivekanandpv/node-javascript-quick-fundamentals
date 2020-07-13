//  A pure function always returns the same output for same input
//  It is stateless, meaning it doesn't keep a memory of variables.
//  It doesn't produce side-effects (somewhere else)
//  More info: https://en.wikipedia.org/wiki/Pure_function

let i = 0;

//  square() only depends on input parameter and constants
//  It doesn't change or call anything else
//  So it is a pure function
function square(param) {
  return param * param;
}

//  foo() doesn't depend only on param
//  Also, it changes external variable i
//  This is not a pure function
function foo(param) {
  ++i;
  return param * i;
}

//  Calling square with same input,
//  say 3 always gives the same result 9
console.log(`square(3): ${square(3)}`);
console.log(`square(3): ${square(3)}`);
console.log(`square(3): ${square(3)}`);
console.log(`square(3): ${square(3)}`);

//  On the other hand, calling foo with same input,
//  say 3 doesn't always give the same result
console.log(`foo(3): ${foo(3)}`);
console.log(`foo(3): ${foo(3)}`);
console.log(`foo(3): ${foo(3)}`);
console.log(`foo(3): ${foo(3)}`);
console.log(`foo(3): ${foo(3)}`);
