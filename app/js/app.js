// Cll Slider class
class Slider {
	init() {
		this.slider = new deskbookersSlider('section');
		this.slider.init();
	}
}

// We create a new slider instance
var slider = new Slider();

// Start the slider on load
window.onload = slider.init();

console.log("Hey there console lurker! Isn't curiosity incredible?");