// login btn function
document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mobileNum = 1303330278;
    const pin = 1122;
    const phnNumSrt = document.getElementById("phn-num").value;
    const phnNum = parseInt(phnNumSrt);
    const pinNumSrt = document.getElementById("pin-num").value;
    const pinNum = parseInt(pinNumSrt);
    if (phnNum === mobileNum && pinNum === pin) {
      window.location.href = "./home.html";
    } else {
      alert("Invalid Input");
    }
  });
