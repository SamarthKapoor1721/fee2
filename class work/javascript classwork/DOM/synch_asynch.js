//1.setinterval
// console.log("starts")
// var a = setInterval(()=>{
//     console.log("settimeout working");
// });

// clearInterval(a);

// console.log("ENDS")

//2. setTimeout
// var a= setTimeout(()=>{
//     console.log("settimeout working");
// },
// 2000);

// clearTimeout(a);

// console.log("ENDS")



//print message 3 times
let count=0;
const interval=setInterval(()=>{
    count++;
    console.log(`Message:${count}`)
    if(count==3){
        clearInterval(interval);
        console.log("execution ends here");
    }
})