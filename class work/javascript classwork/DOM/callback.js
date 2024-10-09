//for understanding

// console.log("started execution");

// function myfunc(){
//     console.log("this is my function");
// }

// myfunc();  // calling function
// console.log("execution ends here..");


// function myproducts()
// {
//     let products=['' ,' ' ,' '];
// }

// myproducts(payment)

// function payment(){
//     let pay={


//      [];
//                // all the info related to payment is stored
//     }
// }

// payment(checkout);

// function checkout(){
//     //info related checking out
// }
// checkout(message)


//call back function

function myfunc(){
    console.log("this is my function");  
}                //execution will not start because not called just declared




function heloo(call){
    console.log("this is my hello function");
    call();
}    

heloo(myfunc); //call is a callback function with a value and myfunc as a argument
