// Chapter 35: Functions
// Purpose: To group code into reusable blocks.
// Function Definition: A function is declared using the 'function' keyword followed by a name and parentheses ().
// Functions are invoked by calling the function name followed by parentheses.

// Chapter 36: Functions: Passing Data
// Purpose: To pass data (arguments) into a function for processing.
// Parameters: Values declared within the parentheses of the function definition to receive data.
// Arguments: The actual data passed to the function when calling it.

// Chapter 37: Functions: Passing Data Back From Them
// Purpose: To return a value from a function to the calling code.
// Return Statement: The 'return' keyword is used to pass back a value.
// Once the 'return' statement is executed, the function stops, and the value is sent back.

// Chapter 38: Functions: Local vs. Global Variables
// Purpose: To understand the difference between local and global variables in functions.
// Local Variables: Declared inside a function and can only be accessed within that function.
// Global Variables: Declared outside any function and can be accessed by any function in the code.
// Local variables take precedence over global variables with the same name within the function scope.

// Project Name: Event Management System
// Project Description:
// Design and implement an "Event Management System" where users can create, search, and delete events. Each event will have a name, date and time. Users will be able to check availability of attendees and calculate how many events are scheduled.

var userOption;
var eventsName = [];
var eventsDate = [];
var viewAllEvent = "";
var restartTimeout;

// Event Management System: Menu
function menu() {
  var menu = `Event Management System: Menu \n(1) Add a new Event \n(2) View All Events \n(3) Search Event By Name \n(4) Delete Event \n(5) Exit the System`;
  return menu;
}

// Event Management System: Add new Event
// It add new Event Details in a Main Events Array
function addEvent() {
  var eventName = prompt("Enter The Event Name: ", "College Tech Fest");
  var eventDate = prompt("Enter The Event Date (YYYY-MM-DD) : ", "2024-12-24");
  eventsName.push(eventName);
  eventsDate.push(eventDate);
  console.log("Event Added Successfully");

  restartEventSystem();
}

// Event Management System: View All Event
// It shows all events Name from Main Events Array and else display a message if there is no event in a main array. 
function viewAllEvents() {
  viewAllEvent = "";
  if (eventsName.length > 0) {
    for (var i = 0; i < eventsName.length; i++) {
      viewAllEvent += `${i + 1}: ${eventsName[i]}\n`;
    }
    console.log(`View all the Event:\n${viewAllEvent}`);
  }
  else {
    console.log(`View all the Event:\n There is no Event in system`);
  }

  restartEventSystem();
}

// Event Management System: Search Event By Name
// It searched the event through Name in Main Events array then shows that Events detail such as name , date , days countdown else display message to enter valid event name.
function searchEventByName() {
  var searchEventByName = prompt("Enter the Name of Event: ", "College Tech Fest").toLowerCase();
  var eventFound = false;

  if (!eventAvailability())
    return;

  for (var i = 0; i < eventsName.length; i++) {
    if (eventsName[i].toLowerCase() === searchEventByName) {
      searchedEventDetails = `Searched Event Details:
      Event Name: ${eventsName[i]}
      Event Date: ${eventsDate[i]}
      Days Countdown: ${dayCountdown(eventsDate[i])}`
      console.log(searchedEventDetails);
      eventFound = true;
      break;
    }
  }

  if (!eventFound) {
    console.log("Mistake: Enter the Correct Event Name: ")
  }

  restartEventSystem();
}

// Event Management System: Delete Event By Name
function deleteEventByName() {
  var deleteEventByName = prompt("Enter the Name of Event: ", "College Tech Fest").toLowerCase();
  var eventFound = false;

  if (!eventAvailability())
    return;

  for (var i = 0; i < eventsName.length; i++) {
    if (eventsName[i].toLowerCase() === deleteEventByName) {
      eventsName.splice(i, 1);
      console.log("Event Deleted Successfully");
      eventFound = true;
      break;
    }
  }

  if (!eventFound) {
    console.log("Enter the Correct Event Name: ")
  }

  restartEventSystem();
}

// Checking Event Name Availability in Main
function eventAvailability() {
  if (eventsName.length === 0) {
    console.log("There are no events available.");
    restartEventSystem();
    return false;
  }
  return true;
}

// Event Day Countdown
function dayCountdown(SearchEventDate) {
  var todayDate = new Date();
  var SearchEventDate = new Date(SearchEventDate);

  todayDate = todayDate.getTime();
  SearchEventDate = SearchEventDate.getTime();

  var difference = SearchEventDate - todayDate;
  var days = difference / (1000 * 60 * 60 * 24);
  days = Math.ceil(days)
  return days;
}

// User Option Selection
function option(userOption) {
  if (userOption === 0) {
    console.log("Restart. The chances are over.");
  } else if (userOption === 1) {
    addEvent();
  } else if (userOption === 2) {
    viewAllEvents();
  } else if (userOption === 3) {
    searchEventByName();
  } else if (userOption === 4) {
    deleteEventByName();
  } else {
    console.log("Exit the System");
  }
}

// User Option Validation
function validation(userOption) {
  for (var i = 5; i > 0; i--) {
    if (!Number.isInteger(userOption) || userOption < 1 || userOption > 5) {
      if (i > 1) {
        console.log(`Invalid Option. ${i - 1} Chances Left`);
      }
      else {
        console.log(`The Chances are Over`);
          // Returning 0 to signify the user ran out of chances
          return 0;
      }
      userOption = +prompt("Enter a Valid Option Number (1 to 5): ", 1);
    }
    else {
      // Valid option, break out and return
      return userOption;
    }
  }
}

// Restart Main Event System
function restartEventSystem() {
  clearTimeout(restartTimeout);
  restartTimeout = setTimeout(function () {
    mainEventSystem();
  }, 1000);
}

// Main Event System
function mainEventSystem() {
  console.log(menu());

  userOption = +prompt("Enter the Option Number (1 to 5): ");
  var validatedOption = validation(userOption);
  option(validatedOption);
}

setTimeout(function () {
  mainEventSystem();
}, 3000);