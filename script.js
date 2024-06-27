const inputBox = document.getElementById("input-Box");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
var editTodo = null;

const addTodo = () => {
  const inputText = inputBox.value;
  if (inputText.length <= 0) {
    alert("you must write something in your to do");
    return false;
  }
  if (addBtn.value === "Edit") {
    editTodo.target.previousElementSibling.innerHTML = inputText;
    addBtn.value = "Add";
    inputBox.value = "";
  }
  // creating p tag
  else {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    //   creating EditBtn
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.classList.add("btn", "editBtn");

    li.appendChild(editBtn);

    // creating Delete Btn
    const deleteBtn = document.createElement("button");

    deleteBtn.innerHTML = "Remove";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
    inputBox.value = "";
  }
};

const updateTodo = (e) => {
  //   console.log(e.target.innerHTML);//
  if (e.target.innerHTML === "Remove") {
    // console.log(e.target.parentElement);
    todoList.removeChild(e.target.parentElement);
  }
  if (e.target.innerHTML === "Edit") {
    inputBox.value = e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addBtn.value = "Edit";
    editTodo = e;
  }
};
addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", updateTodo);
