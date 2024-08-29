// Variable:  A variable is like a container that stores information (a value) that can be used later in your code
// Creating a Variable: To create a variable, you use the keyword var, followed by the variable's name and an equals sign (=) to assign it a value.

// Slice: The slice(startIndex, endIndex) method is used to extract a section of a string or array and return it as a new string or array, without modifying the original string or array. 

// Chapter 2: Variables in String
// A variable in string means it is a container that stores a value, such as a text string and the text must always be enclosed in quotes.
var fullName = "Umama Khokhar";
fullName = "Omama Khokhar";

alert("Hello, " + fullName + "!");

// Chapter 3: Variables for Numbers
// A variable in number means it is a container that stores a value, such as a number 
var weigth = 55;
var newWeight = 60;

var gainWeight;
gainWeight = newWeight - weigth;

alert("Your Gain Weight is " + gainWeight);

// Chapter 4: Variable Names Legal and Illegal
// Rules for Naming Variables:
// No Quotation Marks: Variable names can't be in quotes.
// No Numbers at Start: Names can't be or start with a number.
// No Keywords: Avoid JavaScript keywords (e.g., alert, var).
// No Spaces: Variable names can't have spaces.
// Allowed Characters: Use letters, numbers, $, and _ only.
// Case Sensitive: rose and Rose are different.
// Naming Conventions: Use camelCase with meaningful names 

var age = 17;
alert("Your age is " + age);
