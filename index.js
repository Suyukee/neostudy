function filter() {
	const filter = document.querySelector('.main__input').value.toLowerCase();
	const list = document.querySelector('.user-list');
	const li = list.getElementsByTagName('li');

	for (i = 0; i < li.length; i++) {
		const txtValue = li[i].textContent.toLowerCase();

		if (txtValue.indexOf(filter) !== -1) {
			li[i].style.display = '';
		} else {
			li[i].style.display = 'none';
		}
	}
}
