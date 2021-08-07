//find the hiest value in array 
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
let result = findArrayHiestValue(input);
console.log(result);