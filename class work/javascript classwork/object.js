//objects are used to store complex structures

//to create an object


// 1) constructors
const obj=Object();   // capital O necessary
obj.name="samarth";
console.log(obj);

// 2) literals
// use->  {key,value}
var user= {
    name: "yash",
    class: "fee",
    roll_no: 25,
}

var student={
    name:"samarth",
    age: 19,
    roll_no:2310992202,
    'full name':"samarth kapoor",
}

//Access objects

console.log(user.name);
console.log(user.roll_no);
console.log(student.age);

// how to print the stored value with keyword which has a space 
console.log(student["full name"]);

//changing or updating value of an object
user.name="mohit";
console.log(user);


// object inside an object


const users={
user1:{
name:"daksh",
age:17,
},

user2:{
    name:"samarth",
    age:18,
},

user3:{

    // creating new object withinn ann object which is already within an object
    rollno:{
     roll_no:2310992202,
    },


    name:"sahil",
    age:17
    },
}

// accessing an the value under the object within an object

console.log(users.user1.name);

console.log(users.user3.rollno.roll_no);

