
// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '{', '}', '[', ']', '~', '-', '_', '.',];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var allChars = [];



function generatePassword() {
  var passwordLength = parseInt(window.prompt('Password Length'));
  
if (passwordLength === null || passwordLength < 8 || passwordLength > 128) {
  alert("Password must be between 8 and 128 characters.");
 while (passwordLength === null) {
    break;
  }
} else {

  var hasUpperCase = confirm('Do you want uppercase letters?');
  console.log(hasUpperCase);
  if (hasUpperCase) {
    allChars = allChars.concat(upperCasedCharacters);
  }

  var hasLowerCase = confirm('Do you want lowercase letters?');
  console.log(hasLowerCase);
  if (hasLowerCase) {
    allChars = allChars.concat(lowerCasedCharacters);
  }

  var hasSpecialCharacters = confirm('Do you want special characters?');
  console.log(hasSpecialCharacters);
  if (hasSpecialCharacters) {
    allChars = allChars.concat(specialCharacters);
  }

  var hasNumericCharacters = confirm('Do you want numeric characters?');
  console.log(hasNumericCharacters);
  if (hasNumericCharacters) {
    allChars = allChars.concat(numericCharacters);
  }

  for (var i = 0; i < passwordLength; i++) {
    // console.log(Math.floor(Math.random() * allChars.length))
    var randomChar = passwordLength[Math.floor(Math.random() * passwordLength)]
    console.log(randomChar)
    allChars.push(randomChar)
  }

  return allChars.join('');
}
  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '{', '}', '[', ']', '~', '-', '_', '.',];
// var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
// var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
// var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// var allChars = [];

// var passwordLength = parseInt(window.prompt('Password Length'));


// if (passwordLength === null || passwordLength < 8 || passwordLength > 128) {
//   alert("Password must be between 8 and 128 characters.");
//  while (passwordLength === null) {
//     break;
//   }
// } else {

//   var hasUpperCase = confirm('Do you want uppercase letters?');
//   console.log(hasUpperCase);
//   if (hasUpperCase) {
//     allChars = allChars.concat(upperCasedCharacters);
//   }

//   var hasLowerCase = confirm('Do you want lowercase letters?');
//   console.log(hasLowerCase);
//   if (hasLowerCase) {
//     allChars = allChars.concat(lowerCasedCharacters);
//   }

//   var hasSpecialCharacters = confirm('Do you want special characters?');
//   console.log(hasSpecialCharacters);
//   if (hasSpecialCharacters) {
//     allChars = allChars.concat(specialCharacters);
//   }

//   var hasNumericCharacters = confirm('Do you want numeric characters?');
//   console.log(hasNumericCharacters);
//   if (hasNumericCharacters) {
//     allChars = allChars.concat(numericCharacters);
//   }

//   for (var i = 0; i < passwordLength; i++) {
//     console.log(Math.floor(Math.random() * allChars.length))
//     var randomChar = passwordLength[Math.floor(Math.random() * passwordLength)]
//     console.log(randomChar)
//     allChars.push(randomChar)
//   }

//   console.log(allChars);
// }


// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


