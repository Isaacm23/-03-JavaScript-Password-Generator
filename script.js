// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // password values
  var charlow = "abcdefghijklmnopqrstuvwxyz"
  var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numb = "0123456789"
  var special = "#$%&\'()*+,-./:;<=>?@[\\]^_`{|}"
  passwordText.value = password;
// create for loop



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword(l,values){
  var passwordText = '';
  for(var i = 0; i<l; i++){
      passwordText += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return passwordText;
}