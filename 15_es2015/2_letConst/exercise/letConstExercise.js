// Old Code
// 
/* 
var PI = 3.14;
PI = 42; // stop me from doing this!
*/

// New Code
// 
const PI = 3.14; // cannot change 
PI = 42; // give error message


// 1. What is the difference between ***var*** and ***let***?
// var is not block scoped and can be redeclared. Therefore, you can access variables created with var outside of its block of code and can use var again with the exact same variable name. On the other hand, when you define a variable using let, since it is block scoped, you cannot use it outside of the block of code, e.g. function. Variables set with the let command cannot be redeclared, but they can be redefined. 

// 2. What is the difference between ***var*** and ***const***?
// Setting a variable with const is pretty much the same thing as setting the variable with let. The one thing that changes is that when you set a variable with const, you cannot redefine it. 

// 3. What is the difference between let and const?
// Already answered this on the top two questions.

// 4. What is hoisting?
// Hoisting happends when you declare a variable with var. The "var VARIABLE_NAME" part of defining a variable gets prioritized when the code executes. Therefore, if you try to use that variable before you declare it with var, you can and will just get an undefined value. However, if you try to use a variable that has been set with let or const before you declare it, you will get an Reference error message.