{

    const convertAmountInputCurrency = (inputCurrencyElement) => {
        const inputCurrency = inputCurrencyElement.value;

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

    const convertAmountOutputCurrency = (outputCurrencyElement) => {
        const outputCurrency = outputCurrencyElement.value;

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

    const calculateResult = (inputCurrencyElement, outputCurrencyElement, amount) => {

        return (convertAmountInputCurrency(inputCurrencyElement) * amount) / convertAmountOutputCurrency(outputCurrencyElement);

    };

    const updateResultText = (resultElement, inputCurrencyElement, outputCurrencyElement, amount, resultCurrency) => {
        resultElement.innerText = `${calculateResult(inputCurrencyElement,outputCurrencyElement, amount).toFixed(2)} ${resultCurrency}`;

    };


    const onFormSubmit = () => {

        const amountElement = document.querySelector(".js-amount");
        const inputCurrencyElement = document.querySelector(".js-inputCurrency");
        const outputCurrencyElement = document.querySelector(".js-outputCurrency");
        const resultElement = document.querySelector(".js-result");

        const resultCurrency = outputCurrencyElement.value;
        const amount = amountElement.value;

        updateResultText(resultElement, inputCurrencyElement, outputCurrencyElement, amount, resultCurrency);
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