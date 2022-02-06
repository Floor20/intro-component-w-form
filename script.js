"use strict";

const form = document.querySelector("form");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const errImg = document.querySelectorAll(".err-img");
const errMessages = document.querySelectorAll(".err-message");
const emailFormatErr = document.querySelector(".email-err-message");

const [firstNameErr, lastNameErr, emailErr, passwordErr] = [...errMessages];
const [firstNameImg, lastNameImg, emailImg, passwordImg] = [...errImg];

const showError = function (el, msg, img) {
  el.classList.add("err-border");
  msg.classList.remove("hidden");
  img.classList.remove("hidden");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstName.value === "" || firstName.value == null)
    showError(firstName, firstNameErr, firstNameImg);

  if (lastName.value === "" || lastName.value == null)
    showError(lastName, lastNameErr, lastNameImg);

  if (email.value === "" || email.value == null)
    showError(email, emailErr, emailImg);
  else if (
    email.value !== "" ||
    (email.value !== null && email.value.charAt(email.value.length - 4) !== ".")
  )
    showError(email, emailFormatErr, emailImg);

  if (password.value === "" || password.value == null)
    showError(password, passwordErr, passwordImg);
});

//else if email.value.charAt(email.value.length - 4) !== '.'
