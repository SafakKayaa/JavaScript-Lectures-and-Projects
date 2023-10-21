// ! exam application

let turkceDogru, turkceYanlis = 0;
let matematikDogru, matematikYanlis = 0;
let sosyalDogru, sosyalYanlis = 0;
let fenDogru, fenYanlis = 0;

const yeniSatir = "\r\n";

let mesaj = "Tyt uygulamasına hoşgeldiniz." + yeniSatir +
    "1. tyt puanımı hesapla" + yeniSatir +
    "2. çıkış yap"

let secim = Number(prompt(mesaj));

switch (secim) {
    case (1):
        turkceDogru = Number(prompt("Türkçe doğru sayınızı giriniz."));
        turkceYanlis = Number(prompt("Türkçe yanlis sayınızı giriniz."));
        matematikDogru = Number(prompt("matematik doğru sayınızı giriniz."));
        matematikYanlis = Number(prompt("matematik yanlis sayınızı giriniz."));
        sosyalDogru = Number(prompt("sosyal doğru sayınızı giriniz."));
        sosyalYanlis = Number(prompt("sosyal yanlis sayınızı giriniz."));
        fenDogru = Number(prompt("fen doğru sayınızı giriniz."));
        fenYanlis = Number(prompt("fen yanlis sayınızı giriniz."));
        let okulPuani = Number(prompt("okul puanınızı giriniz."))

        let toplamDogru = turkceDogru + matematikDogru + sosyalDogru + fenDogru;
        let toplamYanlis = turkceYanlis + matematikYanlis + sosyalYanlis + fenYanlis;
        let sinavPuan = ((toplamDogru - (toplamYanlis / 4)) * 4) + okulPuani + 100;
        console.log("TYT puanınız: " + sinavPuan);
        break;
    case (2):
        console.log("çıkış başarıyla yapılmıştır")
        break;
    default:
        alert("Yanlış tuşlama yaptınız. Lütfen 1 ya da 2yi tuşlayınız!")
}   


