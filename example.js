//  In JavaScript, it is possible to call a function
//  with too many or too few arguments
//  Extra arguments are ignored, and unsupplied arguments
//  default to undefined

function foo(a, b, c) {
  console.log(`foo is called with ${a}, ${b}, ${c}`);
}

//  With exact arguments
foo('Hello', 123, true);

//  With too many arguments
foo(1, 3.14, false, 'How are you?', () => console.log('Arrow!'));

//  With too few arguments
foo();
