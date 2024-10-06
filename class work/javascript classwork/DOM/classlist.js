var newh1=document.querySelector("h1");

console.dir(newh1.classList);

//add class: classlist.add

newh1.classList.add("green");

// remove class:classlist.remove
console.dir(newh1.classList.remove("green"));

//container:check if class id present or not

var b=newh1.classList.contains("green");
console.dir(b);

//toggle:used to remove and add class

newh1.classlist.toggle("green");
newh1.classList.toggle("black");