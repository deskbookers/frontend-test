// Renders a view with any new visible section of the slider
class View {
	static showSlide(slides, current) {
		slides.map(slide => {slide.style.opacity = 0});
		current.style.opacity = 1;
	}
}

// Main slider class
class deskbookersSlider {

	// Cocnstruct and assign relevant selectors
	constructor(slides) {
		this.num = 0;
		this.slides = [].slice.call(document.querySelectorAll(slides));
		this.current = this.slides[this.num];
		this.left = document.querySelector('#left');
		this.right = document.querySelector('#right');
	}

	// Init the slider
	init() {
		View.showSlide(this.slides, this.current);
		this.onClick();
	}

	// Click events
	onClick() {
		this.left.addEventListener('click', () => this.changeSlide('prev'));
		this.right.addEventListener('click', () => this.changeSlide('next'));
	}

	// Change the slide
	changeSlide(btn) {
		var len = this.slides.length - 1;


		if (btn == 'prev')
			if (this.num > 0)
				this.num--;
			else
				this.num = len;

		if (btn == 'next')
			if (this.num < len)
				this.num++;
			else
				this.num = 0;

		this.current = this.slides[this.num];
		View.showSlide(this.slides, this.current);
	}
	
}