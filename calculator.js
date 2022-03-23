let total = 0;
let strbuffer = "0";
let operator;
const entry = document.querySelector(".result-screen");

function makesNumber(value) {
    if (strbuffer === "0") {
        strbuffer = value;
    } else {
        strbuffer += value;
    }
}

function makesSymbol(symbol) {
    if (symbol === "C") {
        strbuffer = "0";
        total = 0;
    } else if (symbol === "=") {
        if (operator === null) {
            return;
        }
        mathOperations(parseInt(strbuffer));
        operator = null;
        strbuffer = +total;
        total = 0;
    } else if (symbol === "←") {
        if (strbuffer.length === 1) {
            strbuffer = "0";
        } else {
            strbuffer = strbuffer.substring(0, strbuffer.length - 1);
        }
    } else {
        if (strbuffer === "0") {
            return;
          }
        
          const n = parseInt(strbuffer);
          if (total === 0) {
            total = n;
          } else {
            mathOperations(n);
          }
        
          operator = symbol;
          strbuffer = "0";
    }
}

function mathOperations(n) {
  if (operator === "+") {
    total += n;
  } else if (operator === "-") {
    total -= n;
  } else if (operator === "x") {
    total *= n;
  } else {
    total /= n;
  }
}

function setListeners() {
    document.querySelector(".calc-rows").addEventListener("click", function(event) {
        buttonClicked(event.target.innerText);
    });
}

setListeners();

function buttonClicked(value) {
    if (isNaN(parseInt(value))) {
        makesSymbol(value);
    } else {
        makesNumber(value);
    }
    entry.innerText = strbuffer;
}