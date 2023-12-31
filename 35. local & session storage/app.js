
// sessionStorage.setItem("150", "şafak");
// sessionStorage.setItem(true, 150);

// sessionStorage.removeItem(true)

// const value = sessionStorage.getItem(true);

// console.log(value);
// sessionStorage.clear();

// const sınıf = ["lütfü", "şafak", "ömer", "kemal"];
// sessionStorage.setItem("sınıf", JSON.stringify(sınıf));

//Tüm Elementleri Seçmek

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");
let todos = [];

runEvents();

function runEvents() {
  form.addEventListener("submit", addTodo);
  document.addEventListener("DOMContentLoaded", pageLoaded);
  secondCardBody.addEventListener("click", removeTodoFromUI);
  clearButton.addEventListener("click", removeAllTodos);
  filterInput.addEventListener("keyup", filter);
}

function addTodo(e) {
  const inputText = addInput.value.trim();
  if (inputText == null || inputText == "") {
    showAlert("danger", "Lütfen boş değer girmeyiniz!")
  } else {
    //Arayüze ekleme
    addTodoToUI(inputText);
    addToDoToStorage(inputText);
    showAlert("success", "Todo başarıyla eklendi");
  }
  e.preventDefault();
}

function addTodoToUI(newTodo) {

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";
  li.textContent = newTodo;

  const a = document.createElement("a");
  a.href = "#";
  a.className = "delete-item";

  const i = document.createElement("i");
  i.className = "fa fa-remove";

  a.appendChild(i);
  li.appendChild(a);
  todoList.appendChild(li);

  addInput.value = "";
}

function addToDoToStorage(newTodo) {
  checkToDosFromStorage();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}


function checkToDosFromStorage() {
  if (localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
}


function showAlert(type, message) {
  const div = document.createElement("div");
  // div.className = "alert alert-" + type;
  div.className = `alert alert-${type}`; //literal template
  div.textContent = message;
  firstCardBody.appendChild(div);
  setTimeout(() => {
    div.remove();
  }, 2500);
}

function pageLoaded() {
  checkToDosFromStorage();
  todos.forEach(todo => {
    addTodoToUI(todo);
  });
}

function removeTodoFromUI(e) {
  if (e.target.className === "fa fa-remove") {
    const todo = e.target.parentElement.parentElement;
    todo.remove();
    showAlert("success", "todo başarıyla silindi");
    removeTodoFromStorage(todo.textContent);
  }
}

function removeTodoFromStorage(removeTodo) {
  checkToDosFromStorage();
  todos.forEach((todo, index) => {
    if (removeTodo === todo) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos))

}

function removeAllTodos() {
  const varOlanTodoListesi = document.querySelectorAll(".list-group-item");
  varOlanTodoListesi.forEach(todo => {
    todo.remove();
  });
  localStorage.clear();
}

function filter(e) {
  const filterValue = e.target.value.toUpperCase().trim();
  const todoListesi = document.querySelectorAll(".list-group-item");

  todoListesi.forEach(todo => {
    if (todo.textContent.toUpperCase().trim().includes(filterValue)) {
      todo.setAttribute("style", "display:block");
    } else {
      todo.setAttribute("style", "display:none !important");
    }
  });

}
