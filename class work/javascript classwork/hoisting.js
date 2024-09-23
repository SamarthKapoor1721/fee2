//important 
console.log(a); // a connot be printed before it is initialized
var a = 10;

console.log(a);
function myfunc() {
    var b = 20;
    console.log(b);
}
myfunc();

/*

call stack also called global execition context
it consists of two parts 
 1) memory creation phase

 all the functions and variables are extracted

it will show the value undefined untill the code execution phase.


 2)code execution phase

 all the variables and the function in the memory creation phase are assigned a value
 
 */
