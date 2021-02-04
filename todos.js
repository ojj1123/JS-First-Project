'use strict';

const todoForm = document.querySelector(".todoForm"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.querySelector(".todoList");

const TODOS_LS = "currentToDos";
let ToDos = [];
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(ToDos));
}
function deleteToDos(event) {
  const li = event.target.parentNode;
  todoList.removeChild(li);
  //local storage에서도 삭제
  const delToDos = ToDos.filter(el => {
    return el.id !== parseInt(li.id);
  });
  ToDos = delToDos;
  saveToDos();
}
function showToDoList(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const listText = document.createTextNode(text);
  const newId = ToDos.length + 1;
  delBtn.innerText = "X";
  li.id = newId;
  li.appendChild(delBtn);
  li.appendChild(listText);
  todoList.appendChild(li);
  delBtn.addEventListener("click", deleteToDos);
  const listObj = {
    text : text,
    id : newId
  };
  ToDos.push(listObj);
  saveToDos();
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  showToDoList(currentValue);
  todoInput.value = "";
}
function loadToDos() {
  const currentToDo = localStorage.getItem(TODOS_LS);
  if(currentToDo !== null) {
    const parsedToDo = JSON.parse(currentToDo);
    parsedToDo.forEach(el => {
      showToDoList(el.text);
    });
  }
}
function init() {
  loadToDos();
  todoForm.addEventListener("submit", handleSubmit);
}

init();