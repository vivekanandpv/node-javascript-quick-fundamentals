//  In JavaScript, these are considered to be falsy:
//      null, undefined, 0, '', false, NaN
//  More info: https://developer.mozilla.org/en-US/docs/Glossary/Falsy

console.log(`null is: ${null ? 'truthy' : 'falsy'}`);
console.log(`undefined is: ${undefined ? 'truthy' : 'falsy'}`);
console.log(`0 is: ${0 ? 'truthy' : 'falsy'}`);
console.log(`empty string is: ${'' ? 'truthy' : 'falsy'}`);
console.log(`NaN is: ${NaN ? 'truthy' : 'falsy'}`);
