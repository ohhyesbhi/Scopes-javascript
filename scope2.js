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

fun();
gun();
console.log(teacher);
console.log(content);

// o/p -: vishnu , rachit , abhishek , hey

// in parsing phase particular scopes are given only for the variables which are formally declared

// after that now execution phase starts hey global scope do you have a variable teacher ? yes we do have it ,so now we assign a value
// abhishek to it, now we will go to line no 3 until and unless the function is called we will not execute function fun () and gun ()
// now we come to line no 14 hey global scope do you have a function fun () , YES we do have it so now we will execute function fun() and
// now we go to line no 4 the variable teacher which belaongs go the scope of fun we will assign a value "vishnu" to it and now we will go
// to line no 4  and then we check hey scope of fun do you have a variable content  , NO (BECAUSE WE NEVER FORMALLY ASSIGNED A VARIABLE CONTENT TO THE SCOPE OF FUN)
// so no content will be found in the scope of fun when this happens during execution phase you go one scope out whatever is you current scope
// you go one scope out so now we are at the global scope so we ask hey global scope do you have a varaiable content in global scoppe? NO  
// we don't have a variable content , so neither we found a content in a function scope or neither we found a content in a global scope
// so now what will happen ? there is a concept called as AUTO GLOBALS so if you are trying to assign a value to a variable and it is
// not present inside any of the scopes it will automatically beacome a global variable so this content during execution phase will beacome
// global variable and then everything is same ....and at last when we come at line no 17 then we will ask hey global scope do you have
// variable content ? YES , so now the value of content which is "hey" is printed