import "../../stylesheets/main.scss";
import { moveLeft, moveRight, animationEndCarousel } from "../../js/petsCarousel";
import togglePopupTestimonials from "../../js/togglePopupTestimonials";
import { moveSliderTestimonial } from "../../js/testimonialSlider";
import "../../js/burgerMenu";
import { mediaQuery, petsCardActive, petsCardLeft, petsCardRight, btnLeft, btnRight, carousel, sliderRange, testimonialsSlider, burgerMenu, menu } from "../../js/const";

document.body.addEventListener("click", (event) => {
  togglePopupTestimonials(event);
});

if (mediaQuery.matches) {
  petsCardActive.lastElementChild.remove();
  petsCardActive.lastElementChild.remove();
  petsCardLeft.lastElementChild.remove();
  petsCardLeft.lastElementChild.remove();
  petsCardRight.lastElementChild.remove();
  petsCardRight.lastElementChild.remove();
}

btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
carousel.addEventListener("animationend", animationEndCarousel);

sliderRange.addEventListener("input", moveSliderTestimonial);
testimonialsSlider.addEventListener("animationend", () => testimonialSlider.classList.remove("transition-testimonials"));
