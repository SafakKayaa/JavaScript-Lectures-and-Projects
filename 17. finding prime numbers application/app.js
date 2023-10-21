

// 14     2 , 3 , 4 , 5 , 6 , 7  ...

let sayi = Number(prompt("asal olup olmadıgını anlamak için bir sayı giriniz"));
sonuc = true; // ! asal olmasına true dedik

// for (let i = 2; i <= Math.floor((sayi / 2)); i++) {
//     if (sayi % i == 0) {
//         sonuc = false;
//         break;
//     }
// }

// if (sonuc) {
//     console.log(sayi + " asaldır")
// } else {
//     console.log(sayi + " asal değildir.")
// }


let kalan;

for (let i = 2; i <= Math.floor((sayi / 2)); i++) {
    kalan = sayi % i;
    if (kalan == 0) {
        console.log("sayı asal değildir");
        break;
    }

}

if (kalan!==0) {
    console.log("sayı asaldır");
}