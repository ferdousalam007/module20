//fibonachi series
/* var fibo =[0,1];
for(i=2; i<=10; i++){
 fibo[i] = fibo[i-1] + fibo[i-2];

}
console.log(fibo); */


/* function fibofunc(number){
    if(typeof number !='number'){
      return  "only input number";
    }
    else if(number<2){
        return 'input minimum 2';
    }
    var fibo =[0,1];
    for(let i= 2; i<=number; i++){
        fibo[i]= fibo[i-1]+fibo[i-2];
    } 
    return fibo;
}
var input = "2";
var fibofuncInput = fibofunc(input);
console.log(fibofuncInput); */

//fibonachi recursive
function febofunc2(number2){
   if(number2==0){
       return 0;
   }
  else if(number2==1){
       return 1;
   }
    var fibo = febofunc2(number2-1) + febofunc2(number2-2);
     return fibo;

}
var fiboresult = febofunc2(13);
console.log(fiboresult);