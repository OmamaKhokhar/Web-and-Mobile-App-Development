// Chapter 5: Math Expressions: familiar operators
// Basic math in JavaScript includes addition (+), subtraction (-), multiplication (*), division (/) and Modulus Operator %.
// Variables can be used in expressions, either combined with numbers or with other variables.
var subjectCount = 5;
var marksPerSubject = 100;

var math = 70;
var english = 80;
var science = 90;
var urdu = 75;
var socialScience = 85;

var totalMarks = marksPerSubject * subjectCount;
var obtainedMarks = math + english + science + urdu + socialScience;

// Chapter 6: Math Expressions: Unfamiliar Operators
// Increment (++) adds 1 to a variable, and decrement (--) subtracts 1.
// Postfix: The variable's original value is used in the expression before the increment occurs.
// Prefix: The variable is incremented first, and the updated value is used in the expression.
obtainedMarks++; 

// Chapter 7: Math Expressions: eliminating ambiguity
// Order of Operations: Multiplication and division have higher precedence than addition and subtraction
// Left-to-Right: Operations of the same precedence are evaluated from left to right 
// Parentheses: Use parentheses to override default precedence and control operation order/
var averageMarks = obtainedMarks / subjectCount;
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h2>Marksheet</h2>");
document.write("<p>Math: " + math + "</p>");
document.write("<p>English: " + english + "</p>");
document.write("<p>Science: " + science + "</p>");
document.write("<p>Urdu: " + urdu + "</p>");
document.write("<p>Social Science: " + socialScience + "</p>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Obtained Marks: " + obtainedMarks + "</p>");
document.write("<p>Average Marks: " + averageMarks + "</p>");
document.write("<p>Percentage: " + percentage + "%</p>");
