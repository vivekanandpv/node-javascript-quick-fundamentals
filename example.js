class Vehicle {
  constructor(name) {
    //  instance fields are set using this.x
    this.name = name;
  }

  drive() {
    console.log(`${this.name} is driving`);
  }
}

class Truck extends Vehicle {
  constructor(name, year) {
    //  it is mandatory to call super-class constructor
    super(name);
    this.year = year;
  }

  drive() {
    console.log(`${this.name} of year ${this.year} is driving`);
  }

  honk() {
    console.log(`${this.name} of year ${this.year} is honking`);
  }
}

const v = new Vehicle('Volvo');
v.drive();

const t = new Truck('Leyland', 2020);
t.drive();
t.honk();

//  typeof and instanceof operators
console.log(
  `Type of v: ${typeof v}, v is instance of ${
    v instanceof Vehicle ? 'Vehicle' : '?'
  }`
);

console.log(
  `Type of t: ${typeof t}, t is instance of ${
    t instanceof Truck ? 'Truck' : '?'
  }`
);

//  t is also the instance of Vehicle (polymorphism)
console.log(
  `Type of t: ${typeof t}, t is instance of ${
    t instanceof Vehicle ? 'Vehicle' : '?'
  }`
);

//  but v is not the instance of Truck
console.log(
  `Type of v: ${typeof v}, v is instance of ${
    v instanceof Truck ? 'Truck' : '?'
  }`
);
