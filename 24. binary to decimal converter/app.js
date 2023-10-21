
let binary = "10001111111111";

function convertBinaryToDecimal(binary) {
    let toplam = 0;
    let j = 0;
    for (let i = binary.length - 1; i >= 0; i--) {

        toplam += Number(binary.charAt(i)) * (2 ** j);
        j++;
    }

    console.log(toplam);
}


convertBinaryToDecimal(binary);


