let main = document.getElementById("main");
let taskList = document.getElementById("task-list");

function deleteTodo(event) {
  let li = event.target.parentNode.parentNode;
  li.parentNode.removeChild(li);
}

function editTodo(event) {
  let li = event.target.parentNode.parentNode;
  let oldTodo = li.children[0].textContent;
  let newTodo = prompt("Edit Todo", oldTodo);
  if (newTodo != null && newTodo !== "") {
    li.children[0].textContent = newTodo;
  }
}

main.addEventListener("submit", (event) => {
  event.preventDefault();
  let formInput = main.getElementsByTagName('input')[0].value;
  if (formInput !== "") {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = formInput;

    let div = document.createElement("div");
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", editTodo);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deletebtn");
    deleteButton.addEventListener("click", deleteTodo);
    div.append(editButton, " ", deleteButton);

    li.append(span, div);


    taskList.append(li);

    main.getElementsByTagName('input')[0].value = "";
  }
});

let deletebtns = main.getElementsByClassName("deletebtn");
for (var i = 0; i < deletebtns.length; i++) {
  deletebtns[i].addEventListener("click", deleteTodo);
}

let editbtns = main.getElementsByClassName("editbtn");
for (var i = 0; i < editbtns.length; i++) {
  editbtns[i].addEventListener("click", editTodo);
}
