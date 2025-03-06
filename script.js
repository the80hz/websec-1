document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".calc-input");
    const operatorSelect = document.querySelector(".calc-operator");
    const calculateButton = document.querySelector("button");
    const resultOld = document.querySelector(".calc-result-old");
    const resultNew = document.querySelector(".calc-result-new");
  
    function calculate() {
      const num1 = parseFloat(inputs[0].value);
      const num2 = parseFloat(inputs[1].value);
      const operator = operatorSelect.value;
  
      if (isNaN(num1) || isNaN(num2)) {
        resultNew.textContent = "Ошибка: введите числа!";
        return;
      }
  
      let result;
      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          if (Math.abs(num2) < Number.EPSILON) {
            resultNew.textContent = "Ошибка: деление на ноль";
            return;
          }
          result = num1 / num2;
          break;
        default:
          resultNew.textContent = "Ошибка: неизвестная операция";
          return;
      }
  
      resultOld.textContent = resultNew.textContent;
      resultNew.textContent = `${num1} ${operator} ${num2} = ${result}`;
    }
  
    calculateButton.addEventListener("click", calculate);
  });
  