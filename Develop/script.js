// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables for range

var userPassword = "";
// range of lowercase 
var lowerCase  = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// range of uppercase
var upperCase  = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// range of numbers
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// range of special characters
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "'", ";", ":", ",", ".", "<", ">", "/", "?", "|", "]", "[", "{", "}", "=", "+", "-", "_", "~", "`"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Parword length user input
    var passLength = prompt("Please choose the length of your password from 8 - 128.");

// If user cancels, functions stops and user alerted.
    if (passLength === null) {
        alert("No more for today. Goodbye!");

// If user enters criteria correctly, function continues.
    } else if (passLength >= 8 && passLength <= 128) {

// Password lower case inclusion user input
        var passLowerCase = confirm("Would you like your password to include LOWER CASE characters?");

        if (passLowerCase === true) {
            userPassword += lowerCase;
        }
        console.log(userPassword);

// Password upper case inclusion user input
        var passUpperCase = confirm("Would you like your password to include UPPER CASE characters?");

        if (passUpperCase === true) {
            userPassword += upperCase;
        }
        console.log(userPassword);

// Password numbers inclusion user input
        var passNumbers = confirm("Would you like your password to include NUMBER characters?");

        if (passNumbers === true) {
            userPassword += numbers;
        }
        console.log(userPassword);

// Password special characters inclusion user input
        var passSpecialChar = confirm("Would you like your password to include SPECIAL characters?")

        if (passSpecialChar === true) {
            userPassword += special;
        }
        console.log(userPassword);

// If user chooses outside the specified criteria, the user will be alerted to try again.
    } else {
        alert("Password needs to be between 8 and 128 characters. Please try again.");
    }

//User confirmed the range of characters needed for the user password to be created from - now characters are randomised
    var randomChar = "";

    function randomPass() {
        randomChar += userPassword[Math.floor(Math.random() * userPassword.length)];
    }
    var password = generatePassword();

    function generatePassword() {
        for (var i = 0; i < passLength; i++) {
            randomPass();
        }
        return (randomChar);
    }

// Write password to the #password input
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
