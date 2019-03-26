//Check to see if script is linked properly.
console.log("This script is linked properly!");

function Reset() {
  document.getElementById("q1").value = "";
  document.getElementById("q2").value = "";
  document.getElementById("q3").value = "";
  document.getElementById("q4").value = "";
}

function Display() {
  let vilname = document.getElementById("q1").value;
  let superpower = document.getElementById("q2").value;
  let motivation = document.getElementById("q3").value;
  let plan = document.getElementById("q4").value;
  document.getElementById("formulier").innerHTML =
    "Villain name: " +
    vilname +
    "<br>" +
    "Superpower: " +
    superpower +
    "<br>" +
    "Motivation: " +
    motivation +
    "<br>" +
    "Plan: " +
    plan;
}
