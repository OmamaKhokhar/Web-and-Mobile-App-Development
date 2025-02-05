// Chapter 9 : Prompt

// 1. Get user's name and display a greeting.
var firstName = prompt("First Name: ");
var lastName = prompt("Last Name: ");
var fullName = firstName + " " + lastName;

alert("Hello " + fullName + "!");

// 2.Write a program to take a number in a variable, do the required arithmetic to display the following result
var a = prompt("The Value of a: ");

document.write("<p>Result<p>");
document.write("<p>The  Value of a is: " + a + "</p>");

document.write("<p>------------------------------------</p>");

document.write("<p>The Value of ++a is: " + ++a + "</p>");
document.write("<p>Now the Value of a is: " + a + "</p><br/>");

document.write("<p>The Value of a++ is: " + a++ + "</p>");
document.write("<p>Now the Value of a is: " + a + "</p><br/>");

document.write("<p>The Value of --a is: " + --a + "</p>");
document.write("<p>Now the Value of a is: " + a + "</p><br/>");

document.write("<p>The Value of a-- is: " + a-- + "</p>");
document.write("<p>Now the Value of a is: " + a + "</p>");

document.write("<hr/>");

// 3. The Age Calculator:
// 3a. Store the current year in a variable.
// 3b. Store a birth year in another variable.
// 3c. Calculate and display two possible ages based on the stored values.
var currentYear = +prompt("Current Year: ", 2024);
var birthYear = +prompt("Birth Year: ", 2000);
var age = currentYear - birthYear;

document.write("<h1>Age Calculator</h1>");
document.write("<p>Current Year: " + currentYear + "</p>");
document.write("<p>Birth Year: " + birthYear + "</p>");
document.write("<p>Your Age is: " + age + "</p>");

document.write("<hr/>");

// 4. The Geometrizer:
// 4a. Store the radius of a circle in a variable.
// 4b. Calculate the circumference of the circle and display it.
// 4c. Calculate the area of the circle and display it.
var radius = +prompt("Radius of Circle: ", 5);
var circumference = 2 * 3.142 * radius;
var area = 3.142 * (radius * ra);

document.write("<h1>The Geometrizer</h1>");
document.write("<p>Radius of a circle: " + radius + "</p>");
document.write("<p>The Circumference is: " + circumference + "</p>");
document.write("<p>The area is: " + area + "</p>");

document.write("<hr/>");

// 5. The Lifetime Supply Calculator:
// 5a. Store your favorite snack in a variable.
// 5b. Store your current age in a variable.
// 5c. Store a maximum age in a variable.
// 5d. Store the estimated amount of snack you consume per day in a variable.
// 5e. Calculate the total amount of snack you will consume for the rest of your life, and display the result.
var favoriteSnack = prompt("Your Favorite Snack: ", "Chips");
var currentAge = +prompt("Your Current Age: ", 20);
var maxAge = +prompt("Your Maximum Age: ", 65);
var snackPerDay = +prompt("Snack per Day: ", 5);
var totalSnack = (maxAge - currentAge) * snackPerDay * 365;

document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("<p>Favorite Snack: " + favoriteSnack + "</p>");
document.write("<p>Current Age: " + currentAge + "</p>");
document.write("<p>Estimated Maximum Age: " + maxAge + "</p>");
document.write("<p>Amout of snack per Day: " + snackPerDay + "</p>");
document.write("<p>You will need " + totalSnack + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".</p>");

document.write("<hr/>");

// 6. Get a number from the user, show its multiplication table; default to 5 if no input.
var tableNumber = prompt("Enter a number for the multiplication table:", 5);

document.write("<h1>Multiplication Table of " + tableNumber + "</h1>");
document.write(
  "<p>" + tableNumber + " x 1 = " + (tableNumber * 1) + "<br/>" +
  tableNumber + " x 2 = " + (tableNumber * 2) + "<br/>" +
  tableNumber + " x 3 = " + (tableNumber * 3) + "<br/>" +
  tableNumber + " x 4 = " + (tableNumber * 4) + "<br/>" +
  tableNumber + " x 5 = " + (tableNumber * 5) + "<br/>" +
  tableNumber + " x 6 = " + (tableNumber * 6) + "<br/>" +
  tableNumber + " x 7 = " + (tableNumber * 7) + "<br/>" +
  tableNumber + " x 8 = " + (tableNumber * 8) + "<br/>" +
  tableNumber + " x 9 = " + (tableNumber * 9) + "<br/>" +
  tableNumber + " x 10 = " + (tableNumber * 10) + "</p>"
);

document.write("<hr/>");

// 7. Table Format Marksheet:
// 7a. Prompt for three subject names and store them.
// 7b. Set total marks (100) for each subject.
// 7c. Get and store obtained marks for each subject.
// 7d. Calculate total marks and percentage, display in a table.
var marksPerSubject = 100;
var subjectCount = 3;

var subject1 = prompt("Subject 1:", "Math");
var subject2 = prompt("Subject 2:", "Science");
var subject3 = prompt("Subject 3:", "English");

var marksObtained1 = +prompt("Marks Obtained in " + subject1 + ":");
var marksObtained2 = +prompt("Marks Obtained in " + subject2 + ":");
var marksObtained3 = +prompt("Marks Obtained in " + subject3 + ":");

var percentage1 = (marksObtained1 / marksPerSubject) * 100;
var percentage2 = (marksObtained2 / marksPerSubject) * 100;
var percentage3 = (marksObtained3 / marksPerSubject) * 100;

var totalMarks = marksPerSubject * subjectCount;
var totalObtained = marksObtained1 + marksObtained2 + marksObtained3;
var percentage = (totalObtained / totalMarks) * 100;

document.write(
  "<table border='1'>" +
    "<thead><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr></thead>" +
    "<tbody>" +
    "<tr><td>" + subject1 + "</td><td>" + marksPerSubject + "</td><td>" + marksObtained1 + "</td><td>" + percentage1 + "%</td></tr>" +
    "<tr><td>" + subject2 + "</td><td>" + marksPerSubject + "</td><td>" + marksObtained2 + "</td><td>" + percentage2 + "%</td></tr>" +
    "<tr><td>" + subject3 + "</td><td>" + marksPerSubject + "</td><td>" + marksObtained3 + "</td><td>" + percentage3 + "%</td></tr>" +
    "</tbody>" +
    "<tfoot><tr><th>Total</th><th>" + totalMarks + "</th><th>" + totalObtained + "</th><th>" + percentage + "%</th></tr></tfoot>" +
  "</table>"
);
