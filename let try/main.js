const a = 8;
const b = 2;

function showResult(value) {
  document.getElementById("result").textContent = "The answer is: " + value;
}

function add() {
  showResult(a + b);
}

function subtract() {
  showResult(a - b);
}

function divide() {
  showResult(a / b);
}

function multiply() {
  showResult(a * b);
}