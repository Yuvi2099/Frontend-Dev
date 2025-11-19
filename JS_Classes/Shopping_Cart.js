"use strict";

class Cart {
  constructor() {
    this.items = [];
  }
  addItem(name, price, qty) {
    this.items.push({ name, price, qty });
  }
  getTotal() {
    return this.items.reduce((t, i) => t + i.price * i.qty, 0);
  }
  applyCoupon(code) {
    const valid = /^(SAVE|DISC)\d{1,2}$/.test(code);
    if (!valid) return this.getTotal();
    const percent = Number(code.match(/\d+/)[0]);
    return this.getTotal() * (1 - percent / 100);
  }
}

const cart = new Cart();
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);

console.log(cart.applyCoupon("SAVE20"));
