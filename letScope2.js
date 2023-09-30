var teacher = "sanket";

function fun(){

    console.log(teacher);  // here the o/p would be sanket because at the execution phase if it doesn't find the teacher it goes one step
                           // out and check wether there is a variable teacher present in global scope ? YES, we have it with value sanket
                           // so it prints out sanket
     let content = "js";
 
    if(content == "js"){
        let hrs = "120+";
        console.log(content,hrs)
    }

}

fun();
console.log(teacher)

// o/p-: sanket , js 120+ , sanket

