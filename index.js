let formElement = document.querySelector(".js-form");
let valueElement = document.querySelector(".js-value1");
let inputCurrencyElement = document.querySelector(".js-inputCurrency");
let outputCurrencyElement = document.querySelector(".js-outputCurrency");
let resultElement = document.querySelector(".js-result");

valueElement.focus();

let pln = 1;
let eur = 4.86;
let usd = 4.95;
let gbp = 5.52;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let inputCurrency = inputCurrencyElement.value;
    let outputCurrency = outputCurrencyElement.value;
    let amount = valueElement.value;

    let result;

    switch (inputCurrency) {
        case "EUR":

            switch (outputCurrency) {
                case "GBP":
                    result = (amount * eur) / gbp;
                    break;

                case "EUR":
                    result = amount * 1;
                    break;

                case "USD":
                    result = (amount * eur) / usd;
                    break;

                case "PLN":
                    result = (amount * eur) / pln;
                    break;
            }
            break;

        case "GBP":

            switch (outputCurrency) {
                case "EUR":
                    result = (amount * gbp) / eur;
                    break;

                case "GBP":
                    result = amount * 1;
                    break;

                case "USD":
                    result = (amount * gbp) / usd;
                    break;

                case "PLN":
                    result = (amount * gbp) / pln;
                    break;
            }
            break;

        case "USD":

            switch (outputCurrency) {
                case "EUR":
                    result = (amount * usd) / eur;
                    break;

                case "GBP":
                    result = (amount * usd) / gbp;
                    break;

                case "USD":
                    result = amount * 1;
                    break;

                case "PLN":
                    result = (amount * usd) / pln;
                    break;
            }
            break;

        case "PLN":

            switch (outputCurrency) {
                case "EUR":
                    result = (amount * pln) / eur;
                    break;

                case "GBP":
                    result = (amount * pln) / gbp;
                    break;

                case "USD":
                    result = (amount * pln) / usd;
                    break;

                case "PLN":
                    result = amount * 1;
                    break;
            }
            break;
    }
    resultElement.innerHTML = ` ${result.toFixed(2)} ${outputCurrencyElement.value}`;
});



