//  A constant cannot be reassigned
const i = 100;

// i = 200; //  TypeError: Assignment to constant variable.

//  Please note const is not a guard against mutation

const book = {
  title: 'Crime and Punishment',
};

console.log(`Title before mutation: ${book.title}`);

book.title = 'The Brothers Karamazov'; //  mutation is allowed

console.log(`Title after mutation: ${book.title}`);
