// ! excellent number app


//let sayi = Number(prompt("bir sayı giriniz"));


function isNumber(sayi) {
    let ortaToplam = 0;
    let toplam = 0;
    let i = 1;

    for (i = 1; i <= (sayi / 2); i++) {

        if (sayi % i == 0) {
            ortaToplam += i;
        }
    }
    toplam = ortaToplam + sayi;

    if (toplam == sayi * 2) {

        console.log(sayi + " sayısı mükemmel bir sayıdır.")

    } else {
        console.log(sayi + " sayısı mükemmel bir sayı değildir.")
    }
}

isNumber(9);
isNumber(496);
isNumber(28);
isNumber(18);
isNumber(6);