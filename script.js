// Todo: THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

//* Variable Declarations
// selected length of the password
var selectedLength;
// array of lowercase letters, uppercase letters, numbers, and special characters
var arrayLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var arrayUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var arrayNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '='];
// creates array of characters to pull from
var largeCharacterArray = [];
// to hold the password we're building
var generatedPassword = '';


// *function that prompts for password length
function promptLength() {
  selectedLength = prompt('Enter a desired password length between 8 and 128 characters?');
  // Validate the user input --> inform user the password must be <8 or >128, alert them, and start the function over if they enter an invalid number/character
  if (selectedLength < 8 || selectedLength > 128) {
    alert(selectedLength = 'Password length should be a whole number between 8 and 128');
    promptLength();
  }
  return selectedLength;
}
//Create a function that collects the user's preferred criteria
function collectCriteria() {
  
  if (confirm("Do you want lowercase characters?")) {
    var userWantsLowerCase = true;
    generatedPassword += arrayLower[Math.floor(Math.random() * arrayLower.length)];
    console.log(generatedPassword)
    largeCharacterArray = largeCharacterArray.concat(arrayLower);
  }
  if (confirm("Do you want uppercase characters?")) {
    var userWantsUpperCase = true;
    generatedPassword += arrayUpper[Math.floor(Math.random() * arrayUpper.length)];
    console.log(generatedPassword)
    largeCharacterArray = largeCharacterArray.concat(arrayUpper);
  }
  if (confirm("Do you want numbers?")) {
    var userWantsNumbers = true;
    generatedPassword += arrayNumbers[Math.floor(Math.random() * arrayNumbers.length)];
    console.log(generatedPassword)
    largeCharacterArray = largeCharacterArray.concat(arrayNumbers);
  }
  if (confirm("Do you want special characters?")) {
    var userWantsSpecialChar = true;
    generatedPassword += specialChar[Math.floor(Math.random() * specialChar.length)];
    console.log(generatedPassword)
    largeCharacterArray = largeCharacterArray.concat(specialChar);
  }
  // Validate that the user has chosen at least one character set
  if (userWantsLowerCase === false && userWantsUpperCase === false && userWantsNumbers === false && userWantsSpecialChar === false) {
    alert('You must select at least one character set');
    collectCriteria();
  }
};
//* Note There needs to be at least one of each selected character type included in the password
// Todo: Write a function that Randomly generate a character from each character set as it's chosen and add it to the end of the password that you're building (.push() for an array or .concat() for a string)
function generatePassword() {
  promptLength();
  collectCriteria();
  //write a loop that will generate a random character from the largeCharacterArray until the password is the desired length
  for (var i = generatedPassword.length; i < selectedLength; i++) {
    generatedPassword += largeCharacterArray[Math.floor(Math.random() * largeCharacterArray.length)];
  };
}
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// return the generated password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log('ding')
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
