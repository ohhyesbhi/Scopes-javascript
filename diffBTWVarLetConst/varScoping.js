// var -: when we use var then whatever variable you are declaring it will either having a function scope or a global scope

// example -: 

var x = 1;               // SAME 

if( x == 1 ){
    var x = 2;          // SAME 
    console.log(x)
}
console.log(x);

// o/p -: 2 , 2
// reason -: var x = 1 , where x is actually acting as a global variable and then we can see we have a if BLOCK , which is not a function
//           and now we just read that var is nowhere knowing about the block scoping , that means when we do ( var x = 2 ) it will be 
//           acting as a global variable x only  


