// Question 1: Display current date and time
// - Write a program that displays current date and time in your browser
var currentDate = new Date();
document.write(`Current date: ${currentDate}<br>`);

// Question 2: Alert the current month in words
// - Write a program that alerts the current month in words. For example December
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = new Date().getMonth();
alert(`Current month: ${months[month]}`);

// Question 3: Alert the first 3 letters of the current day
// - Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var day = new Date().getDay();
alert(`Today is ${days[day]}`);

// Question 4: Display a message if it's Saturday or Sunday
// - Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today
if (day === 0 || day === 6) {
    alert("It's Fun day");
}

// Question 5: Show message based on the date of the month
// - Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”
var date = new Date().getDate();
if (date < 16){
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}

// Question 6: Determine minutes since midnight, Jan. 1, 1970
// - Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand
var sinceMidnight = currentDate.getTime();
var sinceMidnightInMinutes = sinceMidnight / (1000 * 60);
alert(`Current Date: ${currentDate}`);
alert(`Elapsed milliseconds since midnight, Jan. 1, 1970: ${sinceMidnight}`);
alert(`Elapsed minutes since midnight, Jan. 1, 1970: ${sinceMidnightInMinutes}`);

// Question 7: Test whether it's before noon or after
// - Write a program that tests whether it's before noon and alert “Its AM” else “its PM”
var hours = currentDate.getHours();
if (hours < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}

// Question 8: Create a Date object for the last day of the last month of 2020
// - Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate
var laterDate = new Date("2020-12-31");
alert(`Last day of the last month of 2020: ${laterDate}`);

// Question 9: Alert the number of days past since 1st Ramadan
// - Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan (June 18, 2015)
var ramadan = new Date("2015-06-18");
var difference = currentDate.getTime() - ramadan.getTime();
var daysPastRamadan = Math.floor(difference / (1000 * 60 * 60 * 24));
alert(`Days past since 1st Ramadan: ${daysPastRamadan}`);

// Question 10: Display seconds elapsed between reference date and beginning of 2015
// - Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015
var referenceDate = new Date();
var startDate = new Date("2015-01-01");
var diff = referenceDate.getTime() - startDate.getTime();
var secondsElapsed = Math.floor(diff / 1000);
document.write(`On reference date ${referenceDate},<br>`);
document.write(`Seconds elapsed since the beginning of 2015: ${secondsElapsed}<br>`);

// Question 11: Extract hours and reset date object an hour ahead
// - Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser
var currentHour = new Date().getHours();
var afterHour = new Date().setHours(currentHour + 1);
alert(`Current Date: ${new Date()}`);
alert(`Date after resetting to an hour ahead: ${new Date(afterHour)}`);

// Question 12: Show date reset to 100 years back
// - Write a program that creates a date object and show the date in an alert box that is reset to 100 years back
var currentYear = new Date().getFullYear();
var hundredYearsBack = new Date().setFullYear(currentYear - 100);
alert(`Current Date: ${new Date()}`);
alert(`Date 100 years back: ${new Date(hundredYearsBack)}`);

// Question 13: Calculate and show birth year based on age
// - Write a program to ask the user about his age. Calculate and show his birth year in your browser
var userAge = +prompt("Enter your age");
var birthYear = new Date().setFullYear(currentYear - userAge);
alert(`User Age: ${userAge}`);
alert(`Birth Year: ${new Date(birthYear).getFullYear()}`);

// Question 14: Generate K-Electric bill
// - Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:

// Customer details
var customerName = "Omama Khokhar";

// Get the current month in words
var currentMonth = new Date().toLocaleString('default', { month: 'long' });

// Billing details
var numberOfUnits = 410;
var chargesPerUnit = 16;
var latePaymentSurcharge = 350;

// Calculate amounts
var netAmountPayable = numberOfUnits * chargesPerUnit;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// Round off amounts to 2 decimal places
netAmountPayable = netAmountPayable.toFixed(2);
grossAmountPayable = grossAmountPayable.toFixed(2);

// Display the bill
document.write("<h1>K-Electric Bill</h1>");
document.write(`<p>Customer Name: ${customerName}</p>`);
document.write(`<p>Current Month: ${currentMonth}</p>`);
document.write(`<p>Number of units: ${numberOfUnits}</p>`);
document.write(`<p>Charges per unit: ${chargesPerUnit}</p>`);
document.write(`<p>Net Amount Payable (within Due Date): ${netAmountPayable}</p>`);
document.write(`<p>Late Payment Surcharge: ${latePaymentSurcharge}</p>`);
document.write(`<p>Gross Amount Payable (after Due Date): ${grossAmountPayable}</p>`);