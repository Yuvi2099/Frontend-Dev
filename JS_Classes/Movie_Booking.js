"use strict";

function bookTicket() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const seats = document.getElementById("seats");

  const nameOk = /^[A-Za-z ]+$/.test(name.value);
  const emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value);
  const seatsOk = /^[1-9]|10$/.test(seats.value);

  if (nameOk && emailOk && seatsOk) {
    const ticket = {
      name: name.value,
      email: email.value,
      seats: seats.value
    };
    console.log(ticket);
  }
}
