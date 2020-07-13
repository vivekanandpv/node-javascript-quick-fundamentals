const book = {
  title: 'JavaScript the Good Parts',
  read: function () {
    console.log(`Title: ${this.title}`);
  },
};

//  if read() is called on book, this refers to the book
book.read();

//  if read() is called independently, this refers to the global object
//  hence this.title is undefined

const readFunction = book.read; //  this is assignment
readFunction();
