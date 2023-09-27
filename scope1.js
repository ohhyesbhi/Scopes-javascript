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
// 1) Global scope 
// 2) Function scope 
// 3) Block scopr 

// so now what happens is JS reads the whole code one by one and start allocating the variables there corresponding scope
// now JS goes to line number 1 and it sees (var teacher = "abhishek") now what is the current scope ?  It is global scope so we will
// first ask hey scope manager is the variable teacher alreday declared in global scope the ans would be NO so we will assign it a global scope

// var teacher = "abhishek"   ---> Assigned Global scope

// now let's go to line number three now we see a formal declaration , so every time we see a formal declaration you have to think about
// it scopes in parsing , now we say is the function fun () is availabel already in the global scope ? No , so this fun is given global scope

// function fun (){   ---> Assigned Global scope 

// }


// now we go inside function fun() and now this function creates it's new scope (functional scope) and now we will ask hey scope manager
// you have a variable teacher in the scope of fun() ? NO , because there is no variable teacher in the scope of fun beacause (var teacher)
// actually allows to make a function scope , and the we will print teacher and the we will come out of fun()

// var teacher = "vishnu" --> Assigned scope of fun


// now we are at line no 8 we again have a decalration of gun and now we are again in the global scaope  and again we will ask do you have
// a variable gun() already intialised ? NO , so this gun( also gets a global scope )

// function gun (){  --> Assigned global scope

// }

// now we go inside gun and inside gun we have (var student = "rachit") so now we will check do we have variable student in the scope of
// gun() ? NO , this variable student is assigned in the scope of gun 

// var student = "rachit" --> Assigned scope og gun

// so now it's done so in generally we can say in parsing phase all of the variables are allocated to their corresponding scopes
// and now the interesting part is going to start

// Will there be a value in this scoped variables ? NO value will be assigned and we are only looking for formal declarations (like we
// check only for var teacher , let teacher , function fun () ) so in parsing phase we are only talking about the formal declarations 
// if there is no formal declaration no need of giving any scope and also we don't care about the where the variable is used like (console.log(teacher))
// we only check for (var , let , const ,  and functions)

// NOW after the parsing phase execution phase starts  now we see (var teacher ) so this teacher belongs to the global scope so the bucket
// teacher which is in the get's the value sanket (DURING RUN TIME WE ALLOCATE THE VALUES) now we go to line no 3 which is (function fun())
// so until this function is called we are not going to execute it so from line no 3 now we go to line no 8 (function gun ()) same here also
// so until this function is called we are not going to execute it so till now the bucket teachers (line no 4) and the bucket students(line no 9)
// will not be having the values inside it, now we will come to line no 13 where is fun() is called , now we will check is there a function
// fun() in global scope named as fun() ? YES we do have it , so now we call it and now we go to line no 4 now the variable teacher get's
// the value pulkrit and then we print teacher noe before printing it checks do i have a teacher if yes the it prints the value of teacher
// so here we have teacher inside the scope of fun so we will print it so same happens with gun() function also

// o/p -: vishnu , rachit ,  abhishek 