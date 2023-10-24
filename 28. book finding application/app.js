// * a book finding app

let book1 = {
    isim: "her şeyi düşünme",
    yazar: "Anna Bogel",
    fiyat: 25,
    raf: "1.5 Raf"
}

let book2 = {
    isim: "Hiçbir karşılaşma tesadüf değildir",
    yazar: "Hakan Mengüç",
    fiyat: 32,
    raf: "2.3 Raf"
}

let book3 = {
    isim: "insan neyle yaşar",
    yazar: "Tolstoy",
    fiyat: 34,
    raf: "3.4 Raf"
}

let book4 = {
    isim: "Zafer Sızlanarak Kazanılmaz",
    yazar: "Haluk Tatar",
    fiyat: 45,
    raf: "4.5 Raf"

}

let book5 = {
    isim: "şeker portakalı",
    yazar: "Jose mauro de vasconcelos",
    fiyat: 60,
    raf: "5.3 Raf"
}



let kitaplar = [book1, book2, book3, book4, book5];

let raf11 = { kod: "1.1 Raf", goster: false }
let raf12 = { kod: "1.2 Raf", goster: false }
let raf13 = { kod: "1.3 Raf", goster: false }
let raf14 = { kod: "1.4 Raf", goster: false }
let raf15 = { kod: "1.5 Raf", goster: false }

let raf21 = { kod: "2.1 Raf", goster: false }
let raf22 = { kod: "2.2 Raf", goster: false }
let raf23 = { kod: "2.3 Raf", goster: false }
let raf24 = { kod: "2.4 Raf", goster: false }
let raf25 = { kod: "2.5 Raf", goster: false }

let raf31 = { kod: "3.1 Raf", goster: false }
let raf32 = { kod: "3.2 Raf", goster: false }
let raf33 = { kod: "3.3 Raf", goster: false }
let raf34 = { kod: "3.4 Raf", goster: false }
let raf35 = { kod: "3.5 Raf", goster: false }

let raf41 = { kod: "4.1 Raf", goster: false }
let raf42 = { kod: "4.2 Raf", goster: false }
let raf43 = { kod: "4.3 Raf", goster: false }
let raf44 = { kod: "4.4 Raf", goster: false }
let raf45 = { kod: "4.5 Raf", goster: false }

let raf51 = { kod: "5.1 Raf", goster: false }
let raf52 = { kod: "5.2 Raf", goster: false }
let raf53 = { kod: "5.3 Raf", goster: false }
let raf54 = { kod: "5.4 Raf", goster: false }
let raf55 = { kod: "5.5 Raf", goster: false }


let raflar = [
    [raf51, raf52, raf53, raf54, raf55],
    [raf41, raf42, raf43, raf44, raf45],
    [raf31, raf32, raf33, raf34, raf35],
    [raf21, raf22, raf23, raf24, raf25],
    [raf11, raf12, raf13, raf14, raf15]
]


function raflariOlustur() {
    let satir = "";
    console.clear();
    for (let i = 0; i < raflar.length; i++) {

        for (let j = 0; j < 5; j++) {
            satir += "|" + (raflar[i][j].goster ? raflar[i][j].kod : "---") + "|";

        }
        console.log(satir);
        console.log("-------------------------");
        satir = "";
    }
}

raflariOlustur();


function findTheBook(kitapIsmi) {
    let rafKodu = null;
    kitaplar.forEach(function (kitap) {

        if (kitap.isim.toLowerCase().includes(girilenKitap.toLowerCase())) {
            rafKodu = kitap.raf;

        }
    })
    return rafKodu;
}

function writeTheBook(kitap) {
    kitaplar.forEach(function (kitap) {

        if (kitap.isim.toLowerCase().includes(girilenKitap.toLowerCase())) {
            console.log(kitap);
        }
    })
    return kitap;
}

function raftaGoster(rafKodu) {
    for (let i = 0; i < raflar.length; i++) {

        for (let j = 0; j < 5; j++) {
            if (raflar[i][j].kod == rafKodu) {
                raflar[i][j].goster = true;
                break;
            }

        }
    }

}


let girilenKitap = prompt("lütfen rafını öğrenmek istediğiniz kitabın ismini giriniz");
let rafKodu = findTheBook();

if (rafKodu != null) {
    console.log("kitap kütüphanemizde vardır.");
    raftaGoster(rafKodu);
    raflariOlustur();
    writeTheBook();


} else {
    console.log("kitap kütüphanemizde yoktur.")
}

