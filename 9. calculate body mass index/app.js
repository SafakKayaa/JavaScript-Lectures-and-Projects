// ! body mass index

let kilo = Number(prompt("kilonuzu giriniz"));
let height = Number(prompt("boyunuzu metre cinsinden giriniz"));
let bmi = kilo / (height * height);


if (bmi < 18.5) {
    console.log("ideal kilonun altındasınız, " + bmi);
} else if (18.5 <= bmi && bmi <= 24.9) {
    console.log("ideal kilodasınız, " + bmi);
} else if (25 <= bmi && bmi <= 29.9) {
    console.log("ideal kilonun üstündesiniz, " + bmi);
} else if (30 <= bmi && bmi <= 39.9) {
    console.log("ideal kilonun çok üstündesiniz, yani obezsiniz, " + bmi);
} else if (bmi >= 40) {
    console.log("ideal kilonun çok üstündesiniz, yani morbid obezsiniz, " + bmi);
}


