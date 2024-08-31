// Control Statements: Conditional Statment 
// A conditional statement is a programming construct that executes different code blocks based on whether a specified condition is true or false.

// Chapter 10: if statements
// If Statement: A control structure that allows you to execute a block of code only if a specified condition is true.
// Condition: An expression that evaluates to true or false, determining whether the code block inside the if statement should run.
// Syntax: An if statement starts with the keyword if, followed by a condition in parentheses that checks whether an expression is true or false, executing the code block inside the curly brackets {} if the condition is true.

// Chapter 11: Comparison Operators
// Comparison Operators: Symbols used to compare two values. They return a Boolean value (true or false) based on the comparison.
// ===: Strictly checks if two values are equal and of the same type.
// !==: Strictly checks if two values are not equal or not of the same type.
// >: Checks if the left value is greater than the right.
// <: Checks if the left value is less than the right.
// >=: Checks if the left value is greater than or equal to the right.
// <=: Checks if the left value is less than or equal to the right.

// Chapter 12: Else and Else If Statements
// Else If Statement: An extension of the if statement that allows you to test additional conditions if the initial if condition fails.
// Else Statement: A control structure that allows you to execute a block of code if the previous if condition is false.

var capitalOfPakistan = prompt("Enter the Capital of Pakitstan: ");

if (capitalOfPakistan === "Islamabad"){
    alert("Correct");
}
else if (capitalOfPakistan === "Lahore"){
    alert("Close, but not the capital")
}
else if (capitalOfPakistan === "Karachi"){
    alert("Not the capital after 14 August 1967, try again.")
}
else {
    alert("Not the capital, try again.");
}

// Chapter 13: Testing Sets of Conditions
// Test multiple conditions using logical operators like && (AND) and || (OR) in JavaScript. This allows you to execute code blocks based on whether a combination of conditions is true or false.
// Testing Multiple Conditions with AND (&&):
// The && operator allows you to test if multiple conditions are true simultaneously. If all the conditions are true, the code block will execute; if any condition is false, the code block will not execute.
// Testing Multiple Conditions with OR (||):
// The || operator allows you to test if any of a set of conditions is true. If at least one condition is true, the code block will execute; if all conditions are false, the code block will not execute.
// Combining AND (&&) and OR (||) Conditions

// Chapter 14: Nested if Statements
// A nested if statement is an if statement that exists inside another if or else block. This allows you to test further conditions only if the initial condition is true.


// Problem: Employee Performance Evaluation System
// The program should assess employees based on various criteria, such as age, years of service, average monthly sales, and job performance score. The system will determine the employee's eligibility for a bonus, promotion, or no action based on the inputs provided.

// Define criteria values
var bonusAge = 28; 
var bonusYears = 3;
var bonusSales = 8000; 
var bonusScore = 6; 

var promoAge = 35;
var promoYears = 10;
var promoSales = 20000; 
var promoScore = 9; 

// Get employee details
var employeeName = prompt("Enter your Name: ", "Ali");
var employeeAge = +prompt("Enter your Age: ", 28);
var yearsOfService = +prompt("Enter your Years of Service: ", 6);
var monthlySales = +prompt("Enter your Average Monthly Sales: ", 12000);
var performanceScore = +prompt("Enter your Job Performance Score (1 to 10): ", 8);

// Check eligibility
if (employeeAge >= promoAge &&
    yearsOfService > promoYears &&
    monthlySales > promoSales &&
    performanceScore > promoScore) {
    alert("Great News!! " + employeeName + " You got the Promotion");
} else if (employeeAge >= bonusAge &&
    yearsOfService > bonusYears &&
    monthlySales > bonusSales &&
    performanceScore > bonusScore) {
    alert("Amazing!! " + employeeName + " You got the Bonus");
} else {
    alert("Keep up the good work, but no bonus or promotion at this time.");
}
