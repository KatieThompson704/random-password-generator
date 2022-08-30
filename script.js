// Assignment Code
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
  "()",
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
  var passwordCriteria1 = prompt(
    "How many characters do you want your password to be? (Minimum 8 and Max 128 required)"
  );
  if (7 < passwordLength && passwordLength < 129) {
    console.log("Password Length Accepted!");
  } else {
    console.log(
      "Password Length Failed, please enter a number between 8 and 128"
    );
  }
  var passwordLength = Number(passwordCriteria1);
  var passwordCriteria2 = confirm(
    "Character Type 1: Do you want lowercase letters in your password?"
  );
  var passwordCriteria3 = confirm(
    "Character Type 2: Do you want UPPERCASE letters in your password?"
  );
  var passwordCriteria4 = confirm(
    "Character Type 3: Do you want numeric characters in your password?"
  );
  var passwordCriteria5 = confirm(
    "Character Type 4: Do you want special characters in your password?"
  );
  var responses = {
    length: passwordLength,
    lowercase: passwordCriteria2,
    uppercase: passwordCriteria3,
    numeric: passwordCriteria4,
    special: passwordCriteria5,
  };
  return responses;
}

// 2. Validate the input .

// 3. Generate password based on criteria
// 4. Display the generated password on the page

function generatePassword() {
  var userInput = promptUser();
  console.log(userInput);
}

// for (i= 8; <=passwordCriteria1; ++){
//   console.log("This is the current value of passwordCriteria1: " + passwordCriteria1 +".");
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
