let total = 1;
let x = 0;
let movingRight = false;
let movingDown = false;
let movingLeft = false;
let movingUp = false;
// let foodCreator = Math.floor(Math.random() * 100) + 1;

const movingBoxDown = () => {
  clearInterval()
  if (movingDown) {
      total += 10;
    if (movingDown && total >= 101) {
      alert ("you lose down");
      return;
    } else if (total >=10) {
      document.getElementById(`box-${total-10}`).classList.remove("active"); 
     } if (total != 1 ) {
      document.getElementById(`box-${total-11}`).classList.remove("active");
      
    } 
    document.getElementById(`box-${total}`).classList.add("active");
    
    } else return;
} 

// setInterval(movingBoxDown, 1000);

const movingBoxRight = () => {
  if (movingRight ) {
    if (movingRight && total + 89 == 100 || total + 79 == 100) {
      alert ("you lose right");
      return;
    } else if (total >= 2) {
      document.getElementById(`box-${total-1}`).classList.remove("active");
    }
    console.log(total)
    document.getElementById(`box-${total}`).classList.add("active");
    total += 1;
    x += 1;
    console.log(x)
  } else return;
}



// setInterval(movingBoxRight, 1000);

const movingBoxLeft = () => {
  if (movingLeft) {
    if (total % 10 == 0 && movingLeft) {
      alert ("twat left");
      return;
    } else if (total >= 2) {
    document.getElementById(`box-${total+1}`).classList.remove("active");
  }
  document.getElementById(`box-${total}`).classList.add("active");
  total = total - 1;
  x -= 1
  console.log(x)
} else return;
} 

const movingBoxUp = () => {
  if (movingUp) {
    if (movingUp && total < 0) {
      alert ("you lose up");
      return;
    } else if (total >= 10) {
      
    document.getElementById(`box-${total+10}`).classList.remove("active");
    // document.getElementById(`box-${total+11}`).classList.remove("active");
  }
  document.getElementById(`box-${total}`).classList.add("active");
  total -= 10;
  console.log(total)
} else return;
} 
// setInterval(movingBoxLeft, 1000);

const moveRight = (event) => {
  if (event.keyCode == 39) {
  
    movingLeft = false;
    movingDown = false;
    movingUp = false; 

    if(movingRight === false ) {
    setInterval(movingBoxRight, 1000);
    }
    movingRight = true
  }
}

const moveDown = (event) => {
  if (event.keyCode == 40) {
    movingRight = false;
    
    movingLeft = false;
    movingUp = false; 

    if (movingDown === false) {
    setInterval(movingBoxDown, 1000);
    }
    movingDown = true;

  }
  
}

// Moving Left is not working becuase i have set total2 too 99 like a idiot but how to fix it ???

const moveLeft = (event) => {
  if (event.keyCode == 37) {
    movingRight = false;
    movingDown = false;
    movingUp = false; 

    if (movingLeft === false) {
    setInterval(movingBoxLeft, 1000);
    }
    movingLeft = true;
  } 
}

const moveUp = (event) => {
  if (event.keyCode == 38) {
    movingRight = false;
    movingLeft = false;
    movingDown = false;
    

    if (movingUp === false ) { 
    setInterval(movingBoxUp, 1000);
    }
    movingUp = true;
  }
}
 
document.addEventListener("keydown", moveRight);
document.addEventListener("keydown", moveDown);
document.addEventListener("keydown", moveLeft);
document.addEventListener("keydown", moveUp);

// const foodGenerator = () => {
//   // let food = Math.floor(Math.random() * 100) + 1;
//   let foodColor = document.getElementById(`box-${foodCreator}`).classList.add("food")
//   return foodColor;
// }






// collision with border

// const gameOver = () => {
//   if (`box-${total}` > 8 && `box-${total}` < 6) {
//     alert ("GAME OVER");
//   }
//   }


// Setting the score back to 0

// const resetScore = () => {
//   score = 0;
//   document.getElementById("output").innerHTML = score;
// };

// const food = document.getElementsByClassName("food")

// if (onSnake(food))

  // end game function 






// If the snake hits the border 
// const moveOutcomes = () => {

// //   if (
// //     (currentSnake[0] + width >= (width * width) && direction === width) ||
// //     (currentSnake[0] % width === width -1 && direction === 1) || 
// //     (currentSnake[0] % width === 0 && direction === -1) ||
// //     (currentSnake[0] - width < 0 && direction === -width )
// //   ) {
// //     return clearInterval(interval)
// //   }

// // }
// // setInterval(moveOutcomes, 1000)











