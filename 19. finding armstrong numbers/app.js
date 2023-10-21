// * armstrong numbers




let sayi = prompt("lütfen bir sayı giriniz");

let x = Number(sayi.charAt(0));
let y = Number(sayi.charAt(1));
let z = Number(sayi.charAt(2));
let toplam = 0;

// if (sayi == (x ** 3) + (y ** 3) + (z ** 3)) {
//     console.log("sayi armstrong sayisidir , ", sayi);
// }else {
//     console.log("sayi armstrong sayisi değildir , ", sayi);

// }


for (i = 0; i <= (sayi.length - 1); i++) {

    toplam += (sayi.charAt(i)) ** 3;

}

if (sayi == toplam) {
    console.log(sayi + " sayi armstrong sayisidir. ");
} else {
    console.log(sayi + " sayi armstrong sayisi değildir. ");

}