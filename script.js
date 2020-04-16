//variables for different choices for character passwords
var charlow = 'abcdefghijklmnopqrstuvwxyz';
var charUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var Numb = '0123456789';
var special = '~!@#$%^&*()_+=';

var generateBtn = document.getElementById("generate");

//creating an object 4
var userChoices = {};

//prompt character length
var charLength = parseInt(prompt("Type in a number between 8 and 128."));



generateBtn.addEventListener("click", function(){
  password.innerHTML = writePassword();
})

const myInp = document.getElementById("password");
const btnCopy = document.getElementById("copy");

