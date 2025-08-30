const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("number") || button.classList.contains("operator") || button.classList.contains("decimal")) {
      currentInput += value;
      result.value = currentInput;
    } 
    else if (button.classList.contains("clear")) {
      currentInput = "";
      result.value = "";
    } 
    else if (button.classList.contains("equals")) {
      try {
        currentInput = eval(currentInput); // ⚠️ Simple, but risky if used in real projects
        result.value = currentInput;
      } catch {
        result.value = "Error";
        currentInput = "";
      }
    }
  });
});
