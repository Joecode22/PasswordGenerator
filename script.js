//Assignment Retirements:
// This module's Challenge requires you to create an application that an employee can use to generate a random password based on criteria they've selected. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes. This module's coursework will teach you all the skills you need to succeed in this assignment. The password can include special characters. If you're unfamiliar with these, see this list of Password Special Characters from the OWASP Foundation

// * User Story
// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security

// * Acceptance Criteria
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// !: THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// !: THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// !: THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// !: I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// !: THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// Todo: THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment code here 
// Need the following variables:
// selected length of the password
var selectedLength;
// array of lowercase letters
// array of uppercase letters
// array of numbers
// array of special characters
var arrayLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var arrayUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var arrayNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '='];
// to hold the password we're building
var generatedPassword = '';
// to hold boolean values for the preferred criteria
var userWantsLowerCase = false;
var userWantsUpperCase = false;
var userWantsNumbers = false;
// prompt for password length --> stored in a variable

function promptLength() {
  var selectedLength = prompt('Enter a desired password length between 8 and 128 characters?');
  // Validate the user input --> inform user the password must be <8 or >128, alert them, and start the function over if they enter an invalid number/character
  if (selectedLength < 8 || selectedLength > 128) {
    alert('Password length should be a whole number between 8 and 128');
    promptLength();
  }
  return selectedLength;
}
//Create a function that collects the user's preferred criteria
function collectCriteria() {
  const includeLowercase = confirm("Do you want to Include lowercase characters?");
  const includeUppercase = confirm("Do you want to Include uppercase characters?");
  const includeNumeric = confirm("Do you want to Include numeric characters?");
  const includeSpecial = confirm("Do you want to Include special characters?");
  // Validate that the user has chosen at least one character set
  if (userWantsLowerCase === false && userWantsUpperCase === false && userWantsNumbers === false && userWantsSpecialChar === false) {
    alert('You must select at least one character set');
    collectCriteria();
  }
};
//* Note There needs to be at least one of each selected character type included in the password
// Todo: Write a function that Randomly generate a character from each character set as it's chosen and add it to the end of the password that you're building (.push() for an array or .concat() for a string)


// for loop:
// for (var i = password.length - 1; i < passwordLength; i++)
// EITHER keep the character sets separate OR combine them to a mega-array to pull the rest of the characters from
// IF keeping the character sets separate, randomly generate a number to tell which array you're pulling from, then randomly generate a number to pull the character from the array (character will by array[number])
// IF pushing to a mega-array randomly generate a number to pull a character from the array
// IF pushing to a mega-array, remember to set the array back to an empty array at the start of the process!
// return the generated password



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log('ding')
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
