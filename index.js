function filter(elementId) {
	const filter = document.getElementById(elementId);
	const inputValue = filter.querySelector('.filter__input').value.toLowerCase();
	const list = filter.querySelector('.filter__user-list');
	const li = list.getElementsByTagName('li');

	for (i = 0; i < li.length; i++) {
		const itemTextValue = li[i].textContent.toLowerCase();

		if (itemTextValue.indexOf(inputValue) !== -1) {
			li[i].style.display = '';
		} else {
			li[i].style.display = 'none';
		}
	}
}
