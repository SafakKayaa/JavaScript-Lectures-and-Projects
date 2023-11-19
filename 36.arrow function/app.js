// const yazdir = () => { 
//   console.log("Merhaba");
// }

// yazdir();

// const yazdir = (firstName)=> console.log("merhaba", firstName)

// const yazdir = firstName => console.log("merhaba", firstName)

// yazdir("safak");

// Destructing Kullanımı 

// let [lang1, lang2, lang3, lang4] = ["C#", "javascript", "python"];

// let lang1 = langs[0];
// let lang2 = langs[1];

// console.log(lang1, lang2);

// let [lang1, lang2, lang3, lang4] = langs; 

// console.log(lang1, lang2, lang3, lang4);


// const hesapla = (a, b) => {
//   let toplam = a + b;
//   let carpim = a * b;
//   let dizi = [toplam, carpim]
//   return dizi;
// }

// // console.log(hesapla(2, 10));

//  let [x,y] = hesapla(2, 10);

//  console.log(x,y);

const person = {
  firstName: "safak",
  secondName: "kaya",
  salary: "50000"
}

// let { firstName: isim,secondName: soyisim, maas } = person;

// console.log(isim , soyisim, maas);


let {isim="safak", soyisim="kaya", maas="50000"} = person;

console.log(isim, soyisim);