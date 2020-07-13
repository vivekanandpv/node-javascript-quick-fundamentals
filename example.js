//  A string can be converted to a number in the following ways

//  1. using parseInt, parseFloat built-in functions
let parsedInt = parseInt('1001'); //  integer
let flooredIntFromFloat = parseInt('101.7598'); //  floored to 101
let parsedFloat = parseFloat('3.141592635'); //  both integers and floats

console.log(
  `parsedInt: ${parsedInt}, flooredIntFromFloat: ${flooredIntFromFloat}, parsedFloat: ${parsedFloat}`
);

//  2. using Number constructor function
let parsedNumber = Number('1001.256'); //  can be int or float (double)
console.log(`parsedNumber: ${parsedNumber}`);

//  3. using unary plus operator (same as Number constructor function)
let parsedWithUnaryPlus = +'5.3752';
console.log(`parsedWithUnaryPlus: ${parsedWithUnaryPlus}`);

//  Special note
//  parseInt can take a radix (base)
let parsedIntWithHexRadix = parseInt('f', 16);
console.log(`parsedIntWithHexRadix: ${parsedIntWithHexRadix}`);

//  parseInt and parseFloat ignore everything
//  after they encounter a nonparsable character
let parsedFloatWithNonParsableCharacter = parseFloat(
  '12.548!@#145878+JAKS14578'
);
console.log(
  `parsedFloatWithNonParsableCharacter: ${parsedFloatWithNonParsableCharacter}`
);

//  If parsing fails entirely, the variable gets
//  a special falsy value: NaN
let failedWithParseInt = parseInt('....');
let failedWithParseFloat = parseFloat('....');
let failedWithParseNumber = Number('....');
let failedWithUnaryPlus = +'....';

console.log(`failedWithParseInt: ${failedWithParseInt}`);
console.log(`failedWithParseFloat: ${failedWithParseFloat}`);
console.log(`failedWithParseNumber: ${failedWithParseNumber}`);
console.log(`failedWithUnaryPlus: ${failedWithUnaryPlus}`);
