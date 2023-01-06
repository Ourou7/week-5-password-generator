// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Declaring variables for password configuration
var passLength = "";
var useUpperCase;
var useLowerCase;
var useNumericCharacters;
var UseSpecialCharacters;
var passwordCharacters = [];
var password;

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