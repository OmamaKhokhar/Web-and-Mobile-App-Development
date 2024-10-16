//  Arrays: A collection of variables that can store multiple values in a single variable. 
// Each element in an array has an index, starting from 0 for the first element, 1 for the second, and so on.


// Chapter 15: Arrays
// Arrays: Arrays allow you to store multiple values in a single variable, where each value can be accessed by its index.
// Declaring Arrays: Arrays can be declared with square brackets [], and values are separated by commas.
// Accessing Array Elements: You access elements of an array using their index in square brackets.

//  Chapter 16: Arrays - Adding and Removing Elements
// Adding Elements: You can add and remove elements to an array from the end using various methods, such as `push()` and `unshift()`.
// push(): Adds one or more elements to the end of an array.
// pop(): Removes the last element from an array.


// Chapter 17: Arrays: Removing, Inserting, and Extracting Elements
// unshift(): Adds one or more elements to the beginning of an array.
// shift(): Removes the first element from an array.

// splice(): This method can be used to add, remove, or replace elements at a specific position in an array.
// Syntax: array.splice(startIndex, deleteCount, element1, element2, ...)
// startIndex: The index at which to start changes.
// deleteCount: The number of elements to be removed (can be 0).
// element1, element2, ...: The elements to be added (optional).

// slice(): Extracts a portion of an array without modifying the original array.
// Syntax: array.slice(startIndex, endIndex(this is the index before it stops the extracting ))

// setTimeout():
// Purpose: This function schedules code to be executed after a specified amount of time.
// Syntax: setTimeout(callback, delay);
// Call Back: Defines the action to take (showing a prompt) after the delay.
// Delay: Specifies that the action should be taken after specific milliseconds.

// Problem: Fantasy Cafe Order Tracker
// Program to help a fantasy café track their customers' orders. Each customer can order drinks, and you need to track the total order value.

// Define menu items and prices
var coffee = ["Espresso", "Mocha", "Americano"];
var coffeePrice = [500, 700, 500];

var tea = ["Green tea", "Black tea", "White tea"];
var teaPrice = [200, 200, 250];

var dessert = ["Special apple and butterscotch pie", "Almond and date cake", "Apple cinnamon custard cake"];
var dessertPrice = [800, 700, 500];

var waffle = ["Bubble rolled waffles", "Waffle cones", "Belgian waffles"];
var wafflePrice = [500, 700, 600];

var itemsQuantity = 5; 

// Display the menu first
document.write(`
    <style>
        .table-container {
            text-align:center;
            width: 100%; 
        }
        .table-container div {
            width: 45%; 
            display: inline-block;
            vertical-align: top;
            padding: 10px; 
        }
        table {
            width: 80%;
            margin: auto; 
        }
    </style>

    <h1>Welcome to Fantasy Cafe!</h1>
    <h2>Menu</h2>

    <div class="table-container">
        <div>
            <h2>Coffee</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Serial No</th>
                        <th>Quantity</th>
                        <th>Coffee Item</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>1</td><td>${itemsQuantity}</td><td>${coffee[0]}</td><td>${coffeePrice[0]}</td></tr>
                    <tr><td>2</td><td>${itemsQuantity}</td><td>${coffee[1]}</td><td>${coffeePrice[1]}</td></tr>
                    <tr><td>3</td><td>${itemsQuantity}</td><td>${coffee[2]}</td><td>${coffeePrice[2]}</td></tr>
                </tbody>
            </table>
        </div>
        <div>
            <h2>Tea</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Serial No</th>
                        <th>Quantity</th>
                        <th>Tea Item</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>1</td><td>${itemsQuantity}</td><td>${tea[0]}</td><td>${teaPrice[0]}</td></tr>
                    <tr><td>2</td><td>${itemsQuantity}</td><td>${tea[1]}</td><td>${teaPrice[1]}</td></tr>
                    <tr><td>3</td><td>${itemsQuantity}</td><td>${tea[2]}</td><td>${teaPrice[2]}</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="table-container">
        <div>
            <h2>Desserts</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Serial No</th>
                        <th>Quantity</th>
                        <th>Dessert Item</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>1</td><td>${itemsQuantity}</td><td>${dessert[0]}</td><td>${dessertPrice[0]}</td></tr>
                    <tr><td>2</td><td>${itemsQuantity}</td><td>${dessert[1]}</td><td>${dessertPrice[1]}</td></tr>
                    <tr><td>3</td><td>${itemsQuantity}</td><td>${dessert[2]}</td><td>${dessertPrice[2]}</td></tr>
                </tbody>
            </table>
        </div>
        <div>
            <h2>Waffles</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Serial No</th>
                        <th>Quantity</th>
                        <th>Waffle Item</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>1</td><td>${itemsQuantity}</td><td>${waffle[0]}</td><td>${wafflePrice[0]}</td></tr>
                    <tr><td>2</td><td>${itemsQuantity}</td><td>${waffle[1]}</td><td>${wafflePrice[1]}</td></tr>
                    <tr><td>3</td><td>${itemsQuantity}</td><td>${waffle[2]}</td><td>${wafflePrice[2]}</td></tr>
                </tbody>
            </table>
        </div>
    </div>
`);

