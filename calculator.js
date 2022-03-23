let total = 0;
let auto = "0";
let prevOp;
const entry = document.querySelector(".result-screen");

function click(value) {
  if (isNaN(parseInt(value))) {
    submit(value);
  } else {
    addNum(value);
  }
  redisp();
}

function submit(value) {
  switch (value) {
    case "C":
      auto = "0";
      total = 0;
      break;
    case "=":
      if (prevOp === null) {
        return;
      }
      mathOp(parseInt(auto));
      prevOp = null;
      auto = +total;
      total = 0;
      break;
    case "←":
      if (auto.length === 1) {
        auto = "0";
      } else {
        auto = auto.substring(0, auto.length - 1);
      }
      break;
    case "+":
    case "-":
    case "×":
    case "÷":
      math(value);
      break;
  }
}


function addNum(value) {
  if (auto === "0") {
    auto = value;
  } else {
    auto += value;
  }
}




function redisp() {
  entry.innerText = auto;
}

function input() {
  document.querySelector(".calc-rows").addEventListener("click", function(event) {
    click(event.target.innerText);
  });
}


function math(value) {
  if (auto === "0") {
    return;
  }

  const defNum = parseInt(auto);
  if (total === 0) {
    total = defNum;
  } else {
    mathOp(defNum);
  }

  prevOp = value;

  auto = "0";
}

function mathOp(defNum) {
  if (prevOp === "+") {
    total += defNum;
  } else if (prevOp === "-") {
    total -= defNum;
  } else if (prevOp === "×") {
    total *= defNum;
  } else {
    total /= defNum;
  }
}

input();