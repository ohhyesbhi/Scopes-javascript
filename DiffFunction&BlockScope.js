// How is block scope different from function scope

// as var gives us function scope this variable will be available everywhere in the function even before the decalaration  whereas
// let doesn't do that as though you can see that let teacher is in the block of fun() it doen't give access if teacher everywhere in the function
// so below the decalartion only we can access it , that is the actual difference between function and a block scopw

function fun(){
 
    console.log(sir) // no error will be given
    console.log(teacher)

    let teacher = "abhishek";
    var sir = "abhishekkkkkkk"

}


fun()