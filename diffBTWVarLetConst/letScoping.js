// let -: It actually gives a block scope

let x = 1  // DIFFERENT

if(x == 1){
    let x = 2;       // DIFFERENT
    console.log(x)
}

console.log(x)

// o/p -: 2 , 1

// reason -: The set curly brackets is a block and let gives us block scope that means when we initialise let x = 2 (line no 6) , it means
//           a new variable x has been initialised  in the visiblity of this block which is DIFFERENT from the x which is initialised at
//           the line no 3 