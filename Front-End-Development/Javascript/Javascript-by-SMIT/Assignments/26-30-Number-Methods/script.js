// Question 1: Display various values of a positive integer
// - Take a positive integer as input
// - Display the number, round off value, floor value, and ceil value
document.write(`<h1>Positive Integer</h1>`);

var positiveNumber = +prompt("Enter the positive integer: ");
document.write(`Number:  ${positiveNumber}  <br>`);

var roundOffPositiveNumber = Math.round(positiveNumber);
document.write(`Round off value:  ${roundOffPositiveNumber}  <br>`);

var floorPositiveNumber = Math.floor(positiveNumber);
document.write(`Floor value:  ${floorPositiveNumber}  <br>`);

var ceilPositiveNumber = Math.ceil(positiveNumber);
document.write(`Ceil value:  ${ceilPositiveNumber}  <br>`);

// Question 2: Display various values of a negative floating point number
// - Take a negative floating point number as input
// - Display the number, round off value, floor value, and ceil value
document.write(`<h1>Negative Floating Point Number</h1>`);
var negativeNumber = +prompt("Enter the negative floating point number ");
document.write(`Number:  ${negativeNumber}  <br>`);

var roundOffNegativeNumber = Math.round(negativeNumber);
document.write(`Round off value:  ${roundOffNegativeNumber}  <br>`);

var floorNegativeNumber = Math.floor(negativeNumber);
document.write(`Floor value:  ${floorNegativeNumber}  <br>`);

var ceilNegativeNumber = Math.ceil(negativeNumber);
document.write(`Ceil value:  ${ceilNegativeNumber}  <br>`);

// Question 3: Display the absolute value of a number
// - Take a number as input
// - Display the absolute value of the number
var number = +prompt("Enter the number to make it absolute: ");
var absoluteNumber = Math.abs(number);

document.write(`The Absolute value of ${number}:  ${absoluteNumber}  <br>`);

// Question 4: Simulate a dice roll
// - Use Math.random() to generate a random number between 1 and 6
// - Display the value of the dice
var dice = Math.ceil(Math.random() * 6);

document.write(`The value of the Random dice is:  ${dice}  <br>`);

// Question 5: Simulate a coin toss
// - Use Math.random() to generate a random number between 1 and 2
// - Display the value of the coin (Heads or Tails)
var tail = 1;
var head = 2;
var coinFlip = Math.ceil(Math.random() * 2);

document.write(`Coin Value: ${coinFlip}<br>`);

if(coinFlip === tail){
    document.write(`The coin landed on Tails.  <br>`);
}
else if(coinFlip === head){
    document.write(`The coin landed on Heads.  <br>`);
}
else{
    document.write(`Invalid Coin Value.  <br>`);
}


// Question 6: Show a random number between 1 and 100
// - Use Math.random() to generate a random number between 1 and 100
// - Display the random number
var randomNumber = Math.ceil(Math.random() * 100);

document.write(`The Random Number is:  ${randomNumber}  <br>`);

// Question 7: Parse and display user's weight
// - Take weight input from user in various formats
// - Parse the input and display the weight
var weight = prompt("Enter your weight in Kilograms: ");
var parsedWeight = parseFloat(weight);

document.write(`Your Weight of user:  ${parsedWeight}Kg  <br>`);  

// Question 8: Guess the secret number
// - Store a random secret number between 1 and 10
// - Ask user to guess the number
// - Congratulate the user if the guess is correct
var secretNumber = Math.ceil(Math.random() * 10);
var userNumber = +prompt("Please enter the secret number from 1 to 10");

if (secretNumber === userNumber){
    document.write("Congratulations!! You have successfully guessed the number");
}
else if(userNumber > 10 || userNumber < 0){
    document.write("Enter the valid number between the range of 1 to 10");
}
else{
    document.write("Try again");
}