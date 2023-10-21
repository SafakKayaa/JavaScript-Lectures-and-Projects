

function convertDecimalToBinary(number) {

    let binary = "";
    let kalan;
    while (true) {
        kalan = number % 2;
        binary += kalan.toString();
        number = Math.floor(number / 2);
        if (number == 1) {
            //artık bölmek yok. Döngüden çıkıyoruz.
            binary += 1;
            break;
        }
    }
    let sonuc = reverse(binary);
    console.log(sonuc);
}



function reverse(binary) {

    let reverseBinary = "";
    for (let i = binary.length - 1; i >= 0; i--) {
        reverseBinary += binary.charAt(i);
    }
    return reverseBinary;

}


convertDecimalToBinary(25);
convertDecimalToBinary(6);


