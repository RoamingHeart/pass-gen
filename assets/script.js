// declared variables
var generateBtn = document.querySelector("#generate");
var copyPass = document.querySelector("#copy");
var result = document.querySelector("#result");
var passLength = document.querySelector("#length");
var passLengthResult = document.querySelector("#length-result");
var includeNumbers = document.querySelector("#numbers");
var includeSymbols = document.querySelector("#symbols");
var includeUpper = document.querySelector("#upper");
var includeLower = document.querySelector("#lower");

//password range
passLength.addEventListener("change", (event) => {
  passLengthResult.innerText = event.target.value;
});

//randomizing code
function getRandomLower() {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  return lower[Math.floor(Math.random() * lower.length)];
};

function getRandomUpper() {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upper[Math.floor(Math.random() * upper.length)];
};

function getRandomNumber() {
  const numbers = "1234567890";
  return numbers[Math.floor(Math.random() * numbers.length)];
};

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

//password requirments
generateBtn.addEventListener("click", () => {
  const length = passLength.value;
  const numbers = includeNumbers.checked;
  const symbols = includeSymbols.checked;
  const lower = includeLower.checked;
  const upper = includeUpper.checked;
  result.value = generatePassword(numbers, symbols, lower, upper, length);
});

//generate the pass
function generatePassword(numbers, symbols, lower, upper, length) {
  let generatePassword = "";
  let variationCount = [numbers, symbols, lower, upper].length;

  //conditions
  for (let i = 0; i < length; i += variationCount) {
    if (numbers) {
      generatePassword += getRandomNumber();
    }
    if (symbols) {
      generatePassword += getRandomSymbol();
    }
    if (upper) {
      generatePassword += getRandomUpper();
    }
    if (lower) {
      generatePassword += getRandomLower();
    }
    // generatePassword += getRandomLower();
  }
  
  //cutting the result to desired length
  const finalPassword = generatePassword.slice(0, length);
  //display the wanted content
  return finalPassword;
}

//copy button
copyPass.addEventListener("click", () => {
  navigator.clipboard.writeText(result.value)
});

function copy(text) {
  const input = document.createElement("input");
  input.setAttribute("value", text);
  document.body.appendChild(input);
  input.select();
  let copiedResult = navigator.clipboard.writeText("copy");
  document.body.removeChild(input);
  const alert = document.createElement("div");
  alert.classList.add("alert");
  alert.textContent = "Copied!";
  document.body.appendChild(alert);
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
    document.body.removeChild(alert);
  }, 1000);
  return result;
}

//default length of pass to 20
document.addEventListener("DOMContentLoaded", () => {
  passLength.value = 20;
  passLengthResult.innerText = "20";

  let onLoadLength = passLength.value;
  let onLoadNumbers = includeNumbers.checked;
  let onLoadSymbols = includeSymbols.checked;
  let onLoadUpper = includeUpper.checked;
  let onLoadLower = includeLower.checked;
  result.value = generatePassword(onLoadLength, onLoadNumbers, onLoadSymbols, onLoadLower, onLoadUpper);
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
