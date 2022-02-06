const scoreDisplay = document.querySelector("span");
const squares = document.getElementsByClassName("box__individualbox");
const startBtn = document.querySelector(".gamebuttons__start");
const arrowUpBtn = document.getElementById("arrowup");
const arrowDownBtn = document.getElementById("arrowdown");
const arrowLeftBtn = document.getElementById("arrowleft");
const arrowRightBtn = document.getElementById("arrowright");

const width = 10 // width of the grid is 10 
let currentIndex = 0 // let becuase index will change and 0 will be first div in grid
let appleIndex = 0 // first div in grid 
let badAppleIndex = 0
let currentSnake = [2, 1, 0] // head = 2, 0 = tail, 1 = body part
let direction = 1 // should always move 1 div
let score = 0
let speed = 0.9 
let intervalTime = 0
let interval = 0 


// Start and restarting the game

const startGame = () => {
  currentSnake.forEach(index => squares[index].classList.remove("snake"))
  squares[appleIndex].classList.remove("food")
  squares[badAppleIndex].classList.remove("bad")
  clearInterval(interval) // Resetting interval back to 0
  randomApple()
  randomBadFood()// function created later that generates apple
  direction = 1
  scoreDisplay.innerHTML = score // 
  intervalTime = 800
  currentSnake = [2, 1, 0]
  currentIndex = 0
  currentSnake.forEach(index => squares[index].classList.add("snake"))
  interval = setInterval(moveOutcomes, intervalTime)
  score = 0
}

const randomApple = () => {
  do{
    appleIndex = Math.floor(Math.random() * squares.length)
    console.log(appleIndex) //generating random number
  } while (squares[appleIndex].classList.contains("snake")) // if one the sqaures that contains the food also contains the snake class, genrate a new apple
  squares[appleIndex].classList.add("food")
}

const randomBadFood = () => {
  badAppleIndex = Math.floor(Math.random() * squares.length)
  squares[badAppleIndex].classList.add("bad")
}
  
// Function for all outcomes of the snake 

// Dealing with snake hittin the walls

const moveOutcomes = () => {
  
  if (
    (currentSnake[0] + width >= (width * width) && direction === width ) || //if snake hits bottom
    (currentSnake[0] % width === width -1 && direction === 1) || //if snake hits right wall
    (currentSnake[0] % width === 0 && direction === -1) || //if snake hits left wall
    (currentSnake[0] - width < 0 && direction === -width) ||  //if snake hits the top
    (squares[currentSnake[0] + direction].classList.contains('snake')) //if snake goes into itself
  ) {
    alert("Game Over!")
    return clearInterval(interval) //this will clear the interval if any of the above happen
  }

  const tail = currentSnake.pop() 
  squares[tail].classList.remove('snake')
  currentSnake.unshift(currentSnake[0] + direction) 

  // Dealing with snake getting the good and bad apple and consequences
 
  if (squares[currentSnake[0]].classList.contains("bad")) {
    squares[currentSnake[0]].classList.remove("bad")
    clearInterval(interval)
    alert("Game Over!")
  }

  if(squares[currentSnake[0]].classList.contains('food')) { 
    squares[currentSnake[0]].classList.remove('food')
    squares[tail].classList.add('snake')
    currentSnake.push(tail) 
    randomApple() // generate new apple
    score++ //plus one to the score
    scoreDisplay.innerHTML = score // display new score
    clearInterval(interval)
    intervalTime = intervalTime * speed
    interval = setInterval(moveOutcomes, intervalTime)
  }
  squares[currentSnake[0]].classList.add('snake') // Add snake class to the head
}

// Function for keys

const control = (event) => {

  if (event.keyCode === 39) {
    direction = 1
  } else if (event.keyCode === 38) {
    direction = -width
  } else if (event.keyCode === 37) {
    direction = -1
  } else if (event.keyCode === 40) {
    direction =+ width 
  }
}

// Buttons for mobile version
  arrowUpBtn.addEventListener("touchstart", event => {
    direction =- width
  })

  arrowDownBtn.addEventListener("touchstart", event => {
    direction =+ width
  })

  arrowLeftBtn.addEventListener("touchstart", event => {
    direction = -1
  })

  arrowRightBtn.addEventListener("touchstart", event => {
    direction = 1
  })

  // change back to touchstart

 
