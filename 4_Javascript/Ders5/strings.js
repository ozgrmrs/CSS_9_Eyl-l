// //////SPLIT METHOD//////
// var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";
// // console.log(s.split(" ")); kelime kelime ayırır.
// // console.log(s.split); eleman eleman ayırır. 
// // console.log(s.split("e")); e harfini çıkartıp her biri için , koyarak array elemanı yapar. 
// // console.log(s.split()); stringi array e çevirir. 

// /&///////////////////
// // https://www.youtube.com/watch?v=b7vfp5G4brE
// // https://youtu.be/b7vfp5G4brE
// var youtube = "https://www.youtube.com/watch?v=b7vfp5G4brE"
// var arr = youtube.split('=')
// console.log(arr[1]);
// var shortLink = `https://youtu.be/${arr[1]}`
// console.log(shortLink);



//////////SUBSTR METHOD//////
// console.log(s.substr(22,10));  negatif index kullanımı yoktur. yazıldığında 0 kabul eder.

// var check = s.substr(22,10) === s.subtring(22,32)

/////////LOWERCASE UPOPERCASE/////
// var pangram = "pijamalı hasta yağız şoföre çabucak güvendi."
// console.log(pangram.toUpperCase());
// console.log(pangram.toLowerCase());
// console.log(Pangram.toLocaleLowerCase('tr'));
// var test = prompt("write anything").toLowerCase()
// console.log(test);


//////////trim()//////


//////Sort/////
// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort());
// console.log(points.sort(function(a, b){return a - b}));