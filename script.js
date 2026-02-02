let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");

let exp = " "; //store current input

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let val = btn.innerText;

    if (val === "AC") {
      exp = " ";
      display.value = "0";
    } 
    else if (val === "DE") {
      exp = exp.slice(0, -1);// remove last character from exp
      display.value = exp || "0";
    } 
    else if (val === "=") {
      try {
        exp = eval(exp).toString(); //not use eval for type text
        display.value = exp;
      } catch {
        display.value = "Error";
        exp = "";
      }
    } 
    else {
      exp += val;
      display.value = exp;
    }
  });
});
