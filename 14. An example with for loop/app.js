
/*  for (let i = 1; i <= 10; i++) {
    console.log(i)
}
 
*/
//1den 10 a kadar ciftler

console.clear();


for (let i = 1; i <= 10; i++) {
    sonuc = i % 2 == 0;


    if (sonuc) {
        console.log(i);

    }
}

for (let i = 4; i <= 10; i += 2) {

    console.log(i);

}

for (let i = 3; i <= 11; i += 2) {
    console.log(i);
}


console.clear();

let toplam =0;

for (let i = 50; i >= 1; i--) {

    toplam += i;
}
console.log(Number(toplam));
