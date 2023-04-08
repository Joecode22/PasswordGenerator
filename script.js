// Password Generator
// A Coding BootCamp Challenge
// Joseph McKinney

// Start of Code
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

//* Function that prompts for password length
function promptLength() {
  selectedLength = prompt('Enter a desired password length between 8 and 128 characters?');
  // Validate the user input --> inform user the password must be <8 or >128, alert them, and start the function over if they enter an invalid number/character
  // also validate that the user entered a whole number
  if ((selectedLength < 8 || selectedLength > 128) && selectedLength.isinteger() === true) {
    console.log(selectedLength.isinteger())
    alert(selectedLength = 'Password length should be a whole number between 8 and 128');
    promptLength();
  }
  return selectedLength;
}
//* Function that collects the user's preferred criteria
//also selects a random character from the selected criteria and adds it to the generated password
function collectCriteria() {

  if (confirm("Do you want lowercase characters?")) {
    var userWantsLowerCase = true;
    //select a random character from the array and add it to the generated password
    generatedPassword += arrayLower[Math.floor(Math.random() * arrayLower.length)];
    //add the array to the largeCharacterArray
    largeCharacterArray = largeCharacterArray.concat(arrayLower);
  }
  if (confirm("Do you want uppercase characters?")) {
    var userWantsUpperCase = true;
    //select a random character from the array and add it to the generated password
    generatedPassword += arrayUpper[Math.floor(Math.random() * arrayUpper.length)];
    //add the array to the largeCharacterArray
    largeCharacterArray = largeCharacterArray.concat(arrayUpper);
  }
  if (confirm("Do you want numbers?")) {
    var userWantsNumbers = true;
    //select a random character from the array and add it to the generated password
    generatedPassword += arrayNumbers[Math.floor(Math.random() * arrayNumbers.length)];
    //add the array to the largeCharacterArray
    largeCharacterArray = largeCharacterArray.concat(arrayNumbers);
  }
  if (confirm("Do you want special characters?")) {
    var userWantsSpecialChar = true;
    //select a random character from the array and add it to the generated password
    generatedPassword += specialChar[Math.floor(Math.random() * specialChar.length)];
    //add the array to the largeCharacterArray
    largeCharacterArray = largeCharacterArray.concat(specialChar);
  }

  // Validate that the user has chosen at least one character set
  if (userWantsLowerCase === false && userWantsUpperCase === false && userWantsNumbers === false && userWantsSpecialChar === false) {
    alert('You must select at least one character set');
    collectCriteria();
  }
};

//* Function that continues to generate the password
function generatePassword() {
  promptLength();
  collectCriteria();
  //write a loop that will generate a random character from the largeCharacterArray until the password is the desired length
  for (var i = generatedPassword.length; i < selectedLength; i++) {
    generatedPassword += largeCharacterArray[Math.floor(Math.random() * largeCharacterArray.length)];
  };
  return generatedPassword;
}

//* Gets references to the #generate element and stores it in a variable
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//* Function that displays the generated password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//* Event listener to generate button using the variable we created earlier
generateBtn.addEventListener("click", writePassword);

//END OF CODE