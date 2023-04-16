// In this exercise, you’ll refactor some ES5 code into ES2015. Write your code in the sections with a comment to “Write an ES2015 Version”.

//                      //
// Same Keys and Values //
//                      //
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }
//                             //
// Same Keys and Values ES2015 //
//                             //
// Write an ES2015 Version     //
const createInstructor = (firstName, LastName) => ({firstName, LastName});


//                         //
// Computed Property Names //
//                         //
// var favoriteNumber = 42;
// 
// var instructor = {
//   firstName: "Colt"
// }
// instructor[favoriteNumber] = "That is my favorite!"
//                                //
// Computed Property Names ES2015 //
//                                //
// Write an ES2015 Version        //
const favoriteNumber = 42;
let instructor = {
    firstName: 'Colt',
    [favoriteNumber]: 'That is my favorite!'
}


//                  //
// Object Methods   //
//                  //
// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }
//                         //
// Object Methods ES2015   //
//                         //
// Write an ES2015 Version //
const instructor2 = {
    firstName: 'Colt', 
    sayHi() {return 'Hi!'},
    sayBye() {return this.firstName + ' says bye!'}
}


//                       //
// createAnimal Function //
//                       //
// Write a function which generates an animal object. The function should accepts 3 arguments:
//
// - species: the species of animal (‘cat’, ‘dog’)
// - verb: a string used to name a function (‘bark’, ‘bleet’)
// - noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
//
// Use one or more of the object enhancements we’ve covered.
const createAnimal = (species, verb, noise) => ({
    species, 
    [verb]() {return noise}
});