
const yeniSatir = "\r\n"

// function bil(yas, memleket) {

//     alert("yasin : " + yas + yeniSatir +
//         "memleketin : " + memleket + yeniSatir
//         + "nasıl bildim ama?")
// }


//bil(27,"sinop");

//bil(27,"manisa");

// let yas = Number(prompt("yasinizi giriniz"));

// function kontrolEt(yas) {
//     if (yas > 18) {
//         console.log("ehliyet alabilirsin")
//     }
//     else {
//         console.log("ehliyet alamazsın")

//     }
// }

// kontrolEt(yas);

let sayi = Number(prompt("sayı gir"));

function cube(sayi) { 
    let x = sayi**3;
    console.log(x);
    return x;
}

let donenDeger = cube(sayi);
let sonuc = donenDeger * 2;
console.log(sonuc);



