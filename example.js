//  In its simple form, an object in JavaScript is
//  a set of key-value pairs. Keys are called as properties.
//  Each property has to be unique. Value can be of any type,
//  including another object (nested object), or an array,
//  or any combination thereof.

//  An example

let book = {
  title: 'Anna Karenina',
  year: 1878,
  author: {
    firstName: 'Leo',
    lastName: 'Tolstoy',
    country: 'Russia',
  },
  translatedTo: ['English', 'French', 'German'],
  isAvailable: true,
  order: function () {
    console.log('Order taken for Anna Karenina');
  },
};

//  Properties are accessed via dot operator
console.log(`author first name: ${book.author.firstName}`);

//  Function on the object can be invoked using dot operator
book.order();

//  Properties can also be accessed using subscript operator
console.log(`title: ${book['title']}`);
book['order']();

//  A new property can be added on the fly
book.language = 'Russian';
console.log(`language: ${book.language}`);

//  An existing property can be deleted on the fly
delete book.year;
console.log('Book after deleting year property', book);
