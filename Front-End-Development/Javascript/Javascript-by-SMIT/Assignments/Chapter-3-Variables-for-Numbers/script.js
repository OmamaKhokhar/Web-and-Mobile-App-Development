// Chapter 3: Variables for Numbers

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 17;
alert("I am " + age + " years old");

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
var visits = 1;
alert("You have visited this site " + visits + " times");

var visits = visits + 1;
alert("You have visited this site " + visits + " times");

var visits = visits + 1;
alert("You have visited this site " + visits + " times");

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear = 2006;
document.write(
  "My birth year is " +
    birthYear +
    "</br>Data type of my declared variable is number."
);

// 4. A visitor visits an online clothing store Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on Clothing store”.
var visitorName = "John Doe";
var productName = "T-shirt";
var quantity = 5;

document.write(
  "</br><b>" +
    visitorName +
    "</b> ordered <b>" +
    quantity +
    " " +
    productName +
    "</b>(s) on Meno Clothing store"
);
