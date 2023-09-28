//       1)                                   2)

// console.log("hi");                     console.log("hi");              
// console.lo("hello");                   console..lo("hello");
// console.log("bye");                    console.log("bye");

// o/p -: hi , error                      o/p -: error
// (FAILS IN EXECUTION)                   (FAILS WHILE PARSING)

// REASON -: In first code there is NO syntactical error so when JS reads whole piece of code this console is actually an object inside
//           that object there is a function log so now when parsing is done console is already available in the global scope and no other
//           formal declarations are there so everything will work fine then when the execution phase starts hey global scope do you have
//           console ? YES, and then it asks do you have a log function in console ? YES , then it prints hi and now it goes to second line
//           and it asks hey global scope do you have console ? YES , and then it aks do you have a lo function ? NO , now it throws error
// 
//           Now let's come to second code when we start parsing the parsing will not go through because there is an syntactical issue
//           because on an object we don't have access to dot dot so when actually the parsing starts in parsing also we will see the 
//           syntactical errors . suppose instead of (console..lo("hello")) if you do (console.system.lo("hello")) this would also throw
//           error but it would have printed 1st line (console.log("hi")) because we are trying to access system property on console and on
//           system property we are trying to acces log so when parsing is done parsing will realise that maybe during execution we are
//           going to set the system property because we can also manually set the things to the onject right so in parsing nothing wrong
//           will go and when you start execution line no 1 will be executed and on line no 2 we will come to console then we will try to access
//           the system property which doesn't exists and then it throws an error .


// INTRESTING THING

// If we do console.log(10..toString()) will give the o/p as 10 because 10 is a primitive data type and for primitive datatype .. is valid
// where as object is a non-primitive data type so it is not applicable for that 