document.addEventListener("keydown", control);
startBtn.addEventListener("click", startGame);





















// let total = 0;
// let x = 0;
// let movingRight = false;
// let movingDown = false;
// let movingLeft = false;
// let movingUp = false;
// const allBoxes = document.querySelectorAll(".box__individualbox")
// // let foodCreator = Math.floor(Math.random() * 100) + 1;

// const movingBoxDown = () => {
//   // clearInterval()
//   if (movingDown) {
//       total += 10;
//     if (movingDown && total >= 101) {
//       alert ("you lose down");
//       return;
//     } else if (total >=10) {
//       document.getElementById(`box-${total-10}`).classList.remove("active"); 
//      } if (total != 1 ) {
//       document.getElementById(`box-${total-11}`).classList.remove("active");
      
//     } 
//     document.getElementById(`box-${total}`).classList.add("active");
    
//     } else return;
// } 

// // setInterval(movingBoxDown, 1000);

// const movingBoxRight = () => {
//   if (movingRight ) {
//     if (movingRight && total + 89 == 100 || total + 79 == 100) {
//       alert ("you lose right");
//       return;
//     } else if (total >= 0) {
//       document.getElementById(`box-${total-1}`).classList.remove("active");
//     }
//     console.log(total)
//     document.getElementById(`box-${total}`).classList.add("active");
//     total += 1;
//     x += 1;
//     console.log(x)
//   } else return;
// }



// // setInterval(movingBoxRight, 1000);

// const movingBoxLeft = () => {
//   if (movingLeft) {
//     if (total % 10 == 0 && movingLeft) {
//       alert ("twat left");
//       return;
//     } else if (total >= 2) {
//     document.getElementById(`box-${total+1}`).classList.remove("active");
//   }
//   document.getElementById(`box-${total}`).classList.add("active");
//   total = total - 1;
//   x -= 1
//   console.log(x)
// } else return;
// } 

// const movingBoxUp = () => {
//   if (movingUp) {
//     if (movingUp && total < 0) {
//       alert ("you lose up");
//       return;
//     } else if (total >= 10) {
      
//     document.getElementById(`box-${total+10}`).classList.remove("active");
//     // document.getElementById(`box-${total+11}`).classList.remove("active");
//   }
//   document.getElementById(`box-${total}`).classList.add("active");
//   total -= 10;
//   console.log(total)
// } else return;
// } 
// // setInterval(movingBoxLeft, 1000);

// const moveRight = (event) => {
//   if (event.keyCode == 39) {
  
//     movingLeft = false;
//     movingDown = false;
//     movingUp = false; 

//     if(movingRight === false ) {
//     setInterval(movingBoxRight, 1000);
//     movingRight = true
//     }
    
//   }
// }

// const moveDown = (event) => {
//   if (event.keyCode == 40) {
//     movingRight = false;
    
//     movingLeft = false;
//     movingUp = false; 

//     if (movingDown === false) {
//     setInterval(movingBoxDown, 1000);
//     }
//     movingDown = true;

//   }
  
// }

// // Moving Left is not working becuase i have set total2 too 99 like a idiot but how to fix it ???

// const moveLeft = (event) => {
//   if (event.keyCode == 37) {
//     movingRight = false;
//     movingDown = false;
//     movingUp = false; 

//     if (movingLeft === false) {
//     setInterval(movingBoxLeft, 1000);
//     }
//     movingLeft = true;
//   } 
// }

// const moveUp = (event) => {
//   if (event.keyCode == 38) {
//     movingRight = false;
//     movingLeft = false;
//     movingDown = false;
    

//     if (movingUp === false ) { 
//     setInterval(movingBoxUp, 1000);
//     }
//     movingUp = true;
//   }
// }
 
// document.addEventListener("keydown", moveRight);
// document.addEventListener("keydown", moveDown);
// document.addEventListener("keydown", moveLeft);
// document.addEventListener("keydown", moveUp);
