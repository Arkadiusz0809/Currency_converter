{
    
    CalculateResult = (inputCurrency, outputCurrency, amount) => {

        const pln = 1;
        const eur = 4.86;
        const usd = 4.95;
        const gbp = 5.52;

        switch (inputCurrency) {
            case "EUR":

                switch (outputCurrency) {
                    case "GBP":
                        return (amount * eur) / gbp;


                    case "EUR":
                        return amount * 1;


                    case "USD":
                        return (amount * eur) / usd;


                    case "PLN":
                        return (amount * eur) / pln;

                }


            case "GBP":

                switch (outputCurrency) {
                    case "EUR":
                        return (amount * gbp) / eur;


                    case "GBP":
                        return amount * 1;


                    case "USD":
                        return (amount * gbp) / usd;


                    case "PLN":
                        return (amount * gbp) / pln;

                }


            case "USD":

                switch (outputCurrency) {
                    case "EUR":
                        return (amount * usd) / eur;


                    case "GBP":
                        return (amount * usd) / gbp;


                    case "USD":
                        return amount * 1;


                    case "PLN":
                        return (amount * usd) / pln;

                }


            case "PLN":

                switch (outputCurrency) {
                    case "EUR":
                        return (amount * pln) / eur;


                    case "GBP":
                        return (amount * pln) / gbp;


                    case "USD":
                        return (amount * pln) / usd;


                    case "PLN":
                        return amount * 1;

                }

        };
    };
    const updateResultText = (result, outputCurrency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${result.toFixed(2)} ${outputCurrency}`;
    };


    const onFormSubmit = (event) => {
        event.preventDefault();


        const valueElement = document.querySelector(".js-value1");
        const inputCurrencyElement = document.querySelector(".js-inputCurrency");
        const outputCurrencyElement = document.querySelector(".js-outputCurrency");


        const inputCurrency = inputCurrencyElement.value;
        const outputCurrency = outputCurrencyElement.value;
        const amount = valueElement.value;
        

        let result = CalculateResult(amount, outputCurrency, inputCurrency);

        updateResultText(result, outputCurrency);
    };


    const init = () => {
        const formElement = document.querySelector(".js-form");
        

        formElement.addEventListener("submit", onFormSubmit);
        formElement.focus();
    };

    init();
}