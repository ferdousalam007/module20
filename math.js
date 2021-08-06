//math abs
//math cail
//math floor
//math round
//math random


//math abs
/* let value = -7;
 value = -710;
let result = Math.abs(value);
console.log(result); */

//math ceil
/* var value1 = 6.1456;
var value2 = 7.7456;
var result1 = Math.ceil(value1);
var result1 = Math.ceil(value2);
console.log(result1); */

//math floor
/* var value3 = 6.1456;
var value4 = 7.7456;
var result3 = Math.floor(value3);
var result4 = Math.floor(value4);
console.log(result3);
console.log(result4); */

//math round
/* let value5 = 5.55445;
 value5 = 5.12878;

var result5 = Math.round(value5);
console.log(result5); */


//math random
// let randNumber = Math.random()*10;
// let randRound = Math.round(randNumber);
// console.log(randRound);

//for loop random number generator
for(let i= 1; i<=12; i++){
    let randNumber = Math.random()*6;
    let randRound = Math.round(randNumber);
    console.log(randRound);
}