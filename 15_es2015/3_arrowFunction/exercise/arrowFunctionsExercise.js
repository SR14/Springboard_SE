//                   //
// Original Function // 
//                   //

/*
function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}
*/
// Refactored code w/ arrow functions
const double = arr => arr.map(val => val * 2);

//                   //
// Original Function // 
//                   //

/*
function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}
*/
//  Refactored code w/ arrow functions
const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);