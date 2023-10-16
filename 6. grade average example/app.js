
 let vize1 = Number(prompt("ilk vize notunuzu giriniz!"));
 let vize2 = Number(prompt("Vize 2 notunuzu giriniz"));
 let final = Number(prompt("Final notunuzu giriniz"));

 let ortalama = ((vize1*3) / 10 )+ ((vize2 * 3) / 10) + ((final * 4) / 10);


 if (ortalama >=60){
     console.log("başarıyla geçtiniz, notunuz: " , ortalama)
 }
 else {
     console.log("dersten kaldınız, notunuz: " + ortalama)
 }





