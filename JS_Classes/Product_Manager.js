"use strict";

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = Number(price);
    this.category = category;
  }
  applyDiscount(percent) {
    this.price = this.price * (1 - percent / 100);
  }
  getDetails() {
    return `ID: ${this.id} | ${this.name} | ${this.price.toFixed(2)} | ${this.category}`;
  }
}

const products = [
  new Product(1, "Laptop", 2500, "Electronics"),
  new Product(2, "Headphones", 800, "Electronics"),
  new Product(3, "Shoes", 1200, "Fashion"),
  new Product(4, "Bottle", 300, "Home")
];

const filtered = products.filter(p => p.price > 1000);
filtered.forEach(p => console.log(p.getDetails()));
