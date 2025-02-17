// Question 1: Write a function that displays current date & time in your browser.
var currentDate = new Date();

function displayCurrentDate(date) {
  document.write(date);
}

displayCurrentDate(currentDate);

// Question 2: Write a function that takes first & last name and then it greets the user using his full name.
var firstName = prompt("Enter your first name: ");
var lastName = prompt("Enter your last name: ");

function greets(firstName, lastName) {
  var fullName = firstName.concat(" ", lastName);
  return `Hello ${fullName}`;
}

var greetingMessage = greets(firstName, lastName);
document.write(`<br> ${greetingMessage}`);

// Question 3: Write a function that adds two numbers (input by user) and returns the sum of two numbers.
var num1 = parseInt(prompt("Enter first number: "));
var num2 = parseInt(prompt("Enter second number: "));

function addNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addNumbers(num1, num2);
document.write(`<br> Sum of ${num1} and ${num2} is ${sum}`);

// Question 4: Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
var number1 = parseInt(prompt("Enter first number: "));
var number2 = parseInt(prompt("Enter second number: "));
var operator = prompt("Enter operator: ");
var isValid = false;

function calculate(number1, number2, operator) {
  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;
    case "%":
      return number1 % number2;
    default:
      return "Invalid operator";
  }
}

while (!isValid) {
  if (
    operator == "+" ||
    operator == "-" ||
    operator == "*" ||
    operator == "/" ||
    operator == "%"
  ) {
    isValid = true;
    var result = calculate(number1, number2, operator);
  } else {
    alert("Invalid operator. Please enter a valid operator (+, -, *, /, %)");
    operator = prompt("Enter operator: ");
  }
}
document.write(`<br> Result: ${result}`);

// Question 5: Write a function that squares its argument.
var numberToSquare = parseInt(prompt("Enter a number to square: "));

function squareNumber(number) {
  return number * number;
}

var squaredNumber = squareNumber(numberToSquare);

document.write(`<br> Square of ${numberToSquare} is ${squaredNumber}`);

// Question 6: Write a function that computes factorial of a number.
var numberForFactorial = parseInt(prompt("Enter a number to find factorial: "));

// Solution 1: Recursive method
function factorialRecursion(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorialRecursion(number - 1);
  }
}
// Solution 2: Iterative method
function factorialIteration(number) {
  var factorial = 1;
  for (var i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}

var factorialNumberRecurse = factorialRecursion(numberForFactorial);
var factorialNumberIterate = factorialIteration(numberForFactorial);

document.write(
  `<br> Factorial of ${numberForFactorial} using recursion is ${factorialNumberRecurse}`
);
document.write(
  `<br> Factorial of ${numberForFactorial} using iteration is ${factorialNumberIterate}`
);

// Question 7: Write a function that take start and end number as inputs & display counting in your browser.
var startNumber = parseInt(prompt("Enter start number: "));
var endNumber = parseInt(prompt("Enter end number: "));

function countNumbers(start, end) {
  for (var i = start; i <= end; i++) {
    document.write(`<br> ${i}`);
  }
}

countNumbers(startNumber, endNumber);

// Question 8: Write a nested function that computes hypotenuse of a right angle triangle. Hypotenuse^2 = Base^2 + Perpendicular^2. Take base and perpendicular as inputs. Outer function: calculateHypotenuse() Inner function: calculateSquare()
var base = parseInt(prompt("Enter base of right angle triangle: "));
var perpendicular = parseInt(
  prompt("Enter perpendicular of right angle triangle: ")
);

function calculateSquare(number) {
  return number * number;
}
function calculateHypotenuse(base, perpendicular) {
  return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
}

var hypotenuse = calculateHypotenuse(base, perpendicular);

document.write(`<br> Hypotenuse of right angle triangle is ${hypotenuse}`);

// Question 9: Write a function that calculates the area of a rectangle. A = width * height. Pass width and height in following manner: i. Arguments as value ii. Arguments as variables
var width = parseInt(prompt("Enter width of rectangle: "));
var height = parseInt(prompt("Enter height of rectangle: "));

function calculateArea(width, height) {
  return width * height;
}

var area = calculateArea(width, height);
var areaManually = calculateArea(5, 10);

document.write(
  `<br> Area of rectangle (manually calculated) is ${areaManually}`
);
document.write(`<br> Area of rectangle is ${area}`);

// Question 10: Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.
var word = prompt("Please enter a word to check if it is palindrome or not: ");

// Solution 1: Using manual loop
function isPalindrome(word) {
  var reversedWord = "";
  for (var i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  if (word === reversedWord) {
    return "a palindrome";
  } else {
    return "not a palindrome";
  }
}

// Solution 2: Using built-in functions
function isPalindromeValue(word) {
  var reversedWord = word.split("").reverse().join("");
  if (word === reversedWord) {
    return "a palindrome";
  } else {
    return "not a palindrome";
  }
}

var isPalindromeResult = isPalindrome(word);
var isPalindromeResultValue = isPalindromeValue(word);

document.write(`<br> The word "${word}" is ${isPalindromeResult}`);
document.write(`<br> The word "${word}" is ${isPalindromeResultValue}`);

// Question 11: Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. EXAMPLE STRING : 'the quick brown fox' EXPECTED OUTPUT : 'The Quick Brown Fox'
var sentence = "the quick brown fox";

function capitalizeFirstLetterOfEachWord(sentence) {
  var words = sentence.split(" ");
  var capitalizeWord = [];
  for (var i = 0; i < words.length; i++) {
    capitalizeWord.push(
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
    );
  }
  return capitalizeWord.join(" ");
}

var capitalizedSentence = capitalizeFirstLetterOfEachWord(sentence);
document.write(`<br> Original sentence: ${sentence}`);
document.write(`<br> Capitalized sentence: ${capitalizedSentence}`);

// Question 12: Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. EXAMPLE STRING : 'Web Development Tutorial' EXPECTED OUTPUT : 'Development'
var string = "Web Development Tutorial";

function findLongestWord(sentence) {
  var word = sentence.split(" ");
  var longestWord = "";
  for (var i = 0; i < word.length; i++) {
    if (word[i].length > longestWord.length) {
      longestWord = word[i];
    }
  }
  return longestWord;
}

var longestWord = findLongestWord(string);
document.write(`<br> Original sentence: ${string}`);
document.write(`<br> Longest word: ${longestWord}`);

// Question 13: Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o'
var line = prompt("Enter a line: ");
var letter = prompt("Enter a letter: ");

function countLetterOccurrences(line, letter) {
  var count = 0;
  for (var i = 0; i < line.length; i++) {
    if (line[i].toLowerCase() === letter.toLowerCase()) {
      count++;
    }
  }
  return count;
}
var occurrences = countLetterOccurrences(line, letter);

document.write(
  `<br> The letter "${letter}" appears ${occurrences} times in the line "${line}"`
);
// Question 14: The Geometrizer: Create 2 functions that calculate properties of a circle, using the definitions here. Create a function called calcCircumference: • Pass the radius to the function. • Calculate the circumference based on the radius, and output "The circumference is NN". Create a function called calcArea: • Pass the radius to the function. • Calculate the area based on the radius, and output "The area is NN". Circumference of circle = 2πr Area of circle = πr^2
var radius = parseInt(prompt("Enter radius of circle: "));

function calcCircumference(radius) {
  return 2 * Math.PI * radius;
}

function calcArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

var circumference = calcCircumference(radius);
var area = calcArea(radius);

document.write(`<br> Circumference of circle is ${circumference}`);
document.write(`<br> Area of circle is ${area}`);
