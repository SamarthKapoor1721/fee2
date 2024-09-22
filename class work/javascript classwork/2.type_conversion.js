console.log(1 + 2); //output
console.log(1 + "2"); //output:12 because number 1 is converted into string type before concat with string 2
console.log(5 - "2"); //output:3 because the string 2 will converted into a number first then subtracted becausue its not getting concated 
console.log(10+"A")  //output:10A 
console.log(10-"A")  //output:NaN
console.log(10+"2"-"A") //output:NaN cause of -"A"
console.log(typeof(1+"2")); //output:string
console.log(10+"0"+"1"); //output:1001

//string to number:
let a ="20";
let c= parseInt(a);
let b=Number(c);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);