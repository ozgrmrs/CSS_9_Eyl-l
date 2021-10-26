// console.log("ı am from outside")
// var a = 4;
// var b = 5;
// var c = a + b;
// // console.log(c);


//////////FIBONACCI///////

let fibonacciNumber = prompt("Please enter a number:");
        let num1 = 0;
        let num2 = 1;
        let sum ;
        let fibonacciNumbers = [];
        for(let i = 1; i < fibonacciNumber; i++){
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        fibonacciNumbers.push(sum);
 }
console.log(fibonacciNumbers);


////////REVERSE STRING////////////
let sentence = prompt("enter a sentence or word:");
console.log(sentence);
function reverse (sentence1){
    let splitString = sentence1.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray; 
}
console.log(reverse(sentence));
// reverse (sentence);





