// 81.Funksiyaga so’z berilsa, ushbu funksiya ushbu so’zda nechta
// bo’g’in borligini aytsin.
// function bogin(){
//     let harf=["o","o'","u","i","a","e"]
//     let soz=prompt("so'zni kiriting")
//     console.log(harf[soz] + " bo'g'in");
// }
// bogin();
// 82.Funskiyaga belgi kiritilsa ushbu belgining ASCII kodini
// qaytarsin
// function qiymat(){
//     let harf=prompt("harfni kiriting")
//     console.log(harf.charCodeAt());
// }
// qiymat();
// 83.Funksiyaga 2ta so’z beriladi, anashu 2ta so’z bir-biriga teng
// bo’lsa true qaytsin, aks holda false. Bunda ikkala so’zining katta
// yoki kichik harflarda yozilgani ahamiyatsiz deb oling.
// function tenglik(){
//     let soz1=prompt("1-so'zni kiriting")
//     let soz2=prompt("2-sozni kiriting")
//     if(soz1.length == soz2.length){
//         console.log("true");
//     }
//     else{
//         console.log("false");
//     }
// }
// tenglik();
// 84.Funksiyaga so’z berilsa, funksiya ushbu so’zining nechta
// belgidan iborat ekanligini qaytarsin. Bunda string.length
// propertisizdan foydalanish mumkin emas !!!
// function belgi(){
//     let soz=prompt("sozni kiriting")
//         let belgiSoni = 0;
//         while (soz[belgiSoni] != undefined) {
//           belgiSoni++;
//         console.log(belgiSoni);
//         }
//     }
// belgi();
// function kun(){
//     let hozirgiKasallar=+prompt("Umumiy kasallar sonini kiriting")
//     let yangiKasallar=+prompt("yangi kasallar sonini kiriting")
//     let tuzalayotganlar=+prompt("tuzalayotganlar sonini kiriting")
//     tuzalish=(hozirgiKasallar / (yangiKasallar-tuzalayotganlar))
//     console.log(Math.round(tuzalish));
// }
// kun();
// 86.Quyidagi namunani kuzatgan holda funkisya yasang.
// Namuna:
// namuna([2, 5, 3]) ᔍ [4, 10, 6]
// namuna([1, 86, -5]) ᔍ [2, 172, -10]
// namuna([5, 382, 0]) ᔍ [10, 764, 0]
// function kopaytma(){
//     let massiv=[1,2,3,4,5]
//     for(let i=0; i<massiv.length; i++){
//         console.log(massiv[i]*2);
//     }
// }
// kopaytma();
// 87.Funksiya so’zlar massivini qabul qiladi. Funksiya ana shu
// so’zlarning uzunligidan iborat bo’lgan yangi massiv qaytarsin.
// function yangiMassiv(){
//     let soz1=prompt("1-so'zni kiriting")
//     let soz2=prompt("2-so'zni kiriting")
//     let birlashma=[soz1.length, soz2.length]
//     console.log(birlashma);
// }
// yangiMassiv();
// 88.Taksi kilometriga 1000 so’mdan haq oladi. Lekin birinchi
// kilometri 4000 so’m. Agar funksiya taksiga to’langan yakuniy
// summani qabul qilsa. Funksiya taksining necha kilometr
// yurganini qaytarsin.
// function jamiYol(){
//     let summa=+prompt("berilgan summani kiriting")
//     let odatiySumma=4000
//     let yolHaqi=1000
//     let Yol=((summa - odatiySumma) / yolHaqi)+1
//     console.log(Yol + " km");
// }
// jamiYol();
// 89.Funksiya matn qabu qilsa, ushbu funksiya ushbu matnda “d”
// harfi nechi marta ishtirok etganligini qaytarsin. “d” harfining
// katta kichikligini ahamiyati yo’q
// function d() {
//     let matn=prompt("sozni kiriting")
//     let dHarfi = 0;
//     for (let i = 0; i < matn.length; i++) {
//       if (matn[i].toLowerCase() == "d") {
//         dHarfi ++;
//       }
//       else if(matn[i].toUpperCase() == "D"){
//         dHarfi ++;
//       }
//     }
//   console.log(dHarfi + " marta ishlatildi");
//   }
//   d();
// 90.Funksiya string qabul qiladi. Va har belgini orasiga bo’sh joy
// qo’yib qaytarsin.
// function boshJoy() {
//     let matn=prompt("so'zni kiriting")
//     let belgilar = matn.split('');
//     let natija = belgilar.join(' ');
//     console.log(natija);
//   }
// boshJoy();
// 92.Agar men cafedan 3ta kofe olsam yana 1ta tekinga qo’shib
// berishadi. Funksiya nechta kofe olsam meni qo’limda jami
// nechta kofe bo’lishini qaytarsin.
// function kofe(){
//     let soni=+prompt("Jami kofelar sonini kiriting")
//     let bonus=Math.floor((soni / 3))
    
