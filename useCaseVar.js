
function fun(x){

    let i ;

    if( x%2 == 0 ){
        i = 0;
    }
    else{
        i = 1;
    }
    console.log(i)
}

fun()
gun()

function gun(){

    if( x % 2 == 0 ){
        var i = 0;
    }
    else{
        var i = 1;
    }
    console.log(i)
}

// in function gun() you can see that we are not initialising anything outside if block instead we are initialising i inside if block
// and this we can do for if else , try catch ... etc and then i will be accessd everywhere 

// in line no 4 we can see thay we are initialising the variable and it is getting the value undefined which doesn't makes sense