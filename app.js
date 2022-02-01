let total = 1;


// const movingBoxDown = () => {
//   if (total >=10) {
//     document.getElementById(`box-${total-10}`).classList.remove("active");
//   }
//   document.getElementById(`box-${total}`).classList.add("active");
//   total += 10;
// } 

// setInterval(movingBoxDown, 1000);

// const movingBoxRight = () => {
//   if (total >= 2) {
//     document.getElementById(`box-${total-1}`).classList.remove("active");
//   }
//   document.getElementById(`box-${total}`).classList.add("active");
//   total += 1;
// // } 

// setInterval(movingBoxRight, 1000);

let total2 = 99;

const movingBoxLeft = () => {
  if (total2 >= 1) {
    document.getElementById(`box-${total2+1}`).classList.remove("active");
  }
  document.getElementById(`box-${total2}`).classList.add("active");
  total2 -= 1;
} 

setInterval(movingBoxLeft, 1000);



document.addEventListener("keydown", move);

// es5 syntax

function move (event){
  if (event.keyCode == 37) {
    console.log("LEFT")
  }
}










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




