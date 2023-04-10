let randomNumber = Math.random();

(randomNumber > 0.5) ? console.log('Over 0.5') : console.log('Under 0.5');

// rounding to two decimal places and printing
randomNumber = randomNumber.toFixed(2);
console.log(`The random number was ${randomNumber}`);