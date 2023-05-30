import "../../stylesheets/main.scss";
import "../../stylesheets/pages/_donate.scss";
import "../../js/burgerMenu";

let form = document.forms.donationsAmount;
let amountInput = document.querySelector(".another-amount__input");

form.addEventListener("change", () => {
  for (let index = 0; index < form.length; index++) {
    if (form[index].checked) {
      amountInput.value = form[index].value;
    }
  }
});
amountInput.addEventListener("input", () => {
  switch (amountInput.value) {
    case "5000":
      document.getElementById("donations-amount-5000").checked = true;
      break;
    case "2000":
      document.getElementById("donations-amount-2000").checked = true;
      break;
    case "1000":
      document.getElementById("donations-amount-1000").checked = true;
      break;
    case "500":
      document.getElementById("donations-amount-500").checked = true;
      break;
    case "100":
      document.getElementById("donations-amount-100").checked = true;
      break;
    case "50":
      document.getElementById("donations-amount-50").checked = true;
      break;
    case "25":
      document.getElementById("donations-amount-25").checked = true;
      break;

    default:
      break;
  }
});
