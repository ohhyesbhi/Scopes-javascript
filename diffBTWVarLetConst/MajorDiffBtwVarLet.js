function fun (){
    console.log(x); // x is accessible here
    var x = 10; // not accessible outside 
}

function gun (){
    console.log(y); // y is not accessible here
    let y = 10 ;
}

fun();
gun();