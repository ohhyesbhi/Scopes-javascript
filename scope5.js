var teacher = "sanket"; // global scope

function ask(question){      // global scope
    console.log(teacher ,question) // scope of function ask 
}

function fun(){                     // global scope
    var teacher = "pulkrit";        // scope of function fun
    ask("why?")                     // scope of function fun
}

fun()


