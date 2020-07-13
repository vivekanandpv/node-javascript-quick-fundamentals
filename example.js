//  Concept of class is a syntactic sugar over constructor functions

class Vehicle {
  //  constructor is a special named function
  constructor() {
    //  instance fields are set using this.x
    this.name = 'Default Name';
  }

  //  methods do not have function keyword
  drive() {
    console.log(`${this.name} is driving`);
  }

  //  getter is an executing block that returns some value
  //  but accesed as a read-only field. Cannot call vehicleName();
  get vehicleName() {
    console.log('----> getter is executing');
    return this.name;
  }

  //  setter is an executing block that sets value to instance
  //  field as if it is a property. Cannot call vehicleName('name');
  set vehicleName(newName) {
    console.log('----> setter is executing');
    this.name = newName;
  }
}

//  instantiation is same as other object-oriented languages

const truck = new Vehicle();
truck.drive();
console.log(`Truck name before change: ${truck.vehicleName}`);

truck.vehicleName = 'Volvo';
console.log(`Truck name after change: ${truck.vehicleName}`);
truck.drive();
