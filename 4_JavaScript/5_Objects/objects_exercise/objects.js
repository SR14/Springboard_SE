let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://bit.ly/2ysFran"
  };

// Add 'Go' to languages array
programming.languages.push('Go');

// Change difficulty to value of 7
programming.difficulty = 7;

// Delete jokes 
delete programming.jokes;

// Add isFun: true
programming.isFun = true;