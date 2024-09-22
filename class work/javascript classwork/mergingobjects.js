
//merging objects with spread operator
let 
obj1= {
    name:"samarth",
    age1:18,
}

let obj2={
    name1:"sahil",
    age2:19,
}

let obj3={...obj1,...obj2}   // the three dots are the spread operators
let obj4= Object.assign(obj1,obj2);

let obj5=Object.call(obj1,obj2);
console.log(obj3);
console.log(obj4);
console.log(obj5);




//hasown command