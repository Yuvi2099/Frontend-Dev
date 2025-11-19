"use strict";

function validateLogin() {
  const user = document.getElementById("username");
  const pass = document.getElementById("password");

  const userOk = /^.{5,}$/.test(user.value);
  const passOk = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}/.test(pass.value);

  if (userOk && passOk) {
    console.log("Login Successful");
  } else {
    console.log("Invalid Credentials");
  }
}
