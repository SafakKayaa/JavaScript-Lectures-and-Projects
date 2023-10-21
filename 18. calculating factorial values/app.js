// * calculating factorial values

let sayi = Number(prompt("faktoriyelini almak istediğiniz sayıyı giriniz"));
let carpim = 1; 

for(let i=1; i<=sayi; i++) { 

    carpim*=i;
}

console.log("faktoriyel : " + carpim);
