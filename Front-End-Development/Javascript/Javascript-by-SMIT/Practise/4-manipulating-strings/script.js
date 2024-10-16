// Chapter 8: Concatenating text strings
// Concatenation (+): The + operator in JavaScript combines two or more strings into one continuous string.
// Performing Mathematical operations except addition on strings that contains numeric values, JavaScript automatically converts those strings to numbers before performing the operation.
var firstName = prompt("First Name: ");
var lastName = prompt("Last Name: ");
var fullName = firstName + " " + lastName;

alert("Assalam u Alaikum " + fullName + "\nNice to Meet you!")

// Chapter 21: Changing Case
// Method: Use the .toLowerCase() and .toUpperCase() method on the user's input, allowing for case-insensitive matching.
// Purpose: To ensure consistent string comparison by converting user input and array elements to a common case.
var fullName = prompt("Enter Your Full Name: ");
var properFullName = "";

for (var i = 0; i < fullName.length; i++){
    if (i === 0){
        properFullName += fullName[i].toUpperCase();
    }
    else if (fullName[i - 1] === " "){
        properFullName += fullName[i].toUpperCase();
    }
    else{
        properFullName += fullName[i].toLowerCase();
    }
}

alert("The Full Name : " + properFullName);

// Chapter 22: Strings: Measuring Length and Extracting Parts
// Purpose: Learn to manipulate strings, extract parts, and format them.
// `slice()`: Extracts a portion of a string, using start and end indices.
// `length`: Measures the number of characters in a string.

// Chapter 23: Strings: Finding Segments
// Purpose: Search a index of  Subsegments within strings.
// `indexOf()`: Finds the index of the first occurrence of a substring.
// `lastIndexOf()`: Finds the index of the last occurrence of a substring.

// Chapter 24: Strings: Finding a Character at a Location
// Purpose: Learn how to find characters at specific locations within strings.
// `charAt()`: Retrieves the character at a specific index in a string.

// Chapter 25: Strings: Replacing Characters
// Purpose: Learn to replace characters or segments in a string.
// `replace()`: Replaces a specific substring with another in a string.

var introduction = "She is Omama. Omama is 17 years old. Omama is a college student."
var word = "Omama";
var replace = "She";
var correctIntroduction;
var count = 0;


for (var i = 0; i < introduction.length; i++){
    if(introduction.slice(i, i + word.length) === word){
        ++count;
        if (count === 2){
            correctIntroduction = introduction.slice(0 , i) + replace + introduction.slice(i + word.length);
        }
    }
}

console.log(correctIntroduction);