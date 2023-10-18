// ! gas station example

const yeniSatir = "\r\n"
let dizel = 24.53, benzin = 22.25, lpg = 11.1;

let yakitTipi = Number(prompt("lütfen yakıt tipini giriniz!" + yeniSatir +
    "1. dizel" + yeniSatir +
    "2. benzin" + yeniSatir +
    "3. lpg"));

let price;
let kalanBakiye;

if (yakitTipi == 1 || yakitTipi == 2 || yakitTipi == 3) {
    let bakiye = Number(prompt("lütfen bakiyenizi giriniz!"));
    let litre = Number(prompt("lütfen satın almak istediğiniz litre miktarını giriniz"));


    if (yakitTipi == 1) {
        price = dizel * litre;
        kalanBakiye = bakiye - price;
        if (bakiye >= price) {
            console.log("dizel başarıyla alındı, ücret: " + price + ", kalan bakiyeniz: " + kalanBakiye)
        } else {
            console.log("bakiyeniz yeterli değil :(")
        }

    } else if (yakitTipi == 2) {
        price = benzin * litre;
        kalanBakiye = bakiye - price;

        if (bakiye >= price) {
            console.log("benzin başarıyla alındı, ücret: " + price + ", kalan bakiyeniz: " + kalanBakiye)
        }
        else {
            console.log("bakiyeniz yeterli değil :(")
        }

    } else if (yakitTipi == 3) {
        price = lpg * litre;
        kalanBakiye = bakiye - price;

        if (bakiye >= price) {
            console.log("lpg başarıyla alındı, ücret: " + price + ", kalan bakiyeniz: " + kalanBakiye)
        }
        else {
            console.log("bakiyeniz yeterli değil :(")
        }

    }




}

else {
    alert("Lütfen geçerli bir yakıt tipi seçiniz ")
};

