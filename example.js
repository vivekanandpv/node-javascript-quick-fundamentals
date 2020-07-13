//  In JavaScript, absence of value is indicated by
//  two special entities: undefined and null

let i; //  no initialization; undefined
console.log(`Type of i is ${typeof i}`);

//  Curiously, the type of undefined is also undefined!
//  This means, undefined is both a value as well as a type
//  More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
console.log(`Type of undefined is ${typeof undefined}`);

//  null has to be specifically assigned
//  null is of type object
let j = null;
console.log(`Value of j is ${j}, Type of j is ${typeof j}`);
