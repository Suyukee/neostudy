const fullSlide = 256 + 3;
const halfSlide = 128 + 3;

sliderInit('slider', fullSlide, halfSlide);

function sliderInit(elementId, fullSlide, halfSlide) {
	const slider = document.getElementById(elementId);
	const sliderLine = slider.querySelector('.slider__line');
	const sliderPrev = slider.querySelector('.nav__btn-prev');
	const sliderNext = slider.querySelector('.nav__btn-next');

	let offset = 0;
	sliderPrev.disabled = true;

	document.querySelector('.nav__btn-next').addEventListener('click', () => {
		if (offset === 2 * fullSlide) {
			offset += fullSlide + halfSlide;
			sliderLine.style.left = -offset + 'px';
			sliderPrev.disabled = false;
			sliderNext.disabled = true;
		} else {
			offset += fullSlide;
			sliderLine.style.left = -offset + 'px';
			sliderPrev.disabled = false;
		}
	});

	document.querySelector('.nav__btn-prev').addEventListener('click', () => {
		if (offset === 3 * fullSlide + halfSlide) {
			offset -= fullSlide + halfSlide;
			sliderLine.style.left = -offset + 'px';
			sliderNext.disabled = false;
		} else if (offset === fullSlide) {
			offset -= fullSlide;
			sliderLine.style.left = -offset + 'px';
			sliderPrev.disabled = true;
		} else {
			offset -= fullSlide;
			sliderLine.style.left = -offset + 'px';
			sliderPrev.disabled = false;
		}
	});
}
