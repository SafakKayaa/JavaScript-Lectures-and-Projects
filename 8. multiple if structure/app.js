let isim = prompt("Lütfen isminizi giriniz");
let tckn = prompt("Lütfen tckn nonuzu tuşlayınız");


// function kontrol(isim, tckn) {
//     if (isim == "") {
//         console.log("Lütfen isim alanını boş bırakmayınız!");
//         return;
//     }
//     else {
//         if (tckn.length !== 11) {
//             console.log("lütfen tcknyi 11 karakter olarak giriniz");
//             return;
//         } else {
//             console.log("isim ve tckn başarılı bir şekilde girildi. ")
//         }
//     }
// }

// kontrol(isim, tckn);

function kontrolEt2(isim, tckn) {
    if (isim !== "") {
        if (tckn.length == 11) {
            console.log("isim ve tckn başarılı bir şekilde girildi.")
        }
        else {
            console.log("tcknyu 11 haneli giriniz")
        }
    }
    else {
        console.log("lütfen isim giriniz")
    }
}

kontrolEt2(isim, tckn);