var generateBtn = document.querySelector("#generate");
var lowercaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numericCharArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharArray = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// 1. Prompt the user for the password criteria
// 1a. User PROMPT Password Length between 8 < 128
// 1b. User CONFIRMS: lowercase, uppercase, numbers, special characters

function promptUser() {
  var lengthPrompt = prompt(
    "How many characters do you want your password to be? (Minimum 8 and Max 128 required)"
  );
  if (!lengthPrompt) {
    return null;
  }
  var passwordLength = Number(lengthPrompt);

  if (passwordLength >= 8 && passwordLength <= 128) {
    // LOWERCASE prompt
    var lowerPrompt = confirm(
      "Character Type 1: Do you want lowercase letters in your password?"
    );
    // UPPERCASE prompt
    var upperPrompt = confirm(
      "Character Type 2: Do you want UPPERCASE letters in your password?"
    );
    // NUMBER prompt
    var numberPrompt = confirm(
      "Character Type 3: Do you want numeric characters in your password?"
    );
    // SPECIAL prompt
    var specialPrompt = confirm(
      "Character Type 4: Do you want special characters in your password?"
    );
  } else {
    alert("Input not valid. Please enter an integer between 8 and 128");
    return generatePassword();
  }

  var responses = {
    length: passwordLength,
    lowercase: lowerPrompt,
    uppercase: upperPrompt,
    numeric: numberPrompt,
    special: specialPrompt,
  };
  return responses;
}

//Validate user selected at least one character type
function validateResponses(userInput) {
  console.log("User input variable from checkPassword function:");
  console.log(userInput);
  if (
    !userInput.lowercase &&
    !userInput.uppercase &&
    !userInput.numeric &&
    !userInput.special
  ) {
    alert("Please Select At Least One Type of Character");
    generatePassword();
  }
}
// Combine character arrays into one single array. These serve as the options passed in password

function handleConfirmations(userInput) {
  var charOptions = [];
  if (userInput.lowercase) {
    charOptions = charOptions.concat(lowercaseArray);
    console.log(charOptions);
  }
  if (userInput.uppercase) {
    charOptions = charOptions.concat(uppercaseArray);
    console.log(charOptions);
  }
  if (userInput.numeric) {
    charOptions = charOptions.concat(numericCharArray);
    console.log(charOptions);
  }
  if (userInput.special) {
    charOptions = charOptions.concat(specialCharArray);
    console.log(charOptions);
  }

  console.log("Final character array: ");
  console.log(charOptions);
  return charOptions;
}

// Generate password based on criteria

function createPassword(userInput, charOptions) {
  var newPassword = "";
  for (i = 0; i < userInput.length; i++) {
    let randomChar =
      charOptions[Math.floor(Math.random() * charOptions.length)];
    newPassword = newPassword + randomChar;
  }
  console.log(newPassword);
  return newPassword;
}

function generatePassword() {
  var userInput = promptUser();
  console.log(userInput);
  validateResponses(userInput);
  var charOptions = handleConfirmations(userInput);
  var newPassword = createPassword(userInput, charOptions);
  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
