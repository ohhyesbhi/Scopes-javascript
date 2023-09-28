"use strict";

var teacher = "abhishek"; 

function fun(){                 
    var teacher = "vishnu";    
    content = "hey"   // suppose let's say this variable has been decalred by mistake at that time using strict mode makes sense
    console.log(teacher);
}

function gun(){              
    var student = "rachit";   
    console.log(student)
}

console.log(content);
fun();
gun();
console.log(teacher);

// o/p -: console.log(content); ReferenceError: content is not defined


// In javascript we can enable the strict mode and in this strict mode few of the things are restricted that means they are not available
// and one corner case with strict mode is that there might be some old browsers that might not currently support strict mode and if they
// are not supporting strict mode then the browser might behave differently .

// Strict mode that makes several changes in Javascript 
// 1) Eliminates some javascript silent errors by changing thme to throw errors (concept of autoglobals)
// 2) Helps in performance optimization

// to enable this strict mode just put "use strict" before any other statements
// and if you want to enable this strict mode inside functions only then use this "use strict" in the function before any other statements


// ADVANTAGE -: Stops the creation of autoglobals