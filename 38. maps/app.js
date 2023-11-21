//! Maps

 const map1 = new Map();


 map1.set(34,"istanbul");
 map1.set(6,"ankara");
 map1.set(35,"izmir");

// console.log(map1);

// let donenDeger = map1.get(35);
// console.log(donenDeger);



// let value = map1.size;
// let value = map1.delete(6);
// console.log(value);
// console.log(map1);

// console.log(map1.has(6));
// console.clear();


// for([key,value] of map1) { 
//   console.log(key, value);
// }



const keys= Array.from(map1.keys());

// console.log(keys);

keys.forEach(key => {
  console.log(key, map1.get(key));
});


