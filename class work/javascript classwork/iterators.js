//iterators are the prototype for objects
//example:array string map and set
//[next(),value]
//iterators stores each value and prints one by one (passes line by line)


//[symbol.iterator]() tells whether the iterator is iterable

let arr=[1,2,3,4,5];
console.log(arr[Symbol.iterator]);


//for of:assigns the value in i and prints them one by one
for(i of arr){
    console.log(i);
    console.log(arr[1]);
}

// for in:
let obj={name:'samarth'};

for (i in obj){
   /*will return undefined*/ console.log(obj[Symbol.iterator]);
    console.log(obj[i]);
}