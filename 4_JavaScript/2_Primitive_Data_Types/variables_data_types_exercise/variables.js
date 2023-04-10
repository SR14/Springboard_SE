// 1. Create the following variables
//     - `name`, which is a string set to your current name
//     - `dayOfBirth`, which is a number set to the day of your birth month

let name = 'Sergio';
let dayOfBirth = 14;

// 2. See what happens when you have
// multiple variables of the same name. Which one takes precedence?
// setting name by using the "let" command raises an error

name = 'Sergio Robledo';

// 3. Write some JavaScript that prompt's the user for their favorite color. Once the user has submitted a favorite color, log that color to the console along with a friendly message.

let favColor = prompt("What is your favorite color?");
console.log(`I like the color ${favColor} too!`);

// 4. Create a string that contains both single quotes and double quotes.

let mixedQuotes =  `${name}\'s sister\"s favorite color is pink!`;
console.log(mixedQuotes);

// 5. What is the difference between null and undefined?

// null means no value
// whereas undefined tells you the variable has not been assigned a value.

// 6. What is `NaN` in JavaScript? What is the `typeof NaN`?

// NaN is a value JavaScript returns when trying to do a numerical operation
// on something that is not a number. typeof NaN is "number"
// (which is unfortunately a very confusing part of JavaScript)

// 7. You can declare a variable by typing `let thing;`.
// What is the value of `thing`?

let declared;
let typeDeclared = typeof(declared);
console.log(`A declared variable whose value is never assigned is ${typeDeclared}`);
