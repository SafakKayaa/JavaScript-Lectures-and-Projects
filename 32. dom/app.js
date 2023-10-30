

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

button.textContent ="<b>to do ekleyin <b>";
button.innerHTML ="<b>todo ekleyin <b>"

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

lis.forEach(function(li){
    li.style.color = "tomato";
})

// const li2 = document.querySelectorAll("li:nth-child(2)");

const li2 = document.querySelectorAll("li")[1];

li2.style.background = "black";
console.log(li2);
