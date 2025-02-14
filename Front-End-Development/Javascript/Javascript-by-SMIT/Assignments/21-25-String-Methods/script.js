// Question 1: Merge first and last name, then greet user
// - Take first and last name as input using prompt
// - Merge them into a full name variable
// - Display a greeting message with the full name
var firstName = prompt("Enter the First Name: ");
var lastName = prompt("Enter the Last Name: ");
var fullName =  firstName + " " + lastName;

console.log("Introduction:");
console.log(`Hey!! ${fullName} Great to see you!`);

// Question 2: Find length of user input
// - Take mobile phone model as input
// - Calculate and display the length of the string
var mobilePhoneModel = prompt("Please enter a mobile phone model");
var length = mobilePhoneModel.length;

console.log(`My Favorite Mobile Phone Model: ${mobilePhoneModel}`);
console.log(`The length of the String: ${length}`);

// Question 3: Find index of letter 'n' in "Pakistani"
// - Use string method to find the index
// - Display the index value in browser
var country = "Pakistani";
var index = country.indexOf("n");
console.log(`Index of 'n' in 'Pakistani': ${index}`);
// Question 4: Find last index of letter 'l' in "Hello World"
// - Use string method to get last occurrence of 'l'
// - Display the last index in browser
var messages = "Hello World";
var lastIndexOfLetter = messages.lastIndexOf("l");

console.log(`Last index of 'l' in 'Hello World': ${lastIndexOfLetter}`);

// Question 5: Find character at 3rd index in "Pakistani"
// - Use string method to extract character at index 3
// - Display the character
var findCharacter = messages.charAt(3);

console.log(`Character at index 3 in 'Pakistani': ${findCharacter}`);

// Question 6: Repeat Question 1 using `concat()` method
// - Use `concat()` instead of + operator
// - Merge first and last name and display greeting
console.log("Introduction:");
console.log(`Hey!! ${firstName.concat(" " , lastName)} Great to see you!`);

// Question 7: Replace "Hyder" with "Islam" in "Hyderabad"
// - Use string method to replace substring
// - Display modified word
var city = "Hyderabad";
var modifiedCity = city.replace("Hyder", "Islam");

console.log('city: ', city);
console.log(`City After replacement: ${modifiedCity}`);

// Question 8: Replace all occurrences of "and" with "&"
// - Given a sentence with "and" multiple times
// - Use `replaceAll()` to change all "and" to "&"
var sentence = "Ali and Sami are best friends. They play cricket and football together.";
var modifiedSentence = sentence.replaceAll("and", "&");

console.log('Original Sentence: ', sentence);
console.log('Modified Sentence: ', modifiedSentence);

// Question 9: Convert string "472" to a number
// - Use type conversion to change string to number
// - Display both values and their types
var numberString = "472";
var convertedNumber = Number(numberString);

console.log('Value: ', numberString);
console.log('Type: ', typeof numberString);
console.log('Value: ', convertedNumber);
console.log('Type: ', typeof convertedNumber);

// Question 10: Convert user input to uppercase
// - Take input from user
// - Convert text to uppercase and display
var city = prompt("Enter the city name :");
var convertedCity = city.toUpperCase();

console.log(`User Input: ${city}`);
console.log(`UpperCase: ${convertedCity}`);

// Question 11: Convert user input to title case
// - Take input from user
// - Convert first letter of each word to uppercase
var cityWord = city.split(" ");
for (var i = 0; i < cityWord.length; i++) {
    cityWord[i] = cityWord[i][0].toUpperCase() + cityWord[i].slice(1).toLowerCase();
}
var titleCase = cityWord.join(" ");
console.log(`User Input: ${city}`);
console.log(`Title Case: ${titleCase}`);

// Question 12: Convert number to string and remove decimal
// - Given `var num = 35.36`
// - Remove the dot and display "3536"
var num = 35.36;
var string = num.toString().replace(".", "");

console.log(`Number: ${num}`);
console.log(`Result: ${string}`);

