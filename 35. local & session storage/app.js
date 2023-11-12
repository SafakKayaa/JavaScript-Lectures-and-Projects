
// sessionStorage.setItem("150", "şafak");
// sessionStorage.setItem(true, 150);

// // sessionStorage.removeItem(true)

// // const value = sessionStorage.getItem(true);

// // console.log(value);
// // sessionStorage.clear();

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


runEvents();

function runEvents() {
  form.addEventListener("submit", addTodo);

}

function addTodo(e) {
  const inputText = addInput.value.trim();
  if (inputText == null || inputText == "") {
    alert("Lütfen boş bırakmayınız!");
  } else {
    //Arayüze ekleme
    addTodoToUI(inputText);
  }

  //storage ekleme
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

//! neden yazmış ki bunu:  addInput.value = "";
}