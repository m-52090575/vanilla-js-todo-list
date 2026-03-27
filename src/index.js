let main = document.getElementById("main");
let taskList = document.getElementById("task-list");

main.addEventListener("submit", (event) => {
  event.preventDefault();
  let formInput = main.getElementsByTagName('input')[0].value;
  if (formInput !== "") {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = formInput;

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", editTodo);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deletebtn");
    deleteButton.addEventListener("click", deleteParent);
    li.append(span, editButton, deleteButton);


    taskList.append(li);

    main.getElementsByTagName('input')[0].value = "";
  }
});

let deletebtns = main.getElementsByClassName("deletebtn");
for (var i = 0; i < deletebtns.length; i++) {
  deletebtns[i].addEventListener("click", deleteParent);
}

function deleteParent(event) {
  event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}

let editbtns = main.getElementsByClassName("editbtn");
for (var i = 0; i < editbtns.length; i++) {
  editbtns[i].addEventListener("click", editTodo);
}

function editTodo(event) {
  let newTodo = prompt("Edit Todo");
  event.target.parentNode.textContent = newTodo;
}