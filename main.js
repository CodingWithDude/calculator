class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = "";
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const backspaceButton = document.querySelector("[data-backspace]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

// initalizing calculator
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

// capturing click events

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

backspaceButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});

// capturing keydown events

const numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operationKeys = ["+", "-", "*", "/"];
const allClearKey = "Delete";
const equalsKey = "Enter";
const backspaceKey = "Backspace";
let currentKey = undefined;

document.addEventListener("keydown", (e) => {
  if (numberKeys.includes(e.key)) {
    calculator.appendNumber(e.key);
    calculator.updateDisplay();
    currentKey = document.getElementById(e.key);
    currentKey.classList.add("active");
  }
});

document.addEventListener("keydown", (e) => {
  if (operationKeys.includes(e.key)) {
    calculator.chooseOperation(e.key);
    calculator.updateDisplay();
    currentKey = document.getElementById(e.key);
    currentKey.classList.add("active");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === allClearKey) {
    calculator.clear();
    calculator.updateDisplay();
    currentKey = document.getElementById(e.key);
    currentKey.classList.add("active");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === equalsKey) {
    calculator.compute();
    calculator.updateDisplay();
    currentKey = document.getElementById(e.key);
    currentKey.classList.add("active");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === backspaceKey) {
    calculator.delete();
    calculator.updateDisplay();
    currentKey = document.getElementById(e.key);
    currentKey.classList.add("active");
  }
});

// remove .active class css on keyup

let elem = undefined;

document.addEventListener("keyup", (e) => {
  for (elem of document.getElementsByClassName("active")) {
    elem.classList.remove("active");
  }
});
