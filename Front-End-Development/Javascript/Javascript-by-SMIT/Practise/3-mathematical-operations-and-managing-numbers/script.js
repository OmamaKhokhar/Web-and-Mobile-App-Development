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

// Chapter 26: Rounding Numbers
//  Round numbers to the nearest integer using various methods to round up, down, or to the nearest whole number.
// Math.round(): Rounds to the nearest integer. If the decimal is 0.5 or higher, it rounds up; otherwise, it rounds down.
// Math.ceil(): Always rounds up, no matter how small the decimal. 
// Math.floor(): Always rounds down, no matter how large the decimal.

// Problem: Rating System
// a simple rating system. Each item receives multiple ratings, and you need to display the average rating rounded to the nearest whole number.
var rating = [4.5, 3.5, 4.8, 2.9, 3.7];
var sumRating = 0;
var avgRating;

for (var i = 0; i < rating.length; i++){
    sumRating += rating[i];
}

avgRating = Math.round(sumRating / rating.length);
console.log("Average Rating for this Product: " + avgRating);

// Problem: Food Delivery Service
// Customers order fractional meals, and you need to round up to the nearest full meal for preparation.
var order = [1.3, 2.4, 5.2, 3.3, 8.1];
var totalOrder = 0;

for( var i = 0; i < order.length; i++){
    totalOrder += order[i];
}

totalOrder = Math.ceil(totalOrder);
console.log("Total meals order for Preparation: " + totalOrder);
