//  A higher-order function can:
//  a. take another function as an argument
//  b. return a function as the return value
//  c. do both a & b

function upperCaseConverter(s) {
  return s.toUpperCase();
}

function fooTakesFunctionArgument(fn) {
  console.log(`fooTakesFunctionArgument calls fn: ${fn('hello')}`);
}

fooTakesFunctionArgument(upperCaseConverter);

function fooReturnsAFunction() {
  return function () {
    console.log('return function of fooReturnsAFunction()');
  };
}

let returnFunction = fooReturnsAFunction();
returnFunction();
