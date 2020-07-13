//  When a higher order function (say foo) returns a function
//  this return function closes over the local variables
//  declared in the foo() scope. The return function
//  has the access to these varialbes, even after foo() is out of scope

function closureEnclosureFunction() {
  let counter = 0;
  return function () {
    ++counter;
    console.log(`Current counter is: ${counter}`);
  };
}

let returnFunction = closureEnclosureFunction(); //  here, closureEnclosureFunction is out of scope

returnFunction(); //  counter 1
returnFunction(); //  counter 2
returnFunction(); //  counter 3
returnFunction(); //  counter 4
