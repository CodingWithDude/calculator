window.addEventListener("load", function () {
  const displayCurrent = document.querySelector(".displayCurrent");
  const displayLast = document.querySelector(".displayLast");
  let input = "";
  let num1 = null;
  let num2 = null;
  let operator = "";
  let newState = true;

  window.addEventListener("keydown", (e) => {
    if (!newState) {
      displayCurrent.innerText = "";
      displayLast.innerText = "";
      newState = true;
    }
    if (
      (e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9") &&
      newState
    ) {
      input += e.key;
      displayCurrent.innerText = input;
    }
    // for clear button
    if (e.key === "Delete") {
      input = "";
      displayCurrent.innerText = input;
      displayLast.innerText = input;
    }
    // for delete button
    if (e.key === "Backspace") {
      input = input.slice(0, -1);
      displayCurrent.innerText = input;
    }
    // for addition
    if (e.key === "+" && operator === "") {
      num1 = Number(input);
      displayCurrent.innerText = "";
      displayLast.innerText = `${input} +`;
      input = "";
      operator = "+";
    }
    // for subtraction
    if (e.key === "-" && operator === "") {
      num1 = Number(input);
      displayCurrent.innerText = "";
      displayLast.innerText = `${input} -`;
      input = "";
      operator = "-";
    }
    // for division
    if (e.key === "/" && operator === "") {
      num1 = Number(input);
      displayCurrent.innerText = "";
      displayLast.innerText = `${input} /`;
      input = "";
      operator = "/";
    }
    // for multiplication
    if (e.key === "*" && operator === "") {
      num1 = Number(input);
      displayCurrent.innerText = "";
      displayLast.innerText = `${input} *`;
      input = "";
      operator = "*";
    }
    // for enter
    if (e.key === "Enter" && operator === "+") {
      num2 = Number(displayCurrent.innerText);
      displayCurrent.innerText = num1 + Number(displayCurrent.innerText);
      displayLast.innerText = `${num1} + ${num2} =`;
      reset();
    }
    if (e.key === "Enter" && operator === "-") {
      num2 = Number(displayCurrent.innerText);
      displayCurrent.innerText = num1 - Number(displayCurrent.innerText);
      displayLast.innerText = `${num1} - ${num2} =`;
      reset();
    }
    if (e.key === "Enter" && operator === "/") {
      num2 = Number(displayCurrent.innerText);
      displayCurrent.innerText = num1 / Number(displayCurrent.innerText);
      displayLast.innerText = `${num1} / ${num2} =`;
      reset();
    }
    if (e.key === "Enter" && operator === "*") {
      num2 = Number(displayCurrent.innerText);
      displayCurrent.innerText = num1 * Number(displayCurrent.innerText);
      displayLast.innerText = `${num1} * ${num2} =`;
      reset();
    }
    console.log(e.key, input);
  });

  function reset() {
    input = "";
    num1 = null;
    num2 = null;
    operator = "";
    newState = false;
  }
});
