//  ... is called either spread or rest operator
//  More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

//  as rest operator

function foo(...names) {
  //  names is now an array
  names.forEach((n) => {
    console.log(`foo(): name: ${n}`);
  });
}

foo('Ajay', 'Varun', 'Jacob', 'Harini', 'Harry');

//  as spread operator
const cities = ['Bengaluru', 'New Delhi', 'London'];

const moreCities = [...cities, 'Mumbai', 'Chennai', 'Tokyo', 'Madrid'];

console.log(`moreCities: ${moreCities}`);

const vehicle = {
  name: 'Default',
  fuel: 'Petrol',
};

const car = {
  ...vehicle,
  make: 'Maruti',
  year: 2019,
};

console.log('car', car);
