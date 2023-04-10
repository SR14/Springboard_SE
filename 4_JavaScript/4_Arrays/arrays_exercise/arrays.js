// Create array
const people = ['Greg', 'Mary', 'Devon', 'James'];

// Delete 'Greg'
people.shift();

// Delete 'James'
people.pop();

// Add 'Matt' to front of array
people.unshift('Matt');

// Add 'Sergio' to end of array
people.push('Sergio');

// Make a copy of array without 'Matt' or 'Mary'
const arrayCopy = people.slice(2);

// Index of 'Mary'
people.indexOf('Mary');

// Index of 'Foo'
people.indexOf('Foo');

// Redefine people array to starting point
people.splice(0, Infinity, 'Greg', 'Mary', 'Devon', 'James');

// Remove 'Devon' and add 'Elizabeth', 'Artie'
people.splice(2, 1, 'Elizabeth', 'Artie');

// Concatenate people with 'Bob' 
const withBob = people.concat('Bob');