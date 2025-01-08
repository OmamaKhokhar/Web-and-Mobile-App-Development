// Event and Event Handler:
// Event: An event is any action or occurrence recognized by JavaScript that can be used to trigger code. 
// Event Handler: A function that executes when the event occurs.

// Methods to Use Events:
// 1. HTML Attribute: Like Adding 'onclick' directly in the HTML tag.
// 2. JavaScript with element.addEventListener(event, call-back function); Setting up event handling in JavaScript for more flexibility.the call back function should bve used as reference.

// Chapter 45: Events: Link
// Event: 'click' and 'dblclick' are triggered when a link is clicked or double-clicked.
// Purpose: Execute JavaScript actions without navigating away using href="JavaScript:void(0)".
// Example: Commonly used for links and images to handle user interactions.

// Chapter 46: Events: Button
// Event: 'click' and 'dblclick' allow interaction with button elements.
// Purpose: Perform specific actions, such as form submission or triggering functions.

// Chapter 47: Events: Mouse
// Events: 'mouseover', 'mouseout', 'mousemove' track mouse movement over elements.
// Purpose: Enhance UX with hover effects, tooltips, or tracking movements.

// Chapter 48: Events: Fields
// Events: 'focus', 'blur', 'change' track interactions with form fields.
// Purpose: Validate input, detect field changes, or guide user interaction.

// Chapter 49: Reading Field Values
// Purpose: Retrieve values from input fields using JavaScript.
// Example: Use .value property to get the current text in a field.

// Chapter 50: Setting Field Values
// Purpose: Set or update input field values dynamically using JavaScript.
// Example: Use .value = 'New Value' to assign new text to a field.

// Chapter 51: Reading and Setting Paragraph Text
// Purpose: Use JavaScript to get or set text content in paragraph tags.
// Methods: Use .innerText or .textContent for reading/updating text.
// Example: Dynamically display messages or update page content.

// Chapter 52: Manipulating Images and Text
// Purpose: Dynamically change image sources or text based on user actions.
// Example: Use .src to update an image, .innerHTML to modify text.

// Chapter 53: Swapping Images
// Purpose: Replace images dynamically on specific events like clicks or hovers.
// Example: Update .src property of an image element.

// Chapter 54: Swapping Images and Setting Classes
// Purpose: Combine image swaps with class changes for styles or effects.
// Example: Add/Remove classes using .classList.add() or .classList.remove().

// Chapter 55: Setting Styles
// Purpose: Modify element styles dynamically using JavaScript.
// Example: Use .style.propertyName = 'value' for direct style updates.

// Additional Topics on Events
// Event Listeners:
// Purpose: Attach or remove events dynamically using addEventListener and removeEventListener.
// Methods: addEventListener(event, callback), removeEventListener(event, callback).
// Keyboard Events:
// Events: 'keydown', 'keyup', and 'keypress' (deprecated).
// Purpose: Handle user inputs via the keyboard, such as shortcuts or form navigation. 
// Scroll Events:
// Event: 'scroll' triggers when an element or the page is scrolled.
// Purpose: Detect scrolling behavior for animations, lazy loading, or navigation updates.
// Form Events:
// Events: 'submit' and 'reset' handle form submissions and resets.
// Purpose: Dynamically process or validate form data.
// There are many other event related to Clipboard Events, Page Visibility and  Media Events.

// Project Topics:

// Regular Expression: A sequence of characters forming a search pattern, used for matching text.
// .test(): Checks if a string matches the regex pattern, returns true/false.
// .match(): Returns the matching parts of a string or null if no match is found.
// Formats:
// /\d/: Matches any digit (0-9). Used to check if a string contains numbers.
// /^[A-Za-z ]+$/: Matches only alphabetic characters and spaces. Used for name validation.
// /^[^\s@]+@[^\s@]+\.[^\s@]+$/: Validates a standard email format (e.g., name@example.com).

// String Method:
// trim(): The trim() method is a string method in JavaScript that removes whitespace spaces, tabs, newlines from both the beginning and the end of a string

// Project Name: Basic Product Review Form
// Create a Product Review Form that allows users to:
// - Fill out their name, email,  and choose one of several options (like a satisfaction rating).
// - Submit the form.
// - Display the user’s entered data dynamically on the same page.

