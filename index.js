const form = document.querySelector('.form');
const formErrorLogin = form.querySelector('.item__login-error');
const formErrorPassword = form.querySelector('.item__password-error');
const login = document.querySelector('input[name=login]').value;
const password = document.querySelector('input[name=password]').value;

const validateLogin = () => {
	const numberWords = login.split(' ').length;

	const regExp = /[^А-Яа-яЁё ]/g;

	if (!login) {
		return 'ФИО не может быть пустым';
	} else if (numberWords < 3) {
		return 'ФИО указано не полностью или с ошибкой';
	} else if (regExp.test(login)) {
		return 'ФИО должно состоять только из русских букв';
	} else return '';
};

const validatePassword = () => {
	const regExp = /^[a-zа-яё0-9]/;

	if (!password) {
		return 'Пароль не может быть пустым';
	} else if (regExp.test(password)) {
		return 'Пароль должен состоять только из букв и цифр';
	} else return '';
};

form.addEventListener('submit', (event) => {
	event.preventDefault();

	formErrorLogin.textContent = validateLogin();
	formErrorPassword.textContent = validatePassword();

	console.log(formErrorLogin.textContent, formErrorPassword.textContent);

	if (formErrorLogin === '' && formErrorPassword === '') {
		form.submit();
	}
});
