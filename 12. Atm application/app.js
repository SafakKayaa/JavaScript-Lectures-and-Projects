// ! atm application


const yeniSatir = "\r\n"
let bakiye = 1000;
let metin = "Lütfen rakam seçerek ilgili menüye giriniz" + yeniSatir +
    "1. Bakiye görüntüleme" + yeniSatir +
    "2. Para Çekme" + yeniSatir +
    "3. Para Yatırma" + yeniSatir +
    "4. Çıkış" + yeniSatir;


let secim = Number(prompt(metin));

switch (secim) {

    case (1):
        console.log("bakiyeniz : " + bakiye);
        break;
    case (2):
        let cekilecekTutar = Number(prompt("çekmek istediğiniz tutarı giriniz."));

        if (cekilecekTutar > bakiye) {
            console.log("bu işlemi yapamazsınız. Yeterli bakiyeniz yok")

        } else {
            bakiye -= cekilecekTutar;
            console.log("yeni bakiyeniz: " + bakiye)
        }
        break;
    case (3):
        let yatirilacakTutar = Number(prompt("lütfen yatırmak istediğiniz tutarı giriniz!"));
        bakiye += yatirilacakTutar;
        console.log("yeni bakiyeniz: " + bakiye);
        break;
    case (4):
        console.log("başarılı bir şekilde çıkış yapılmıştır")
        break;
    default:
        console.log("lütfen 1 ile 4 arasında bir rakam giriniz!!!")

}
