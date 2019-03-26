//Check to see if script is linked properly.
console.log("This script is linked properly!");

//Write your JS code here...

let cookieCount = 0;
let cookieCount2 = 5;
let autoCount = 10;
let button = document.getElementById("DarkBtn");
button.style.display = "none";
let Autobutton = document.getElementById("AutoBtn");
Autobutton.style.display = "none";

function addCookie() {
  {
    cookieCount++;
    document.getElementById("text").value = cookieCount;
  }

  if (cookieCount >= cookieCount2) {
    button.style.display = "block";
    cookieCount = cookieCount + 1;
  }

  if (cookieCount >= autoCount) {
    Autobutton.style.display = "block";
  }
}
