function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function () {
  console.log(`Car: ${this.brand} ${this.model}`);
};

const firstCar = new Car("Toyota", "Camry");
const secondCar = new Car("Honda", "Civic");

firstCar.getDetails();
secondCar.getDetails();
