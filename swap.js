//swap number or other experiment

//first method
/* let first = 10;
let second = 20;
let temp;
temp = first;
first = second;
second = temp;
console.log(first,second); */

// second method
/* let first = 40;
let second = 25;
let temp;
temp = first + second;
first =temp-first;
second =temp-second;
console.log(first,second); */

//third method
// second method
let first = 40;
let second = 25;
[first,second] =[second,first];
console.log(first,second);
