'use strict';

const form = document.querySelector(".greeting"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".show-greeting");

const SHOWING_CN = "showing",
  USER_LS = "currentUser";

function saveName(user) {
  localStorage.setItem(USER_LS, user);
}
function showGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello, ${text}`;
}
function handleSubmit(event) {
  event.preventDefault();
  const name = input.value;
  saveName(name);
  showGreeting(name);
  input.value = "";
}
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}
function loadGreeting() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    showGreeting(currentUser);
  }
}
function init() {
  loadGreeting();
}

init();
