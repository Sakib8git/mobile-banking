document.getElementById("add-money-op").addEventListener("click", function () {
  const addMoneySec = document.getElementById("add-money-sec");
  const outMoneySec = document.getElementById("out-money-sec");

  addMoneySec.style.display = "block";
  outMoneySec.style.display = "none";
});

// addd money
document.getElementById("add-btn").addEventListener("click", function (event) {
  event.preventDefault();
  let myBalance = parseInt(document.getElementById("my-balance").innerText);
  const accountNum = document.getElementById("account-num").value;
  const addAmount = parseInt(document.getElementById("add-amount").value);
  const pinNum = parseInt(document.getElementById("pin-num").value);
  const pin = 1122;
  // console.log(addAmount);
  if (accountNum.length < 11) {
    alert("Please input correct account number");
    return;
  }
  if (pinNum !== pin) {
    alert("Please input correct Pin Number");
    return;
  }
  const newBalance = myBalance + addAmount;
  document.getElementById("my-balance").innerText = newBalance;
});

// cash out part
document.getElementById("out-money-op").addEventListener("click", function () {
  const addMoneySec = document.getElementById("add-money-sec");
  const outMoneySec = document.getElementById("out-money-sec");

  addMoneySec.style.display = "none";
  outMoneySec.style.display = "block";
});

document.getElementById("out-btn").addEventListener("click", function (event) {
  event.preventDefault();
  let myBalance = parseInt(document.getElementById("my-balance").innerText);
  const agenttNum = document.getElementById("agent-num").value;
  const outAmount = parseInt(document.getElementById("out-amount").value);
  const pinNum = parseInt(document.getElementById("pin-num-out").value);
  const pin = 1122;
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
  document.getElementById("my-balance").innerText = newBalance;
});
