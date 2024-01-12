const list = document.querySelector(".todo-container--create");
const todolist = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-text");
const listFooter = document.querySelector(".list-footer");

list.addEventListener("submit", function (event) {
  event.preventDefault();
  if (todoInput.dataset.todoid) {
    let listElement = document.querySelector(
      `[data-id="${todoInput.dataset.todoid}"]>p`
    );
    listElement.textContent = todoInput.value;
  } else {
    createList();
  }
});

let id = 1;
function createList() {
  if (todoInput.value) {
    const li = document.createElement("li");
    li.classList.add("todo-list--item");
    li.innerHTML = `
      <input type="checkbox" class="todo-checkbox active-checkbox" onclick="updateStatus(this)" />
      <p class="todo-list--about" >${todoInput.value}</p>
      <img src="./assets/image/edit.svg" alt="edit image" data-id="${id}" onclick="editTodo(this)">
      <img src="./assets/image/remove.svg" alt="remove image" onclick="removeList(this)">
      `;
    li.setAttribute("data-id", id);
    todolist.prepend(li);
    todoInput.value = "";
    listFooter.style.display = "flex";
    id++;
  }
}

function updateStatus(todoText) {
  // console.log(todoText.checked);
  if (todoText.checked) {
    todoText.nextElementSibling.classList.add("txtDecoration-active");
  } else {
    todoText.nextElementSibling.classList.remove("txtDecoration-activeactive");
  }
}
function removeList(event) {
  event.parentElement.remove();
}
function editTodo(editTodoImg) {
  let todoText = editTodoImg.previousElementSibling;
  // console.log(todoText);
  // console.log(editTodoImg.dataset.id);
  todoInput.setAttribute("data-todoid", editTodoImg.parentElement.dataset.id);
  todoInput.value = todoText.textContent;
}

// Dark theme
let backgroundImg = document.querySelector(".header-section--image img");
console.log(backgroundImg);
const themeIcon = document.querySelector(".section-about--icon");
const root = document.querySelector(":root");
themeIcon.addEventListener("click", function () {
  document.body.classList.toggle("active");
  if (document.body.classList.contains("active")) {
    themeIcon.querySelector("img").src = "./assets/image/sun.svg";
    backgroundImg.src = "./assets/image/dark-bg.png";
  } else {
    themeIcon.querySelector("img").src = "./assets/image/moon.svg";
    backgroundImg.src = "./assets/image/todo-list.png";
  }
});
