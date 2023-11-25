//! Sets


const mySet = new Set();

mySet.add(3.15)
myArray = [0, 1, 2, 3, 4];
mySet.add(myArray);
mySet.add({ name: "safak", surname: "kaya" })
mySet.add("sümeyye");
// mySet.add("sümeyye");
// mySet.add("sümeyye");

mySet.delete(myArray);

console.log(mySet);
// console.log(mySet.size);

console.log(mySet.has("sümeyye"))

const anArray = Array.from(mySet);

for(value of anArray){
  value.map((eski) => [1, 2])
}








