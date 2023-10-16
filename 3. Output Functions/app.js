// Yorum satırı

// ? başka bir tane yorum satırı
// ! başka bir tane daha
// * farklı bir renkte daha


// document.write("Hello World! <br>");
// document.write("Şafak Kaya");


console.log("Hello World!");
console.log(25);
console.log(3.42);
console.log({ name: "safak", surname: "kaya" });

console.clear();

let: a = 5;
let: b = 10;

console.log(a + b);
console.log(a * b);

console.log(
    "iki sayının toplamı: ", (a + b));

console.clear();

// ? Alert metodu nasıl yapılır?

console.log(window);

console.log(document.location.host);

// alert("Merhaba");

// alert(a * b);

// alert("iki sayının çarpımı: " + (a * b));

console.log(window);


console.error("hata oluştu");

// yorum yapıyorum

/* bir
yorum
daha

? anladınız mı
! muhakkak anlayalım
TODO: buraya da yapılacaklar not edilebilir

*/

console.clear()




if (true) {
    var a = 5;

}

function method1() {
    console.log(a);
}

method1();


console.clear();


var a = 20; //Global scope


function method2() {
    var a = 10; //function scope
    if (true) {
     var b = a; // block scope
        console.log(b);

    }
}
method2();


console.clear();

function sayHi() {
    console.log("Hello Everyone!");

    if (true) {

        var b = 25;


    }
    let hru = "nasılsınız millet?"

    console.log(b)
    console.log(hru);

}

sayHi();

console.clear();

const user={
    name:"şafak", surname:"kaya"
}

//! user={}; bunu yapamazsın


user.surname="aydın";
console.log(user);


