var teacher = "sanket";

function fun(){

    console.log(teacher);       // this is undefined because while execution when we ask hey scope of fun do you have teacher? YES,                                // but the thing is in parsing phase we don't assign the value s to the variable so it shows undefined

    var teacher = "abhishek";
    let content = "js";
 
    if(content == "js"){
        let hrs = "120+";
        console.log(content,hrs)
    }

}

fun();
console.log(teacher)

// o/p -: undefined , js 120+ , sanket 