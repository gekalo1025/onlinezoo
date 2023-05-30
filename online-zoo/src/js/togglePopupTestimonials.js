import { mediaQuery1000, blackout } from "./const";
export default function togglePopupTestimonials(event) {
  if (mediaQuery1000.matches) {
    if (event.target.classList.contains("testimonials-card") && event.target.classList.contains("popup-active")) {
      event.target.classList.remove("popup-active");
      blackout.style.visibility = "hidden";
      blackout.style.zIndex = "0";
    } else if (event.target.classList.contains("testimonials-card")) {
      blackout.style.visibility = "visible";
      blackout.style.zIndex = "5";
      event.target.classList.toggle("popup-active");
    }
  }
}
