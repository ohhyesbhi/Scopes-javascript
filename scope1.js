var teacher = "abhishek";


function fun(){
    var teacher = "vishnu";
    console.log(teacher);
}

function gun(){
    var student = "rachit";
    console.log(student)
}

fun();
gun();
console.log(teacher);

// now code executes in two phases the first phase is called as parsing , so what happens in parsing phase ? One of the most imp thing 
// that happens is SCOPE RESOLUTION  (JS reads the whole code in the first go and then for every variable and the function that it see
// it tries to allocate the particular scope , now when i said particular scope that means that there must be different types of
// scopes right ? Now let us look at different types of scopes and then we will come back )

// In JS there are THREE types of scopes 
// 1) Global scope -: If you define a variable in global scope then it is accessible everywhere 
// 2) Function scope -: 
// 3) Block scopr -:  

