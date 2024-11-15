const form = document.querySelector('.form');
const formErrorLogin = form.querySelector('.item__login-error');
const formErrorPassword = form.querySelector('.item__password-error');
const login = form.querySelector('input[name=login]');
const password = form.querySelector('input[name=password]');

const validateLogin = () => {
	const numberWords = login.value.split(' ').length;

	const regExp = /^[a-яА-Я\-\s]+$/;

	if (login.value === '') {
		return 'ФИО не может быть пустым';
	}

	if (login.value.length < 6) {
		return 'ФИО слишком короткое';
	}

	if (numberWords < 3) {
		return 'ФИО указано не полностью или с ошибкой';
	}

	console.log(login.value, regExp.test(login.value));
	if (!regExp.test(login.value)) {
		return 'ФИО должно состоять из русских букв';
	}

	return '';
};

const validatePassword = () => {
	const regExp = /^\w+$/;

	if (password.value === '') {
		return 'Пароль не может быть пустым';
	}

	if (password.value.length < 6) {
		return 'Пароль слишком короткий';
	}

	if (!regExp.test(password.value)) {
		return 'Пароль должен состоять только из латинских букв и цифр';
	}

	return '';
};

form.addEventListener('submit', (event) => {
	event.preventDefault();

	formErrorLogin.textContent = validateLogin();
	formErrorPassword.textContent = validatePassword();

	console.log(formErrorLogin.textContent, formErrorPassword.textContent);

	if (formErrorLogin.textContent !== '') {
		login.style.borderBottom = '1px solid red';
	}

	if (formErrorPassword.textContent !== '') {
		password.style.borderBottom = '1px solid red';
	}

	if (formErrorLogin.textContent === '' && formErrorPassword.textContent === '') {
		login.style.borderBottom = '1px solid var(--foreground)';
		password.style.borderBottom = '1px solid red';
		form.submit();
	}
});
