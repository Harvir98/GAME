// document.addEventListener("DOMCONTENTLOADED", () => {
const squares = document.getElementsByClassName("box__individualbox")
const scoreDisplay = document.querySelector("span")
const startBtn = document.querySelector(".start")
console.log(startBtn)

const width = 10 // width of the grid is 10 
let currentIndex = 0 // let becuase index will change and 0 will be first div in grid
let appleIndex = 0 // first div in grid 
let currentSnake = [2, 1, 0] // head = 2, 0 = tail, 1 = body part
let direction = 1 // should always move 1 div
let score = 0
let speed = 0.9 
let intervalTime = 0
let interval = 0 


// Start and restarting the game

const startGame = () => {
  console.log("working")
  currentSnake.forEach(index => squares[index].classList.remove("snake"))
  squares[appleIndex].classList.remove("food")
  clearInterval(interval)
  randomApple()
  direction = 1
  scoreDisplay.innerText = score // maybe can change to .HTML
  intervalTime = 1000
  currentSnake = [2, 1, 0]
  currentIndex = 0
  currentSnake.forEach(index => squares[index].classList.add("snake"))
  interval = setInterval(moveOutcomes, intervalTime)
}

const randomApple = () => {
  do{
    appleIndex = Math.floor(Math.random() * squares.length)
  } while (squares[appleIndex].classList.contains("snake"))
  squares[appleIndex].classList.add("food")
}


// Function for all outcomes of the snake 

// deal with snake hittin the wall

const moveOutcomes = () => {
  
  if (
    (currentSnake[0] + width >= (width * width) && direction === width ) || //if snake hits bottom
    (currentSnake[0] % width === width -1 && direction === 1) || //if snake hits right wall
    (currentSnake[0] % width === 0 && direction === -1) || //if snake hits left wall
    (currentSnake[0] - width < 0 && direction === -width) ||  //if snake hits the top
    squares[currentSnake[0] + direction].classList.contains('snake') //if snake goes into itself
  ) {
    return clearInterval(interval) //this will clear the interval if any of the above happen
  }

  const tail = currentSnake.pop() //removes last ite of the array and shows it
  squares[tail].classList.remove('snake')  //removes class of snake from the TAIL
  currentSnake.unshift(currentSnake[0] + direction) //gives direction to the head of the array

  //deals with snake getting apple
  if(squares[currentSnake[0]].classList.contains('food')) {
    squares[currentSnake[0]].classList.remove('food')
    squares[tail].classList.add('snake')
    currentSnake.push(tail)
    randomApple()
    score++
    scoreDisplay.textContent = score
    clearInterval(interval)
    intervalTime = intervalTime * speed
    interval = setInterval(moveOutcomes, intervalTime)
  }
  squares[currentSnake[0]].classList.add('snake')
}






// Function for keys

const control = (event) => {
  squares[currentIndex].classList.remove("snake")

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

document.addEventListener("keyup", control);
startBtn.addEventListener("click", startGame);
// })












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
