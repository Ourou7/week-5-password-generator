// Function to generate random symbols
function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

// Function to generate random numeric characters
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

// Function to generate random lowercase characters
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

// Function to generate random uppercase characters
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Declaring variables for password configuration
var passLength = "";
var useUpperCase;
var useLowerCase;
var useNumericCharacters;
var UseSpecialCharacters;
var passwordCharacters = [];
var rngPassword;
var typesCount = useUpperCase + useLowerCase + useNumericCharacters + UseSpecialCharacters

// Declaring the character select function that will be part of the password option function later.
function getCharacterSelect() {
  useUpperCase = confirm("Click confirm to include uppercase characters.");
  useLowerCase = confirm("Click confirm to include lowercase letters.");
  useNumericCharacters = confirm("Click confirm to include numeric characters.");
  UseSpecialCharacters = confirm("click confirm to include special characters.");
  // We need a check here to make sure the user chooses at least one type of character.
  if (useUpperCase === false && useLowerCase == false && useNumericCharacters == false && UseSpecialCharacters == false)
    alert("Error. Please choose at least one character type to include.");
    getCharacterSelect();
 }

// Function to prompt user for password options.
function getPasswordOptions() {
  passLength = (prompt("Please enter a desired password length between 10 and 64."));
  // We need a loop here to make sure that the answer given by the user is between 10 and 64.
  while (passLength <= 9 || passLength >= 65){
    alert("ERROR. Invalid length. Password must be between 10 and 64 characters.");
    passLength = prompt("Please enter a desired password length between 10 and 64.");
  } getCharacterSelect ()
}


// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  for(let i = 0; i < passLength; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type) [0]
  })
  }
  }


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);