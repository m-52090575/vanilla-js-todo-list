let main = document.getElementById("main");
let taskList = document.getElementById("task-list");

main.addEventListener("submit", (event) => {
  event.preventDefault();
  let formInput = main.getElementsByTagName('input')[0].value;
  if (formInput !== "") {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = formInput;

    let button = document.createElement("button");
    button.textContent = "Delete";
    button.classList.add("deletebtn");
    button.addEventListener("click", deleteParent);
    li.append(span, button);


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
