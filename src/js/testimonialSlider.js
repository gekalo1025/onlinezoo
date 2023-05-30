import { mediaQuery1000, mediaQuery1250, mediaQuery1199, testimonialsSlider, sliderRange } from "./const";
export function moveSliderTestimonial() {
  let positionRight;
  if (mediaQuery1250.matches) {
    positionRight = sliderRange.value * 24.8;
  } else if (mediaQuery1199.matches) {
    positionRight = sliderRange.value * 24.8;
  } else if (mediaQuery1000.matches) {
    positionRight = sliderRange.value * 33.9;
  }
  testimonialsSlider.classList.add("transition-testimonials");

  testimonialsSlider.style.right = `${positionRight}%`;
}
