const mynumber = [10, 12, 14, 74, 55, 87, 77];
let sum = 0 ;

for(let i =0; i<mynumber.length; i++){
   const element = mynumber[i];
   sum = sum + element;
}
// console.log(sum);



function arraysum(mynumber){
    let sum = 0 ;
    for(let i =0; i<mynumber.length; i++){
        const element = mynumber[i];
        sum = sum + element;
     }
     return sum;
}
const mynumber1 = [10, 12, 14, 74, 55, 87, 77,190];
let result = arraysum(mynumber1);
console.log(result);