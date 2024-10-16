// Chapter 31: Date()
// Purpose: To get the current date and time in JavaScript.
// Date Object: Date() is used to create a date object containing the current date and time.
// The object stores the complete date and time, including the year, month, day, hours, minutes, and seconds.

// Chapter 32: Date Object Methods
// Purpose: To extract specific parts of a date object (e.g., year, month, day).
// getMonth(): Extracts the month from the date object (months are zero-indexed, January = 0).
// getDate(): Extracts the day of the month (1-31).
// getFullYear(): Extracts the full year (e.g., 2024).
// getTime(): Converts a date to milliseconds since January 1, 1970.

// Chapter 33: Specifying Dates and Calculating Time Differences
// Purpose: To work with specific dates and used to calculate differences between dates.
// Date("YYYY-MM-DD"): Specifies a particular date.

// Problem 1: Event Countdown
// Problem Description: You are given the task of creating a countdown for a special event. The event is happening on 5 oct 2024. Write a program that calculates how many time and days left until that date from the current date.

var currentDate = new Date();
var eventDate = new Date("5-oct-2024, 19:00");

currentDate = currentDate.getTime();
eventDate = eventDate.getTime();

var difference = eventDate - currentDate;   

var days = difference / (1000 * 60 * 60 * 24);

var hour =  days - Math.floor(days);
hour = hour * 24;

var min =  hour - Math.floor(hour);
min = min * 60;


var seconds =  min - Math.floor(min);
seconds = seconds * 60;

console.log(parseInt(days));
console.log(parseInt(hour));
console.log(parseInt(min));
console.log(parseInt(seconds));


// Chapter 34: Changing Elements of a Date Object 
// Purpose: Once you have a Date object, you can change specific elements of the date such as the year, month, day, hour, minute, second, etc. without modifying the other elements.
// setFullYear(year): Sets the year of the Date object.
// setMonth(month): Sets the month (0 = January, 11 = December).


// Problem: Modify Date Elements
// Problem Description: Change year, month, date, hours, minutes, seconds, and milliseconds of a current Date object.
var current = new Date();

current.setFullYear(2023);
current.setMonth(9);
current.setDate(25);
current.setHours(9);
current.setMinutes(15);

console.log(current);