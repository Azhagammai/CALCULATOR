const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      expression = "";
      display.value = "";
    } else if (value === "=") {
      try {
       
        let result = eval(expression);
        display.value = result;
        expression = result.toString();
      } catch (error) {
        display.value = "Error";
        expression = "";
      }
    } else if (value === "%") {
      try {
     
        let lastNumber = expression.match(/(\d+\.?\d*)$/);
        if (lastNumber) {
          let percentValue = (parseFloat(lastNumber[0]) / 100).toString();
          expression = expression.replace(/(\d+\.?\d*)$/, percentValue);
        }
        display.value = expression;
      } catch {
        display.value = "Error";
        expression = "";
      }
    } else {
      if ("+-*/".includes(value) && "+-*/".includes(expression.slice(-1))) {
        expression = expression.slice(0, -1); 
      }

      expression += value;
      display.value = expression;
    }
  });
});
