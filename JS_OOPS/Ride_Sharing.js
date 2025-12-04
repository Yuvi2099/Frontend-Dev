class User {
constructor(name, rating = 5) {
this.name = name;
this.rating = rating;
}
}


class Driver extends User {
constructor(name, rating, vehicle) {
super(name, rating);
this.vehicle = vehicle; 
}
}


class Trip {
constructor(fromLocation, toLocation, distance) {
this.fromLocation = fromLocation;
this.toLocation = toLocation;
this.distance = distance;
}


calculateFare() {
if (typeof this.distance !== 'number' || isNaN(this.distance)) {
throw new Error('Distance not provided or invalid');
}
if (this.distance < 0) throw new Error('Distance cannot be negative');


const baseFare = 50;
const perKm = 12;
return baseFare + this.distance * perKm;
}
}


try {
const trip1 = new Trip('Point A', 'Point B', 10);
console.log('\nQ6 — Fare for 10 km:', trip1.calculateFare());


const trip2 = new Trip('X', 'Y', -5);
console.log('Q6 — Fare for -5 km (should throw):', trip2.calculateFare());
} catch (err) {
console.error('Q6 — Trip error:', err.message);
}