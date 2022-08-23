// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    let text;
    let passwordCriteria1 = prompt ("How many characters do you want your password to be? (Minimum 8 and Max 128 required)", "8");
    let passwordCriteria2 = prompt ("Character Type 1: Do you want lowercase letters in your password? (Yes or No)", "yes");
    let passwordCriteria3 = prompt ("Character Type 2: Do you want UPPERCASE letters in your password? (Yes or No)", "yes");
    let passwordCriteria4 = prompt ("Character Type 3: Do you want numeric characters in your password? (Yes or No)", "yes");
    let passwordCriteria5 = prompt ("Character Type 4: Do you want special characters in your password? (Yes or No)", "yes");
}

// function generatePassword(){
//     var passwordLength = passwordCriteria1;
//     if passwordCriteria2 = "yes" {

//     }
//     else if passwordCriteria2 = "no"{

//     };
//     if passwordCriteria3 = "yes" {

//     }
//     else if passwordCriteria3 = "no"{
        
//     };
//     if passwordCriteria4 = "yes" {

//     }
//     else if passwordCriteria4 = "no"{
        
//     };
//     if passwordCriteria5 = "yes" {

//     }
//     else if passwordCriteria5 = "no"{
        
//     };
// }


  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  alert("Your password is " + password);



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
