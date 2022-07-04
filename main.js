// takes onclick and simulates keydown
function simulateKeydown(value) {
  window.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: value,
    })
  );
  window.dispatchEvent(
    new KeyboardEvent("keyup", {
      key: value,
    })
  );
}

// main program
window.addEventListener("load", function () {
  const displayCurrent = document.querySelector(".displayCurrent");
  const displayLast = document.querySelector(".displayLast");
  let input = "";
  let num1 = null;
  let num2 = null;
  let operator = "";
  let newState = true;
  let decimalState = false;
  let zero = document.getElementById("0");
  let one = document.getElementById("1");
  let two = document.getElementById("2");
  let three = document.getElementById("3");
  let four = document.getElementById("4");
  let five = document.getElementById("5");
  let six = document.getElementById("6");
  let seven = document.getElementById("7");
  let eight = document.getElementById("8");
  let nine = document.getElementById("9");
  let deleteBtn = document.getElementById("deleteBtn");
  let backspaceBtn = document.getElementById("backspaceBtn");
  let divide = document.getElementById("/");
  let multiply = document.getElementById("*");
  let add = document.getElementById("+");
  let subtract = document.getElementById("-");
  let decimal = document.getElementById(".");
  let enter = document.getElementById("Enter");

  window.addEventListener("keydown", (e) => {
    // check if starting new function
    if (!newState) {
      displayCurrent.innerText = "";
      displayLast.innerText = "";
      newState = true;
    }
    // for numeric input
    if (e.key === "0" && newState) {
      input += e.key;
      displayCurrent.innerText = input;
      zero.classList.add("active");
    }
    if (e.key === "1" && newState) {
      input += e.key;
      displayCurrent.innerText = input;
      one.classList.add("active");
    }
    if (e.key === "2" && newState) {
      input += e.key;
      displayCurrent.innerText = input;
      two.classList.add("active");
    }
    if (e.key === "3" && newState) {
      input += e.key;
      displayCurrent.innerText = input;
      three.classList.add("active");
    }
    if (e.key === "4" && newState) {
      input += e.key;
      displayCurrent.innerText = input;
      four.classList.add("active");
    }
    if (e.key === "5" && newState) {
      input += e.key;
      displayCurrent.innerText = input;
      five.classList.add("active");
    }
    if (e.key === "6" && newState) {
      input += e.key;
      displayCurrent.innerText = input;
      six.classList.add("active");
    }
    if (e.key === "7" && newState) {
      input += e.key;
      displayCurrent.innerText = input;
      seven.classList.add("active");
    }
    if (e.key === "8" && newState) {
      input += e.key;
      displayCurrent.innerText = input;
      eight.classList.add("active");
    }
    if (e.key === "9" && newState) {
      input += e.key;
      displayCurrent.innerText = input;
      nine.classList.add("active");
    }
    if (e.key === "." && newState && !decimalState) {
      decimalState = true;
      input += e.key;
      displayCurrent.innerText = input;
      decimal.classList.add("active");
    }
    // for clear button
    if (e.key === "Delete") {
      input = "";
      displayCurrent.innerText = input;
      displayLast.innerText = input;
      reset();
      deleteBtn.classList.add("active");
    }
    // for backspace button
    if (e.key === "Backspace") {
      if (input.slice(-1) === ".") {
        decimalState = false;
      }
      input = input.slice(0, -1);
      displayCurrent.innerText = input;
      backspaceBtn.classList.add("active");
    }
    // for addition
    if (e.key === "+" && operator === "") {
      decimalState = false;
      num1 = Number(input);
      displayCurrent.innerText = "";
      displayLast.innerText = `${input} +`;
      add.classList.add("active");
      input = "";
      operator = "+";
    }
    // for subtraction
    if (e.key === "-" && operator === "") {
      decimalState = false;
      num1 = Number(input);
      displayCurrent.innerText = "";
      displayLast.innerText = `${input} -`;
      subtract.classList.add("active");
      input = "";
      operator = "-";
    }
    // for division
    if (e.key === "/" && operator === "") {
      decimalState = false;
      num1 = Number(input);
      displayCurrent.innerText = "";
      displayLast.innerText = `${input} /`;
      divide.classList.add("active");
      input = "";
      operator = "/";
    }
    // for multiplication
    if (e.key === "*" && operator === "") {
      decimalState = false;
      num1 = Number(input);
      displayCurrent.innerText = "";
      displayLast.innerText = `${input} *`;
      multiply.classList.add("active");
      input = "";
      operator = "*";
    }
    // for enter
    if (e.key === "Enter" && operator === "+") {
      num2 = Number(displayCurrent.innerText);
      displayCurrent.innerText = num1 + Number(displayCurrent.innerText);
      displayLast.innerText = `${num1} + ${num2} =`;
      enter.classList.add("active");
      reset();
    }
    if (e.key === "Enter" && operator === "-") {
      num2 = Number(displayCurrent.innerText);
      displayCurrent.innerText = num1 - Number(displayCurrent.innerText);
      displayLast.innerText = `${num1} - ${num2} =`;
      enter.classList.add("active");
      reset();
    }
    if (e.key === "Enter" && operator === "/") {
      num2 = Number(displayCurrent.innerText);
      displayCurrent.innerText = num1 / Number(displayCurrent.innerText);
      displayLast.innerText = `${num1} / ${num2} =`;
      enter.classList.add("active");
      reset();
    }
    if (e.key === "Enter" && operator === "*") {
      num2 = Number(displayCurrent.innerText);
      displayCurrent.innerText = num1 * Number(displayCurrent.innerText);
      displayLast.innerText = `${num1} * ${num2} =`;
      enter.classList.add("active");
      reset();
    }
  });

  window.addEventListener("keyup", (e) => {
    elements = document.getElementsByClassName("active");
    for (element of elements) {
      element.classList.remove("active");
    }
  });

  function reset() {
    input = "";
    num1 = null;
    num2 = null;
    operator = "";
    newState = false;
    decimalState = false;
  }
});