// Question 13: Validate username for special symbols
// - Take username as input
// - Check if it contains [@ . , !]
// - Idf found, ask user to enter a valid username
var userName = prompt("Enter the user Name: ");
var isValid = true;

for (i = 0; i < userName.length; i++) {
    if (userName[i].charCodeAt() == 64 || userName[i].charCodeAt() == 44 ||  userName[i].charCodeAt() == 46 || userName[i].charCodeAt() == 33) {
        isValid = false;
        break;
    }
}
if (!isValid) {
    console.log("Please enter a valid username");
}
else {
    console.log("Username is valid");
}

// Question 14: Search for an item in an array
// - Given an array of food items
// - Take user input and check case-insensitive match
// - Display if the item is found or not
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to the Xeir Bakery, What do you want to order Sir/Ma`am:");

var isAvailable = false;

for (var i = 0; i < bakeryItems.length; i++) {
    if (bakeryItems[i].toLowerCase() === userInput.toLowerCase()) {
        alert(`${userInput.toLowerCase()} is available at index ${i} in our Bakery`);
        isAvailable = true;
        break;
    }
}

if (!isAvailable) {
    alert(`${userInput} is not available in our Bakery`);
}

// Question 15: Validate password based on conditions
// - Should contain letters and numbers
// - Should not start with a number
// - Must be at least 6 characters long
// - Ask user to re-enter if invalid
var password = prompt("Enter the password: ");
var isValid = false;

while (!isValid) {
  var hasCapitalLetter = false;
  var hasSmallLetter = false;
  var hasNumber = false;

  if (password.length < 6) {
    console.log("Password must be at least 6 characters long");
  } else if (password[0].charCodeAt() >= 48 && password[0].charCodeAt() <= 57) {
    console.log("Password should not start with a number");
  } else {
    for (var i = 0; i < password.length; i++) {
      var charCode = password[i].charCodeAt();
      if (charCode >= 65 && charCode <= 90) {
        hasCapitalLetter = true;
      } else if (charCode >= 97 && charCode <= 122) {
        hasSmallLetter = true;
      } else if (charCode >= 48 && charCode <= 57) {
        hasNumber = true;
      }
    }
    if (hasCapitalLetter && hasSmallLetter && hasNumber) {
      isValid = true;
      console.log("Password is valid");
      break;
    } else {
      console.log("Password must contain Small letters, Capital Letters and numbers");
    }
  }
  if (!isValid) {
    password = prompt("Reenter the password: ");
  }
}

if (isValid) {
    console.log("Password is valid");
}


// Question 16: Convert string to array using `split()`
// - Given `var university = "University of Karachi"`
// - Convert into an array and display each element
var university = "University of Karachi";
var universityArray = university.split("");
console.log("Converting String to Array:");
for (var i = 0; i < universityArray.length; i++){
    console.log(universityArray[i]);
}


// Question 17: Display last character of user input
// - Take input from user
// - Extract and display last character
var userInput = prompt("Enter the input: ");
var lastCharacter = userInput.charAt(userInput.length - 1);

console.log("User Input:", userInput);
console.log(`Last character of input: ${lastCharacter}`);

// Question 18: Count occurrences of "the" in a sentence
// - Given "The quick brown fox jumps over the lazy dog"
// - Count how many times "the" appears
// - Display the count
var sentence = "The quick brown fox jumps over the lazy dog";
console.log('Text: ', sentence);
var count = 0;
var wordCount = 0;

// Solution 1: Using slice method
for (var i = 0; i < sentence.length; i++){
    if( sentence.slice(i , i + 3).toLowerCase() === "the"){
        count++;
    }
}

// Solution 2: Using split method
var word = sentence.split(" ");
for (var i = 0; i < word.length; i++){
    if( word[i].toLowerCase() === "the"){
        wordCount++;
    }
}

console.log("Count of 'the' in the text: ", count);
console.log("Count of 'the' in the text: ", wordCount);
