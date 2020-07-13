//  JavaScript's type model is called dynamic typing
//  We do have types, but the variable can change the type
//  during the program

let i = 100; //  type is number
console.log(`Value of i is ${i}, and type is ${typeof i}`);

i = 'Hello there!'; //  type is string
console.log(`Value of i is ${i}, and type is ${typeof i}`);

i = false; //  type is boolean
console.log(`Value of i is ${i}, and type is ${typeof i}`);

i = function () {}; //  type is function
console.log(`Value of i is ${i}, and type is ${typeof i}`);

i = {}; //  type is object
console.log(`Value of i is ${i}, and type is ${typeof i}`);

i = Symbol({ name: 'Vikram' }); //  type is symbol
console.log('Value of i is', i, `and type is ${typeof i}`);
