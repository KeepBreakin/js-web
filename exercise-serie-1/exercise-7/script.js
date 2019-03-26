//Check to see if script is linked properly.
console.log("This script is linked properly!");

let turn = 0;
let word = document.getElementById("btn");

function Move() {
  turn++;
  if (turn === 5) {
    turn = 0;
  }
  let btn = document.getElementById("btn");

  btn.style.top = Math.floor(Math.random() * 500 + 1) + "px";
  btn.style.left = Math.floor(Math.random() * 400 + 1) + "px";

  switch(turn) {
      case 0: 
      word.textContent = "retard"
      break;
      case 1: 
      word.textContent = "dipshit"
      break;
      case 2: 
      word.textContent = "idiot"
      break;
      case 3: 
      word.textContent = "twat"
      break;
      case 4: 
      word.textContent = "fuckface"
      break;
  }
}
