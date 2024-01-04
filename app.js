const list = document.querySelector(".todo-container--create");
const todolist = document.querySelector(".todo-list");
const txtbutton = document.querySelector(".todo-text");
const listFooter = document.querySelector(".list-footer");

console.log(txtbutton.value);
list.addEventListener("submit", function (x) {
  x.preventDefault();
  // alert()
  CreateList();
});

function CreateList() {
  const li = document.createElement("li");
  li.classList.add("todo-list--item");
  li.innerHTML = `
    <input type="checkbox" class="todo-checkbox active-checkbox"  />
    <p class="todo-list--about" onclick="TxtDecoration(this)">${txtbutton.value}</p>
    <img src="./assets/image/remove.svg" alt="" / onclick="RemoveList(this)">
    `;
  todolist.appendChild(li);
  txtbutton.value = "";
  listFooter.style.display = "flex";
}

function TxtDecoration(event) {
  event.classList.toggle("active");
  // const cancel=document.querySelector(".todo-list--item img")
  // cancel.style.display="block";
}
function RemoveList(event){
  event.parentElement.remove();
}