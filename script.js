"use strict";

const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const errImg = document.querySelectorAll(".err-img");
const inputFields = document.querySelectorAll(".field");
const errMessages = document.querySelectorAll(".err-message");
const form = document.querySelector("form");

const [firstNameErr, lastNameErr, emailErr, passwordErr] = [...errMessages];
const [firstNameImg, lastNameImg, emailImg, passwordImg] = [...errImg];
const [firstNameBox, lastNameBox, emailBox, passwordBox] = [...inputFields];

console.log(errImg);

const showError = function (el, msg, img) {
  el.classList.add("err-border");
  msg.classList.remove("hidden");
  img.classList.remove("hidden");
};

form.addEventListener("submit", (e) => {
  let messages = [];
  e.preventDefault();

  if (firstName.value === "" || firstName.value == null) {
    showError(firstName, firstNameErr, firstNameImg);
  }

  if (lastName.value === "" || lastName.value == null) {
    showError(lastName, lastNameErr, lastNameImg);
  }

  if (email.value === "" || email.value == null) {
    showError(email, emailErr, emailImg);
  }

  if (password.value === "" || password.value == null) {
    showError(password, passwordErr, passwordImg);
  }

  if (messages.length > 0) {
    console.log(messages);
  }
});
