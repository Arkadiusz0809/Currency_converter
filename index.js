{

    const convertAmountInputCurrency = (inputCurrency) => {

        switch (inputCurrency) {
            case "GBP":
                return 5.52;

            case "EUR":
                return 4.86;

            case "USD":
                return 4.95;

            case "PLN":
                return 1;
        }
    };

    const convertAmountOutputCurrency = (outputCurrency) => {
        
        switch (outputCurrency) {
            case "GBP":
                return 5.52;

            case "EUR":
                return 4.86;

            case "USD":
                return 4.95;

            case "PLN":
                return 1;
        }
    };

    const calculateResult = (inputCurrency, outputCurrency, amount) => {

        return (convertAmountInputCurrency(inputCurrency) * amount) / convertAmountOutputCurrency(outputCurrency);

    };

    const updateResultText = (resultElement, outputCurrency, result) => {
        resultElement.innerHTML = ` ${result.toFixed(2)} ${outputCurrency}`;

    };


    const onFormSubmit = () => {

        const valueElement = document.querySelector(".js-value1");
        const inputCurrencyElement = document.querySelector(".js-inputCurrency");
        const outputCurrencyElement = document.querySelector(".js-outputCurrency");
        const resultElement = document.querySelector(".js-result");

        const inputCurrency = inputCurrencyElement.value;
        const outputCurrency = outputCurrencyElement.value;
        const amount = valueElement.value;

        const result = calculateResult(amount, outputCurrency, inputCurrency);

        updateResultText(resultElement, outputCurrency, result);
    };


    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            onFormSubmit();
        });
    };

    init();

}