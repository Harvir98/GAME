// <!-- create database for words in js 
// event listener on  -->
// <!-- create mobile version for tomororw  -->
// <!-- img for each section for the drawing  -->


// Random word is generated from (database?)

// Event Listeners 
  // Once I click on a button it should go a different color to highlight that its already been selected 
  // when a letter is incorrectly entered a new image will show
  // If the letter clicked is correct the letter will show on the correct line

// when you guess the word a pop up saying you won will display 

// SNAKE PSEUDO CODE 

// One big box seperated into smaller boxes (use grid or table)
// Snake is a html element?
  // Created by changing background color of the square
    // Class to every div
// Snake has set starting position 
// piece of good food and bad food is randomly generated within the box 
  // bad food will end the game 

// Event Listener
  // Use arrow keys to move the snake. Everytime a arrow key is pressed the snake changes direction depending on the arrow key pressed.

// score that changes everytime you eat a piece of good food 
// IF the snake hits the border = game over 
  // p tag that will display to signal the game is over

// Advanced 
  // IF the snake eats good food its length will increase 
  // IF the snake bumps into itself, the game will be over


// Set intervals for moving snake

// at set intervals add a class that will change the color of a box 
// create function then insert  it into setIntervals function 

// const box15 = document.getElementById("fifteen");

let total = 1;

const movingBox = () => {
  if (total >=10) {
    document.getElementById(`box-${total-10}`).classList.remove("active");
  }
  document.getElementById(`box-${total}`).classList.add("active");
  total += 10;
} 

setInterval(movingBox, 1000);


// CHANGE CLASS NAME FOR EACH DIRECTION ETC
// const movingBoxRight = () => {
//   if (total >=10) {
//     document.getElementById(`box-${total-10}`).classList.remove("active");
//   }
//   document.getElementById(`box-${total}`).classList.add("active");
//   total += 10
// } 

// different function for each direction e.g movingboxright

// const changingBoxColor = () => {
//   const everyBox.classList.add()
// }


// .style.backgroundColor="yellow";




