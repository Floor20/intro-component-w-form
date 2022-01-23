"use strict";

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errImg = document.getElementsByTagName("img");
const inputParent = document.querySelectorAll(".input-area");
const inputChild = document.querySelectorAll(".err-message");
const form = document.querySelector("form");

const inputList = [...inputParent];

const init = function () {
  inputList.forEach((area) => {
    console.log(area);
  });
};

init();

form.addEventListener("submit", (e) => {
  let messages = [];

  if (firstName.value === "" || firstName.value == null) {
    messages.push("First name is required");
  }

  if (lastName.value === "" || lastName.value == null) {
    messages.push("Last name is required");
  }

  if (email.value === "" || email.value == null) {
    messages.push("Email address is required");
  }

  if (password.value === "" || password.value == null) {
    messages.push("Password is required");
  }

  if (messages.length > 0) {
    e.preventDefault();
    console.log(messages);
  }
});
