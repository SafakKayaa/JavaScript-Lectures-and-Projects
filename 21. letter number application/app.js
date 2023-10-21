let metin = "Su anda javascript çalışmaktayım";
let harf = prompt("harf giriniz");
let aranan;
let adet = 0;


function bul(harf) {

    for (let i = 0; i < metin.length; i++) {
        aranan = metin.charAt(i);
        if (aranan.toLowerCase() == harf.toLowerCase()) {
            adet += 1
        }
    }
    return adet;
}

let sonuc = bul(harf);
console.log("harf sayısı: "  + sonuc);

