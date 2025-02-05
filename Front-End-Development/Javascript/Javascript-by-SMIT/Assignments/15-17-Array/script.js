// Includes:
// Chapter 15: Arrays
// Chapter 16: Arrays: Adding and Removing Elements
// Chapter 17: Arrays: Removing, Inserting, and Extracting Elements

// Question 1: Declare an empty array using JS literal notation
// - Suitable for dynamic data storage
var emptyArray = [];

// Question 2: Declare an empty array using JS object notation
// - Less common than literal notation
var emptyArray = new Array();

// Question 3: Declare and initialize a string array
var stringArray = ["apple", "orange", "Banana"];

// Question 4: Declare and initialize a number array
var numberArray = [20, 40, 70];

// Question 5: Declare and initialize a boolean array
var booleanArray = [true, false, false, true];

// Question 6: Declare and initialize a mixed array
var mixedArray = [true, "true", false, 0, 1, "false"];

// Question 7: Store education qualifications in an array
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
document.write("<h1>Educational Qualifications in Pakistan:</h1>");

document.write("<ul>");
for (var i = 0; i < qualifications.length; i++) {
  document.write(`<li> ${qualifications[i]} </li>`);
}
document.write("</ul>");

// Question 8: Store student names and scores in arrays
var studentName = ["Ali", "Ayesha", "Anna"];
var studentScore = [450, 260, 380];
var totalScore = 500;

for (var i = 0; i < studentName.length; i++) {
  var percentage = (studentScore[i] / totalScore) * 100;
  document.write(
    `<p> Score of ${studentName[i]} is ${studentScore[i]}. Percentage is ${percentage}% </p>`
  );
}

// Question 9: Color manipulation program
var colors = ["Red", "Blue", "Green"];
document.write("Initial Colors: " + colors + "<br>");

// (a) Add color at the beginning
var colorStart = prompt("Enter color to add at the beginning:");
colors.unshift(colorStart);
document.write("After adding at the beginning: " + colors + "<br>");

// (b) Add color at the end
var colorEnd = prompt("Enter color to add at the end:");
colors.push(colorEnd);
document.write("After adding at the end: " + colors + "<br>");

// (c) Add two more colors at the beginning
colors.unshift("Purple", "Orange");
document.write("After adding two more colors: " + colors + "<br>");

// (d) Delete first color
colors.shift();
document.write("After deleting first color: " + colors + "<br>");

// (e) Delete last color
colors.pop();
document.write("After deleting last color: " + colors + "<br>");

// (f) Add color at specific index
var colorIndex = parseInt(prompt("Enter index to add color:"));
var colorName = prompt("Enter color name:");
colors.splice(colorIndex, 0, colorName);
document.write("After adding at index " + colorIndex + ": " + colors + "<br>");

// (g) Delete user-defined number of colors from index
var delIndex = parseInt(prompt("Enter index to delete color(s):"));
var delCount = parseInt(prompt("Enter number of colors to delete:"));
colors.splice(delIndex, delCount);
document.write("After deleting colors: " + colors + "<br>" + "<br>" + "<br>");

// Question 10: Sort student scores in ascending order
var score = [23, 56, 49, 100];
document.write(`Scores fo Student: ${score} <br> <br>`);
score.sort();
document.write(`Order Scores of Students: ${score} <br> <br>`);

// Question 11: Copy selected city names to another array
var cities = ["Karachi", "San Francisco", "Landon", "Delhi", "Morocco"];
document.write(`Cities List:<br>${cities} <br> <br>`);
var selectedCities = cities.slice(1, 4);
document.write(`Selected Cities List:<br>${selectedCities} <br> <br>`);

// Question 12: Convert an array to a single string
var arr = ["This", "is", "my", "cat"];
var str = arr.join(" ");
document.write(`Array to String: ${str} <br> <br>`);

// Question 13: FIFO (First In, First Out) array
var fifoDevices = [];
fifoDevices.push("Keyboard");
fifoDevices.push("Mouse");
fifoDevices.push("printer");
fifoDevices.push("Monitor");

document.write(`Devices: ${fifoDevices}<br>`);
var fifoLength = fifoDevices.length;
for (var i = 0; i < fifoLength; i++) {
  document.write("Out: <br>");
  document.write(`${fifoDevices.shift()} <br>`);
}

// Question 14: LIFO (Last In, First Out) array
var lifoDevices = [];
lifoDevices.push("Keyboard");
lifoDevices.push("Mouse");
lifoDevices.push("printer");
lifoDevices.push("Monitor");

document.write(`<br> <br>Devices: ${lifoDevices}<br>`);

for (var i = lifoDevices.length; i > 0; i--) {
  document.write("Out: <br>");
  document.write(`${lifoDevices.pop()} <br>`);
}

// Question 15: Store phone manufacturers in an array
// - Display them in a `<select>` dropdown using `document.write()`
var phoneManufacturers = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];
document.write(`<h3>Select phone manufacturer</h3><select name="phoneManufacturers>
  <option value="">Select Manufacturer</option>`);
for (var i = 0; i < phoneManufacturers.length; i++) {
  document.write(
    `<option value="${phoneManufacturers[i]}">${phoneManufacturers[i]}</option>`
  );
}
document.write(`</select>`);

// Question 16: Declare and initialize a multidimensional array
var multidimensional = [
  ["Alice", "Bob", "Eve", "John"],
  [1, 2, 3, 4],
  ["Teacher", "Artist", "YouTuber", "Doctor"],
]

// Question 17: Create a matrix using a multidimensional array
var matrix = [
  [0,1,2,3],
  [1,0,1,2],
  [2,1,0,1]
];

document.write(`<br><h2>Matrix</h2>`);
for (var i = 0; i < matrix.length; i++) {
  document.write(matrix[i].join(" ") + "<br>");
}
