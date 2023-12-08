document.querySelector(".btn").addEventListener("click", function () {
  let num1 = document.querySelector(".num1").value;
  let num2 = document.querySelector(".num2").value;
  let result = document.querySelector(".result");
  let operator = document.querySelector("#operator").value;

  switch (operator) {
    case "plus":
      result.textContent = Number(num1) + Number(num2);
      break;
    case "minus":
      result.textContent = Number(num1) - Number(num2);
      break;
    case "dev":
      result.textContent = Number(num1) / Number(num2);
      break;
    case "multi":
      result.textContent = Number(num1) * Number(num2);
      break;
  }
});
