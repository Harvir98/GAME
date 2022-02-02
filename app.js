let total = 1;
let total2 = 99;
let movingRight = false;
let movingDown = false;
let movingLeft = false;


const movingBoxDown = () => {
  if (movingDown) {
  if (total >=10) {
    document.getElementById(`box-${total-10}`).classList.remove("active");
  }
  document.getElementById(`box-${total}`).classList.add("active");
  total += 10;
} else return;
} 

// setInterval(movingBoxDown, 1000);

const movingBoxRight = () => {
  if (movingRight) {
    if (total >= 2) {
      document.getElementById(`box-${total-1}`).classList.remove("active");
    }
    document.getElementById(`box-${total}`).classList.add("active");
    total += 1;
  } else return;
  // if (total >= 2) {
  //   document.getElementById(`box-${total-1}`).classList.remove("active");
  // }
  // document.getElementById(`box-${total}`).classList.add("active");
  // total += 1;
} 

// setInterval(movingBoxRight, 1000);

const movingBoxLeft = () => {
  if (movingLeft) {
  if (total2 >= 1) {
    document.getElementById(`box-${total2+1}`).classList.remove("active");
  }
  document.getElementById(`box-${total2}`).classList.add("active");
  total2 -= 1;
} else return;
} 

// setInterval(movingBoxLeft, 1000);


// Detecting an arrow key in document 

// document.addEventListener("keydown", moveLeft);

// // // es5 syntax, how to convert to es6

// function moveLeft (event){
//   if (event.keyCode == 37) {
//     console.log("LEFT")
//   }
// }

// document.addEventListener("keydown", moveUp);

// function moveUp (event){
//   if (event.keyCode == 38) {
//     console.log("UP")
//   }
// }

// document.addEventListener("keydown", moveDown);

// function moveDown (event){
//   if (event.keyCode == 40) {
//     if (total >=10) {
//       document.getElementById(`box-${total-10}`).classList.remove("active");
//   }
//   document.getElementById(`box-${total}`).classList.add("active");
//   total += 10;

//   }

//   if (event.keyCode == 39) {
//     if (total >= 2) {
//           document.getElementById(`box-${total-1}`).classList.remove("active");
//         }
//         document.getElementById(`box-${total}`).classList.add("active");
//         total += 1;
//       } 
  
//   if (event.keyCode == 38) {    
//     if (total2 >= 1) {
//           document.getElementById(`box-${total2+1}`).classList.remove("active");
//         }
//         document.getElementById(`box-${total2}`).classList.add("active");
//         total2 -= 1;
//   }  
// }
   
// setInterval(moveDown, 1000);



const moveRight = (event) => {
  
  if (event.keyCode == 39) {
    movingRight = true;
    movingLeft = false;
    movingDown = false;
    setInterval(movingBoxRight, 1000);
  }
}

const moveDown = (event) => {
  
  if (event.keyCode == 40) {
    movingRight = false;
    movingDown = true;
    movingLeft = false;
    setInterval(movingBoxDown, 1000);
  }
}

const moveLeft = (event) => {
  
  if (event.keyCode == 37) {
    movingRight = false;
    movingLeft = true;
    movingDown = false;
    setInterval(movingBoxLeft, 1000);
  }
}


document.addEventListener("keydown", moveRight);
document.addEventListener("keydown", moveDown);
document.addEventListener("keydown", moveLeft);



















// Generating a random piece of food in a sqaure 
  // Math.random


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




