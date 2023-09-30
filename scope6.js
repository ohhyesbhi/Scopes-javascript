
var fun ;


// function fun(){
//     return "8910"
// }

console.log(fun);

// o/p -:   ERROR 

// REASON -: what happens is while parsing phase intially we ask is fun already defined, NO then we will have global scope when it comes to function fun() 
//           we again ask do we have fun already decalred ? YES , so we cannot declare two funs at a time so it throws error