// For Getting Element 
let userNameInput = document.getElementById('name');
let emailInput = document.getElementById("email");                              
let ratingInputs = document.getElementsByName("rating");
let rateOption;
let formSubmit = document.getElementById("submit");
let submissionModal = document.getElementById("card-container");;
let modalCloseButton = document.getElementById("close-Btn");


// Error Messaging Updating
function updateError(errorElement, errorMessage, isValid){
    if(isValid){
        errorElement.classList.remove('show');
        errorElement.innerText= errorMessage;
    }
    else{
        errorElement.classList.add('show');
        errorElement.innerText = errorMessage;   
    }
}

// User Name Validation with Error Messaging  
function nameValidation(element) {
    let nameValue  = element.value.trim();
    let nameErrorElement = document.getElementById('name-error');
    let nameErrorMessage = "";
    let isValid = false;

    if (!nameValue ) {
        nameErrorMessage = "Name cannot be empty. Kindly enter your name.";
    } else if (/\d/.test(nameValue)) {
        nameErrorMessage = "Name cannot include numbers. Kindly enter only alphabetic characters.";
    } else if (!/^[A-Za-z ]+$/.test(nameValue)) {
        nameErrorMessage = "Name can only contain alphabetic characters.";
    } else if (nameValue.length <= 2 || nameValue.length > 30) {
        nameErrorMessage = "Name must be between 3 and 30 characters long.";
    } else {
        isValid = true;
    }

    updateError(nameErrorElement, nameErrorMessage, isValid);
    return isValid;
}
userNameInput.addEventListener('blur', () => nameValidation(userNameInput));

// Email Validation with Error Messaging  
function emailValidation(element){
    let emailValue = element.value.trim();
    let emailErrorElement = document.getElementById('email-error');
    let emailErrorMessage = "";
    let isValid = false;

    if(emailValue === ""){
        emailErrorMessage = "Email cannot be empty. Kindly enter your name.";
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)){
        emailErrorMessage = "Kindly enter a valid email";
    }
    else{
        isValid = true;
    }

    updateError(emailErrorElement, emailErrorMessage, isValid);
    return isValid;
}
emailInput.addEventListener("blur", () => emailValidation(emailInput));

// Rating Validation  with Error Messaging  
function ratingValidation(options){
    let rateErrorElement = document.getElementById("rating-error");
    let rateErrorMessage = "";

    let isSelected = Array.from(options).some(option => option.checked === true);

    if(!isSelected){
        rateErrorMessage = "Kindly Select one Option";
    }

    updateError(rateErrorElement, rateErrorMessage, isSelected);
    return isSelected;
}
ratingInputs.forEach(element => element.addEventListener("change", () => ratingValidation(ratingInputs)));

// Modal After Submission
function modal() {
    submissionModal.classList.remove("hidden");

    let submittedName = document.getElementById("submitted-name");
    submittedName.innerText = `Name: ${userNameInput.value}`;

    let submittedEmail = document.getElementById("submitted-email");
    submittedEmail.innerText = `Email: ${emailInput.value}`;

    let submittedRatting = document.getElementById("submitted-rate");
    let rateOption = Array.from(ratingInputs).find((option) => option.checked); 
    submittedRatting.innerText = `Rate: ${rateOption.value}`;
}

// Form Submission
function formValidation(event){
    event.preventDefault();
    let submitErrorElement = document.getElementById("submit-error")
    let submitErrorMessage = "";
    let isValid = false;
    
    let isFieldValid = [nameValidation(userNameInput), emailValidation(emailInput), ratingValidation(ratingInputs)]
    
    if(isFieldValid.every(field => field === true)){
        isValid = true;
        modal();
    }
    else{
        submitErrorMessage = "Submission Failed! Kindly Submit the Form Correctly";  
    }
    updateError(submitErrorElement, submitErrorMessage, isValid);
}
formSubmit.addEventListener("submit" , formValidation);

// Modal Close Button
function closeModal(){
    submissionModal.classList.add("hidden");
    formSubmit.reset();
}
modalCloseButton.addEventListener("click" , closeModal);