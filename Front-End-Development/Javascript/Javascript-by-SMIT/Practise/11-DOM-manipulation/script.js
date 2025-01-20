// Chapter 56: Target all elements by tag name
// Purpose: Access all elements of a specific type in the DOM.
// Example: Use document.getElementsByTagName('p') to get all paragraph elements.

// Chapter 57: Target some elements by tag name
// Purpose: Use indexes to target specific elements within a tag collection.
// Example: Use document.getElementsByTagName('div')[0] to select the first div element.

// Chapter 58: The DOM
// Purpose: The DOM represents the structure of an HTML document, allowing JavaScript to access and modify elements.
// Example: Use document.body to access the <body> element.

// Chapter 59: The DOM: Parents and children
// Purpose: Navigate relationships between parent and child nodes.
// Methods: Use .parentNode, .firstChild, or .lastChild to traverse nodes.
// Example: Access an element's parent with document.getElementById('child').parentNode.

// Chapter 60: The DOM: Finding children
// Purpose: Get specific child elements of a parent node.
// Methods: Use .children for element nodes, or iterate with .childNodes.
// Example: Use document.getElementById('parent').children[0] to get the first child.

// Chapter 61: Junk artefacts and nodeType
// Purpose: Avoid issues caused by non-element nodes (e.g., text or comments).
// Example: Filter element nodes with nodeType === 1.

// Chapter 62: More ways to target elements
// Purpose: Use advanced methods to access elements dynamically.
// Methods: document.querySelector and document.querySelectorAll.
// Example: Use document.querySelector('.class') for the first match.

// Chapter 63: Getting a target's name
// Purpose: Retrieve the tag name of an element.
// Method: Use .tagName property.
// Example: document.getElementById('myElement').tagName returns 'DIV'.

// Chapter 64: Counting elements
// Purpose: Count specific elements in the DOM.
// Example: Use document.getElementsByTagName('li').length to count all <li> elements.

// Chapter 65: Attributes
// Purpose: Access and manipulate element attributes dynamically.
// Methods: Use .getAttribute() and .setAttribute().
// Example: document.getElementById('link').setAttribute('href', 'https://example.com').

// Chapter 66: Attribute names and values
// Purpose: Iterate through an element's attributes to retrieve names and values.
// Example: Use element.attributes[i].name and element.attributes[i].value in a loop.

// Chapter 67: Adding nodes
// Purpose: Dynamically create and append new nodes.
// Methods: Use document.createElement() and parent.appendChild().
// Example: Create a new <p> with text content and append it to a div.

// Chapter 68: Inserting nodes
// Purpose: Insert nodes at specific positions within a parent.
// Methods: Use parent.insertBefore(newNode, referenceNode).
// Example: Insert a new <li> before an existing one in a list.


/* Problem Name : Bracket Balance
Description: The Bracket Balance problem checks if a given string of brackets (e.g., (), {}, []) is structured correctly. A string is balanced if:
- Every opening bracket has a matching closing bracket.
- Brackets are closed in the correct order. */

// Allowed bracket pairs
const balancedBrackets = ["{}", "[]", "()"];

// Validation for valid input (only brackets allowed)
function isValidInput(equation) {
  const regex = /^[\[\]\{\}\(\)]*$/;
  return regex.test(equation);
}

// Check whether the bracket equation is balanced
function isBalanced(equation) {
  let stack = [];
  for (let char of equation) {
    if ("{[(".includes(char)) {
      stack.push(char);
    } else if (balancedBrackets.includes(`${stack.at(-1)}${char}`)) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}

// Main function to handle input and display results
function main() {
  const message = document.getElementById("message");
  const equationInput = document.getElementById("equation");
  const resultText = document.getElementById("result").querySelector("span");

  const equation = equationInput.value.trim();

  // Validate input
  if (!isValidInput(equation)) {
    message.classList.remove("hidden");
    resultText.textContent = "";
    return;
  }

  message.classList.add("hidden");

  // Check if brackets are balanced and display result
  const result = isBalanced(equation) ? "Balanced" : "Unbalanced";
  resultText.textContent = result;
}

const equationInput = document.getElementById("equation");
equationInput.addEventListener("input", main);

/* Project Name: Slowest Key Identifier
Project Description:
The task is to identify which key took the longest time to press, based on the input keyTimes array. Each entry in keyTimes specifies a key and the time it was pressed. The goal is to determine the key with the maximum pressing duration. */
let keyTimes = [];

let resultElement = document.getElementById('slowestKey');
let keyInput = document.getElementById("key");
let keysSubmission = document.getElementById("submit");

// Function to display error messages
function displayError(message, isVisible) {
  const errorElement = document.getElementById('slowestKey-message');
  if (isVisible) {
    errorElement.innerText = message;
    errorElement.classList.remove('hidden');
  } else {
    errorElement.classList.add('hidden');
  }
}

// Function to validate key input
function validateKey(keyName, time) {
  const nonPrintableKeys = [
    "Shift", "Control", "Alt", "CapsLock", "Esc",
    "NumLock", "Pause", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", 
    "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"];

  if (keyName === "Enter") {
    displayError('Use the button to submit. The Enter key is not valid.', true);
    return false;
  }
  
  if (keyName === 'Backspace' || keyName === 'Delete') {
    if (keyTimes.length > 0) {
      keyTimes.pop();
      displayError('Last key entry removed.', false);
    }
    else {
      displayError('No entries to remove.', true);
    }
    return false;
  }

  if(nonPrintableKeys.includes(keyName)) {
    displayError("Non-printable key Does Not Count, Only Use Valid Alphabets, Number , Character, Space, Backspace or Delete", true);
    return false;
  } 
  
  displayError('', false);
  keyTimes.push([keyName, time ]);
  return true;
}

// Key Entries and checked for validation
function keyEntries() {
  const keyName = event.key;
  const time = Math.floor(performance.now() / 1000);

  validateKey(keyName, time);
  console.log('keyName: ', keyTimes);
}
keyInput.addEventListener("keyup", () => keyEntries());

// Calculate the Duration between Key Times
function calculateDurations() {
  if (keyTimes.length < 1) {
    alert('Not enough key presses to calculate durations.');
    return [];
  }
  return keyTimes.map((entry , index , array) => index === 0 ? entry[1] : entry[1] - array[index - 1][1]);
}

// Find the slowest key based on durations
function findSlowestKey(durations) {
  const maxDuration = Math.max(...durations);
  const slowestKeys = keyTimes
    .filter((_, index) => durations[index] === maxDuration)
    .map(entry => entry[0]);

  return [maxDuration, slowestKeys ];
}

// Display the results
function displayResults([maxDuration, slowestKeys]) {
  resultElement.innerHTML = `
    <p>Max Duration: ${maxDuration}Sec</p>
    <p>Slowest Key(s): ${slowestKeys.join(', ')}</p>
  `;
  resultElement.classList.remove('hidden');
}

// Main function to handle submission
function handleSubmission() {
  const durations = calculateDurations();
  if (durations.length === 0) return;

  const result = findSlowestKey(durations);
  displayResults(result);
}

// Event listener for submission button
keysSubmission.addEventListener('click', handleSubmission);