//     console.log(bonus+soni);
// }
// kofe();
// 93.Funksiyaga string va son berilsa, ushbu stringning oxirigi
// belgisini funksiya son marta takrorlab qaytarib bersin
// function takrorlash(){
//     let soz=prompt("so'zni kiriting")
//     let son=+prompt("sonni kiriting")
//     console.log(son*soz.length -1);
// }
// takrorlash();
// 95.Funksiyaga massiv berilsa, ushbu funksiya massiv elementlarini barchasini yig’indisini qaytarsin.
// function yigindi(){
//     let massiv=[1,2,3,4,5,6,7,8,9]
//     let jami=0
//     for(let i=0; i<=massiv.length; i++){
//         console.log(jami+=i);
//     }
// }
// yigindi();
// 97.Doston uyidan masofalar bosib o’tadi. Uyidan yo oldinga
// yoki orqaga. Bosib o’tilgan masoflar massivi funksiya berilsa,
// funksiya Doston uyiga qaytishi uchun qancha masofa bosib
// o’tishini aytsin.
// function yol(){
//     let massiv=[1,2,3,4,5]
//     let jami=0
//     for(i=0; i<=massiv.length;i++){
//         console.log(jami+=i);
//     }
// }
// yol();
// 98.Funksiya uchburchakning tomonlari argument qilib beriladi.
// Agar ushbu berilgan tomonlardan uchburchak yasab bo’lsa
// unda funksiya true qaytarsin, aks holda false. Uchburchakning
// qoida, istalgan 2ta tomonining yig’igindisi uchunchi tomondan
// katta bo’lsagina uchburchak hosil bo’ladi
// function uchburchak(){
//     let tomon1=+prompt("1-tomonni kiriting")
//     let tomon2=+prompt("2-tomonni kiriting")
//     let tomon3=+prompt("3-tomonni kiriting")
//     if(tomon1+tomon2 > tomon3){
//         console.log("true");
//     }
//     else if(tomon1+tomon3 > tomon2){
//         console.log("true");
//     }
//     else if(tomon2+tomon3 > tomon1){
//         console.log("true");
//     }
//     else{
//         console.log("false");
//     }
// }
// uchburchak();
// 101.Funksiya butun son qabul qilsa, 1dan ushbu butun
// songacha bo’lgan sonlar yig’indisini qaytarsin
// function yigindi(){
//     let son=+prompt("sonni kiriting")
//     let jami=0
//     for(let i=1; i<=son; i++){
//         console.log(jami+=i);
//     }
// }
// yigindi();
// 102.Funskiya son va object qabul qiladi. Objectni ichida min va
// max degan propertilar mavjud. Agar ushbu son min va maxni
// oralig’ida bo’lsa funksiya true qaytarsin, aks holda false
// function oraliq(){
//     let min=+prompt("minimum qiymatni kiriting")
//     let max=+prompt("maxsimum qiymatni kiriting")
//     let son=+prompt("sonni kiriting")
//     if(min<son && son<max){
//         console.log("true");
//     }
//     else{
//         console.log("false");
//     }
// }
// oraliq();
// 103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga
// ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng
// bo’lsa funksiya true qaytarsin, aks holda false.
// function daraja(){
//     let son=+prompt("sonni kiriting")
//     if((son**2) % 10 == son){
//         console.log("true");
//     }
//     else{
//         console.log("false");
//     }
// }
// daraja();











