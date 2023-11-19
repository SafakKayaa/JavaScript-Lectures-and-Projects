console.log("şafak kaya");


console.clear();

let a = 5;
//let b =Number("10");

let b = "15";

b = parseInt(b);

console.log(typeof b);
console.log(a + b);

console.clear();


//let x = String(55); 
let x = (55).toString();

console.log(typeof x);
console.log(x);


function rastgeleSayi() {
    // Math.random() 0 ile 1 arasında rastgele bir ondalık sayı döndürür.
    // Çarpma işlemi ile istediğimiz aralıkta bir sayı elde ederiz.
    // Math.floor() fonksiyonu ise bir sayının aşağıya doğru yuvarlanmış tam sayısını verir.
    return Math.floor(Math.random() * 5) + 1;
}

// Fonksiyonu kullanarak rastgele bir sayı elde edebilirsiniz.
var randomSayi = rastgeleSayi();
console.log(randomSayi);


