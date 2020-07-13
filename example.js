//  Under normal circumstances
//  function declaration or function expression
//  with function keyword binds to the this of the context

function foo() {
  console.log('foo', this); //  binds to global this (node global object, or window object in browser)
}

foo();

let bar = function () {
  console.log('bar', this); //  binds to global this (node global object, or window object in browser)
};

bar();

//  Arrow functions do not bind to the this of the enclosing context

let baz = () => console.log('baz', this); //  doesn't bind to global this, but gets its own empty object

baz();
