// declared variables
//connects to the generate button
var genBtn = document.querySelector("#gene");
//connects to the copy button
var copyP = document.querySelector("#copy");
//connects to the place where the result of the code gets output
var output = document.querySelector("#output");
//connects to the input range of deciding the length of the password
var passLeng = document.querySelector("#stretch");
//connects to the part next to the slider, shows t number is curently set 
var passLengRes = document.querySelector("#strech-result");
//connects to where the numbers checkbox is set
var addNums = document.querySelector("#num");
//connects to where the symbols are checked
var addSym = document.querySelector("#symb");
//connects to the option for upper case letters
var addCap = document.querySelector("#upp");
//links to option for lower case letters
var addLow = document.querySelector("#low");

//password range, lets the user maove the slider to change to desired amount of characters in their password
passLeng.addEventListener("change", (event) => {
  passLengRes.innerText = event.target.value;
});

//randomizing code
//generated the lower case letters
function getRanLow() {
  const low = "abcdefghijklmnopqrstuvwxyz";
  //randomizes from the variable above
  return low[Math.floor(Math.random() * low.length)];
};
//generates the upper case lettes
function getRanUp() {
  const upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //does the same as getRandomLower but the variable string has upper case letters instead of lower case
  return upp[Math.floor(Math.random() * upp.length)];
};

//generates numbers into the result
function getRanNum() {
  const num = '123456789';
  //randomizes output with characters from inside the string
  return num[Math.floor(Math.random() * num.length)];
};
//generates symbols into the password is desired
function getRanSym() {
  const symb = "!@#$%^&*(){}[]=<>/,.";
  //randomizes symbols into the password from inside the string from above
  return symb[Math.floor(Math.random() * symb.length)];
};

//password requirments that the user chooses
genBtn.addEventListener("click", () => {
  //the desired length of the password
  const length = passLeng.value;
  //if the numbers option is checked
  const num = addNums.checked;
  //if the symbols options is checked
  const symb = addSym.checked;
  //if the users checked for lower case letters
  const low = addLow.checked;
  //if the user checked the option for uppercase letters
  const upp = addCap.checked;
  //displays the result of all the conditions set
  output.value = genPass(num, symb, low, upp, length);
});

//generate the password
function genPass(num, symb, low, upp, length) {
  let genPass = "";
  let VariNum = [num, symb, low, upp].length;

  //conditions
  for (let i = 0; i < length; i += VariNum) {
    if (num) {
      //if numbers are set, places numbers into the password
      genPass += getRanNum();
    }
    if (symb) {
      //if symbols are checked, add symbols into the password
      genPass += getRanSym();
    }
    if (upp) {
      //if uppercase letters is checked, add uppercase letters into the password
      genPass += getRanUp();
    }
    if (low) {
      //if lowercase letters are selected, add lower case letters into the password
      genPass += getRanLow();
    }
    //if none of the numbers, symbols, or two letters are selected, nothing gets outputted
  }
  
  //cutting the result to desired length
  const finPass = genPass.slice(0, length);
  //display the wanted content
  return finPass;
}

//copy button using clipboard API
copyP.addEventListener("click", () => {
  navigator.clipboard.writeText(output.value)
});


//realized that I didn't need this if I use clipboard API
// function copy(text) {
//   const input = document.createElement("input");
//   input.setAttribute("value", text);
//   document.body.appendChild(input);
//   input.select();
//   let copiedResult = navigator.clipboard.writeText("copy");
//   document.body.removeChild(input);
//   const alert = document.createElement("div");
//   alert.classList.add("alert");
//   alert.textContent = "Copied!";
//   document.body.appendChild(alert);
//   setTimeout(() => {
//     document.querySelector(".alert").style.display = "none";
//     document.body.removeChild(alert);
//   }, 1000);
//   return result;
// }


//default length of pass to 15
//adds some default settings to the password for when the user first loads into the page 
document.addEventListener("DOMContentLoaded", () => {
  //sets default length to 15 characters
  passLeng.value = 15;
  passLengRes.innerText = "15";

  //sets the starting conditions
  let startLeng = passLeng.value;
  let startNum = addNums.checked;
  let startSym = addSym.checked;
  let startCap = addCap.checked;
  let startLow = addLow.checked;
  output.value = genPass(startLeng, startNum, startSym, startCap, startLow);
});

// function generatePassword() {

// }

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
