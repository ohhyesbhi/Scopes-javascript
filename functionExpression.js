
//1
function fun(){        // function declaration  (if the first keyword used is function then that is considered as function expression)
 
}         

//2
let f = function fun(){           // named function expression (first keyword used is let so it is function expression)
                                  // these named functions actually helps in code readibilty because some time what a particular function 
}                                 // does it's name will be given that only and also one of the biggest disadvantage of anonymous function
                                  // expression is that we can't do recursion and also one more disadvantage of using anonymous function is that .
            // whenever we do console.trace() we actually get the call stack memory where we can check what all functions are registred so at 
            // that time the function name will not be registered

//3
let a = function(){              // anonymous function expression
   
}

//4
(function x (){    // function expression (we are not calling it so it is just function expression suppose if we were calling it then it is known as IIFE)

})

//5
(function (){                     // function expression
                     
})


// Usually 4 and 5 are called as IIFE (Immediate invoked function expression) now let's see what is IIFE
// now already we have understood about function expression , IIFE means we wrote an function expression and we IMMEDIATELY called it
// that is IIFE below function shows an example of IIFE

// (function x (y){    
//     console.log(y)

// })("hello")         here we actually call the function 


// ADVANTAGES IIFE -: suppose if at any time there is an naming collision for example let's say we have 5000 lines of code and some one
//                    new came and hw wants to add the function with particular name and if that name was already degined in a function then 
//                    that would give him an error but if we use IIFE in some cases we can prevent that