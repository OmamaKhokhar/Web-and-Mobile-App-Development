// It Includes:
// Chapter 5: Math Expressions: familiar operators
// Chapter 6: Math Expressions: Unfamiliar Operators
// Chapter 7: Math Expressions: Eliminating Ambiguity
// Chapter 8: Concatenating Text Strings

// 1. Write a program that takes two numbers, adds them, and displays the result in the browser.
var firstNumber = 3;
var secondNumber = 5;
var sum = firstNumber + secondNumber;
document.write("<p>Sum of " + firstNumber + " and " + secondNumber + " is " + sum + ".</p>");

// 2. Repeat the addition task for subtraction, multiplication, division, and modulus operations.
var firstNumber = 3;
var secondNumber = 5;

var difference = firstNumber - secondNumber;
document.write(
  "<p>Subtraction of " + firstNumber + " and " + secondNumber + " is " + difference + ".</p>"
);

var product = firstNumber * secondNumber;
document.write(
  "<p>Multiplication of " + firstNumber + " and " + secondNumber + " is " + product + ".</p>"
);

var quotient = firstNumber / secondNumber;
document.write(
  "<p>Division of " + firstNumber + " and " + secondNumber + " is " + quotient + ".</p>"
);

var remainder = firstNumber % secondNumber;
document.write(
  "<p>Remainder of " + firstNumber + " and " + secondNumber + " is " + remainder + ".</p>"
);

document.write("<hr/>")

// 3. Work with a variable: declare it, display its initial value, increment it, and show updated values after operations (addition, decrement, modulus).
// 3a. Declare a variable.
// 3b. Display the value of the variable before initialization.
// 3c. Initialize the variable with a number.
// 3d. Display the initial value after assigning a number.
// 3e. Increment the variable and show the updated value.
// 3f. Add 7 to the variable and display the result.
// 3g. Decrement the variable and display the result.
// 3h. Show the remainder after dividing the variable by 3.
var number;
document.write("<p>Value after variable declaration is: " + number + "</p>");

number = 5;
document.write("<p>Initial value: " + number + "</p>");

number++;
document.write("<p>Value after increment is: " + number + "</p>");

number =  number + 7;
document.write("<p>Value after addition is: " + number + "</p>");

number--;
document.write("<p>Value after decrement is: " + number + "</p>");

number = number % 3;
document.write("<p>The remainder is: " + number + "</p>");

document.write("<hr/>")

// 4. Store the price of a movie ticket in a variab//le, calculate the total cost for 5 tickets, and display it in the browser.
var movieTicketPrice = 600;
var ticketCount = 5;
var totalCost = movieTicketPrice * ticketCount;

document.write("<p>Total cost to buy " + ticketCount + " tickets to a movie is " + totalCost + "PKR</p>");

document.write("<hr/>")

// 5. Write a script to display the multiplication table of a specified number in the browser.
var tableNumber = 4;

document.write("<p>Table of " + tableNumber + "</p>")
document.write(
    "<p>" + tableNumber + " x 1 = " + (tableNumber * 1) + "</p>" +
    "<p>" + tableNumber + " x 2 = " + (tableNumber * 2) + "</p>" +
    "<p>" + tableNumber + " x 3 = " + (tableNumber * 3) + "</p>" +
    "<p>" + tableNumber + " x 4 = " + (tableNumber * 4) + "</p>" +
    "<p>" + tableNumber + " x 5 = " + (tableNumber * 5) + "</p>" +
    "<p>" + tableNumber + " x 6 = " + (tableNumber * 6) + "</p>" +
    "<p>" + tableNumber + " x 7 = " + (tableNumber * 7) + "</p>" +
    "<p>" + tableNumber + " x 8 = " + (tableNumber * 8) + "</p>" +
    "<p>" + tableNumber + " x 9 = " + (tableNumber * 9) + "</p>" +
    "<p>" + tableNumber + " x 10 = " + (tableNumber * 10) + "</p>"
  );

document.write("<hr/>")

// 6. What will be the output in variables a, b & result after execution of this code?
var a = 2, b = 1;
var result = --a - --b + ++b + b--; 
// --a: Pre-decrement 'a' so now a = 1.
// --a - --b: Pre-decrement 'b' (b becomes 0), then subtract from 'a' (1 - 0 = 1).
// --a - --b + ++b: Pre-increment 'b' (b becomes 1), then add to the previous result (1 + 1 = 2).
// --a - --b + ++b + b--: Add 'b' (1) to the result (2 + 1 = 3), then post-decrement 'b' (b becomes 0).#


document.write("<p>a is " + a + "</p>");
document.write("<p>b is " + b + "</p>");
document.write("<p>result is " + result + "</p>");
// Final values:
// a = 1, b = 0, result = 3

document.write("<hr/>")

// 7. The Temperature Converter:
// 7a. Store a temperature in Celsius in a variable.
// 7b. Convert the Celsius temperature to Fahrenheit and display it.
// 7c. Store a temperature in Fahrenheit in a variable.
// 7d. Convert the Fahrenheit temperature to Celsius and display it.
var temperatureForCelsius = 25;
var celsiusToFahrenheit  = (temperatureForCelsius * 9 / 5) + 32;
document.write("<p>" + temperatureForCelsius + "<sup>O</sup>C is " + celsiusToFahrenheit  + "<sup>O</sup>F</p>");

var temperatureForFahrenheit = 70;
var fahrenheitToCelsius = (temperatureForFahrenheit - 32) * 5 / 9;
document.write("<p>" + temperatureForFahrenheit + "<sup>O</sup>F is " + fahrenheitToCelsius + "<sup>O</sup>C</p>");

document.write("<hr/>")

// 8. Implement a checkout process for an e-commerce site by calculating the total cost and displaying a receipt in the browser.
var item1Price = 650;
var item1Quantity = 3;
var item2Price = 100;
var item2Quantity = 7;
var shippingCharges = 100;
var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;

document.write("<p>Total Cost of your order is" + totalCost + "</p>");

document.write("<hr/>")

// 9. Store total marks and obtained marks in variables, calculate the percentage, and display the result in the browser.
var obtainedMarks = 804;
var totalMarks = 980;
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<p>Total marks: " + totalMarks + "</p>");
document.write("<p>Marks obtained: " + obtainedMarks + "</p>");
document.write("<p>Percentage: " + percentage + "</p>");

document.write("<hr/>");

// 10. Convert 10 US dollars and 25 Saudi Riyals to Pakistani Rupees in a single expression, and display the total.
var usDollar = 10;
var saudiRiyal = 25;
var totalInPKR = (usDollar * 104.80) + (saudiRiyal * 28);

document.write("<h1>Currency in PKR</h1>");
document.write("<p>Total Currency in PKR: " + totalInPKR + "</p>");

document.write("<hr/>");

// 11. Initialize a variable with a number, then perform a series of arithmetic operations (add, multiply, divide) in a single expression, and display the result.
var number = 12;
number = ((number + 5) * 10) / 2;

document.write("<p>The result is: " + number + "</p>")