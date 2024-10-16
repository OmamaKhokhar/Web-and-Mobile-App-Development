// It Includes:
// Chapter 10: if statements
// Chapter 11: Comparison Operators
// Chapter 12: Else and Else If Statements
// Chapter 13: Testing Sets of Conditions
// Chapter 14: Nested if Statements

// Question 1. Take input for city name and check if it is "Karachi"
// If it is "Karachi", display a welcome message
var city = prompt("Enter the City Name: ");

if (city === "Karachi") {
  alert("Welcome to the city of lights");
}

// Question 2. Take input for gender and display a greeting message
// If male, display "Good Morning Sir"
// If female, display "Good Morning Ma’am"
var gender = prompt("Enter your Gender: Male/Female");

if (gender === "Male") {
  alert("Good Morning Sir");
} else if (gender === "Female") {
  alert("Good Morning Ma'am");
}

// Question 3. Take input for traffic signal color and show appropriate message
// Red: "Must Stop", Yellow: "Ready to move", Green: "Move now"
var signal = prompt("Enter the Traffic Signal: Red/Yellow/Green");

if (signal === "Red") {
  alert("Must Stop");
} else if (signal === "Yellow") {
  alert("Ready to move");
} else if (signal === "Green") {
  alert("Move now");
}

// Question 4. Take input for remaining fuel in car (in litres)
// If fuel is less than 0.25 litres, show a refill message
var remainingFuel = +prompt("Enter the Remaining Fuel in liter: ", 0.45);

if (remainingFuel < 0.25) {
  alert("Your Fuel is almost finished! Refill it");
}

// Question 5: Record the outputs:
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}
// The alert message is displayed

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
// The alert message is not displayed because the condition is false

var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
// The alert message is not displayed because the condition is false
if (c === 13) {
  alert("condition 2 is true");
}
// The alert message is displayed
if (++c < 14) {
  alert("condition 3 is true");
}
// The alert message is not displayed because the condition is false
if (c === 14) {
  alert("condition 4 is true");
}
// The alert message is displayed

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
// The alert message is displayed

if (true) {
  alert("True");
}
// The alert message is displayed

if (false) {
  alert("False");
}
// The alert message is not displayedbexcaue the condition is false

if ("car" < "cat") {
  alert("car is smaller than cat");
}
// The alert message is displayed

// Question 6: Create a program to input marks for three subjects and total marks.
// Then calculate the percentage and grade based on a given table.
// Display the total marks, marks obtained, percentage, grade, and remarks.
var english = +prompt("Enter the Obtained Marks of English: ", 70);
var maths = +prompt("Enter the Obtained Marks of Maths:");
var science = +prompt("Enter the Obtained Marks of Science:");
var totalMarks = +prompt("Enter the Total Marks:");
var obtainedMarks = english + maths + science;
var percentage = (obtainedMarks / totalMarks) * 100;
var grade;
var remarks;

if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else {
  grade = "Fail";
  remarks = "Sorry";
}

document.write(`
  <h1>Marks Sheet</h1>
  Total Marks: ${totalMarks} <br>
  Marks Obtained: ${obtainedMarks} <br>
  Percentage: ${percentage}% <br>
  Grade: ${grade} <br>
  Remarks: ${remarks} <br>
  <hr>
`);

// Question 7a: Create a guessing game where the user is asked to guess a secret number (1-10).
// If the guess is correct, show "Bingo! Correct answer".
// Question 7b: If the guessed number is one less than the secret number, show "Close enough to the correct answer".
var secretNumber = 3;
var guessNumber = +prompt("Guess a number between 1 and 10:");

if (guessNumber === secretNumber) {
  alert("Bingo! Correct answer");
} else if (guessNumber === secretNumber - 1) {
  alert("Close enough to the correct answer");
} else {
  alert("Try again");
}

// Question 8: Write a program to check if a number is divisible by 3, and display a message to the user if it is.
var number = +prompt("Enter a number:");
var divisibleNumber = 3;

if (number % divisibleNumber === 0) {
  alert(number + " is divisible by " + divisibleNumber);
}

// Question 9: Write a program to check if a given input is even or odd, and display the result accordingly.
var num = +prompt("Enter the Number to check whether it is Even or Odd: ");
if (num % 2 === 0) {
  alert(num + " is Even");
} else {
  alert(num + " is Odd");
}

