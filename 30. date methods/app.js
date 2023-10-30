
let tarih = new Date();

// console.log(tarih.getFullYear());
// console.log(tarih.getDay());
// console.log(tarih.getDate());
// console.log(tarih.getHours());
// console.log(tarih.getMilliseconds());

console.log(tarih.getMonth());
console.log(tarih.toLocaleDateString());
console.log(tarih.toLocaleTimeString());
console.log(tarih.toLocaleString());


console.log(tarih);
tarih.setDate(30);
console.log(tarih);
console.clear();


tarih.setHours(tarih.getHours() + 2);

console.log(tarih);

tarih = new Date(1993,0,13,10,30,20);
console.log(tarih);