// Order from user through delay
setTimeout(function() {
    var fullName = prompt("Enter Your Full Name: ");

    var coffeeOrder = +prompt("Select Any one Coffee like 1 for " + coffee[0], "1") - 1;
    var coffeeQuantity = +prompt("How many " + coffee[coffeeOrder] + " you want? Minimum: " + itemsQuantity);
    
    if (coffeeQuantity > itemsQuantity) {
        alert("Sorry, we have only " + itemsQuantity + " " + coffee[coffeeOrder]);
        coffeeQuantity = 0;
    }

    var teaOrder = +prompt("Select Any one Tea like 1 for " + tea[0], "1") - 1;
    var teaQuantity = +prompt("How many " + tea[teaOrder] + " you want? Minimum: " + itemsQuantity);
    
    if (teaQuantity > itemsQuantity) {
        alert("Sorry, we have only " + itemsQuantity + " " + tea[teaOrder]);
        teaQuantity = 0;
    }

    var dessertOrder = +prompt("Select Any one Dessert like 1 for " + dessert[0], "1") - 1;
    var dessertQuantity = +prompt("How many " + dessert[dessertOrder] + " you want? Minimum: " + itemsQuantity);
    
    if (dessertQuantity > itemsQuantity) {
        alert("Sorry, we have only " + itemsQuantity + " " + dessert[dessertOrder]);
        dessertQuantity = 0;
    }

    var waffleOrder = +prompt("Select Any one Waffle like 1 for " + waffle[0], "1") - 1;
    var waffleQuantity = +prompt("How many " + waffle[waffleOrder] + " you want? Minimum: " + itemsQuantity);
    
    if (waffleQuantity > itemsQuantity) {
        alert("Sorry, we have only " + itemsQuantity + " " + waffle[waffleOrder]);
        waffleQuantity = 0;
    }
} , 8000);

    var totalCoffeePrice = coffeePrice[coffeeOrder] * coffeeQuantity;
    var totalTeaPrice = teaPrice[teaOrder] * teaQuantity;
    var totalDessertPrice = dessertPrice[dessertOrder] * dessertQuantity;
    var totalWafflePrice = wafflePrice[waffleOrder] * waffleQuantity;

    var totalQuantity = coffeeQuantity + teaQuantity + dessertQuantity + waffleQuantity;
    var totalCost = totalCoffeePrice + totalTeaPrice + totalDessertPrice + totalWafflePrice;
    
    var discount = 0;
    var discountedPrice = totalCost;

    if (totalCost >= 3000) {
        discount = 0.08 * totalCost; // 8% discount for >= 3000
    } else if (totalCost >= 2000) {
        discount = 0.05 * totalCost; // 5% discount for >= 2000
    }

    discountedPrice = totalCost - discount;

    document.write(`
        <br>
        <hr>
        <br>
        <h2>Order Receipt</h2>

        <div>
            <p>${fullName}, Your order receipt with the amount</p>
            <table border="1">
                <thead>
                    <tr>
                        <th>Serial No</th>
                        <th>Quantity</th>
                        <th>Coffee Item</th>
                        <th>Item Price</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>1</td><td>${coffee[coffeeOrder]}</td><td>${itemsQuantity}</td><td>${coffeePrice[coffeeOrder]}</td><td>${totalCoffeePrice}</tr>
                    <tr><td>1</td><td>${tea[teaOrder]}</td><td>${itemsQuantity}</td><td>${teaPrice[teaOrder]}</td><td>${totalTeaPrice}</tr>
                    <tr><td>1</td><td>${dessert[dessertOrder]}</td><td>${itemsQuantity}</td><td>${dessertPrice[dessertOrder]}</td><td>${totalDessertPrice}</tr>
                    <tr><td>1</td><td>${waffle[waffleOrder]}</td><td>${itemsQuantity}</td><td>${wafflePrice[waffleOrder]}</td><td>${totalWafflePrice}</tr>
                </tbody>
                <tfoot>
                    <tr><th>Total Quantity: </td><td>${totatQuantity}</td></tr>
                    <tr><th>Total Payment: </td><td>${totalcost}</td></tr>
                    <tr><th>Discount: </td><td>${discount}</td></tr>
                    <tr><th>Discounted Price: </td><td>${discountedPrice}</td></tr>
                </tfoot>
            </table>
`);