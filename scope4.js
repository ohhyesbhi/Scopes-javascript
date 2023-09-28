function fun(){             // global scope
    var x = 10;             // scope of fun

    function gun(){         // scope of fun
        var y = 20;         // scope of gun
        console.log(x);     
        console.log(y);     
    }

    console.log(x);         
    console.log(y);       
}

fun();


// so in pasing phase we are going to ask hey on line no 1 do you know about some function fun as an decalaration ? NO , so this function
// fun is going to get a global scope now we will go inside the function of fun() now whatever variables are declared inside function fun()
// will have scope of function fun() , and now line no 5 ans we ask hey scope of fun do you any other formal declaration of variable x ? No
// so now x will belong to scope of fun and then we go line no 4 and ask hey scope of fun do you have any formal declaration named gun()? No
// so now gun() belongs to scope of fun() and now we are inside gun() so whatever we have inside gun we will give a scope of gun() and now
// we are at line no 5 so we will ask hey scope of gun do you have any formal declaration of variable y ? No , so now y will be having 
// a scope of gun 

// Now when you start running this code 
// in line no 1 there is function declaration so nothing happens now we will go to line no 15 where function fun() is called and then
// we go at  line no 2 where value 10 is assigned to x and then there is a function declaration nothing will happen and the we go at
// line no 10 is variable x present in scope of fun() ? YES , so will print x and the we go at line no 11 and is variable y present 
// in the scope of fun () ? NO , So now it will throw an error


