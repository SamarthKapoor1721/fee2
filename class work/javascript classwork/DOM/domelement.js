// 1. create element using js
var h1=document.createElement("h1");
console.dir(h1);
h1.innerHTML="DOM elements";

var body=document.querySelector("body");
// append.child:
body.appendChild(h1);

//append :
h1.append("learning js");

//prepend:
h1.prepend("learning js");