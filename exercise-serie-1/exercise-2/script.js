//Check to see if script is linked properly.
console.log("This script is linked properly!");
let numberOne, numberTwo;

function setValues() {
  numberOne = Number(document.getElementById("numberOne").value);
  numberTwo = Number(document.getElementById("numberTwo").value);
}

function Plus() {
  setValues();
  result = numberOne + numberTwo;
  document.getElementById("result").innerHTML = result;
}

function Min() {
  setValues();
  result = numberOne - numberTwo;
  document.getElementById("result").innerHTML = result;
}

function Delen() {
  setValues();
  result = numberOne / numberTwo;
  document.getElementById("result").innerHTML = result;
}
function Maal() {
  setValues();
  result = numberOne * numberTwo;
  document.getElementById("result").innerHTML = result;
}

function Reset() {
  document.getElementById("numberOne").value = "";
  document.getElementById("numberTwo").value = "";
  document.getElementById("result").innerHTML = "Result";
}
