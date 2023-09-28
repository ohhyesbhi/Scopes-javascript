//What do you think JS is compiled or interpreted language ? Let's see wheteher it is interpreted or compiled


// function fun ( ){
//     console...log("i am inside fun");
//     return 0
// }

// console.log("welcome")
// fun();
// console...log("end")


 // o/p -: console...log("i am inside fun"); SyntaxError: Unexpected token '...'

 // if js was interpreted then atleast in o/p we could have got welcome , so hence we can say javascript is not purely interpreted language



 function fun (){
    console.log("hello");
    console.lo("hey")
 }

 fun()


 // o/p -: hello ,   console.lo("hey") TypeError: console.lo is not a function

 // if js was compiled then it would never print hello so now we can say that it is not purely compiled lamguage to


 // So in general we can say that JS is doing both , so now let's see what's going on.......
 
 // * actually every JS code is executed in two phases , first phase is called as PHARSING PHASE and second phase is called as 
 //   a EXECUTION PHASE , let's see whole explaination with the help of examples (check file scope1.js)
 

 // Check it's answer in "answer1.js" file