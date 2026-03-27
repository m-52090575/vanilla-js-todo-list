let main = document.getElementById("main");
let taskList = document.getElementById("task-list");

function createLi(input) {
  let li = document.createElement("li");

  let span = document.createElement("span");
  span.textContent = input;

  let editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", editTodo);

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("deletebtn");
  deleteButton.addEventListener("click", deleteParent);
  li.append(span, editButton, deleteButton);
  return li;
}

function deleteParent(event) {
  event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}

function editTodo(event) {
  let oldTodo = event.target.parentNode.children[0].textContent;
  let newTodo = prompt("Edit Todo", oldTodo);
  if (newTodo !== "" && newTodo != null) {
    let li = createLi(newTodo);
    event.target.parentNode.replaceWith(li)
  }
}

main.addEventListener("submit", (event) => {
  event.preventDefault();
  let formInput = main.getElementsByTagName('input')[0].value;
  if (formInput !== "") {
    let li = createLi(formInput);
    taskList.append(li);

    main.getElementsByTagName('input')[0].value = "";
  }
});

let deletebtns = main.getElementsByClassName("deletebtn");
for (var i = 0; i < deletebtns.length; i++) {
  deletebtns[i].addEventListener("click", deleteParent);
}

let editbtns = main.getElementsByClassName("editbtn");
for (var i = 0; i < editbtns.length; i++) {
  editbtns[i].addEventListener("click", editTodo);
}
