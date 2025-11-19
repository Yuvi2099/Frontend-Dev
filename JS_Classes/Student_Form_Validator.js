"use strict";

function validateStudentForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const pass = document.getElementById("password");

  const nameValid = /^[A-Za-z ]+$/.test(name.value);
  const emailValid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value);
  const phoneValid = /^\d{10}$/.test(phone.value);
  const passValid = /(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}/.test(pass.value);

  setStatus(name, nameValid);
  setStatus(email, emailValid);
  setStatus(phone, phoneValid);
  setStatus(pass, passValid);
}

function setStatus(field, valid) {
  field.style.border = valid ? "2px solid green" : "2px solid red";
}
