feather.replace();

const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const baseCurrency = document.getElementById("base-currency");
const getRatesBtn = document.getElementById("get-rates-btn");
const exchangeRates = document.getElementById("exchange-rates");
const convertMode = document.getElementById("convert-mode");
const exchangeMode = document.getElementById("exchange-mode");
const toggleBtns = document.querySelectorAll(".toggle-btn");

// Use a free API key from ExchangeRate-API
const apiKey = "b46f38793af093192c0faf54";

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggleBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const mode = btn.getAttribute("data-mode");
    if (mode === "convert") {
      convertMode.style.display = "flex";
      exchangeMode.style.display = "none";
    } else {
      convertMode.style.display = "none";
      exchangeMode.style.display = "flex";
    }
  });
});
//https://v6.exchangerate-api.com/v6/92df7b9e6609dfc88e463f84/latest/${from}
convertBtn.addEventListener("click", () => {
  const amount = amountInput.value;
  const from = fromCurrency.value;
  const to = toCurrency.value;
  async function i1(){
    try{
    let p1=await fetch(`https://v6.exchangerate-api.com/v6/92df7b9e6609dfc88e463f84/latest/${from}`)
    let o2=await p1.json()
    console.log(o2.conversion_rates)
    }
    catch(err){
      console.log(err)
    }
  }
  i1()
});
getRatesBtn.addEventListener("click", () => {
  const base = baseCurrency.value;
  fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${base}`)
    .then((response) => response.json())
    .then((data) => {
      let ratesHtml = "<h3>Exchange Rates</h3><ul>";
      for (const [currency, rate] of Object.entries(data.conversion_rates)) {
        if (currency !== base) {
          ratesHtml += `<li><span class="currency-icon">${getCurrencySymbol(
            currency
          )}</span>${currency}: ${rate.toFixed(4)}</li>`;
        }
      }
      ratesHtml += "</ul>";
      exchangeRates.innerHTML = ratesHtml;
    })
    .catch((error) => {
      console.error("Error:", error);
      exchangeRates.textContent = "An error occurred. Please try again.";
    });
});

function getCurrencySymbol(currency) {
  const symbols = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
  };
  return symbols[currency] || currency;
}
