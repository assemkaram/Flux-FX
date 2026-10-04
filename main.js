const dropdown = document.querySelector("#country");
const dropdown2 = document.querySelector("#country2");
const amountInput = document.querySelector("#amount");
const resultDiv = document.querySelector("#result");

let fromCurrency = "";
let toCurrency = "";

async function fetchCountries() {
    try {
        const response = await fetch(
            "https://api.frankfurter.dev/v1/currencies"
        );
                console.log(response);

        const countries = await response.json();
                    console.log(countries);

        populateDropdown(countries);
    } catch (error) {
        console.error("Error fetching countries:", error);
    }
}

async function convert(amount, fromCurrency, toCurrency) {
    try {
        const response = await fetch(
            `https://api.frankfurter.dev/v1/latest?amount=${amount}&base=${fromCurrency}&symbols=${toCurrency}`
        );

        const data = await response.json();

        return data.rates[toCurrency];

    } catch (error) {
        console.error("Error converting currency:", error);
    }
}

function populateDropdown(countries) {

    for (const country in countries) {
        const option = document.createElement("option");

        option.value = country;
        option.textContent = `${country} - ${countries[country]}`;

        dropdown.appendChild(option);
    }

    for (const country in countries) {
        const option = document.createElement("option");

        option.value = country;
        option.textContent = `${country} - ${countries[country]}`;

        dropdown2.appendChild(option);
    }
}

dropdown.addEventListener("change", () => {
    fromCurrency = dropdown.value;
});

dropdown2.addEventListener("change", () => {
    toCurrency = dropdown2.value;
});

amountInput.addEventListener("input", async () => {

    const amount = parseFloat(amountInput.value);

    if (
        !isNaN(amount) &&
        fromCurrency &&
        toCurrency
    ) {
        const convertedAmount = await convert(
            amount,
            fromCurrency,
            toCurrency
        );
        resultDiv.textContent = convertedAmount;
    }
});

fetchCountries();