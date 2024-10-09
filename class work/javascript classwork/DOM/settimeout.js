// the setimeout function makes the javascript asynchronous but its execution is synchronous and  cause of these function we call it asynchronous language
// if the javascript code doesnt run the web api wont pass the data
//settimeout:
// this function is executed after a specified delay

//how to declare function
// function setTimeout(){

// }

// var set=function setTimeout(){

// }

console.log("execution started");

 setTimeout(()=> {
console.log("settimeout function");
},2000
)

for(let i=0;i<=1000;i++){
    console.log("loop running");
}

function first(){
    console.log("this is my first funtion");
}

first();

console.log("execution ends here");

//global execution environment

//1.main stack{js} -execution context

//2.call stack[API]- web API