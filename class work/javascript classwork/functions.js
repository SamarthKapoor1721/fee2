

//default argumets (b=3)
function multiply(a,b=3){
    var c=a*b;
    console.log(c);

}
//console.log(5); it will print 5
//multiply(2) print Nan cause b is not defined if predefined value is not given
multiply(7);
multiply(7,4);// it will print 28 because the value assigned overules the default value
//function declaration
function sum(a,b)/*a and b are the function parameters and sum is the function name*/{
    total=a+b;
    console.log(total);
}
//function call
sum(3,5); /*3 and 5 are the function arguments*/ 