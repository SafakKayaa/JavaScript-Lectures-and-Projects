//! Spread Operator

// let numbers = [10, 20, 30, 40];

// function add(a, b, c, d) {
//   console.log(a + b + c + d);
// }

// add(...numbers);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// [a, b, c, d, ...kalanSayilar] = numbers;

// console.log(a, b, c);
// console.log(...kalanSayilar);

// console.clear();


// let takımlar = ["fener", "gs", "bjk", "adanaspor", "trabzonspor", "eskişehir"];
// let array2 = [];

// const array2 = [...array1];
// console.log(array2);


// ! for in & for of loops 

// const takımlar = ["fener", "gs", "bjk", "adanaspor", "trabzonspor", "eskişehir"];

// for(let takım in takımlar) { 
//   console.log(takım , takımlar[takım]);
// }

// console.clear();

// for(takım of takımlar){
//   console.log(takım, takımlar.indexOf(takım))
// }

// const obj = { a: 1, b: 2, c: 3 };

// for (const key in obj) {
//   console.log(key, obj[key]);
// }

// const arr = [1, 2, 3];

// for (const element of arr) {
//   console.log(element);
// }


const arr = [1, 2, 3];
for (const [index, element] of arr.entries()) {
  console.log(index, element);
}
