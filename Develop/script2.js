// VARIABLES

// variable to use for concatenating ranges
var startingRange = [];
// array of lowercase 
var rangeOfLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// array of uppercase
var rangeOfUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// array of numbers
var rangeOfNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// array of special characters
var rangeOfSpecialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "'", ";", ":", ",", ".", "<", ">", "/", "?", "|", "]", "[", "{", "}", "=", "+", "-", "_", "~", "`"];
// variable used in mathrandom calc - will contant all selected character types
var availableContent = [];
// create an array for each step of the content selection
var step1 = [];
var step2 = [];
var step3 = [];
var step4 = [];
// create variable linked to #generate in html code 
var generateBtn = document.querySelector("#generate");


// FUNCTIONS 

// Write password to the #password input
function writePassword() {

  // first prompt - establish how long the user want the password to be and save under variable "length"
  var length = prompt("How many characters do you want in your password? 8-128");
  
  // if cancel button pressed
  if (length == null) {
    // alert error message
    alert("Ok, no password today");
    // function ends
  }

  // error message if user inputs a shorter/longer password length 
  else if (parseInt(length) < 8 || parseInt(length) > 128) {
    // alert error message
    alert("That doesn't look right! Password has to be between 8 and 128 characters long");
    // restart function
    writePassword();
  }
  
  // if the answer is within the range of 8-128
  else if (parseInt(length) >= 8 || parseInt(length) <= 128){
    
    // confirm is yser wants to include lowercase letters
    lowerCase = confirm("Click OK if you want to include lowercase letters? e.g. a,b,c,d,e...");
    // if they do want lowercase...
    if (lowerCase) {
      // concat range of lowercase to empty startingRange and store in step1 
      step1 = startingRange.concat(rangeOfLowerCase);
      console.log(step1);
    }

    // confirm if user wants UPPERCASE
    upperCase = confirm("Click OK if you want to include uppercase letters? e.g. A,B,C,D,E...");
    // if user does want uppercase added...
    if (upperCase) {
      // concat 
      step2 = startingRange.concat(rangeOfUpperCase);
      console.log(step2);
    }

    // confirm is user wants numbers 
    numbers = confirm("Click OK if you want to include numbers?");
    // if user wants numbers...
    if (numbers) {
      // add range of numbers list to available content
      step3 = startingRange.concat(rangeOfNumbers);
      console.log(step3);
    }

    // confirm if user wants special characters 
    specialChar = confirm("Click OK if you want to special charactes? e.g. !,@,#,$,%");
    // if they do want special characters
    if (specialChar) {
      // add range of special characters to available content 
      step4 = startingRange.concat(rangeOfSpecialChar);
      console.log(step4);
    }

    availableContent = step1.concat(step2, step3, step4);

    // error message if no character sets are chosen + restart function
    if (availableContent == "") {
      alert("That doesn't look right! You have to choose at least 1 character type. Try again");
      writePassword();
    }


    // set a variable called randomOutput to empty
    var randomOutput = "";
    // function to randomly select items from available content and add each selected element to var randomOutput (cumulatively)
    function randomItemsFromList() {
      randomOutput += availableContent[Math.floor(Math.random() * availableContent.length)];
    }
    // now the array available content is set with appropriate content, and a function created to randomise items from



    // new variable PASSWORD 
    var password = generatePassword();
    // password creation
    function generatePassword() {
      // loop will run for the length the user entered
      for (i = 0; i < length; i++) {
        // runs the function to create a random list from available content
        randomItemsFromList();
      }
      // return the cumulative random output as the new definition of var password
      return(randomOutput)
      }
  

    // link passwordText var to position in html doc to insert new password
    var passwordText = document.querySelector("#password");

    // link the password variable to the text.value to put on html
    passwordText.value = password;

    // empty available content and all the steps for any futher password generating
    availableContent = [];
    step1 = [];
    step2 = [];
    step3 = [];
    step4 = [];

  }

  // if user inputs something OTHER than a number or they enter nothing
  else {
    // alert error message
    alert("Please enter a numerical value")
    // restart function
    writePassword();
  }
}


// EVENT LISTENERS

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
