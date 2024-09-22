// scope:1: global,2:function;3:block scope; 4:lexical scope:;

//2. functional scope:
let sum = 25; //global scpe
function myfun(a, b) {
    let c = a + b;// functional scope
    console.log(c);
}
myfun(5, 4);
console.log(sum);

//1:1.global scope:by default all values are globally accaessible throughtout the code base
let a = 5;
var b = 10;
const c = 15;
function myfunc() {
    console.log(a);
    console.log(b);
    console.log(c);

}

myfunc();


//block scope: just like private class in c++ wont let the variable called outside the block
{
    let f=20;
    const j=30;
    var t= 40;
}

//console.log(f); // wont print and will show not defined

//lexical:

function outerfunc(){    //outerfunction cannot access the inner function 
var i=20;

function innerfunc(){
    var h= 30            //innerfunction can access outer function
    var m= h+i;
    console.log(c);
}
innerfunc();
}
outerfunc();