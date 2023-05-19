var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");

function sumNumbers(num1, num2) {
  return num1 + num2;}

num1 = Number(num1);
num2 = Number(num2);


if (isNaN(num1) || isNaN(num2)) {
  console.log("Invalid input. Please enter numbers.");
} else {
  var result = sumNumbers(num1, num2);
  console.log("The sum is: " + result);
}