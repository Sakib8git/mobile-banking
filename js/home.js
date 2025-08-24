const pin = 1122;
// !function get input values for num(Pin and amount)
function getInputValueNumber(id) {
  const inputFildeValue = parseInt(document.getElementById(id).value);
  return inputFildeValue;
}

// !function get input values for String(Account and agent num)
function getInputValueSrt(id) {
  const inputSrtValue = document.getElementById(id).value;
  return inputSrtValue;
}

// !function get  innreText
function getInnerText(id) {
  const insideText = parseInt(document.getElementById(id).innerText);
  return insideText;
}
// !function to set  new innreText
function getInnerNewText(value) {
  const newBalance = document.getElementById("my-balance");
  newBalance.innerText = value;
  console.log(newBalance);
  return newBalance;
}
// !function to toggling
function handleToggler(id) {
  const forms = document.getElementsByClassName("form");
  for (const item of forms) {
    item.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// !function to tOGGLING

//note: *Shared code end

// fixme:addd money
document.getElementById("add-btn").addEventListener("click", function (event) {
  event.preventDefault();
  let myBalance = getInnerText("my-balance");
  const bank = getInputValueSrt("bank");
  const accountNum = getInputValueSrt("account-num");
  const addAmount = getInputValueNumber("add-amount");
  const pinNum = getInputValueNumber("pin-num");

  if (accountNum.length < 11) {
    alert("Please input correct account number");
    return;
  }
  if (pinNum !== pin) {
    alert("Please input correct Pin Number");
    return;
  }
  const newBalance = myBalance + addAmount;
  getInnerNewText(newBalance);
});
// *_________toggler

document.getElementById("add-money-op").addEventListener("click", function () {
  handleToggler("add-money-sec");
});

document.getElementById("out-money-op").addEventListener("click", function () {
  handleToggler("out-money-sec");
});
document
  .getElementById("transfer-money-op")
  .addEventListener("click", function () {
    handleToggler("transfer-money-sec");
  });

document
  .getElementById("bonus-money-op")
  .addEventListener("click", function () {
    handleToggler("bonus-money-sec");
  });

document.getElementById("pay-money-op").addEventListener("click", function () {
  handleToggler("pay-money-sec");
});

document
  .getElementById("transactions-money-op")
  .addEventListener("click", function () {
    handleToggler("transactions-money-sec");
  });

// !_________toggler end

// fixme:cash out part

document.getElementById("out-btn").addEventListener("click", function (event) {
  event.preventDefault();
  let myBalance = getInnerText("my-balance");
  const agenttNum = getInputValueSrt("agent-num");
  const outAmount = getInputValueNumber("out-amount");
  const pinNum = getInputValueNumber("pin-num-out");

  // console.log(addAmount);
  if (agenttNum.length < 11) {
    alert("Please input correct agent number");
    return;
  }
  if (pinNum !== pin) {
    alert("Please input correct Pin Number");
    return;
  }
  const newBalance = myBalance - outAmount;
  getInnerNewText(newBalance);
});
