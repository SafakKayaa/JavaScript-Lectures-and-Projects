// ! while loop example

/*
let sayac=0;

while(sayac<10) {

    console.log(sayac);
    sayac++;
}


console.clear();

//1den 10a kadar ciftler

sayac=0;
while(sayac<=10) { 
    console.log(sayac);
    sayac+=2;
}


console.clear();

sayac=0;

while(true) { 
    console.log(sayac);
    sayac++;
    if(sayac==8) {
        break;
    }

}


console.clear();

//7yi yazdıracam 10a kadar. 10 dahil değil

sayac =7;
do{
    console.log("su an sayac: " + sayac);
    sayac++;
} while(sayac<10);


let yas = 23; 

do{
    console.log("Ehliyetinizi alabilirsiniz" , yas);
    yas++;
  
    
}while (yas>=23 && yas<=30)

console.clear();


*/

let sayi = 1;
let toplam = 0;

do {
    toplam += sayi;
    sayi += 2;

} while (sayi < 22)

console.log(toplam);


console.clear();

sayac = 1;
while (sayac < 12) {

    console.log(sayac);
    if (sayac == 7) {
        break;
    }
    sayac++;
}


console.clear();

i = 1;

while (i < 11) {
    i++;
    if (i > 9) {
        break;
    }
    if (i == 8) {
        continue;
    }
    console.log(i);

}