// Question 10: Write a program that takes the temperature as input, and shows different messages based on the temperature:
// - If temperature is greater than 40, show "It is too hot outside."
// - If temperature is greater than 30, show "The Weather today is Normal."
// - If temperature is greater than 20, show "Today’s Weather is cool."
// - If temperature is greater than 10, show "OMG! Today’s weather is so Cool."
var temperature = +prompt("Enter the current Temperature: ");

if (temperature > 40) {
  alert("It`s is too hot outside.");
}
if (temperature > 30) {
  alert("The Weather today is Normal.");
}
if (temperature > 20) {
  alert("Today’s Weather is cool.");
} else {
  alert("OMG! Today’s weather is so Cool.");
}

// Question 11: Create a simple calculator using if statements to handle +, -, *, /, and % operations.
// - Input the first number, second number, and the operation.
// - Compute and display the result based on the selected operation.
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var operation = prompt("Enter the operation (+, -, *, /, %):");

if (operation === "+") {
  alert(num1 + num2);
} else if (operation === "-") {
  alert(num1 - num2);
} else if (operation === "*") {
  alert(num1 * num2);
} else if (operation === "/") {
  alert(num1 / num2);
} else if (operation === "%") {
  alert(num1 % num2);
} else {
  alert("Invalid operation");
}

// Question 12. Take a character input (number or string)
// Check if it is a number, uppercase letter, or lowercase letter using ASCII values.
var character = prompt(
  "Enter a Character to guess either a number, an uppercase letter, or a lowercase letter: "
);
var character = character.charCodeAt();

if (character >= 48 && character <= 57) {
  alert("The character is a number");
} else if (character >= 65 && character <= 90) {
  alert("The character is an uppercase letter");
} else if (character >= 97 && character <= 122) {
  alert("The character is an uppercase letter");
} else {
  alert("Enter the valid Character");
}

// Question 13. Accept two integers as input
// Display the larger of the two numbers, or show if they are equal
var number1 = +prompt("Enter the 1st Number: ");
var number2 = +prompt("Enter the 2nd Number: ");

if (number1 > number2) {
  alert(number1 + " is Larger than " + number2);
} else if (number1 < number2) {
  alert(number2 + " is Larger than " + number1);
} else {
  alert("Both numbers are equal");
}

// Question 14. Take a number as input from the user
// Check if the number is positive, negative, or zero, and display the result.
var integar = prompt(
  "Enter a Number to guess whether the number is positive, negative or zero: "
);

if (integar > 0) {
  alert("The number is positive");
} else if (integar < 0) {
  alert("The number is negative");
} else {
  alert("The Number is Zero");
}

// Question 15. Take a single character as input (length 1)
// Return true if it's a vowel, otherwise return false
var char = prompt("Enter a character to check whether it is vowel or not: ");

if (char === "a" || char === "A") {
  alert("The character is a vowel");
} else if (char === "e" || char === "E") {
  alert("The character is a vowel");
} else if (char === "i" || char === "I") {
  alert("The character is a vowel");
} else if (char === "o" || char === "O") {
  alert("The character is a vowel");
} else if (char === "u" || char === "U") {
  alert("The character is a vowel");
} else {
  alert("The character is not a vowel");
}

// Question 16
// 16a. Store the correct password in a variable
// 16b. Ask the user to enter their password
// 16c. Validate the password
var password = "AD2003ad";
var userPassword = prompt("Enter your password: ");

if (!userPassword) {
  alert("Please enter your password.");
} else if (password === userPassword) {
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}

// Question 17. Fix the if/else statement that determines the greeting message:
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// 18. Take time input in 24-hour clock format (e.g., 1900 = 7pm)
//    Use if, else, and else if statements to handle different time ranges for greetings
var time = +prompt("Enter the time in 24-hour clock format (e.g., 1900 = 7pm)");
var greeting;

if (time >= 0 && time < 1200){
    greeting = "Good Morning!";
}
else if (time >= 1200 && time > 17000){
    greeting = "Good Afternoon!";
}
else if (time >= 7000 && time > 2100){
    greeting = "Good Evening!";
}
else if (time >= 2100 && time > 2359){
    greeting = "Good Night!";
}
else {
    greeting = "Invalid Time!";
}