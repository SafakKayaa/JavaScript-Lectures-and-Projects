
sayilar = [1, 2, 3, 4, "şafak", 5, 6,];



sayilar[sayilar.length - 1] = "mehmet";

console.log(sayilar[6]);


let karisikDizi = [1, 1.24, null, false, undefined, "şafak"];

console.log(karisikDizi[5]);

console.clear();

// Array Methods

let cars = ["bmw", "toyota", "renault", "mercedes", "porsche"];

console.log(cars.length);

//push
let diziUzunluk = cars.push("opel");
console.log(cars);
console.log(diziUzunluk);

console.clear();

//unshift

let x = cars.unshift("hundai");
console.log(cars);
console.log(x);

//pop

let satilanAraba = cars.pop();
console.log(cars);
console.log(satilanAraba);

console.clear();
//shift

let tukenenAraba = cars.shift();
console.log(cars);
console.log(tukenenAraba);

//splice
console.clear();

console.log(cars);
let kesilenDizi = cars.splice(0, 4, "lamborgini");
console.log(cars);
console.log(kesilenDizi);

cars.splice(1, 0, "renault");
console.log(cars);

console.clear();
//toString

// let carsString = cars.toString();

// console.log(carsString);

//join metod
console.clear();
let ayrikcars = cars.join(",");
console.log(ayrikcars);

//concat
console.clear();
console.log(cars);
let newCars = ["audi", "citroen", "ferrari"];

let birlesikCars = cars.concat(newCars);
console.log(birlesikCars);
console.clear();
//slice
let slicedCars = birlesikCars.slice(2, 5);
console.log(slicedCars);
console.clear();

//reverse
console.log(cars);
let reversedCars = cars.reverse();
console.log(reversedCars);

//split 
let takimlar = "fenerbahce, galatasaray, besiktas";
let yenitakimlar = takimlar.split(",",2);
console.log(yenitakimlar);

//indexof

let ferrariIndex = birlesikCars.indexOf("ferrari");
console.log(ferrariIndex);

//include
let varMi = birlesikCars.includes("ferrari")

if(varMi) {
    console.log("bu arac var");
}else {
    console.log("bu arac kalmadı");

}

















