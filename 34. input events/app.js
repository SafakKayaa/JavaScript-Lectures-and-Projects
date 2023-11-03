const input = document.querySelector("#todoName");

input.addEventListener("focus", run);
input.addEventListener("blur", run);
input.addEventListener("copy", run);



function run(e) { 
  console.log(e.target.value)
}