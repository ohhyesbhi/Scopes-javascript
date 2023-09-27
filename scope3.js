var teacher = "abhishek"; // Global scope

function fun(){                 // global scope
    var teacher = "vishnu";     // function fun scope
    content = "hey"
    console.log(teacher);
}

function gun(){               // global scope
    var student = "rachit";   // function gun scope
    console.log(student)
}

console.log(content);
fun();
gun();
console.log(teacher);

// o/p -: console.log(content); ReferenceError: content is not defined

// here we can see that auto globals procedure only works when we are trying to assign a value to a variable 
// now suppose parsing is already done , now let's come to execution phase ( line no 1 ) hey global scope do you already have a variable teacher
// known to you ? YES, so the variable teacher gets the value abhishek and fun() and gun() will be executed when they are actually called . 
// now we will go to ( line no 14 ) and here we are actually trying to print content so we will ask hey global variable do you have variable 
// content ? NO we don't , SO IT WILL THROW ERROR