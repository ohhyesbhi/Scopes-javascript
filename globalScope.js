let name = "abhishek"; // this is said to be global scope variable because it is initialised outside any function outside any block

function fun(){
    console.log(name);
}
fun()
console.log(name)

// o/p -: abhishek , abhishek 