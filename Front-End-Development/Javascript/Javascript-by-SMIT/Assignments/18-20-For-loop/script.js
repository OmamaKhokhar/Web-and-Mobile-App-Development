// Includes:
// Chapter 18: for loops
// Chapter 19: for loops: flags, Booleans, array length, and Breaks
// Chapter 20: for loops nested

// Question 1: Print numeric counting from 1 to 10
document.write("<h3>Numeric counting from 1 to 10:</h3>");
for (var i = 1; i <= 10; i++) {
    document.write(`${i} <br>`);
}

// Question 3: Print each item of an array using a loop
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    document.write(`${fruits[i]} <br>`);
}

for (var i = 0; i < fruits.length; i++) {
    document.write(`Element at index ${i} is ${fruits[i]} <br>`);
}

// Question 4: Generate different number series
// a. Counting: Print numbers from 1 to 15
document.write(`<h3>Counting</h3>`);
for (var i = 1; i <= 15; i++) {
    document.write(`${i}, `);
}

// b. Reverse counting: Print numbers from 10 to 1
document.write(`<h3>Reverse Counting</h3>`);
for (var i = 10; i >= 1; i--) {
    document.write(`${i}, `);
}

// c. Even: Print even numbers from 0 to 20
document.write(`<h3>Even Numbers</h3>`);
for (var i = 0; i <= 20; i += 2) {
    document.write(`${i}, `);
}

// d. Odd: Print odd numbers from 1 to 19
document.write(`<h3>Odd Numbers</h3>`);
for (var i = 1; i <= 19; i += 2) {
    document.write(`${i}, `);
}

// e. Series: Print even numbers as multiples of 1000 (e.g., 2k, 4k, ... 20k)
document.write(`<h3>Even Numbers as Multiples of 1000</h3>`);
for (var i = 2000; i <= 20000; i += 2000) {
    document.write(`${i}, `);
}

// Question 5: Search for a user-input item in an array
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = +prompt("Welcome to the Xeir Bakery, What do you want to order Sir/Ma`am:");

var isAvailable = false;

for (var i = 0; i < bakeryItems.length; i++) {
    if (bakeryItems[i] === userInput) {
        alert(`${userInput} is available at index ${i} in our Bakery`);
        isAvailable = true; 
        break;
    }
}

if (!isAvailable) {
    alert(`${userInput} is not available in our Bakery`);
}

// Question 6: Find the largest number in an array
var array = [24, 53, 78, 91, 12];
var largestNumber = array[0];

for (var i = 0; i < array.length; i++) {
    if (array[i] > largestNumber){
        largestNumber = array[i];
    }
}
document.write(`<br>Array Items: ${array}`);
document.write(`<br>The largest number is ${largestNumber}`);

// Question 7: Find the smallest number in an array
var smallestNumber = array[0];

for (var i = 0; i < array.length; i++) {
    if (array[i] < smallestNumber){
        smallestNumber = array[i];
    }
}
document.write(`<br>Array Items: ${array}`);
document.write(`<br>The smallest number is ${smallestNumber}`);

// Question 8: Print multiples of 5 ranging from 1 to 100
document.write("<h3>Multiples of 5 ranging from 1 to 100:</h3>");
for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        document.write(`${i}, `);
    }
}