// ! days of the week example


const yeniSatir = "\r\n"
let metin = "Lütfen rakamlarına göre gün seçiniz" + yeniSatir +
    "1-Pazartesi" + yeniSatir +
    "2-Sali" + yeniSatir +
    "3-Çarşamba" + yeniSatir +
    "4-Perşembe" + yeniSatir +
    "5-cuma" + yeniSatir +
    "6-cumartesi" + yeniSatir +
    "7- pazar" + yeniSatir;

let alinanSayi = Number(prompt(metin));

switch (alinanSayi) {
    case 1:
        console.log("pazartesi gününü seçtiniz!")
        break;

    case 2:
        console.log("sali gününü seçtiniz!")
        break;


    case 3:
        console.log("çarşamba gününü seçtiniz!")
        break;

    case 4:
        console.log("perşembe gününü seçtiniz!")
        break;

    case 5:
        console.log("cuma gününü seçtiniz!")
        break;

    case 6:
        console.log("cumartesi gününü seçtiniz!")
        break;

    case 7:
        console.log("pazar gününü seçtiniz!")
        break;

    default:
        console.log("Lütfen 1 ile 7 arasında tuşlama yapınız!!!!")
}
