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
