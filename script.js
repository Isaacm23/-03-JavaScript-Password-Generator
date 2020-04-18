//variables for different choices for character passwords
var charlow = 'abcdefghijklmnopqrstuvwxyz';
var charUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var Numb = '0123456789';
var special = '~!@#$%^&*()_+=';

var generateBtn = document.getElementById("generate");

//creating an object for user selection
var userChoices = {};

//character length
var charLength = parseInt(prompt("Type in a number between 8 and 128."));

// userChoice charLength; 
console.log(charLength)

// get user input
function promptUser() {
  var numChar = confirm("Include numbers?");
  var lowerChar = confirm("Include lowercase characters?");
  var upperChar = confirm("Include uppercase characters?");
  var specialChar = confirm("Include special characters?");

// saving user's answer 
  if (numChar) {
    userChoices["Numb"] = Numb;
  }
  if (lowerChar) {
    userChoices["charlow"] = charlow;
  }  
  if (upperChar) {
    userChoices["charUp"] = charUp;
  }
  if (specialChar) {
    userChoices["special"] = special;
  }
  
  console.log(userChoices);
}

promptUser();

//
function writePassword() {
  let finalPassword = '';
  for (var i = 0; i < charLength; i++) { 
// object.keys runs goes through array of userChoices
    let passwordEls = Object.keys(userChoices)
// returns a random whole number * the user choice of length of password
    let randomEl = passwordEls[Math.floor(Math.random() * passwordEls.length)]
// 
    let char = getRandomCharacter(userChoices[randomEl]);

    finalPassword += char;

    console.log('RandomCharacter', char);
  } 
  return finalPassword
}

function getRandomCharacter(str) {
  return str[Math.floor(Math.random() * str.length)]
}

writePassword();



generateBtn.addEventListener("click", function(){
  password.innerHTML = writePassword();
})




