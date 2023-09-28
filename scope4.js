function fun(){             // global scope
    var x = 10;             // scope of fun

    function gun(){         // scope of fun
        var y = 20;         // scope of gun
        console.log(x);     
        console.log(y);     
    }
    gun();
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


// Now lets call function gun() at line no 9 , so when we go inside gun we are now having variable y that has assigned with a value 20 ;
// and then we have console.log(x) and now we check hey scope of gun() do you have a variable named x ? No , SO NOW WHAT SCOPE
// MANGER DOES IS IT WILL GO ONE LEVEL UP and it will say hey scope of fun() do you have a variable named x ? YES , and now we 
// print 10 and after that we go at line no 7 and ask hey scope of gun() do you have variable named y ? YES , and now we print 20
// and now we will come outside of gun() and now hey scope of fun() do you know about x? YES, so it will print x and then hey scope 
// of fun() do you know variable y ? NO , and now we will go one scope outside and one scope outside is global scope , so now we will ask
// hey global scope do you know about y ? No, so now it will throw an error