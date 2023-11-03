
// document.addEventListener("keypress", run);

//  document.addEventListener("keydown", run);

// document.addEventListener("keyup", run);

// function run(e) {

// console.log(e.type);
//  console.log(e.key);
//  console.log(e.keyCode)
//   // console.log(e.which)
//   if(e.keyCode == 116) { 
//     alert("sayfa yenileme engellendi")
//   }
//   e.preventDefault();

// }

console.clear();

const cardTitle = document.querySelector(".card-title");
const input = document.querySelector("#todoName");


input.addEventListener("keyup", detect);

function detect(e) {
  // console.log(e.target.value)

  cardTitle.textContent = e.target.value
}

