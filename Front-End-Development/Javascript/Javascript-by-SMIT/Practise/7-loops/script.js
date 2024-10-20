// Loops: A structure that allows code to repeat a block of instructions multiple times based on a condition.
// Purpose: Loops can reduce repetitive code, such as checking multiple array elements or running repeated actions.

// Chapter 18: Loops
// for loop: Executes a block of code a certain number of times, using a counter variable.
// Initialization: Sets the starting point for the loop, typically with a counter.
// Condition: Specifies when the loop should stop running (e.g., when a counter reaches a certain value).
// Increment/Decrement: Adjusts the counter at the end of each loop iteration.

// Chapter 19: For Loops - Flags, Booleans, Array Length, and Breaks
// Boolean: Represents two values - true or false, commonly used with flags.
// Flag: A variable that acts as a signal, usually starting as 'false' or 'no'. It flips to 'true' or 'yes' when a specific condition is met.
// Array Length: .length is a property that counts number of items in an array, which helps us determine how many times to loop through it.
// Break: The break keyword is used to exit a loop early.

// Chapter 20: For Loops Nested
// Nested Loops: A nested loop is a loop inside another loop. The outer loop runs once, then the inner loop completes its full cycle before the outer loop moves to the next iteration.

// Problem Name: Palindrome Check
// check if the word reads the same forward and backward. Return true if it is the same, otherwise return false.

var message =
  "Welcome to the Palindrome Game \n You can Check whether you ahve special Name that its spell Backward same.";
var userName = prompt("Enter The Name To Check: ", "maham");
var reversedUserName = "";

// Checked User Enter the Name
for (var i = 0; userName === null || userName === ""; i++) {
  alert("Kindly Enter your Name");
  userName = prompt("Enter The Name To Check: ", "maham");
}

// Reversed The Name
for (var i = 1; i <= userName.length; i++) {
  reversedUserName += userName[userName.length - i];
}

// Checking the reversed Name
if (userName === reversedUserName) {
  alert("Your Name is Special. It`s Palindrome Aprroved!");
} else {
  alert("Your Name is not Palindrome Aprroved!");
}

// Problem Name: Minimum and Maximum Finder
// Given an array of numbers, your task is to finds the smallest and largest values in a array.

var numbers = [20, 40, 11, 95, 3, 64];
var max = numbers[0];
var min = numbers[0];

for (var i = 0; i < numbers.length; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
  if (min > numbers[i]) {
    min = numbers[i];
  }
}

alert(`The Maximum Number is ${max}.\n
    The Minimum Number is ${min}.`);

// Problem Name: Missing Number Finder
// Description: Given an array of numbers from 1 to 10, find the missing number in the series.
var numberSeries = [1, 2, 3, 6, 7, 8, 10];
var missingNumberSeries = [];
var missingNumbersQuantity;

for (var i = 0; i < numberSeries.length - 1; i++) {
  if (numberSeries[i + 1] - numberSeries[i] > 1) {
    missingNumbersQuantity = numberSeries[i + 1] - numberSeries[i] - 1;
    for (var j = 1; j <= missingNumbersQuantity; j++) {
      missingNumberSeries.push(numberSeries[i] + j);
      numberSeries.splice(i + j, 0, numberSeries[i] + j);
    }
  }
}

alert(missingNumberSeries);
alert("The Series is " + numberSeries);

// Problem Name: Sum of Digits
// Description: Calculate the sum of all digits in a given number.
var userNumber = prompt("Enter the Number to calculate the sum of digits", 18);
var sumOfDigit = 0;

for (var i = 0; i < userNumber.length; i++) {
  sumOfDigit += parseInt(userNumber[i]);
}

alert("The Sum of digits for " + userNumber + " is " + sumOfDigit);

// Chapter 41: while Loops
// while loop: Executes a block of code repeatedly as long as the condition remains true.
// Initialization: The counter is set before the loop starts.
// Condition: The loop continues to run while the condition evaluates to true.
// Update: The counter must be updated within the loop to avoid infinite loops.

// Chapter 42: do...while Loops
// do...while loop: Similar to a while loop, but ensures that the block of code runs at least once, regardless of the condition.
// Initialization: The counter is set before the loop starts.
// Execution: The block of code runs first, then the condition is evaluated.
// Condition: After running the code once, the condition is checked. If true, the loop continues.
// Difference: do...while loops always execute the code once, even if the condition is initially false.

// Problem: User Authentication and Data Entry System
// Description: Create a system where a user must authenticate with a username and password, and then enter multiple pieces of data (e.g., daily expenses). The program should allow the user to retry the login if incorrect credentials are provided, with a maximum of 3 attempts. Once logged in, the user can input multiple daily expenses until they choose to stop, after which the total expenses are shown.

var userName = "admin";
var userPassword = "12admin12";
var dailyExpensesItems = [];
var dailyExpensesPrice = [];
var totalExpenses = 0;

var attempts = 0;
var totalChances = 3;

// User Authentication for Login
while (attempts < totalChances) {
  var inputtedUserName = prompt("Enter your username: ");
  var inputtedUserPassword = prompt("Enter your password: ");

  if (userName === inputtedUserName && userPassword === inputtedUserPassword) {
    alert("Logged In");
    dailyExpensesRegister();
    break;
  } 
  else {
    attempts++;
    if (userName !== inputtedUserName && userPassword !== inputtedUserPassword) {
        alert(`Login Failed!! ${totalChances - attempts} Chances are Left`);
    }
    else if (userName !== inputtedUserName) {
      alert(`Wrong Username!! ${totalChances - attempts} Chances are Left`);
    } 
    else{
      alert(`Wrong Password!! ${totalChances - attempts} Chances are Left`);
    }
  }

  if (attempts === totalChances) {
    alert("Maximum attempts reached. Please try again later.");
  }
}

// A register to store Items and its prices
function dailyExpensesRegister() {
  var item;
  var price;
  var stop = "stop";
  var flag = true;
  alert(
    "Make Today`s Daily Expenses Register by entering the list of items with prices you bought today"
  );

  while (flag) {
    item = prompt(
      "Enter the item name and stop by typing 'stop' :",
      "White Sauce Pasta"
    );

    if (item.toLowerCase() === stop) {
      totalDailyExpenses();
      flag = false;
    } else {
      price = +prompt("Enter the price of the item", "800");
      dailyExpensesItems.push(item);
      dailyExpensesPrice.push(price);
    }
  }
}

// Calculator for Todays total expenses
function totalDailyExpenses() {
  totalExpenses = 0;

  for (var i = 0; i < dailyExpensesPrice.length; i++) {
    totalExpenses += dailyExpensesPrice[i];
  }

  alert(`Total Expenses for Today: ${totalExpenses}`);
}