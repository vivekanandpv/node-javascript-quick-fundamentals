'use strict'; //  enable strict mode

function foo() {
  console.log('foo', this); //  doesn't bind to the execution context, hence undefined
}

foo();

let bar = function () {
  console.log('bar', this); //  doesn't bind to the execution context, hence undefined
};

bar();

//  Arrow functions do not bind to the this of the enclosing context

let baz = () => console.log('baz', this); //  doesn't bind to global this, but gets its own empty object

baz();
