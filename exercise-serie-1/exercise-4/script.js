//Check to see if script is linked properly.
console.log("This script is linked properly!");

function CalculateAge() {
  var today = new Date();
  var birthYear = document.getElementById("Year").value;
  var birthMonth = document.getElementById("Month").value;
  var age = today.getFullYear() - birthYear;

  if (birthMonth > today.getMonth()) {
    age - 1;
  }

  alert(age);
}
