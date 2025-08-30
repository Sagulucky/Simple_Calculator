const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("number") || button.classList.contains("operator") || button.classList.contains("decimal") || button.classList.contains("zero") ) {
      currentInput += value;
      result.value = currentInput;
    } 
    else if (button.classList.contains("clear")) {
      currentInput = "";
      result.value = "";
    }
    else if (button.classList.contains("del")) {
      currentInput = currentInput.slice(0, -1);
      result.value = currentInput;
    } 
    else if (button.classList.contains("equals")) {
      try {
        currentInput = eval(currentInput);
        result.value = currentInput;
      } catch {
        result.value = "Error";
        currentInput = "";
      }
    }
  });
});
