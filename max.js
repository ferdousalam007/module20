// var bussinessman =450;
// var minister = 350;
// var army = 644;
// if(bussinessman>minister && bussinessman>army){
// console.log("bussinessman is bigger");
// }
// else if(minister>bussinessman && minister>army){
//  console.log("minister is bigger");
// }
// else{
//    console.log("army is bigger");
// }

// console.log(Math.max(bussinessman,minister,army));



//task home
function getBigger(first,second,third){
    if(first>second && first>third){
     return first;
    }
    else if(second>first && second>third){
      return second;
    }
    else{
        return third;
    }
}
var bussinessman =450;
var minister = 350;
var army = 644;
var getBiggetResult = getBigger(bussinessman,minister,army);
console.log(getBiggetResult);