const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {

  // set variables
  let currentDiv = event.target;  
  let currentColor = currentDiv.getAttribute('class');
  let cardOne = document.querySelector('[data-temporary="cardOne"]');

  // reveal current color clicked
  currentDiv.style.backgroundColor = currentColor;

  // if there is a card one color, save it to a variable
  let cardOneColor;
  try { 
    cardOneColor = cardOne.getAttribute('class');
  } catch (error) {
    cardOneColor = null;
  }

  // check if the div currently clicked has already been paired
  // also check if the div clicked is not the same as the previous one
  let done = currentDiv.dataset.done;
  if (currentDiv == cardOne && done == 'true') {
    return
  } else {


    // if this is the first card clicked: set it as 'cardOne'
    if (cardOneColor == null) {
      currentDiv.dataset.temporary = 'cardOne';

    // anything else check if the second card matches the first
    } else {
      // stop all clicking until this pair is processed
      gameContainer.removeEventListener('click', handleCardClick);
      console.log('card one color: ', cardOneColor)
      console.log("you just clicked: ", currentColor);

      // no matter the outcome reset the 'cardOne' to null
      cardOne.dataset.temporary = '';

      // if the cards match
      if (cardOneColor == currentColor) {
        // console log and set div element to 'done'
        console.log('you matched a pair');
        cardOne.dataset.done = 'true';
        currentDiv.dataset.done = 'true';

        // resume game
        gameContainer.addEventListener('click', handleCardClick);

      //  if the cards do not match
      } else {
        console.log('oh man, try again');
        
        // let the cards be seen for 1 second and then resume the game
        setTimeout(() => {
          currentDiv.style.backgroundColor = 'white';
          cardOne.style.backgroundColor = 'white';
          gameContainer.addEventListener('click', handleCardClick);
        }, 1000);
      }
    }
  }

}


// when the DOM loads
createDivsForColors(shuffledColors);

// add an event listener for gameContainer
gameContainer.addEventListener('click', handleCardClick);

/* */