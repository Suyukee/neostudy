const BASE_URL = 'https://v6.exchangerate-api.com/v6/af5f06079ed41eca38533170/latest/RUB';

getCurrency();

async function getCurrency() {
	const list = document.querySelector('.currency-list');
	const currency = list.querySelectorAll('.currency-list__currency');

	const response = await axios.get(BASE_URL);

	currency[0].textContent = response.data.conversion_rates.USD;
	currency[1].textContent = response.data.conversion_rates.EUR;
	currency[2].textContent = response.data.conversion_rates.CAD;
	currency[3].textContent = response.data.conversion_rates.CNY;
	currency[4].textContent = response.data.conversion_rates.CHF;
	currency[5].textContent = response.data.conversion_rates.SGD;
}
