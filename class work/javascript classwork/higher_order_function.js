//High Order Function
// print name 20 times


// function printname(func,num){
//     for(let i=1;i<=num;i++){
//         func();
//     }
// }


// let myname=function(){
//     console.log("Yash");
// };

// printname(myname,20);


function isEven(arr1) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] % 2 === 0) {
        console.log("The number " + arr1[i] + " is even");
      } else {
        console.log("The number " + arr1[i] + " is odd");
      }
    }
  }
  
  let arr1 = [1, 8, 3, 4, 5];
  
  isEven(arr1);