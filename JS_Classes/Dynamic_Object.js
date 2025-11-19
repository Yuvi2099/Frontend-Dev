"use strict";

const user = { name: "John", email: "john@mail.com", age: 21 };

function updateUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;

  user.name = name;
  user.email = email;
  user.age = age;

  document.getElementById("output").innerText = JSON.stringify(user);
}
