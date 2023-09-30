### Lexical scoping 
The scoping of the variables is determined during compile time when the parser actually reads your whole code the scope of every variable and function is determined before the execution phase.

o/p for below code would be if it was lexical scoping --> sanket why
var teacher = "sanket"; // global scope

function ask(question){      // global scope
    console.log(teacher ,question) // scope of function ask 
}

function fun(){                     // global scope
    var teacher = "pulkrit";        // scope of function fun
    ask("why?")                     // scope of function fun
}

fun()


### Lexical scoping 
During runtime time the scope of variable amd function is determined.

o/p for below code would be if it was dynamic scoping --> pulkrit why
var teacher = "sanket"; // global scope

function ask(question){      // global scope
    console.log(teacher ,question) // scope of function ask 
}

function fun(){                     // global scope
    var teacher = "pulkrit";        // scope of function fun
    ask("why?")                     // scope of function fun
}

fun()


REASON -: Initially we have a variable teacher we define it and then we are calling fun and in fun we define a variable teacher which was already available so now we will update the teacher with pulkrit and the we call gun function and then there we will print pulkrit why