//find the heighest value in array 
function findArrayHiestValue(numbers){
    let largest = numbers[0];
    for(let i=0; i<numbers.length; i++){
        const elements =numbers[i];
        if(elements>largest){
            largest=elements;
        }
    }
    return largest;
}
let input= [10,20,30];
let input2= [10,20,30,55,5];
let input3= [10,20,30,55,90,80,5];
let result = findArrayHiestValue(input);
let result2 = findArrayHiestValue(input2);
let result3 = findArrayHiestValue(input3);
console.log(result);
console.log(result2);
console.log(result3);

//find the lowest value in array 

function findLoestValueAraay(numbers2){
     let lowest = numbers2[0];
    for(let j=0;j<numbers2.length;j++){
        const element = numbers2[j];
        if(element<lowest){
           lowest= element;
        }

    }return lowest;
}
let inputValue = [100,20,33,5,3,44,2,771,1];
let resultLoest =findLoestValueAraay(inputValue);
console.log(resultLoest);
























