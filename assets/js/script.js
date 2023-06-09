// Password Generator
// A Coding BootCamp Challenge
// Joseph McKinney
// 2023-04-03

// Start of Code


//* Variable Declarations
// selected length of the password
var selectedLength = 0;
// array of lowercase letters, uppercase letters, numbers, and special characters
var arrayLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var arrayUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var arrayNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '='];
// creates array of characters to pull from
var largeCharacterArray = [];
// to hold the password we're building
var generatedPassword = '';

//* Function that prompts for password length
function promptLength() {
  console.log('ding');
  selectedLength = prompt('Enter a desired password length between 8 and 128 characters?');
  // Validate the user input --> inform user the password must be <8 or >128, alert them, and start the function over if they enter an invalid number/character

  if ((selectedLength < 8 || selectedLength > 128)) {
    alert('Password length should be a number between 8 and 128');
    promptLength();
  }
  return selectedLength;
}

//* Function that collects the user's preferred criteria and builds part of the password
function collectCriteria() {

  const userWantsLowerCase = confirm("Do you want lowercase characters?")
  if (userWantsLowerCase) {
    console.log('user wants lowercase')
    generatedPassword += arrayLower[Math.floor(Math.random() * arrayLower.length)];
    largeCharacterArray = largeCharacterArray.concat(arrayLower);
    console.log(largeCharacterArray)
  }

  const userWantsUpperCase = confirm("Do you want uppercase characters?")
  if (userWantsUpperCase) {
    console.log('user wants uppercase')
    generatedPassword += arrayUpper[Math.floor(Math.random() * arrayUpper.length)];
    largeCharacterArray = largeCharacterArray.concat(arrayUpper);
    console.log(largeCharacterArray)
  }

  const userWantsNumbers = confirm("Do you want numbers?")
  if (userWantsNumbers) {
    console.log('user wants numbers')
    generatedPassword += arrayNumbers[Math.floor(Math.random() * arrayNumbers.length)];
    largeCharacterArray = largeCharacterArray.concat(arrayNumbers);
    console.log(largeCharacterArray)
  }

  const userWantsSpecialChar = confirm("Do you want special characters?")
  if (userWantsSpecialChar) {
    console.log('user wants special characters')
    generatedPassword += specialChar[Math.floor(Math.random() * specialChar.length)];
    largeCharacterArray = largeCharacterArray.concat(specialChar);
    console.log(largeCharacterArray)
  }
  // Validate that the user has chosen at least one character set
  if (userWantsLowerCase === false && userWantsUpperCase === false && userWantsNumbers === false && userWantsSpecialChar === false) {
    alert('You must select at least one character set');
    collectCriteria();    
  }
};

//* Function that continues to generate the password by randomly selecting elements from the largeCharacterArray
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

  //* reset the variables
  largeCharacterArray=[];
  selectedLength=0;
  generatedPassword=''
}

//* Event listener to generate button using the variable we created earlier
generateBtn.addEventListener("click", writePassword);

//END OF CODE