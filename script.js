var num1 = Number(prompt("What is number 1?"));

if (num1) {
  var operator = prompt(`Enter an operator("+, -, *, /")`);
  if (
    operator === "+" ||
    operator === "-" ||
    operator === "*" ||
    operator === "/"
  ) {
    var num2 = Number(prompt("Enter another number"));
    if (num2) {
      if (operator === "+") {
        document.body.querySelector(
          ".Conditional"
        ).innerHTML = `Your answer is ${num1 + num2}`;
      } else if (operator === "-") {
        document.body.querySelector(
          ".Conditional"
        ).innerHTML = `Your answer is ${num1 - num2}`;
      } else if (operator === "*") {
        document.body.querySelector(
          ".Conditional"
        ).innerHTML = `Your answer is ${num1 * num2}`;
      } else {
        document.body.querySelector(
          ".Conditional"
        ).innerHTML = `Your answer is ${num1 / num2}`;
      }
    } else {
      document.body.querySelector(".Conditional").innerHTML = "Invaild Number";
    }
  } else {
    document.body.querySelector(".Conditional").innerHTML = "Invaild operator";
  }
} else {
  document.body.querySelector(".Conditional").innerHTML = "Invaild Number";
}