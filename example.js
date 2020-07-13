console.log(`Module executing scope this: ${this}`);

const book = {
  title: 'JavaScript the Good Parts',
  read: () => {
    //    read() now referes this to it's enclosing 'executing' scope
    //    please note, the object book is not an 'executing' scope
    //    the executing scope is the module (check line 1)
    //    thus, this.title is same as writing this.title in line 1 (will be undefined)
    console.log(`Title: ${this.title}`);
  },
};

//  since read() is now an arrow function, its behaviour is consistent
book.read();

const readFunction = book.read;
readFunction();
