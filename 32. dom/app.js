

// let linkler = document.links;

// forms = document.forms.item(1);

// console.log(forms);

let button = document.getElementById("todoAddButton");




console.log(button);
console.log(button.getAttribute("class"));
// console.log(button.className);

console.log(button.classList[3]);

const buttonText = button.textContent;

console.log(buttonText);

console.clear();

button.textContent = "<b>to do ekleyin <b>";
button.innerHTML = "<b>todo ekleyin <b>"

const toDoList = Array.from(document.getElementsByClassName("list-group-item"));

toDoList.forEach(todo => {
  console.log(todo.textContent);
});


const clearButton = document.querySelector("#clearButton");
console.log(clearButton);

console.clear();

// const lis = document.querySelectorAll("li")[3];
// console.log(lis);

console.clear();

// const lis = document.querySelectorAll("li")[1];
// console.log(lis);

// const lis = document.querySelectorAll("li:last-child");
// console.log(lis);


const lis = Array.from(document.querySelectorAll("li:nth-child(even)"));
console.log(lis);

lis.forEach(function (li) {
  li.style.color = "tomato";
})

// const li2 = document.querySelectorAll("li:nth-child(2)");

const li2 = document.querySelectorAll("li")[1];

li2.style.background = "black";

console.clear();


const todo1 = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");
const card = document.getElementsByClassName("card");
// const todoLastChild = document.querySelector(".list-group-item:nth-child(4)");
const todoLastChild = document.querySelectorAll(".list-group-item")[3];
const row = document.querySelector(".row");

let value;

value = todoList.children[1];

value = todo1.previousElementSibling;


let baslik = row.children[0].children[3].children[0];
baslik.textContent = "değişmiş H5";

console.clear();

const link = document.createElement("a");
link.id = "goToMyBlogPage";
link.className = "btn btn-primary mt-3 btn-sm btn-dark";
link.innerHTML = "kişisel websiteme git";
link.style.color = "white";


const cardBody = document.querySelectorAll(".card-body")[1];

cardBody.appendChild(link);



{/* <li class="list-group-item d-flex justify-content-between">
                Todo 3
                <a href="#" class="delete-item">
                  <i class="fa fa-remove"></i>
                </a>
              </li> */}


const li = document.createElement("li");
li.innerHTML = "todo 5";
li.style.listStyle = "none";
li.style.background = "turquoise"
li.style.color = "white";
li.className = "list-group-item d-flex justify-content-between "

const a = document.createElement("a");
a.className = "delete-item"
li.appendChild(a);

const i = document.createElement("i");
i.className = "fa fa-remove";
a.appendChild(i);



// console.log(a);

const ul = document.querySelector("ul");
ul.appendChild(li);

// ul.removeChild(li);

// ul.removeChild(ul.firstElementChild.nextElementSibling)


const newTitle = document.createElement("h2");
newTitle.textContent = "Yeni Başlık"

const oldTitle = cardBody.children[0];

cardBody.replaceChild(newTitle, oldTitle);


clearButton.addEventListener("click", removeLis);

function removeLis() {
  lis.forEach(function (li) {
    li.remove();
  })
}

todo1.addEventListener("click", showEvent)

function showEvent(e) {
  e.target.style.background = "yellow";
}

// const products = [
//   { name: "sports car" },
//   { name: "laptop" },
//   { name: "phone" },
// ];

// let editedProducts = products.map((product) => {
//   return product.price = 100;
// });

// console.log(editedProducts);
// console.log(products);

