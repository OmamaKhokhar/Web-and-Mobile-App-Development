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