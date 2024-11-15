const button = document.querySelector('.section__btn-up');

window.onscroll = () => {
	scrollCheck();
};

const scrollCheck = () => {
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		button.style.display = 'flex';
	} else {
		button.style.display = 'none';
	}
};

const scrollUp = () => {
	document.documentElement.scrollTop = 0;
};
