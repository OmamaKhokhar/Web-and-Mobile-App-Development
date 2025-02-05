// Chapter 4: Variable Names Legal and Illegal

// Declare 3 variables in a single statement.
var firstName = "Omama", secondName = "Khokhar", fullName = firstName + secondName;

// Declare 5 legal and 5 illegal variable names.
// var alert, 1user, fulldetailsaboutuserbirth, age, Age; (illegal Variable)
var currentAge = 17;
var birthYear = "2006";
var birthMonth = "October";
var birthDate = "28";
var birth_detail = birthDate + " " + birthMonth + " " + birthYear;

// Display the following in the browser:
document.write("<h1>Rules for Naming JS Variables:</h1>");
document.write("<p>Variable names can only contain alphabetic characters, numbers, $, and _. For example, $my_1stVariable.</p>");
document.write("<p>Variables must begin with an alphabetic character, $ or _. For example, $name, _name, or name.</p>");
document.write("<p>Variable names are case-sensitive.</p>");
document.write("<p>Variable names should not be JS keywords.</p>");
