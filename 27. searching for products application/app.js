// searching for products application


let product1 = {
    isim: "ACER swift",
    kategori: "teknoloji",
    fiyat: 6.219
}

let product2 = {
    isim: "ACER Nitro 5 ",
    kategori: "teknoloji",
    fiyat: 15.475
}

let product3 = {
    isim: "Lenovo V15",
    kategori: "teknoloji",
    fiyat: 10.999
}

let product4 = {
    isim: "Lenovo V14",
    kategori: "teknoloji",
    fiyat: 4.399
}

let product5 = {
    isim: "Lenovo Ideapad",
    kategori: "teknoloji",
    fiyat: 4.510
}


let urunler = [product1, product2, product3, product4, product5];
let urunler2 = [product2, product3, product4];

let arananIsim = (prompt("bir ürün adı giriniz")).toLowerCase();
let filtreliUrunler = []; 


function arananUrunuYazdir(urunler) {
    urunler.forEach(function (product) {
        sonuc = product.isim.toLowerCase().includes(arananIsim);
        if (sonuc) {
            console.log(product);
        }

    })
}

arananUrunuYazdir(urunler);
console.log("--------------------------------------------------------------");
arananUrunuYazdir(urunler2);



