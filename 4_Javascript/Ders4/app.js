let score = 85;
// let grade = score >= 50
if (score >= 80) { 
    console.log(`Tebrikler notunuz ${score}, çok iyi bir öğrencisiniz`);
}else if (score >= 50) {
    console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`);
}else{
    console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`);
}
// console.log('ders bitti'); */
// Ternary If else
/* let score = 49;
score >= 50 ? console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`) : 
               console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`); */
/* let username = 'Mark';
username ? console.log(`Merhaba ${username}`) : console.log('Please Login'); */
// if (score >= 80) { 
//     console.log(`Tebrikler notunuz ${score}, çok iyi bir öğrencisiniz`);
// }else if (score >= 50) {
//     console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`);
// }else{
//     console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`);
// }
/* let score = prompt(' Sınav notunu gir : ')
score >= 80 ? console.log(`Tebrikler notunuz ${score}, çok iyi bir öğrencisiniz`) : 
   (score >= 50 ? console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`): 
   console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`))
 */
let username
var year = 2024;
var month = 4;
var dayCount;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30;
        break;
    case 2:
        if (((year % 4 == 0) && !(year % 100 == 0))
            || (year % 400 == 0))
            dayCount = 29;
        else
            dayCount = 28;
        break;
    default:
        dayCount = -1; // invalid month
}
console.log(dayCount); // 29