// Chapter 1: Alert
// Alert: An alert is a pop-up box that displays a message to the user.
// Syntax: The alert keyword is followed by parentheses, with the message inside them. 

alert("Assalam u Alaikum");

// Chapter 9: Prompts 
// A prompt box is a dialog that appears in the browser, asking the user to input some information. It provides a text field where the user can type a response.
// Using the + operator before a prompt forces the returned string to be converted into a number.

// The first argument is the message/question displayed to the user.
// The second argument is optional and sets a default response in the text field.
var fullName = prompt("Full Name: ");
var country = prompt("Country: ");

alert("Hi! " + fullName + " from " + country + "\nNice to meet You! \nHave a Nice Day!");

// Chapter 43: Placing Scripts
// JavaScript can be placed in various parts of an HTML file:
// 1. Inside the <head> section.
// 2. Inside the <body> section (beginning, middle, or end).

// Best Practice: Place scripts at the end of the <body> to ensure that the page content loads first
// External JavaScript files are recommended for better organization and reusability. 
// Link them using the <script src="file.js"></script> tag, usually placed at the end of the <body>.

// Chapter 44: Commenting
// Comments are ignored by the browser and used to explain code.
// 1. Single-line comments: 
// Start with // and everything after is ignored.
// 2. Multi-line comments: 
// Use /* to open and */ to close for multiple lines.