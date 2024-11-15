let offset = 0;

const sliderLine = document.querySelector('.slider__line');
const sliderPrev = document.querySelector('.nav__btn-prev');
const sliderNext = document.querySelector('.nav__btn-next');

sliderPrev.disabled = true;

document.querySelector('.nav__btn-next').addEventListener('click', () => {
	if (offset === 2 * (256 + 3)) {
		offset += 256 + 3 + 128 + 3;
		sliderLine.style.left = -offset + 'px';
		sliderPrev.disabled = false;
		sliderNext.disabled = true;
	} else {
		offset += 256 + 3;
		sliderLine.style.left = -offset + 'px';
		sliderPrev.disabled = false;
	}
});

document.querySelector('.nav__btn-prev').addEventListener('click', () => {
	if (offset === 3 * (256 + 3) + 128 + 3) {
		offset -= 256 + 3 + 128 + 3;
		sliderLine.style.left = -offset + 'px';
		sliderNext.disabled = false;
	} else if (offset === 256 + 3) {
		offset -= 256 + 3;
		sliderLine.style.left = -offset + 'px';
		sliderPrev.disabled = true;
	} else {
		offset -= 256 + 3;
		sliderLine.style.left = -offset + 'px';
		sliderPrev.disabled = false;
	}
});
